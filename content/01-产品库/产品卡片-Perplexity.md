---
type: product
name: Perplexity
name_cn: ''
url: 'https://perplexity.ai'
founded: 2022-08
headquarters: 'San Francisco, US'
founders:
  - Aravind Srinivas
  - Denis Yarats
  - Johnny Ho
  - Andy Konwinski
stage: Growth
status: Active
metrics_date: 2025-09
arr: $148M
users: '45M+ MAU, 170M 月访问'
funding_total: $1.2B+
valuation: $20B
employees: ~1200
category: AI Search
subcategory: Answer Engine
target_user: 'Knowledge Workers, Researchers, Students'
pricing_model:
  - subscription
  - freemium
opportunity_playbooks:
  - '[[02-打法库/01-机会识别/打开能力门槛新市场|打开能力门槛新市场]]'
  - '[[02-打法库/01-机会识别/从做任务到出成果|从做任务到出成果]]'
design_playbooks:
  - '[[02-打法库/02-产品设计/Chat 对话式|Chat 对话式]]'
mvp_playbooks:
  - '[[02-打法库/03-MVP策略/简易拼装|简易拼装]]'
pmf_playbooks:
  - '[[02-打法库/04-PMF验证/迫切刚需|迫切刚需]]'
  - '[[02-打法库/03-MVP策略/技术适配|技术适配]]'
growth_playbooks:
  - '[[02-打法库/05-增长引擎/借势崛起|借势崛起]]'
  - '[[SEO / 内容营销]]'
monetization_playbooks:
  - '[[02-打法库/06-商业化/按访问-订阅|按访问-订阅]]'
moat_playbooks:
  - '[[02-打法库/07-护城河/品牌信任|品牌信任]]'
  - '[[02-打法库/07-护城河/工作流嵌入|工作流嵌入]]'
distance_to_money: 中
industry_layer: 应用层
pricing_quadrant: 低自主-高归因
key_people:
  - '[[03-人物库/Aravind Srinivas|Aravind Srinivas]]'
competitors:
  - '[[01-产品库/Google Search|Google Search]]'
  - '[[ChatGPT]]'
  - '[[Genspark]]'
last_updated: 2026-03-14T00:00:00.000Z
confidence: High
mars_reviewed: false
title: Perplexity
---
# Perplexity

> 一句话：不给你链接列表，直接给你答案+来源。用 AI 重新定义"搜索"这件事。

---

## 一、基本面

Perplexity AI 成立于 2022 年 8 月，创始人 Aravind Srinivas 是前 OpenAI 研究科学家，此前在 Google Brain 和 DeepMind 实习过，UC Berkeley 计算机博士，IIT Madras 本科期间发了 9 篇顶会论文。其他联合创始人：Denis Yarats（前 Meta AI）、Johnny Ho（前 Quora）、Andy Konwinski（Databricks 联合创始人）。

融资历程：$3.1M Seed（2022.9）→ $25.6M A 轮 → $73.6M B 轮（2024.1，贝佐斯+NVIDIA 参投）→ $500M D 轮（2024.12，$90 亿估值）→ 多轮追加至 $200M（2025.9，$200 亿估值）。总融资超 $12 亿。

关键指标：4500 万+ MAU，1.7 亿月访问量，2025 年 5 月单月查询量 7.8 亿次。ARR 约 $1.48 亿（2025 年中），预计 2026 年可达 $6.5 亿。1200+ 员工（一年内增长 290%）。

在 AI 聊天机器人市场占 8%（ChatGPT 82.6%，Copilot 7.2%）。

---

## 二、成长旅程

### 2.1 怎么找到这个机会的

Perplexity 的成立时间是 2022 年 8 月——ChatGPT 发布前三个月。创始人在 OpenAI 工作时就看到了 LLM 的两个根本缺陷：**知识有截止日期**和**会编造事实**。更关键的是，没有引用来源，用户无法验证。

他们的核心洞察不是"做一个更好的搜索引擎"，而是重新定义搜索的界面形态：**从"给你链接列表让你自己综合"变成"帮你读完互联网直接给答案+标注来源"**。这是一个从"搜索引擎"到"回答引擎"的品类重新定义。

有意思的是，他们的第一个产品其实是 **Bird SQL**——用 OpenAI 的 Codex 把自然语言转成 SQL 查询，专门搜 Twitter 数据。Twitter 联合创始人 Jack Dorsey 都注意到了。但 2023 年 2 月 Twitter 关闭免费 API 后，他们果断转向通用搜索。

相关打法：[[02-打法库/01-机会识别/打开能力门槛新市场|打开能力门槛新市场]]、[[02-打法库/01-机会识别/从做任务到出成果|从做任务到出成果]]

### 2.2 产品怎么设计的

为什么选对话式而非传统搜索框？因为复杂的知识查询本身就是迭代的——你问了一个问题，看到答案，又有了新问题。对话形态天然支持这种"追问链"。

**引用系统是核心设计决策**。每个回答的每个观点都标注来源编号。研究显示，在 78% 的复杂问题上，Perplexity 能做到"每个论断都链接到具体来源"，而 ChatGPT 只有 62%。引用不是附加功能——它是信任机制，是与 ChatGPT（不引用）和 Google（不综合）同时区分的核心。

Pro Search 的设计也值得注意：故意做得比普通搜索慢，但展示中间推理过程（搜索了哪些网页、正在综合什么信息）。用户研究发现，如果能看到 AI 正在"思考"的过程，他们愿意等更久。

相关打法：[[02-打法库/02-产品设计/Chat 对话式|Chat 对话式]]

### 2.3 怎么验证的（MVP）

2022 年 12 月 7 日上线（比 ChatGPT 晚 7 天）。初始日查询量 2000-3000 次。到 2023 年 2 月就达到 200 万独立访客。

MVP 极其简洁：输入问题 → 获得带引用的直接回答。不追求功能丰富，追求**一个核心体验做到极致**。

Aravind 的哲学是"80% 完美就发布"——快速迭代、观察用户、持续改进。他融资时甚至不用 PPT，直接打开笔记本 demo 产品。

相关打法：[[02-打法库/03-MVP策略/简易拼装|简易拼装]]

### 2.4 怎么切入市场的（PMF）

初始目标用户：做知识工作需要验证信息的人——学生、研究者、分析师。这些人有一个共同痛点：ChatGPT 不够可靠（会编造），Google 需要自己综合（太费时）。

PMF 信号：上线 13 个月就达到 1000 万 MAU。增长 800% YoY。Aravind 发现用户会问非常具体的实际问题（比如"在加州怎么给员工买健康保险"），这类问题 ChatGPT 答不好（不够新），Google 答不快（需要看很多页面）——Perplexity 恰好在中间。

相关打法：[[02-打法库/04-PMF验证/迫切刚需|迫切刚需]]、[[02-打法库/03-MVP策略/技术适配|技术适配]]

### 2.5 怎么增长的

增长主要来自两个引擎：

**借势 ChatGPT 的势能**：ChatGPT 教育了全球用户"可以用 AI 问问题"，但同时暴露了不可靠的短板。Perplexity 精准定位在"ChatGPT 但有来源"。

**自然搜索流量**：作为搜索产品，Perplexity 的回答页面本身就会被 Google 索引，形成自增强循环——用 AI 搜索生成的内容被传统搜索收录，带来更多用户。

贝佐斯 2024 年 1 月通过个人基金投资 B 轮是关键节点——Bezos 极少直投 AI 创业公司，这个信号让 Perplexity 的可信度大增。

三星合作也值得注意：2025 年所有三星电视内置 Perplexity，并附送 12 个月免费 Pro。这是硬件预装的经典分发策略。

相关打法：[[02-打法库/05-增长引擎/借势崛起|借势崛起]]、[[SEO / 内容营销]]

### 2.6 怎么赚钱的

- Free：无限基础查询，Pro Search 每天 3 次
- Pro（$20/月或 $200/年）：无限 Pro Search + 高级模型（GPT-5, Claude, Gemini）+ 文件分析
- Enterprise Pro（$40/人/月）：团队功能 + 数据隐私
- Enterprise Max（$325/人/月）：全功能
- API：$5/千次请求

**出版商分成计划（Comet Plus）**：2025 年 8 月推出，投入 $4250 万。$5/月订阅，出版商拿 80%，Perplexity 拿 20%。合作方包括 TIME、Fortune、洛杉矶时报等。这是回应版权争议的策略——把"被告"变成"合作伙伴"。

ARR 轨迹：$63M（2024 年底）→ $148M（2025 年中）→ 预估 $656M（2026）。

相关打法：[[02-打法库/06-商业化/按访问-订阅|按访问-订阅]]

### 2.7 壁垒在哪

坦率说，AI 搜索的壁垒**不算强**。底层模型不是自研的（用 OpenAI、Anthropic、Google 的 API），技术栈本身不构成壁垒。

真正的护城河在三个地方：

1. **产品体验**——引用系统、推理可视化、多步研究流程，这些 UX 设计积累了大量 know-how
2. **出版商关系网络**——通过分成计划建立的合作关系是排他性的，新进入者很难复制
3. **企业级信任**——对于需要"可验证信息"的专业场景，品牌信任是最大壁垒

最大风险：ChatGPT 加了实时搜索+引用后，Perplexity 的差异化空间会被压缩。以及 Google 如果认真做 AI 搜索整合（已经在做）。

相关打法：[[02-打法库/07-护城河/品牌信任|品牌信任]]、[[02-打法库/07-护城河/工作流嵌入|工作流嵌入]]

---

## 三、战略框架

### 3.1 时代红利（Why Now）

吃了三波红利同时到来：（1）ChatGPT 2022 年 11 月教育了全球用户"可以用 AI 问问题"，同时暴露了不可靠性——Perplexity 在 7 天后上线直接承接这波需求溢出；（2）Google 搜索 UX 停滞了 15+ 年，用户对蓝色链接列表的容忍度到了临界点；（3）LLM 商品化让创业公司不需要自研模型就能建产品——Aravind 在 2022 年就判断"差异化不在模型层，在产品层"。

### 3.2 核心优势

配置论：Perplexity 不在"搜索结果质量"这个维度和 Google 竞争（打不过），也不在"通用对话能力"上和 ChatGPT 竞争。它引入了一个新变量：**"带验证的知识综合"**。这既不是搜索也不是聊天，是一个新品类。

距钱距离：中等。用户用 Perplexity 做研究 → 帮助决策 → 但不直接产生交易。比纯内容远一步，但比 Cursor 这种直接提升生产力的远一些。

### 3.3 生态位

应用层产品，不控制模型层。用多个模型（OpenAI、Google、Anthropic、xAI），这既是灵活性也是脆弱性——不被任何一个模型厂商锁定，但也意味着任何一个模型厂商都可以做竞品。

AI 定价象限：低自主性（人类驱动搜索过程）× 高可归因性（答案质量直接可评估）= 适合订阅制，但按结果收费的空间有限。

反脆弱：下行风险是被 ChatGPT+搜索 和 Google+AI 两面夹击。上行空间是成为"专业知识工作的默认入口"。杠铃策略——保守端是出版商分成计划（建立内容合作壁垒），激进端是企业级搜索（高 ACV）和三星这样的硬件预装分发。

---

## 四、其他

**竞标 TikTok**：2025 年 1 月 TikTok 面临美国禁令时，Aravind 居然提交了收购 TikTok 美国业务的竞标。买不买得起不重要——当一个重大分发资产变得可用时，先举手。这种思维方式值得学习。

**版权诉讼风暴**：纽约时报、Reddit、News Corp、芝加哥论坛报都起诉了 Perplexity。Reddit 甚至在内容里埋了隐藏标记，Perplexity 的系统原样复制了出来——提供了爬虫行为的铁证。这暴露了 AI 搜索早期"先爬再说，做大再合规"的路径。

**不用 PPT 融资**：Aravind 融资时从不做 pitch deck，直接打开笔记本 demo 产品。这在 VC 融资文化中非常反常规，但反映了他"产品自己说话"的信念。

---

## Mars 视角

看 Perplexity 的时候，我一直在想一个问题：搜索真的被颠覆了吗？还是只是信息中间商的形态换了一个。Google 通过链接列表让用户自己综合，Perplexity 通过 AI 为用户综合后给答案，但本质上都是"中间商赚差价"——掌握信息源和分发权。反而，Perplexity 的真正威胁不是来自 Google，而是来自模型厂商本身（ChatGPT 加搜索、Gemini 加搜索），它们可以直接把"AI 搜索"变成附属功能，让 Perplexity 变成"被 bundling 的工具"。

有意思的是，Perplexity 能撑住现在的规模，核心不在搜索体验，而在"可信赖"这个维度。它通过引用来源建立的信任机制，打中了一个被忽视的痛点：用户不信任单一 AI 的输出。这种信任优势在"幻觉成为常识"的时代反而变成了最强护城河。问题是，这个护城河是"品牌信任"层面的，可以被模型能力的飞跃打破——如果 ChatGPT 某天真的让幻觉率降到 5% 以下，用户还会在乎引用吗？

更深层的观察是：Perplexity 正在走一条微妙的平衡木。一边要保持"搜索产品"的独立性（不被大厂整合），一边要建立足够的差异化（不被大厂打败）。它现在的打法是"把出版商变成合作伙伴而非对手"（Comet Plus 分成计划），这是在改变游戏规则。但这个策略能否防守住"大厂搜索整合"的长期威胁，还要看执行力。

距钱距离的角度，Perplexity 有个隐藏的劣势——知识工作者用它做研究，但研究本身很难直接变现。对比 Cursor 让开发者的产出直接值钱，Perplexity 多了一个中间环节。这也许解释了为什么它的企业化一直不如预期——B2B 用户很难计算 ROI，除非在"合规研究、法律查证"这样特别垂直的场景。

*（AI 草稿——待 Mars 确认）*

---

## 相关案例

如果你对 Perplexity 的故事感兴趣，推荐同时看这几个：

- **[[Genspark]]**：a16z 榜单新上榜，也做 AI 搜索+Agent，但走得更远——不只回答问题，还帮你执行后续任务。$3 亿 B 轮，$1 亿+ ARR。代表了 AI 搜索从"回答"到"行动"的演进方向。
- **[[ChatGPT]]**：Perplexity 的最大竞争对手和最大"贵人"——ChatGPT 教育了用户，同时暴露了短板，给了 Perplexity 生存空间。理解两者的共生竞争关系很关键。
- **[[01-产品库/产品卡片-NotebookLM|NotebookLM]]**：Google 的另一条路线——不做开放搜索，做"基于你自己文档的 AI 研究助手"。和 Perplexity 都在解决"知识综合"问题，但切入点完全不同（你的文档 vs 全网信息）。
- **[[01-产品库/产品卡片-DeepSeek|DeepSeek]]**：在 a16z 榜单上排名紧随 Perplexity。虽然不是搜索产品，但 DeepSeek 横跨中美俄三个市场的独特生态位，和 Perplexity 面对的"地理分化"趋势直接相关。

---

## 关键时间线

| 时间 | 事件 | 意义 |
|------|------|------|
| 2022.08 | 公司成立 | Aravind 离开 OpenAI 创业 |
| 2022.09 | Seed $3.1M | Elad Gil + Nat Friedman |
| 2022.11 | ChatGPT 发布 | 教育市场但暴露缺陷 |
| 2022.12.07 | **Perplexity 搜索引擎上线** | 比 ChatGPT 晚 7 天 |
| 2022.12 | Bird SQL 上线 | 第一个产品（Twitter 搜索） |
| 2023.02 | 200 万独立访客/月 | 早期牵引力 |
| 2023.02 | Twitter 关闭免费 API | 倒逼 pivot 到通用搜索 |
| 2024.01 | 1000 万 MAU；B 轮 $73.6M（贝佐斯投资） | PMF 确认 + 顶级背书 |
| 2024.04 | 估值达 $10 亿 | 独角兽 |
| 2024.12 | D 轮 $500M，$90 亿估值 | |
| 2025.05 | 单月 7.8 亿次查询 | 峰值使用量 |
| 2025.08 | 出版商分成计划（Comet Plus）启动 | 回应版权争议 |
| 2025.09 | $200M 融资，$200 亿估值 | |
| 2025.10-12 | Reddit、NYT、News Corp 起诉 | 版权风暴 |
| 2026.02 | Perplexity Computer（AI Agent 工具）发布 | 从搜索扩展到行动 |

---

## 参考来源

- [Perplexity Blog](https://www.perplexity.ai/hub) — 官方博客，产品新闻和更新
- [Introducing Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research) — 深度研究功能发布
- [Introducing Perplexity Search API](https://www.perplexity.ai/hub/blog/introducing-the-perplexity-search-api) — API 接口公告
- [Getting Started with Perplexity](https://www.perplexity.ai/hub/blog/getting-started-with-perplexity) — 产品使用指南
- [Perplexity AI Statistics - Originality.AI](https://originality.ai/blog/perplexity-ai-statistics) — 用户和使用统计数据

## 更新日志

- 2026-03-14：初始创建（AI Deep Research + 待 Mars 审核）
