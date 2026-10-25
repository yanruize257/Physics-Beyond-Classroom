# 氢的超精细劈裂

*氢的基态被电子与质子自旋的相互作用劈成两个超精细能级。二者之间的跃迁就是 21 厘米谱线。*

## 1. 自旋就是磁铁

从[基础篇](../foundations/wave-functions-and-quantum-states.md)可知：电子携带一种内禀角动量——**自旋**——自旋 1/2 粒子沿选定轴的自旋投影只有两个可能结果；质子同样携带自旋。自旋本身只是个抽象标签；让它具有物理决定性的是：自旋伴随一个内禀磁矩——这不是经典旋转电荷产生的磁矩。电子的磁矩约为一个玻尔磁子，

\[
\mu_e \approx \mu_B = \frac{e\hbar}{2m_e} = 9.274\times10^{-24}\ \mathrm{J/T},
\tag{1}
\]

质子的磁矩约为一个核磁子，小两千倍：

\[
\mu_p \approx 2.79\,\mu_N,
\qquad
\mu_N = \frac{e\hbar}{2m_p} = 5.051\times10^{-27}\ \mathrm{J/T}.
\tag{2}
\]

两块磁铁相互作用时，能量取决于它们的相对取向。本页解释由此产生的劈裂，并用实验测得的跃迁频率（而不是模型）计算跃迁能量。

## 2. 两个态

在氢的基态（\(n = 1\)）中，电子自旋与质子自旋可以以两种方式组合——粗略地说，**平行**或**反平行**。偶极子在磁场 \(B\) 中的能量是

\[
E = -\mu \cdot B,
\tag{3}
\]

所以两种排布的能量不同，基态劈成两条相邻的阶梯——*超精细*劈裂。四种自旋排布归入两个能级：**单态**，总自旋 \(F = 0\)；**三重态**，总自旋 \(F = 1\)，包含三个态。

关于"两根箭头"的图像，要说一句实话。耦合的自旋态不是两根固定经典箭头的快照。单态是这样一个态：无论你朝哪个方向看，两个自旋都指向相反——一对没有任何净取向的组合，像两根背靠背锁定的指南针。三重态则像指向一致的组合：它两端的成员（\(m_F = \pm1\)）是两种真正平行的情形，居中的成员（\(m_F = 0\)）是"电子上、质子下"与"电子下、质子上"的量子混合。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="氢基态的超精细劈裂"><style>.lvl { stroke: currentColor; stroke-width: 3.5; }text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }</style><line class="lvl" x1="110" y1="80" x2="500" y2="80"/><text x="100" y="88" text-anchor="end" font-weight="bold">F = 1</text><text x="100" y="103" text-anchor="end" class="dim">三重态（3 个态）</text><line class="lvl" x1="110" y1="230" x2="500" y2="230"/><text x="100" y="238" text-anchor="end" font-weight="bold">F = 0</text><text x="100" y="253" text-anchor="end" class="dim">单态</text><line x1="280" y1="105" x2="280" y2="205" stroke="var(--md-accent-fg-color)" stroke-width="1.8"/><polygon points="280,213 275,201 285,201" fill="var(--md-accent-fg-color)"/><text x="292" y="150" text-anchor="start" class="dim">光子：&#955; = 21.1 cm</text><text x="292" y="165" text-anchor="start" class="dim">&#957; = 1.42 GHz</text><text x="280" y="275" text-anchor="middle" class="dim">&#916;E &#8776; 5.9 &#215; 10&#8315;&#8310; eV——非按比例</text></svg>

*氢的劈裂基态。想象两块相距固定的条形小磁铁：它们的相互作用能量取决于相对取向——而且和真实磁铁一样，同向还是反向代价更高，取决于怎么摆放（并排还是首尾相接）。类比提供的是机制，不是符号；真实的单态没有固定方向，如上文所述。*

## 3. 能量差

两种排布的能量不同，因为两个自旋有磁相互作用。经典的双磁铁图像提供直觉——组合的能量取决于两者的相对取向——但经典答案依赖几何：*并排*放置的磁铁喜欢反向，*首尾相接*放置的磁铁喜欢同向，所以符号不能只凭类比定夺。在真实氢原子中，这个排序是自旋-自旋耦合的量子事实，由理论与实验共同确立：三重态 \(F = 1\) 比单态 \(F = 0\) 略*高*。因此本站不再追究劈裂的数值估算；*机制*（两个自旋之间的磁相互作用）才是物理，精确大小取自实验。

实测跃迁频率来自氢钟与铯频率标准的比对，并修正氢钟的系统频移（见来源）：

\[
\boxed{\nu_0 = 1\,420\,405\,751.768\ \mathrm{Hz}}
\tag{4}
\]

从这个数字出发，其余一切由基础篇的关系推出。能量差是

\[
\Delta E = h\nu_0
= (6.626\times10^{-34}\ \mathrm{J\cdot s})(1.4204\times10^{9}\ \mathrm{Hz})
\approx 9.4\times10^{-25}\ \mathrm{J},
\tag{5}
\]

约为 \(5.9\times10^{-6}\ \mathrm{eV}\)——而波长是

\[
\lambda = \frac{c}{\nu_0}
= \frac{2.998\times10^{8}\ \mathrm{m/s}}{1.4204\times10^{9}\ \mathrm{Hz}}
\approx 21.1\ \mathrm{cm}.
\tag{6}
\]

这就是 **21 厘米谱线**。

## 4. 一条缓慢的跃迁

能隙极小——\(5.9\times10^{-6}\ \mathrm{eV}\)，约为可见光光子的百万分之一。小能隙自有后果：激发态原子在微波频率处自发辐射光子的速率慢到不可思议：

\[
A \approx 2.9\times10^{-15}\ \mathrm{s^{-1}},
\qquad
\tau = \frac{1}{A} \approx 1100\ \text{万年}.
\tag{7}
\]

关于这个数字，有两点说明。其一，\(\tau\) 是*平均*等待时间，不是钟表式的节奏：激发态原子在某个随机时刻翻转，有的早、有的晚得多，一千一百万年是这个随机性的平均。其二，"禁止"需要限定词。这条跃迁无法通过主宰日常光线的**电偶极（E1）**通道发生，所以通常的规则确实禁止它——但它可以通过弱得多的**磁偶极（M1）**通道进行。M1 跃迁不是绝对禁止，只是非常、非常慢。

要避免一个错误的推论：*发射*的缓慢，说明不了两个*能级*对外界有多敏感。这是两个不同的性质。漫长的寿命只对探测是坏消息——单个原子几乎从不发光。能级本身仍会被扰动，事实上磁场会直接移动它们、改变跃迁频率——[下一页](spins-in-a-magnetic-field.md)的主题。再下一篇解释如何用这条跃迁建造时钟：受激辐射、态选择与谐振腔。

## 来源

- NIST——基本物理常数（普朗克常数、玻尔磁子、核磁子）：[https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
- BIPM——SI 基本单位：秒：[https://www.bipm.org/en/si-base-units/second](https://www.bipm.org/en/si-base-units/second)
- H. Hellwig, R. F. C. Vessot, M. W. Levine, P. W. Zitzewitz, D. W. Allan, D. J. Glaze, *Measurement of the Unperturbed Hydrogen Hyperfine Transition Frequency*, IEEE Trans. Instrum. Meas. **19**, 200–209 (1970)——\(1\,420\,405\,751.768\ \mathrm{Hz}\) 的实验出处。
- 自发衰变系数 \(A \approx 2.9\times10^{-15}\ \mathrm{s^{-1}}\)（寿命约一千一百万年）是原子物理文献引用的数值。
