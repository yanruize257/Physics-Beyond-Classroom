# 带隙测量中的误差来源

*本页介绍带隙测量的主要误差来源：仪器噪声、样品效应与 Tauc 拟合时的选择。*

## 1. 理想与现实

理想的链条很短。在透射几何中，强度为 \(I_0\) 的光进入厚度为 \(d\) 的样品，强度指数衰减（Beer–Lambert 定律，[3.2 页](measuring-a-bandgap-with-light.md)）：

\[
I = I_0\, e^{-\alpha d},
\qquad
\alpha = \frac{1}{d}\ln\frac{1}{T}.
\tag{1}
\]

链条的每一步——仪器、样品、拟合流程——都各有一个假设。所有假设都成立时，链条精确运转；只要一个失效，真实数据就在那里偏离链条。有用的本事不是假装数据听话，而是找出*哪一个*假设破了。

## 2. 误差从哪里来

偏离的来源分三组。

**仪器。** 分光光度计报告 \(I\) 与 \(I_0\)，但它测到的东西受自身缺陷限制：暗电流（完全没有光时探测器的信号）、绕过样品的杂散光、单色器狭缝的有限宽度、极端光强下的探测器非线性。每一项都把测得的 \(T\) 略微掰离真实值。

**样品。** 方程 (1) 假设的是一块只吸收、平整均匀的薄板。真实样品还会：

- **在衬底里吸收**——承载薄膜的玻璃或石英有自己的吸收边；
- **干涉**——两个平行表面构成薄膜，反射光相长或相消（[1.2 页](../foundations/interference-standing-waves-and-quantization.md)），把条纹印在光谱上；
- **散射**——粗糙表面、粉末、悬浊液把光送离探测器，仪器却把它记成"被吸收了"；
- **厚度不确定**——而 \(\alpha = (1/d)\ln(1/T)\)，\(d\) 的误差直接整体缩放每个 \(\alpha\) 值。

**流程。** 拟合 Tauc 直线涉及选择——波长范围、指数 \(n\)、外推区域——每个选择都会移动截距。

**DRS 特有效应。** 漫反射测量有它自己的误差来源：白色参考及其基线漂移、积分球的收集几何以及镜面分量被包含还是排除、粉末层的散射与厚度——若粉末层薄到让光穿到玻璃，测得的信号就既包含粉末本身背散射的光，也包含到达玻璃、在那里反射、再次穿过粉末层的光，样品相当于"粉末膜＋玻璃"的双层系统，而不是光学厚的粉末床——以及散射系数随波长的变化。\(\log(1/R)\) 这类伪吸光度输出并不是吸收系数 \(\alpha\)，Tauc 分析中不能把两者混淆。推导 1 的误差传播公式只适用于透射模型。

??? derivation "误差传播：小的 \(T\) 误差如何变成大的 \(\alpha\) 误差"

    由 \(\alpha = \frac{1}{d}\ln\frac{1}{T}\)，透射率的一个小不确定度 \(\delta T\) 产生

    \[
    \delta\alpha = \frac{d\alpha}{dT}\,\delta T = -\frac{1}{d}\,\frac{\delta T}{T}.
    \]

    符号只表示方向；作为不确定度，应取模 \(|\delta\alpha| = \frac{1}{d}\frac{\delta T}{T}\)。麻烦出在 \(1/T\) 上：样品透光最多的地方 \(T \approx 1\)，小的透射率误差在 \(\alpha\) 里仍然小；样品吸收强烈、\(T\) 很小的地方，同样的绝对误差 \(\delta T\) 被放大。最坏的噪声落在哪里取决于样品与波长范围——它*并不*自动落在 Tauc 拟合区，而是落在透射率最低的地方。这个一阶关系对 \(T\) 偏离真值的任何小偏差都成立，随机与系统误差一视同仁——\(T\) 的一个小的系统偏差会以同样的因子映射成 \(\alpha\) 的偏差。随机误差与系统误差的区别出现在之后的统计处理上：随机误差随重复测量平均而缩小，系统误差则持续存在。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="斜入射的薄膜干涉"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.film { fill: var(--md-accent-fg-color); opacity: .18; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }.b1 { fill: none; stroke: currentColor; stroke-width: 1.8; }.b2 { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.8; }.nl { fill: none; stroke: currentColor; stroke-width: 1; stroke-dasharray: 4 4; opacity: .5; }</style><rect class="film" x="180" y="110" width="200" height="60"/><text x="335" y="145" text-anchor="middle" font-weight="bold">薄膜（d，n）</text><line class="b1" x1="120" y1="20" x2="240" y2="110"/><line class="b1" x1="240" y1="110" x2="360" y2="20"/><text x="80" y="15" text-anchor="middle" class="dim">入射</text><text x="330" y="12" text-anchor="middle" class="dim">光束 1（上表面）</text><line class="b2" x1="120" y1="20" x2="240" y2="110"/><line class="b2" x1="240" y1="110" x2="258" y2="170"/><line class="b2" x1="258" y1="170" x2="276" y2="110"/><line class="b2" x1="276" y1="110" x2="396" y2="20"/><text x="465" y="12" text-anchor="middle" class="dim">光束 2（下表面）</text><line class="nl" x1="240" y1="90" x2="240" y2="130"/><text x="232" y="100" text-anchor="end" class="dim">&#952;</text><line x1="165" y1="110" x2="165" y2="170" stroke="currentColor" stroke-width="1.4"/><polygon points="165,114 161,122 169,122" fill="currentColor"/><polygon points="165,166 161,158 169,158" fill="currentColor"/><text x="158" y="146" text-anchor="end" class="dim">d</text><text x="180" y="105" text-anchor="start" class="dim">n</text><text x="280" y="200" text-anchor="middle" class="dim">额外光程 &#8776; 2nd（近垂直）：光束 1 与 2 平行出射并干涉</text><text x="280" y="218" text-anchor="middle" class="dim">示意，非按比例；反射相位突变可能把条件移动半个周期</text></svg>

*两束光，分别从薄膜的两个面反射，在探测器处重新会合——1.2 页的双光束干涉。底面那束多走了往返光程 \(2nd\)。当两个界面产生相同的反射相位突变时（自支撑膜，或折射率次序合适的衬底上的膜），\(2nd = m\lambda\) 时两束相长，偏离半个波长处相消；若两个界面的反射相位突变不同，这些条件会移动半个周期。对光滑平行的表面，结果是一组起伏于实测光谱的条纹——正是那种若不修正就会扭曲"笔直"的 Tauc 区域的振荡。\(2nd\) 的估计是近垂直入射近似；入射角较大时，光程差还取决于角度与 \(n\)。粗糙的粉末层不会产生清晰的干涉条纹。*

## 3. Tauc 拟合是一次选择

[上一页](measuring-a-bandgap-with-light.md)的处方——*先以物理依据选定 Tauc 指数、拟合适当的线性区域、再外推*——藏着真实分析必须做出的三个决定。

**拟合哪一段。** 数据从不处处完美线性。分析者选择"看起来最直"的能量窗口，而外推截距取决于这个窗口。换一个稍有不同的范围，\(E_g\) 就可能显著移动，所以拟合值应当带上由这个选择带来的不确定度。

**用哪个指数。** 选 \(n = 2\)（直接）还是 \(n = \tfrac12\)（间接），是一个物理假设，不是拟合便利。选错指数通常会使直线失真：直接带隙材料用间接指数作图（或反之）通常得不到干净的直线。即使部分曲线看起来线性，这本身也不足以确立模型。指数必须由材料的能带结构（[3.1 页](from-levels-to-bands.md)）或独立证据来论证，而不是为了让数据看起来整洁而挑选。

**截距到底是什么。** 即使选择都正确，拟合出的带隙也未必等于本征带隙。提取出的数字可能被以下因素移动：

- **激子**——电子与它留下的空穴相互吸引，形成束缚对，能量略*低于*带隙，所以吸收可以在 \(E_g\) 以下一点点就开始；
- **无序**——结构无序把带边抹糊，吸收的开启没有可供截取的锐利起点；
- **缺陷态**——带隙内的杂质打开了纯晶体本应禁止的吸收通道；
- **掺杂**——有意引入的原子移动带边、弯曲 Tauc 区域。

每一项都是*候选解释*，而不是自动结论，区分它们需要进一步的检查——变温测量、与纯样参照物对比，或独立探针。

上述每种效应都可以用具体的测量来核查。空白衬底扫描能显示光谱里有多少属于衬底而不是薄膜。[1.2 页](../foundations/interference-standing-waves-and-quantization.md)的薄膜干涉条纹可以通过拟合去除，或换一种衬底来避开。结果对拟合区间的敏感程度，可以用几个略有不同的能量窗口重复拟合、比较截距来估计——截距的散布就是 \(E_g\) 不确定度的一个实用度量。报告带隙时应说明做了哪些核查：一条光谱只能*暗示*一个带隙，独立的核查才让这个数字可信。
