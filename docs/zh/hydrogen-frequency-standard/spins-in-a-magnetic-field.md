# 磁场中的自旋：进动与塞曼效应

*磁场中的磁矩绕着磁场方向进动。这个效应的量子版本——塞曼劈裂——是氢钟态选择与磁屏蔽的基础。*

## 1. 会进动的磁针

从熟悉的景象开始：一个旋转的陀螺。推它一下，它不倒——陀螺的轴绕着竖直方向慢慢转圈。这种转圈就是**进动**，其来源是作用在旋转物体上的力矩。（一个区别：陀螺的力矩来自重力，磁铁的来自磁场；几何相同。）

磁场 \(B\) 中的磁矩 \(\mu\) 受到力矩

\[
\tau = \mu \times B.
\tag{1}
\]

自旋伴随一个与自旋角动量 \(S\) 成正比的磁矩——这是内禀的量子性质，不是一个机械旋转的带电小球产生的场——而力矩改变 \(S\)。（这里 \(S\) 表示自旋；\(L\) 通常留给轨道角动量。）把运动方程写在对磁矩本身：

\[
\frac{d\mu}{dt} = \gamma\,\mu \times B,
\tag{2}
\]

其中 \(\gamma\)（旋磁比）携带比例关系。解不是"啪地就位"，而是绕着磁场方向的匀速**进动**，频率为**拉莫尔频率**

\[
\boxed{\omega_L = |\gamma|\, B}
\tag{3}
\]

整件事的道理可以用语言代替代数：\(d\mu/dt\) 始终垂直于 \(\mu\)，所以磁矩的长度不变；而沿场方向的分量也不变，因为力矩没有沿 \(B\) 的分量。磁矩剩下的唯一运动，就是绕着场方向转圈——这正是进动。转圈的走向取决于 \(\gamma\) 的符号；频率是 \(|\gamma|B\)。

对电子自旋，拉莫尔频率为

\[
\omega_L = \frac{g_e\, eB}{2m_e} \approx \frac{eB}{m_e},
\tag{4}
\]

因为 \(g_e \approx 2\)。

??? example "数值示例"

    取 \(B = 1\ \mu\mathrm{T}\)，比地磁场还弱：

    \[
    f_L^{\text{电子}} = \frac{eB}{2\pi m_e}
    = \frac{(1.602\times10^{-19})(1\times10^{-6})}{2\pi(9.109\times10^{-31})}
    \approx 28\ \mathrm{kHz}.
    \]

    质子的旋磁比 \(\gamma_p/2\pi = 42.58\ \mathrm{MHz/T}\)：

    \[
    f_L^{\text{质子}} = 42.58\ \mathrm{MHz/T}\times10^{-6}\ \mathrm{T}
    = 42.6\ \mathrm{Hz}.
    \]

    同一磁场里的两个磁矩，进动速率差别很大。

## 2. 场中的阶梯：塞曼效应

进动是经典图像；量子化版本则是能级阶梯的移动。磁矩在场中的能量为 \(E = -\mu \cdot B\)。在**弱**场下，每个氢超精细态获得一阶能量修正

\[
\boxed{\Delta E = +\,g_F\, m_F\, \mu_B B}
\tag{5}
\]

其中 \(m_F\) 是总角动量沿选定轴的投影。先把一句告诫放在前面：方程 (5) 是一阶的、弱场的陈述。强场下能级的行为不同，即使在弱场里也存在微小的高阶修正——这个公式是领头近似，不是最终结论。

劈裂的思维导图版长这样（简化模型，非按比例）：

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -30 740 430" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="氢超精细能级的塞曼劈裂"><style>.lvl { stroke: currentColor; stroke-width: 3; }.br { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.guide { fill: none; stroke: currentColor; stroke-width: 1.2; stroke-dasharray: 4 3; opacity: .55; }text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }.note { font-size: 11.5px; opacity: .65; font-style: italic; }</style><line class="lvl" x1="105" y1="80" x2="285" y2="80"/><text x="95" y="88" text-anchor="end" font-weight="bold">F = 1</text><text x="95" y="103" text-anchor="end" class="dim">m_F = +1, 0, &#8722;1</text><text x="95" y="116" text-anchor="end" class="dim">（简并）</text><line class="lvl" x1="105" y1="260" x2="285" y2="260"/><text x="95" y="268" text-anchor="end" font-weight="bold">F = 0</text><text x="95" y="283" text-anchor="end" class="dim">m_F = 0</text><line x1="195" y1="104" x2="195" y2="236" stroke="var(--md-accent-fg-color)" stroke-width="1.6"/><polygon points="195,244 190,232 200,232" fill="var(--md-accent-fg-color)"/><polygon points="195,96 190,108 200,108" fill="var(--md-accent-fg-color)"/><text x="207" y="170" text-anchor="start" class="dim">21 厘米跃迁</text><text x="207" y="185" text-anchor="start" class="dim">1.42 GHz</text><text x="195" y="330" text-anchor="middle" font-weight="bold">B = 0</text><text x="535" y="330" text-anchor="middle" font-weight="bold">B &gt; 0（弱场）</text><line class="lvl" x1="465" y1="50" x2="625" y2="50"/><text x="635" y="55" text-anchor="start" font-weight="bold">m_F = +1</text><line class="lvl" x1="465" y1="95" x2="625" y2="95"/><text x="635" y="100" text-anchor="start" font-weight="bold">m_F = 0</text><line class="lvl" x1="465" y1="140" x2="625" y2="140"/><text x="635" y="145" text-anchor="start" font-weight="bold">m_F = &#8722;1</text><line class="lvl" x1="465" y1="260" x2="625" y2="260"/><text x="635" y="265" text-anchor="start" font-weight="bold">F = 0, m_F = 0</text><path class="br" d="M285,80 C385,80 385,50 465,50"/><path class="br" d="M285,80 C385,80 385,95 465,95"/><path class="br" d="M285,80 C385,80 385,140 465,140"/><path class="guide" d="M285,260 C375,260 375,260 465,260"/><text x="395" y="40" text-anchor="middle" class="dim">+g_F m_F &#956;_B B</text><text x="395" y="150" text-anchor="middle" class="dim">&#8722;g_F m_F &#956;_B B</text><text x="395" y="105" text-anchor="middle" class="dim">无一阶移动</text><text x="365" y="360" text-anchor="middle" class="note">弱场一阶图像，非按比例。劈裂本身不保证所有跃迁都被允许——</text><text x="365" y="376" text-anchor="middle" class="note">选择定则（&#916;m_F = 0, &#177;1）决定哪些跃迁发生。微小的更高阶移动同样存在。</text></svg>
</div>

*三条分支从单根 \(F = 1\) 线分出；两个 \(m_F = 0\) 态在一阶上几乎不动。这张图附两个提醒。其一，能级多了不等于允许的跃迁多了——选择定则（\(\Delta m_F = 0, \pm1\)）仍决定光子能驱动哪些跃迁。其二，这是弱场一阶图像：微小的更高阶移动同样存在。*

## 3. 共振：翻转磁针

进动还有一层后果，对时钟而言是最深的一层。在恒定场 \(B\) 之上，叠加一个在横向平面振荡的弱场 \(B_1 \cos(\omega t)\)。当 \(\omega\) 与拉莫尔频率一致，振荡力矩每个周期都朝同一方向推磁矩，进动角不断增大——磁矩最终指向相反方向。（这是量子自旋态取向的改变，不是固体磁针的机械转动。）这就是**磁共振**，与按秋千自己的节奏推秋千是同一类物理（[1.1 页](../foundations/oscillations-waves-and-resonance.md)）。

量子表述完全一致：以恰好等于能级间距的频率振荡的场，驱动两个阶梯之间的跃迁：

\[
h\nu = \Delta E.
\tag{6}
\]

在氢钟里这不是比喻——但两个频率必须分开。腔场振荡的 \(1.420\ \mathrm{GHz}\) 是自由原子的**超精细跃迁频率**，两能级系统自身的属性。而**拉莫尔频率** \(\omega_L = |\gamma|B\) 是单个自旋置于外加场中的进动速率；在氢钟内部的弱场里它要小得多——是千赫兹，不是吉赫兹。在氢钟里，腔场以*跃迁*频率振荡，正是这场共振把高能态原子翻成低能态原子，一个光子接一个光子、步调一致。

## 4. 这对时钟意味着什么

这些效应在氢钟里有直接的实用价值。[下一页](from-a-quiet-atom-to-a-ticking-clock.md)的态选择磁铁利用原子对磁场梯度的不同响应分拣原子：两个超精细态漂向弱场、被聚焦，另外两个漂离。磁屏蔽保护时钟免受杂散场影响——杂散场会移动跃迁频率。腔内被有意施加一个小的受控场（C 场），它对时钟频率的影响通过几组场强下的运行来测量并扣除。

## 来源

- NIST——基本物理常数：[https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
