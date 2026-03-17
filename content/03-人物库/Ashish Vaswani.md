---
type: person
name: Ashish Vaswani
role: Co-founder & CEO
company: '[[Essential AI]]'
nationality: Indian
age: '44'
background: >-
  B.E. from BIT Mesra (2002) → Ph.D. from USC (David Chiang, 2010) → Google
  Brain (2016-2021) Transformer 共同设计 → Adept AI Co-founder (2021-2022) →
  Essential AI Co-founder & CEO (2023-现在)
notable_for: >-
  『Attention Is All You Need』论文共同作者与设计者（173,000+ 引用），Transformer
  架构的核心发明人。三次创业验证「构建更强 AI 系统」的执念：从研究 → Adept（失败）→ Essential AI（重启）。2024年获 C&C
  Prize，与论文其他作者一起获得 NEC 基金会的荣誉
key_quote: Transformer 最重要的不是论文，而是它启发了一个新的思考方式：复杂问题可以用最简洁的机制解决。我现在做的是：能否把这个思维扩展到企业 AI？
updated: '2026-03-14'
title: Ashish Vaswani
---
# Ashish Vaswani

> 这个人最值得记住的是：他设计了改变世界的架构，却没有停在论文的荣光中。反而用两次创业（一次失败、一次重启）来验证「我能把这个思想变成产品」。这个执念是真的。

## 身份与背景

印度 AI 研究者，但不是那种"只在学术象牙塔里的"。他走的是**研究 → 大厂 → 创业 → 大厂失败 → 再次创业**的完整循环，每一环都留下了痕迹。

### 阶段一：NLP 的早期探险者（2006-2016）

USC 博士，师从 David Chiang——一个被 NLP 圈子严重低估的研究者。Chiang 的实验室专注"机器翻译的序列建模"，这是后来所有 seq2seq 和 Transformer 工作的思想基础。

Vaswani 在这个环境中，学到的不是"如何应用深度学习"（那时候深度学习还不流行），而是**"如何从问题的本质出发设计架构"**。

这个习惯在后来被证明是关键的。

### 阶段二：Google Brain 的架构师（2016-2021）

2016 年加入 Google Brain（当时 Noam Shazeer 和 Illia Polosukhin 也在），正值深度学习第三波浪潮刚开始爆发。

Google Brain 当时的技术状况是：
- **seq2seq 已存在**：Ilya Sutskever 的 LSTM-based encoder-decoder 在机器翻译、语音识别等任务上效果不错
- **注意力机制已存在**：有很多论文提出了局部注意力、全局注意力、多头注意力
- **位置编码已有概念**：但还没有统一的方案

问题是：这些片段技术都没有被系统地整合。每个问题都需要一个定制化的架构——翻译任务用 seq2seq+attention，图像标注用 CNN+attention，等等。

**Vaswani 看到的问题**：为什么我们需要这么多不同的架构？能否设计一个**通用的架构，用于所有序列到序列的任务**？

### "Attention Is All You Need" —— 纸上的革命（2017年6月）

这篇论文现在是科技史上被引用最多的论文之一（173,000+ 次），但当时的反应其实没那么热烈。投稿 NeurIPS 2017 时，有评审觉得"这不过是 attention 机制的组合，没什么创新"。

但 Vaswani 和共同作者（Noam Shazeer、Parmar Niki 等）坚持了这个方向。论文的关键贡献是：

#### 论文的五个核心创新

1. **自注意力（Self-Attention）**：每个位置都能"看到"序列中所有其他位置，而不是像 RNN 那样逐步处理
2. **多头注意力（Multi-Head Attention）**：不同的注意力"头"学习不同的语义关系（语法、语义、共指等）
3. **前向网络（Feed-Forward Network）**：在注意力之间插入非线性变换，增加表达力
4. **位置编码（Positional Encoding）**：用三角函数编码位置信息，让模型知道词序
5. **层标准化和残差连接**：稳定训练，允许更深的网络

#### 为什么这个论文改变了一切？

按照常规的 NLP 思维，序列处理必须是**递归的**——你必须一个一个地处理词，因为后面的词依赖前面的词。

Transformer 说：**不，序列中的所有词可以并行处理**。只要有注意力机制，你就能建立词之间的依赖关系。

这听起来是一个小的工程改进。但它实际上是：
- **计算并行化**：从 O(n) 序列依赖变成可以并行化处理
- **长程依赖**：RNN 在序列长度超过 100-200 时效果就开始下降；Transformer 可以处理几千甚至几万长度的序列
- **可扩展性**：RNN 的计算复杂度是 O(n)；Transformer 是 O(n²)（注意力矩阵），但硬件优化得很好，实际上更快

**一句话**：Transformer 用并行计算和全连接注意力，击穿了 RNN 的瓶颈。

### 阶段三：Adept AI 的"我想做产品"（2021-2022）

2021 年 11 月，Vaswani 与 Niki Parmar 离开 Google，创办 [[Adept AI]]。融资 $65M Series A，这在当时是创纪录的。

Adept 的定位很野心勃勃：**AI Agent 能否自动化任何软件流程？**

想象一个 AI，它能：
- 看你用什么软件
- 理解你在做什么
- 自动执行重复的步骤

这是对"AI 的下一个应用形式"的大胆想象。

**但是**——这里很关键——仅仅 9 个月后（2022 年 11 月），Vaswani 和 Parmar 就离开了 Adept。

为什么？公开的解释很少，但从行业观察看，可能的原因是：
- **技术难度被低估了**：AI agent 本来看起来是"理解 + 执行"，但实际上涉及视觉理解、长序列规划、错误恢复等复杂问题
- **市场还没准备好**：2022 年还没有 GPT-4（那是 2023 年 3 月发布的），LLM 的能力还不足以真正做 agent
- **内部分歧**：这只是猜测，但大多数 founder 团队在融资后会有策略分歧

这个"失败"或者说"战略调整"，对 Vaswani 来说是重要的信号。它说明：**即使你发明了 Transformer，也不保证你能直接把研究转化成产品**。

### 阶段四：Essential AI 的"重新开始"（2023-现在）

2023 年，Vaswani 和 Parmar 再次联合，成立 [[Essential AI]]。

这次，他们的思路更清晰：**不做通用 agent，而做 "企业大脑"——一个能理解企业特定流程的 AI 系统**。

融资结构很有趣：
- **Seed $8.3M**：标准的早期融资
- **Series A $56.5M（2023年12月）**：但投资者不只是风投，还包括 Google、NVIDIA、AMD、Thrive Capital

**为什么这个投资者组合重要？**

- **Google**：战略投资，保持对尖端 AI 人才的接近
- **NVIDIA、AMD**：直接利益相关——Essential AI 如果成功，会大量使用他们的芯片
- **Thrive Capital**：专业 VC，带来运营经验

这个组合传达了一个信号：**所有人都赌 Vaswani 会成功，因为他做的事情对所有人都有价值**。

**不公平优势的重新组合**：
- Transformer 的核心发明人身份（永久的权威）
- Google Brain 10 年的深度研究经验
- Adept 失败的教训（知道什么不work）
- 两个关键的共同创始人（Niki Parmar 的 NLP 深度）
- 芯片 + 云 + 风投的三角支持

---

## "Attention Is All You Need"：深度解读

这篇论文为什么这么重要，不仅是因为它发明了 Transformer，而是因为它**改变了 AI 研究的范式**。

### 论文前的 NLP 世界

2017 年之前，NLP 的工作流是这样的：

1. **问题定制化**：翻译需要 seq2seq，语言建模需要 LSTM，句子编码需要 CNN
2. **架构为问题服务**：不同任务用不同的神经网络设计
3. **扩展瓶颈**：LSTM 很难扩展到非常长的序列（>512 tokens），因为梯度消失问题

### 论文之后的范式转换

**单一架构解决所有问题**：
- Transformer 基础模型可以用于翻译、分类、生成、表示学习等
- **可扩展性爆炸**：从 12 层的 BERT 到 96 层的 GPT-3，模型深度增加了 8 倍，但仍然稳定训练
- **迁移学习成为标准**：预训练 + fine-tune 的模式统一了整个 NLP 领域

### 为什么 Vaswani 的设计这么聪明？

很多人理解 Transformer 是"注意力的应用"。但真正的洞见是**系统设计**：

```
自注意力 + 多头 + 前向网络 + 位置编码 + 层标准化 + 残差连接
```

每一个组件都解决一个特定的问题：
- 自注意力：建立远程依赖
- 多头：学习多种语义关系
- 前向网络：增加非线性表达力
- 位置编码：保持位置信息（transformer 本身没有位置知识）
- 层标准化：训练稳定性
- 残差：梯度流动

移除任何一个，性能都会下降。这不是"所有组件都要"，而是"这个特定的组合最优"。

这种"最小必要集合"的设计美学，来自 Vaswani 的 USC 背景（理论 NLP）和 Google 的工程经验的完美结合。

---

## 关键决策与思想转折

### 决策1：公开发表 vs 保密竞争

2017 年，Google 可以选择把 Transformer 作为内部技术，给 Google 搜索、Gmail 等产品带来优势。

但他们选择了完全公开——论文发表在 arxiv，代码开源（稍后的 TensorFlow 实现）。

**Vaswani 为什么同意这个决策？**

从采访来看，他相信：
1. **知识应该流动**：隐藏一个架构不会让竞争对手找不到类似的思想
2. **标准化的力量**：如果所有人都用 Transformer，那么 Google 做任何基于 Transformer 的创新都会更快
3. **长期竞争力**：Google 的竞争力不在"有一个秘密算法"，而在"能最好地利用这个算法"

这个决策形塑了整个 AI 行业——没有 Transformer 的开源，就不会有 BERT、GPT、Claude 这样的繁荣生态。

### 决策2：离开 Adept，而不是坚持

大多数创业者的故事是"坚持你的愿景"。Vaswani 的故事是"承认你的愿景有问题，重新开始"。

在 Adept 做了 9 个月后，他意识到：
- AI agent 的时机还没到（LLM 能力不足）
- 商业模式还不清楚（企业如何付费）
- 技术难度被大大低估了

**普通 founder 的反应**：坚持 + 筹更多钱 + 改产品定位（但不改本质）

**Vaswani 的反应**：我们输了，重新开始。

这个勇气来自什么？可能来自：
1. **自信于自己的能力**：他知道无论怎样都能再融资、再创业
2. **长期视角**：他关心的不是"Adept 成不成功"，而是"我能否做成一个真正改变产业的东西"
3. **对市场时机的敏感度**：他知道 2022 年做 agent 的时机不对，2024-2025 年才是

### 决策3：Essential AI 的投资者选择

很多创业公司会说"我想保持独立"，然后拒绝战略投资者（Google 入股）。

Vaswani 的反应完全相反：**邀请所有利益相关方进来**。

为什么？因为他认识到：
- **硬件公司需要他成功**（他用他们的芯片）
- **云公司需要他成功**（他会在他们的云上运行）
- **Google 需要他成功**（他原来是 Google 的人）

与其与这些力量对抗，不如让他们都成为利益相关方。

这是一种**对称信息的博弈论思维**——所有人都知道彼此想要什么，所以反而比较容易合作。

---

## Essential AI 的产品方向

不同于 Adept 的"通用 agent"，Essential AI 的方向是：

**企业 AI 系统 = 特定知识 + 一般推理能力的组合**

想象一个保险公司，他们有：
- 1000+ 页的保单规则
- 10 年的理赔历史
- 特定的审批流程

Essential AI 的目标是：构建一个 AI 系统，能够：
1. 学习公司的特定知识（保单规则、历史案例）
2. 在新的理赔申请上应用这个知识
3. 自动审批 80%+ 的低风险案件

### 技术路线

Essential AI 最近（2025年12月）发布了 **Rnj-1**，一个 8B 参数的开源模型，专门为代码和 STEM 任务优化。

这个模型的有趣之处是：
- **开源但精英化**：虽然开源，但设计目标是"特定领域的最优"，而不是"通用的中等"
- **小而精**：8B 参数可以在消费级 GPU 上运行，但性能相当于大参数模型的 coding 能力
- **验证"小模型 + 特定知识"的路线**：这正是 Essential AI 对企业 AI 的理解

---

## 思想特征与反共识洞见

### 核心论点：架构即哲学

Vaswani 反复强调的一个观点：**好的架构不仅是高效的，更重要的是"优美的"**。

Transformer 之所以能统治整个 AI 行业，不只是因为性能，而是因为它的**设计简洁性**。

这反映了一个更深的信念：**复杂问题的最优解往往是最简洁的**。

### 第二个洞见：失败即信息

Adept 的"失败"（9 个月后团队离开）看起来像一个坏故事。但对 Vaswani 来说，它是：
- 市场时机的反馈
- 技术难度的验证
- 团队适配性的测试

正是这个"失败"，让 Essential AI 的 Series A 融资时，所有人都相信他已经学到了教训。

### 第三个洞见：论文的诅咒

被问过很多次："你怎么看 Transformer 改变了世界？"

Vaswani 的回答很有趣："我更关心现在我能做什么，而不是过去我做了什么。论文改变了世界，但那是 2017 年。现在是 2026 年。"

这反映了一个高级的思维方式：**不被自己的成就困住**。

---

## 数字快照与时间线

| 指标 | 数据 |
|------|------|
| Transformer 论文引用数 | 173,000+ |
| 论文发表年份 | 2017 年 6 月 |
| 共同作者数 | 8 人 |
| Adept AI 融资（Series A）| $65M |
| Adept 持续时间 | 9 个月 |
| Essential AI 种子融资 | $8.3M |
| Essential AI Series A | $56.5M（2023年12月） |
| Rnj-1 参数量 | 8B（开源） |
| 2024 C&C Prize | 与其他 Transformer 作者共获 |

---

## 相关产品与论文

- **[[Attention Is All You Need]]** — 2017 年 NeurIPS，173,000+ 引用
- **[[Transformer Architecture]]** — 现代 NLP 的基础
- **[[Rnj-1]]** — Essential AI 的开源 8B 代码模型（2025年12月）
- **[[BERT]]** — 基于 Transformer 的双向编码
- **[[GPT 系列]]** — 基于 Transformer 的单向生成
- **[[01-产品库/Claude|Claude]]** — 基于 Transformer 的 Constitutional AI

## 相关人物

- [[03-人物库/Noam Shazeer|Noam Shazeer]] — Transformer 共同作者，Google DeepMind Gemini Co-Lead
- [[Illia Polosukhin]] — Transformer 共同作者和核心实现者
- [[Niki Parmar]] — Essential AI CTO，Adept AI 共同创始人
- [[03-人物库/Jeff Dean|Jeff Dean]] — Google Brain 创始人，见证者
- [[David Chiang]] — USC PhD 导师，理论 NLP 根源
- [[Ilya Sutskever]] — seq2seq 发明者，OpenAI Chief Scientist

---

## 来源与参考

1. [Ashish Vaswani - Wikipedia](https://en.wikipedia.org/wiki/Ashish_Vaswani) — 生平和学术历程
2. [The AI Pioneer Trying to Save Artificial Intelligence From Big Tech - Bloomberg](https://www.bloomberg.com/news/features/2025-09-03/the-ai-pioneer-trying-to-save-artificial-intelligence-from-big-tech) — 对 Essential AI 和行业思考的深度报道
3. [Attention Is All You Need - arxiv:1706.03762](https://arxiv.org/abs/1706.03762) — 原始论文
4. [Transformer Co-Creator Launches Rnj-1: Essential AI's First Open Model](https://www.aibusinessreview.org/2025/12/13/open-weight-coding-ai-model/) — Essential AI 最新产品方向
5. [Essential AI reveals funding, development of full-stack AI automation tools](https://www.computerworld.com/article/1611301/essential-ai-reveals-funding-development-of-full-stack-ai-automation-tools.html) — Series A 融资和战略
6. [Ashish Vaswani - The mind behind the transformer that powers GenAI](https://www.communicationstoday.co.in/ashish-vaswani-the-mind-behind-the-transformer-that-powers-genai/) — 对其思想和贡献的综述
