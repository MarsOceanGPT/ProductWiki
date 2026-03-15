import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

const SOURCE_DIR = "/Users/marsocean/Downloads/Content Master/Product Wiki"
const TARGET_DIR = "/Users/marsocean/Downloads/Content Master/Product Wiki Site/content"
const INCLUDED_PATHS = ["README.md", "01-产品库", "02-打法库", "03-人物库"]
const EXCLUDED_BASENAMES = new Set(["README-AI产品卡片库.md", "README-新产品卡片.md"])
const LABEL_OVERRIDES = {
  "产品卡片-Cursor.md": "Cursor",
  "产品卡片-Perplexity.md": "Perplexity",
  "产品卡片-ElevenLabs.md": "ElevenLabs",
  "产品卡片-NotebookLM.md": "NotebookLM",
  "产品卡片-Character.ai.md": "Character.ai",
  "产品卡片-DeepSeek.md": "DeepSeek",
}
const PERMALINKS = {
  "01-产品库/产品卡片-Cursor.md": "/products/cursor",
  "01-产品库/产品卡片-Perplexity.md": "/products/perplexity",
  "01-产品库/产品卡片-ElevenLabs.md": "/products/elevenlabs",
  "01-产品库/产品卡片-NotebookLM.md": "/products/notebooklm",
  "01-产品库/产品卡片-Character.ai.md": "/products/character-ai",
  "01-产品库/产品卡片-DeepSeek.md": "/products/deepseek",
  "02-打法库/01-机会识别/吃技术升级红利.md": "/playbooks/tech-upgrade-tailwind",
  "02-打法库/01-机会识别/把玩法封装成产品.md": "/playbooks/package-workflow-into-product",
  "02-打法库/01-机会识别/打开能力门槛新市场.md": "/playbooks/lower-skill-barriers",
  "02-打法库/01-机会识别/打开价格门槛新市场.md": "/playbooks/lower-price-barriers",
  "02-打法库/02-产品设计/Copilot 范式.md": "/playbooks/copilot-pattern",
  "02-打法库/02-产品设计/Agent 代理式.md": "/playbooks/agent-pattern",
  "02-打法库/02-产品设计/Chat 对话式.md": "/playbooks/chat-pattern",
  "02-打法库/02-产品设计/生成式界面.md": "/playbooks/generative-interface",
  "02-打法库/03-MVP策略/简易拼装.md": "/playbooks/assemble-fast",
  "02-打法库/03-MVP策略/技术适配.md": "/playbooks/adapt-to-new-tech",
  "02-打法库/03-MVP策略/关键功能聚焦.md": "/playbooks/focus-on-key-feature",
  "02-打法库/04-PMF验证/迫切刚需.md": "/playbooks/urgent-demand",
  "02-打法库/04-PMF验证/别无选择.md": "/playbooks/only-choice",
  "02-打法库/05-增长引擎/借势崛起.md": "/playbooks/ride-the-wave",
  "02-打法库/05-增长引擎/病毒传播-产品即内容.md": "/playbooks/product-as-content",
  "02-打法库/05-增长引擎/开源合作.md": "/playbooks/open-source-collaboration",
  "02-打法库/05-增长引擎/SEO 内容营销.md": "/playbooks/seo-content-marketing",
  "02-打法库/05-增长引擎/社交粘性.md": "/playbooks/social-stickiness",
  "02-打法库/06-商业化/按访问-订阅.md": "/playbooks/subscription-pricing",
  "02-打法库/06-商业化/按消耗-请求数.md": "/playbooks/usage-based-pricing",
  "02-打法库/07-护城河/AI就是壁垒.md": "/playbooks/ai-as-moat",
  "02-打法库/07-护城河/工作流嵌入.md": "/playbooks/workflow-embed",
  "02-打法库/07-护城河/数据飞轮.md": "/playbooks/data-flywheel",
  "02-打法库/07-护城河/品牌信任.md": "/playbooks/brand-trust",
  "02-打法库/07-护城河/源材料锁定.md": "/playbooks/source-lockin",
  "02-打法库/07-护城河/Persona 锁定.md": "/playbooks/persona-lockin",
  "02-打法库/07-护城河/开源生态.md": "/playbooks/open-source-ecosystem",
  "02-打法库/07-护城河/效率优先.md": "/playbooks/efficiency-first",
  "03-人物库/Michael Truell.md": "/people/michael-truell",
  "03-人物库/Aravind Srinivas.md": "/people/aravind-srinivas",
  "03-人物库/Piotr Dąbkowski.md": "/people/piotr-dabkowski",
  "03-人物库/Mati Staniszewski.md": "/people/mati-staniszewski",
  "03-人物库/Raiza Martin.md": "/people/raiza-martin",
  "03-人物库/Steven Johnson.md": "/people/steven-johnson",
  "03-人物库/Noam Shazeer.md": "/people/noam-shazeer",
  "03-人物库/Daniel De Freitas.md": "/people/daniel-de-freitas",
  "03-人物库/梁文锋.md": "/people/liang-wenfeng",
}

function extractTitle(content, fallback) {
  const heading = content.match(/^#\s+(.+)$/m)
  return heading?.[1]?.trim() || fallback
}

function rewriteWikilinks(content) {
  const rewrites = Object.entries(PERMALINKS).map(([relativePath, permalink]) => {
    const fileName = path.basename(relativePath)
    return {
      from: fileName.replace(/\.md$/, ""),
      target: permalink.slice(1),
      label: LABEL_OVERRIDES[fileName] ?? fileName.replace(/\.md$/, ""),
    }
  })

  let next = content

  for (const rewrite of rewrites) {
    const escapedFrom = rewrite.from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const pattern = new RegExp(`\\[\\[${escapedFrom}(\\|[^\\]]+)?\\]\\]`, "g")
    next = next.replace(pattern, (_, suffix = "") => {
      const resolvedSuffix = suffix || `|${rewrite.label}`
      return `[[${rewrite.target}${resolvedSuffix}]]`
    })
  }

  return next
}

function mergeAliases(frontmatter, relativePath, fallbackTitle) {
  const aliases = new Set()
  const existingAliases = Array.isArray(frontmatter.aliases)
    ? frontmatter.aliases
    : frontmatter.alias != null
      ? [frontmatter.alias]
      : []

  for (const alias of existingAliases) {
    aliases.add(alias.toString())
  }

  aliases.add(relativePath.replace(/\.md$/, ""))
  aliases.add(path.basename(relativePath, ".md"))
  aliases.add(fallbackTitle)

  return [...aliases]
}

function normalizeFrontmatter(frontmatter, content, filePath, isIndex, relativePath) {
  const next = { ...frontmatter }
  const fallbackTitle = path.basename(filePath, ".md")
  const isPerson = next.type === "person" || next.类型 === "人物"
  next.title =
    next.title ||
    next.名称 ||
    (isPerson ? next.name_cn : undefined) ||
    next.name ||
    extractTitle(content, fallbackTitle)

  if (isIndex) {
    next.title = "AI 产品策略图谱 — Product Wiki"
    next.description = "一个 Wikipedia 式的知识网络：AI 产品 × 打法 × 人物，双向链接，持续更新。"
    next.permalink = "/"
  }

  const mappedPermalink = PERMALINKS[relativePath]
  if (mappedPermalink && !isIndex) {
    next.aliases = mergeAliases(next, relativePath, fallbackTitle)
    delete next.alias
    delete next.permalink
  }

  return next
}

function resolveDestination(relativePath, isIndex) {
  if (isIndex) {
    return path.join(TARGET_DIR, "index.md")
  }

  const mappedPermalink = PERMALINKS[relativePath]
  if (mappedPermalink) {
    return path.join(TARGET_DIR, mappedPermalink.slice(1) + ".md")
  }

  return path.join(TARGET_DIR, relativePath)
}

async function sanitizeMarkdown(filePath, content, isIndex, relativePath) {
  if (!content.startsWith("---\n")) {
    const body = content.replace(/^\n+/, "")
    return matter.stringify(body, normalizeFrontmatter({}, body, filePath, isIndex, relativePath))
  }

  try {
    const parsed = matter(content)
    const body = parsed.content.replace(/^\n+/, "")
    const data = normalizeFrontmatter(parsed.data, body, filePath, isIndex, relativePath)
    return matter.stringify(body, data)
  } catch {
    const closing = content.indexOf("\n---\n", 4)
    if (closing === -1) {
      console.warn(`Skipped invalid frontmatter removal for ${filePath}`)
      return content
    }

    const body = content.slice(closing + 5).replace(/^\n+/, "")
    const data = normalizeFrontmatter({}, body, filePath, isIndex, relativePath)
    console.warn(`Stripped invalid frontmatter from ${filePath}`)
    return matter.stringify(body, data)
  }
}

async function copyMarkdown(srcPath, destPath, isIndex = false, relativePath = "") {
  const content = rewriteWikilinks(await readFile(srcPath, "utf8"))
  const sanitized = await sanitizeMarkdown(srcPath, content, isIndex, relativePath)
  await writeFile(destPath, sanitized)
}

async function copyEntry(srcPath, destPath, relativePath = "", isIndex = false) {
  const entry = await stat(srcPath)

  if (entry.isDirectory()) {
    await mkdir(destPath, { recursive: true })
    const children = await readdir(srcPath)
    for (const child of children) {
      const childRelativePath = relativePath ? path.posix.join(relativePath, child) : child
      const childDestPath = resolveDestination(childRelativePath, false)
      await copyEntry(path.join(srcPath, child), childDestPath, childRelativePath)
    }
    return
  }

  if (EXCLUDED_BASENAMES.has(path.basename(srcPath))) {
    return
  }

  if (srcPath.endsWith(".md")) {
    await mkdir(path.dirname(destPath), { recursive: true })
    await copyMarkdown(srcPath, destPath, isIndex, relativePath)
    return
  }

  await cp(srcPath, destPath)
}

async function main() {
  await rm(TARGET_DIR, { recursive: true, force: true })
  await mkdir(TARGET_DIR, { recursive: true })

  for (const relativePath of INCLUDED_PATHS) {
    const sourcePath = path.join(SOURCE_DIR, relativePath)
    const isIndex = relativePath === "README.md"
    const normalizedRelativePath = isIndex ? "README.md" : relativePath
    const targetPath = resolveDestination(normalizedRelativePath, isIndex)
    await copyEntry(sourcePath, targetPath, normalizedRelativePath, isIndex)
  }

  console.log("Synced Product Wiki content into Quartz content/")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
