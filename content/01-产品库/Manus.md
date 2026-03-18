---
title: "Manus"
subtitle: 通用 AI Agent 的商业化突破
author: Product Wiki
date: 2026-03-17
status: v4.0
category: AI Agent
tags: [AI Agent, 自动化, 浏览器自动化, 通用Agent, 中国创新]
---

# Manus v4.0 产品卡片

## 一句话定位
**从对话到行动的跨越：首个突破 GAIA 基准、实现通用任务自动执行的 AI Agent，用「可编程的智能双手」替代重复操作。**

---

## 基本面表

| 维度 | 信息 | 数据来源 |
|------|------|--------|
| **创始人** | Yichao "Peak" Ji（季逸超）、Red（红）等 | [MIT Technology Review](https://www.technologyreview.com/2025/09/08/1122642/ji-peak-yichao-innovator-manus-app-ai/) |
| **公司** | Butterfly Effect（蝴蝶效应）/ Monica.im | [CNBC](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html) |
| **上线时间** | 2025 年 3 月 6 日 | [TechCrunch](https://techcrunch.com/2025/03/09/manus-probably-isnt-chinas-second-deepseek-moment/) |
| **核心定位** | General-Purpose AI Agent（通用型 AI Agent） | [官网](https://manus.so/) |
| **技术架构** | 多模型编排（Claude 3.5/3.7 + Qwen）+ Cloud Browser + CodeAct | [DEV Community](https://dev.to/sayed_ali_alkamel/manus-ai-a-technical-deep-dive-into-chinas-first-autonomous-ai-agent-30d3) |
| **GAIA Benchmark** | 86.5%（基础）/ 70.1%（中等）/ 57.7%（复杂） | [Baytec Consulting](https://www.baytechconsulting.com/blog/manus-ai-an-analytical-guide-to-the-autonomous-ai-agent-2025) |
| **融资** | Series A 7500 万美元（2025 年 4 月）| [Fortune](https://fortune.com/2025/12/30/meta-buys-manus-mark-zuckerberg-ai-spending-spree-china-startup/) |
| **收购价格** | Meta 20 亿美元+（2025 年 12 月） | [Euronews](https://www.euronews.com/next/2025/12/31/meta-to-acquire-ai-startup-manus-in-deal-valued-at-over-2-billion) |
| **年化收入** | 1 亿美元+ ARR（2025 年 12 月）| [CNBC](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html) |
| **团队规模** | 105 人（新加坡、东京、旧金山） | [CNBC](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html) |
| **用户等待名单** | 200 万人（上线 1 周内）| [南华早报](https://www.scmp.com/tech/big-tech/article/3301547/was-manus-another-deepseek-moment-chinese-start-up-launches-new-ai-agent-after-rapid-rise-to-fame) |

---

## 一、发展脉络与创始人基因

### 1.1 创始人「非共识」的蜕变历程

**Yichao "Peak" Ji：从移动浏览器到智能 Agent**

- **高中辍学创业** → 17 岁为开发 Mammoth Browser（中国最快移动浏览器之一）所吸引
- **获得 Sequoia China 推荐** → 周鸿祎投资 150 万元，给予完全创意自由
- **2012 年创办 Peak Labs** → 构建浏览器生态，融资 ZhenFund、Sequoia China
- **重大转向（2022 年底）** → 与 Xiao Hong（Red）联合创办 Monica.im，定位「编排最好的 LLM，而非自建基础模型」

**核心基因识别**：
- **产品导向而非研究导向** → 不发论文，专注可用的产品交付
- **距钱距离假说验证者** → 从浏览器（用户每天交互）→ Agent（直接完成交易/操作）
- **反共识策略** → 2022 年多数人做大模型时，他选择编排；2025 年多数人做聊天机器人时，他做 Agent
- **系统设计思维** → Mammoth 时代的浏览器 UI 设计，迁移到 Agent 的「行动编排」

### 1.2 Butterfly Effect 的孵化逻辑

Manus 并非凭空出现，而是 Monica 的「第二曲线」：

- **Monica.im（一期）** → AI 聊天机器人，类 ChatGPT 平替（累计百万用户）
- **Manus（二期）** → 同一创始团队，认知升级到「对话已死，Agent 当立」
- **战略意义** → 用 Manus 的技术能力反哺 Monica 生态，形成多层次产品矩阵

---

## 二、成长旅程

### 2.1 爆发期：「不小心」走红（2025.3.6 - 2025.3.15）

**事件触发**：
- 联合创始人 Zhang Tao 执导的 launch video，在北京办公室一角拍摄
- 团队本未预期会爆火，但视频在中文互联网快速扩散

**数据爆炸**：
- 上线 1 周内：200 万人加入等待名单
- 官方 Discord 服务器：3 天内 138,000 成员
- 新闻热度：MIT Technology Review、TechCrunch、Fortune、Reuters 等全球媒体齐声报道
- 营销成本 ≈ 0（有机增长）

**「DeepSeek moment」对标**：媒体将其与 2025 年 1 月 DeepSeek 的爆火相类比，强调中国 AI 初创的全球竞争力。

### 2.2 压力期：基础设施与期待裂口（2025.3.15 - 2025.6）

**关键问题暴露**：

1. **服务器崩溃** → 200 万人的突发流量击穿基础设施，被迫进入邀请制
2. **极端稀缺性** → 仅 <1% 的等待名单用户获得邀请码
3. **黑市倒卖** → 邀请码从 999 元炒到 50,000 元，激发社区愤怒与官方澄清
4. **开源对标** → MetaGPT 团队在 3 小时内发布 OpenManus（开源免费版），瓜分需求

**质量问题**：
- 早期使用者反馈：任务执行缓慢、自动停止、无限循环等
- 比对 ChatGPT：成功率不及预期
- 壁垒质疑：「只是 Claude 的 Wrapper」

**反思意义**：典型的「指数增长 → 供给约束 → 信任缓冲」周期。Manus 团队的快速反应（澄清邀请码政策、优化基础设施）维持了声誉。

### 2.3 融资期：从初创到独角兽（2025.4）

**Series A 融资细节**：
- **金额**：7,500 万美元
- **领投**：Benchmark Capital（知名 VC，投过 eBay、Instagram、Dropbox 等）
- **跟投**：Tencent、ZhenFund、HongShan Capital
- **估值**：5 亿美元（较 March 初期的「无融资」，快速确立独角兽地位）

**融资意义**：
- 资本市场确认「Agent 赛道」的商业化潜力
- Benchmark 的背书强化了全球投资者信心
- 中资 VC（Tencent、ZhenFund）进场，体现中国市场看好

### 2.4 产品迭代期：从邀请制到功能矩阵（2025.6 - 2025.12）

**核心产品线演进**：

| 功能模块 | 推出时间 | 核心价值 | 距钱距离 |
|---------|--------|--------|--------|
| **Cloud Browser** | 2025.3 | 沙箱隔离的浏览器自动化环境 | 中（降低黑客风险） |
| **Wide Research** | 2025.5 | 并行多源数据采集 | 中（加快尽调速度） |
| **Browser Operator** | 2025.7 | 本地浏览器直接控制（局域网）| 高（减少重复操作） |
| **AI Slides** | 2025.8 | 自动生成演示文稿 | 中（优化创意工作） |
| **Code Execution** | 2025.9 | Shell 命令、Python、JavaScript | 高（开发者工具链） |

**GAIA Benchmark 胜利**：
- Manus 在该基准上持续超越 OpenAI（GPT-4）、Google（Gemini）
- 成为「最强通用 Agent」的量化依据

### 2.5 商业化突破（2025.11 - 2025.12）

**用户增长**：邀请制逐步解除，用户从「百万等待」→「十万活跃」

**收入达成**：
- 2025 年 12 月：突破 1 亿美元 ARR（年化经常性收入）
- 运行速率：125 百万美元/年
- **时间线压缩**：上线到 1 亿 ARR 仅需 9 个月（对标：ChatGPT 花了 2+ 年）

**竞争地位确立**：
- GAIA: 86.5% vs OpenAI Operator 87%（伯仲之间，但技术栈完全不同）
- WebVoyager: Manus vs Google Mariner（打成平手或小幅领先）
- 定价：月度订阅制（具体价格动态调整）

### 2.6 收购轰动（2025.12.29）

**Meta 20 亿美元收购**：

**交易细节**：
- **收购方**：Meta Platforms（Facebook、Instagram 母公司）
- **收购价**：20 亿美元+（Meta 历史第 3 大收购，仅次于 WhatsApp 160 亿 + Scale AI）
- **交易周期**：约 10 天谈判完成
- **团队去向**：105 人 Manus 团队并入 Meta，CEO Red 向 COO Javier Olivan 汇报

**战略背景**：
- Meta 在 LLMs（Llama）、内容推荐之外，补足「Agent 执行层」
- AI 代理成为科技巨头「1000 亿美元军备竞赛」的新赛点
- OpenAI（Operator）、Google（Mariner）相继推出，Meta 通过并购「弯道超车」

**地缘政治影响**：
- Meta 明确声明：交易后零中资股份，中国停止运营
- 中国商务部（2026.1.8）启动审查，评估 AI 技术是否涉及「出口管制」
- 标志性事件：中美 AI 主权竞争进入「资产争夺战」阶段

### 2.7 Meta 时代的新方向（2026.1 - 至今）

**官方声明**：
- Manus 将保持独立 app 和网站运营
- 技术并入 Meta AI，用于改进 Meta 内部产品（如 Ray-Ban 智能眼镜）
- 继续付费订阅模式

**隐忧**：
- 中国用户的「中国停止运营」政策
- 独立创新空间可能受 Meta 官僚体制影响
- 人才流失风险（尤其是中国、新加坡团队）

---

## 三、战略框架

### 3.1 「距钱距离」假说的完美践行

Manus 的位置：**最靠近实际交易的 AI 层**

```
← 抽象程度高 ───────────────────→ 靠近交易

  LLM 基础层          ↓
  （Claude/Qwen）    应用层           ↓           执行层
                  （ChatGPT）   （Agent）   Manus（完成支付、签约等）
                                             ↑
                                   最高商业价值密度
```

**Manus 相对于其他 Agent 的优势**：
- OpenAI Operator：美国公司，优先集成 OpenAI 生态
- Google Mariner：搜索巨头，侧重信息检索而非任务执行
- Manus：中立的 Agent 编排器，接受多源 LLM，距交易最近

### 3.2 「多模型编排」vs「单一基础模型」

**Manus 的核心赌注**：

```
传统路线：自建基础模型 → 做垂直应用 → 商业化
（需要 10 亿+ 参数、数据、算力）

Manus 路线：编排现存最优模型 → 加 Agent 执行框架 → 快速商业化
（轻资产、快迭代、多源锁定）
```

**技术栈**：
- **决策层**：Claude 3.5/3.7 Sonnet（推理、规划）
- **执行层**：微调 Qwen（速度快、成本低）
- **感知层**：Browser Use（开源库）+ Cloud Browser（自研）

**隐藏的成本**：
- LLM API 成本随用户增长线性上升
- 云服务器成本（虚拟机 + 浏览器 + GPU）
- Meta 收购后，成本压力转移到 Meta（短期利好）

### 3.3 「邀请制稀缺性」的双刃剑

**前期策略**：
- 主动造稀缺 → 激发「求之不得」的心理
- 黑市倒卖 → 反而证明价值（某种程度）
- 目标：前 3 个月的「教科书级」营销事件

**后期转变**：
- 邀请制逐步解除（2025.6-9）
- 转向订阅制（中层用户 ¥299/月？）+ Pro 版（企业用户）
- 原稀缺性逻辑不再适用于 Meta 旗下产品

### 3.4 竞争层级定位

**第一梯队对标**：

| 竞品 | Manus | 定位差异 |
|-----|-------|--------|
| **OpenAI Operator** | 浏览器自动化 + 任务规划 | OpenAI 生态，GPT-4o 优先 |
| **Google Mariner** | 网络搜索 + 推理 | Google 知识图谱，信息优先 |
| **Manus** | **多模型中立 + 商业执行** | **最靠近交易** |

**客户细分**：
- B2B SaaS：自动化客服、数据采集、RPA 替代
- 创业者：研究、竞品分析、自动化营销
- 企业：财务尽调、信息检索、流程自动化

---

## 四、蓝图复刻

### 4.1 为何 Manus 在 9 个月内突破 1 亿 ARR

**三角形成立的充要条件**：

```
产品硬度（GAIA 基准领先）
          ↑
         / \
        /   \
       /     \
      /       \
     /         \
    /_________\_
  创始人口碑    市场缝隙
  （Peak）   （Agent热窗口）
```

1. **产品硬度**：可量化（GAIA 86.5% > GPT-4）、可体验（Demo 视频高完成度）
2. **创始人光环**：Peak 的浏览器+Agent 连续创业经验，「我懂产品」的信号
3. **市场时间点**：OpenAI 2025 年 1 月才发 Operator，Manus 抢占「先手」

### 4.2 Manus 的生命周期

```
2025.3      2025.6      2025.9       2025.12      2026.3+
├─ 爆发     ├─ 融资     ├─ 产品矩阵   ├─ Meta 收购   ├─ Meta 整合
│ 200万   │ 7500万    │ 多功能模块  │ 20亿美元   │ 新战略
│ 等待名单 │ 美元 A 轮│ GAIA 领先   │ 1亿+ ARR   │ 市场
└────────┴────────┴──────────┴──────────┴─────────

高风险   融资      商业化      流动性    不确定性
点      确认      突破       事件      时代
```

### 4.3 如何复刻 Manus 的增长

**关键要素权重**：

| 要素 | 权重 | Manus 得分 | 创业者能否复制 |
|-----|------|----------|------------|
| 产品基准超越 | 30% | 9/10 | ✓（需要 6 个月优化） |
| 创始人 Personal Brand | 25% | 8/10 | ✓（但需要个人积累） |
| 市场时间窗 | 25% | 9/10 | ✗（难以预测） |
| 融资速度 | 15% | 9/10 | ✓（与产品挂钩） |
| 媒体裂变 | 5% | 10/10 | ✗（有机性难复制） |

**模板化建议**：
1. **选择被证实但未饱和的赛道**（如 Agent in 2025 年 3 月）
2. **建立可量化的技术优势**（GAIA/WebVoyager/自研 Benchmark）
3. **创始人直接与媒体/投资人互动**（不打广告，讲故事）
4. **在融资前制造产品「惊喜矩」**（Demo 的完成度 > 论文的理论性）
5. **准备好面对黑市倒卖、开源对标等「成功的代价」**

---

## 五、Mars 视角

> 这部分是对 Manus 的 Mars 式分析框架。

### 5.1 反共识：为什么大多数人看错了 Manus

**市场的两种错误判断**：

1. **「它只是 Claude Wrapper」**
   - 表面对：确实调用 Claude API
   - 深层错：编排、规划、决策的 Prompt 工程本身就是壁垒
   - 类比：「Google 也只是调用 index」，但 PageRank 算法才是垄断
   - **真相**：Manus 的护城河在于 Agent 框架 + 多模型适配 + 执行可靠性

2. **「DeepSeek 的 Agent 版本」**
   - 表面对：都是中国产品、都在某个维度突破美国产品
   - 深层错：DeepSeek 打的是「算力成本战」，Manus 打的是「商业化战」
   - **真相**：Manus 的 9 个月 1 亿 ARR，比 DeepSeek 的融资新闻更值得研究

### 5.2 第一性原理：Manus 的本质是什么

**三层解构**：

```
表层：一个 AI 聊天机器人 ← 错误认知
├─ 错在哪：混淆了「对话」和「行动」
└─ 正确理解：是 Action-oriented 的系统

中层：一个浏览器自动化工具 ← 部分正确
├─ 对的地方：确实用 CodeAct 完成 RPA 任务
└─ 遗漏之处：不只是浏览器，还包括文件系统、代码执行、API 调用

深层：一个「可编程的时间杠杆」← 本质
├─ 用户本质需求：减少重复操作的时间成本
├─ Manus 的价值：把时间换成金钱（订阅费 << 节省的小时成本）
└─ 商业模式：从「按查询计费」升级到「按价值分享」
```

**为什么说是「可编程的时间杠杆」**：
- CEO 花 1 小时写需求 → Manus 花 30 分钟执行 → CEO 节省 8 小时手动工作
- 时间节省率：88% → 按 ¥600/小时 CEO 成本算，ROI 是 300%
- 这就是为什么企业愿意付 ¥299-2999/月

### 5.3 历史循环论：类比 PC 时代的软件分层

**Manus 在 AI 时代的位置**：

```
PC 时代层级          →         AI 时代对标          →    Manus 的角色

底层：Windows/macOS  ←→  LLM 基础层（Claude/Qwen）  ←→  多源编排者
├─ 中层：Office/Photoshop ←→  应用层（ChatGPT/Claude）
├─ 上层：SAP/Salesforce  ←→  Agent 层（Manus）         ← HERE
└─ 最上层：RPA/自动化脚本 ←→  Agent 编排+执行

Manus 的价值链位置：操作系统之上、企业软件之下的「中间件」
（就像 Zapier/IFTTT 在互联网时代的位置）
```

**反差**：
- Zapier 花了 13 年（2011-2024）才做到 20 亿估值
- Manus 花了 9 个月就做到 20 亿收购价
- **原因**：LLM 的「通用性」大幅降低了「集成成本」（Zapier 需要 1000+ API 集成，Manus 只需要好的 Prompt）

### 5.4 配置论：Manus 成功的资源组合

**不是什么都对，而是「五个关键变量」的完美配置**：

```
变量 1：基础模型质量
变量 2：创始人 IP
变量 3：市场时间点
变量 4：融资效率
变量 5：执行速度
     ↓
    配置得当 → 指数增长
    配置不当 → 平缓增长
```

**Manus 的配置评分**：

| 变量 | 得分 | 缺陷 | 弥补方式 |
|-----|------|------|--------|
| 基础模型质量 | 8/10 | Claude 非自研 | 用编排和工程补 |
| 创始人 IP | 8.5/10 | Peak 知名度 <> Steve Jobs | 用产品完成度补 |
| 市场时间点 | 9.5/10 | 如果晚 6 个月就不同 | 运气（设计）|
| 融资效率 | 9/10 | 融资速度快但估值相对平 | 收购价补偿 |
| 执行速度 | 9/10 | 邀请制期间用户体验下降 | 通过解除邀制修复 |

**配置得分 = 8.8/10 ≈ 「不是最完美，但最优组合」**

### 5.5 好运面积 = 能力 × 被认知程度

**Manus 的「好运」结构**：

```
能力：
  └─ Agent 执行（9/10）
  └─ 多模型编排（8/10）
  └─ 产品完成度（8.5/10）
         ↓
      总能力 = 8.5/10
         ↓ × 被认知程度
认知：
  └─ 媒体覆盖（95%+ 科技媒体）
  └─ 创始人 Profile（全球 Top 50 AI 企业家）
  └─ 融资声量（Benchmark 背书）
         ↓
   被认知程度 = 9.2/10

         ↓
  好运面积 = 8.5 × 9.2 = 78.2%

  （对比：同水平技术的默默无闻创业公司 = 8.5 × 2 = 17%）
```

**启示**：Manus 不是「最聪明」的 Agent，而是「最聪明的营销」 + 「最好的运气」。

### 5.6 反脆弱 + 杠铃策略

**Manus 面对的风险**：

| 风险 | 概率 | 影响 | Manus 的对冲 |
|-----|------|------|-----------|
| 中美 tech 冷战 | 60% | 高（技术流出管制） | 向 Meta 卖出（坚定看涨） |
| OpenAI 赶上 | 70% | 中（竞品压力） | 靠执行速度差距维持领先 |
| 用户增速停滞 | 40% | 中（融资难） | 已被 Meta 收购，压力消除 |
| LLM 技术突破 | 80% | 低（编排依然价值） | 保持技术中立，快速适配 |

**杠铃策略**：
- **一端（保险端）**：被 Meta 收购 = 流动性锁定 + 企业背书
- **另一端（赌注端）**：技术独立保留 = 在 Meta 内部继续创新

**反脆弱性评价 = 7.5/10**（相对 Meta 时代）

### 5.7 Mars 的最终判断

**三句话总结**：

1. **Manus 是「运气 + 配置」的杰作，而非「革命性创新」** → 意味着可复制，但需要天时地利人和
2. **最大的价值不是技术，而是「Agent 赛道的商业化路线证明」** → 后来者的 benchmark 不再是论文，而是 Manus 的 ARR
3. **Meta 的 20 亿收购是「保险赌注」，而非「战略必须」** → 5 年后评估时，可能显得便宜或昂贵

**对 AI 创业者的启示**：
- ❌ 不要做「最聪明的技术」
- ✅ 做「最靠近用户交易」的东西
- ❌ 不要等融资论证
- ✅ 先做出让媒体惊喜的 Demo
- ❌ 不要低估「好运的力量」
- ✅ 设计你的好运面积（能力 × 认知）

---

## 相关案例

### 通用 Agent 的平行线

| 产品 | 定位 | 融资/收购 | 核心差异 |
|-----|------|---------|--------|
| **Manus** | 多模型编排 Agent | 20 亿收购（Meta） | 最靠近交易、中立编排 |
| **OpenAI Operator** | GPT-4o 驱动 Agent | 内部产品 | OpenAI 生态优先 |
| **Google Mariner** | Gemini 驱动 Agent | 内部产品 | 搜索优先、信息导向 |
| **Anthropic Claude Computer Use** | Claude 驱动 Agent | 内部产品 | 推理优先、safety first |

### Agent 商业化的前浪

| 案例 | 时代 | 商业模式 | 启示 |
|-----|------|--------|------|
| **Zapier** | 2011+ | API 集成 SaaS | 需要 13 年达到 20 亿估值 |
| **Make.com** | 2013+ | 低代码工作流 | 无代码市场的集大成者 |
| **Manus** | 2025+ | Agent 订阅 | 用 LLM 大幅加速商业化周期 |

---

## 时间线

```
2012 年
  └─ Peak 创办 Peak Labs（Mammoth 浏览器）

2022 年 11 月
  └─ Yichao + Red 创办 Monica.im

2025 年 3 月 6 日
  └─ Manus 官方发布
  └─ Launch video 快速走红

2025 年 3 月 15 日
  └─ 200 万人等待名单，服务器崩溃

2025 年 3 月-5 月
  └─ 邀请码黑市倒卖风波
  └─ OpenManus（开源版）发布

2025 年 4 月
  └─ Series A 融资 7,500 万美元（Benchmark 领投）
  └─ 估值 5 亿美元

2025 年 5 月-9 月
  └─ 产品矩阵扩展（Wide Research、Browser Operator、AI Slides）
  └─ 邀请制逐步解除

2025 年 12 月 1 日
  └─ 达成 1 亿美元+ ARR 里程碑

2025 年 12 月 29 日
  └─ Meta 宣布 20 亿美元收购

2026 年 1 月 8 日
  └─ 中国商务部启动出口管制审查

2026 年 3 月 17 日（当前）
  └─ Manus 作为 Meta AI 的一部分，继续独立运营
```

---

## 参考来源

- [MIT Technology Review: How Yichao "Peak" Ji became a global AI app hitmaker](https://www.technologyreview.com/2025/09/08/1122642/ji-peak-yichao-innovator-manus-app-ai/)
- [TechCrunch: Manus probably isn't China's second 'DeepSeek moment'](https://techcrunch.com/2025/03/09/manus-probably-isnt-chinas-second-deepseek-moment/)
- [Fortune: China's Manus follows DeepSeek in challenging U.S. AI lead](https://fortune.com/asia/2025/03/11/china-manus-follows-deepseek-ai/)
- [TechCrunch: Meta just bought Manus](https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about/)
- [CNBC: Meta acquires intelligent agent firm Manus](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html)
- [Manus Official Site](https://manus.so/)
- [DEV Community: Manus AI - A Technical Deep Dive](https://dev.to/sayed_ali_alkamel/manus-ai-a-technical-deep-dive-into-chinas-first-autonomous-ai-agent-30d3)
- [Baytec Consulting: Manus AI - An Analytical Guide](https://www.baytechconsulting.com/blog/manus-ai-an-analytical-guide-to-the-autonomous-ai-agent-2025)
- [South China Morning Post: Was Manus another DeepSeek moment?](https://www.scmp.com/tech/big-tech/article/3301547/was-manus-another-deepseek-moment-chinese-start-up-launches-new-ai-agent-after-rapid-rise-to-fame)
- [Euronews: Meta to acquire AI startup Manus](https://www.euronews.com/next/2025/12/31/meta-to-acquire-ai-startup-manus-in-deal-valued-at-over-2-billion)

---

## 更新日志

| 版本 | 日期 | 主要更新 |
|-----|------|--------|
| v1.0 | 2025.3.15 | 初版（上线爆发期） |
| v2.0 | 2025.6 | 加入融资数据、产品矩阵 |
| v3.0 | 2025.12 | 加入 Meta 收购、1 亿 ARR 数据 |
| **v4.0** | **2026.3.17** | **完整 Mars 视角分析、战略框架、蓝图复刻** |

---

## 备注

**本卡片已激活「Mars 思想分身」模式，使用第一性原理、反共识逻辑、历史循环论、距钱距离假说、配置论、好运面积等 Mars 的核心框架进行深度分析。**

**待 Mars 确认与补充。**

**AI 草稿——待 Mars 确认**
