import { access, readFile } from "node:fs/promises"
import http from "node:http"
import path from "node:path"
import assert from "node:assert/strict"
import handler from "serve-handler"

const ROOT = "/Users/marsocean/Downloads/Content Master/Product Wiki Site"
const PUBLIC_DIR = path.join(ROOT, "public")

const fileChecks = [
  "index.html",
  "404.html",
  "sitemap.xml",
  "static/contentIndex.json",
  "products/deepseek.html",
  "products/perplexity.html",
  "products/cursor.html",
  "playbooks/seo-content-marketing.html",
  "playbooks/ai-as-moat.html",
  "people/liang-wenfeng.html",
]

const hiddenChecks = [
  "04-模板/index.html",
  "公开发布计划-Quartz方案.html",
  "部署与验证路线图.html",
  "01-产品库/README-AI产品卡片库.html",
  "01-产品库/README-新产品卡片.html",
]

const routeChecks = [
  {
    route: "/",
    expected: ["AI 产品策略图谱 — Product Wiki", "/products/deepseek", "/people/liang-wenfeng"],
  },
  {
    route: "/products/deepseek",
    expected: ["<title>DeepSeek</title>", 'class="backlinks"', "梁文锋", "/playbooks/ai-as-moat"],
  },
  {
    route: "/products/perplexity",
    expected: ["<title>Perplexity</title>"],
  },
  {
    route: "/playbooks/seo-content-marketing",
    expected: ["<title>SEO / 内容营销</title>", "Perplexity"],
  },
  {
    route: "/people/liang-wenfeng",
    expected: ["<title>梁文锋</title>", 'class="backlinks"', "DeepSeek"],
  },
]

async function ensureFileExists(relativePath) {
  await access(path.join(PUBLIC_DIR, relativePath))
}

async function ensureFileMissing(relativePath) {
  try {
    await access(path.join(PUBLIC_DIR, relativePath))
  } catch {
    return
  }

  throw new Error(`Expected ${relativePath} to stay unpublished`)
}

async function startServer() {
  const server = http.createServer((request, response) => {
    return handler(request, response, {
      public: PUBLIC_DIR,
      cleanUrls: true,
    })
  })

  await new Promise((resolve) => server.listen(8091, "127.0.0.1", resolve))
  return server
}

async function fetchText(route) {
  const response = await fetch(`http://127.0.0.1:8091${route}`)
  assert.equal(response.status, 200, `Expected ${route} to return 200`)
  return response.text()
}

async function main() {
  for (const filePath of fileChecks) {
    await ensureFileExists(filePath)
  }

  for (const filePath of hiddenChecks) {
    await ensureFileMissing(filePath)
  }

  const contentIndex = await readFile(path.join(PUBLIC_DIR, "static/contentIndex.json"), "utf8")
  assert.match(contentIndex, /DeepSeek/)
  assert.match(contentIndex, /梁文锋/)

  const sitemap = await readFile(path.join(PUBLIC_DIR, "sitemap.xml"), "utf8")
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/products\/deepseek/)
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/people\/liang-wenfeng/)

  const server = await startServer()

  try {
    for (const check of routeChecks) {
      const html = await fetchText(check.route)
      for (const text of check.expected) {
        assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
      }
    }
  } finally {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())))
  }

  console.log("Smoke tests passed")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
