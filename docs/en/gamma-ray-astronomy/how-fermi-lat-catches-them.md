# How Fermi-LAT Detects Gamma Rays

*This page describes the three components of the Fermi Large Area Telescope — tracker, calorimeter, and anticoincidence detector — and how they measure gamma rays.*

## 1. The design in one sentence

Every gamma ray above \(1.022\ \mathrm{MeV}\) can become an electron–positron pair (previous page). The Fermi Large Area Telescope (LAT) is built around this conversion — which happens with some probability, not for every photon — and measures the result: the pair's direction gives the photon's direction; the pair's energy gives the photon's energy. Three instruments in sequence do the work — a **tracker**, a **calorimeter**, and an **anticoincidence shield**.

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 430" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Simplified cross-section of the Fermi Large Area Telescope"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 11.5px; }.box { fill: none; stroke: currentColor; stroke-width: 1.5; }.foil { fill: currentColor; }.si { fill: var(--md-accent-fg-color); opacity: .15; stroke: var(--md-accent-fg-color); stroke-width: 1; }.g { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.part { fill: none; stroke: currentColor; stroke-width: 1.8; }.ld { fill: none; stroke: currentColor; stroke-width: 0.8; opacity: .6; }</style><rect class="box" x="70" y="30" width="420" height="26"/><text x="70" y="78" text-anchor="start" class="dim">ACD (anticoincidence detector): vetoes charged cosmic rays</text><text x="70" y="106" text-anchor="start" class="dim">tracker: tungsten foils + silicon strip layers</text><rect class="foil" x="100" y="114" width="360" height="5"/><rect class="si" x="100" y="119" width="360" height="12"/><rect class="foil" x="100" y="131" width="360" height="5"/><rect class="si" x="100" y="136" width="360" height="12"/><rect class="foil" x="100" y="148" width="360" height="5"/><rect class="si" x="100" y="153" width="360" height="12"/><rect class="foil" x="100" y="165" width="360" height="5"/><rect class="si" x="100" y="170" width="360" height="12"/><rect class="foil" x="100" y="182" width="360" height="5"/><line class="g" x1="280" y1="0" x2="280" y2="130"/><polygon points="280,126 276,114 284,114" fill="var(--md-accent-fg-color)"/><text x="330" y="64" text-anchor="start" class="dim">&#947; (incoming gamma ray)</text><path class="part" d="M280,130 L235,205"/><path class="part" d="M280,130 L325,205"/><text x="166" y="196" text-anchor="end" class="dim">e&#8315;</text><line class="ld" x1="172" y1="193" x2="234" y2="201"/><text x="394" y="196" text-anchor="start" class="dim">e&#8314;</text><line class="ld" x1="388" y1="193" x2="326" y2="201"/><text x="70" y="238" text-anchor="start" class="dim">calorimeter: CsI crystals</text><rect class="box" x="100" y="246" width="360" height="34"/><line x1="100" y1="263" x2="460" y2="263" stroke="currentColor" stroke-width="1"/><path class="part" d="M235,205 L255,246"/><path class="part" d="M325,205 L305,246"/><text x="280" y="304" text-anchor="middle" class="dim">pair direction &#8594; photon direction; deposited energy &#8594; photon energy</text></svg>
</div>

*The three layers in cross-section: the ACD vetoes charged particles, the tracker converts the photon into a trackable pair, and the calorimeter absorbs the pair's energy. Direction from the pair, energy from the shower. (Simplified schematic, not to scale: the real tracker has more layers, and the calorimeter is many crystals.)*

## 2. Tracker: where did it come from?

The tracker is a stack of thin tungsten foils interleaved with silicon strip detectors. The tungsten is dense — a high-\(Z\) material in which pair production happens readily. A thin-target, order-of-magnitude guide for the conversion probability is:

\[
\text{conversion probability} \propto Z^2 \times \text{foil thickness}.
\tag{1}
\]

A gamma ray entering the tracker converts in one of the foils into an electron and a positron, which fly apart along nearly the photon's original direction. The silicon strips record the positions of both particles as they cross each layer. The LAT has no magnetic field, so the tracks do not curve — but they are not perfectly straight either: **multiple Coulomb scattering** in the foils and detectors makes each particle wander slightly, and this wandering, together with the pair's opening angle, is what limits the angular resolution at low energies. Joining the hits into tracks and adding the two momenta gives the photon's arrival direction as the direction of the pair's total momentum (this ignores the small recoil of the converting nucleus and multiple scattering in the foils):

\[
p_{\gamma} \approx p_{e^-} + p_{e^+}
\quad\Longrightarrow\quad
\hat{n}_{\gamma} \approx \text{direction of the pair's total momentum}.
\tag{2}
\]

For the nearly symmetric pairs produced at higher energies this lies close to the bisector of the two tracks, and it is this reconstructed direction that is projected back onto the sky as the source direction — with a precision of about \(0.8^\circ\) at \(1\ \mathrm{GeV}\), degrading toward lower energies. The energy, meanwhile, is left primarily to the calorimeter.

## 3. Calorimeter: how much did it carry?

Beneath the tracker sits the calorimeter — bars of caesium iodide crystals. The electron and positron slam into the crystals and deposit their energy there, and the crystals convert that deposited energy into light. The crystals measure the energy the pair deposits; combined with a correction for energy spent in the tracker on the way in, this reconstructs the photon's energy (neglecting the small nuclear recoil). In the equation below, \(E_{e^-}\) and \(E_{e^+}\) are the *total* relativistic energies of the two particles, rest energy included:

\[
E_{\gamma} = E_{e^-} + E_{e^+}.
\tag{3}
\]

Reconstructing that energy is not a matter of reading one number: some of the pair's energy is spent in the tracker on the way in, and some can escape the crystals, so the measured deposit must be corrected. The result is an **energy resolution** of about \(10\)–\(15\%\), and the pattern of deposits is itself a sanity check — gamma-ray events deposit their energy in a narrow, symmetric pattern, while cosmic-ray protons leave ragged ones.

## 4. The shield: which events to throw away

The LAT orbits in a large flux of charged cosmic rays — outnumbering gamma rays by roughly \(10^5\) to \(1\). The tracker cannot tell a passing proton from a converting photon by tracking alone. The solution is a **veto**: the tracker is wrapped in the anticoincidence detector (ACD) — plastic scintillator tiles that flash when any charged particle passes through:

\[
\text{charged particle} \Rightarrow \text{ACD flash} \Rightarrow \text{event rejected}.
\tag{4}
\]

A photon, being neutral, enters silently; only after converting inside the tracker do its children register. The ACD closes the loophole in reverse too: if the electron–positron shower back-splashes light into the shield, a cut on the splash shape prevents the instrument from vetoing itself.

## 5. Sensitivity: the bottom line

A telescope's worth is its **effective area** — the size of the ideal detector that would catch the same number of photons — and the time it stares. For a steady source under background-dominated, similar observing conditions, the significance of a detection grows like

\[
\sigma \propto \sqrt{A_{\text{eff}}\, t}.
\tag{5}
\]

The LAT's effective area peaks near \(1\ \mathrm{GeV}\) at \(\sim 8000\ \mathrm{cm^2}\) — the size of a desk — and its field of view is enormous, about \(20\%\) of the sky at once, because the tracker accepts photons from any direction above it. The instrument's mode of life follows: it does not point; it scans. The whole sky passes through the field of view every few hours, and the telescope is a surveyor, accumulating photons from every source, in every direction, for years.

Three of the instrument's numbers deserve careful separation, because they answer three different questions. The **effective area** asks *how many photons are caught*; the **angular resolution** asks *how precisely their arrival directions are known*; the **flux sensitivity** asks *how faint a source the instrument can certify in a given time*. They are related but distinct — a large effective area does not by itself give sharp images, and sharp images do not by themselves give deep sensitivity. Keeping them apart is the difference between describing the *instrument* and describing what the sky actually emits, and that distinction is the thread of the next page.

## Sources

- Fermi Science Support Center (instrument description and data access): [https://fermi.gsfc.nasa.gov/ssc/](https://fermi.gsfc.nasa.gov/ssc/)
- W. B. Atwood et al., *The Large Area Telescope on the Fermi Gamma-ray Space Telescope Mission*, Astrophys. J. **697**, 1071–1102 (2009) — the LAT instrument paper, and the source of the performance figures used above (effective area, angular resolution, energy resolution, field of view). [https://doi.org/10.1088/0004-637X/697/2/1071](https://doi.org/10.1088/0004-637X/697/2/1071)
