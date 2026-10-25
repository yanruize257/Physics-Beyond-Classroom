# 干涉、驻波与量子化

*本页介绍波的干涉、驻波，以及把连续波长变成离散模式的边界条件。*

## 1. 波相遇时

两列同频率的波，相位错开 \(\Delta\varphi\)：

\[
y_1 = A\sin(kx - \omega t),
\qquad
y_2 = A\sin(kx - \omega t + \Delta\varphi).
\tag{1}
\]

波服从叠加原理：实际高度就是两者之和。一个三角恒等式（推导 1）把它化成

\[
\boxed{y_1 + y_2 = 2A\cos\!\left(\frac{\Delta\varphi}{2}\right)\sin\!\left(kx - \omega t + \frac{\Delta\varphi}{2}\right)}
\tag{2}
\]

——同一列波。前系数 \(2A\cos(\Delta\varphi/2)\) 是带符号的叠加系数；非负的**振幅**是它的模 \(2A|\cos(\Delta\varphi/2)|\)，负号并入相位：

- \(\Delta\varphi = 0\)：振幅 \(2A\)——相长干涉。
- \(\Delta\varphi = \pi\)：振幅 \(0\)——完全抵消。
- 介于其间：振幅在 \(0\) 与 \(2A\) 之间。

相位差通常来自**路程差** \(\Delta x\)：走过一个波长花掉 \(2\pi\) 的相位，所以

\[
\Delta\varphi = 2\pi\,\frac{\Delta x}{\lambda},
\tag{3}
\]

相长与相消的条件是

\[
\Delta x =
\begin{cases}
m\lambda, & \text{相长}\\[2pt]
\left(m + \tfrac12\right)\lambda, & \text{相消},
\end{cases}
\qquad m = 0, 1, 2, \dots
\tag{4}
\]

两列完全相同的波可以让彼此翻倍，也可以让彼此湮灭，原因仅仅是一列比另一列多走了多少路。这一句话，就是历史上所有干涉仪的全部物理。

??? derivation "推导 1——同频率两波相加"

    用和差化积公式 \(\sin a + \sin b = 2\sin\frac{a+b}{2}\cos\frac{a-b}{2}\)，取 \(a = kx - \omega t\)，\(b = kx - \omega t + \Delta\varphi\)：

    \[
    y_1 + y_2
    = A\left[\sin(kx - \omega t) + \sin(kx - \omega t + \Delta\varphi)\right]
    \]

    \[
    = 2A\sin\!\left(kx - \omega t + \frac{\Delta\varphi}{2}\right)
    \cos\!\left(-\frac{\Delta\varphi}{2}\right),
    \]

    而 \(\cos(-x) = \cos x\)，即得方程 (2)。新振幅 \(2A\cos(\Delta\varphi/2)\) 只取决于错开的程度。

## 2. 驻波

现在让两列完全相同的波沿*相反*方向传播。它们的和——完整展示，这是本页的核心一步：

\[
y_1 + y_2 = A\left[\sin(kx - \omega t) + \sin(kx + \omega t)\right]
\]

\[
\boxed{\;= 2A\sin(kx)\cos(\omega t)\;}
\tag{5}
\]

空间与时间分开了：每个点原地振荡，振幅为 \(2A\sin(kx)\)。**波节**位于 \(\sin(kx) = 0\) 处，**波腹**在两节之间：

\[
x_{\text{节}} = m\,\frac{\lambda}{2},
\qquad
x_{\text{腹}} = \left(m + \tfrac12\right)\frac{\lambda}{2},
\qquad m = 0, 1, 2, \dots
\tag{6}
\]

没有任何东西在移动；图案停留在原地。波遇到自己的反射就会形成驻波——吉他弦、风琴管、微波腔——因为反射波正是沿相反方向传播的同一列波。

## 3. 什么装得下

驻波不能有任意形状。一根长为 \(L\)、两端固定的弦，两端都必须是波节：

\[
\sin(kL) = 0
\quad\Longrightarrow\quad
kL = n\pi,
\qquad n = 1, 2, 3, \dots
\tag{7}
\]

\[
\lambda_n = \frac{2L}{n},
\qquad
\boxed{f_n = \frac{v}{\lambda_n} = n\,\frac{v}{2L}}
\tag{8}
\]

只有整数个半波长装得下。对真实的乐器，波速由弦的张力与质量决定：拧紧吉他弦，音就升高，每位吉他手都知道。



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 320" style="width:100%;max-width:480px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="两端固定琴弦的驻波泛音"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.string { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.5; }.wall { stroke: currentColor; stroke-width: 4; }.node { fill: var(--md-accent-fg-color); }</style><line class="wall" x1="60" y1="50" x2="60" y2="110"/><line class="wall" x1="300" y1="50" x2="300" y2="110"/><path class="string" d="M60,80 Q180,-20 300,80"/><text x="315" y="75" text-anchor="start">n = 1</text><text x="315" y="92" text-anchor="start" class="dim">&#955;&#8321; = 2L</text><line class="wall" x1="60" y1="130" x2="60" y2="190"/><line class="wall" x1="300" y1="130" x2="300" y2="190"/><path class="string" d="M60,160 Q120,80 180,160 Q240,240 300,160"/><circle class="node" cx="180" cy="160" r="4"/><text x="315" y="155" text-anchor="start">n = 2</text><text x="315" y="172" text-anchor="start" class="dim">&#955;&#8322; = L</text><text x="187" y="152" text-anchor="start" class="dim">波节</text><line class="wall" x1="60" y1="210" x2="60" y2="270"/><line class="wall" x1="300" y1="210" x2="300" y2="270"/><path class="string" d="M60,240 Q100,170 140,240 Q180,310 220,240 Q260,170 300,240"/><circle class="node" cx="140" cy="240" r="4"/><circle class="node" cx="220" cy="240" r="4"/><text x="315" y="235" text-anchor="start">n = 3</text><text x="315" y="252" text-anchor="start" class="dim">&#955;&#8323; = 2L/3</text><text x="180" y="305" text-anchor="middle" class="dim">只有整数个半波长装得下：L = n &#183; &#955;_n/2</text></svg>

*两端固定琴弦的三个泛音。每高一个泛音，就在同一长度里多挤进一个半波长——这正是只有某些频率才被允许的原因。基频（\(n = 1\)）定音高——缩短 \(L\) 或加大张力，音就升高；泛音 \(f_2, f_3, \dots\) 定音色，因为音色就是一份泛音配方。*

??? derivation "推导 2——泛音序列（方程 8）"

    \(\sin(kL) = 0\) 要求 \(kL = n\pi\)。代入 \(k = 2\pi/\lambda_n\)：

    \[
    \frac{2\pi L}{\lambda_n} = n\pi
    \quad\Longrightarrow\quad
    \lambda_n = \frac{2L}{n},
    \]

    而 \(f_n = v/\lambda_n = n v/(2L)\)。第 \(n\) 个模式把 \(n\) 个半波长挤进 \(L\)。

边界条件把连续量变成了离散集合——这是量子化最简单的例子。同样的数学在量子力学里再次出现，但含义不同：在弦上，波是真实材料的真实位移；而在量子力学里，"波"是波函数：一个概率幅，其模平方是概率密度（[下一页](wave-functions-and-quantum-states.md)）。数学相通，物理不同。
