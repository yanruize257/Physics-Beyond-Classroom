# Hydrogen Hyperfine Splitting

*The hydrogen ground state is split into two hyperfine levels by the interaction between the electron and proton spins. The transition between them is the 21-cm line.*

## 1. Spins as magnets

From [the foundations](../foundations/wave-functions-and-quantum-states.md): the electron carries an intrinsic angular momentum — **spin** — and for a spin-\(\tfrac12\) particle the projection along a chosen axis has only two possible outcomes; the proton carries a spin as well. Spin alone would be an abstract label; what makes it physically decisive is that spin comes with a magnetic moment — an intrinsic property, not the field of a mechanically spinning charge. The electron's magnetic moment is roughly one Bohr magneton,

\[
\mu_e \approx \mu_B = \frac{e\hbar}{2m_e} = 9.274\times10^{-24}\ \mathrm{J/T},
\tag{1}
\]

and the proton's is about one nuclear magneton, two thousand times smaller:

\[
\mu_p \approx 2.79\,\mu_N,
\qquad
\mu_N = \frac{e\hbar}{2m_p} = 5.051\times10^{-27}\ \mathrm{J/T}.
\tag{2}
\]

Two magnets interacting have an energy that depends on their relative orientation. This page explains the resulting splitting, and calculates the transition energy from the measured frequency rather than from a model.

## 2. The two states

In hydrogen's ground state (\(n = 1\)) the electron and proton spins can combine in two ways — roughly speaking, **parallel** or **antiparallel**. A dipole's energy in a magnetic field \(B\) is

\[
E = -\mu \cdot B,
\tag{3}
\]

so the two arrangements cost different energies, and the ground state splits into two neighbouring rungs — a *hyperfine* splitting. The four spin arrangements sort into two levels: the **singlet**, with total spin \(F = 0\), and the **triplet**, with total spin \(F = 1\), holding three states.

One honest word about the picture of "two arrows". A coupled spin state is not a snapshot of two fixed classical arrows. The singlet is a state in which the two spins point oppositely *in whatever direction you choose to look* — a pair with no net orientation at all, like two compass needles locked back-to-back. The triplet, by contrast, behaves like the pair pointing together: its extreme members (\(m_F = \pm1\)) are the two genuinely parallel cases, and its middle member (\(m_F = 0\)) is a quantum blend of "electron up, proton down" and "electron down, proton up". The bar-magnet analogy below captures the *energy* ordering — aligned costs more than anti-aligned — but a bar magnet always has a definite direction, while the singlet has none; that is where the analogy stops being literal.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Hyperfine splitting of the hydrogen ground state"><style>.lvl { stroke: currentColor; stroke-width: 3.5; }text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }</style><line class="lvl" x1="110" y1="80" x2="500" y2="80"/><text x="100" y="88" text-anchor="end" font-weight="bold">F = 1</text><text x="100" y="103" text-anchor="end" class="dim">triplet (3 states)</text><line class="lvl" x1="110" y1="230" x2="500" y2="230"/><text x="100" y="238" text-anchor="end" font-weight="bold">F = 0</text><text x="100" y="253" text-anchor="end" class="dim">singlet</text><line x1="280" y1="105" x2="280" y2="205" stroke="var(--md-accent-fg-color)" stroke-width="1.8"/><polygon points="280,213 275,201 285,201" fill="var(--md-accent-fg-color)"/><text x="292" y="150" text-anchor="start" class="dim">photon: &#955; = 21.1 cm</text><text x="292" y="165" text-anchor="start" class="dim">&#957; = 1.42 GHz</text><text x="280" y="275" text-anchor="middle" class="dim">&#916;E &#8776; 5.9 &#215; 10&#8315;&#8310; eV — not to scale</text></svg>

*The split ground state of hydrogen. Think of two tiny bar magnets held a fixed distance apart: their interaction energy depends on their relative orientation — and, like real magnets, whether aligned or anti-aligned costs more depends on how they are held (side by side or end to end). The analogy supplies the *mechanism*, not the sign; the real singlet state has no fixed direction, as the paragraph above explains.*

## 3. The energy difference

The two arrangements differ in energy because the two spins interact magnetically. A classical two-magnet picture supplies the intuition — the pair's energy depends on their relative orientation — but the classical answer is geometry-dependent: magnets held *side by side* prefer to be anti-aligned, while magnets placed *end to end* prefer to be aligned, so the sign cannot be trusted from the analogy alone. In the real hydrogen atom the ordering is a quantum fact of the spin-spin coupling, established by theory and experiment together: the triplet \(F = 1\) lies slightly *above* the singlet \(F = 0\). The site therefore does not pursue a numerical estimate of the splitting; the *mechanism* (magnetic interaction between the two spins) is the physics, and the exact size is taken from experiment.

The measured transition frequency comes from hydrogen masers compared against a caesium frequency standard, with the maser's systematic shifts corrected (see the Sources):

\[
\boxed{\nu_0 = 1\,420\,405\,751.768\ \mathrm{Hz}}
\tag{4}
\]

From this single number, everything else follows through the foundations' relations. The energy difference is

\[
\Delta E = h\nu_0
= (6.626\times10^{-34}\ \mathrm{J\cdot s})(1.4204\times10^{9}\ \mathrm{Hz})
\approx 9.4\times10^{-25}\ \mathrm{J},
\tag{5}
\]

about \(5.9\times10^{-6}\ \mathrm{eV}\) — and the wavelength is

\[
\lambda = \frac{c}{\nu_0}
= \frac{2.998\times10^{8}\ \mathrm{m/s}}{1.4204\times10^{9}\ \mathrm{Hz}}
\approx 21.1\ \mathrm{cm}.
\tag{6}
\]

This is the **21-cm line**.

## 4. A slow transition

The energy gap is tiny — \(5.9\times10^{-6}\ \mathrm{eV}\), about a millionth of a visible photon. A small gap has consequences: the rate at which an excited atom sheds this photon spontaneously is extraordinarily slow at microwave frequencies,

\[
A \approx 2.9\times10^{-15}\ \mathrm{s^{-1}},
\qquad
\tau = \frac{1}{A} \approx 11\ \mathrm{million\ years}.
\tag{7}
\]

Two clarifications about this number. First, \(\tau\) is an *average* waiting time, not a clockwork: an excited atom flips at a random moment, some atoms early, some much later, and eleven million years is the mean of that randomness. Second, "forbidden" needs a qualifier. The jump cannot happen through the **electric-dipole (E1)** channel that governs almost all everyday light, so the usual rules forbid it — but it *can* proceed through the much weaker **magnetic-dipole (M1)** channel. An M1 transition is not absolutely forbidden; it is merely very, very slow.

One wrong inference to avoid: the slowness of the *emission* says nothing about how sensitive the two *levels* are to their surroundings. Those are separate properties. The long lifetime is bad news only for detection — a single atom almost never emits. The levels themselves can still be disturbed, and in fact a magnetic field shifts them directly, changing the transition frequency — the subject of the [next page](spins-in-a-magnetic-field.md). The article after that explains how this transition is used to build a clock: stimulated emission, state selection, and a resonant cavity.

## Sources

- NIST — Fundamental Physical Constants (Planck constant, Bohr magneton, nuclear magneton): [https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
- BIPM — SI base unit: second: [https://www.bipm.org/en/si-base-units/second](https://www.bipm.org/en/si-base-units/second)
- H. Hellwig, R. F. C. Vessot, M. W. Levine, P. W. Zitzewitz, D. W. Allan, D. J. Glaze, *Measurement of the Unperturbed Hydrogen Hyperfine Transition Frequency*, IEEE Trans. Instrum. Meas. **19**, 200–209 (1970) — the experimental source of \(1\,420\,405\,751.768\ \mathrm{Hz}\).
- The spontaneous-decay coefficient \(A \approx 2.9\times10^{-15}\ \mathrm{s^{-1}}\) (a lifetime of about eleven million years) is the value quoted in the atomic-physics literature.
