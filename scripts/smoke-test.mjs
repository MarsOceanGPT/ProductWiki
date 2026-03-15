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
  "AI-炼金术实验室---服务介绍.html",
  "AI产品策略图谱_知识库架构设计.html",
  "a16z_AI_Top100_2026年3月_第6版.html",
  "01-产品库/产品卡片-DeepSeek.html",
  "01-产品库/产品卡片-Perplexity.html",
  "01-产品库/产品卡片-Cursor.html",
  "02-打法库/05-增长引擎/SEO-内容营销.html",
  "02-打法库/07-护城河/AI就是壁垒.html",
  "03-人物库/梁文锋.html",
  "04-模板/产品卡片模板-v3.html",
]

const hiddenChecks = [
  "公开发布计划-Quartz方案.html",
  "部署与验证路线图.html",
  "上线执行方案-最终版.html",
  "01-产品库/README-AI产品卡片库.html",
  "01-产品库/README-新产品卡片.html",
]

const routeChecks = [
  {
    route: "/",
    expected: ["AI 产品策略图谱 — Product Wiki", "DeepSeek", "梁文锋", "Perplexity"],
  },
  {
    route: "/AI-%E7%82%BC%E9%87%91%E6%9C%AF%E5%AE%9E%E9%AA%8C%E5%AE%A4---%E6%9C%8D%E5%8A%A1%E4%BB%8B%E7%BB%8D",
    expected: ["<title>AI 炼金术实验室 - 服务介绍</title>", "任鑫（Mars）", "合作企业"],
  },
  {
    route: "/AI%E4%BA%A7%E5%93%81%E7%AD%96%E7%95%A5%E5%9B%BE%E8%B0%B1_%E7%9F%A5%E8%AF%86%E5%BA%93%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1",
    expected: ["<title>AI 产品策略图谱 — 知识库架构设计 v2.0</title>", "知识库", "打法库"],
  },
  {
    route: "/01-%E4%BA%A7%E5%93%81%E5%BA%93/%E4%BA%A7%E5%93%81%E5%8D%A1%E7%89%87-DeepSeek",
    expected: ["<title>DeepSeek</title>", 'class="backlinks"', "梁文锋", "AI就是壁垒"],
  },
  {
    route: "/01-%E4%BA%A7%E5%93%81%E5%BA%93/%E4%BA%A7%E5%93%81%E5%8D%A1%E7%89%87-Perplexity",
    expected: ["<title>Perplexity</title>"],
  },
  {
    route: "/02-%E6%89%93%E6%B3%95%E5%BA%93/05-%E5%A2%9E%E9%95%BF%E5%BC%95%E6%93%8E/SEO-%E5%86%85%E5%AE%B9%E8%90%A5%E9%94%80",
    expected: ["<title>SEO / 内容营销</title>", "Perplexity"],
  },
  {
    route: "/03-%E4%BA%BA%E7%89%A9%E5%BA%93/%E6%A2%81%E6%96%87%E9%94%8B",
    expected: ["<title>梁文锋</title>", 'class="backlinks"', "DeepSeek"],
  },
  {
    route: "/04-%E6%A8%A1%E6%9D%BF/%E4%BA%A7%E5%93%81%E5%8D%A1%E7%89%87%E6%A8%A1%E6%9D%BF-v3",
    expected: ["<title>产品卡片模板 v4.0</title>", "YAML Frontmatter", "商业化"],
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
  assert.match(contentIndex, /AI 炼金术实验室 - 服务介绍/)
  assert.match(contentIndex, /产品卡片模板 v4\.0/)

  const sitemap = await readFile(path.join(PUBLIC_DIR, "sitemap.xml"), "utf8")
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/AI-%E7%82%BC%E9%87%91%E6%9C%AF%E5%AE%9E%E9%AA%8C%E5%AE%A4---%E6%9C%8D%E5%8A%A1%E4%BB%8B%E7%BB%8D/)
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/01-%E4%BA%A7%E5%93%81%E5%BA%93\/%E4%BA%A7%E5%93%81%E5%8D%A1%E7%89%87-DeepSeek/)
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/03-%E4%BA%BA%E7%89%A9%E5%BA%93\/%E6%A2%81%E6%96%87%E9%94%8B/)
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/02-%E6%89%93%E6%B3%95%E5%BA%93\/05-%E5%A2%9E%E9%95%BF%E5%BC%95%E6%93%8E\/SEO-%E5%86%85%E5%AE%B9%E8%90%A5%E9%94%80/)
  assert.match(sitemap, /https:\/\/wiki\.marsren\.ai\/04-%E6%A8%A1%E6%9D%BF\/%E4%BA%A7%E5%93%81%E5%8D%A1%E7%89%87%E6%A8%A1%E6%9D%BF-v3/)

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
