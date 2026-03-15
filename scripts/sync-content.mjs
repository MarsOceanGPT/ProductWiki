import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import matter from "gray-matter"

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
const TARGET_DIR = path.join(PROJECT_ROOT, "content")
const STUB_REDIRECTS_PATH = path.join(PROJECT_ROOT, ".stub-redirects.json")
const DEFAULT_SOURCE_DIR = path.resolve(PROJECT_ROOT, "../Product Wiki")
const EXCLUDED_BASENAMES = new Set(["README-AI产品卡片库.md", "README-新产品卡片.md"])
const EXCLUDED_RELATIVE_PATHS = new Set([
  "公开发布计划-Quartz方案.md",
  "部署与验证路线图.md",
  "上线执行方案-最终版.md",
])
const DUPLICATE = Symbol("duplicate")
let linkMap = new Map()
const stubRedirects = new Map()

function hasHiddenSegment(relativePath) {
  return relativePath
    .split("/")
    .filter(Boolean)
    .some((segment) => segment.startsWith("."))
}

function shouldExclude(relativePath) {
  return (
    hasHiddenSegment(relativePath) ||
    EXCLUDED_BASENAMES.has(path.basename(relativePath)) ||
    EXCLUDED_RELATIVE_PATHS.has(relativePath)
  )
}

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

function addReferenceCandidate(linkMap, key, target) {
  const normalizedKey = key?.toString().trim()
  if (!normalizedKey) return

  const existing = linkMap.get(normalizedKey)
  if (!existing) {
    linkMap.set(normalizedKey, target)
    return
  }

  if (existing !== target) {
    linkMap.set(normalizedKey, DUPLICATE)
  }
}

function coerceArray(value) {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

function extractStubTarget(relativePath, body) {
  const match = body
    .trim()
    .match(/^#\s+.+\n>\s*完整分析见：\[\[([^\]]+)\]\]\s*$/s)

  if (!match) return null

  const rawTarget = match[1].split("|")[0].trim()
  if (!rawTarget) return null
  if (rawTarget.includes("/")) return rawTarget.replace(/\.md$/, "")

  const baseDir = path.posix.dirname(relativePath)
  return path.posix.join(baseDir, rawTarget).replace(/\.md$/, "")
}

async function buildReferenceMap(sourceDir) {
  const linkMap = new Map()

  async function walk(relativePath) {
    if (shouldExclude(relativePath)) {
      return
    }

    const sourcePath = path.join(sourceDir, relativePath)
    const entry = await stat(sourcePath)

    if (entry.isDirectory()) {
      const children = await readdir(sourcePath)
      for (const child of children) {
        await walk(path.posix.join(relativePath, child))
      }
      return
    }

    if (!sourcePath.endsWith(".md")) {
      return
    }

    const raw = await readFile(sourcePath, "utf8")
    let parsedData = {}
    let body = raw

    try {
      const parsed = matter(raw)
      parsedData = parsed.data ?? {}
      body = parsed.content
    } catch {
      const closing = raw.indexOf("\n---\n", 4)
      if (raw.startsWith("---\n") && closing !== -1) {
        body = raw.slice(closing + 5)
      }
    }

    const fallbackTitle = path.basename(relativePath, ".md")
    const target = relativePath.replace(/\.md$/, "")
    const stubTarget = extractStubTarget(relativePath, body)
    const canonicalTarget = stubTarget ?? target
    if (stubTarget) {
      stubRedirects.set(relativePath, stubTarget)
    }

    const title = extractTitle(body, fallbackTitle)
    const candidates = new Set([
      fallbackTitle,
      title,
      parsedData.title,
      parsedData.名称,
      parsedData.name,
      parsedData.name_cn,
      ...coerceArray(parsedData.aliases),
      ...coerceArray(parsedData.alias),
    ])

    for (const candidate of candidates) {
      addReferenceCandidate(linkMap, candidate, canonicalTarget)
    }
  }

  for (const relativePath of await discoverIncludedPaths(sourceDir)) {
    if (relativePath === "README.md") continue
    await walk(relativePath)
  }

  return linkMap
}

function rewriteWikilinks(content, linkMap) {
  return content.replace(/\[\[([^\]#|]+)(\|[^\]]+)?\]\]/g, (match, rawTarget, suffix = "") => {
    const target = rawTarget.trim()
    if (!target || target.includes("/") || target.includes("#")) {
      return match
    }

    const mapped = linkMap.get(target)
    if (!mapped || mapped === DUPLICATE) {
      return match
    }

    const resolvedSuffix = suffix || `|${target}`
    return `[[${mapped}${resolvedSuffix}]]`
  })
}

function normalizeFrontmatter(frontmatter, content, filePath, isIndex, relativePath) {
  const next = { ...frontmatter }
  const fallbackTitle = path.basename(filePath, ".md")
  const isPerson = next.type === "person" || next.类型 === "人物"
  const extractedTitle = extractTitle(content, fallbackTitle)
  const normalizedExtractedTitle = extractedTitle.replace(/\s+/g, " ").trim()
  const inferredTitle =
    /^PART\s+\d+/i.test(normalizedExtractedTitle) || /^Headline$/i.test(normalizedExtractedTitle)
      ? fallbackTitle
      : extractedTitle
  const resolvedTitle =
    next.title ||
    next.名称 ||
    (isPerson ? next.name_cn : undefined) ||
    next.name ||
    inferredTitle
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
  const rawContent = await readFile(srcPath, "utf8")
  const content = rewriteWikilinks(rawContent, linkMap)
  const sanitized = await sanitizeMarkdown(srcPath, content, isIndex, relativePath)
  await writeFile(destPath, sanitized)
}

async function copyEntry(srcPath, destPath, relativePath = "", isIndex = false) {
  if (shouldExclude(relativePath)) {
    return
  }

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

  if (stubRedirects.has(relativePath)) {
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

async function discoverIncludedPaths(sourceDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true })
  const discovered = entries
    .map((entry) => entry.name)
    .filter((name) => !shouldExclude(name))
    .sort((a, b) => a.localeCompare(b, "zh-CN"))

  if (!discovered.includes("README.md")) {
    return discovered
  }

  return ["README.md", ...discovered.filter((entry) => entry !== "README.md")]
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
  stubRedirects.clear()
  const includedPaths = await discoverIncludedPaths(sourceDir)
  linkMap = await buildReferenceMap(sourceDir)

  for (const relativePath of includedPaths) {
    const sourcePath = path.join(sourceDir, relativePath)
    const isIndex = relativePath === "README.md"
    const normalizedRelativePath = isIndex ? "README.md" : relativePath
    const targetPath = resolveDestination(normalizedRelativePath, isIndex)
    await copyEntry(sourcePath, targetPath, normalizedRelativePath, isIndex)
  }

  await writeFile(
    STUB_REDIRECTS_PATH,
    JSON.stringify(Object.fromEntries(stubRedirects), null, 2) + "\n",
    "utf8",
  )

  console.log("Synced Product Wiki content into Quartz content/")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
