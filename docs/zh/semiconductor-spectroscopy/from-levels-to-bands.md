# 从能级到能带：带隙

*本页介绍原子能级如何在晶体中形成能带，以及带隙如何决定半导体的光吸收。*

## 1. 能级展宽成能带

一个氢原子有阶梯 \(E_n = -13.6/n^2\ \mathrm{eV}\)。两个氢原子靠拢时会杂化：每个阶梯劈成两条。把 \(N \sim 10^{23}\) 个原子聚成晶体，每个原子阶梯就展宽成一条含 \(N\) 个能级的**能带**。能带的宽度不由原子阶梯本身决定，而由相邻原子轨道重叠的强弱决定——几个电子伏——而它容纳的能级数是 \(N\)。带内相邻能级的间距因此是

\[
\Delta E_{\text{间距}} \sim \frac{\text{能带宽度}}{N}
\sim \frac{1\ \mathrm{eV}}{10^{23}}
\approx 10^{-23}\ \mathrm{eV} \approx 0,
\tag{1}
\]

密到带内实际上连续。

原子的能级具有单一确定的能量；能带则覆盖一整段能量，晶体中的电子可以取带内实际上连续的能量——有限晶体仍有离散状态，但其间距远小于任何测量可以分辨的程度——而*带与带之间*一个都不能取。最高的满带（**价带**）与下一条空带（**导带**）之间，横着**带隙** \(E_g\)——固体最重要的一个数：

\[
E_g = E_{\text{导带底}} - E_{\text{价带顶}}.
\tag{2}
\]

泡利原理给电子排队：每个能级容纳两个（自旋上、下），所以含 \(N\) 级的能带自底向上填充。填成什么样，决定一切：半满的带导电（金属）；满价带与空导带之间隔着一个带隙，则给出绝缘体或半导体——二者的区别只在 \(E_g\) 的大小。

## 2. 三类固体

金属导电，要么因为最上面的能带只被部分填充，要么因为两条能带重叠，费米能级处开不出带隙——两种情形下 \(E_g = 0\)。绝缘体与半导体结构相同——满价带、空导带，两者之间隔着一个带隙：

\[
\text{金属：} E_g = 0,
\qquad
\text{半导体或绝缘体：} E_g > 0.
\tag{3}
\]

后两者的分界是行为问题，而不是一个锐利的数字。半导体是这样一类有带隙的材料：其导电可以*被有意实现*——通过热、光或掺杂；绝缘体则是带隙大到实际无法如此控制的材料。不存在普适的分界线：宽带隙半导体轻松超过旧教科书曾用作边界的 \(3\ \mathrm{eV}\)——GaN 约 \(3.4\ \mathrm{eV}\)，SiC 视晶型约 \(2.4\)–\(3.3\ \mathrm{eV}\)，BiOCl（3.2 页）约 \(3.2\)–\(3.5\ \mathrm{eV}\)。分类依据的是材料的行为，而不是某个单一阈值。

室温下的半导体里，房间的热量偶尔把电子抬过带隙，在价带留下一个**空穴**——缺失的电子表现得像正电荷。（类比是拥挤大厅里的一个空座：座位本身不动，但随着人们挪动，空缺在传递。）导电正是这两个伙伴的运动，且对带隙极其敏感：这正是硅（\(1.1\ \mathrm{eV}\)）与金刚石（\(5.5\ \mathrm{eV}\)）——同为金刚石立方结构、带隙却相差很大的晶体——导电行为截然不同的原因。

## 3. 晶体中的电子：又是波

晶体中的电子仍是[基础篇](../foundations/wave-functions-and-quantum-states.md)里那个波电子——只是"盒子"换成了周期性的离子晶格。在这个周期晶格中求解波动方程，每个态的能量取决于它的类动量标签 \(k\)：这就是能带结构，画在下方。（详细数学属于大学固体物理；这里使用它的图像，而不是它的公式。）关于这幅图的坐标轴，说两句话。纵轴照例是能量。横轴是 \(k\)，电子波的波矢——一个动量类的量，即**晶体动量**，度量波型在晶格中振荡得快慢。曲线上每个点是一个允许的态：它的高度是该态的能量，水平位置是它的波矢。光子要把电子从价带抬到导带，必须*同时*守恒能量与动量。对**直接**跃迁（两个能带中相同的 \(k\)）：

\[
h\nu = E_c(k) - E_v(k),
\qquad
\Delta k \approx 0.
\tag{4}
\]

**基本带隙**比方程 (4) 更一般：它是把电子从价带*任何位置*搬到导带*任何位置*所需的最小能量，

\[
E_g = \min_k E_c(k) - \max_k E_v(k),
\tag{5}
\]

也就是方程 (2) 已经用过的定义。当导带底与价带顶位于*同一个* \(k\)，带隙是**直接**的，\(E_g\) 等于该点处的同 \(k\) 差 \(E_c(k) - E_v(k)\)——光子一人完成全部工作。当它们位于*不同的* \(k\)，带隙是**间接**的：最小的同 \(k\) 差 \(\min_k[E_c(k) - E_v(k)]\) 比 \(E_g\) *更大*，跃迁需要声子携带缺失的动量与一份小能量：

\[
h\nu = E_g \pm \hbar\Omega,
\tag{6}
\]

其中 \(\hbar\Omega\) 是声子能量。由此分两种情形：

- **直接带隙**——价带顶与导带底在同一个 \(k\)：无需声子辅助。
- **间接带隙**——导带底位于不同的 \(k\)：跃迁需要声子帮忙，概率低得多。

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="直接带隙与间接带隙的 E 对 k 能带图"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.ax { stroke: currentColor; stroke-width: 1.4; }.vb { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.cb { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.arrow { stroke: currentColor; stroke-width: 1.6; }.phon { stroke: currentColor; stroke-width: 1.3; stroke-dasharray: 3 3; opacity: .7; }</style><text x="70" y="22" font-weight="bold">直接带隙</text><line class="ax" x1="40" y1="250" x2="290" y2="250"/><line class="ax" x1="40" y1="250" x2="40" y2="30"/><text x="286" y="268" text-anchor="end" class="dim">k</text><text x="28" y="34" text-anchor="end" class="dim">E</text><path class="vb" d="M40,220 C100,170 130,122 165,120 C200,122 230,170 290,220"/><path class="cb" d="M40,27 C100,45 130,72 165,75 C200,72 230,45 290,27"/><text x="50" y="66" text-anchor="start" class="dim">导带（&#8746;）</text><text x="46" y="238" text-anchor="start" class="dim">价带（&#8745;）</text><line class="arrow" x1="165" y1="120" x2="165" y2="81"/><polygon points="165,73 161,85 169,85" fill="currentColor"/><text x="176" y="100" text-anchor="start" class="dim">h&#957; = E_g</text><line x1="165" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><line x1="165" y1="75" x2="200" y2="75" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><text x="158" y="96" text-anchor="end" class="dim">E_g</text><text x="390" y="22" font-weight="bold">间接带隙</text><line class="ax" x1="360" y1="250" x2="610" y2="250"/><line class="ax" x1="360" y1="250" x2="360" y2="30"/><text x="606" y="268" text-anchor="end" class="dim">k</text><text x="348" y="34" text-anchor="end" class="dim">E</text><path class="vb" d="M360,156 C400,135 430,122 460,120 C490,124 540,160 610,201"/><path class="cb" d="M360,11 C420,35 490,62 545,70 C580,68 600,65 610,63"/><text x="498" y="34" text-anchor="start" class="dim">导带</text><text x="375" y="178" text-anchor="start" class="dim">价带</text><line class="arrow" x1="460" y1="120" x2="460" y2="50"/><polygon points="460,44 456,56 464,56" fill="currentColor"/><text x="430" y="107" text-anchor="end" class="dim">h&#957; &gt; E_g</text><line class="phon" x1="460" y1="48" x2="545" y2="70"/><text x="545" y="110" text-anchor="start" class="dim">光子 + 声子</text><line x1="460" y1="120" x2="585" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><line x1="545" y1="70" x2="585" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><text x="590" y="98" text-anchor="start" class="dim">E_g</text><text x="320" y="292" text-anchor="middle" class="dim" opacity=".55">简化模型，非按比例。</text></svg>
</div>

*直接带隙：光子单独提供能量。间接带隙：跃迁还需要声子携带动量差。*

这个区分在实际中很重要：它显著影响电子与空穴辐射复合的效率，进而影响半导体作为激光增益介质的适合程度。它也会在吸收光谱里留下指纹，下一页的主题。

## 4. 吸收：光看到了什么

在简化模型中——它忽略了激子及其他额外吸收通道——带隙以下的光找不到能量足够的带间跃迁，晶体不通过该通道吸收：

\[
h\nu < E_g:
\qquad
\alpha(\nu) \approx 0.
\tag{7}
\]

真实晶体会偏离这个理想：恰在带隙之下的束缚激子、带隙内的缺陷态以及无序都会打开微弱的亚带隙吸收通道——3.3 页的主题。

**激子**值得自己的图画，因为它即使出现在完美无瑕的晶体里。光子把电子抬过带隙时，电子与它留下的空穴互相吸引——异号电荷——可以束缚成一对，被束缚在共同中心附近，像晶体里一个微缩而短命的"氢原子"：

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" style="width:100%;max-width:560px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="激子：电子与空穴的束缚对"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.hole { fill: var(--md-accent-fg-color); }.el { fill: currentColor; }.ring { fill: none; stroke: currentColor; stroke-width: 1.4; stroke-dasharray: 5 4; opacity: .7; }</style><circle class="hole" cx="260" cy="100" r="16"/><text x="260" y="105" text-anchor="middle" font-weight="bold" fill="var(--md-accent-fg-color)">+</text><circle class="ring" cx="260" cy="100" r="62"/><circle class="el" cx="322" cy="100" r="7"/><text x="322" y="122" text-anchor="middle" class="dim">&#8722;</text><text x="260" y="62" text-anchor="middle" class="dim">空穴（+）</text><text x="322" y="84" text-anchor="middle" class="dim">电子（&#8722;）</text><text x="260" y="204" text-anchor="middle" class="dim" opacity=".55">简化示意，非按比例。</text></svg>

*电子被库仑吸引束缚在空穴旁——激子。虚线环只是两者束缚在一起的示意，不是经典轨道。束缚对比完全自由的电子和空穴少花一点能量，所以激子吸收在带隙下方一点就打开，即使在完美晶体中也存在。（简化示意，非按比例；这里不需要束缚能理论。）*

因为束缚对所需的能量略少于自由的电子与空穴，比 \(E_g\) 略*低*的光子也能被吸收——真实吸收边永远不会完美尖锐，这是原因之一。激子不是缺陷；它是最干净晶体里也存在的现象。

带隙以上，每个能量匹配的光子都能抬起一个电子。吸收系数——单位长度上强度损失的份额，

\[
I(x) = I_0\, e^{-\alpha x},
\tag{8}
\]

——在 \(h\nu = E_g\) 处陡峭开启。它在带边之上*如何*上升携带了信息，[下一页](measuring-a-bandgap-with-light.md)把这种上升变成一次测量：Tauc 分析——一个条件陈述清楚的标准模型——把数据画成图，让带隙以一条直线的截距出现。
