# Mars Product Wiki Site

这是 Product Wiki 的独立 Quartz 发布工程。

## 目录关系

- 写作源：`/Users/marsocean/Downloads/Content Master/Product Wiki`
- 发布工程：`/Users/marsocean/Downloads/Content Master/Product Wiki Site`

第一版只同步这些内容：

- `README.md` -> `content/index.md`
- `01-产品库/`
- `02-打法库/`
- `03-人物库/`

以下内容暂不公开：

- `04-模板/`
- 规划文档
- 其他内部资料

## 常用命令

```bash
npm install
npm run sync:content
npm run build
npm run dev
```

## 当前同步策略

同步脚本位于 `scripts/sync-content.mjs`，作用是：

- 从 Obsidian 写作源复制内容到 Quartz `content/`
- 将根目录 `README.md` 转为站点首页 `content/index.md`
- 自动为页面补 `title`
- 遇到不合法的 frontmatter 时自动剥离，避免 Quartz 构建失败

## 当前站点配置

- 站点标题：`Mars Product Wiki`
- 目标域名：`wiki.marsren.ai`
- 部署主方案：`Tencent EdgeOne Pages`
- 备选方案：`Cloudflare Pages`

## 下一步

1. 将这个发布工程推到 Git 仓库
2. 接入 EdgeOne Pages 默认域名
3. 验证后绑定 `wiki.marsren.ai`
