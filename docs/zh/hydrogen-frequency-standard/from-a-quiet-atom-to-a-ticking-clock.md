# 氢原子激射器如何工作

*本文介绍氢原子激射器的工作原理：受激辐射与粒子数反转、磁铁态选择、储存泡与微波谐振腔。*

## 1. 问题

时钟需要一个振荡器——一个重复动作的东西——21 厘米跃迁是绝佳之选：它的频率由自然固定为 \(1.42\ \mathrm{GHz}\)。障碍是这条跃迁缓慢的自发辐射：放任不管，单个激发态氢原子平均要一千一百万年才自发地放出它的光子。一个一千一百万年才交付一个光子的振荡器，单靠自己毫无用处。

宏观信号需要大量原子*同相*发光。两个要素使之成为可能：让高能态的原子多于低能态（**粒子数反转**），并让它们的辐射*受激*——被一个已经存在的微波场驱动，每个原子都把能量按场的节拍释放进去。

## 2. 受激辐射

高能态原子泡在跃迁频率的场里，会受激发光：放出的光子以相同的相位和方向加入场中。速率正比于场强和高能态原子数：

\[
R \propto \rho(\nu)\, n_{\text{高}},
\tag{1}
\]

而竞争过程——低能态原子的吸收——以正比于 \(n_{\text{低}}\) 的速率夺走光子。只有当高能态原子多于低能态时，场才会*增长*：

\[
\boxed{n_{\text{高}} > n_{\text{低}}}
\tag{2}
\]

——粒子数反转条件。没有它就没有净增益，不过持续振荡还要求增益克服全部损耗（第 3 节末尾会解释）。热平衡下这个条件永远不满足（低能级总是占据更多），所以氢钟必须收割高能态的原子，丢弃其余的。

## 3. 氢钟，逐件拆解

这台装置分四个阶段，各司其职。

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 325" style="width:100%;max-width:750px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="氢原子激射器简化工作流程"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.box { fill: none; stroke: currentColor; stroke-width: 1.6; }.hl { fill: var(--md-accent-fg-color); opacity: .12; }.arr { fill: none; stroke: currentColor; stroke-width: 1.6; marker-end: url(#mwzh2); }.good { stroke: var(--md-accent-fg-color); stroke-width: 2; }.bad { stroke: currentColor; stroke-width: 1.3; opacity: .55; stroke-dasharray: 5 3; }</style><defs><marker id="mwzh2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs><rect class="box" x="10" y="120" width="80" height="44"/><text x="50" y="139" text-anchor="middle">H&#8322; 气体</text><text x="50" y="154" text-anchor="middle" class="dim">（分子）</text><path class="arr" d="M90,142 L130,142"/><rect class="box" x="130" y="110" width="90" height="64"/><text x="175" y="133" text-anchor="middle">射频放电</text><text x="175" y="148" text-anchor="middle">把 H&#8322; 劈成</text><text x="175" y="163" text-anchor="middle" class="dim">H 原子</text><path class="arr" d="M220,142 L260,142"/><rect class="box" x="260" y="105" width="100" height="74"/><text x="310" y="126" text-anchor="middle">态选择磁铁</text><path class="good" d="M360,125 C420,125 440,148 498,148"/><path class="bad" d="M360,142 C410,142 425,175 445,198"/><path class="bad" d="M360,162 C410,162 425,220 445,248"/><text x="500" y="116" text-anchor="middle" class="dim">F = 1, m_F = +1 与 0 &#8594; 被聚焦</text><text x="450" y="200" text-anchor="start" class="dim">F = 0 &#8594; 被丢弃</text><text x="450" y="250" text-anchor="start" class="dim">F = 1, m_F = &#8722;1 &#8594; 被丢弃</text><rect class="hl" x="498" y="120" width="120" height="56" rx="28"/><rect class="box" x="498" y="120" width="120" height="56" rx="28"/><text x="558" y="143" text-anchor="middle">储存泡</text><text x="558" y="158" text-anchor="middle" class="dim">（位于腔内）</text><path class="arr" d="M618,148 L662,148"/><text x="666" y="142" text-anchor="start" font-weight="bold">1.42 GHz</text><text x="666" y="157" text-anchor="start" class="dim">振荡</text><text x="375" y="308" text-anchor="middle" class="dim">被弱场吸引的态被聚焦；被强场吸引的态被丢弃</text></svg>
</div>

*整台机器浓缩在一张图里：劈开、分拣、储存、谐振。原子束是连续的，高能态原子不断抵达——反转由分拣维持，腔的反馈把它们的同相发射变成持续振荡。*

**1. 造原子——离解器。** 射频放电把氢分子 \(\mathrm{H_2}\) 劈成单个原子，从喷嘴射出一束原子流。

**2. 选高能态——磁铁。** 四个超精细态对磁场梯度的响应不同（见流程图）：两个态漂向*弱*场，两个漂向*强*场。六极磁铁的形状使它的场在轴线上最弱、向外增强：第一种原子被收拢在轴线上、送进储存泡，第二种原子偏离轴线、就此丢失。抵达储存泡的是一束几乎全在 \(F = 1\) 的原子——包括钟跃迁的高能态 \(F = 1, m_F = 0\)——而 \(F = 0\) 的原子几乎完全缺席（哪个态去哪里的细节来自 [2.2 页](spins-in-a-magnetic-field.md)的塞曼劈裂）。一句诚实的话：磁铁并不只筛选一个量子态。它聚焦同一家族的两个态，\(F = 1, m_F = +1\) 与 \(F = 1, m_F = 0\)，丢弃另外两个；钟跃迁只用到幸存者中的一个。粒子数反转由分拣达成，而非泵浦。

**3. 留住原子——储存泡。** 石英泡内壁涂 Teflon，置于腔内。原子弹跳数千次而不丢失状态——泡壁碰撞对超精细态的扰动极弱——在这类仪器中，每个原子通常逗留约一秒才漂走：

\[
\tau_{\text{储存}} \approx 1\ \mathrm{s}.
\tag{3}
\]

一秒的过境时间仍远不足以自发辐射，这里没有任何东西改变原子一千一百万年自然寿命的事实。储存泡提供的是*在腔场中的时间*：原子漂过期间，微波场可以**受激**它的跃迁——这个过程的速率由场强决定，而不是由原子的自然寿命决定。途经的原子中有一部分受激、按场的节拍释放光子，而磁铁不断送来新鲜的高能态原子，保证供应不断。

泡壁值得仔细看一看，因为它是这台时钟的重要缺陷来源之一。擦过壁面的原子不会像小小的台球那样弹开——在整个靠近过程中，它的电子云被壁面电场所拉扯与扭曲，超精细能级随之微微移动。于是成千上万次弹跳中的每一次，都给原子的相位一个极微小的推动，累积起来就是**壁移**：对时钟频率一个微小而系统的拖拽。这正是泡壁涂层重要的原因——选择 Teflon，是因为它与原子的相互作用格外轻柔，把每次弹跳的推动压到最小——也正是壁移尽管微小、却必须在真实标准中被测量和扣除的原因。频率标准必须把这些看似可以忽略的细节计算在内。

**4. 谐振——谐振腔。** 储存泡位于一个设计为在原子跃迁频率（约 \(1.420\ \mathrm{GHz}\)）处谐振的微波腔内——实际中腔与原子略有失谐，这个偏移会被测量并修正。腔是一根三维吉他弦（[1.2 页](../foundations/interference-standing-waves-and-quantization.md)）：它只支持装得下腔壁的驻波图案，每种图案有自己的频率，而腔被加工得恰好有一个图案落在原子跃迁频率上。把腔想象成一个频率滤波器——就像 [1.1 页](../foundations/oscillations-waves-and-resonance.md)的共振，金属版：它在一个尖锐确定的频率（原子的音符）处响应强烈，别处几乎不响应。腔在跃迁频率处储存能量并反馈给原子；它的精确谐振频率是腔体设计的事，而它携带的想法正是 1.2 页的——只有装得下的图案才能存活。

第一批原子发光后，腔场受激更多路过的原子——同相发射、放大、维持。连续的原子束不断把高能态原子送进储存泡，在原子漂走的同时维持粒子数反转；腔不断回收场。超过振荡阈值（受激辐射与全部损耗平衡）后，装置无限期运转：一个以原子自身频率自持的振荡。

## 4. 输出：频率标准

氢钟的微波输出是一个纯净、连续的信号，频率钉在超精细跃迁上。它的标志性优点是短期稳定度：在秒到小时尺度上，频率起伏在 \(10^{-13}\)–\(10^{-15}\) 量级（典型值，取决于仪器与平均时间）——因为振荡锚定的是量子跃迁，而不是人造的弹簧。长期准确度则受残余扰动的缓慢侵蚀——储存涂层的壁移，以及推动跃迁频率的杂散磁场（[2.2 页](spins-in-a-magnetic-field.md)），靠多层磁屏蔽压住。

因此氢钟不是手表：它是频率标准——驯服石英晶振的振荡器，驾驭各地时间尺度，也让跨大陆的射电望远镜阵列保持相位同步。

## 来源

- H. M. Goldenberg, D. Kleppner, N. F. Ramsey, *Atomic Hydrogen Maser*, Phys. Rev. Lett. **5**, 361–362 (1960)——第一台氢钟，上文态选择方案的出处。[https://doi.org/10.1103/PhysRevLett.5.361](https://doi.org/10.1103/PhysRevLett.5.361)
- D. Kleppner, H. M. Goldenberg, N. F. Ramsey, *Theory of the Hydrogen Maser*, Phys. Rev. **126**, 603–615 (1962)。
