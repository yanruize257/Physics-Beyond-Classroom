# Oscillations, Waves, and Resonance

*This page covers simple harmonic motion, travelling waves, and resonance — the basic vocabulary used throughout the site.*

## 1. Simple harmonic motion

A simple model of an oscillator is a mass attached to a spring. Its restoring force is proportional to the displacement:

\[
F = -kx.
\tag{1}
\]

Here \(k\) is the **spring constant** — the spring's stiffness, in newtons per metre. (One notation warning for later: the same letter \(k\) will mean the *wave-number* once waves appear; context tells the two apart.) Newton's second law, \(\ddot{x} = F/m\), becomes

\[
\ddot{x} = -\frac{k}{m}\,x.
\tag{2}
\]

The solutions are sine waves — the defining feature of **simple harmonic motion** (SHM):

\[
\boxed{x(t) = A\cos(\omega t + \varphi_0),
\qquad
\omega = \sqrt{\frac{k}{m}}}
\tag{3}
\]

\(A\) is the amplitude, \(\varphi_0\) the initial phase, and \(\omega = 2\pi f\) the angular frequency. The frequency depends only on the spring and the mass — never on the amplitude — and the total energy is constant:

\[
E = \tfrac12 kx^2 + \tfrac12 mv^2 = \tfrac12 kA^2.
\tag{4}
\]

Equation (2) has a simple property: *two derivatives return the function itself*, up to a constant. Sine and cosine both qualify:

\[
\frac{d^2}{dt^2}\sin\omega t = -\omega^2\sin\omega t,
\qquad
\frac{d^2}{dt^2}\cos\omega t = -\omega^2\cos\omega t.
\tag{5}
\]

So does the complex exponential — by Euler's formula \(e^{i\theta} = \cos\theta + i\sin\theta\) (with \(i^2 = -1\)):

\[
\frac{d^2}{dt^2}\,e^{i\omega t}
= (i\omega)^2 e^{i\omega t}
= -\omega^2 e^{i\omega t}.
\tag{6}
\]

The exponential is a point moving around the unit circle; its real and imaginary parts are \(\cos\omega t\) and \(\sin\omega t\). Any combination of two independent solutions is again a solution, so the general solution carries two constants, fixed by the initial position and velocity:

\[
x(t) = A\cos\omega t + B\sin\omega t
= \operatorname{Re}\!\left[C e^{i\omega t}\right].
\tag{7}
\]

A pendulum at small angles approximately obeys the same equation. With arc displacement \(x = L\theta\), the restoring force is \(F = -mg\sin\theta \approx -mg\,\theta = -(mg/L)\,x\) — equation (1) with \(k \to mg/L\):

\[
\omega = \sqrt{\frac{g}{L}},
\qquad
T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L}{g}},
\qquad
f = \frac{1}{T}.
\tag{8}
\]

??? derivation "The pendulum at small angles"

    For small \(\theta\) (in radians), \(\sin\theta \approx \theta\). With \(x = L\theta\):

    \[
    F = -mg\sin\theta \approx -mg\,\theta = -\frac{mg}{L}\,x,
    \]

    which is equation (1) with \(k = mg/L\). Therefore

    \[
    \omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{g}{L}},
    \qquad
    T = \frac{2\pi}{\omega} = 2\pi\sqrt{\frac{L}{g}}.
    \]

The **phase** locates the oscillation within its cycle, \(\varphi(t) = \omega t + \varphi_0\), and a phase difference between two oscillators is a time offset:

\[
\Delta t = \frac{\Delta\varphi}{2\pi f}.
\tag{9}
\]

Two \(1\ \mathrm{Hz}\) pendulums, one a quarter-cycle ahead (\(\Delta\varphi = \pi/2\)), are \(0.25\ \mathrm{s}\) apart.

## 2. Waves: oscillation that travels

Oscillation need not stay in one place. A wave on a rope, frozen at one instant, is

\[
y(x) = A\sin(kx),
\qquad
k = \frac{2\pi}{\lambda},
\tag{10}
\]

with \(A\) the amplitude, \(\lambda\) the wavelength, \(k\) the wavenumber (radians of phase per metre). As time runs, the pattern slides:

\[
y(x,t) = A\sin(kx - \omega t),
\qquad
\omega = 2\pi f.
\tag{11}
\]

Because the pattern advances one wavelength per period,

\[
v = \frac{\lambda}{T} = \lambda f = \frac{\omega}{k}.
\tag{12}
\]

Rope example: \(\lambda = 0.5\ \mathrm{m}\), \(f = 2\ \mathrm{Hz}\) \(\Rightarrow\) \(v = 1\ \mathrm{m/s}\). Each point of the wave carries a phase \(\varphi = kx - \omega t\): a travelling wave is a clock in motion, crests sweeping past a fixed observer at a rate of \(f\) per second.

## 3. Damping, driving, and resonance

A real swing does not swing forever. Air resistance and the friction in the chain drain a little energy each cycle, so the amplitude shrinks and shrinks — **damping**:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 230" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Damped oscillation: the amplitude decays cycle after cycle"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.ax { stroke: currentColor; stroke-width: 1.4; }.w { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.env { fill: none; stroke: currentColor; stroke-width: 1.1; stroke-dasharray: 5 4; opacity: .6; }</style><line class="ax" x1="40" y1="130" x2="530" y2="130"/><line class="ax" x1="40" y1="40" x2="40" y2="220"/><text x="528" y="148" text-anchor="end">time</text><text x="48" y="42" text-anchor="start">displacement</text><path class="env" d="M40,40.0 L45,41.8 L50,43.5 L55,45.2 L60,46.9 L65,48.6 L70,50.2 L75,51.8 L80,53.3 L85,54.8 L90,56.3 L95,57.8 L100,59.2 L105,60.6 L110,62.0 L115,63.3 L120,64.6 L125,65.9 L130,67.2 L135,68.5 L140,69.7 L145,70.9 L150,72.0 L155,73.2 L160,74.3 L165,75.4 L170,76.5 L175,77.6 L180,78.6 L185,79.6 L190,80.6 L195,81.6 L200,82.5 L205,83.5 L210,84.4 L215,85.3 L220,86.2 L225,87.1 L230,87.9 L235,88.7 L240,89.6 L245,90.4 L250,91.1 L255,91.9 L260,92.7 L265,93.4 L270,94.1 L275,94.8 L280,95.5 L285,96.2 L290,96.9 L295,97.5 L300,98.2 L305,98.8 L310,99.4 L315,100.0 L320,100.6 L325,101.2 L330,101.8 L335,102.3 L340,102.9 L345,103.4 L350,104.0 L355,104.5 L360,105.0 L365,105.5 L370,106.0 L375,106.4 L380,106.9 L385,107.4 L390,107.8 L395,108.2 L400,108.7 L405,109.1 L410,109.5 L415,109.9 L420,110.3 L425,110.7 L430,111.1 L435,111.5 L440,111.8 L445,112.2 L450,112.5 L455,112.9 L460,113.2 L465,113.6 L470,113.9 L475,114.2 L480,114.5 L485,114.8 L490,115.1 L495,115.4 L500,115.7 L505,116.0 L510,116.3 L515,116.5 L520,116.8 L525,117.1 L530,117.3"/><path class="env" d="M40,220.0 L45,218.2 L50,216.5 L55,214.8 L60,213.1 L65,211.4 L70,209.8 L75,208.2 L80,206.7 L85,205.2 L90,203.7 L95,202.2 L100,200.8 L105,199.4 L110,198.0 L115,196.7 L120,195.4 L125,194.1 L130,192.8 L135,191.5 L140,190.3 L145,189.1 L150,188.0 L155,186.8 L160,185.7 L165,184.6 L170,183.5 L175,182.4 L180,181.4 L185,180.4 L190,179.4 L195,178.4 L200,177.5 L205,176.5 L210,175.6 L215,174.7 L220,173.8 L225,172.9 L230,172.1 L235,171.3 L240,170.4 L245,169.6 L250,168.9 L255,168.1 L260,167.3 L265,166.6 L270,165.9 L275,165.2 L280,164.5 L285,163.8 L290,163.1 L295,162.5 L300,161.8 L305,161.2 L310,160.6 L315,160.0 L320,159.4 L325,158.8 L330,158.2 L335,157.7 L340,157.1 L345,156.6 L350,156.0 L355,155.5 L360,155.0 L365,154.5 L370,154.0 L375,153.6 L380,153.1 L385,152.6 L390,152.2 L395,151.8 L400,151.3 L405,150.9 L410,150.5 L415,150.1 L420,149.7 L425,149.3 L430,148.9 L435,148.5 L440,148.2 L445,147.8 L450,147.5 L455,147.1 L460,146.8 L465,146.4 L470,146.1 L475,145.8 L480,145.5 L485,145.2 L490,144.9 L495,144.6 L500,144.3 L505,144.0 L510,143.7 L515,143.5 L520,143.2 L525,142.9 L530,142.7"/><path class="w" d="M40,40.0 L45,53.6 L50,86.8 L55,130.0 L60,171.5 L65,200.5 L70,209.8 L75,197.8 L80,168.3 L85,130.0 L90,93.2 L95,67.4 L100,59.2 L105,69.9 L110,96.0 L115,130.0 L120,162.7 L125,185.5 L130,192.8 L135,183.3 L140,160.2 L145,130.0 L150,101.0 L155,80.8 L160,74.3 L165,82.7 L170,103.2 L175,130.0 L180,155.7 L185,173.6 L190,179.4 L195,171.9 L200,153.7 L205,130.0 L210,107.2 L215,91.3 L220,86.2 L225,92.8 L230,109.0 L235,130.0 L240,150.2 L245,164.3 L250,168.9 L255,163.0 L260,148.7 L265,130.0 L270,112.1 L275,99.6 L280,95.5 L285,100.7 L290,113.4 L295,130.0 L300,145.9 L305,157.0 L310,160.6 L315,155.9 L320,144.7 L325,130.0 L330,115.9 L335,106.0 L340,102.9 L345,107.0 L350,117.0 L355,130.0 L360,142.5 L365,151.2 L370,154.0 L375,150.4 L380,141.5 L385,130.0 L390,118.9 L395,111.2 L400,108.7 L405,111.9 L410,119.8 L415,130.0 L420,139.8 L425,146.7 L430,148.9 L435,146.1 L440,139.1 L445,130.0 L450,121.3 L455,115.2 L460,113.2 L465,115.8 L470,121.9 L475,130.0 L480,137.7 L485,143.1 L490,144.9 L495,142.6 L500,137.1 L505,130.0 L510,123.1 L515,118.3 L520,116.8 L525,118.8 L530,123.7"/><text x="285" y="200" text-anchor="middle" class="dim">friction keeps draining energy &#8212; the amplitude decays cycle after cycle</text></svg>

*Friction keeps removing energy, cycle after cycle, and the amplitude decays. With no one pushing, every real oscillator eventually comes to rest.*

In the simple **linear viscous-damping model** used here, the drag is proportional to the speed and directed opposite to the velocity — the simplest honest model of friction, and enough to catch the physics. Adding it to Newton's law for the spring gives

\[
m\ddot{x} + b\dot{x} + kx = 0,
\tag{13}
\]

where the \(-b\dot{x}\) term is the friction force. We will not solve this equation in detail — the picture above is a *sketch* of the behaviour it predicts, not a precise solution — but the equation itself is worth reading: every term has a clear physical job, and the friction term is the one that keeps subtracting.

Now push the swing. An external periodic force feeds energy back in, cycle after cycle:

\[
m\ddot{x} + b\dot{x} + kx = F_0\cos(\omega t).
\tag{14}
\]

What happens depends sharply on the driving frequency \(\omega\). Push at the swing's own rate and it climbs higher with every push; push at the wrong rate and your pushes half the time oppose the motion and cancel themselves. Near the natural frequency

\[
\omega_0 = \sqrt{\frac{k}{m}},
\]

the oscillator responds enormously — **resonance** — and the lighter the friction, the sharper this response (for very small damping the peak sits essentially at \(\omega_0\); with stronger friction the peak broadens and shifts slightly, so no single number describes every case).



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Resonance curves for two amounts of damping"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }.ax { stroke: currentColor; stroke-width: 1.5; }.sharp { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.5; }.broad { fill: none; stroke: currentColor; stroke-width: 2; opacity: .6; }</style><line class="ax" x1="50" y1="240" x2="520" y2="240"/><line class="ax" x1="50" y1="240" x2="50" y2="30"/><text x="520" y="260" text-anchor="end">&#969; (driving frequency)</text><text x="40" y="40" text-anchor="start">A(&#969;)</text><path class="sharp" d="M50,238 C110,236 190,200 245,80 C255,45 275,28 290,28 C305,28 325,45 335,80 C390,200 470,236 520,238"/><path class="broad" d="M50,238 C150,236 210,215 245,172 C255,157 325,157 335,172 C370,215 430,236 520,238"/><line x1="290" y1="240" x2="290" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity=".5"/><text x="290" y="16" text-anchor="middle" class="dim">&#969;&#8320; = &#8730;(k/m)</text><text x="360" y="40" text-anchor="start" class="dim" fill="var(--md-accent-fg-color)">small damping &#8594; sharp peak</text><text x="360" y="62" text-anchor="start" class="dim">larger damping &#8594; broad peak</text><text x="280" y="280" text-anchor="middle" class="dim">push far from &#969;&#8320; and almost nothing moves; push at &#969;&#8320; and the response is enormous</text></svg>

*The resonance curve: sharp for small damping, broad for large damping. Think of pushing a swing — the same push, applied at the swing's own rate, builds up height cycle after cycle; applied off-rhythm, it cancels itself.*

Resonance is why a swing rises when you push at its own rate, why an opera singer can shatter a glass, and — most important for this site — why a microwave cavity ([page 2.3](../hydrogen-frequency-standard/from-a-quiet-atom-to-a-ticking-clock.md)) responds only at the frequency it is machined for, and why an atom can be driven at its transition frequency ([pages 2.2–2.3](../hydrogen-frequency-standard/spins-in-a-magnetic-field.md)). A resonant system is a frequency filter.

## 4. Light: a wave in its own right

Light is an oscillation too, with

\[
c = \lambda f,
\tag{15}
\]

where \(c = 299\,792\,458\ \mathrm{m/s}\) is the speed of light **in vacuum**, an exact defined value. But one caution belongs here, because it is a common false shortcut: light's wave nature does **not** follow from the spring. It was established by Maxwell's equations and experiment; SHM contributed only the language — amplitude, frequency, phase — that both share. What transfers is the vocabulary, not the derivation.

??? example "Worked numbers"

    Green light, \(\lambda = 500\ \mathrm{nm}\):

    \[
    f = \frac{c}{\lambda} = \frac{3.0\times10^{8}}{5.0\times10^{-7}} = 6\times10^{14}\ \mathrm{Hz}.
    \]

    Wi-Fi, \(f = 2.4\ \mathrm{GHz}\):

    \[
    \lambda = \frac{c}{f} = \frac{2.998\times10^{8}}{2.4\times10^{9}} \approx 12.5\ \mathrm{cm}.
    \]

One family, one equation: radio (metres), microwaves (centimetres), visible light (\(400\)–\(700\ \mathrm{nm}\)), and gamma rays — the highest-energy, shortest-wavelength members of the family. The three projects of this site live on this map — a hydrogen clock's microwave note, semiconductors probed with visible and ultraviolet light, and gamma rays from space.
