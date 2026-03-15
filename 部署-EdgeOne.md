# EdgeOne 部署说明

## 本地发布前验证

先在本地执行：

```bash
npm install
npm run verify
```

通过标准：

- 构建成功
- smoke test 通过
- `public/` 产物存在

## 推荐仓库形态

这个 Quartz 发布工程应单独作为一个 Git 仓库推送，不要继续沿用 Quartz 官方仓库的 remote。

## EdgeOne Pages 创建项目

在 EdgeOne Pages 控制台创建新项目时，使用 Git 导入。

推荐配置：

- Git Provider: GitHub
- Branch: `main`
- Root Directory: `/`
- Build Command: `npm run build`
- Output Directory: `public`
- Install Command: `npm install`
- Node Version: `22.17.1`
- Acceleration Region: `global availability zone (exclude Chinese mainland)`

说明：

- 第一版先不进中国大陆可用区，这样不会先被 ICP 卡住
- 等线上预览通过，再绑定正式域名

## 域名绑定

第一版使用：

- `wiki.marsren.ai`

不要直接改：

- `marsren.ai`
- `www.marsren.ai`

在 EdgeOne 项目里添加自定义域名后，按控制台提示去 GoDaddy 增加对应的 DNS 记录。

## 上线后验证

至少检查这些地址：

- 首页 `/`
- `/products/deepseek`
- `/products/perplexity`
- `/playbooks/seo-content-marketing`
- `/people/liang-wenfeng`

验证点：

- 页面返回 `200`
- 页面标题正确
- backlinks 显示正常
- 搜索能搜到 `DeepSeek`
- sitemap 包含 `/products/deepseek`
- 非公开内容没有被带上去

## 当前已知情况

同步脚本会自动处理部分源文件问题：

- 会跳过内部 README 页面，不对外发布
- 会为首页和核心公开页生成稳定 canonical 路径
- 遇到不合法 frontmatter 时会自动剥离并继续构建

当前已知存在不合法 frontmatter 的源文件包括：

- `01-产品库/产品卡片-BeautyCam.md`
- `01-产品库/产品卡片-Kimi.md`
- `03-人物库/Piotr Dąbkowski.md`
- `03-人物库/William Beauchamp.md`

这些文件目前不会阻塞构建，但后续建议在写作源里修正。
