# From Levels to Bands: The Bandgap

*This page explains how atomic energy levels form bands in a crystal, and how the bandgap determines a semiconductor's optical absorption.*

## 1. Levels spread into bands

One hydrogen atom has the ladder \(E_n = -13.6/n^2\ \mathrm{eV}\). Two hydrogen atoms placed close together hybridize: each rung splits into two. Bring \(N \sim 10^{23}\) atoms together into a crystal, and each atomic rung broadens into a **band** of \(N\) levels. The band's width is set not by the atomic rung itself but by how strongly neighbouring atoms' orbitals overlap — a few electron-volts — while the number of levels it holds is \(N\). The spacing between adjacent levels inside a band is therefore

\[
\Delta E_{\text{spacing}} \sim \frac{\text{band width}}{N}
\sim \frac{1\ \mathrm{eV}}{10^{23}}
\approx 10^{-23}\ \mathrm{eV} \approx 0,
\tag{1}
\]

so dense that the band is effectively continuous.

An atomic level has a single well-defined energy; a band is a whole range of energies, and an electron in a crystal can take energies from an effectively continuous range *within* a band — a finite crystal still has discrete states, but spaced far more closely than any measurement can resolve — and none *between* bands. Between the highest filled band (the **valence band**) and the next empty one (the **conduction band**) sits the **bandgap** \(E_g\), the solid's most important number:

\[
E_g = E_{\text{conduction, min}} - E_{\text{valence, max}}.
\tag{2}
\]

The Pauli principle sorts the electrons: each level holds two (spin up and down), so the \(N\)-rung bands fill from the bottom. What fills decides everything: a half-filled band conducts (a metal); a full valence band separated by a gap from an empty conduction band gives an insulator or a semiconductor.

## 2. The three kinds of solid

A metal conducts either because its top band is only partially filled, or because two bands overlap, so no gap opens at the Fermi level — in both cases \(E_g = 0\). Insulators and semiconductors share the same structure — a full valence band, an empty conduction band, and a gap between them:

\[
\text{metal: } E_g = 0,
\qquad
\text{semiconductor or insulator: } E_g > 0.
\tag{3}
\]

The boundary between the last two is a matter of behaviour, not a sharp number. A semiconductor is a gapped material whose conduction can be *deliberately achieved* — thermally, optically, or by doping — while an insulator is one whose gap is too large for such control in practice. There is no universal dividing line: wide-bandgap semiconductors comfortably exceed the \(3\ \mathrm{eV}\) that older textbooks once used as the border — GaN sits near \(3.4\ \mathrm{eV}\), SiC between roughly \(2.4\) and \(3.3\ \mathrm{eV}\) depending on its crystal form, and BiOCl (page 3.2) near \(3.2\)–\(3.5\ \mathrm{eV}\). Classification follows what the material does, not a single threshold.

In a semiconductor, the heat of the room occasionally lifts an electron across the gap, leaving behind a **hole** — a missing electron that behaves like a positive charge. (The analogy is a vacant seat in a crowded hall: the seat itself does not move, but the vacancy travels as people shift over.) Conduction is the motion of these two partners, and it is extremely sensitive to the gap: this is why silicon (\(1.1\ \mathrm{eV}\)) and diamond (\(5.5\ \mathrm{eV}\)) — crystals sharing the same diamond-cubic structure but with very different gaps — conduct so differently.

## 3. Electrons in a crystal: waves again

The electron in a crystal is still the wave electron of [the foundations](../foundations/wave-functions-and-quantum-states.md) — but now the "box" is the periodic lattice of ions. Solving the wave equation in this periodic lattice gives each state an energy that depends on its momentum-like label \(k\): the band structure, drawn below. (The detailed mathematics belongs to university solid-state physics; here we use its picture, not its formulas.) Two words about the picture's axes. The vertical axis is energy, as usual. The horizontal axis is \(k\), the wave-vector of the electron's wave — a momentum-like quantity, the **crystal momentum**, measuring how rapidly the wave pattern oscillates across the lattice. Each point on a curve is one allowed state: its height is the state's energy, its horizontal position its wave-vector. A photon can lift an electron from valence to conduction band only if *both* energy and momentum are conserved. For a **direct** transition (same \(k\) in both bands):

\[
h\nu = E_c(k) - E_v(k),
\qquad
\Delta k \approx 0.
\tag{4}
\]

The **fundamental bandgap** is more general than equation (4): it is the smallest energy needed to move an electron from *anywhere* in the valence band to *anywhere* in the conduction band,

\[
E_g = \min_k E_c(k) - \max_k E_v(k),
\tag{5}
\]

the definition already used in equation (2). When the conduction minimum and the valence maximum sit at the *same* \(k\), the gap is **direct**, and \(E_g\) equals the same-\(k\) difference \(E_c(k) - E_v(k)\) at that point — a photon alone does the job. When they sit at *different* \(k\), the gap is **indirect**: the smallest same-\(k\) difference, \(\min_k[E_c(k) - E_v(k)]\), is *larger* than \(E_g\), and the transition needs a phonon, which carries the missing momentum and a small energy:

\[
h\nu = E_g \pm \hbar\Omega,
\tag{6}
\]

with \(\hbar\Omega\) the phonon energy. Two geometries result:

- **Direct gap** — valence maximum and conduction minimum at the same \(k\): no phonon is needed.
- **Indirect gap** — the minimum sits at a different \(k\): the transition needs the phonon's help, making it far less likely.

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 300" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Direct and indirect band gaps in E versus k diagrams"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.ax { stroke: currentColor; stroke-width: 1.4; }.vb { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.cb { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.arrow { stroke: currentColor; stroke-width: 1.6; }.phon { stroke: currentColor; stroke-width: 1.3; stroke-dasharray: 3 3; opacity: .7; }</style><text x="70" y="22" font-weight="bold">direct gap</text><line class="ax" x1="40" y1="250" x2="290" y2="250"/><line class="ax" x1="40" y1="250" x2="40" y2="30"/><text x="286" y="268" text-anchor="end" class="dim">k</text><text x="28" y="34" text-anchor="end" class="dim">E</text><path class="vb" d="M40,220 C100,170 130,122 165,120 C200,122 230,170 290,220"/><path class="cb" d="M40,27 C100,45 130,72 165,75 C200,72 230,45 290,27"/><text x="50" y="66" text-anchor="start" class="dim">conduction (&#8746;)</text><text x="46" y="238" text-anchor="start" class="dim">valence (&#8745;)</text><line class="arrow" x1="165" y1="120" x2="165" y2="81"/><polygon points="165,73 161,85 169,85" fill="currentColor"/><text x="176" y="100" text-anchor="start" class="dim">h&#957; = E_g</text><line x1="165" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><line x1="165" y1="75" x2="200" y2="75" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><text x="158" y="96" text-anchor="end" class="dim">E_g</text><text x="390" y="22" font-weight="bold">indirect gap</text><line class="ax" x1="360" y1="250" x2="610" y2="250"/><line class="ax" x1="360" y1="250" x2="360" y2="30"/><text x="606" y="268" text-anchor="end" class="dim">k</text><text x="348" y="34" text-anchor="end" class="dim">E</text><path class="vb" d="M360,156 C400,135 430,122 460,120 C490,124 540,160 610,201"/><path class="cb" d="M360,11 C420,35 490,62 545,70 C580,68 600,65 610,63"/><text x="498" y="34" text-anchor="start" class="dim">conduction</text><text x="375" y="178" text-anchor="start" class="dim">valence</text><line class="arrow" x1="460" y1="120" x2="460" y2="50"/><polygon points="460,44 456,56 464,56" fill="currentColor"/><text x="430" y="107" text-anchor="end" class="dim">h&#957; &gt; E_g</text><line class="phon" x1="460" y1="48" x2="545" y2="70"/><text x="545" y="110" text-anchor="start" class="dim">photon + phonon</text><line x1="460" y1="120" x2="585" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><line x1="545" y1="70" x2="585" y2="70" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity=".5"/><text x="590" y="98" text-anchor="start" class="dim">E_g</text><text x="320" y="292" text-anchor="middle" class="dim" opacity=".55">Simplified model, not to scale.</text></svg>
</div>

*Direct gap: the photon alone supplies the energy. Indirect gap: the transition also needs a phonon, which carries the momentum difference.*

This distinction matters in practice: it strongly affects how efficiently electrons and holes recombine radiatively, and therefore how suitable a semiconductor is as a laser gain medium. It also leaves its fingerprint in the absorption spectrum, the subject of the next page.

## 4. Absorption: what the light sees

In the simplified model — which ignores excitons and other extra absorption channels — light below the gap finds no interband transition with enough energy, so the crystal does not absorb through that channel:

\[
h\nu < E_g:
\qquad
\alpha(\nu) \approx 0.
\tag{7}
\]

A real crystal departs from this ideal: excitons bound just below the gap, defect states inside it, and disorder all open weak sub-gap absorption channels — the subject of page 3.3.

An **exciton** deserves its own picture, because it exists even in a flawless crystal. When a photon lifts an electron across the gap, the electron and the hole it leaves behind attract each other — opposite charges — and can bind into a pair held together near their common centre, a miniature, short-lived "hydrogen atom" inside the crystal:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" style="width:100%;max-width:560px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="An exciton: an electron bound to its hole"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.hole { fill: var(--md-accent-fg-color); }.el { fill: currentColor; }.ring { fill: none; stroke: currentColor; stroke-width: 1.4; stroke-dasharray: 5 4; opacity: .7; }</style><circle class="hole" cx="260" cy="100" r="16"/><text x="260" y="105" text-anchor="middle" font-weight="bold" fill="var(--md-accent-fg-color)">+</text><circle class="ring" cx="260" cy="100" r="62"/><circle class="el" cx="322" cy="100" r="7"/><text x="322" y="122" text-anchor="middle" class="dim">&#8722;</text><text x="260" y="62" text-anchor="middle" class="dim">hole (+)</text><text x="322" y="84" text-anchor="middle" class="dim">electron (&#8722;)</text><text x="260" y="204" text-anchor="middle" class="dim" opacity=".55">Simplified picture, not to scale.</text></svg>

*An electron bound to its hole by Coulomb attraction — an exciton. The dashed ring is only a sketch that the pair is bound, not a classical orbit. The bound pair costs slightly less energy than a completely free electron and hole, so exciton absorption opens just below the gap, even in a perfect crystal. (Simplified picture, not to scale; no binding-energy theory is needed here.)*

Because the bound pair needs slightly less energy than a free electron and hole, photons a little *below* \(E_g\) can already be absorbed — one reason a real absorption edge is never perfectly sharp. Excitons are not defects; they are a fact of even the cleanest crystal.

Above the gap, every photon whose energy matches an allowed transition can lift an electron. The absorption coefficient — the fraction of intensity lost per unit length,

\[
I(x) = I_0\, e^{-\alpha x},
\tag{8}
\]

— turns on steeply at \(h\nu = E_g\). Just *how* it rises above the edge carries information, and the [next page](measuring-a-bandgap-with-light.md) turns that rise into a measurement: the Tauc analysis, a standard model with clearly stated conditions, which plots the data so that the gap appears as the intercept of a straight line.
