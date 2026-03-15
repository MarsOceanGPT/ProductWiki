---
类型: 索引
版本: v1.0
最后更新: 2026-03-14T00:00:00.000Z
title: AI 产品策略图谱 — Product Wiki
description: 一个 Wikipedia 式的知识网络：AI 产品 × 打法 × 人物，双向链接，持续更新。
permalink: /
---
# AI 产品策略图谱 — Product Wiki

> 一个 Wikipedia 式的知识网络：AI 产品 × 打法 × 人物，双向链接，持续更新。

## 文件夹结构

```
Product Wiki/
├── README.md                    ← 本文件（索引）
├── AI产品策略图谱_知识库架构设计.md   ← 架构设计文档（v2.0）
├── a16z_AI_Top100_2026年3月_第6版.md  ← 选品参考列表
│
├── 01-产品库/                    ← 产品卡片（完整卡 + stub）
│   ├── 产品卡片-Cursor.md
│   ├── 产品卡片-Perplexity.md
│   ├── 产品卡片-ElevenLabs.md
│   ├── 产品卡片-NotebookLM.md
│   ├── 产品卡片-Character.ai.md
│   ├── 产品卡片-DeepSeek.md
│   └── [其他产品 stubs...]
│
├── 02-打法库/                    ← 打法页面（按阶段分类）
│   ├── 01-机会识别/
│   ├── 02-产品设计/
│   ├── 03-MVP策略/
│   ├── 04-PMF验证/
│   ├── 05-增长引擎/
│   ├── 06-商业化/
│   └── 07-护城河/
│
├── 03-人物库/                    ← 创始人 / 关键人物页面
└── 04-模板/                      ← 产品卡片模板
```

## 完整产品卡片（6张）

| 产品 | 品类 | ARR / 规模 | 核心打法 |
|------|------|-----------|---------|
| [[products/cursor|Cursor]] | AI IDE | $1B+ ARR | 吃技术升级红利 + 工作流嵌入 |
| [[products/perplexity|Perplexity]] | AI 搜索 | $148M ARR | 打开能力门槛 + 品牌信任 |
| [[products/elevenlabs|ElevenLabs]] | AI 语音 | $330M ARR | 打开价格门槛 + 数据飞轮 |
| [[products/notebooklm|NotebookLM]] | AI 研究工具 | 4800万月活 | 源材料锁定 + 病毒传播 |
| [[products/character-ai|Character.ai]] | AI 社交 | 2亿月活 | Persona 锁定 + 社交粘性 |
| [[products/deepseek|DeepSeek]] | AI 基础模型 | Web #4 全球 | 效率优先 + 开源生态 |

## 打法库索引

### 01-机会识别
- [[playbooks/tech-upgrade-tailwind|吃技术升级红利]] — 在技术质变窗口期率先封装产品
- [[playbooks/package-workflow-into-product|把玩法封装成产品]] — 将高手工作流产品化
- [[playbooks/lower-skill-barriers|打开能力门槛新市场]] — AI 降低使用门槛，创造新市场
- [[playbooks/lower-price-barriers|打开价格门槛新市场]] — AI 降低价格门槛，打开大众市场

### 02-产品设计
- [[playbooks/copilot-pattern|Copilot 范式]] — AI 作为副驾驶辅助人操作
- [[playbooks/agent-pattern|Agent 代理式]] — AI 自主执行多步骤任务
- [[playbooks/chat-pattern|Chat 对话式]] — 自然语言对话作为核心交互
- [[playbooks/generative-interface|生成式界面]] — 界面本身由 AI 动态生成

### 03-MVP策略
- [[playbooks/assemble-fast|简易拼装]] — 快速组装验证假设
- [[playbooks/adapt-to-new-tech|技术适配]] — 第一时间适配新技术能力
- [[playbooks/focus-on-key-feature|关键功能聚焦]] — 只做最重要的那一个功能

### 04-PMF验证
- [[playbooks/urgent-demand|迫切刚需]] — 用户不需被教育的强需求
- [[playbooks/only-choice|别无选择]] — 细分场景的唯一解

### 05-增长引擎
- [[playbooks/ride-the-wave|借势崛起]] — 借平台/事件势能快速扩散
- [[playbooks/product-as-content|病毒传播-产品即内容]] — 产品输出本身就是可分享内容
- [[playbooks/open-source-collaboration|开源合作]] — 开源建立开发者生态
- [[playbooks/seo-content-marketing|SEO 内容营销]] — 内容获取自然流量
- [[playbooks/social-stickiness|社交粘性]] — 关系粘性带来留存

### 06-商业化
- [[playbooks/subscription-pricing|按访问-订阅]] — 固定月费
- [[playbooks/usage-based-pricing|按消耗-请求数]] — 按量计费

### 07-护城河
- [[playbooks/ai-as-moat|AI就是壁垒]] — 持续迭代能力是护城河
- [[playbooks/workflow-embed|工作流嵌入]] — 嵌入日常工作流
- [[playbooks/data-flywheel|数据飞轮]] — 数据积累改善模型
- [[playbooks/brand-trust|品牌信任]] — 信任是稀缺资产
- [[playbooks/source-lockin|源材料锁定]] — 用户数据锁定用户
- [[playbooks/persona-lockin|Persona 锁定]] — 情感关系锁定用户
- [[playbooks/open-source-ecosystem|开源生态]] — 开源建立生态壁垒
- [[playbooks/efficiency-first|效率优先]] — 成本结构性优势

## 人物库索引

- [[people/michael-truell|Michael Truell]] — Cursor 创始人
- [[people/aravind-srinivas|Aravind Srinivas]] — Perplexity 创始人
- [[people/piotr-dabkowski|Piotr Dąbkowski]] — ElevenLabs 联创/CTO
- [[people/mati-staniszewski|Mati Staniszewski]] — ElevenLabs 联创/CEO
- [[people/raiza-martin|Raiza Martin]] — NotebookLM 产品负责人
- [[people/steven-johnson|Steven Johnson]] — NotebookLM 顾问，畅销书作者
- [[people/noam-shazeer|Noam Shazeer]] — Character.ai 联创（已回归 Google）
- [[people/daniel-de-freitas|Daniel De Freitas]] — Character.ai 联创（已回归 Google）
- [[people/liang-wenfeng|梁文锋]] — DeepSeek 创始人

---

*基于 a16z Top 100 Gen AI Consumer Apps 第 6 版（2026年3月）*
