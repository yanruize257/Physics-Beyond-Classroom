# How a Hydrogen Maser Works

*This article explains how a hydrogen maser works: stimulated emission and population inversion, state selection by a magnet, the storage bulb, and the microwave cavity.*

## 1. The problem

A clock needs an oscillator — something that repeats — and the 21-cm transition is a superb one: its frequency is fixed by nature to \(1.42\ \mathrm{GHz}\). The obstacle is the transition's slow spontaneous emission: left to itself, a single excited hydrogen atom takes on average eleven million years to emit its photon spontaneously. An oscillator that delivers one photon per eleven million years is useless on its own.

A macroscopic signal needs many atoms emitting *in phase*. Two ingredients make that possible: get more atoms into the upper state than the lower (a **population inversion**), and let their emission be *stimulated* — driven by an already-present microwave field, into which each atom releases its energy in step with the field.

## 2. Stimulated emission

An atom in the upper state, bathed in a field at its transition frequency, is stimulated to emit: the emitted photon joins the field with the same phase and direction. The rate is proportional to the field's intensity and to the number of upper-state atoms:

\[
R \propto \rho(\nu)\, n_{\text{upper}},
\tag{1}
\]

while the competing process — absorption by lower-state atoms — removes photons at a rate proportional to \(n_{\text{lower}}\). The field *grows* only when upper-state atoms outnumber lower-state ones:

\[
\boxed{n_{\text{upper}} > n_{\text{lower}}}
\tag{2}
\]

— the population inversion condition. Without it there is no net gain, though sustained oscillation also requires the gain to overcome all losses, as the end of section 3 explains. In thermal equilibrium the condition is never met (lower levels are always more populated), so a maser must harvest atoms in the upper state and discard the rest.

## 3. The hydrogen maser, piece by piece

The device has four stages, each with one physical job.

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 325" style="width:100%;max-width:750px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Simplified workflow of a hydrogen maser"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.box { fill: none; stroke: currentColor; stroke-width: 1.6; }.hl { fill: var(--md-accent-fg-color); opacity: .12; }.arr { fill: none; stroke: currentColor; stroke-width: 1.6; marker-end: url(#mwen2); }.good { stroke: var(--md-accent-fg-color); stroke-width: 2; }.bad { stroke: currentColor; stroke-width: 1.3; opacity: .55; stroke-dasharray: 5 3; }</style><defs><marker id="mwen2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs><rect class="box" x="10" y="120" width="80" height="44"/><text x="50" y="139" text-anchor="middle">H&#8322; gas</text><text x="50" y="154" text-anchor="middle" class="dim">(molecules)</text><path class="arr" d="M90,142 L130,142"/><rect class="box" x="130" y="110" width="90" height="64"/><text x="175" y="133" text-anchor="middle">RF discharge</text><text x="175" y="148" text-anchor="middle">splits H&#8322;</text><text x="175" y="163" text-anchor="middle" class="dim">into H atoms</text><path class="arr" d="M220,142 L260,142"/><rect class="box" x="260" y="105" width="100" height="74"/><text x="310" y="126" text-anchor="middle">state-selecting</text><text x="310" y="140" text-anchor="middle">magnet</text><path class="good" d="M360,125 C420,125 440,148 498,148"/><path class="bad" d="M360,142 C410,142 425,175 445,198"/><path class="bad" d="M360,162 C410,162 425,220 445,248"/><text x="500" y="116" text-anchor="middle" class="dim">F = 1, m_F = +1 &amp; 0 &#8594; focused</text><text x="450" y="200" text-anchor="start" class="dim">F = 0 &#8594; rejected</text><text x="450" y="250" text-anchor="start" class="dim">F = 1, m_F = &#8722;1 &#8594; rejected</text><rect class="hl" x="498" y="120" width="120" height="56" rx="28"/><rect class="box" x="498" y="120" width="120" height="56" rx="28"/><text x="558" y="143" text-anchor="middle">storage bulb</text><text x="558" y="158" text-anchor="middle" class="dim">(inside cavity)</text><path class="arr" d="M618,148 L662,148"/><text x="666" y="142" text-anchor="start" font-weight="bold">1.42 GHz</text><text x="666" y="157" text-anchor="start" class="dim">oscillation</text><text x="375" y="308" text-anchor="middle" class="dim">states attracted to weak field are focused; states attracted to strong field are rejected</text></svg>
</div>

*The whole machine in one picture: split, sort, store, resonate. The beam is continuous, so upper-state atoms keep arriving — the inversion is maintained by sorting, and the cavity's feedback turns their in-step emission into a sustained oscillation.*

**1. Making atoms — the dissociator.** Molecular hydrogen \(\mathrm{H_2}\) is split by a radio-frequency discharge into individual atoms, streaming out of a small nozzle as a beam.

**2. Selecting the upper state — the magnet.** The four hyperfine states respond differently to a field gradient (see the workflow diagram): two states drift toward *weak* field, two toward *strong* field. A six-pole magnet is shaped so that its field is weakest along the axis and grows outward: atoms of the first kind are funnelled along the axis into the storage bulb, while atoms of the second kind veer away and are lost. What arrives at the bulb is a stream of atoms almost entirely in \(F = 1\) — including \(F = 1, m_F = 0\), the upper state of the clock transition — while \(F = 0\) atoms are almost entirely absent (the details of which state goes where come from the Zeeman splitting of [page 2.2](spins-in-a-magnetic-field.md)). One honest note: the magnet does not select a single quantum state. It focuses *two* states of the same family, \(F = 1, m_F = +1\) and \(F = 1, m_F = 0\), and discards the other two; the clock transition uses only one of the survivors. The population inversion is achieved by sorting, not by pumping.

**3. Holding the atoms — the storage bulb.** A quartz bulb, coated with Teflon, sits inside the cavity. Atoms bounce thousands of times without losing their state — a wall collision perturbs the hyperfine state only weakly — and in such instruments each atom typically lingers for about one second before drifting out:

\[
\tau_{\text{storage}} \approx 1\ \mathrm{s}.
\tag{3}
\]

A second of transit is still far too short for spontaneous emission, and nothing here changes the atoms' natural eleven-million-year lifetime. What the bulb provides is *time in the cavity field*: while an atom drifts through, the microwave field can **stimulate** its transition — a process whose rate is set by the field strength, not by the atom's natural lifetime. A fraction of the passing atoms is thereby persuaded to release its photon in step with the field, and the steady stream of fresh upper-state atoms arriving from the magnet keeps the supply coming.

The walls deserve a closer look, because they are the clock's most intimate imperfection. An atom that grazes a wall does not bounce like a tiny billiard ball — its electron cloud is pulled and distorted by the surface's electric fields for the whole encounter, and the hyperfine levels shift slightly while it lasts. Each of the thousands of bounces therefore nudges the atom's phase by a minuscule amount, and the accumulated effect is the **wall shift**: a tiny, systematic pull on the clock's frequency. This is why the bulb's coating matters so much — Teflon is chosen because its interaction with the atoms is exceptionally gentle, keeping the per-bounce nudge small — and why the wall shift, small as it is, has to be measured and accounted for in a real standard. A frequency standard must account for such apparently negligible details.

**4. Resonating — the cavity.** The bulb sits inside a microwave cavity designed to resonate at the atomic transition frequency, about \(1.420\ \mathrm{GHz}\) — in practice the cavity is slightly detuned from the atoms, and this offset is measured and corrected. A cavity is a three-dimensional guitar string ([page 1.2](../foundations/interference-standing-waves-and-quantization.md)): it supports only standing patterns that fit its walls, each with its own frequency, and it is machined so that exactly one pattern sits at the atomic note. Think of the cavity as a frequency filter — like the resonance of [page 1.1](../foundations/oscillations-waves-and-resonance.md), in metal: it responds strongly at one sharply defined frequency (the atom's note) and almost not at all anywhere else. The cavity stores energy at the transition frequency and feeds it back into the atoms; its precise resonant frequencies are the business of cavity design, but the idea it carries is exactly page 1.2's — only patterns that fit survive.

Once the first few atoms emit, the cavity field stimulates more of the passing beam — emission in step, amplified, sustained. The continuous atomic beam keeps feeding upper-state atoms into the bulb, maintaining the population inversion against the atoms that drift away; the cavity keeps recycling the field. Above the oscillation threshold, where stimulated emission balances all losses, the device runs indefinitely: a self-sustained oscillation at the atom's own frequency.

## 4. The output: a frequency standard

The maser's microwave output is a pure, continuous signal whose frequency is pinned to the hyperfine transition. Its defining virtue is short-term stability: over seconds to hours, its frequency fluctuates at the \(10^{-13}\)–\(10^{-15}\) level (typical values, which depend on the instrument and the averaging time), because the oscillation is anchored not to a manufactured spring but to a quantum transition. Long-term accuracy, by contrast, is slowly degraded by residual disturbances — wall shifts from the storage coating, and stray magnetic fields nudging the transition ([page 2.2](spins-in-a-magnetic-field.md)), held in check by layers of magnetic shielding.

A hydrogen maser is therefore not a wristwatch: it is a frequency standard — the oscillator that disciplines a quartz crystal, steers local time scales, and holds arrays of radio telescopes in phase across continents.

## Sources

- H. M. Goldenberg, D. Kleppner, N. F. Ramsey, *Atomic Hydrogen Maser*, Phys. Rev. Lett. **5**, 361–362 (1960) — the first hydrogen maser, and the source of the state-selection scheme described above. [https://doi.org/10.1103/PhysRevLett.5.361](https://doi.org/10.1103/PhysRevLett.5.361)
- D. Kleppner, H. M. Goldenberg, N. F. Ramsey, *Theory of the Hydrogen Maser*, Phys. Rev. **126**, 603–615 (1962).
