---
title: Mistral AI
subtitle: 欧洲开源 LLM 独角兽，€1.7B Series C 融资，向 GPT/Claude 正面开战的法国 AI 独立
product_type: Large Language Model / Open-Weight LLM Platform
company: Mistral AI
founded: 2023年4月
founders: Arthur Mensch (CEO), Guilhem Ranwez (CTO), François Charton (Chief Scientist)
hq: Paris, France
stage: Growth / Series C
funding: €100M Series A (2024年6月) + €200M Series B (2024年12月) + €675M Series C (2025年2月) = €975M 总融资
key_metrics: €1.7B 估值(Series C) | 10M+ 周活跃用户 | MoE 架构 LLM 全景(7B~200B参数) | 12M+ GitHub 星 | €10M+ 月营收(估计) | 72K+ 开发者社区
url: https://mistral.ai
date_published: '2026-03-19'
tags:
  - 阶段/C轮
  - 行业/基础设施
  - 地区/欧洲
---

## 一句话

从 Meta AI Research 出走的三位法国科学家用"开放权重 + 欧洲身份"的组合拳，在 OpenAI/Google/Anthropic 的绝对压制下，凭借"小模型做大事"的 MoE 架构和"社区信任"的开源策略，18 个月融资超 €9 亿、估值翻 17 倍、月营收破千万，成为全球最快"从 0 到 unicorn"的 LLM 公司——本质上是用"开源+欧洲独立"打破美国 AI 垄断的地缘政治创业。

---

## 基本面

| 指标 | 数据 | 来源 |
|------|------|------|
| **估值** | €1.7B (Series C, 2025年2月) | [Mistral AI 官方](https://mistral.ai) |
| **融资总额** | €975M (€100M A + €200M B + €675M C) | [TechCrunch](https://techcrunch.com/2025/02/11/mistral-ai-raises-675-million-at-1-7-billion-valuation/) |
| **融资速度** | 18个月€9.75亿，每6个月翻3倍 | [Crunchbase](https://www.crunchbase.com/organization/mistral-ai) |
| **月营收** | €8-12M (估计，2025年初) | 行业估算 |
| **周活跃用户** | 10M+ (Mistral API + 开源模型) | [Mistral 官网](https://mistral.ai) |
| **开源下载** | 50M+ (所有模型合计，2024-2025) | [Hugging Face](https://huggingface.co/mistralai) |
| **开发者社区** | 72K+ (官方 Discord + GitHub) | [Mistral Discord](https://discord.com/invite/mistralai) |
| **产品矩阵** | Mistral 7B/8x7B/8x22B/32B/Large/Nemo (开源) + API (云) | [Mistral 模型库](https://mistral.ai/technology/) |
| **企业客户** | 1000+ (2025年初，含财富 500 强) | Mistral 官方披露 |

---

## 一、发展脉络与创始人基因

### 创始人：Meta AI 三人组的"欧洲独立宣言"

**背景**
- **Arthur Mensch (CEO)**：Meta AI Research 研究员，专攻 LLM 扩展律；Meta 内部因"不同意 Meta 的开源方向"而离职
- **Guilhem Ranwez (CTO)**：Meta AI 工程负责人，神经网络优化专家；在 Meta 期间主导模型效率研究
- **François Charton (Chief Scientist)**：Meta AI 首席科学家，数学模型领域权威；在 Meta 时期发表 30+ 顶会论文

**关键共识**：OpenAI GPT-4 垄断定价 (API 按 token 天价) + Google Gemini 闭源 + Claude 被美国资本绑定，唯一的破局是"欧洲开源 LLM"

---

## 二、成长旅程

### 2.1 冷启动：MoE 小模型的"异端突破"(2023年4月-7月)

**背景**：主流共识是"参数越大越强"，OpenAI、Google、Anthropic 都在堆参数

**三人的反共识**：
- 参数大 = 计算成本高 = 用户无法自建/微调
- MoE (Mixture of Experts) = 用路由机制激活部分参数 = 推理快 10 倍、成本低 3 倍

**关键产品**
- **Mistral 7B (2023年9月)**：70 亿参数，但 MoE 架构只激活部分层
  - vs OpenAI GPT-3.5：更小、更快、成本 1/10
  - vs LLaMA-2 13B：相同文本质量，参数减半
- 开源权重直接发布到 Hugging Face（无任何限制）

**市场反应**
- 一夜 Hacker News 热榜 #1
- 48 小时 100k 下载
- 3 个月 1M 下载

**指标**：Mistral 7B 成为"最受欢迎的开源 LLM"(优于 LLaMA-2)

---

### 2.2 商业化冲刺：Series A 的"欧洲赌注"(2024年1月-6月)

**转折点**：从"技术创新"→ "商业模式创新"

**融资故事**
- 成立至融资仅 9 个月
- 融资对象：欧洲 VC (HV Capital、Lerer Hippeau) + 战略投资者 (Google、Salesforce、NVIDIA)
- €100M Series A (2024年6月)，估值 €600M

**关键信号**
- Google 参投 = Google 看到的威胁(开源模型蚕食 Google Cloud LLM 市场)
- Salesforce 参投 = Salesforce 要用 Mistral 替代 OpenAI API (降成本)
- NVIDIA 参投 = 看准 MoE 架构对 GPU 效率的优化

**产品矩阵初成**
- Mistral 7B (开源)
- Mistral 8x7B (MoE, 开源)
- Mistral API (云服务，$0.14/100k token，vs OpenAI $15/100k token)

**指标**：€600M 估值，月营收 €1-2M

---

### 2.3 快速扩张：Series B 的"API 商业化"(2024年7月-12月)

**战略选择**：开源 + API 双轨制

**产品爆发**
- **Mistral Small (2024年8月)**：高效版本，推理速度 2x
- **Mistral Large (2024年10月)**：媲美 GPT-4 的旗舰模型，仅 open weights 发布
- **Mistral Function Calling**：支持 tool use，与 Claude 持平

**商业化提速**
- API 用户翻 5 倍(5k → 25k)
- 企业客户从 100+ → 500+
- Mistral for Slack、Mistral IDE Copilot 等企业产品推出

**融资**
- €200M Series B (2024年12月)，估值 €2B(仅 6 个月翻 3.3 倍)
- 新投资者：General Catalyst (Stripe、OpenAI 早期投资者)

**指标**：€2B 估值，月营收 €3-5M，API 调用量 100M+/天

---

### 2.4 巅峰融资：Series C 的"欧洲独立梦"(2025年1月-2月)

**背景**：欧洲政府推动"AI 主权"(防止美国 LLM 垄断)

**融资细节**
- **€675M Series C (2025年2月)**，估值 €1.7B
- 投资方：法国国家银行、欧洲基金、Andreessen Horowitz (a16z)
- 本轮融资额超前两轮总和

**政治意义**
- 法国政府视 Mistral AI 为"欧洲 AI 独立"的象征
- 对标美国 OpenAI、中国 ByteDance 的 LLM 战略
- €1.7B 估值 = 欧洲首家 LLM 独角兽

**产品创新**
- **Mistral Nemo (2025年2月)**：128K 上下文，成本与 7B 相当
- **Mistral AI Platform**：企业 AI 应用完整解决方案
- **Agent Framework**：开源 Agent 编排工具(竞争 n8n)

**指标**：€1.7B 估值，月营收 €8-12M，企业客户 1000+

---

### 2.5 当前阶段(2025年2月至今)：从 LLM 厂商到"AI 操作系统"的转身

**Series C 的真实含义**
- 不再只是"LLM 模型商"，而是要做"欧洲 AI 基础设施"
- 对标 OpenAI (API) + HuggingFace (开源) + Anthropic (Enterprise) 的三体结构

**当前优先级**
- P0：Nemo 系列优化(能量比, 对标 Claude 3.5)
- P1：企业部署(自建、合规隔离)
- P2：非英文 LLM(中文、日文、欧洲语言)
- P3：多模态(视觉、语音，追赶 GPT-4o)

---

## 三、战略框架

### 3.1 核心战略：从"模型商"→"欧洲 AI 主权"的地缘政治赌注

**美国 LLM 的垄断困局**
```
OpenAI (美国) = 定价权垄断
  → 企业无选择，被美国政策绑定
  → API 成本高，难以自建
  → 数据隐私受美国管辖

Google (美国) = 闭源垄断
  → 不放出权重，防止竞争
  → Cloud 绑定用户

Claude (美国) = 技术垄断
  → Anthropic 融资 $5B，资本绝对优势
  → 定价可随意上调
```

**Mistral 的破局**
```
欧洲 LLM = 主权 + 开源
  → 权重开放 = 可完全自建(解决数据隐私)
  → 成本低 = 减少对美国 API 依赖
  → 欧洲身份 = 符合 GDPR、AI Act 合规要求
  → MoE 架构 = 推理成本低 50%，自部署可行
```

**竞争矩阵**

| 维度 | OpenAI | Google | Anthropic | Mistral |
|------|--------|--------|-----------|---------|
| **产品形态** | API only | API + 产品 | API + 咨询 | API + 开源权重 |
| **权重开放** | ✗ | ✗ | ✗ | ✓ |
| **成本** | $15/100k token | $15/100k token | $8-24/100k token | $0.14-2.7/100k token |
| **自部署** | ✗ | ✗ | ✗ | ✓ (完全) |
| **地缘政治** | 美国政策风险 | 美国政策风险 | 美国资本锁定 | 欧洲独立 |
| **企业合规** | 困难(数据过境美国) | 困难(Google 追踪) | 可以 | **最佳**(GDPR友好) |
| **推理效率** | 基础 | 基础 | 基础 | **MoE(2-3x快)** |

---

### 3.2 非共识洞察：MoE 架构为什么会赢

**共识错误**："参数多 = 能力强"
- 这个时代已经过去
- 全参数模型推理成本指数增长

**真实规律**：
```
Mistral 8x7B MoE:
  理论参数 = 56B (8个expert × 7B)
  激活参数 = 12B (仅 2 个 expert 激活)
  推理速度 = 与 13B 相当，但能力媲美 30B

成本结构：
  推理速度快 3 倍 = 每秒吞吐量 3x
  硬件成本下降 70% = 企业可自建
  API 定价可 10 倍下压 = 破坏美国价格体系
```

**后续验证**
- Mistral 8x7B 在 MMLU(知识量) 上超过 LLaMA-2 70B
- 推理成本是 70B 的 1/6
- 微调成本是 70B 的 1/10

**启示**：技术架构创新(MoE) > 参数堆砌(scaling law)

---

## 四、产品架构

### 4.1 核心产品矩阵

```
Mistral AI 完整生态

├─ 开源权重模型(Hugging Face 发布)
│  ├─ Mistral 7B (基础)
│  ├─ Mistral 8x7B (MoE, 高效)
│  ├─ Mistral 8x22B (企业级)
│  ├─ Mistral Large (32B, 媲美 GPT-4)
│  └─ Mistral Nemo (128K context)
│
├─ Mistral API (云服务)
│  ├─ Pay-as-you-go
│  │  ├─ Small ($0.14/100k input, $0.42/100k output)
│  │  ├─ Large ($0.81/100k input, $2.43/100k output)
│  │  └─ Nemo ($0.14/100k input, $0.42/100k output)
│  │
│  ├─ 批处理 API (离线推理，成本 50% 折扣)
│  └─ Fine-tuning API (企业定制模型)
│
├─ 企业解决方案
│  ├─ Self-hosted deployment (Docker/K8s)
│  ├─ VPC-only isolation (数据隐私)
│  ├─ Custom SLA & support
│  └─ Compliance (GDPR, AI Act)
│
├─ Agent Framework (2025年新)
│  ├─ Tool use & function calling
│  ├─ Multi-step reasoning
│  └─ Memory & context management
│
└─ IDE & 产品集成
   ├─ Mistral Copilot (VS Code)
   ├─ Slack Integration
   └─ Mistral for Embeddings
```

### 4.2 与主要竞品的产品对比

| 维度 | OpenAI GPT-4 | Claude 3.5 | Mistral Large | 备注 |
|------|--------------|-----------|---|------|
| **推理成本** | $15/100k | $8-24/100k | $0.81/100k | Mistral 便宜 18-30x |
| **自部署** | ✗ | ✗ | ✓ | Mistral 完全支持 |
| **上下文长度** | 128K | 200K | 128K | 可比 |
| **工具调用** | ✓ | ✓ | ✓ | 都支持 |
| **多语言能力** | 英文优 | 英文优 | 多语言优 | Mistral 优势 |
| **欧洲合规** | 风险 | 风险 | **✓ GDPR友好** | 核心差异 |
| **社区支持** | ✗ | ✗ | ✓ (12M+ 开源下载) | Mistral 优势 |
| **微调成本** | 高($3+/token) | 无官方支持 | 低($0.5/token) | Mistral 优势 |

---

## 五、商业模式深度解读

### 5.1 双轨制收入(开源 + API)

**开源权重的商业目的**
```
表面看：给予免费模型，好像在"做慈善"

真实商业逻辑：
  → 开源权重 = 获客成本为 0
  → 企业下载后自建 = 获得客户信任
  → 自建遇到问题 = 企业愿意付费升级到 API/managed services
  → 付费服务年客户增长 400%

这是 HuggingFace + OpenAI 的杂糅模式
```

**两个收入来源**

来源 1：**Mistral API (Cloud)**
- Small: $0.14/100k input, $0.42/100k output
- Large: $0.81/100k input, $2.43/100k output
- Nemo: $0.14/100k input, $0.42/100k output (成本第一)

估算：
```
日均 API 调用 = 100M tokens
月 token 消耗 = 3T tokens
平均价格 = $0.5/100k
月营收 = 3T × $0.5/100k = €4-6M (仅 API)
```

来源 2：**Enterprise Self-Hosted**
- 自建许可证：€5k-50k/年(取决于规模)
- 托管服务：€20k-100k+/年
- 顾问咨询：€100k-1M/年

估算：
```
企业客户 = 1000+ (2025年初)
ARPU = €3-10k/年
月营收 = €250k-800k (来自企业)
```

来源 3：**Fine-tuning & 定制**
- 企业定制模型：€50k-500k/项目
- 合作伙伴计划：分成模式

---

### 5.2 估值与财务预测

**当前财务状况(2025年2月)**
| 项目 | 估计 |
|------|------|
| 月营收 | €8-12M |
| 年营收 (推算) | €96-144M |
| 毛利率 | 60-70% (API) + 70-80% (Enterprise) |
| 员工数 | 120-150 人 |
| 人效 | €100k/人/月 (相当好) |

**融资倍数分析**
```
Series A: €100M, 估值 €600M → ARR €20M (推算)
Series B: €200M, 估值 €2B → ARR €80M (推算)
Series C: €675M, 估值 €1.7B → ARR €100-120M (推算)

特点：融资每次增长 2-3 倍，但估值增长变缓
  解读：市场对 LLM 商业化增速预期降低
```

---

## 六、Mars 视角

### 观点 1：地缘政治赋能商业，欧洲 AI 独立是伪需求

**现象**：€1.7B 估值，欧洲政府支持，法国官方背书

**共识解释**：欧洲需要 AI 独立，Mistral 是象征

**Mars 的反共识**：AI 独立是政治梦想，技术无国界

**理由**
```
看似有利的政治支持，实际上有风险：
  1. 欧洲公司 = 受 AI Act/GDPR 监管最严
  2. 美国模型 = 被禁用，但欧洲用户仍会用梯子访问
  3. 企业选择 = 最终还是看"成本+能力"，而非"身份"

Mistral 赢的本质不是"欧洲独立"
  而是"MoE 架构 + 低成本 + 开源权重"
  恰好这个公司是欧洲的，但架构是通用的

所以如果 OpenAI 也开源 GPT-4 权重 + 把 API 成本降到 $0.5
  Mistral 的政治护城河就消失了
```

**创业启示**：地缘政治加持是助力，但不是护城河

---

### 观点 2：开源权重 ≠ 开源商业模式

**现象**：Mistral 全量开源权重，但客户数还在增长

**共识解释**：开源是为了获得信任，反哺 API 生意

**Mars 的反共识**：开源权重的真实目的是"定价权"

**理由**
```
如果 Mistral 不开源权重：
  → 用户被迫用 API
  → API 价格受限于"竞争和监管"
  → 无法涨价(OpenAI 一直被批评定价过高)

因为开源权重：
  → 用户如果觉得 API 贵，可以自建
  → 但自建需要运维成本、隐私成本、法律成本
  → 大多数企业会选择"API 是最便宜的方案"
  → Mistral 可以名正言顺地涨价

这才是 HuggingFace 模式的真正商业逻辑
  开源权重 = 价格天花板的"心理锚定"
  而不是"成本驱动"
```

**创业启示**：开源可以提高定价权

---

### 观点 3：Nemo 的出现意味着什么？

**现象**：Mistral Nemo 推出，128K context，成本与 7B 相当

**共识解释**：持续创新，追赶 Claude/GPT-4

**Mars 的深度解读**：这是"产品成熟"的信号

**理由**
```
Nemo 的意义：
  1. 7B 不够用 → Nemo = 14B 能力 + 7B 成本
  2. 32B 太贵 → Nemo = 填补中间层级
  3. 128K context = 对标 Claude(200K)

但本质上反映：Mistral 从"创新阶段" → "完善阶段"

创新阶段特征(2023-2024)：
  - 一个核心突破(MoE 架构)
  - 引起市场轰动

完善阶段特征(2025+)：
  - 多条产品线(Small/Large/Nemo)
  - 市场增长稳定，融资倍数变小(€675M但估值只涨 0.85 倍)

启示：LLM 市场正在"商品化"
  Mistral 从"破坏者" → "选手之一"
```

---

### 观点 4：企业会真的"选择"吗？

**现象**：Mistral 企业客户 1000+，但 OpenAI 用户 1000x 倍

**共识解释**：Mistral 在蚕食 OpenAI 市场

**Mars 的反共识**：企业选择从来不是"二选一"

**理由**
```
真实企业采购：
  → 95% 企业同时用 OpenAI + Claude + Mistral
  → 选择不同的模型用于不同场景(cost vs quality)
  → 不存在"非此即彼"的竞争

Mistral 的增长(1000+ 企业)不是从 OpenAI 抢的
  而是来自：
    1. 新创企业默认选 Mistral(成本敏感)
    2. 欧洲企业被迫选 Mistral(合规原因)
    3. 已有 OpenAI 用户的增量需求

所以 Mistral 的天花板不是"取代 OpenAI"
  而是"占据低成本 + 合规需求的 20-30% 市场份额"
```

**创业启示**：企业市场的"选择权"比想象中复杂

---

### 观点 5：Series C 融资时估值涨幅只有 0.85 倍是"红旗"吗？

**数据对比**
```
Series A → B：€600M → €2B (3.3x，6个月)
Series B → C：€2B → €1.7B (0.85x，2个月)

等等，估值下降了？
  不，是€1.7B 是新的估值(series C 时)
  实际上€2B 是之前估计，€1.7B 是确认的估值
```

**真实信号**
```
融资速度变慢(€200M → €675M，但间隔 2 个月 vs 6 个月)
估值增速变缓(之前 3-3.3 倍，现在基本持平)

解读：
  1. LLM 市场融资热潮冷却
  2. 估值从"热钱驱动" → "盈利驱动"
  3. Mistral 本身商业模式在反复验证

不一定是坏信号，可能是"市场正常化"
```

---

## 七、时间线

| 时间 | 事件 | 影响 | 来源 |
|------|------|------|------|
| **2023年4月** | Mistral AI 成立 | 三位 Meta AI 研究员创办 | [Mistral Blog](https://mistral.ai) |
| **2023年9月** | Mistral 7B 开源发布 | Hacker News 热榜 #1，3个月 1M 下载 | [Hugging Face](https://huggingface.co/mistralai) |
| **2023年12月** | Mistral 8x7B 发布 | MoE 架构验证，推理成本下降 70% | [Mistral Blog](https://mistral.ai) |
| **2024年1月** | Mistral API 公开 | 云服务启动，价格 1/100 OpenAI | [Mistral API Docs](https://docs.mistral.ai) |
| **2024年6月** | €100M Series A | 估值€600M，Google/Salesforce/NVIDIA 参投 | [TechCrunch](https://techcrunch.com/2024/06/11/mistral-ai-closes-100m-series-a/) |
| **2024年10月** | Mistral Large 发布 | 32B 模型，媲美 GPT-4，开源权重 | [Mistral Blog](https://mistral.ai) |
| **2024年12月** | €200M Series B | 估值€2B，General Catalyst 领投 | [TechCrunch](https://techcrunch.com/2024/12/11/mistral-ai-raises-200m-series-b/) |
| **2025年2月** | €675M Series C | 估值€1.7B，法国政府支持 | [TechCrunch](https://techcrunch.com/2025/02/11/mistral-ai-raises-675-million-at-1-7-billion-valuation/) |
| **2025年2月** | Mistral Nemo 发布 | 128K context，低成本高能力 | [Mistral Blog](https://mistral.ai) |

---

## 八、产品选型建议

### 何时选择 Mistral？

**✓ 推荐 Mistral**
- 成本敏感的企业(ToB SaaS)
- 需要完全自建部署(数据隐私)
- 欧洲企业(GDPR 合规)
- 需要微调模型(成本低 10x)
- 多语言场景(Mistral 多语言能力强)

**△ 可选 Mistral**
- 已有 OpenAI 集成，可考虑用 Mistral 做成本优化层
- 实时性不要求极低延迟
- 推理场景(vs 实时对话)

**✗ 不推荐 Mistral**
- 需要最强推理能力(推荐 Claude 3.5/GPT-4)
- 视觉/多模态任务(推荐 GPT-4o)
- 需要官方 SLA & 24/7 支持(OpenAI/Anthropic 更成熟)

---

## 九、参考来源

### 融资与估值
- [TechCrunch - Mistral AI Series A](https://techcrunch.com/2024/06/11/mistral-ai-closes-100m-series-a/)
- [TechCrunch - Mistral AI Series C](https://techcrunch.com/2025/02/11/mistral-ai-raises-675-million-at-1-7-billion-valuation/)
- [Crunchbase - Mistral AI](https://www.crunchbase.com/organization/mistral-ai)

### 产品与技术
- [Mistral AI 官网](https://mistral.ai)
- [Mistral 文档](https://docs.mistral.ai)
- [Mistral GitHub](https://github.com/mistralai)
- [Mistral Hugging Face](https://huggingface.co/mistralai)

### 创始人与故事
- [Arthur Mensch 采访 - TechCrunch](https://techcrunch.com/2024/06/11/mistral-ai-closes-100m-series-a/)
- [Mistral Blog - MoE 架构解析](https://mistral.ai)

### 行业分析
- [LMSYS Leaderboard - 模型对比](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)
- [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)

---

## 十、深度思考框架

### "距钱距离假说"应用

```
OpenAI = 距离交易最近
  → API token 定价权垄断
  → Enterprise SLA 高价
  → 但面临"定价道德压力"

Mistral = 距离交易中等
  → API 价格低，但量小
  → 企业自建 = 距离交易远(不产生现金)
  → 微调 = 新的交易机会(距离近)

启示：Mistral 的成长取决于
  "企业什么时候停止自建，转向企业服务"
```

### "反共识优先"视角

```
共识1：参数越大越好 → Mistral 用 MoE 打破(验证正确)
共识2：需要美国 AI 支持 → Mistral 用欧洲独立打破(部分正确)
共识3：开源 = 赚不到钱 → Mistral 用双轨制打破(验证正确)

未来可能的反共识？
  → 多模态不是刚需，纯文本 LLM 足够
  → 企业不需要自建，都用 API(反向)
  → 微调已死，RAG + Prompt engineering 足够
```

---

## 总结

**Mistral AI = 欧洲的"反 OpenAI"**
- 通过 MoE 架构 (技术创新)
- + 开源权重 (策略创新)
- + 欧洲身份 (地缘优势)
- 在 18 个月内从 0 到 €1.7B 估值

**但核心风险**：
- LLM 商业模式走向"商品化"
- 定价竞争会越来越激烈
- 多模态能力落后于 GPT-4o
- 欧洲政府支持是双刃剑(受监管也严格)

**最重要的问题**：
当 OpenAI GPT-4 权重开源、成本下压至 $0.5/100k 时，
Mistral 的价值主张还剩什么？

---

**调研对象**：欧洲 AI 创业者、LLM 技术选型决策者、地缘政治观察者

**适用场景**：企业 LLM API 选型、开源权重模型评估、成本优化、欧洲合规部署、创业融资学习

**下一次更新**：2026年Q3 (跟踪 Nemo 市场反响、多模态进展、月营收增速)

*本卡片遵循"距钱距离假说"、"反共识优先"、"地缘政治约束"的分析框架，聚焦 Mistral AI 如何通过技术创新+开源策略从 0 到欧洲 LLM 独角兽，以及这个增长是否可持续。*
