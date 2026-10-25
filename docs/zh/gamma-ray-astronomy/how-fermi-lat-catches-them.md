# Fermi-LAT 如何探测伽马射线

*本页介绍费米大面积望远镜的三个组件——径迹探测器、量能器与反符合探测器——以及它们如何测量伽马射线。*

## 1. 一句话说清设计

能量高于 \(1.022\ \mathrm{MeV}\) 的每个伽马射线都能变成电子-正电子对（上一页）。费米大面积望远镜（LAT）围绕这场转化建造——它按一定概率发生，并非每个光子都会转化——并测量结果：电子对的方向给出光子的方向；电子对的能量给出光子的能量。三台仪器依次完成工作——**径迹探测器**、**量能器**和**反符合屏蔽**。

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 430" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="费米大面积望远镜简化剖面"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 11.5px; }.box { fill: none; stroke: currentColor; stroke-width: 1.5; }.foil { fill: currentColor; }.si { fill: var(--md-accent-fg-color); opacity: .15; stroke: var(--md-accent-fg-color); stroke-width: 1; }.g { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.part { fill: none; stroke: currentColor; stroke-width: 1.8; }.ld { fill: none; stroke: currentColor; stroke-width: 0.8; opacity: .6; }</style><rect class="box" x="70" y="30" width="420" height="26"/><text x="70" y="78" text-anchor="start" class="dim">ACD（反符合探测器）：否决带电宇宙线</text><text x="70" y="106" text-anchor="start" class="dim">径迹探测器：钨箔 + 硅微条层</text><rect class="foil" x="100" y="114" width="360" height="5"/><rect class="si" x="100" y="119" width="360" height="12"/><rect class="foil" x="100" y="131" width="360" height="5"/><rect class="si" x="100" y="136" width="360" height="12"/><rect class="foil" x="100" y="148" width="360" height="5"/><rect class="si" x="100" y="153" width="360" height="12"/><rect class="foil" x="100" y="165" width="360" height="5"/><rect class="si" x="100" y="170" width="360" height="12"/><rect class="foil" x="100" y="182" width="360" height="5"/><line class="g" x1="280" y1="0" x2="280" y2="130"/><polygon points="280,126 276,114 284,114" fill="var(--md-accent-fg-color)"/><text x="330" y="64" text-anchor="start" class="dim">&#947;（入射伽马射线）</text><path class="part" d="M280,130 L235,205"/><path class="part" d="M280,130 L325,205"/><text x="166" y="196" text-anchor="end" class="dim">e&#8315;</text><line class="ld" x1="172" y1="193" x2="234" y2="201"/><text x="394" y="196" text-anchor="start" class="dim">e&#8314;</text><line class="ld" x1="388" y1="193" x2="326" y2="201"/><text x="70" y="238" text-anchor="start" class="dim">量能器：CsI 晶体</text><rect class="box" x="100" y="246" width="360" height="34"/><line x1="100" y1="263" x2="460" y2="263" stroke="currentColor" stroke-width="1"/><path class="part" d="M235,205 L255,246"/><path class="part" d="M325,205 L305,246"/><text x="280" y="304" text-anchor="middle" class="dim">电子对方向 &#8594; 光子方向；沉积能量 &#8594; 光子能量</text></svg>
</div>

*三层的剖面图：ACD 否决带电粒子，径迹探测器把光子转化成可追踪的电子对，量能器吸收电子对的能量。方向取自电子对，能量取自簇射。（简化示意，非按比例：真实探测器有更多层，量能器是许多晶体。）*

## 2. 径迹探测器：它从哪来？

径迹探测器是一叠薄钨箔，与硅微条探测器交错排列。钨是致密的高 \(Z\) 材料，对产生在其中极易发生。转化概率的一个薄靶、量级估计是：

\[
\text{转化概率} \propto Z^2 \times \text{箔厚度}.
\tag{1}
\]

入射的伽马射线在其中一层钨箔里转化为电子和正电子，两者沿光子原方向近似对称飞出。硅微条记录两个粒子穿过每一层的位置。LAT 没有磁场，所以径迹不会弯曲——但也并非完美直线：箔与探测器中的**多重库仑散射**让每个粒子轻微游走，而这种游走加上电子对的张角，正是低能端角分辨率的限制来源。把击中点连成径迹、再把两个动量相加，就得到光子的到达方向，即电子对总动量的方向（这忽略了转化原子核的微小反冲与箔中的多重散射）：

\[
p_{\gamma} \approx p_{e^-} + p_{e^+}
\quad\Longrightarrow\quad
\hat{n}_{\gamma} \approx \text{电子对总动量的方向}.
\tag{2}
\]

高能下产生的电子对近乎对称，这个方向接近两条径迹的角平分线，这个重建出的方向被反向投影到天空上，作为源的方向——精度在 \(1\ \mathrm{GeV}\) 处约 \(0.8^\circ\)，随能量降低而变差。能量则主要留给量能器。

## 3. 量能器：能量测量

径迹探测器下方是量能器——碘化铯晶体条。电子和正电子撞入晶体，把能量沉积在那里，晶体再把沉积的能量转化成光。晶体测量电子对沉积的能量；再结合对途中在径迹探测器里损失能量的修正，就重建出光子的能量（忽略微小的核反冲）。下面的式子中，\(E_{e^-}\) 与 \(E_{e^+}\) 是两个粒子的*总*相对论能量，包含静能：

\[
E_{\gamma} = E_{e^-} + E_{e^+}.
\tag{3}
\]

重建这份能量不是读一个数字那么简单：电子对的能量有一部分在途中花在了径迹探测器里，还有一部分可能逃出晶体，所以测得的沉积需要修正。最终得到约 \(10\)–\(15\%\) 的**能量分辨率**，而沉积的图案本身就是一道自检——伽马事例的能量沉积窄而对称，宇宙线质子留下的则参差不齐。

## 4. 屏蔽：扔掉哪些事例

LAT 在大量带电宇宙线中运行——宇宙线数量约为伽马射线的 \(10^5\) 倍。仅靠径迹，探测器无法区分路过的质子与正在转化的光子。解决方案是**否决**：径迹探测器外包着一层反符合探测器（ACD）——塑料闪烁体瓦片，任何带电粒子穿过时都会闪光：

\[
\text{带电粒子} \Rightarrow \text{ACD 闪光} \Rightarrow \text{事例被否决}.
\tag{4}
\]

光子是电中性的，安静入场；只有进入径迹探测器内部转化后，它的儿女才会被记录。ACD 也堵住反向的漏洞：如果电子-正电子簇射把光反溅到屏蔽上，对溅射形状做甄别，就能防止仪器否决自己。

## 5. 有效面积与探测灵敏度

一台望远镜的价值在于它的**有效面积**——能捕获同样多光子的理想探测器的大小——以及凝视的时间。对稳定源、在背景主导且观测条件相近的情况下，探测显著度按

\[
\sigma \propto \sqrt{A_{\text{eff}}\, t}
\tag{5}
\]

增长。LAT 的有效面积在 \(1\ \mathrm{GeV}\) 附近达到峰值，约 \(8000\ \mathrm{cm^2}\)——一张书桌的大小；而它的视场巨大，一次覆盖约 \(20\%\) 的天空，因为径迹探测器接受来自上方任何方向的光子。仪器的生存方式由此注定：它不指向，它扫视。整个天空每几小时从视场中滚过一遍，望远镜是巡天员，年复一年地为每个方向、每个源积累光子。

仪器的三个数字值得小心区分，因为它们回答三个不同的问题。**有效面积**问的是*接住了多少光子*；**角分辨率**问的是*到达方向被知道得有多准*；**流量灵敏度**问的是*仪器在给定时间内能认证多暗的源*。它们相关却不同——大的有效面积并不自动给出清晰的图像，清晰的图像也不自动给出深的灵敏度。把三者分开，就是区分描述*仪器*与描述天空真正发出的东西——这个区分是下一页的主线。

## 来源

- Fermi Science Support Center（仪器描述与数据获取）：[https://fermi.gsfc.nasa.gov/ssc/](https://fermi.gsfc.nasa.gov/ssc/)
- W. B. Atwood 等, *The Large Area Telescope on the Fermi Gamma-ray Space Telescope Mission*, Astrophys. J. **697**, 1071–1102 (2009)——LAT 仪器论文，上文性能数据（有效面积、角分辨率、能量分辨率、视场）的出处。[https://doi.org/10.1088/0004-637X/697/2/1071](https://doi.org/10.1088/0004-637X/697/2/1071)
