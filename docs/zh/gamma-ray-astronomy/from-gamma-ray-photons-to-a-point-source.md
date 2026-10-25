# 从伽马光子到点源

*本页介绍如何用探测事件列表（event list）探测点源：有效面积、点扩散函数、通量灵敏度与模型比较。*

## 1. 什么是一个事例

一个光子变成一个**事例**：重建出的到达方向与能量，记录在某个时刻（[4.2 页](how-fermi-lat-catches-them.md)）。多年积累的目录包含数十亿个这样的事例。但事例清单还不是天文学——"源"是关于天空的陈述，从前者走到后者，意味着把源的光子与其余一切的光子区分开。

## 2. 描述仪器的三个数字

在宣称一个源之前，必须先理解仪器本身。三个数字至关重要，且刻意彼此区分（[4.2 页](how-fermi-lat-catches-them.md)）：

- **有效面积** \(A_{\mathrm{eff}}(E, \theta)\)。一个能接住与真实望远镜同样多光子的理想探测器的尺寸。它不是单一数字：它取决于光子能量与到达角度，因为转化、径迹重建与簇射包含都随二者变化。
- **角分辨率 / 点扩散函数（PSF）。** 观测一个真实点源时，重建方向不会全部落在源上——它们围着源散开。**PSF** 是这种散开的形状，其宽度用包含 \(68\%\) 事例的角度 \(\theta_{68}\) 表示——这是一个统计性质；示意图只能提示比例，无法精确计数。LAT 在 \(1\ \mathrm{GeV}\) 处 \(\theta_{68} \approx 0.8^\circ\)，能量降低时因电子-正电子对张开而变差。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="透过点扩散函数看到的点源与背景光子"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.ev { fill: var(--md-accent-fg-color); }.bg { fill: none; stroke: currentColor; stroke-width: 1.6; }.psf { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.6; stroke-dasharray: 6 4; }.src { fill: var(--md-accent-fg-color); }</style><path class="src" d="M280,130 l6,18 -20,-14 h28 l-20,14 Z"/><text x="280" y="104" text-anchor="middle" font-weight="bold">点源</text><circle class="psf" cx="280" cy="150" r="60"/><text x="280" y="232" text-anchor="middle" class="dim">&#952;&#8326;&#8328;：约 68% 的源事例落在圈内（示意比例）</text><circle class="ev" cx="280" cy="150" r="3"/><circle class="ev" cx="296" cy="138" r="3"/><circle class="ev" cx="265" cy="163" r="3"/><circle class="ev" cx="300" cy="166" r="3"/><circle class="ev" cx="256" cy="140" r="3"/><circle class="ev" cx="288" cy="176" r="3"/><circle class="ev" cx="322" cy="156" r="3"/><circle class="ev" cx="228" cy="112" r="3"/><circle class="ev" cx="345" cy="170" r="3"/><circle class="ev" cx="240" cy="205" r="3"/><circle class="bg" cx="140" cy="90" r="3.5"/><circle class="bg" cx="420" cy="80" r="3.5"/><circle class="bg" cx="480" cy="180" r="3.5"/><circle class="bg" cx="120" cy="220" r="3.5"/><circle class="bg" cx="400" cy="250" r="3.5"/><circle class="bg" cx="180" cy="40" r="3.5"/><text x="140" y="80" text-anchor="start" class="dim">背景光子</text><text x="420" y="70" text-anchor="start" class="dim">背景光子</text><text x="280" y="275" text-anchor="middle" class="dim">仪器把真实点源抹成一片散点——那片散点就是 PSF</text><text x="280" y="292" text-anchor="middle" class="dim">探测＝事例的聚集超过背景散点</text><text x="280" y="309" text-anchor="middle" class="dim" opacity=".55">示意图，非真实数据。</text></svg>

*一个“点”源在仪器眼里长什么样：它的光子落在大小等于 PSF 的一片散点里，背景光子则处处都是。声称一个源，就是说有一团事例的聚集从背景散点中凸显出来——下一节算术的直观内容。*
- **能量分辨率。** 量能器赋予能量的精度——LAT 约为 \(10\)–\(15\%\)。

这些描述的是*仪器*。它们尚未说出天空真正发出什么——这个区分是本页其余部分坚持的主线。

## 3. 通量与通量灵敏度

**通量**是源的属性。通量为 \(F\)（单位面积单位时间的光子数）的点源，经过有效面积 \(A_{\mathrm{eff}}\)、观测时间 \(t\) 的仪器，期望光子数为

\[
N_{\mathrm{src}} = F\, A_{\mathrm{eff}}\, t,
\tag{1}
\]

其中 \(A_{\mathrm{eff}}\) 是对相关能量范围与观测几何取的平均。

**通量灵敏度**是观测的属性。我们关心的光子与背景计数 \(B\) 混在一起——银河系与全天的弥漫伽马辉光，加上仪器泄漏。

在引入任何公式之前，先承认一个关于计数的事实：光子是随机到达的。把望远镜对准一个完全稳定的源，连测八个等长的时间窗，你不会得到相同的计数——数字会散开。在理想泊松模型里，一次测到 \(N\) 个光子的计数，逐次之间的涨落约为

\[
\text{典型涨落} \approx \sqrt{N},
\tag{2}
\]

下面的柱状图展示了平均每窗十个光子的源长什么样：

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 260" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="光子计数的泊松涨落"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.ax { stroke: currentColor; stroke-width: 1.4; }.bar { fill: var(--md-accent-fg-color); opacity: .55; }.mean { stroke: var(--md-accent-fg-color); stroke-width: 1.6; stroke-dasharray: 5 4; }</style><line class="ax" x1="60" y1="180" x2="560" y2="180"/><line class="ax" x1="60" y1="180" x2="60" y2="30"/><text x="310" y="214" text-anchor="middle">观测时间窗编号</text><text transform="rotate(-90)" x="-105" y="22" text-anchor="middle">光子计数</text><rect class="bar" x="80" y="72" width="34" height="108"/><rect class="bar" x="140" y="48" width="34" height="132"/><rect class="bar" x="200" y="84" width="34" height="96"/><rect class="bar" x="260" y="36" width="34" height="144"/><rect class="bar" x="320" y="60" width="34" height="120"/><rect class="bar" x="380" y="96" width="34" height="84"/><rect class="bar" x="440" y="24" width="34" height="156"/><rect class="bar" x="500" y="60" width="34" height="120"/><text x="97" y="196" text-anchor="middle" class="dim">1</text><text x="157" y="196" text-anchor="middle" class="dim">2</text><text x="217" y="196" text-anchor="middle" class="dim">3</text><text x="277" y="196" text-anchor="middle" class="dim">4</text><text x="337" y="196" text-anchor="middle" class="dim">5</text><text x="397" y="196" text-anchor="middle" class="dim">6</text><text x="457" y="196" text-anchor="middle" class="dim">7</text><text x="517" y="196" text-anchor="middle" class="dim">8</text><line class="mean" x1="60" y1="60" x2="560" y2="60"/><text x="310" y="232" text-anchor="middle" class="dim">虚线：平均 = 10 &#183; 典型涨落 &#8776; &#8730;10 &#8776; 3</text><text x="310" y="252" text-anchor="middle" class="dim" opacity=".6">完全稳定的源也会给出起伏的计数——示意，非真实数据</text></svg>

*对一个完全稳定的源做八次完全相同的观测——计数仍然不同，围绕平均值散开约 \(\sqrt{\bar{N}}\)。多探测到几个光子本身并不能证明有什么新东西在那里；那可能只是涨落。（示意，非真实数据。）*

所以，超出背景 \(B\) 的盈余 \(S\)，只有明显超过背景自身约 \(\sqrt{B}\) 的涨落时才可信。在**背景主导极限**下——暗弱源所处的、背景贡献绝大多数计数的情形——显著性近似为

\[
\sigma \approx \frac{S}{\sqrt{B}},
\tag{3}
\]

这是一个条件陈述清楚的近似，不是普适定律。要求以显著性 \(\sigma\) 探测，并结合方程 (1)，就得到一次观测能认证的最小可探测通量：

\[
\boxed{F_{\mathrm{min}} \propto \frac{\sqrt{B}}{A_{\mathrm{eff}}\, t}}
\tag{4}
\]

三个实际推论，各值得停顿：

- **时间帮两次忙。** \(B\) 也随 \(t\) 增长，所以 \(F_{\mathrm{min}} \propto \sqrt{t}/t = 1/\sqrt{t}\)：四倍的曝光认证暗一半的源。这正是 LAT 从不停止巡天的原因。
- **面积重要。** 背景不变时，更大的有效面积压低 \(F_{\mathrm{min}}\)。若背景计数也随面积增长，收益会变慢——下面的推导给出均匀背景下 \(F_{\mathrm{min}} \propto 1/\sqrt{A_{\mathrm{eff}}\,t}\)。
- **背景重要。** 在拥挤或弥漫很亮的区域（银道面），\(B\) 很大，\(F_{\mathrm{min}}\) 恶化；在天空黑暗的角落，同一台仪器能认证暗得多的源。

通量是源*是什么*；灵敏度是观测*能说什么*。一个零结果——没有探测到——是关于 \(F_{\mathrm{min}}\) 的陈述，而不是关于源不存在的陈述。

??? derivation "方程 (4) 的标度"

    由方程 (1)，期望源计数为 \(S = F A_{\mathrm{eff}} t\)。要求 \(S/\sqrt{B} = \sigma\)：

    \[
    \frac{F A_{\mathrm{eff}} t}{\sqrt{B}} = \sigma
    \quad\Longrightarrow\quad
    F_{\mathrm{min}} = \frac{\sigma\sqrt{B}}{A_{\mathrm{eff}} t},
    \]

    即方程 (4)，显著性 \(\sigma\) 收进比例系数。若背景率均匀，\(B = b\, A_{\mathrm{eff}}\, t\, \Omega\)（背景率 \(b\)，立体角 \(\Omega\)），则 \(F_{\mathrm{min}} = \sigma\sqrt{b\,\Omega/(A_{\mathrm{eff}} t)} \propto 1/\sqrt{t}\)——随时间平方根改进。

## 4. 把事例变成源

标准分析分四步，本节描述方法而非任何具体结果。

**1. 选定区域。** 围绕候选位置画一个感兴趣区（ROI）——来自星表、此前的线索或一个有针对性的问题。

**2. 建立天空模型。** 期望光子分布由各成分拼成：候选点源、**银河弥漫辐射**（宇宙线与星际气体和星光相互作用产生的伽马射线）、以及来自全天未分辨源的**各向同性弥漫**成分。每个成分都有参数——位置、通量、能谱形状。

**3. 比较模型。** 把问题具体化。两个模型描述同一片天空：

- **模型 A**：点源加背景。
- **模型 B**：只有背景。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="同一片天空的两种模型"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.bg { fill: none; stroke: currentColor; stroke-width: 1.4; }.cl { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.5; stroke-dasharray: 5 4; }.panel { fill: none; stroke: currentColor; stroke-width: 1; opacity: .35; }</style><rect class="panel" x="20" y="40" width="290" height="170"/><text x="165" y="30" text-anchor="middle" font-weight="bold">模型 A：点源 + 背景</text><circle class="bg" cx="120" cy="120" r="3"/><circle class="bg" cx="140" cy="95" r="3"/><circle class="bg" cx="160" cy="130" r="3"/><circle class="bg" cx="130" cy="105" r="3"/><circle class="bg" cx="150" cy="115" r="3"/><circle class="bg" cx="175" cy="100" r="3"/><circle class="bg" cx="60" cy="70" r="3"/><circle class="bg" cx="250" cy="60" r="3"/><circle class="bg" cx="270" cy="170" r="3"/><circle class="bg" cx="70" cy="180" r="3"/><circle class="bg" cx="200" cy="180" r="3"/><circle class="bg" cx="60" cy="120" r="3"/><circle class="cl" cx="145" cy="112" r="38"/><text x="220" y="114" text-anchor="start" class="dim">点源</text><rect class="panel" x="340" y="40" width="290" height="170"/><text x="485" y="30" text-anchor="middle" font-weight="bold">模型 B：只有背景</text><circle class="bg" cx="440" cy="120" r="3"/><circle class="bg" cx="460" cy="95" r="3"/><circle class="bg" cx="480" cy="130" r="3"/><circle class="bg" cx="450" cy="105" r="3"/><circle class="bg" cx="470" cy="115" r="3"/><circle class="bg" cx="495" cy="100" r="3"/><circle class="bg" cx="380" cy="70" r="3"/><circle class="bg" cx="570" cy="60" r="3"/><circle class="bg" cx="590" cy="170" r="3"/><circle class="bg" cx="390" cy="180" r="3"/><circle class="bg" cx="520" cy="180" r="3"/><circle class="bg" cx="380" cy="120" r="3"/><text x="480" y="108" text-anchor="middle" class="dim">?</text><text x="320" y="238" text-anchor="middle" class="dim">两幅图中观测事件完全相同，不同的只是模型预期</text></svg>

*同样的观测事件，放在两个模型下看：一次是点源加背景，一次是只有背景。两幅图中观测事件完全相同，不同的只是模型的预期。让观测事件更可能成立的模型更受青睐——其优势的大小就是证据。（示意，非真实数据。）*

调整各模型的参数，让它尽可能好地描述观测到的事例，然后在相同观测数据下比较两种模型的似然：加入点源使似然提高了多少？这个比较的一个概括量——**检验统计量**（TS）——把答案浓缩成一个数字：TS 越大，数据越偏向存在源。（把 TS 换算成熟悉的显著性，是有自己约定的统计步骤，超出本站范围。）一句告诫收束这幅图画：一个只是把数据拟合得*更好*的模型，并不能证明源的存在。任何额外参数都会让拟合变好；问题在于改善是否大到足以被相信——这是显著性的判断，而不是拟合质量本身的判断。这里重要的是它的逻辑——源是让数据更可能成立的那个要素——以及它的纪律：模型必须先陈述，再拿去与数据对照。

**4. 带边界地报告。** 输出是通量（带不确定度）、显著性，以及对模型假设的陈述。通量只与背景模型一样可靠：被低估的弥漫成分会伪装成源通量；在拥挤区域，邻近的源互相交换通量。

计算工作——读取事例清单、建立地图、运行比较、绘制结果——由合作组开发的标准分析软件完成。

仪器效应同样重要——PSF 在低能端变宽，暗弱源的位置与通量在那里带有更大的不确定度。而且探测本身是一个统计陈述：轻微改变背景模型，边缘性的超出就可能消失。这些就是任何点源声明的实际边界。
