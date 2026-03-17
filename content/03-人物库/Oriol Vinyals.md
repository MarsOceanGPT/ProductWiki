---
type: person
name: Oriol Vinyals
role: 'VP at Google DeepMind, Gemini Co-Lead'
company: '[[Google DeepMind]]'
nationality: Spanish
age: '40'
background: >-
  UC San Diego MS → UC Berkeley PhD (Nelson Morgan, 2013) → Google Brain
  (2014-2020) → DeepMind (2020-现在) → Gemini Co-Lead (2023-现在)
notable_for: >-
  seq2seq 架构发明者，多模态 AI 的先驱。用强化学习在星际争霸达到 Grandmaster，证明了复杂决策问题的可解决性。Gemini
  三大领导人之一，多模态能力体现者
key_quote: 所有问题都可以重新表述为序列问题。这是我 15 年的研究信念，现在被 Transformer 和 LLM 彻底验证了。
updated: '2026-03-14'
title: Oriol Vinyals
---
# Oriol Vinyals

> 这个人最值得记住的是：他把『序列』这个抽象变成了解决所有问题的工具。从翻译到图像标注到游戏 AI，用同一个架构击穿了多个领域。

## 身份与背景

西班牙人，UC Berkeley 博士（师从 Nelson Morgan），正值深度学习第二波浪潮（2011-2013）。这个时间点很关键——CNN 和 RNN 还在竞争主导权，没人知道谁会赢。

Vinyals 的选择是：不选 CNN 也不选 RNN，而是选 **seq2seq**。

### 阶段一：seq2seq 的发明者（2014-2015）

Vinyals 加入 Google Brain 后，与 Ilya Sutskever 和 Quoc Viet Le 合作，设计了 **seq2seq 架构**（2014）。

为什么这个架构重要？

**问题**：翻译任务中，输入句子和输出句子长度不同。怎样用神经网络处理？

**之前的方法**：针对翻译任务特别优化

**seq2seq 的方案**：用编码器-解码器结构，通过"注意力"连接两端

关键创新：**不同长度的问题可以用统一的架构解决**。

这听起来简单，但它打开了一扇门——如果翻译能用 seq2seq，那语音识别呢？文本摘要呢？

### 阶段二：多模态的先驱（2015-2019）

Vinyals 扩展了 seq2seq 的应用：

- **图像到文本**：用 seq2seq 做图像描述
- **多模态理解**：把各种模态都转成序列

此时别人还在想"深度学习是不是只能做图像"，他已经在构建"一个架构统一所有问题"的愿景。

### 阶段三：AlphaStar 的设计者（2016-2019）

2016 年，Vinyals 领导了一个大胆项目：能否让 AI 在星际争霸达到 Grandmaster 级别？

为什么这个任务如此硬核？

星际争霸需要：
- **部分可观察性** — 不像棋类，看不到对手的完整信息
- **实时决策** — 每秒数百个决策，没有时间思考
- **极高维度的动作空间** — 数千种可能的动作
- **长期规划** — 提前 10 分钟为之后的战斗做准备

**AlphaStar 的成功（2019 达到 Grandmaster）** 证明了：**深度强化学习 + 注意力机制 + 自我对战能在人类认为"需要创意"的领域超越人类**。

对 AI 产品的意义：如果 AI 能玩星际争霸，它几乎能做任何需要"快速决策"的工作。

### 阶段四：Gemini 的领导者（2020-现在）

2020 年 DeepMind 和 Google Brain 合并，Vinyals 升任 VP。现在与 Jeff Dean 和 Noam Shazeer 共同领导 Gemini。

这个职位的含义：Gemini 需要 seq2seq 的基因（序列理解）、多模态的基因（理解图像、文本、音频）、强化学习的基因（复杂决策）。

Vinyals 就是把自己 15 年的研究直接装到 Gemini 里。

---

## 关键决策

### 决策1：坚持『序列』这个抽象

当 CNN 和 RNN 还在竞争时，他认识到"所有问题都可以重新表述为序列问题"。

这个直觉后来被 Transformer 彻底验证。

### 决策2：AlphaStar 的强化学习方向

不是用模仿学习（学人类回放），而是用自我对战的强化学习。这预示了后来 AlphaGo Zero 和自我改进系统的方向。

### 决策3：加入 Gemini 领导团队

对一个独立研究员来说，这可能意味着研究自由度的下降，但他选择了影响力。

---

## 产品 DNA

Vinyals 的思维方式对 Google DeepMind 的产品有深刻影响：

- **通用性优于专一性** — seq2seq 的核心创新就是"一个架构解决多个问题"
- **把复杂问题抽象为简单问题** — AlphaStar 看似很复杂，但本质上是强化学习 + 注意力
- **多模态作为标配** — 不是"图像模型"或"文本模型"，而是"能同时处理多种模态的模型"

这直接影响了 Gemini 支持图像、音频、视频、文本的多模态设计。

---

## 思想特征

### 核心洞见1：『序列』是通用的抽象

不仅是 NLP，任何问题都可以抽象为"输入序列 → 输出序列"。

### 核心洞见2：复杂问题可以通过『自我对战』的强化学习解决

从 AlphaStar 到后来的各种 AI 系统，自我改进的范式被广泛应用。

---

## 数字快照

| 指标 | 数据 |
|------|------|
| seq2seq 发表 | 2014 年 |
| AlphaStar Grandmaster | 2019 年 |
| DeepMind VP 任期 | 2020-现在 |
| Gemini Co-Lead | 2023-现在 |

---

## 相关产品

- **[[seq2seq]]** — 序列到序列的架构
- **[[AlphaStar]]** — 星际争霸 II AI
- **[[01-产品库/Gemini|Gemini]]** — Google 旗舰多模态模型

## 相关人物

- [[03-人物库/Jeff Dean|Jeff Dean]] — Gemini 共同领导者
- [[03-人物库/Noam Shazeer|Noam Shazeer]] — Gemini 共同领导者
- [[Ilya Sutskever]] — seq2seq 共同设计者

---

## 来源与参考

1. UC Berkeley PhD 论文
2. seq2seq 论文（2014）
3. AlphaStar 论文和 DeepMind 博客
