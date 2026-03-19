---
title: "Dify"
subtitle: 开源 AI 应用开发平台 | LLMOps 中文之光
author: Mars
date: 2026-03-17
status: draft
tags: [AI产品, 开源平台, LLM应用开发, Workflow, RAG, Agent]
category: 产品库
product_name: Dify
founder: 张路宇(Luyu Zhang) / John Wang
founded_date: 2023
company_location: Menlo Park, CA / 中国
github_stars: 100,000+
latest_valuation: $180M (Series Pre-A, $30M raised March 2026)
---
> [!info] 快速了解
> **Dify** · 产品库



## 一句话定位

**视觉化 Agentic Workflow 构建平台** —— 用 no-code/low-code 的方式，让非技术背景的产品人、业务人直观搭建生产级 AI 应用，压缩从原型到上线的时间差。

---

## 基本面表

| 维度 | 数据 | 信息源 |
|------|------|--------|
| **创办时间** | 2023年 | 官方信息 |
| **创始人** | 张路宇(CEO/Luyu Zhang) + John Wang | [PitchBook](https://pitchbook.com/profiles/company/539409-43) |
| **最新融资** | Series Pre-A，$30M，估值$180M(2026年3月) | [BusinessWire](https://www.businesswire.com/news/home/20260309511426/en/Dify-Raises-$30-million-Series-Pre-A-to-Power-Enterprise-Grade-Agentic-Workflows) |
| **融资方** | HSG(lead)、GL Ventures、Alt-Alpha Capital、5Y Capital等 | [BusinessWire](https://www.businesswire.com/news/home/20260309511426/en/Dify-Raises-$30-million-Series-Pre-A-to-Power-Enterprise-Grade-Agentic-Workflows) |
| **GitHub Stars** | 100,000+ (全球Top 100开源项目) | [Dify Blog](https://dify.ai/blog/100k-stars-on-github-thank-you-to-our-amazing-open-source-community) |
| **用户规模** | 140万+台机器部署 / 2000+团队 / 280+企业客户 | [PitchBook](https://pitchbook.com/profiles/company/539409-43) |
| **2025年营收** | $3.1M (28人团队) | [GetLatka](https://getlatka.com/companies/dify.ai) |
| **部署方式** | 云服务(Dify Cloud) / 开源自建(Community/Enterprise) / 云市场(AWS/Azure) | 官方渠道 |
| **目标用户** | AI产品经理、创业者、企业工程团队、低代码开发者 | 市场定位 |
| **核心模式** | Free(Sandbox) + 阶梯付费(Professional/Team) + Enterprise定制 | [Dify Pricing](https://dify.ai/pricing) |

---

## 一、发展脉络与创始人基因

### 1.1 三阶段演变

**第一阶段(2023-早期)：RAG知识库专家**
- 初心就是 RAG + 知识库 + 客服 chatbot
- 逻辑很朴素：企业有非结构化数据，通过向量检索+LLM实现智能问答
- 本质上是降低中文互联网上用 RAG 的门槛
- 代表产品：Knowledge Base + Chat 模块

**第二阶段(2024年)：Workflow 视觉编排加入**
- 发现单纯 RAG 不够，企业需要复杂业务流
- 引入 Visual Workflow 编辑器(拖拽式流程图)
- 但仍核心聚焦在 RAG-based 应用

**第三阶段(2025-现在)：Agentic Workflow 全面升级**
- 融资 $30M 后，战略重心转向 **Agentic Workflows**
- 强化 Agent 能力：Function Calling + ReAct + 工具集成
- 目标明确：从"辅助应用"升级到"自主智能体"
- 本质转变：从 **人驱动(人用AI)** → **Agent驱动(Agent用工具)**

### 1.2 创始人基因

**张路宇(Luyu Zhang) 的思想DNA：**
- **出身背景**：中文互联网出身，对国内开发者痛点有深刻洞察
- **反共识基因**：选择开源而非闭源，选择 no-code 而非 code-first
- **距钱距离敏感**：从知识库→Workflow→Agent，每一步都在优化"距真实交易的距离"
- **中国市场洞察**：充分理解国内开发者的"快速迭代"诉求，产品节奏快、功能密集

---

## 二、成长旅程(Growth Story 2.1-2.7)

### 2.1 初始增长动力：开源社区网络效应

**关键数据：**
- 2024年末：60K+ GitHub Stars → 2026年3月：100K+ Stars
- 这说明什么？开源项目的网络效应在持续发酵

**增长机制：**
```
中文开发者需求(RAG/LLM应用)
    ↓
Dify 足够好用(no-code)
    ↓
开源免费(降低试错成本)
    ↓
GitHub传播 + 社区互动
    ↓
形成良性循环(更多使用→更多问题→更多优化)
```

### 2.2 商业化突破口：从Social到Enterprise

**2024年的转折：**
- Cloud 服务上线
- 推出阶梯付费模式(Sandbox/Professional/Team/Enterprise)
- 关键客户案例：Kakaku.com 用 Dify Enterprise 加速 AI 落地

**金字塔模型：**
- 开源社区：品牌和网络效应
- 云服务中层：高利润率 + 快速扩张
- Enterprise：粘性强 + LTV高

### 2.3 产品形态跃迁：从RAG工具到Workflow平台

**2024年最大的产品升级：Visual Workflow Builder**

解决问题：
```
数据源 → 预处理 → RAG检索 → LLM推理 → 条件判断 → 系统集成 → 输出
(一个完整的企业流程可以可视化搭建)
```

### 2.4 企业战斗力提升：Enterprise Edition的出现

**2025年关键动作：推出专门的 Enterprise 版本**

配置包括：
- 多租户(Multi-tenant)管理
- SSO / SAML / OIDC / OAuth2
- 两步验证 + MFA
- Kubernetes 部署 + Helm charts
- 云市场分销(AWS/Azure)

### 2.5 融资故事的深层逻辑

**Series Pre-A $30M，为什么这个时间点？**

深层逻辑：
```
Agent 时代到来
    ↓
Dify 有"Agent-ready"的技术栈
    ↓
但竞争开始加剧(LangChain/Coze/FastGPT)
    ↓
必须快速强化 Agentic 能力
    ↓
融资用于：人才、基础设施、营销
```

这笔融资不是为了"活下去"，而是为了"加速赢"。

### 2.6 竞争压力与差异化

**竞争态势(2025-2026)：**

| 产品 | 强项 | 弱项 | 适用场景 |
|------|------|------|---------|
| **Dify** | Workflow完整性、Enterprise支持、中文社区 | 初期复杂度稍高 | 复杂业务流、企业应用 |
| **LangChain** | 灵活性、开发者生态 | 需要编码、学习曲线陡 | 定制化需求、研究 |
| **Coze(ByteDance)** | 发布渠道多、社交集成、上手快 | Workflow不如Dify完整、偏个人应用 | 个人应用、社交矩阵 |
| **FastGPT** | 价格更便宜、RAG优化好 | 企业功能薄弱 | 成本敏感的中小企业 |

**Dify的护城河：**
1. **开源社区规模最大**(100K+ stars)
2. **Workflow 完整性最强**(支持if/else/loop)
3. **Enterprise 就绪**( 多租户/SSO/Kubernetes)
4. **中文优先**( 创始人背景 + 文档 + 社区)

### 2.7 未来信号与潜在拐点

**从最新融资公告看 2026-2027 的方向：**

关键词：
- "Agentic Workflow" (强调 Agent 自主性)
- "Enterprise-Grade" (强调商业化)
- "Lower the barrier to adoption" (强调简化)

---

## 三、战略框架

### 3.1 价值链分解

**Dify 在 AI 应用生命周期中的定位：**

```
想法阶段         原型开发         生产运维         持续优化
   ↓                ↓              ↓               ↓
Cloud Sandbox  →  Workflow Builder → Enterprise Deploy → Observability
(200 free calls)   (拖拽搭建)        (多租户管理)      (日志+标注+微调)
```

**关键：** 不是单纯的"开发工具"，而是 **full-stack LLMOps 平台**。

### 3.2 三层客户分类与商业模式

**第一层：社区开发者**
- 收入方式：品牌+网络效应，暂无直接变现
- 价值：网络效应 + 口碑 + GitHub stars
- 黏性：开源免费，迁移成本接近零

**第二层：创业公司/中等团队**
- 收入方式：Cloud SaaS ($59-$159/月)
- 价值：快速构建 MVP → 验证商业模式
- 黏性：中等，取决于工具粘性 vs 定制化需求

**第三层：企业用户**
- 收入方式：Enterprise 定制版本(Custom Pricing)
- 价值：合规部署 + 多租户 + 24/7 支持
- 黏性：极高，迁移成本巨大

### 3.3 距钱距离假说的应用

```
知识库(Customer Service)     → 距钱近，但市场份额已饱和
         ↓
Workflow(Business Automation) → 距钱更近，市场在扩大
         ↓
Agent(Decision Automation)    → 距钱最近，但风险最高(自主性风险)
```

Dify 的 bet：用 **可视化 + 可审计** 的方式，让企业敢用 Agent。

### 3.4 open-source-first 的护城河

**为什么 Dify 选择开源而非完全商业化？**

成本-收益分析：
- **成本**：失去 IP 独占性，代码公开
- **收益**：
  - 网络效应指数级增长(100K developers)
  - 社区贡献 bug fixes / feature requests
  - 企业用户信任度更高(代码可验证)
  - 融资估值溢价(开源项目通常估值更高)

---

## 四、蓝图复刻(How to Replicate)

### 4.1 产品层面

**必备条件：**
1. **No-code 可视化编辑器**(不能有学习曲线)
2. **丰富的预制集成**(50+ 工具、多个 LLM 模型接口)
3. **从简单到复杂的功能梯度**(Sandbox→Professional→Enterprise)
4. **完善的可观测性**(日志、标注、性能指标)

**关键创新点：**
- Workflow 的"完整性"(支持 if/else/loop，而不只是顺序执行)
- Agent 的"可审计性"(每一步决策都能看到reasoning)

### 4.2 商业模式层面

**必备条件：**
1. **双轨制**：开源社区 + 付费云服务
2. **阶梯式定价**：Free/Professional/Team/Enterprise
3. **云市场分销**：AWS/Azure Marketplace
4. **企业版本**：专门针对合规需求的 Enterprise Edition

### 4.3 社区层面

**必备条件：**
1. **周期性的大版本发布**( 每季度一个主要功能)
2. **开放的贡献机制**( GitHub issue/PR)
3. **活跃的社区反馈循环**(文档、教程、用户成功案例)
4. **母语优先**( Dify 的优势在中文社区)

---

## 五、Mars 视角：反共识与机会论

### 5.1 反共识判断

**市场共识：**
"Agentic Workflow 是未来，但构建 Agent 很复杂，需要工程师。"

**Mars 反共识：**
"正是因为复杂，所以 no-code/low-code 工具才是下一个机会。就像 PC 时代，DOS 很复杂 → Windows 出现 → PC 爆发。Dify 正在做 'AI 应用开发的 Windows'。"

### 5.2 距钱距离的三步走

**第一步(已完成)：RAG 知识库**
- 距钱最近的应用(企业客服)
- Dify 的差异：**易用性 + 中文优先**

**第二步(现在进行)：Workflow 自动化**
- 距钱更近：不只是回答问题，而是执行业务流程
- 竞品削弱：n8n/Zapier 太通用，不够 AI-native
- **机会窗口：2025-2027**

**第三步(未来赌注)：Agent 决策自动化**
- 距钱最近：企业想要的是"自动化决策"
- 风险最高：Agent 的失误成本很高
- **Dify 的优势：可视化 + 可审计**，降低企业风险

### 5.3 开源 vs 闭源的博弈

**传统认知：**
"开源产品最终都要商业化才能赚钱。"

**反思：**
- Dify 的开源是"战略层"，不是"退而求其次"
- 开源本身就是最高效的营销渠道(100K developers = free marketing)
- 商业化不是开源的"对立面"，而是"补充"
- **关键：** 开源的是"核心引擎"，商业化的是"企业特性"(SSO/多租户/合规)

### 5.4 AI 时代的"配置论"

Dify 本质上在做**配置**，而非**创造**：
- LLM 能力来自 OpenAI/Claude/Qwen
- 数据来自企业自己
- Workflow 逻辑来自业务需求
- **Dify 的角色：** 提供"配置界面"，让非技术人完成 AI 应用组装

这听起来不性感，但本质上是：
- **生产力工具的终极形态**( 降低最后一公里成本)
- **企业 AI 化的加速器**( 从"需要工程师" → "不需要工程师")

### 5.5 风险与限制

**近期风险：**
1. **竞争加剧**：LangChain 可能推出 no-code UI / Coze 在社交应用领域更强
2. **定价权有限**：开源身份制约了定价权，利润率可能永远不如 Figma/Notion
3. **Agent 的"可控性难题"**：即使可视化，企业仍然怕 Agent 失控

**中期机遇：**
1. **中文 AI 应用的标准**：如果 Dify 成为"国内开发者第一选择"，护城河很深
2. **企业 AI 化的基础设施**：从"工具"升级到"平台"的过程中，地位会更巩固

### 5.6 系统设计 > 个体努力

Dify 为什么能从 60K 快速增长到 100K stars？

**不是因为营销有多强，而是因为：**
- 产品本身足够好用(系统设计优秀)
- 开源社区足够大(网络效应自动传播)
- 文档足够清晰(使用者能自我赋能)
- 版本迭代足够快(社区看到希望)

**AI 草稿——待 Mars 确认**

---

## 六、相关案例

### 典型客户案例

**案例1：Kakaku.com(价格比较网站)**
- **背景**：大型日本互联网公司，有海量用户数据
- **痛点**：AI 实验分散在各个部门，没有统一的 LLMOps 平台
- **方案**：Dify Enterprise 统一部署
- **结果**：从实验到生产的时间从几周缩短到几小时

### 行业应用拓展

**金融领域：**
- 合规路由：智能分类 support tickets → 不同部门处理
- 审计友好：每个决策都可追溯(Workflow 的完整日志)
- 成本优化：减少人力审核环节

**电商/零售：**
- 商品推荐工作流
- 用户反馈分析 + 自动回复
- 库存预测 + 自动补货建议

**医疗/教育：**
- 知识库 + RAG(医学文献、教学资源)
- 工作流约束(满足 HIPAA/FERPA 等合规)

---

## 七、时间线

| 时间 | 事件 | 里程碑意义 |
|------|------|----------|
| **2023年初** | Dify 成立(张路宇 + John Wang) | 开源 AI 工具赛道起点 |
| **2023年中** | 首个 RAG 功能发布 | 验证知识库 + LLM 的市场需求 |
| **2023年末** | Cloud 服务上线 | 从开源 → 商业化的第一步 |
| **2024年初** | Visual Workflow Builder 发布 | 产品形态大升级，从工具 → 平台 |
| **2024年中** | GitHub Stars 达到 60K+ | 社区规模达到临界值 |
| **2024年末** | Enterprise Edition 发布 | 正式瞄准企业市场 |
| **2025年** | 营收达到 $3.1M(28人团队) | 商业模式初步验证 |
| **2026年3月** | 融资 $30M Series Pre-A，估值 $180M | 资本认可，进入加速期 |

---

## 八、参考来源

### 官方资源
- [Dify 官方网站](https://dify.ai/)
- [Dify GitHub 仓库](https://github.com/langgenius/dify/)
- [Dify 定价页面](https://dify.ai/pricing)
- [Dify Blog](https://dify.ai/blog)
- [Dify 文档](https://docs.dify.ai/)

### 融资与公司信息
- [BusinessWire - Dify Series Pre-A](https://www.businesswire.com/news/home/20260309511426/en/Dify-Raises-$30-million-Series-Pre-A-to-Power-Enterprise-Grade-Agentic-Workflows)
- [PitchBook Dify Profile](https://pitchbook.com/profiles/company/539409-43)
- [Crunchbase - Dify](https://www.crunchbase.com/organization/langgenius-inc)
- [GetLatka - Dify Revenue Data](https://getlatka.com/companies/dify.ai)

### 产品与功能分析
- [Dify AI Review 2026 - GPT Bots](https://www.gptbots.ai/blog/dify-ai)
- [Dify Platform Guide - CrazyRouter](https://crazyrouter.com/en/blog/dify-ai-platform-complete-guide-2026)
- [Dify Pricing & Feature Analysis - BayTech Consulting](https://www.baytechconsulting.com/blog/what-is-dify-ai-2025)
- [Dify Cloud Pricing - ArchitJN](https://www.architjn.com/blog/dify-cloud-pricing-plans-free-tier-when-to-self-host)

### 竞争分析
- [Open Source AI Agent Platform Comparison - Jimmy Song](https://jimmysong.io/blog/open-source-ai-agent-workflow-comparison/)
- [Dify vs LangChain - Dify Blog](https://dify.ai/blog/dify-vs-langchain)
- [Workflow Platform Comparison - UseDify](https://usedify.app/blog/workflow-platform-comparison-dify-fastgpt-ragflow)
- [LLMOps Tools Comparison - Medium](https://medium.com/iris-by-argon-co/a-review-of-low-code-ai-agents-development-platforms-f68e837af190)

### 企业应用与案例
- [Dify Enterprise Features](https://dify.ai/enterprise)
- [AWS Marketplace - Dify](https://aws.amazon.com/marketplace/pp/prodview-vhluia2quhiuu)
- [Azure Marketplace - Dify](https://dify.ai/blog/dify-x-microsoft-azure-marketplace)
- [VentureBeat - Dify Funding](https://venturebeat.com/business/dify-raises-30-million-series-pre-a-to-power-enterprise-grade-agentic-workflows)

### 行业研究
- [China AI Market 2025 - Venturous Group](https://www.venturous.group/resources/chinas-ai-in-2025-progress-players-and-parity/)
- [Dify GitHub Milestone - 100K Stars](https://dify.ai/blog/100k-stars-on-github-thank-you-to-our-amazing-open-source-community)

---

## 九、更新日志

| 版本 | 日期 | 更新内容 |
|------|------|---------|
| **v4.0** | 2026-03-17 | 初版完成。新增：Series Pre-A 融资信息、Agentic Workflow 战略分析、Mars 视角反共识判断、企业应用案例 |

---

## 附注

本产品卡片以 **AI 创业者视角** 撰写，强调：
1. **商业逻辑** 而非仅技术特性
2. **市场机会** 而非产品完整性
3. **反共识洞察** 而非追随主流观点
4. **系统设计** 而非个体努力

后续如有 Dify 新的融资、产品重大升级、或市场竞争格局变化，建议更新此卡片。


## 关联打法

- [[打法/01-机会识别/打开价格门槛新市场|打开价格门槛新市场]]
- [[打法/02-产品设计/Agent 代理式|Agent 代理式]]
- [[打法/02-产品设计/开源颠覆|开源颠覆]]
- [[打法/03-MVP策略/技术适配|技术适配]]
- [[打法/03-MVP策略/简易拼装|简易拼装]]
- [[打法/05-增长引擎/借势崛起|借势崛起]]
- [[打法/05-增长引擎/开源合作|开源合作]]
- [[打法/07-护城河/开源生态|开源生态]]


## 看完后推荐

- 想了解打法？看 [[打法/01-机会识别/打开价格门槛新市场|打开价格门槛新市场]]、[[打法/02-产品设计/Agent 代理式|Agent 代理式]]
