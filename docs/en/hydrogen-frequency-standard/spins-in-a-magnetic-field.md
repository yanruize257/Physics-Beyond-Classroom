# Spins in a Magnetic Field: Precession and the Zeeman Effect

*A magnetic moment in a magnetic field precesses around the field direction. The quantized version of this effect — the Zeeman splitting — underlies the state selection and magnetic shielding used in the hydrogen maser.*

## 1. A needle that precesses

Start with a familiar sight: a spinning top. Tip it while it spins and it does not fall — the top's axis circles slowly around the vertical. That circling is **precession**, and its origin is a torque on a spinning body. (One difference: the top's torque comes from gravity, the magnet's from the field; the geometry is the same.)

A magnetic moment \(\mu\) in a field \(B\) feels a torque

\[
\tau = \mu \times B.
\tag{1}
\]

Spin comes with a magnetic moment proportional to the spin angular momentum \(S\) — an intrinsic quantum property, not the field of a mechanically spinning charged ball — and the torque changes \(S\). (Here \(S\) denotes the spin; \(L\) is conventionally reserved for orbital angular momentum.) Written as an equation of motion for the moment itself,

\[
\frac{d\mu}{dt} = \gamma\,\mu \times B,
\tag{2}
\]

where \(\gamma\) (the gyromagnetic ratio) carries the proportionality. The solution is not "snap into line" but a steady **precession** about the field direction, at the **Larmor frequency**

\[
\boxed{\omega_L = |\gamma|\, B}
\tag{3}
\]

Here is the whole reason, in words rather than algebra: \(d\mu/dt\) is always perpendicular to \(\mu\), so the moment's length never changes; and the component along the field never changes either, since the torque has no part along \(B\). The only motion left to the moment is to circle around the field direction — which is exactly precession. The sense of the circling depends on the sign of \(\gamma\); the frequency is \(|\gamma|B\).

For the electron spin, the Larmor frequency is

\[
\omega_L = \frac{g_e\, eB}{2m_e} \approx \frac{eB}{m_e},
\tag{4}
\]

since \(g_e \approx 2\).

??? example "Worked numbers"

    In \(B = 1\ \mu\mathrm{T}\), a field weaker than the Earth's:

    \[
    f_L^{\text{electron}} = \frac{eB}{2\pi m_e}
    = \frac{(1.602\times10^{-19})(1\times10^{-6})}{2\pi(9.109\times10^{-31})}
    \approx 28\ \mathrm{kHz}.
    \]

    The proton's gyromagnetic ratio is \(\gamma_p/2\pi = 42.58\ \mathrm{MHz/T}\):

    \[
    f_L^{\text{proton}} = 42.58\ \mathrm{MHz/T}\times10^{-6}\ \mathrm{T}
    = 42.6\ \mathrm{Hz}.
    \]

    Two magnetic moments in the same field, precessing at very different rates.

## 2. The ladder in a field: the Zeeman effect

Precession is the classical picture; the quantized version is a shift of the energy rungs. A magnetic moment's energy in a field is \(E = -\mu \cdot B\). In a **weak** field, each hydrogen hyperfine state gains a first-order energy correction

\[
\boxed{\Delta E = +\,g_F\, m_F\, \mu_B B}
\tag{5}
\]

where \(m_F\) is the projection of the total angular momentum along the chosen axis. One caution, stated up front: equation (5) is a first-order, weak-field statement. In strong fields the levels behave differently, and even in weak fields there are small higher-order corrections — the formula is the leading approximation, not the last word.

The mind-map version of the splitting looks like this (simplified, not to scale):

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -30 740 430" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Zeeman splitting of the hydrogen hyperfine levels"><style>.lvl { stroke: currentColor; stroke-width: 3; }.br { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.guide { fill: none; stroke: currentColor; stroke-width: 1.2; stroke-dasharray: 4 3; opacity: .55; }text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }.note { font-size: 11.5px; opacity: .65; font-style: italic; }</style><line class="lvl" x1="105" y1="80" x2="285" y2="80"/><text x="95" y="88" text-anchor="end" font-weight="bold">F = 1</text><text x="95" y="103" text-anchor="end" class="dim">m_F = +1, 0, &#8722;1</text><text x="95" y="116" text-anchor="end" class="dim">(degenerate)</text><line class="lvl" x1="105" y1="260" x2="285" y2="260"/><text x="95" y="268" text-anchor="end" font-weight="bold">F = 0</text><text x="95" y="283" text-anchor="end" class="dim">m_F = 0</text><line x1="195" y1="104" x2="195" y2="236" stroke="var(--md-accent-fg-color)" stroke-width="1.6"/><polygon points="195,244 190,232 200,232" fill="var(--md-accent-fg-color)"/><polygon points="195,96 190,108 200,108" fill="var(--md-accent-fg-color)"/><text x="207" y="170" text-anchor="start" class="dim">21-cm transition</text><text x="207" y="185" text-anchor="start" class="dim">1.42 GHz</text><text x="195" y="330" text-anchor="middle" font-weight="bold">B = 0</text><text x="535" y="330" text-anchor="middle" font-weight="bold">B &gt; 0 (weak field)</text><line class="lvl" x1="465" y1="50" x2="625" y2="50"/><text x="635" y="55" text-anchor="start" font-weight="bold">m_F = +1</text><line class="lvl" x1="465" y1="95" x2="625" y2="95"/><text x="635" y="100" text-anchor="start" font-weight="bold">m_F = 0</text><line class="lvl" x1="465" y1="140" x2="625" y2="140"/><text x="635" y="145" text-anchor="start" font-weight="bold">m_F = &#8722;1</text><line class="lvl" x1="465" y1="260" x2="625" y2="260"/><text x="635" y="265" text-anchor="start" font-weight="bold">F = 0, m_F = 0</text><path class="br" d="M285,80 C385,80 385,50 465,50"/><path class="br" d="M285,80 C385,80 385,95 465,95"/><path class="br" d="M285,80 C385,80 385,140 465,140"/><path class="guide" d="M285,260 C375,260 375,260 465,260"/><text x="395" y="40" text-anchor="middle" class="dim">+g_F m_F &#956;_B B</text><text x="395" y="150" text-anchor="middle" class="dim">&#8722;g_F m_F &#956;_B B</text><text x="395" y="105" text-anchor="middle" class="dim">no first-order shift</text><text x="365" y="360" text-anchor="middle" class="note">Weak-field, first-order picture, not to scale. The splitting itself does not make every jump allowed &#8212;</text><text x="365" y="376" text-anchor="middle" class="note">selection rules (&#916;m_F = 0, &#177;1) decide which transitions occur. Tiny higher-order shifts exist too.</text></svg>
</div>

*Three branches spread out of the single \(F = 1\) line; the two \(m_F = 0\) states barely move at first order. Two warnings belong to this picture. First, more levels do not mean more allowed jumps — selection rules (\(\Delta m_F = 0, \pm1\)) still decide which transitions a photon can drive. Second, this is the weak-field, first-order picture: tiny higher-order shifts exist too.*

## 3. Resonance: flipping the needle

Precession has one more consequence, and it is the deepest one for the clock. Apply, on top of the steady field \(B\), a weak field \(B_1 \cos(\omega t)\) oscillating in the transverse plane. When \(\omega\) matches the Larmor frequency, the oscillating torque pushes the moment in the same sense each cycle, and the precession angle grows steadily — the moment ends up pointing the opposite way. (This is a change of orientation of the quantum spin state, not the mechanical rotation of a solid needle.) This is **magnetic resonance**, the same physics as pushing a swing at its own rate ([page 1.1](../foundations/oscillations-waves-and-resonance.md)).

The quantum statement is identical: a field oscillating at exactly the level spacing drives transitions between the two rungs,

\[
h\nu = \Delta E.
\tag{6}
\]

In the hydrogen maser this is not a metaphor — but two frequencies must be kept apart. The \(1.420\ \mathrm{GHz}\) at which the cavity field oscillates is the **hyperfine transition frequency** of the free atom, a property of the two-level system itself. The **Larmor frequency** \(\omega_L = |\gamma|B\), by contrast, is the precession rate of a single spin placed in an applied field; in the weak fields inside a maser it is far smaller — kilohertz, not gigahertz. In the maser the cavity field oscillates at the *transition* frequency, and it is this resonance that flips upper-state atoms into lower-state atoms, in step, photon by photon.

## 4. What this means for the clock

These effects have direct practical use in the maser. The state-selecting magnet of the [next page](from-a-quiet-atom-to-a-ticking-clock.md) sorts atoms by their response to a field gradient: two hyperfine states drift toward weak field and are focused, the other two drift away. Magnetic shielding protects the clock from stray fields, which would otherwise shift the transition frequency. A small controlled field — the C-field — is applied deliberately inside the cavity, and its effect on the clock frequency is measured by running the maser at several field settings and subtracting it.

## Sources

- NIST — Fundamental Physical Constants: [https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
