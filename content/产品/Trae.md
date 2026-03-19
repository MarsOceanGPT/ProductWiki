---
title: Trae
slug: trae
category: AI IDE/代码编辑
stage: Growth
founded: 2025-01-20T00:00:00.000Z
hq: 杭州/北京
website: https://www.trae.ai/
status: Active
tags:
  - AI编程助手
  - IDE
  - VS Code Fork
  - 免费工具
  - 字节跳动
  - 豆包
  - Builder Mode
  - SOLO模式
  - AI创业
  - 开发者工具
  - 行业/开发工具
  - 阶段/D轮+
author: Mars
lastUpdated: '2026-03-17'
---

## 一句话定位

**The Real AI Engineer**：字节跳动推出的全免费 AI 原生 IDE，通过 SOLO 模式实现从需求到部署的端到端自动化开发，特别针对中文开发者优化，直接对标 Cursor/Windsurf。

---

## 基本面表

| 维度 | 数据 | 来源 |
|------|------|------|
| **推出时间** | 2025年1月20日（国际版）/ 2025年3月3日（国内版） | [AIBase News](https://www.aibase.com/news/14850) |
| **月活用户** | 160万+（2026年3月） | [AIBase News](https://news.aibase.com/news/24099) |
| **总注册用户** | 600万+，覆盖近200个国家和地区 | [AIBase News](https://news.aibase.com/news/24099) |
| **代码交付量** | 60亿行代码（截至2025年5月） | [AIBase News](https://www.aibase.com/news/18856) |
| **定价策略** | 完全免费→付费订阅（国际版$3/月首月） | [AIBase News](https://news.aibase.com/news/18413) |
| **核心创造者** | 字节跳动（ByteDance） | [Visual Studio Magazine](https://visualstudiomagazine.com/articles/2025/01/27/ai-powered-trae-ide-ships.aspx) |
| **技术基础** | VS Code Fork（闭源） | [Visual Studio Magazine](https://visualstudiomagazine.com/articles/2025/01/27/ai-powered-trae-ide-ships.aspx) |
| **支持平台** | macOS、Windows、Linux（Linux后续支持） | [DigitalOcean](https://www.digitalocean.com/community/tutorials/trae-free-ai-code-editor) |
| **AI 模型接入** | 国际版：Claude 3.7 Sonnet、GPT-4o、DeepSeek R1；国内版：豆包1.5 Pro、DeepSeek V3/R1 | [AIBase News](https://www.aibase.com/news/14899) |
| **核心特性成熟度** | v2.0 SOLO 模式稳定（2025年夏季升级） | [iWeaver AI](https://www.iweaver.ai/guide/from-single-prompt-to-full-deployment-trae-2-0-solo-is-all-you-need/) |

---

## 一、发展脉络

### 从"免费挑战者"到"中文原生 AI IDE"

Trae 的推出背景值得反思：**Cursor 已成为海外开发者默认工具，国内开发者体验被迫二手。** 字节跳动作为中国最大的 AI 算力所有者，看到的不是"做一个更好的 Cursor"，而是"做一个更本地化、更便宜、数据换增长"的战略布局。

**关键时间线：**

- **2025年1月20日** - 国际版发布，主打"完全免费 + Claude 3.5 Sonnet"，直接冲击 Cursor 付费用户
- **2025年1月-5月** - 快速从 Agent 1.0 迭代到 1百万 MAU，代码补全延迟下降 60%、内存占用降低 43%
- **2025年3月3日** - 国内版上线，集成豆包、DeepSeek，建立"差异化护城河"而非简单复制
- **2025年5月** - 宣布"付费订阅模式"（国际版首月$3），从增长驱动向商业化过渡
- **2025年夏季** - SOLO v2.0 发布，支持端到端自动化开发（需求→部署），成为产品分水岭
- **2026年3月** - 月活突破160万+，正式成为"中文开发者第一 AI IDE"

### 本质逻辑：距钱距离 vs. 用户获取

从 Mars 框架看，Trae 的增长来自两条线：

1. **短期距钱最近** - 免费策略→1百万开发者→付费模式→数据资产
2. **长期构建护城河** - 豆包深度集成→.rules 中文编码规范→国内生态锁定

---

## 二、成长旅程

### 2.1 产品层面：Builder Mode → SOLO 模式的进化

**Builder Mode（v1.0-v1.2）：降低专业开发门槛**

- 自然语言描述项目 → 自动生成前后端代码 + 配置文件
- 智能分解复杂任务，逐步应用代码变更，并自动测试
- 目标用户：非科班开发者、技术创业者需要快速原型

**SOLO 模式（v2.0+）：完整 SDLC 自动化**

- 涵盖需求分析、方案设计、代码实现、测试验证、部署全流程
- 基于"Context Engineering"：融合需求文档、技术规范、代码库、Web 链接
- **关键突破**：多 Agent 调度机制，并行处理多任务（相当于虚拟开发团队）
- 工作区统一编辑器、终端、文档、浏览器、工具，AI 推理和执行用相同信息源

**实战对比：**

| 能力 | Builder Mode | SOLO 模式 |
|------|--------------|---------|
| 用户输入 | 项目描述 | 需求+技术规范 |
| 执行范围 | 代码生成 | 需求→部署 |
| 自动化程度 | 半自动 | 端到端自动化 |
| 目标用户 | 快速原型 | 专业全栈开发 |

### 2.2 多模态能力：从文本到视觉上下文

- **截图/设计稿上传** → AI 分析 UI 视觉 → 生成对应代码
- **工作区全感知** - 分析文件夹、代码、终端交互，深度理解开发工作流
- **MCP Protocol 集成（v1.3.0+）** - 连接外部数据源（GitHub、数据库、API）
- **未来方向（v1.4.0）** - 图像上下文传输优化，进一步增强多模态理解

### 2.3 中文本地化：从"翻译版"到"原生体验"

**国内版差异化（相对国际版）：**

| 维度 | 国际版 | 国内版 |
|------|--------|--------|
| 主模型 | Claude 3.7 Sonnet | 豆包 1.5 Pro |
| 可选模型 | GPT-4o、DeepSeek | DeepSeek V3/R1 |
| 界面语言 | 英文为主 | 完全中文化 |
| 代码注释 | 英文标准 | 中文友好支持 |
| 定价 | 国际版$3/月 | 国内版完全免费 |

**市场定位洞察** - Trae 国内版不是"Cursor 的汉化"，而是"为中文开发者重写"：
- 豆包深度融合 → 字节内部数据优势
- 中文编码规范内置 → 降低团队协作成本
- 完全免费策略 → 快速圈占国内开发者

### 2.4 .rules 规范系统：将 AI 行为"编程化"（v1.3.0+）

**核心创新** - 用 Markdown 定义 AI 指导原则，而非单纯依赖 Prompt

```markdown
# 个人规则 (user_rules.md)
- 变量使用 camelCase，组件使用 PascalCase
- 所有函数必须包含参数和返回值注释
- 优先使用 TypeScript 而非 JavaScript

# 项目规则 (project_rules.md / .trae/rules/)
- React 项目使用 Hooks + Zustand
- 数据库操作必须经过 ORM
- API 端点命名规范：/api/v1/{resource}/{action}
```

**为什么重要？**
- 团队编码标准自动化 → 减少 Code Review 时间
- AI 行为可预测化 → 提高代码质量稳定性
- 跨项目规则复用 → 组织级知识积累

### 2.5 竞品对比：速度 vs. 准确率的权衡

**2026年基准测试（50个真实项目）：**

| 指标 | Trae | Windsurf | Cursor |
|------|------|----------|--------|
| 代码补全平均延迟 | 1.2 秒 | 1.8 秒 | 2.3 秒 |
| 首次通过准确率 | 78% | 82% | 87% |
| 适配用户 | 新手/中文开发者 | 大型项目/团队 | 高效率开发者 |

**Mars 视角** - Trae 选择了"速度优先"的差异化路线，这对创业团队（快速迭代>完美代码）反而是优势。

### 2.6 商业模式转向：从"获客"到"变现"

**Phase 1: 免费抢占（2025年1月-5月）**
- 目标：快速达成 1百万 MAU
- 成本承载：字节跳动算力储备 + 豆包模型使用成本摊销

**Phase 2: 付费订阅试点（2025年5月+）**
- 国际版首月$3 吸引 Cursor 用户试错
- Pro 计划：更高速度限制、优先支持、专业特性
- 国内版暂时保持免费，争取"绝对用户数"

**Phase 3: 数据变现（2026年+，隐形线索）**
- 开发者行为数据 → 优化豆包训练
- 代码库模式识别 → 产业洞察产品化
- 付费 B2B 团队管理功能

### 2.7 迭代速度：从 Agent 1.0 到 SOLO v2.0 的 8 个月加速

| 版本 | 发布月份 | 核心突破 |
|------|---------|--------|
| Agent 1.0 | 2025年1月 | 基础代码补全、Builder Mode |
| v1.1 | 2025年2月 | Windows 支持、MCP 预览 |
| v1.2 | 2025年3月 | 国内版发布、豆包集成 |
| v1.3 | 2025年4月 | MCP 正式、.rules 系统 |
| v1.4 | 2025年6月 | 多模态优化、Agent 稳定 |
| SOLO v2.0 | 2025年夏季 | 端到端自动化、多 Agent 调度 |
| v2.1+ | 2025年秋冬 | SOLO Coder Agent 优化、函数迭代 |

**这不是简单迭代，而是 Product-Market Fit 的快速验证过程。**

---

## 三、战略框架

### 3.1 反共识判断：为什么"免费 IDE"能成立？

主流认知：AI IDE 应该向 Cursor 靠齐，走高端付费路线。

**反共识** - Trae 的真实逻辑：

1. **距钱最近的产品不是 IDE 本身，而是数据和算力**
   - 开发者行为数据 → 模型优化信号 → 豆包能力提升 → 企业 API 调用费用
   - 国内 GPU 资源成本远低于美国 → 可承载免费模式

2. **开发者工具市场已被分化**
   - 海外：Cursor（$20/月）吃掉高端用户
   - 国内：无合适选择 → 用户被迫用英文版或上网 VPN
   - **机会窗口** - 用免费+本地化快速圈占

3. **配置论** - 用好系统设计而非个体努力
   - 豆包 + DeepSeek 组合 → 多模型自动切换优化成本
   - .rules 系统 → 自动化团队规范，减少人工审查
   - SOLO 模式 → 虚拟开发团队替代外包

### 3.2 产业分层：Trae 在工具链中的位置

```
L4: 商业层 (CRM、财务、HR)
L3: 开发工具层 ← **Trae 所在层**
     ├─ IDE/编辑器 (Trae, Cursor, Windsurf)
     ├─ AI 辅助 (GitHub Copilot, MarsCode)
     └─ DevOps (GitHub Actions, CI/CD)
L2: 基础设施层 (云计算、数据库、LLM API)
L1: 芯片/模型层 (GPU、LLM 训练)
```

**Trae 的控制权分析**：
- 对开发者：完全控制（IDE 本身）
- 对 LLM：有限控制（豆包 + 集成调用）
- 对部署：无控制（需要接入云服务）

这是 **L3 工具典型的"中间夹角"** - 必须向下整合（模型）、向上延伸（部署）才能建立完整护城河。

### 3.3 JTBD 分析：不同开发者的"任务"

| 用户类型 | 主要任务 (Job) | Trae 价值 | 替代品 |
|---------|--------------|---------|--------|
| **初级/非科班** | 快速原型、个人项目 | Builder Mode 降低门槛 | ChatGPT + 搜索 |
| **创业团队** | 快速迭代、成本控制 | 免费+自动化 | Cursor (成本) |
| **中文开发者** | 编码规范、团队协作 | .rules + 豆包 | VS Code + Copilot |
| **专业全栈** | 大型项目交付 | SOLO 模式端到端 | Windsurf (准确率) |

### 3.4 反脆弱 + 杠铃策略

**对标 Cursor 的风险：**
- Cursor 依赖 Claude 调用费用 → 成本压力
- Trae 拥有豆包、DeepSeek → 成本自主可控

**杠铃配置：**
- **稳定端**：豆包（内部自有、成本稳定）
- **创新端**：Claude + GPT-4o（保持最佳能力，小量调用）
- **结果**：既能对标国际水准，又能大幅降低边际成本

---

## 四、蓝图复刻

### "AI IDE 黄金时代"的三阶段布局

**第一阶段（2025年1月-6月）：用户获取**
- ✅ 国际版免费发布 → 1百万 MAU（已完成）
- ✅ 国内版针对性优化 → 豆包/DeepSeek 集成（已完成）
- 目标：建立"免费 AI IDE"心智

**第二阶段（2025年6月-2026年3月）：产品深化**
- ✅ SOLO v2.0 发布 → 端到端自动化（已完成）
- ✅ .rules 系统 → 编码规范自动化（已完成）
- ✅ MCP Protocol → 外部工具集成（已完成）
- 目标：从"代码补全工具"升级为"虚拟开发团队"

**第三阶段（2026年中期+）：生态闭环（待验证）**
- 向上：集成代码审查、部署、监控（DevOps 套件化）
- 向下：模型优化、私有化部署
- 向外：开放平台（Agent Marketplace）

### 关键节点：何时实现"不可逆的商业化"？

- **里程碑1** - 300万 MAU + 付费转化率 > 5% → 单位经济学成立
- **里程碑2** - 国内外 1000+ 企业客户 → 品牌锁定
- **里程碑3** - SOLO 模式通过复杂项目验证 → 可向外销售（B2B SaaS）

---

## 五、Mars 视角：为什么 Trae 是 2026 年值得关注的"反共识"产品

### 表面逻辑 vs. 深层机制

**表面看：**
- "字节跳动又做了一个免费产品，冲击 Cursor"
- "能活多久？迟早要收费"

**深层看：**
1. **控制权争夺** - IDE 不是终点，而是"开发者数据和行为的入口"
   - 每一行代码 → 模型优化信号 → 豆包能力提升 → 更强的企业 API
   - 这是"用工具换数据"的经典互联网模式在 AI 时代的翻版

2. **距钱距离假说验证** - 最近的钱不在"订阅费"，而在"模型调用费"
   - 免费 IDE → 100万开发者 → 企业级 API 调用 → GMV
   - Cursor 的成本压力 → Trae 的利润空间

3. **中文开发者的"护城河"** - 这次不是"技术追随"
   - 豆包深度融合 → 数据反馈循环 → 中文编程模型差异化
   - 5年后，国内用 Trae，海外用 Cursor，两个世界

4. **创业启示**：运气面积 = 能力 × 被认知程度
   - Trae 的能力（60%）× 被中文开发者认知（80%→可升至 95%）= 最大化运气
   - Cursor 的能力（85%）× 被国内认知（20%）= 没有充分发挥

### 对 AI 创业者的三个启发

1. **别只盯着海外产品** - Cursor 强不代表国内没有机会，本地化差异本身就是护城河
2. **免费策略不是简单粗暴** - Trae 用"免费"换"数据"，然后用数据变现，这是更聪慧的商业模式
3. **工具的本质是什么** - IDE 本身是红海，但作为"开发者行为数据的集合体"是蓝海

### 待验证的风险

- **准确率劣势** - 78% vs Cursor 87%，在大型项目中会显现
- **模型依赖** - 豆包如果掉队，整个国内版竞争力削弱
- **付费转化** - 国内免费习惯，实现 5% 付费转化并不容易
- **开发者锁定** - IDE 切换成本低，用户留存需要持续创新

---

## 六、相关案例

### 国际对标
- **Cursor**（2023年）- 付费 $20/月，海外开发者标配，已融资 1.5亿美元
- **Windsurf**（Codeium，2024年）- 强调"Cascade"多文件编辑，准确率高但免费版受限
- **GitHub Copilot**（Microsoft，2022年）- 付费 $10/月，生态优势但已遭国内分化

### 国内参照
- **MarsCode**（字节豆包内部工具）- 代码补全，但主要面向豆包用户
- **通义灵码**（阿里）- 轻量级补全插件，不如 Trae 野心大
- **ZeroDev**（开源社区）- 功能不完整，缺乏商业化

### 行业逻辑对标
- **DeepSeek**（推理模型，2024年）- 免费开源，用低成本颠覆高价商业模型（同样逻辑）
- **Stable Diffusion**（开源图像，2022年）- 免费 vs 付费 Midjourney，最终两个世界
- **TikTok/抖音**（短视频，2016年）- 用本地化 + 免费击败海外 Snapchat

---

## 七、时间线（Timeline）

```
2025年1月20日    │ 国际版正式发布（macOS）
2025年2月        │ Windows 支持上线
2025年3月3日     │ 国内版发布，豆包/DeepSeek 集成
2025年3月        │ 月活突破 1百万+，6亿行代码交付
2025年4月        │ v1.3.0 发布，MCP 协议 + .rules 系统
2025年5月        │ 付费模式试点（国际版 $3/月首月）
2025年5月27日    │ 国际版官方付费订阅计划发布
2025年6月-7月    │ SOLO v2.0 发布，端到端自动化
2025年秋冬       │ 多 Agent 调度、函数迭代优化
2026年3月        │ 月活突破 160万+，6百万注册用户
```

---

## 八、参考来源

1. [Visual Studio Magazine - "AI-Powered Trae IDE Ships from Chinese TikTok Owner"](https://visualstudiomagazine.com/articles/2025/01/27/ai-powered-trae-ide-ships.aspx)
2. [AIBase News - "Trae Monthly Active Users Exceed 1.6 Million"](https://news.aibase.com/news/24099)
3. [AIBase - "ByteDance Launches AI IDE Product Trae for Chinese Developers"](https://www.aibase.com/news/14850)
4. [AIBase - "Breaking! Byte's New AI Programming Tool Trae"](https://www.aibase.com/news/14899)
5. [DigitalOcean - "Trae: A New Free AI-Powered Code Editor from ByteDance"](https://www.digitalocean.com/community/tutorials/trae-free-ai-code-editor)
6. [iWeaver AI - "From a Single Prompt to Full Deployment: Trae 2.0 SOLO"](https://www.iweaver.ai/guide/from-single-prompt-to-full-deployment-trae-2-0-solo-is-all-you-need/)
7. [Oreate AI - "In-Depth Review of Trae 2.0's New SOLO Mode"](https://www.oreateai.com/blog/indepth-review-of-trae-20s-new-solo-mode-a-breakthrough-evolution-in-ai-fullprocess-development-paradigms/b7b78aa0c9349e620de56729b7ea5309)
8. [AIBase News - "Trae v1.3.0 Major Update: MCP and .rules Support"](https://www.aibase.com/news/17375)
9. [Trae IDE Official Docs - Rules for AI](https://docs.trae.ai/ide/rules-for-ai)
10. [Zoer AI - "Trae vs Cursor vs Windsurf: AI IDE Comparison 2026"](https://zoer.ai/posts/zoer/trae-cursor-windsurf-ai-ide-comparison-2026)
11. [AIBase News - "Trae International Version Launches Paid Subscription"](https://news.aibase.com/news/18413)
12. [AIBase News - "Trae Monthly Active Users Exceeded 1 Million"](https://www.aibase.com/news/18830)
13. [Trae IDE Official Site - v1.3.0 Supports MCP Protocol](https://traeide.com/news/6)
14. [Trae Official - SOLO Mode Overview](https://docs.trae.ai/ide/solo-mode)

---

## 九、更新日志

| 日期 | 更新内容 | 版本 |
|------|--------|------|
| 2026-03-17 | 创建产品卡片 v4.0，补充 SOLO v2.0、.rules 系统、市场数据、竞品对标 | v4.0 |
| 2026-03-17 | 新增"Mars 视角"深度分析，关键节点验证，行业对标案例 | v4.0 |
| 2026-03-17 | 完善商业模式分析、反脆弱杠铃策略、JTBD 用户分层 | v4.0 |

---

## 注

**AI 草稿——待 Mars 确认**

此卡片基于公开信息和市场数据编写，关于 Trae 的商业化中期策略（第三阶段）、单位经济学验证、国内团队开发计划等内容，需要 Mars 的一手信息补充和战略判断。特别是：

1. 豆包在 Trae 中的深度集成是否已成为"不可替代的护城河"？
2. 国内付费转化的现实数据（目前尚无公开披露）
3. 与字节其他产品（如豆包网页版、MarsCode）的边界和协同
4. 5年商业化目标：目标 GMV、用户成本、LTV/CAC 比

待补充后，此卡片可升级为"决策级产品分析文档"。
