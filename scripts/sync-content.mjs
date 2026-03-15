import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
const TARGET_DIR = path.join(PROJECT_ROOT, "content")
const DEFAULT_SOURCE_DIR = path.resolve(PROJECT_ROOT, "../Product Wiki")
const INCLUDED_PATHS = ["README.md", "01-产品库", "02-打法库", "03-人物库"]
const EXCLUDED_BASENAMES = new Set(["README-AI产品卡片库.md", "README-新产品卡片.md"])

function extractTitle(content, fallback) {
  const heading = content.match(/^#\s+(.+)$/m)
  return heading?.[1]?.trim() || fallback
}

function normalizeTags(tags) {
  if (Array.isArray(tags)) {
    return tags.map((tag) => tag?.toString()).filter(Boolean)
  }

  if (tags && typeof tags === "object") {
    return Object.values(tags)
      .flatMap((value) => (Array.isArray(value) ? value : [value]))
      .map((tag) => tag?.toString())
      .filter(Boolean)
  }

  if (tags == null) {
    return undefined
  }

  return [tags.toString()]
}

function mergeAliases(frontmatter, relativePath, fallbackTitle, resolvedTitle) {
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

  for (const candidate of [resolvedTitle, frontmatter.名称, frontmatter.name_cn, frontmatter.name]) {
    if (candidate) {
      aliases.add(candidate.toString())
    }
  }

  return [...aliases]
}

function normalizeFrontmatter(frontmatter, content, filePath, isIndex, relativePath) {
  const next = { ...frontmatter }
  const fallbackTitle = path.basename(filePath, ".md")
  const isPerson = next.type === "person" || next.类型 === "人物"
  const resolvedTitle =
    next.title ||
    next.名称 ||
    (isPerson ? next.name_cn : undefined) ||
    next.name ||
    extractTitle(content, fallbackTitle)
  next.title = resolvedTitle
  const normalizedTags = normalizeTags(next.tags)
  if (normalizedTags) {
    next.tags = normalizedTags
  } else {
    delete next.tags
  }

  if (isIndex) {
    next.title = "AI 产品策略图谱 — Product Wiki"
    next.description = "一个 Wikipedia 式的知识网络：AI 产品 × 打法 × 人物，双向链接，持续更新。"
    next.permalink = "/"
  } else {
    next.permalink = `/${relativePath.replace(/\.md$/, "")}`
    next.aliases = mergeAliases(next, relativePath, fallbackTitle, resolvedTitle)
    delete next.alias
  }

  return next
}

function resolveDestination(relativePath, isIndex) {
  if (isIndex) {
    return path.join(TARGET_DIR, "index.md")
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
  const content = await readFile(srcPath, "utf8")
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

async function pathExists(targetPath) {
  try {
    await stat(targetPath)
    return true
  } catch {
    return false
  }
}

async function directoryHasFiles(targetPath) {
  try {
    const entries = await readdir(targetPath)
    return entries.length > 0
  } catch {
    return false
  }
}

async function main() {
  const sourceDir = process.env.SOURCE_WIKI_DIR
    ? path.resolve(process.env.SOURCE_WIKI_DIR)
    : DEFAULT_SOURCE_DIR

  if (!(await pathExists(sourceDir))) {
    if (await directoryHasFiles(TARGET_DIR)) {
      console.log(`Source wiki not found at ${sourceDir}, using checked-in content/`)
      return
    }

    throw new Error(`Source wiki not found at ${sourceDir} and content/ is empty`)
  }

  await rm(TARGET_DIR, { recursive: true, force: true })
  await mkdir(TARGET_DIR, { recursive: true })

  for (const relativePath of INCLUDED_PATHS) {
    const sourcePath = path.join(sourceDir, relativePath)
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
