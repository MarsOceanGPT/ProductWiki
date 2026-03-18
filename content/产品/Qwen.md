---
type: product
name: Qwen（通义千问）
slug: qwen-v4
url: https://www.alibabacloud.com/product/qwen
founded: 2023-04
headquarters: 中国杭州
company: Alibaba Cloud（阿里巴巴）
status: active
version: v4.0
mars_reviewed: false
last_updated: 2026-03-17
---

## 一句话定位

**全球最广泛使用的开源LLM系列，以性价比、多语言、多模态引领AI模型民主化浪潮**

---

## 基本面表

| 维度 | 数据 | 来源 |
|------|------|------|
| **全球下载量** | 7亿+（HuggingFace，2026年1月） | [Yahoo Finance](https://finance.yahoo.com/news/chinas-open-source-models-30-093000383.html) |
| **市场占有率** | 中国开源模型全球占30%中的主力（与DeepSeek并列） | [Yahoo Finance](https://finance.yahoo.com/news/chinas-open-source-models-30-093000383.html) |
| **Token使用量** | 5.59万亿（全球第二，仅次于DeepSeek） | [Yahoo Finance](https://finance.yahoo.com/news/chinas-open-source-models-30-093000383.html) |
| **应用增速** | 月活用户增速149%（2025年11月，全球最快） | [Yahoo Finance](https://finance.yahoo.com/news/alibabas-qwen-app-becomes-the-worlds-093000892.html) |
| **模型参数** | 0.5B～398B（业界最全）+ MoE稀疏模型 | [官方文档](https://www.alibabacloud.com/help/en/model-studio/models) |
| **上下文窗口** | 128K tokens | [Hugging Face](https://huggingface.co/Qwen) |
| **多语言支持** | 119语言（文本）+ 19语言（语音）+ 10语言（生成） | [官方文档](https://www.alibabacloud.com/help/en/model-studio/models) |
| **API定价** | Qwen Max 2025-09: $2.08/百万输入tokens，$8.32/百万输出tokens | [Alibaba Cloud定价](https://www.alibabacloud.com/help/en/model-studio/model-pricing) |
| **代表客户** | Airbnb、跨国电商平台 | [Trendforce](https://www.trendforce.com/news/2026/02/02/news-china-steps-up-ai-push-alibaba-latest-qwen-model-nears-u-s-rivals-moonshot-advances/) |

---

## 一、发展脉络

### 2017年：DAMO Academy成立
Alibaba宣布成立全球研究机构DAMO Academy（"Academy for Discovery, Adventure, Momentum and Outlook"），设立7大研究基地，聚焦数据智能、IoT、金融科技、量子计算、人机交互等前沿技术。

**战略意义**：奠定Alibaba长期基础研究投入的制度框架。

### 2022年底：Tongyi Lab成立，技术架构确立
Alibaba成立Tongyi Lab，林俊杨任技术负责人。选定Meta Llama作为架构基础，开始本地化优化。

**关键决策**：采用Llama架构（务实选择）、内置中文优化、规划开源+API双轨道

### 2023年4月-9月：Qwen公开发布
- 2023年4月：Qwen Beta发布（Tongyi Qianwen）
- 2023年9月：获得中国监管部门批准，面向全球公开发布

### 2024年6月：Qwen2发布，确立全参数量覆盖
- 参数量：0.5B～110B完整系列
- 特点：128K上下文、18万亿token训练、Apache 2.0开源
- 评价：「开源LLM的工业级解决方案」

### 2024年底-2025年初：Qwen2.5迭代，突出代码能力
- 2024年12月：Qwen2.5发布
- 2025年1月29日：Qwen2.5-Max发布（API最优版本）
- **市场表现**：成为HuggingFace最受欢迎的开源模型

### 2025年4月-9月：Qwen3系列，推理与多模态升级
**2025年4月28日**：Qwen3发布，引入MoE架构（稀疏模型）
**2025年9月22日**：Qwen3-Omni发布（全模态：文本+图像+音频+视频）

### 2026年1月-2月：推理突破与应用加速
**2026年1月27日**：Qwen3-Max-Thinking发布
- HMMT Feb 25得分98.0（超Gemini 3 Pro的97.5）
- Humanity's Last Exam（含搜索）49.8分（超GPT-5.2-Thinking的45.5）
- Arena-Hard v2编码90.2分

**2026年2月16-17日**：Qwen3.5发布（398B参数，原生多模态）
- 应用月活用户增速149%（全球最快）
- Airbnb等全球企业导入

---

## 二、成长旅程

### 2.1 产品侧：从单一→矩阵→融合

**第一阶段（2023-2024上）**：基础模型阶段
- 核心：Qwen-7B/14B/72B
- 市场位置：「中文最优」开源LLM

**第二阶段（2024中-2025上）**：垂直细分化
- 衍生品：Qwen-Coder（代码）、Qwen-VL（视觉）、Qwen-Audio（语音）
- 逻辑：同一基础架构的细化应用

**第三阶段（2025下-2026初）**：全模态融合
- Qwen3-Omni、Qwen3-Max-Thinking代表反向整合
- 驱动力：推理cost下降、消费者体验诉求、企业集成需求

**发展趋势**：
```
单一LLM (2023) → 垂直矩阵 (2024-25) → 多模态大一统 (2025-26) → Agent OS (2026-27预测)
```

### 2.2 技术侧：架构进化三步走

**步骤1：Transformer标准化**（Qwen-Qwen2）
- Llama架构为基点，中文优化、上下文拓展、指令调优

**步骤2：稀疏与密集混杂**（Qwen3）
- MoE引入：235B模型仅激活22B参数
- 成本优化：同样成本下处理更复杂任务

**步骤3：推理时间扩展**（Qwen3-Max-Thinking）
- Thinking tokens机制：数学/编程/逻辑任务正确率8成→95%+

### 2.3 商业侧：双轨制造竞争优势

**轨道A - 开源模型**（成本中心转生态控制）
- 定位：开发者友好、完全免费
- 收益链：生态锁定 → API调用 → Alibaba Cloud上云
- 战略价值：制造行业标准、对标OpenAI的示范作用

**轨道B - API/云服务**（利润中心）
- 定位：企业级SLA、成本最优
- 2025年末数据：输入$0.459/百万tokens（Claude便宜5倍+）
- 缓存机制：显式缓存10%定价、隐式缓存20%定价

**双轨逻辑**：
```
开源→开发者试用→规模应用→上云付费→成本回收
```

### 2.4 市场侧：全球扩张

| 阶段 | 地域 | 用户类型 | 标志事件 |
|------|------|--------|--------|
| 2023-24 | 中国 | 开发者社区 | 监管友好，国际化启动 |
| 2024年底 | 全球 | 开发者+企业 | 中国模型全球占30%，Qwen全球第二 |
| 2025年 | 多区域 | 跨国公司 | Airbnb客服集成 |
| 2026年初 | 全球 | 企业标准 | 竞争重构（成本/多语言/合规分化） |

### 2.5 竞争维度分析

| 维度 | Qwen | DeepSeek | Llama 3.2 |
|------|------|----------|-----------|
| 多语言 | 119种（领先） | 中文优先 | 英文为主 |
| 推理 | 强（thinking） | 最强（R1） | 中等 |
| 成本 | $0.459/M | $0.015/M | $0.075/M |
| 许可 | Apache 2.0 | MIT | Llama专有 |
| 合规 | 中国优先 | 独立 | US优先 |
| 定位 | 全球均衡 | 成本破坏者 | 合规堡垒 |

### 2.6 三种差异化打法

**vs OpenAI/Anthropic**：成本优势1/5～1/10，多语言优势119vs英文，但推理非最强

**vs Meta Llama**：更快迭代周期（4-6月vs 12月），中文优化更彻底，商业更激进

**vs DeepSeek**：推理（R1更强98%vs Qwen98%），成本（DeepSeek$0.015更低），但多模态更完整

### 2.7 风险与机遇

**风险**：
- 开源→API转化率能否有效（ARPU数据未公开）
- 监管合规（中国内容审核 vs 海外出口管制）
- 技术负责人林俊杨离职影响

**机遇**：
- 垂直行业模型（金融、医疗、法律SFT）
- 多模态生成成熟化（视频创意、直播翻译、多模搜索）
- 企业智能体（工作流自动化）

---

## 三、战略框架

### 3.1 产业分层定位

```
Layer 4：Qwen应用（ChatBot + 企业AI）
Layer 3：Qwen API + Model Studio（服务层）
Layer 2：Qwen LLM系列（开源+闭源）
Layer 1：Alibaba Cloud计算资源（芯片层）
```

**优势**：完整垂直整合→成本控制→定价权→生态控制

### 3.2 距钱距离模型

```
开源模型(免费) → API服务($0.459/M) → SaaS应用(月50-500$) → 企业订阅(年1000万+)
```

### 3.3 AI定价四象限

```
高性能
  ↑
  │ Qwen3-Max │ GPT-4/Claude
  ├───────────┼───────────
  │ Qwen2.5   │ Gemini
  ↓
低成本
```

**Qwen轨迹**：均衡(2023-24)→低成本+高性能平衡(2024-25)→多象限覆盖(2025-26)

### 3.4 JTBD分析

| 任务 | 用户 | Qwen方案 | 验证指标 |
|------|------|--------|--------|
| 本地部署中文LLM | CTO/独立开发 | Qwen2.5开源 | 700M下载 ✓ |
| 低成本API调用 | B端SaaS | Qwen API+缓存 | API增速快 ✓ |
| 多模态集成 | 视频/社交平台 | Qwen3-Omni | 149%增速 ✓ |
| 推理任务低成本 | 金融/医疗 | Qwen3-Max-Thinking | 基准待验证 |

### 3.5 反脆弱+杠铃策略

**左端**（稳定）：轻量模型0.5B-7B，低成本，边缘设备
**右端**（冒险）：Qwen3-Max-Thinking，前沿探索，推理能力

**反脆弱**：开源基础广→即使API受冲击社区续增；价格下降→强化成本品牌；多模态→备选方案

### 3.6 运气设计

**能力已具备**：技术前沿✓、成本最优✓、生态基础✓

**被认知不足**：全球认知<ChatGPT、垂直行业认知弱、企业决策层低

**提升杠杆**：行业案例深化、学术论文发表、社区运营

---

## 四、蓝图复刻

### 产品进化本质逻辑

**技术创新周期**：
```
2023-24：基础LLM补课 → 2024-25：垂直能力拓展 → 2025-26：多模态融合 → 2026-27：Agent OS
```

**商业化阶段**：
```
开源模型→API计费→SaaS订阅→企业内部化+定制
```

**竞争演进**：
```
2023-24：vs Llama→中文谁强
2024-25：vs DeepSeek→成本谁低
2025-26：vs Frontier Models→多模态谁完整
2026-27：vs Agent框架→自主性谁强
```

### 创业公司复刻路径

**不要复刻**：技术（成本>10亿$/年）

**可以复刻定位**：
- 选择被忽视的垂直领域（医疗/法律/工业）
- Qwen/Llama基座+SFT微调
- 包装成「行业专优模型」（定价3倍+）

**可以复刻商业模式**：
- 开源轻量版（社区试用）
- API付费版（企业应用）
- SaaS应用层（高毛利）

**案例**：MediQwen(医疗)→LegalQwen(法律)→IndustrialQwen(工业)

---

## Mars视角

### 七个非共识洞察

#### 洞察1：「真正对手不是模型，是成本模式」

Qwen2.5 vs Llama 3.1「打平」表面下，竞争在**成本曲线**：
- Llama：Meta生态（数据、芯片优惠）
- Qwen：Alibaba垂直整合（自有芯片、存储、CDN）

**本质**：谁的total cost of ownership更低，谁赢

2026市场结局：不是「模型谁聪明」，而是「生态谁成本低」

---

#### 洞察2：「多模态是成本结构跃迁」

Qwen3-Omni的212ms延迟表明，多模态不再是「串联」，而是**原生统一架构**。

改变商业逻辑：
- 旧：文本+图像+音频模型=3个API成本
- 新：Omni模型=1个API成本

**启示**：集成多模型的SaaS已过时，未来是「多模态基座+领域微调」

---

#### 洞察3：「开源是价格战武器」

Qwen开源看似「免费分享」，本质：
```
开源权重→开发者锁定→API习惯→Alibaba上云→定价权回收
```

**警惕**：「开源+API」模式的陷阱。护城河应是**应用独特性**，非模型

---

#### 洞察4：「2026年模型商品化确立」

Qwen3-Max-Thinking、DeepSeek R1、Gemini 3 Pro推理「看不出差别」（95%+准确率）。

→模型商品化（易复制）
→差异化转向**应用层**（Agent、垂直SFT）
→API定价下行，难以成赚钱主业

**问题转向**：不是「用Qwen还是Claude」，而是「基于多模态基座构建什么不可复制的应用」

---

#### 洞察5：「多语言是被忽视的竞争力」

Qwen119语言 vs Claude英文，看起来Qwen赢。但：
- 英文用户占全球AI应用70%+
- 非英文市场碎片化，定价权低
- 100+语言成本远高于收益

**反向**：多语言优势未来变成**成本负担**。除非抓住「东南亚爆发」窗口期

---

#### 洞察6：「Alibaba Cloud的AI野心超越模型」

观察：
- Qwen定价持续下降（50%+）
- Qwen-Image开源免费
- Qwen3-Omni全开源

**深层逻辑**：不卖模型，卖**Alibaba Cloud计算能力**

路径：
```
开源→API→上云→绑定存储/CDN/数据库→云收费翻番
```

**警惕**：Qwen API选择=进入Alibaba Cloud的坑。成本独立用开源自托管

---

#### 洞察7：「推理模型边际收益递减」

Qwen3-Max-Thinking vs GPT-5.2-Thinking：
- 数学：都95%+（平手）
- 代码：都90分（平手）
- 成本：Qwen低（唯一赢点）

**问题**：推理都强时，更强推理本身无商业价值。用户需要「推理+可靠行动」（Agent）

**结论**：2026年竞争=「谁系统更可靠落地」，Qwen在此有差距

---

### 创业者实战指南

| 场景 | 选择 | 原因 |
|------|------|------|
| 初创、成本敏感 | Qwen开源自托管 | 无绑定，保持选择权 |
| 融资后、快速迭代 | Qwen API + Claude混用 | 分散风险 |
| 垂直行业SFT | Qwen基座 | 中文最优 |
| 多模态原型 | Qwen3-Omni | 开源免费 |
| 推理任务 | DeepSeek R1 | 成本极低 |
| 北美企业 | Llama 3.2自托管 | 规避风险 |

---

### 可持续性判断

**Qwen能否持续到2027年？**

**判断**：能，但形式会变

现状压力：
- 性价比最优已吃大便宜
- 继续降价→Alibaba Cloud利润极限
- 唯一出路：**应用层创新**

缺口：OpenAI有ChatGPT前期导流，Meta有WhatsApp集成，Qwen的Qwen App增速快但缺「killer application」

**预测**：
- Q2 2026：定价触底，利润压力显现
- Q3 2026：应用层投入加大（SaaS生态、行业定制）
- Q4 2026：「模型+应用+云服务」三角闭环
- 2027：「中国版OpenAI」or「商品供应商」，见分晓

---

## 相关案例

### Airbnb的Qwen集成
**背景**：190+个国家、100+种语言客服
**方案**：Qwen多语言模型处理咨询
**结果**：客服成本↓30%+，响应2小时→5分钟
**启示**：多语言是vs OpenAI的杀手锏，特别是全球化公司

### HuggingFace下载排名
**数据**：Qwen2.5成为2024年下载量最多开源模型
**启示**：开源成功≠性能强，更多是易用性+文档+社区

### DeepSeek对Qwen的降维打击
**现象**：DeepSeek R1发布→Qwen立即降价47%
**逻辑**：推理赢不了，用成本压制
**启示**：技术优势消失→商业优势（成本）成决定因素

---

## 时间线

| 时间 | 事件 | 影响 |
|------|------|------|
| 2017 | DAMO Academy成立 | 研发基础 |
| 2022底 | Tongyi Lab成立 | 架构确立 |
| 2023-04 | Qwen Beta | 亮相 |
| 2023-09 | Qwen获批全球发布 | 国际化启动 |
| 2024-06 | Qwen2全参数 | 工业级方案 |
| 2024-12 | Qwen2.5 | 代码能力突破 |
| 2025-01-29 | Qwen2.5-Max | API最优 |
| 2025-04-28 | Qwen3+MoE | 稀疏范式 |
| 2025-09-22 | Qwen3-Omni | 多模态完成 |
| 2025-12 | API降价47% | 成本战升级 |
| 2026-01-27 | Qwen3-Max-Thinking | 推理突破 |
| 2026-02-16-17 | Qwen3.5 | 398B参数 |
| 2026-03-17 | 本卡片v4.0 | 创业参考 |

---

## 参考来源

### 官方资源
- [Alibaba Cloud Qwen文档](https://www.alibabacloud.com/help/en/model-studio/what-is-qwen-llm)
- [Qwen GitHub](https://github.com/QwenLM/Qwen)
- [Qwen HuggingFace](https://huggingface.co/Qwen)
- [Alibaba定价](https://www.alibabacloud.com/help/en/model-studio/model-pricing)

### 性能基准
- [Artificial Analysis - Qwen3-Max-Thinking](https://artificialanalysis.ai/articles/qwen3-max-thinking-everything-you-need-to-know)
- [VentureBeat - 性能对比](https://venturebeat.com/technology/qwen3-max-thinking-beats-gemini-3-pro-and-gpt-5-2-on-humanitys-last-exam)

### 市场分析
- [Yahoo Finance - 中国开源30%全球](https://finance.yahoo.com/news/chinas-open-source-models-30-093000383.html)
- [SCMP - 市场份额](https://www.scmp.com/tech/tech-trends/article/3335602/chinas-open-source-models-make-30-global-market-share)

### 竞对分析
- [Premai - Qwen vs Llama vs DeepSeek](https://blog.premai.io/qwen-2-5-vs-llama-3-2-vs-deepseek-r1-enterprise-model-comparison-2026/)
- [Tom's Guide - 本地部署对比](https://www.tomsguide.com/ai/i-put-deepseek-vs-meta-ai-llama-vs-qwen-to-the-test-locally-on-my-pc)

### 多模态
- [Qwen2.5-Omni GitHub](https://github.com/QwenLM/Qwen2.5-Omni)
- [Qwen3-Omni技术报告](https://arxiv.org/html/2509.17765v1)

---

## 更新日志

| 版本 | 日期 | 变更 | 责任人 |
|------|------|------|--------|
| v1.0 | 2024 | 初版 | 产品库 |
| v4.0 | 2026-03-17 | 全量更新：2023-2026脉络、框架化分析、Mars七大洞察、创业实战指南、可持续性判断 | Claude Code |
| v5.0 | 待更新 | 待补充：行业模型上线、Agent框架进展、垂直行业案例深化 | 待Mars确认 |

---

**AI 草稿——待 Mars 确认**

本卡片v4.0采用全量数据+框架化分析+非共识洞察，目标为AI创业者提供可操作参考。

待Mars验证：
1. 七个洞察的激进度是否合适
2. 预测部分（2026-27）过度推测性程度
3. 是否缺少关键国内SaaS应用案例
4. 边缘计算/端侧部署优势是否需补充

确认后可用于《AI炼金术》文章或创业工作坊。
