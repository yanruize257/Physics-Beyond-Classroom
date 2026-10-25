# Interference, Standing Waves, and Quantization

*This page covers interference between waves, standing waves, and the boundary conditions that turn a continuous wavelength into discrete modes.*

## 1. When waves meet

Two waves of the same frequency, staggered by a phase difference \(\Delta\varphi\):

\[
y_1 = A\sin(kx - \omega t),
\qquad
y_2 = A\sin(kx - \omega t + \Delta\varphi).
\tag{1}
\]

Waves obey superposition: the actual height is the sum. A trigonometric identity (Derivation 1) turns it into

\[
\boxed{y_1 + y_2 = 2A\cos\!\left(\frac{\Delta\varphi}{2}\right)\sin\!\left(kx - \omega t + \frac{\Delta\varphi}{2}\right)}
\tag{2}
\]

— the same wave. The factor \(2A\cos(\Delta\varphi/2)\) in front is the signed superposition coefficient; the non-negative **amplitude** is its magnitude, \(2A|\cos(\Delta\varphi/2)|\), with the sign absorbed into the phase:

- \(\Delta\varphi = 0\): amplitude \(2A\) — constructive interference.
- \(\Delta\varphi = \pi\): amplitude \(0\) — complete cancellation.
- In between: anything between \(0\) and \(2A\).

A phase difference usually comes from a **path difference** \(\Delta x\): travelling one wavelength costs \(2\pi\) of phase, so

\[
\Delta\varphi = 2\pi\,\frac{\Delta x}{\lambda},
\tag{3}
\]

and the condition for constructive versus destructive interference is

\[
\Delta x =
\begin{cases}
m\lambda, & \text{constructive}\\[2pt]
\left(m + \tfrac12\right)\lambda, & \text{destructive},
\end{cases}
\qquad m = 0, 1, 2, \dots
\tag{4}
\]

Two identical waves can double each other or annihilate each other, purely because of how far one travelled relative to the other. This one sentence is the physics behind every interferometer ever built.

??? derivation "Derivation 1 — Adding two waves of the same frequency"

    Use the sum-to-product identity \(\sin a + \sin b = 2\sin\frac{a+b}{2}\cos\frac{a-b}{2}\), with \(a = kx - \omega t\) and \(b = kx - \omega t + \Delta\varphi\):

    \[
    y_1 + y_2
    = A\left[\sin(kx - \omega t) + \sin(kx - \omega t + \Delta\varphi)\right]
    \]

    \[
    = 2A\sin\!\left(kx - \omega t + \frac{\Delta\varphi}{2}\right)
    \cos\!\left(-\frac{\Delta\varphi}{2}\right),
    \]

    and \(\cos(-x) = \cos x\) gives equation (2). The new amplitude \(2A\cos(\Delta\varphi/2)\) depends only on the stagger.

## 2. Standing waves

Now send two identical waves in *opposite* directions. Their sum — shown in full, this is the page's central step:

\[
y_1 + y_2 = A\left[\sin(kx - \omega t) + \sin(kx + \omega t)\right]
\]

\[
\boxed{\;= 2A\sin(kx)\cos(\omega t)\;}
\tag{5}
\]

Space and time have separated: every point oscillates in place with amplitude \(2A\sin(kx)\). **Nodes** sit where \(\sin(kx) = 0\), **antinodes** midway between them:

\[
x_{\text{node}} = m\,\frac{\lambda}{2},
\qquad
x_{\text{antinode}} = \left(m + \tfrac12\right)\frac{\lambda}{2},
\qquad m = 0, 1, 2, \dots
\tag{6}
\]

The overall pattern does not propagate through space: the nodes and the amplitude pattern stay fixed, while each point of the medium keeps oscillating about its equilibrium. Standing waves arise wherever a wave meets its own reflection — guitar strings, organ pipes, microwave cavities — because a reflected wave is exactly a wave travelling the opposite way.

## 3. What fits

A standing wave is not free to have any shape. A string of length \(L\), fixed at both ends, must have nodes at both ends:

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

Only integer numbers of half-wavelengths fit. For a real instrument, the wave speed is set by the string's tension and its mass: tighten a guitar string and the note rises, as every guitarist knows.



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 320" style="width:100%;max-width:480px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Standing wave harmonics on a string fixed at both ends"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.string { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.5; }.wall { stroke: currentColor; stroke-width: 4; }.node { fill: var(--md-accent-fg-color); }</style><line class="wall" x1="60" y1="50" x2="60" y2="110"/><line class="wall" x1="300" y1="50" x2="300" y2="110"/><path class="string" d="M60,80 Q180,-20 300,80"/><text x="315" y="75" text-anchor="start">n = 1</text><text x="315" y="92" text-anchor="start" class="dim">&#955;&#8321; = 2L</text><line class="wall" x1="60" y1="130" x2="60" y2="190"/><line class="wall" x1="300" y1="130" x2="300" y2="190"/><path class="string" d="M60,160 Q120,80 180,160 Q240,240 300,160"/><circle class="node" cx="180" cy="160" r="4"/><text x="315" y="155" text-anchor="start">n = 2</text><text x="315" y="172" text-anchor="start" class="dim">&#955;&#8322; = L</text><text x="187" y="152" text-anchor="start" class="dim">node</text><line class="wall" x1="60" y1="210" x2="60" y2="270"/><line class="wall" x1="300" y1="210" x2="300" y2="270"/><path class="string" d="M60,240 Q100,170 140,240 Q180,310 220,240 Q260,170 300,240"/><circle class="node" cx="140" cy="240" r="4"/><circle class="node" cx="220" cy="240" r="4"/><text x="315" y="235" text-anchor="start">n = 3</text><text x="315" y="252" text-anchor="start" class="dim">&#955;&#8323; = 2L/3</text><text x="180" y="305" text-anchor="middle" class="dim">only whole numbers of half-wavelengths fit: L = n &#183; &#955;_n/2</text></svg>

*Three harmonics of a string fixed at both ends. Every higher harmonic squeezes one more half-wavelength into the same length — which is exactly why only certain frequencies are possible. The fundamental (\(n = 1\)) sets the note — shorten \(L\) or raise the tension and the pitch rises; the harmonics \(f_2, f_3, \dots\) set the tone, because timbre is a harmonic recipe.*

??? derivation "Derivation 2 — The harmonic series (equation 8)"

    \(\sin(kL) = 0\) requires \(kL = n\pi\). With \(k = 2\pi/\lambda_n\):

    \[
    \frac{2\pi L}{\lambda_n} = n\pi
    \quad\Longrightarrow\quad
    \lambda_n = \frac{2L}{n},
    \]

    and \(f_n = v/\lambda_n = n v/(2L)\). The \(n\)-th pattern squeezes \(n\) half-wavelengths into \(L\).

Boundary conditions have turned a continuous quantity into a discrete set — the simplest example of quantization. The same mathematics appears again in quantum mechanics, with a different meaning: on a string the wave is a real displacement of real material, while in quantum mechanics the "wave" is a wave function: a probability amplitude, whose squared magnitude is the probability density ([next page](wave-functions-and-quantum-states.md)). The mathematics is shared; the physics is different.
