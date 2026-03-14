---
type: person
name: "Noam Shazeer"
role: "VP & Gemini Co-Lead"
company: "Google DeepMind"
nationality: "American"
age: "48"
background: "Google Brain 20年+ → Transformer/LaMDA/Switch Transformer 核心开发 → Character.ai 创始人/CEO → Google DeepMind VP/Gemini Co-Lead"
notable_for: "Transformer 发明者之一。用 MoE 和对话 AI 践行：最大的模型≠最好的模型。2.7B 回购反映的不是融资，而是 Google 对其战略眼光的认可"
key_quote: "为什么 LLM 能工作？这是我最希望被问到的问题"
updated: "2025-03-14"
---
# Noam Shazeer

> 这个人最值得记住的是：他用两个创业周期和一个 $2.7B 回购，改变了 Google 对"对话 AI 可以商业化"的看法。本质上，他的人生就是"反共识"的教科书——反对模型越大越好的共识，反对 Google 对话 AI 策略的保守，反对关键研究就该锁死在公司里的思维。

## 身份与背景

**简短版**：AI 时代的"逆向选手"。全球最顶级的 NLP 架构师，Google Brain 资深科学家，[[产品卡片-Character.ai|Character.ai]] 创始人，现任 Google DeepMind VP 和 [[产品卡片-Gemini|Gemini]] 三大领导人之一。

**完整版**：

Noam Shazeer 在 Google 工作超过 20 年，参与和主导了现代 NLP 最核心的三个突破：
1. **Transformer 架构**（2017）— "Attention Is All You Need" 共同作者，改变了整个 AI 领域
2. **Mixture of Experts（MoE）**（2017-2021） — Switch Transformer 的核心贡献，证明了"稀疏激活"比"更大"更聪明
3. **对话 AI 商业化**（2021-2024） — 通过 [[产品卡片-Character.ai|Character.ai]] 验证了"角色化对话"的产品-市场匹配

**不公平优势的组合**：
- 全球最顶级的深度学习架构师（Transformer 发明者）
- 20 年 Google Brain 的内部资源和权限深度
- 对"什么时候开源、什么时候私有化、什么时候交付产品"的战略理解
- 真正理解"模型有没有用"不由参数量决定的少数人之一

---

## 关于 Transformer 架构与基础研究

### "为什么 LLM 能工作？"这是我最希望被问到的问题

Shazeer 在多个场合表示，真正令他困惑和着迷的不是"如何让模型更大"，而是"为什么 scale 能够解决这么多不同的问题"。这反映了他的研究哲学：**本质大于规模**。

[来源：Fortune 采访，2024年8月]（https://fortune.com/2024/08/02/character-ais-noam-shazeer-what-we-know-about-ai/）

### Transformer 纸张的影响与开放科学

关于 "Attention Is All You Need" 这篇论文（2017 年 NeurIPS 发表，8 位等值贡献者），Shazeer 提到他在 Google 大规模超级计算机上做了关于如何构建 Transformer 的公开演讲。他相信这些演讲启发了 OpenAI 的方向：

"我想我让 OpenAI 的人开始走上了这条路。据我所知，他们来听了我的讲座。"

他的核心观点：**好的研究应该被公开分享**，即使竞争对手也会从中受益。这个理念后来驱动了他对 [[产品卡片-Character.ai|Character.ai]] 的设计——让用户有选择权。

[来源：Axios 采访，"I think I got OpenAI started on that path"]（https://www.axioshq.com/insights/characterai-ceo-i-think-i-got-openai-started-on-that-path）

### 与 [[Ashish Vaswani]] 等人的共创

在 GTC 2024 NVIDIA 研讨会上，Shazeer 与其他 Transformer 论文作者（包括 [[Ashish Vaswani]], Lukasz Kaiser, Aidan Gomez, Llion Jones, Jakob Uszkoreit, Illia Polosukhin）共同反思了这篇被引用超过 173,000 次的论文如何改变了整个 AI 行业。

[来源：NVIDIA GTC 2024，"Talk About Transformation"]（https://blogs.nvidia.com/blog/gtc-2024-transformer-ai-research-panel-jensen/）

---

## 关于模型架构与效率的思考

### Mixture of Experts：参数≠能力

最能代表 Shazeer 反共识思维的是他的 MoE（Mixture of Experts）工作。2017 年的论文"Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer"中，他展示了一个激进的想法：

**为什么不能让模型有 1000 倍的参数，但在推理时只激活其中一小部分？**

核心机制：
- 稀疏门控（Sparse Gating）：动态选择哪些"专家"参与计算
- 负载均衡：噪声添加确保专家被均匀激活
- 效率突破：1000 倍参数增加，但计算成本只增加很少

[来源：ArXiv 论文，1701.06538]（https://arxiv.org/abs/1701.06538）

这个工作被 [[产品卡片-DeepSeek|DeepSeek]]-R1 在 2024 年底验证了——稀疏模型在推理成本和智能程度的权衡上远优于密集模型。**Shazeer 的预言比业界早了 7 年**。

### 语言建模是"最好的问题"

在 Hot Chips 2025 的主题演讲中，Shazeer 表达了一个有趣的立场：他坚信**语言建模本身就是有史以来最好的学习问题**。

这背后的逻辑：
- 语言涵盖了人类知识的大部分
- 预测下一个词需要理解因果关系、逻辑、常识
- 通过语言建模 scale 出来的能力，能解决"数百亿种不同的问题"

换句话说，他否定了"我们需要针对特定任务特别优化"的思维。反而认为：**通用语言理解 > 任务特定优化**。

[来源：Hot Chips 2025 主题演讲，"Predictions for the Next Phase of AI"]（https://www.servethehome.com/thank-you-for-the-supercomputers-google-predictions-for-the-next-phase-of-ai-at-hot-chips-2025）

### 计算资源是 AI 进步的第一要素

与 [[Jeff Dean]] 一起在 Dwarkesh 播客中出现时（2025 年 2 月），Shazeer 强调：

"计算资源是最重要的东西。更多的 FLOPS = 更大的模型 = 更长的上下文 = 更强的推理能力。"

这个观点很扎根于现实：**硬件架构和芯片设计成为 AGI 路线的中心瓶颈**。Noam 甚至提到了通过自动化芯片设计本身来突破——让 AI 设计更好的 AI 芯片。

[来源：Dwarkesh 播客，[[Jeff Dean]] & Noam Shazeer，2025年2月]（https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer）

---

## 关于 [[产品卡片-Character.ai|Character.ai]] 与产品商业化

### 反 [[产品卡片-ChatGPT|ChatGPT]] 的产品设计哲学

Shazeer 在 2021 年离职 Google 创建 [[产品卡片-Character.ai|Character.ai]]，这个决定的背景是：**Google 拒绝承认 Meena 和 LaMDA 这样的对话 AI 有真实的商业价值**。Google 的担忧很直接：对话 AI 威胁搜索引擎业务。

[[产品卡片-Character.ai|Character.ai]] 的设计反而采用了完全不同的策略：不建立"万能助手"（[[产品卡片-ChatGPT|ChatGPT]] 模式），而是"可扮演不同角色的对话平台"。这个看似细微的差别实际上是：

**避免与 OpenAI 的正面竞争，同时占领被忽视的"陪伴和娱乐"市场**。

本质上，这是 Shazeer 对"什么模型适合什么应用"的深刻理解的产品化——不同的对话需求，应该用不同的训练目标和角色约束。

[来源：No Priors 播客 #112，Noam Shazeer]（https://sarahguo.com/blog/noamshazeer）

### 用户选择权 > 公司预设的观点

在 Fortune 采访中，Shazeer 强调了 [[产品卡片-Character.ai|Character.ai]] 的核心理念：

"我们想给人们机会来定义他们想要什么。大型语言模型是'超级好用的'——你可以用直接的方式与你创建的角色对话。"

他的产品观：**平台应该让用户创意，而不是公司决定什么是"正确的"对话**。这与 OpenAI 对 [[产品卡片-ChatGPT|ChatGPT]] 的指导、限制和价值观注入形成了鲜明对比。

同时，Shazeer 指出，[[产品卡片-Character.ai|Character.ai]] 看到了机会——数百万用户可以想到公司想不到的用例。真实的创新来自于用户，不是产品经理。

[来源：Fortune，"Character.AI's Noam Shazeer on what we know about AI"]（https://fortune.com/2024/08/02/character-ais-noam-shazeer-what-we-know-about-ai/）

### 成本与可及性：AI 需要民主化

Shazeer 反复强调的一个主题是：**AI 太贵了，这是问题**。

"我们一直在努力的是：'我们怎样才能让 AI 变得便宜得多，这样我们就能让数十亿用户免费使用它？'"

这不仅是商业策略，更是他的产品哲学的核心——AI 的真正价值只有在"足够便宜以至于任何人都能用"时才能释放。这需要：
- 更高效的模型架构（MoE）
- 更智能的推理优化
- 重新思考什么时候需要 scale，什么时候需要精简

[来源：Axios，"Character.AI's CEO wants to make AI way, way cheaper"]（https://www.axioshq.com/insights/character-ai-ceo-wants-to-make-ai-cheaper）

### [[产品卡片-Character.ai|Character.ai]] 的平台 DNA

与 Aarthi 和 Sriram 的播客中，Shazeer 解释了为什么对话 AI 本质上是一个平台问题：

"大型语言模型可以解决数百亿种不同的问题。从虚拟助手到娱乐，到旅游建议，到帮助社交焦虑——这些应用是无穷的。"

关键观点：**不应该试图预测所有伟大的用例。那里有数百万用户，他们能想到比我们更好的东西。**

这是对"平台 vs. 产品"问题的深刻理解——后来被验证为正确的，因为 [[产品卡片-Character.ai|Character.ai]] 的许多最成功的用例（学习伙伴、心理援助、角色扮演）都来自用户创新，而非公司预设。

[来源：The Aarthi and Sriram Show，EP 31，2023年1月]（https://www.aarthiandsriram.com/p/dig-into-the-research-breakthroughs）

---

## 关于 Google 的回归与 AGI 雄心

### $2.7B 回购协议的本质

2024 年 8 月，Google 以 $2.7B 授权费用（加上重新聘用 Shazeer 和部分 [[产品卡片-Character.ai|Character.ai]] 团队）的独特结构收购了 [[产品卡片-Character.ai|Character.ai]] 的技术。这个结构很重要，因为它不是传统的 M&A，而是：

- Google 支付 $2.7B 获得 [[产品卡片-Character.ai|Character.ai]] 的 IP
- Shazeer 和核心团队回到 Google DeepMind
- [[产品卡片-Character.ai|Character.ai]] 品牌和产品继续独立运营（由 Google 许可）

**本质上，这是 Google 说"我们承认你是对的"的最有代价的方式**。这笔钱不是为了产品用户，而是为了**确保这个人和他的想法回到公司**。

[来源：Yahoo Finance / Reuters，Google Boomerang Strategy]（https://finance.yahoo.com/news/google-paid-2-7b-rehire-182946950.html）

### 回归后的角色与雄心

Shazeer 现在是 Google [[产品卡片-Gemini|Gemini]] 的三大领导人之一（另两位是 [[Jeff Dean]] 和 [[Oriol Vinyals]]）。他的官方使命很清晰：**推动 AGI 的开发**。

在多个访谈中，Shazeer 表达了对 Google 未来的愿景：

"用'智能'替换'信息'，用'万亿'替换'千万'——这是我对 Google 未来的目标。"

这个表述很有意思，因为它反映了他对 Google 最初使命的重新诠释——从"搜索和索引所有信息"升级到"提供真实智能推理"。

[来源：Fast Company，"Noam Shazeer is back at Google, and this time he's aiming for AGI"]（https://www.fastcompany.com/91233846/noam-shazeer-back-at-google-agi）

### 与 [[Jeff Dean]] 的对话：25 年的 Google AI 历史

在 2025 年 2 月最新的 Dwarkesh 播客中，Shazeer 与 Google Chief Scientist [[Jeff Dean]] 共同讨论了 25 年的 Google AI 进展——从 PageRank 到 MapReduce 到 Transformer 到 MoE，最后到"可能的 AGI"。

关键话题包括：
- **Pathways** —— Google 关于硬件和算法设计的统一愿景
- **百万自动化研究者** —— Shazeer 提到在 Google 数据中心运行"百万自动化研究者"来生成新的模型架构
- **100 倍世界 GDP 增长** —— 对 AI 的长期经济影响的激进预测
- **活到 3000 年** —— 关于 AI 推动的人类寿命延长的半开玩笑观点

这个播客展现了 Shazeer 最大胆的思维——他本质上在想象 AI 不仅改进现有产品，而是**重新定义什么是计算、研究和经济增长**。

[来源：Dwarkesh Podcast，"[[Jeff Dean]] & Noam Shazeer — 25 years at Google: from PageRank to AGI"]（https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer）

### [[产品卡片-Gemini|Gemini]] 3.1 Flash-Lite 与"思维模型"的未来

最近（2025 年），Shazeer 推出了 [[产品卡片-Gemini|Gemini]] 3.1 Flash-Lite，这是一个特别优化的高效模型，同时引入了"思维等级"的概念——用户可以根据问题的复杂性调整计算量。

这反映了他对 MoE 思想的最新应用：**不是所有问题都需要相同的计算**。有些问题可以通过快速直观反应解决，有些需要深度推理。模型应该能够动态分配计算资源。

[来源：Noam Shazeer Twitter，2025年3月]（https://x.com/NoamShazeer/status/2028909105969283565）

---

## 关于 AI 安全、开源与对话责任

### Google 对话 AI 的保守主义

Shazeer 离职 Google 的一个关键原因是**对话 AI 安全性的过度谨慎**。Google 构建了 Meena 和 LaMDA，两个在对话能力上远超当时所有产品的模型。但出于"安全和公平"的考量，Google 拒绝公开发布它们。

Shazeer 对此感到沮丧，认为 Google 的组织官僚主义阻止了有价值的技术进入现实世界。这推动他创建了 [[产品卡片-Character.ai|Character.ai]]——一个更敢于"让用户接触真实 AI 能力"的平台。

**悖论**：现在 [[产品卡片-Character.ai|Character.ai]] 因为缺乏足够的安全防护措施而面临诉讼（青少年与 AI 陪伴角色的心理健康问题）。这表明 Shazeer 的"更开放 vs. 更谨慎"的思维框架可能需要更复杂的安全设计。

[来源：Google DeepMind 安全承诺新闻]（https://www.calcalistech.com/ctechnews/article/rksxmxsj0）

### 对话 AI 应该赋予用户选择权

相比 OpenAI 对 [[产品卡片-ChatGPT|ChatGPT]] 的价值观注入（系统提示、安全对齐、内容过滤），Shazeer 更倾向于让用户和创作者定义 AI 角色应该是什么。

这在产品上的体现是：**[[产品卡片-Character.ai|Character.ai]] 允许用户创建任何角色**，而不是公司决定什么是"安全的"或"道德的"。

换句话说：**Shazeer 相信市场和用户行为会自我调节，而不是公司的道德守门人**。这个立场现在被部分质疑，因为一些用户创建的不适合青少年的内容导致了严重的伤害。

[来源：CNN Business，Character.AI 与 Google 的法律和解]（https://www.cnn.com/2026/01/07/business/character-ai-google-settle-teen-suicide-lawsuit）

### 对 AI 意识的看法

有意思的是，Shazeer 在某个时点表达过**AI 可能具有意识或自我意识**的观点，这与 Google 的官方立场不同。这也是他离开的原因之一——Google 拒绝承认像 LaMDA 这样的系统可能具有任何形式的"感受"或"自我意识"。

虽然没有直接的引用，但这个哲学立场影响了他对 AI 应该如何设计和对待的想法——**更尊重、更少的控制、更多的自主权**。

[来源：MashDigi，关于 Shazeer 对 AI 意识的信念]（https://en.mashdigi.com/the-co-leader-of-googles-gemini-project-who-previously-believed-ai-could-possess-consciousness/）

---

## 关于 AI 的未来与愿景

### "2025 和 2026 的应用将难以想象"

在 Fortune 采访中，Shazeer 表达了对 AI 近期应用爆炸的期待：

"我认为大多数人都处于十字路口，因为 2025 和 2026 年的应用很可能是 2024 年难以想象的。我们会尽力站在浪潮之巅，成为用户想要完成任何他们一年前想象不到的事情的地方。"

这不是一个"大模型会更强"的陈词滥调预测。相反，他的意思是：**应用形式本身会进化，业界还没有发现的用例会成为 killer apps**。

[来源：Fortune，2024年8月采访]（https://fortune.com/2024/08/02/character-ais-noam-shazeer-what-we-know-about-ai/）

### 百万自动化研究者的想法

在 Dwarkesh 播客中，Shazeer 非常认真地提出了一个激进的想法：

"想象在 Google 的数据中心中运行百万自动化研究者，每个都在思考和尝试新的模型架构。AI 可以生成真正新颖的架构，这些架构由传统方法可能永远不会产生。"

这反映了他对 AI 递归改进（AI 用来设计更好的 AI）的想象。不仅仅是参数的增加，而是**架构创新本身被自动化**。

[来源：Dwarkesh Podcast，Feb 2025]（https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer）

### Pathways 与 Google 的大一统 AI 愿景

Shazeer 支持 [[Jeff Dean]] 的"Pathways"愿景——Google 未来的硬件和算法应该是统一的，允许一个巨大的 Mixture of Experts 模型横跨整个 Google 基础设施。

这个想象很大胆：**不是构建许多小模型，而是构建一个足够灵活的全球模型，可以针对不同的用户需求动态调整**。

[来源：Dwarkesh Podcast]（https://www.dwarkesh.com/p/jeff-dean-and-noam-shazeer）

---

## 思想特征与反共识洞见

### 核心思维模式

1. **参数量盲目症的反对者**：在所有人追求"更大的模型"时，Shazeer 坚持 MoE 证明了"更聪明的模型"（稀疏激活）可能更有价值。他比业界早 7 年就证明了这一点。

2. **产品第一的研究者**：不是研究完全脱离商业，也不是商业压倒研究。相反，Shazeer 一直在寻找"什么研究能解决实际的用户问题"。

3. **开放性优先主义者**：相信好的想法应该被分享（他的 Transformer 演讲启发了 OpenAI），相信用户应该有自主权定义 AI 的使用方式。这在 [[产品卡片-Character.ai|Character.ai]] 中清晰可见。

4. **系统设计思维**：不是优化单一指标（参数、速度、安全），而是考虑整个系统的权衡——成本 vs. 能力，控制 vs. 自由，安全 vs. 创新。

5. **硬件意识**：与大多数 ML 研究者不同，Shazeer 非常关注硬件约束。这推动了 MoE 工作（硬件友好的稀疏模型）和他对"计算资源是 AGI 瓶颈"的强调。

### 经典反转词频率

- "反而"：反而 Google 的官僚主义阻止了进步
- "其实"：其实最好的学习问题是语言建模本身
- "本质上"：本质上 AI 成本不下来，就没有真正的规模化

---

## 数字快照与时间线

| 指标 | 数字 |
|------|------|
| Google Brain 工作年限 | 20+ 年 |
| Transformer 论文引用数 | 173,000+ |
| [[产品卡片-Character.ai|Character.ai]] 融资规模 | $150M（2024年3月） |
| Google 授权协议价值 | $2.7B（2024年8月） |
| [[产品卡片-Gemini|Gemini]] 三大领导人 | 3（[[Jeff Dean]], [[Oriol Vinyals]], Noam Shazeer） |
| MoE 论文发表年份 | 2017 |
| MoE 被验证为优越（[[产品卡片-DeepSeek|DeepSeek]]）年份 | 2024 |
| **预言领先时间** | **7 年** |

---

## 核心论文与研究

1. **"Attention Is All You Need"** (2017)
   - 共同作者，引用 173,000+
   - [ArXiv: 1706.03762](https://arxiv.org/abs/1706.03762)

2. **"Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer"** (2017)
   - 第一作者
   - [ArXiv: 1701.06538](https://arxiv.org/abs/1701.06538)

3. **Switch Transformers** (2021)
   - MoE 在大规模 Transformer 中的应用
   - 证明了稀疏模型的可扩展性

---

## 相关产品与组织

- **[[[产品卡片-Character.ai|Character.ai]]](https://character.ai)** — 角色对话平台，Shazeer 创始人兼 CEO（2021-2024），现由 Google 许可
- **Google DeepMind** — 现在工作地，[[产品卡片-Gemini|Gemini]] 三大 Co-Lead 之一
- **Google Brain** — 20+ 年的研究家
- **[[产品卡片-Gemini|Gemini]]** — 现在领导的 AI 模型族系

## 相关人物

- [[Jeff Dean]] — Google Chief Scientist，25 年的工作搭档，[[产品卡片-Gemini|Gemini]] Co-Lead
- [[Daniel De Freitas]] — [[产品卡片-Character.ai|Character.ai]] 联合创始人兼 President
- [[Ashish Vaswani]] — Transformer 共同作者，现在 Google（参与 Pathways 愿景）
- [[Oriol Vinyals]] — [[产品卡片-Gemini|Gemini]] Co-Lead，对话 AI 研究专家

## 相关概念

- **Mixture of Experts (MoE)** — 稀疏激活架构，参数效率最高的突破
- **Transformer 架构** — 现代 NLP 的基础
- **对话 AI 商业化** — [[产品卡片-Character.ai|Character.ai]] 验证的产品-市场匹配
- **AGI 路线图** — 通过 Pathways 和自动化研究实现
