# 用光测带隙：Tauc 图

*本页介绍如何用 Tauc 图从紫外-可见测量中提取半导体的带隙——无论是透射还是漫反射几何。*

## 1. 实验

在透射模式测量中，紫外-可见分光光度计把选定波长的光照过样品，测量透射光强。四个部件各司其职——光源、一次只挑一个波长的单色器、样品本身、探测器：

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 240" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="紫外可见分光光度计示意图"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.box { fill: none; stroke: currentColor; stroke-width: 1.6; }.beam { stroke: var(--md-accent-fg-color); stroke-width: 2; }.wl { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.2; stroke-dasharray: 6 4; }</style><rect class="box" x="10" y="90" width="90" height="50"/><text x="55" y="111" text-anchor="middle">光源</text><text x="55" y="127" text-anchor="middle" class="dim">灯</text><rect class="box" x="140" y="90" width="110" height="50"/><text x="195" y="111" text-anchor="middle">单色器</text><text x="195" y="127" text-anchor="middle" class="dim">每次挑一个 &#955;</text><rect class="box" x="290" y="90" width="90" height="50"/><text x="335" y="111" text-anchor="middle">样品</text><text x="335" y="127" text-anchor="middle" class="dim">厚度 d</text><rect class="box" x="420" y="90" width="90" height="50"/><text x="465" y="111" text-anchor="middle">探测器</text><text x="465" y="127" text-anchor="middle" class="dim">测量 I</text><line class="beam" x1="100" y1="115" x2="140" y2="115"/><line class="beam" x1="250" y1="115" x2="290" y2="115"/><line class="beam" x1="380" y1="115" x2="420" y2="115"/><path class="wl" d="M40,60 C90,20 160,20 210,60"/><text x="125" y="74" text-anchor="middle" class="dim">从红外到紫外扫描 &#955;</text><text x="310" y="175" text-anchor="middle" class="dim">每个波长处 T = I / I&#8320;</text><text x="310" y="210" text-anchor="middle" class="dim" opacity=".55">简化示意图，非按比例。</text></svg>

*仪器用一句话概括：挑一种颜色，让它穿过样品，测量幸存者——然后换下一种颜色，重复。*

常见的测量几何有两种。上面是**透射**几何：光穿过样品，探测器测量透射光强。在**漫反射光谱（DRS）**中，光照在样品表面，**积分球**收集向各个方向散射回来的光；信号与白色参考标准比较：

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="积分球漫反射光谱"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.sphere { fill: none; stroke: currentColor; stroke-width: 1.6; }.in { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.sc { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1; opacity: .6; }.samp { fill: var(--md-accent-fg-color); opacity: .3; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }</style><circle class="sphere" cx="280" cy="140" r="95"/><rect class="samp" x="172" y="128" width="26" height="26" transform="rotate(-30 185 141)"/><text x="150" y="178" text-anchor="middle" class="dim">样品</text><line class="in" x1="60" y1="30" x2="185" y2="141"/><polygon points="185,141 173,139 179,129" fill="var(--md-accent-fg-color)"/><text x="70" y="22" text-anchor="start" class="dim">入射光</text><path class="sc" d="M195,135 C230,80 320,80 350,135"/><path class="sc" d="M195,147 C230,205 330,210 370,170"/><rect class="samp" x="300" y="198" width="24" height="24" transform="rotate(-20 312 210)"/><text x="300" y="182" text-anchor="middle" class="dim">探测器</text><line x1="312" y1="210" x2="360" y2="210" stroke="currentColor" stroke-width="1.6"/><polygon points="366,210 356,206 356,214" fill="currentColor"/><text x="420" y="203" text-anchor="start" class="dim">与白色参考</text><text x="420" y="217" text-anchor="start" class="dim">标准比较</text><text x="280" y="266" text-anchor="middle" class="dim">散射光在球内多次反射，直到被探测器收集</text><text x="280" y="284" text-anchor="middle" class="dim" opacity=".55">简化示意，非按比例。</text></svg>
</div>

*DRS 几何：光照在样品上，积分球收集漫反射光，与白色参考标准比较。（简化示意，非按比例。）*

粉末样品常见的形式是：分散在溶液中，涂到玻璃片上并干燥。反射率 \(R\) 是样品信号对参考的归一化值。依仪器而定，输出可能是 \(R\)、\(\%R\)，也可能是某个标为"吸光度"的量。例如 \(\mathrm{Abs}\) 列在透射模式下可能表示 \(-\log_{10} T\)，在反射模式下可能表示 \(\log_{10}(1/R)\)，也可能是 Kubelka–Munk 值——仅凭列名无法判断是哪一个，任何一种都不应想当然。必须先查仪器模式与软件的输出定义。

\[
T = \frac{I}{I_0},
\tag{1}
\]

即**透射率**——穿过的强度占比。仪器从近红外扫描到紫外，记录 \(T(\lambda)\)——通常以吸光度呈现，

\[
A = \log_{10}\!\frac{1}{T}.
\tag{2}
\]

原始输出还不是物理。透射路径下必须逐波长把它转换成吸收系数 \(\alpha\)；DRS 路径下数据是反射率（或条件性的 Kubelka–Munk 量，见第 2 节）。两条路径下面分别介绍。

## 2. 从透射率到吸收系数

材料内部，强度随深度指数衰减（Beer–Lambert 定律）：

\[
I(x) = I_0\, e^{-\alpha x},
\qquad
\alpha = \frac{1}{d}\ln\frac{1}{T},
\tag{3}
\]

其中 \(d\) 是样品厚度。（该关系假设反射与散射可忽略或已被修正——[3.3 页](when-experimental-data-misbehaves.md)的主题。）

对漫反射，对应的模型量是 **Kubelka–Munk 函数**，

\[
F(R_\infty) = \frac{(1 - R_\infty)^2}{2R_\infty} = \frac{K}{S},
\tag{4}
\]

它针对光学足够厚、发生漫散射的样品定义：\(R_\infty\) 是无限厚层*应当具有*的漫反射率，\(K/S\) 是吸收系数与散射系数之比。玻璃片上粉末层实际测得的 \(R_{\mathrm{meas}}\) 并不自动等于 \(R_\infty\)。只有在散射系数在测量范围内可近似视为常数时，\(F(R_\infty)\) 才与吸收系数成正比；它**并不等于**透射吸收系数 \(\alpha\)，无限厚粉末模型也不能未经论证地直接用于薄膜。走哪条路取决于测量几何与样品。涂在玻璃片上的粉末层可能薄到让光穿到玻璃。此时测得的信号既包含粉末本身背散射的光，也包含到达玻璃、在那里反射、再次穿过粉末层回来的光。仪器记录的其实是"粉末膜＋玻璃"双层系统的反射，而不是无限厚粉末床的 \(R_\infty\)；粉末层自身的散射强度还随堆积方式与波长变化。因此对这类样品，把测得的 \(R_{\mathrm{meas}}\) 代入 Kubelka–Munk 形式得到的是一个*表观*的 \(F(R)\)——条件性的、依赖模型的变换。只有当模型条件成立时它才等于 \(K/S\)、才表现得像 \(\alpha\)；未经检验，它两者都不是。每个波长 \(\lambda\) 都借助[基础篇](../foundations/wave-functions-and-quantum-states.md)的常数换算成光子能量：

\[
h\nu = \frac{1240}{\lambda\ [\mathrm{nm}]}\ \mathrm{eV}.
\tag{5}
\]

透射路径下，实验给出 \(\alpha\) 随光子能量 \(h\nu\) 的变化；DRS 路径下给出反射率 \(R\)，可被条件性地变换（第 2 节）。剩下的全是解读。

这里必须把三个量分开，因为它们住在不同的阶梯上。**透射率** \(T\) 与**吸光度** \(A\) 是从仪器读出的无量纲数字。**吸收系数** \(\alpha\)，单位是长度的倒数，是从它们通过方程 (3) 提取出的材料属性。**带隙** \(E_g\)，单位是能量，是我们追寻的物理。透射路径下，是 \(\alpha\) 把仪器的数字与材料的物理连接起来；DRS 路径下，对应的是——条件性的——\(F(R_\infty)\)。下一节在搭这些桥时依赖的假设，值得先说出来。

## 3. Tauc 方程

对**直接**带隙，吸收是带间的竖直跃迁（[3.1 页](from-levels-to-bands.md)），而吸收边的一个标准模型——Tauc 模型，被半导体文献广泛使用——断言测量量组合成一条直线：

\[
(\alpha h\nu)^2 = B\,(h\nu - E_g),
\tag{6}
\]

（为什么是这个组合而非别的，来自能带间跃迁的量子理论——大学程度的推导。这里我们把它作为学界的标准工具接受，把注意力花在诚实地使用它上。）

基于 DRS 的分析也使用同一关系，只是用 \(F(R_\infty)\) 代替 \(\alpha\)——这一替换以 Kubelka–Munk 假设为前提。无论哪种情形，指数 \(n\) 都按跃迁的物理机制选择，而不是看哪张图最直。

或写成一般形式，指数 \(n\) 取决于跃迁类型：

\[
\boxed{(\alpha h\nu)^{n} = B\,(h\nu - E_g)}
\qquad
n =
\begin{cases}
2, & \text{直接允许跃迁}\\[2pt]
\frac12, & \text{间接允许跃迁}.
\end{cases}
\tag{7}
\]

这就是 **Tauc 方程**：一个由测量量拼出的 \((\alpha h\nu)^{n}\) 与光子能量之间的直线关系。它在能量轴上的截距就是带隙——*前提是它的假设成立*。

这些假设藏在方程内部，它们划定了方程的边界。它假设的是**直接允许**跃迁、**抛物线能带**，且跃迁概率跨带隙缓慢变化。对间接带隙（[3.1 页](from-levels-to-bands.md)），指数改变且跃迁需要声子协助；对非抛物线能带或由缺陷主导的吸收，该关系并不严格。在这些情形下，直线截距是带隙的*估计*，而不是带隙的定义。假设成立到什么程度，本身就是一个实验问题——[3.3 页](when-experimental-data-misbehaves.md)的主题。

## 4. 作图

对**直接允许**跃迁，以 \((\alpha h\nu)^2\) 对 \(h\nu\) 作图。带隙以下，曲线贴着横轴；以上，数据沿一条直线爬升。把直线段反向延长到能量轴——截距就是 \(E_g\)：

\[
(\alpha h\nu)^2 = 0
\quad\Longrightarrow\quad
\boxed{h\nu = E_g}
\tag{8}
\]

处方一句话：*先以物理依据选定指数，再拟合直线、读截距。*图本身无法决定物理：指数必须来自材料的能带结构或独立证据，用错误的指数作图通常得不到干净的直线——这是一次有用的自洽性检查，不过在有限的能量范围内，错误的模型也可能看起来近似线性，所以指数必须来自物理。对**间接**带隙，跃迁需要声子协助、强度弱得多，所以选对指数 \((\alpha h\nu)^{1/2}\) 后同一处方适用——但只有物理能论证这个选择。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Tauc 图如何由外推得出带隙"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }.ax { stroke: currentColor; stroke-width: 1.5; }.data { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.5; }.fit { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-dasharray: 7 4; }.pt { fill: var(--md-accent-fg-color); }</style><line class="ax" x1="60" y1="240" x2="510" y2="240"/><line class="ax" x1="60" y1="240" x2="60" y2="40"/><text x="510" y="262" text-anchor="end">h&#957;</text><text x="60" y="32" text-anchor="middle">(&#945;h&#957;)&#178;</text><path class="data" d="M60,236 C110,234 150,228 190,214 C240,196 275,170 300,146.3"/><circle class="pt" cx="300" cy="146.3" r="3.5"/><circle class="pt" cx="330" cy="120.7" r="3.5"/><circle class="pt" cx="360" cy="95.2" r="3.5"/><circle class="pt" cx="390" cy="69.6" r="3.5"/><line class="fit" x1="190" y1="240" x2="460" y2="10"/><circle class="pt" cx="190" cy="240" r="4.5" stroke="currentColor" stroke-width="2" fill="none"/><text x="130" y="180" text-anchor="middle" class="dim">带隙以下，</text><text x="135" y="196" text-anchor="middle" class="dim">数据贴着横轴</text><text x="235" y="85" text-anchor="start" class="dim" transform="rotate(-40 235 85)">直线段区域</text><text x="186" y="256" text-anchor="middle" class="dim" fill="var(--md-accent-fg-color)">截距 = E_g</text><text x="280" y="296" text-anchor="middle" class="dim">先按物理选定指数（直接 n = 2，间接 n = &#189;），再拟合、外推。</text><text x="280" y="312" text-anchor="middle" class="dim" opacity=".55">示意图，非真实数据。</text></svg>

*整个流程一图概览：带隙以下数据贴着横轴，以上沿直线上升，外推直线在横轴上的截距就是带隙。只有当指数按物理依据选定时，这个方法才成立。*

## 5. 一个真实材料：BiOCl

氯氧化铋 \(\mathrm{BiOCl}\) 是一种层状半导体，被研究用于光催化，它正是上面这份谨慎的好案例。在本站背后的测量中，BiOCl 粉末被分散在溶液里、涂到玻璃片上，并用带积分球的漫反射光谱表征。由于这种玻璃片上的粉末样品测得的反射混合了粉末与背后玻璃的贡献——并非 Kubelka–Munk 模型所假设的光学厚块体——\(F(R_\infty)\) 在那里只能作为近似；上面的透射描述仍是更简单的参照模型。白色晶体 BiOCl 只在紫外吸收：可见光区光谱平坦，在带边附近陡峭上升。文献报道的带隙值集中在 \(3.2\)–\(3.5\ \mathrm{eV}\)，对应吸收边在

\[
E_g \approx 3.2\text{–}3.5\ \mathrm{eV}
\quad\Longleftrightarrow\quad
\lambda_g = \frac{1240}{E_g\,[\mathrm{eV}]}\ \mathrm{nm}
\approx 390\text{–}355\ \mathrm{nm}.
\tag{9}
\]

陡峭的带边本身几乎说明不了跃迁类型。文献中对 BiOCl 的大多数分析把它当作**间接**带隙材料，用 \(n = \tfrac12\) 拟合 Tauc 关系；拟合出的带隙取决于这个选择，而直接/间接的判定必须由能带结构证据（或多个独立测量的一致性）来论证，而不是由单条吸收光谱的陡峭程度来决定。掺杂以可测量的方式改变故事：替换一小部分原子会移动带边，还可能在带隙内引入态，使吸收边移动、Tauc 直线弯曲。因此，在*相同*拟合约定下比较纯样与掺杂样品，是分析的起点而非终点。

## 来源

- NIST——基本物理常数（\(h\) 与 \(c\) 的值）：[https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
- K.-L. Zhang, C.-M. Liu, F.-Q. Huang, C. Zheng, W.-D. Wang, *Study of the electronic structure and photocatalytic activity of the BiOCl photocatalyst*, Appl. Catal. B **68**, 125–129 (2006)——BiOCl 光学带隙的早期报道，采用间接带隙分析。
