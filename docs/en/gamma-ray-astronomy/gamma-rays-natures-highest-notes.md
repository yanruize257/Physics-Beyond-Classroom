# Gamma-ray Production and Interactions

*This page covers the main production mechanisms of gamma rays and their interactions with matter.*

## 1. What a gamma ray is

A gamma ray is a photon with energy above roughly \(100\ \mathrm{keV}\) — a conventional boundary rather than a sharp one, since the X-ray and gamma-ray ranges overlap — sitting at the top of the spectrum, far above the visible light of [the foundations](../foundations/oscillations-waves-and-resonance.md):

\[
E = h\nu \gtrsim 10^5\ \mathrm{eV},
\qquad
\lambda = \frac{hc}{E} \lesssim 10^{-11}\ \mathrm{m}.
\tag{1}
\]

At these energies the photon interacts with matter through absorption and scattering by individual atoms, rather than through the collective response of a surface that makes a mirror work — which is why mirrors and lenses are of no use for gamma-ray telescopes. The energy scale also matches nuclear transitions rather than electronic ones:

\[
E_{\text{electronic}} \sim 1\ \mathrm{eV},
\qquad
E_{\text{nuclear}} \sim 10^5\text{–}10^7\ \mathrm{eV}.
\tag{2}
\]

Gamma rays are emitted when nuclei make transitions, or when particles collide and annihilate — processes with energies about one hundred thousand times higher than those of chemistry.

## 2. Where they come from

The sky's gamma-ray sources are the most violent places known: pulsars — spinning neutron stars with magnetic fields that accelerate particles to extreme energies; supernova remnants, where blast waves push particles across light-years; active galactic nuclei — matter falling onto black holes of a billion solar masses, funnelling energy into jets; and gamma-ray bursts, the brightest explosions since the Big Bang. The photons they send us are produced by several *distinct* mechanisms:

- **Synchrotron radiation** — relativistic electrons spiralling in magnetic fields radiate photons whose energy rises with the field strength and the electron energy.
- **Inverse Compton scattering** — a relativistic electron collides with a low-energy photon (starlight, infrared light, the cosmic microwave background) and boosts it to gamma-ray energies. The picture to hold onto is a fast tennis ball (the electron) striking a slow one (the photon) and sending it flying with much of the fast ball's energy — a simplified analogy, since here the particles exchange energy and direction through the electromagnetic interaction, but it captures the direction of the energy transfer.
- **Pion decay** — cosmic-ray protons colliding with interstellar gas produce neutral pions, which decay almost immediately into two gamma rays:

\[
\pi^0 \to \gamma + \gamma.
\tag{3}
\]

- **Annihilation** — matter and antimatter annihilate into photons:

\[
e^+ + e^- \to \gamma + \gamma.
\tag{4}
\]

A given source usually blends several of these, and which one dominates leaves its signature in the spectrum. Gamma rays travel in straight lines, undeflected by galactic magnetic fields, and point back at their sources.

## 3. Why ordinary optics usually fails

Visible light reflects off a mirror because conduction electrons in the metal respond to the oscillating electric field. A gamma ray's field oscillates far too fast, and its photon is far too energetic: instead of being deflected coherently by a surface, it is overwhelmingly absorbed or scattered by individual atoms. Ordinary optical mirrors and lenses are therefore not usable for routine gamma-ray observations — special techniques such as grazing-incidence reflection and crystal diffraction exist, but only for limited low-energy cases —

\[
\lambda_{\gamma} \lesssim a_{\text{atom}},
\tag{5}
\]

though the statement deserves precision: reflection is not literally forbidden at all gamma-ray wavelengths — grazing-incidence reflection survives into the X-ray range, and for special low-energy cases crystal diffraction has been used — but neither technique builds a wide-field gamma-ray imager. In practice, a gamma ray announces itself by *transferring its energy to particles*. The three mechanisms, in order of dominance as energy rises (the exact ranges depend on the material):

- **Photoelectric effect** — the photon ejects a bound electron; dominant below \(\sim 100\ \mathrm{keV}\).
- **Compton scattering** — the photon knocks a loosely bound electron aside, departing with reduced energy; dominant in the middle range.
- **Pair production** — above a threshold, the photon converts into matter itself.

## 4. Pair production: light becomes matter

Near a nucleus (needed to absorb momentum), a sufficiently energetic photon can convert into an electron and a positron:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Pair production near a nucleus"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.g { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.2; }.part { fill: none; stroke: currentColor; stroke-width: 1.8; }.nuc { fill: var(--md-accent-fg-color); opacity: .2; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }</style><line class="g" x1="60" y1="120" x2="270" y2="120"/><polygon points="270,116 258,120 270,124" fill="var(--md-accent-fg-color)"/><text x="60" y="108" text-anchor="start" class="dim">&#947; (photon, E &gt; 1.022 MeV)</text><circle class="nuc" cx="290" cy="120" r="22"/><text x="290" y="125" text-anchor="middle" class="dim">nucleus</text><path class="part" d="M300,110 L430,60"/><path class="part" d="M300,130 L430,180"/><polygon points="435,56 425,60 431,66" fill="currentColor"/><polygon points="435,184 431,174 425,180" fill="currentColor"/><text x="440" y="58" text-anchor="start" class="dim">e&#8315;</text><text x="440" y="188" text-anchor="start" class="dim">e&#8314;</text><text x="280" y="210" text-anchor="middle" class="dim">the nucleus takes the recoil momentum; schematic, not to scale</text></svg>

*Pair production: the photon converts into an electron–positron pair near a nucleus, which absorbs the recoil momentum. (Schematic, not to scale.)*

\[
\gamma \to e^- + e^+.
\tag{6}
\]

For this nuclear-field mechanism — the one a telescope like the LAT uses — energy conservation sets a threshold, momentum conservation is handled by the nucleus, and the value below is an approximation that neglects the nucleus's small recoil energy: the two particles each cost their rest energy \(m_e c^2\), so

\[
\boxed{E_{\text{threshold}} \approx 2m_e c^2 = 1.022\ \mathrm{MeV}}
\tag{7}
\]

Below \(1.022\ \mathrm{MeV}\), a single photon cannot convert near a nucleus at all. Above it, the probability of pair production grows with photon energy and with the material's atomic number — which is why the LAT's converter is tungsten — but whether pair production dominates over photoelectric absorption and Compton scattering depends on both the energy and the material; that dominance is a property of a detector's converter choice, not a universal law of the spectrum. Pair production is likewise not the only way to build a gamma-ray telescope: **Compton telescopes** (working from roughly a few hundred keV to a few MeV, spanning the threshold from below) measure the electron a photon knocks loose and infer the photon's direction and energy from the recoil. The Fermi-LAT, operating from tens of MeV upward, is built on pair production because that mechanism dominates at its energies — *let the gamma ray turn into particles, and measure the particles.*

??? derivation "The threshold"

    Energy conservation sets a lower bound, and momentum conservation explains why the nucleus is needed. The least expensive outcome is a pair created with no leftover motion, costing its rest energy \(2m_e c^2\). In the nuclear-field process a nearby nucleus absorbs the recoil momentum; if its small recoil energy is neglected, the photon must carry at least

    \[
    E_{\text{threshold}} \approx 2m_e c^2 = 2\times0.511\ \mathrm{MeV} = 1.022\ \mathrm{MeV},
    \]

    an approximation good to better than a percent. Below this energy the process cannot happen at all. The nucleus is essential: a single photon turning into a pair while conserving energy *and* momentum needs a third body to take the momentum, and a heavy nucleus — which takes momentum while taking almost no energy — is the ideal one. 

