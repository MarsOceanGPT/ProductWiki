import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..")
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public")
const STUB_REDIRECTS_PATH = path.join(PROJECT_ROOT, ".stub-redirects.json")

function toHref(fromSlug, targetSlug) {
  const fromDir = path.posix.dirname(fromSlug)
  const relative = path.posix.relative(fromDir, targetSlug) || "."
  if (relative.startsWith(".")) return relative
  return `./${relative}`
}

function renderRedirect(title, href) {
  return `<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="canonical" href="${href}">
  <meta http-equiv="refresh" content="0; url=${href}">
  <script>location.replace(${JSON.stringify(href)})</script>
</head>
</html>
`
}

async function main() {
  const raw = await readFile(STUB_REDIRECTS_PATH, "utf8")
  const redirects = JSON.parse(raw)

  for (const [fromPath, targetPath] of Object.entries(redirects)) {
    const fromSlug = fromPath.replace(/\.md$/, "")
    const targetSlug = targetPath.toString().replace(/\.md$/, "")
    const href = toHref(fromSlug, targetSlug)
    const outputPath = path.join(PUBLIC_DIR, `${fromSlug}.html`)
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, renderRedirect(path.posix.basename(fromSlug), href), "utf8")
  }

  console.log(`Wrote ${Object.keys(redirects).length} stub redirects`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
