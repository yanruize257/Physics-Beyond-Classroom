# 原子钟有多准？

*本页解释时钟的准确度与稳定度之间的区别，以及为什么两者对守时都很重要。*

## 1. 什么让一台时钟"准"？

日常所说的"准"字背后藏着两种不同的品质，把它们分开是守时学的第一课。

**准确度（Accuracy）**问的是：时钟的平均速率对不对？假设一台时钟以频率 \(f\) 运转，真实频率是 \(f_0\)，它的分数频率偏差是

\[
y = \frac{f - f_0}{f_0} = \frac{\Delta f}{f_0}.
\tag{1}
\]

一台 \(y = 10^{-10}\) 的时钟，平均而言偏了百亿分之一——这是一个系统误差。

**稳定度（Stability）**问的是另一件事：速率随时间有多恒定？一台频率在 \(f_0\) 附近轻微摆动的时钟，时快时慢，可以*平均上*很准，却在每一瞬间都不稳。

经典的类比是射箭。准确度是箭簇中心落在靶心哪里；稳定度是箭簇收得多紧。

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="准确度与稳定度：四个靶盘"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.dot { fill: var(--md-accent-fg-color); }</style><circle cx="140" cy="75" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="75" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="116" cy="59" r="3"/><circle class="dot" cx="120" cy="61" r="3"/><circle class="dot" cx="114" cy="63" r="3"/><circle class="dot" cx="118" cy="57" r="3"/><circle class="dot" cx="122" cy="59" r="3"/><circle cx="400" cy="75" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="400" cy="75" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="397" cy="72" r="3"/><circle class="dot" cx="403" cy="73" r="3"/><circle class="dot" cx="400" cy="78" r="3"/><circle class="dot" cx="398" cy="77" r="3"/><circle class="dot" cx="403" cy="76" r="3"/><circle cx="140" cy="165" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="165" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="156" cy="165" r="3"/><circle class="dot" cx="170" cy="145" r="3"/><circle class="dot" cx="146" cy="135" r="3"/><circle class="dot" cx="168" cy="161" r="3"/><circle class="dot" cx="152" cy="151" r="3"/><circle class="dot" cx="168" cy="149" r="3"/><circle cx="400" cy="165" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="400" cy="165" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="382" cy="151" r="3"/><circle class="dot" cx="416" cy="155" r="3"/><circle class="dot" cx="392" cy="181" r="3"/><circle class="dot" cx="414" cy="177" r="3"/><circle class="dot" cx="398" cy="145" r="3"/><circle class="dot" cx="408" cy="167" r="3"/><circle class="dot" cx="384" cy="169" r="3"/><text x="140" y="118" text-anchor="middle" class="dim">稳而不准</text><text x="400" y="118" text-anchor="middle" class="dim">又稳又准</text><text x="140" y="208" text-anchor="middle" class="dim">不稳且不准</text><text x="400" y="208" text-anchor="middle" class="dim">平均准但不稳</text><text x="280" y="232" text-anchor="middle" class="dim" opacity=".55">示意图。</text></svg>

*准确度看弹着点落在哪里；稳定度看弹着点聚得多紧。评判时钟需要两根轴。（示意图。）*一组箭可以紧簇却远离靶心（稳而不准），也可以围着靶心散开（平均准而不稳）。真实的时钟同时落在两条轴上，而不同的技术擅长不同的轴：

- **石英表**走得匀，但晶体老化——频率缓慢而坚定地漂移。短期稳，长期漂。
- **氢钟**（[2.1–2.3 页](the-hydrogen-atoms-smallest-split.md)）是秒到小时尺度上人类造过的最稳的振荡器之一——稳定度冠军——但它的绝对频率取决于腔的调谐，所以它的*准确度*不是自动的。
- **铯钟**是准确度基准：SI 秒由铯-133 超精细跃迁的 \(9\,192\,631\,770\) 个周期每秒来定义。真实的铯钟仍带有自己的测量误差——这个定义并不让任何一台具体仪器自动完美。但它短期的速率起伏比氢钟大。

结论：准确度与稳定度是两根独立的轴，频率标准在两根轴上同时被评判。一台好钟必须*走得对*且*走得稳*——而这两者必须分别测量。

## 2. 为什么真实的时钟会漂移？

原子的跃迁在极高的近似下由基本常数固定；围绕它的装置却不是。每台真实时钟都是理想基准与不完美硬件之间的妥协。对氢钟而言，漂移来源是一份短清单，每一项都能追溯到本站的页面：

- **磁场。** 杂散场会移动跃迁频率（[2.2 页](spins-in-a-magnetic-field.md)）。磁屏蔽与受控的 C 场把这个移动压得又小又已知。
- **壁碰撞。** 原子每次撞上储存泡涂层，其能级都被轻微扰动——[2.3 页](from-a-quiet-atom-to-a-ticking-clock.md)的壁移。
- **腔体温度。** 金属受热膨胀。腔的谐振频率取决于它的尺寸（[1.2 页](../foundations/interference-standing-waves-and-quantization.md)：一根"弦"的音高取决于它的长度），所以不受控的腔会慢慢给自己重新调音。
- **电子学。** 把石英振荡器锁定到原子上的反馈回路，贡献它自己的噪声。

这些效应每一个都很微小，但频率标准要用微小的数字来评判，所以一台真实的时钟必须把自身的缺陷计算在内。

## 3. 小错误如何变成大问题

频率误差不会保持微小；它会*积累*成时间误差。这是时间误差的基本计算。

假设时钟以 \(f = f_0 + \Delta f\) 运转，偏差恒定（这是系统误差的情形；随机摆动属于第 1 节的稳定度）。在时间 \(T\) 内，它数了

\[
N = f\,T
\tag{2}
\]

下，而正确的计数是 \(f_0 T\)。计数的误差是

\[
\Delta N = \Delta f \cdot T,
\tag{3}
\]

而每一下本应代表 \(1/f_0\) 秒，所以积累的时间误差是

\[
\boxed{\Delta t = \frac{\Delta N}{f_0} = \frac{\Delta f}{f_0}\,T = y\,T}
\tag{4}
\]

分数频率误差乘上经过的时间，就是时间误差。两个数值：

\[
y = 10^{-12}:\quad
\Delta t = 10^{-12}\times 86\,400\ \mathrm{s} = 86.4\ \mathrm{ns/天},
\]

\[
y = 10^{-15}:\quad
\Delta t = 10^{-15}\times 3.16\times10^{7}\ \mathrm{s} \approx 31.5\ \mathrm{ns/年}.
\]

一个世纪是 \(100\) 年 \(\approx 3.16\times10^{9}\ \mathrm{s}\)，所以一个世纪累计的时间误差是

\[
y = 10^{-12}:\quad
\Delta t = 10^{-12}\times 3.16\times10^{9}\ \mathrm{s} \approx 3.2\ \mathrm{ms},
\]

\[
y = 10^{-15}:\quad
\Delta t = 10^{-15}\times 3.16\times10^{9}\ \mathrm{s} \approx 3.2\ \mu\mathrm{s}.
\]

教训是：*恒定的分数误差不是恒定的时间误差——它随时间线性增长*，关键的不只是偏差本身，还有时钟长期运行多久。

??? derivation "计数步骤（方程 2–4）"

    从定义出发：时钟数周期。时间 \(T\) 内，以每秒 \(f\) 圈运转的时钟数出 \(N = fT\) 圈。理想时钟以 \(f_0\) 运转，会数出 \(N_0 = f_0 T\) 圈。

    差值是 \(\Delta N = N - N_0 = (f - f_0)T = \Delta f \cdot T\)。

    理想时钟每圈持续 \(1/f_0\) 秒，所以数错 \(\Delta N\) 圈对应的时间误差是

    \[
    \Delta t = \frac{\Delta N}{f_0} = \frac{\Delta f}{f_0}\,T,
    \]

    即方程 (4)。这个推导*确实*假设了偏差恒定：\(\Delta f\) 被当作一个固定数。若偏差随时间漂移，累计误差要换成积分

    \[
    \Delta t = \int_0^T y(t)\, dt,
    \]

    而描述这种漂移——而不是这种简单的线性增长——正是专业计量学的工作：持续跟踪一台时钟的频率，而不是只信一次测量。

## 4. 这在天文学里为什么重要？

本站语境下的两个应用让上面的算术变得紧迫。

**甚长基线干涉测量（VLBI）。** 相隔数千公里的射电望远镜观测同一个源，每台用自己的本地钟记录信号，事后合并。要让信号相干相加，各站之间的到达时间差必须精确到纳秒。每站一台氢钟提供让阵列保持相位同步的基准——这正是本站天文台语境里处处是氢钟的原因。

**卫星导航。** GPS、伽利略与北斗靠计时工作：接收机测出无线电信号从卫星到达用了多久，再把传播时间换算成距离：

\[
\Delta x = c\,\Delta t,
\tag{5}
\]

于是 \(1\ \mathrm{ns}\) 的定时误差变成单条信号路径上 \(0.30\ \mathrm{m}\) 的距离误差，\(1\ \mu\mathrm{s}\) 变成 \(300\ \mathrm{m}\)——完整的定位误差还取决于卫星几何。卫星因此携带原子钟，而系统由地面运行氢钟的台站驾驭。

## 来源

- BIPM——SI 基本单位：秒（铯跃迁，\(9\,192\,631\,770\ \mathrm{Hz}\)）：[https://www.bipm.org/en/si-base-units/second](https://www.bipm.org/en/si-base-units/second)
- NIST——时间与频率出版物：[https://www.nist.gov/pml/time-and-frequency-division](https://www.nist.gov/pml/time-and-frequency-division)
- 典型的主动氢钟在秒到小时尺度上呈现约 \(10^{-13}\)–\(10^{-15}\) 量级的分数频率不稳定度，VLBI 阵列要求各站时钟同步到纳秒——两者都是时频文献中的标准数值，具体数值因仪器而异。
