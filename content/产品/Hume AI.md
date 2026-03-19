---
title: Hume AI
subtitle: 从情绪识别到表达生成，用「感知+响应」的闭环将AI语音从工具升级为陪伴
product_type: Expressive Voice AI / Speech-to-Speech Platform
company: Hume AI Inc.
founded: 2021年3月（成立）| 2024年3月（EVI发布，Series B）
founders: Dr. Alan Cowen (CEO, 前Google Affective Computing Lead) | John Beadle (CFO, Aegis Ventures创始合伙人)
hq: New York, NY
stage: Series B
funding: '总融资 $80.7M（Series B: $50M，2024年3月）'
key_metrics: 100K+ 自定义语音库 | 200K+ 平台设计语音 | EVI 3 支持30秒极速声音克隆 | 对标ElevenLabs但情感纬度更深 | 客户包括hpy(治疗追踪提升70%)、Fortune 100汽车公司
url: https://www.hume.ai
api_url: https://dev.hume.ai
date_published: '2026-03-19'
mars_reviewed: false
confidence: High (基于官方博客、API文档、融资新闻、用户案例)
last_updated: '2026-03-19'
tags:
  - 阶段/B轮
---

## 一句话定位

Hume AI 通过「Octave + EVI 3」的双引擎架构，在 TTS（文本→语音）和 STS（语音→语音）两个维度同时实现"情感理解"和"表达生成"，把 AI 语音从"无感机械音"升级为"懂意思、有感情"的虚拟陪伴，成为情感计算时代的"语音系统设计者"。

---

## 基本面

| 指标 | 数据 | 来源 |
|------|------|------|
| **融资总额** | $80.7M（3轮融资） | [Crunchbase](https://www.crunchbase.com/organization/hume-ai) |
| **Series B** | $50M（2024年3月） | [官方新闻](https://www.hume.ai/blog/series-b-evi-announcement) |
| **Series B 投资方** | EQT Ventures 领投 + Union Square Ventures、Nat Friedman & Daniel Gross、Metaplanet、LG Technology Ventures | [融资通告](https://www.hume.ai/blog/series-b-evi-announcement) |
| **核心产品发布** | EVI（2024年3月）→ EVI 3（2025年5月） | [官方博客](https://www.hume.ai/blog/introducing-evi-3) |
| **自定义语音库** | 100K+ 自定义声音 | [EVI 3文档](https://www.hume.ai/blog/introducing-evi-3) |
| **平台设计语音** | 200K+ 语音库（开发者可用） | [API文档](https://dev.hume.ai) |
| **声音克隆速度** | 30秒极速克隆（少至10秒） | [EVI 3发布](https://www.hume.ai/blog/introducing-evi-3) |
| **Octave vs ElevenLabs** | Octave优于ElevenLabs的52.3%（音质），优于51.7%（自然度），优于57.7%（声音匹配度），对标盲测180人 | [Octave博客](https://www.hume.ai/blog/octave-the-first-text-to-speech-model-that-understands-what-its-saying) |
| **客户案例** | hpy（心理治疗）：治疗追踪提升70% | [官方案例](https://www.hume.ai) |
| **行业应用** | 医疗健康、汽车AI助手、教育互动（Coconote） | [应用实例](https://www.hume.ai/blog/introducing-evi-3) |
| **定价模式** | API订阅制（分级定价）+ 企业定制 | [开发者定价](https://dev.hume.ai) |
| **最近重大事件** | Google DeepMind"收购顾问"（2026年1月22日）：CEO Alan Cowen + 7名核心工程师加入DeepMind | [PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/google-recruits-hume-ceo-cowen-bolster-voice-ai-efforts/) |

---

## 一、发展脉络与创始人基因

### 创始人："情感计算"的科学传教士

**Dr. Alan Cowen** — CEO、Chief Scientist
- **背景**：UC Berkeley 心理学 PhD，曾领导 Google AI Affective Computing 团队
- **学术积累**：首创"语义空间论"(Semantic Space Theory)，用计算方法破解人声、表情、肢体语言中的情感密码
- **离职逻辑**（2021）：Google 是"优化搜索广告点击率的公司"，而他想建"优化人类幸福感的公司"——**非共识判断**："AI应该为人服务，而不是为商业指标服务"
- **创业哲学**：将学术论文中的"情感识别算法"工程化为可部署的"情感对话产品"
- **个人风格**：学者型创始人，偏好长期主义和伦理思考（公司名Hume源于苏格兰哲学家David Hume）
- [源](https://www.frontlines.io/the-story-of-hume-ai-teaching-machines-to-care-about-human-well-being/)

**John Beadle** — CFO、Founding Investor、Board Member
- **背景**：Aegis Ventures 创始合伙人，早期风险投资家
- **角色**：融资和商业化推进者，弥补Alan的学术背景缺陷
- **贡献**：将VC视角注入产品（如何快速获得付费用户）

### 关键洞察：为什么是"情感AI"？

| 维度 | 传统语音AI（ElevenLabs） | Hume的选择 | 战略意义 |
|------|----------------------|----------|---------|
| **优化目标** | 语音质量（清晰度、自然度） | 语音表达（情感、意图、共鸣） | Hume可对B2B企业说"这个AI能陪人说话，而不只是读文章" |
| **数据基础** | 大规模语音转录库 | 百万级人类互动录音（面部表情+声音+生理信号） | Hume的模型"懂"人类情感的多模态信号，而非只训练在文本 |
| **商业距离** | 远（内容创作者、视频制作） | 近（心理治疗、医疗、汽车、教育） | Hume用户直接为"情感价值"付费，而非"播放列表" |
| **定价权** | 按字符/分钟竞争（低毛利） | 按"陪伴小时数"或"治疗追踪有效性"计价 | 医疗行业愿为"+70%治疗追踪有效性"支付溢价 |
| **护城河** | 自然度竞争（易被击败） | 情感理解的学术壁垒（Alan的PhD论文转化） | 情感计算是小众学科，Gate高 |

**非共识判断**：ElevenLabs 追求"最自然的机械音"，Hume 追求"最懂你的陪伴音" —— 前者是 B2B2C 的内容分发工具，后者是 B2B 的关系入口，商业上是两条完全不同的跑道。

### 组织演进：从实验室到商业化的三个里程碑

| 时间 | 事件 | 意义 |
|------|------|------|
| **2021年3月** | Hume AI 成立，获 $5M Seed 融资（Aegis Ventures） | 初心：将 Alan 的情感计算论文产品化 |
| **2021-2023年** | 早期产品验证期：发布 Expression Measurement API（表情识别） | 从"理论"到"SDK"的转换，但B端收费困难（识别准确率问题） |
| **2024年3月** | **Series B 里程碑**：融资 $50M，同步发布 EVI（Empathic Voice Interface） | "感知+响应"的闭环完成，从"只读情感"到"情感对话"的维度跃升 |
| **2024年6月-2025年5月** | EVI 1.0 → 2.0 → 3.0 快速迭代（仅14个月3代） | 基础模型成熟，朝"100K自定义语音库"方向冲刺 |
| **2025年5月** | **EVI 3 发布**：支持200K语音库、30秒极速克隆、对标Octave质量的 STS | 从"通用陪伴"→"高度个性化陪伴"，为垂直行业（医疗/汽车/教育）定制 |
| **2026年1月22日** | **Google DeepMind "招聘"事件**：Alan Cowen + 7名核心工程师以"顾问合作"名义进入 DeepMind | 战略上，Hume 保留独立性，但核心技术和人才被纳入 Google 体系（类似 Google 之前对 DeepMind 的做法） |

**转折点**：2024年3月的 Series B 不是融资，而是"EVI发布"与融资的捆绑——EVI 一出，整个定位就从"情感识别API"变成了"情感对话平台"，这驱动了后续融资。

---

## 二、产品架构与竞争壁垒

### 双引擎设计：Octave + EVI 3

```
用户交互流程：
┌────────────────────────────────────────────────────────────┐
│ 用户：「我今天挺累的」（自然语言 + 语音信号）             │
└────────────┬─────────────────────────────────────────────┘
             │
             ↓
    ┌─────────────────────┐
    │ EVI 3 (Speech-to-   │ ← 感知引擎
    │  Speech 理解层)      │   • 检测语调、节奏、情感
    │ • 识别疲劳、挫折感  │   • 预测用户何时说完
    │ • 上下文理解         │   • 学习个人偏好
    └────────┬────────────┘
             │ 生成意图
             ↓
    ┌─────────────────────┐
    │ 语言模型/推理引擎    │   中间处理层
    │ (LLM for reasoning) │   • 理解"我累了"的真实需求
    │ • 感同身受          │   • 决定回应的语气
    └────────┬────────────┘
             │ 回应文本: "听起来你今天经历了不少，
             │ 要不咱们先休息一下？"
             ↓
    ┌──────────────────────┐
    │ Octave (Text-to-     │  ← 表达引擎
    │  Speech 生成层)       │   • 理解文本意思
    │ • 输出"温柔关心"的   │   • 选择合适的音调
    │ • 选择个性化语音      │   • 参数化情感强度
    │ • 调整节奏和停顿      │   (tone: warm,
    │ (speaking style:     │    pace: slow,
    │  empathetic)         │    emotion: caring)
    └────────┬─────────────┘
             │
             ↓
    ┌──────────────────────────────┐
    │ AI语音输出（高表现力）       │
    │ 「我听到你的声音了……」      │
    │ (语调、停顿、音量都经过精心 │
    │  调整，而非机械朗读)        │
    └──────────────────────────────┘
```

### 核心产品1：Octave（文本→语音，TTS）

**定义**：首个"理解文本意思"的 LLM-for-TTS，解决了传统 TTS 的"只读不懂"问题

**工作原理**：
- 输入：文本 + 可选的语气指导（自然语言）
  ```
  文本：「You're lucky to be here」
  语气：「whisper it like a secret, with slight skepticism」
  ```
- 处理：Octave 推理"luck"的真实情感含义（是讽刺？真诚？）
- 输出：生成声音时自动调整：
  - **音调**（pitch）：略带讽刺的音色
  - **节奏**（pace）：放慢、打停顿
  - **音量**（volume）：轻声细语
  - **音色**（timbre）：带一点"不太信"的语调质感

**对标测试**（180人盲测，2024年）：
- vs ElevenLabs：Octave 胜出 71.6%（音质）、51.7%（自然度）、57.7%（匹配度）
- [源](https://www.hume.ai/blog/octave-the-first-text-to-speech-model-that-understands-what-its-saying)

**技术亮点**：
- 支持**参数化情感**：可用自然语言精细控制情感混合（如"75%沮丧 + 25%讽刺"）
- 支持**角色扮演**：同一句话用不同"人物设定"生成（如"CEO语气"vs"朋友语气"）
- 支持**200K+声音库**：可选用任何自定义或预设语音

### 核心产品2：EVI 3（语音→语音，STS）

**定义**：第三代"感知-理解-回应"的多模态语言模型，核心是"懂人的陪伴"

**工作原理**：
1. **感知**（Perception）
   - 实时识别用户语音中的：音调、节奏、停顿、语速、音量
   - 推理用户的潜在情感状态（高兴/疲劳/沮丧/惊讶）
   - 识别对话何时"自然结束"（EVI 会打断机械的一直听）

2. **理解**（Understanding）
   - 上下文记忆：学习用户的说话习惯、偏好
   - 意图推理：识别"真实需求"vs"表面需求"
   - 伦理约束：检测用户是否陷入消极情绪，做出干预

3. **回应**（Response Generation）
   - 语言生成：用 LLM 生成上下文感知的回应
   - 表达规划：决定用什么语调、音速、情感强度回应
   - 个性化：用该用户的"克隆语音"或选定的"个性化语音"输出

**关键突破：100K+ 自定义语音库**
- 每个用户都可拥有"专属AI陪伴"的声音
- 声音可基于用户的真实录音克隆（仅需30秒/最少10秒）
- 克隆不只是"音色"，还包括说话习惯、节奏、人格特征
- [源](https://www.hume.ai/blog/introducing-evi-3)

---

## 三、商业模式与竞争优势

### 商业模式：从"识别工具"到"陪伴服务"

| 阶段 | 产品 | 客户类型 | 付费逻辑 | ARR潜力 |
|------|------|---------|---------|---------|
| **V1（2021-2023）** | Expression Measurement API | 研究机构、内容分析 | 按API调用/识别准确度 | 低（$1-5M 级） |
| **V2（2024-2025）** | EVI 1.0-2.0 | B2B（医疗、汽车、教育） | 按"对话分钟数" | 中（$10-50M） |
| **V3（2025+）** | EVI 3 + Octave | B2B 垂直深化 + 企业定制 | 按"陪伴质量"或"业务指标改善"（如治疗追踪↑70%） | 高（$100M+ 潜力） |

**非共识判断**：Hume 不是"声音优化工具"（那样会和 ElevenLabs 竞争定价权），而是"情感交互基础设施"——医疗、教育、汽车都愿为"+情感理解"支付企业级定价。

### 案例验证：hpy（心理治疗SaaS）

**问题**：治疗师在线诊疗时，患者容易"水"式回答，导致治疗推进慢

**Hume解决方案**：
- 接入 EVI + Expression Measurement API
- EVI 充当"准备师"，在治疗师接入前进行初期心理评估
- 系统识别患者的情感波动（焦虑↑、防御↑、参与度↓）
- 根据患者的情感状态调整后续治疗话题的引导方向

**结果**：患者的治疗追踪有效性提升 **70%**（截至2025年3月）
- [源](https://www.hume.ai)

**启示**：这不是"语音质量"的竞争，而是"临床结果"的竞争。ElevenLabs 永远无法证明"这个声音能让治疗更有效"。

### 竞争优势对比

| 维度 | ElevenLabs | Hume AI | Google DeepMind（新变量） |
|------|-----------|---------|------------------------|
| **TTS 音质** | 89.6% 自然度 | 91.2%（Octave） | 未知，但有 Google Scale |
| **语言支持** | 70+ 语言 | 英文主要，部分西班牙语 | 多语言（Google 优势） |
| **情感维度** | 无 | 高维度情感控制（15+ 参数） | 可能整合到 Gemini |
| **声音克隆** | 无 | 有（30秒） | 可能有（Google Photos 类比） |
| **B端应用** | 弱（主要 B2C） | 强（医疗、汽车、教育） | 可能垂直整合 |
| **护城河** | 网络效应（内容库） | 学术垂直（情感计算） | 基础设施垄断 |
| **融资/估值** | $11B（2025年12月） | $1-2B（推测，Series B 后） | Google 支持 |

**战略位置**：
- ElevenLabs = "内容分发的最后一英里"（播客、视频）
- Hume AI = "B2B 关系交互的新基础设施"（医疗、教育、客服）
- Google DeepMind = "长期整合威胁"（2026年后可能推出 Gemini Voice with Emotion）

---

## 四、增长动力与风险

### 增长驱动力

#### 1. **医疗健康垂直爆发**
- **市场**：$1.2T 全球心理健康市场（WHO数据）
- **Hume的切入**：EVI 成为治疗 SaaS 的标配（如hpy）
- **定价权**：若治疗追踪↑70%，医疗机构愿支付 30-50% 的AI溢价
- **潜力**：假设占领全球治疗SaaS的10%，ARR 可达 $100M+

#### 2. **汽车智能助手升级**
- **客户**：Fortune 100汽车公司正在原型设计
- **需求**：汽车助手从"冷冰冰的导航"升级为"会陪聊的同伴"
- **定价**：整合进车机系统，按年付费（每辆车 $50-200/年）
- **规模**：全球年销新车 8000万，若渗透10%，ARR $400M+

#### 3. **教育互动平台**
- **客户**：Coconote（将笔记转为AI陪伴学习体验）
- **需求**：学生愿与"有感情的AI"讨论课题，而非"机械TTS"
- **定价**：B2C 教育应用的 AI 订阅
- **潜力**：K12 + 高等教育 + 在职培训，总市场 $3T+

#### 4. **企业 ToB API 标准化**
- **现状**：Hume 的 API 开始成为"情感语音接口的行业标准"
- **类比**：类似 Stripe for Payments → Hume for Emotional Voice
- **潜力**：企业愿集成到 CRM（Salesforce）、客服系统、HR系统

### 关键风险

#### 1. **Google DeepMind 的长期威胁** ⚠️
- **事件**：2026年1月，Alan Cowen + 7名工程师加入 DeepMind"顾问"（实质上是"收购中的收购"）
- **情景A（乐观）**：Hume 保持独立，获得 Google 的 Scale 支持，ARR 加速（$200M+/3年）
- **情景B（悲观）**：Google 在 2027-2028年推出 Gemini Voice with Emotion，Hume 被边缘化
- **应对**：Hume 必须在医疗/汽车等垂直场景形成锁定，而非依赖通用模型

#### 2. **模型开源化威胁**
- **竞争者**：Meta Llama、Mistral 等开源模型可能推出"开源情感TTS"
- **风险**：Octave 和 EVI 的护城河可能是"学术论文级别"而非"代码级别"
- **应对**：Hume 需从"模型卖家"转向"应用生态卖家"（云平台 lock-in）

#### 3. **医疗监管合规** ⚠️
- **挑战**：心理治疗相关产品涉及医疗设备认证（FDA/CE Mark）
- **风险**：若 EVI 在治疗诊断中出错，Hume 承担法律责任
- **应对**：需与医疗伙伴共同承担责任，做好审计日志

#### 4. **人才流失与融资冻结**
- **现状**：Alan Cowen + 核心工程师已部分进入 DeepMind
- **风险**：若融资环境恶化，Hume 可能被迫出售或被 Google 全面收购
- **观察**：Series B 后（2024年3月）已18个月无新融资公告，可能在洽谈后续资金或 Google 合作条款

---

## 五、阶段评估与战略前景

### 当前阶段：从"创新产品"到"平台化"的临界点（2026年3月）

| 维度 | 评估 | 意义 |
|------|------|------|
| **Product-Market Fit** | 有（医疗/汽车垂直已验证） | 不需要再证明"是否有人买"，而是"如何规模化" |
| **融资能力** | 强（Series B $50M，背靠高端VC） | 但18个月无新融资公告，可能与 Google 合作谈判有关 |
| **技术壁垒** | 中-强（学术领先，但非绝对垄断） | Alan 的情感计算论文是优势，但开源化威胁逐年增加 |
| **商业化速度** | 中（B2B 采购周期长，但案例在出现） | hpy 治疗追踪+70% 是游戏改变者 |
| **人才稳定性** | 弱（核心创始人进入 DeepMind） | 需要观察后续是否有其他核心工程师离职 |

### 3年前景（2026-2029）

**牛市情景（概率 40%）**：
- Hume 在医疗+汽车垂直中成为标配
- 通过"治疗有效性"等医疗指标证明商业价值
- ARR 达到 $200-300M，评估 $2-3B
- 可能的路径：IPO 或被 Microsoft / Meta 收购（Google 已有股份）

**熊市情景（概率 30%）**：
- Google DeepMind 的 Gemini Voice with Emotion（2027年）推出，抢占市场
- Hume 转向"专业医疗认证模型"的 niche，ARR 天花板在 $50-100M
- 最终被 Google / Microsoft 全面整合或收购

**中性情景（概率 30%）**：
- Hume 继续独立，但增速放缓
- 市场分化：Hume 主导医疗教育，ElevenLabs 主导内容创意，Google 主导消费级
- ARR 增长到 $100M，估值稳定在 $1.5B

---

## 六、与Mars思想框架的映射

### 非共识优先
Hume 的整个定位就是"非共识"：
- **共识**：AI 语音就是"清晰自然度"竞争
- **Hume的反转**：应该是"情感理解度"竞争，医疗愿意为此支付 30% 溢价

### 距钱距离假说
- ElevenLabs = 远（视频制作者→平台→最终用户）
- Hume = 近（医疗机构直接为治疗结果改善付费）
- **非共识判断**：Hume 虽然融资少，但距钱更近，长期值钱

### 系统设计 > 个体努力
- Hume 的核心设计是"感知-理解-回应"的完整闭环
- 不是"最好的 TTS"或"最好的情感识别"，而是两者的系统整合
- EVI 3 的 100K 自定义语音库是"平台网络效应的初步建设"

### 运气设计（好运面积 = 能力 × 被认知程度）
- **能力**：Alan 的情感计算论文 + EVI 3 的技术
- **被认知度**：目前还很低（相比 ChatGPT / Claude），但医疗垂直内认知度在上升
- **策略**：应通过医疗案例（hpy +70%）制造"口碑炸弹"，而非广泛营销

---

## 七、衍生阅读

### 官方资源
- [Hume AI 官网](https://www.hume.ai)
- [EVI 3 发布博客](https://www.hume.ai/blog/introducing-evi-3)
- [Octave TTS 对标分析](https://www.hume.ai/blog/octave-the-first-text-to-speech-model-that-understands-what-its-saying)
- [开发者文档](https://dev.hume.ai)

### 媒体与研究
- [Contrary Research: Hume AI 商业分解](https://research.contrary.com/company/hume-ai)
- [VentureBeat: Octave TTS 发布新闻](https://venturebeat.com/ai/hume-launches-text-to-speech-model-octave)
- [PYMNTS: Google DeepMind 收购顾问新闻](https://www.pymnts.com/news/artificial-intelligence/2026/google-recruits-hume-ceo-cowen-bolster-voice-ai-efforts/)

### 竞品对比
- [Hume AI vs ElevenLabs（Murf AI分析）](https://murf.ai/blog/hume-ai-vs-elevenlabs)
- [ElevenLabs 融资轨迹](https://www.techbuzz.ai/articles/elevenlabs-raises-500m-at-11b-tripling-in-12-months)

### 学术基础
- Alan Cowen 的"语义空间论"（Semantic Space Theory）论文，是理解 Hume 技术哲学的钥匙
- 相关领域：情感计算（Affective Computing）、多模态深度学习（Multimodal DL）、人机交互（HCI）

---

## 八、卡片编写说明

**整体框架**：遵循 Mars 的"反共识思维"——Hume 不是因为语音音质最好而有价值，而是因为"情感理解"这个维度是医疗/教育/汽车的实际刚需。

**关键指标**：
- 融资规模 ✓（Series B $50M）
- 自定义语音库规模 ✓（100K+，对标网络效应）
- 客户案例的"业务指标改善"✓（hpy +70%治疗追踪）
- 竞争对比的"距钱距离"分析 ✓

**不确定性**：
- Google DeepMind 的深度关系（收购顾问vs完全整合的灰色地带）
- Series B 后融资进展（18个月无新公告）
- 医疗监管合规的实际进展

**更新周期**：建议 6 个月后重新评估，尤其关注：
- EVI 4 / Octave v2 的发布
- Google 是否推出"Gemini Voice with Emotion"
- hpy 案例后是否有更多医疗垂直的付费客户公开
