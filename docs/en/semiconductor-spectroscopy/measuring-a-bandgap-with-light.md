# Measuring a Bandgap with Light: The Tauc Plot

*This page explains how the Tauc plot extracts a semiconductor's bandgap from UV-Vis measurements, in transmission or diffuse-reflectance geometry.*

## 1. The experiment

In a transmission-mode measurement, a UV-Vis spectrophotometer shines light of a chosen wavelength through a sample and measures the transmitted intensity. Four parts do the job — a light source, a monochromator that picks one wavelength at a time, the sample itself, and a detector:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 240" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Schematic of a UV-Vis spectrophotometer"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.box { fill: none; stroke: currentColor; stroke-width: 1.6; }.beam { stroke: var(--md-accent-fg-color); stroke-width: 2; }.arr { fill: none; stroke: currentColor; stroke-width: 1.4; marker-end: url(#uvhead); }.wl { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.2; stroke-dasharray: 6 4; }</style><defs><marker id="uvhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs><rect class="box" x="10" y="90" width="90" height="50"/><text x="55" y="111" text-anchor="middle">light source</text><text x="55" y="127" text-anchor="middle" class="dim">lamp</text><rect class="box" x="140" y="90" width="110" height="50"/><text x="195" y="111" text-anchor="middle">monochromator</text><text x="195" y="127" text-anchor="middle" class="dim">picks one &#955;</text><rect class="box" x="290" y="90" width="90" height="50"/><text x="335" y="111" text-anchor="middle">sample</text><text x="335" y="127" text-anchor="middle" class="dim">thickness d</text><rect class="box" x="420" y="90" width="90" height="50"/><text x="465" y="111" text-anchor="middle">detector</text><text x="465" y="127" text-anchor="middle" class="dim">measures I</text><line class="beam" x1="100" y1="115" x2="140" y2="115"/><line class="beam" x1="250" y1="115" x2="290" y2="115"/><line class="beam" x1="380" y1="115" x2="420" y2="115"/><path class="wl" d="M40,60 C90,20 160,20 210,60"/><text x="125" y="74" text-anchor="middle" class="dim">scan &#955; from IR to UV</text><text x="310" y="175" text-anchor="middle" class="dim">T = I / I&#8320; at each wavelength</text><text x="310" y="210" text-anchor="middle" class="dim" opacity=".55">Simplified schematic, not to scale.</text></svg>

*The instrument in one line: pick a colour, send it through the sample, measure what survives — then repeat for the next colour.*

Two measurement geometries are common. In the **transmission** geometry above, the light passes through the sample and the detector measures the transmitted intensity. In **diffuse reflectance spectroscopy (DRS)**, the light strikes the sample surface, and an **integrating sphere** collects the light scattered back in all directions; the signal is compared with a white reference standard:

<div class="svg-scroll" markdown="0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Diffuse reflectance spectroscopy with an integrating sphere"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.sphere { fill: none; stroke: currentColor; stroke-width: 1.6; }.in { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.sc { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1; opacity: .6; }.samp { fill: var(--md-accent-fg-color); opacity: .3; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }</style><circle class="sphere" cx="280" cy="140" r="95"/><rect class="samp" x="172" y="128" width="26" height="26" transform="rotate(-30 185 141)"/><text x="150" y="178" text-anchor="middle" class="dim">sample</text><line class="in" x1="60" y1="30" x2="185" y2="141"/><polygon points="185,141 173,139 179,129" fill="var(--md-accent-fg-color)"/><text x="70" y="22" text-anchor="start" class="dim">incoming light</text><path class="sc" d="M195,135 C230,80 320,80 350,135"/><path class="sc" d="M195,147 C230,205 330,210 370,170"/><rect class="samp" x="300" y="198" width="24" height="24" transform="rotate(-20 312 210)"/><text x="300" y="182" text-anchor="middle" class="dim">detector</text><line x1="312" y1="210" x2="360" y2="210" stroke="currentColor" stroke-width="1.6"/><polygon points="366,210 356,206 356,214" fill="currentColor"/><text x="420" y="203" text-anchor="start" class="dim">compared with a</text><text x="420" y="217" text-anchor="start" class="dim">white reference</text><text x="280" y="266" text-anchor="middle" class="dim">scattered light bounces inside the sphere until it reaches the detector</text><text x="280" y="284" text-anchor="middle" class="dim" opacity=".55">Simplified schematic, not to scale.</text></svg>
</div>

*DRS geometry: light hits the sample, and an integrating sphere collects the diffusely reflected light, compared against a white reference. (Simplified, not to scale.)*

A common sample form for powders is a suspension in a solution, deposited onto a glass slide and dried. The reflectance \(R\) is the sample signal normalized to the reference. Depending on the instrument, the output may be given as \(R\), as \(\%R\), or as some quantity labelled "absorbance". A column labelled \(\mathrm{Abs}\), for example, might mean \(-\log_{10} T\) in transmission mode, \(\log_{10}(1/R)\) in reflectance mode, or a Kubelka–Munk value — the heading alone does not say which, and none of these should be assumed. The instrument mode and the software's output definition must be checked first.

\[
T = \frac{I}{I_0},
\tag{1}
\]

the **transmittance** — the fraction of intensity that makes it through. The instrument scans \(\lambda\) from the near infrared into the ultraviolet, recording \(T(\lambda)\) — typically as absorbance,

\[
A = \log_{10}\!\frac{1}{T}.
\tag{2}
\]

The raw output is not yet physics. In the transmission path it must be converted, wavelength by wavelength, into the absorption coefficient \(\alpha\); in the DRS path the data are a reflectance (or a conditional Kubelka–Munk quantity, section 2). Both paths are described next.

## 2. From transmittance to absorption coefficient

Inside the material, intensity decays exponentially with depth (Beer–Lambert law):

\[
I(x) = I_0\, e^{-\alpha x},
\qquad
\alpha = \frac{1}{d}\ln\frac{1}{T},
\tag{3}
\]

with \(d\) the sample thickness. (This relation assumes reflection and scattering are negligible or already corrected — the subject of [page 3.3](when-experimental-data-misbehaves.md).)

For diffuse reflectance, the corresponding model quantity is the **Kubelka–Munk function**,

\[
F(R_\infty) = \frac{(1 - R_\infty)^2}{2R_\infty} = \frac{K}{S},
\tag{4}
\]

defined for an optically thick, diffusely scattering sample: \(R_\infty\) is the diffuse reflectance an infinitely thick layer *would* have, and \(K/S\) is the ratio of the absorption and scattering coefficients. The reflectance \(R_{\mathrm{meas}}\) actually recorded for a powder layer on glass is not automatically \(R_\infty\). \(F(R_\infty)\) is proportional to the absorption coefficient only when the scattering coefficient can be taken as roughly constant over the measured range; it is **not** the same quantity as the transmission absorption coefficient \(\alpha\), and the thick-powder model cannot be applied to a thin film without justification. Which path applies depends on the measurement geometry and the sample. A powder layer deposited on a glass slide can be thin enough that light penetrates to the glass. The measured signal then contains light scattered back by the powder itself, plus light that reaches the glass, is reflected there, and passes back through the layer. The instrument therefore records the reflectance of a two-layer system — powder film on glass — rather than the \(R_\infty\) of an infinitely thick powder bed, and the scattering strength of the layer itself varies with packing and wavelength. For such samples, plugging the measured \(R_{\mathrm{meas}}\) into the Kubelka–Munk form gives an *apparent* \(F(R)\) — a conditional, model-dependent transform. It equals \(K/S\), or acts like \(\alpha\), only when the model's conditions hold; without that check it is neither. Each wavelength \(\lambda\) is converted to a photon energy via the [foundations' constant](../foundations/wave-functions-and-quantum-states.md):

\[
h\nu = \frac{1240}{\lambda\ [\mathrm{nm}]}\ \mathrm{eV}.
\tag{5}
\]

In the transmission path, the experiment thus yields \(\alpha\) as a function of photon energy \(h\nu\); in the DRS path it yields a reflectance \(R\), which may be transformed conditionally (section 2). The rest is interpretation.

Three quantities must be kept apart here, because they live on different rungs. The **transmittance** \(T\) and the **absorbance** \(A\) are dimensionless numbers read from the instrument. The **absorption coefficient** \(\alpha\), in units of inverse length, is a property of the material extracted from them through equation (3). The **bandgap** \(E_g\), in units of energy, is the physics being sought. In the transmission path it is \(\alpha\) that connects the instrument's numbers to the material's physics; in the DRS path the corresponding — conditional — quantity is \(F(R_\infty)\). The next section builds these bridges on assumptions that deserve to be named.

## 3. The Tauc equation

For a **direct** gap, absorption is a vertical transition between bands ([page 3.1](from-levels-to-bands.md)), and a standard model of the absorption edge — the Tauc model, used across the semiconductor literature — says the measured quantities combine into a straight line:

\[
(\alpha h\nu)^2 = B\,(h\nu - E_g),
\tag{6}
\]

(Why this combination, and not another, follows from the quantum theory of transitions between bands — a university-level derivation. Here we adopt the model as the community's standard tool, and spend our attention on using it honestly.)

The same relation is used in DRS-based analyses with \(F(R_\infty)\) in place of \(\alpha\) — a conditional substitution that relies on the Kubelka–Munk assumptions above. In either case the exponent \(n\) is chosen from the physics of the transition, not from which plot looks straightest.

or, in general form with the exponent \(n\) depending on the transition type,

\[
\boxed{(\alpha h\nu)^{n} = B\,(h\nu - E_g)}
\qquad
n =
\begin{cases}
2, & \text{direct allowed}\\[2pt]
\frac12, & \text{indirect allowed}.
\end{cases}
\tag{7}
\]

This is the **Tauc equation**: a straight-line relation between a quantity built from measurements, \((\alpha h\nu)^{n}\), and the photon energy. Its intercept with the energy axis is the bandgap — *provided its assumptions hold*.

The equation carries those assumptions inside it, and they set its limits. It assumes a **direct allowed** transition between **parabolic bands**, with a transition probability that varies slowly across the gap. For indirect gaps ([page 3.1](from-levels-to-bands.md)) the exponent changes and the transition is phonon-assisted; for non-parabolic bands or absorption dominated by defects, the relation is not exact. In all of those cases the straight-line intercept is an *estimate* of the gap, not a definition of it. How well the assumptions hold is itself an experimental question — the subject of [page 3.3](when-experimental-data-misbehaves.md).

## 4. The plot

For a **direct allowed** transition, plot \((\alpha h\nu)^2\) against \(h\nu\). Below the gap the curve hugs the axis; above it, the data rise on a straight line. The linear portion is extrapolated back to the energy axis — the intercept is \(E_g\):

\[
(\alpha h\nu)^2 = 0
\quad\Longrightarrow\quad
\boxed{h\nu = E_g}
\tag{8}
\]

The prescription in one sentence: *choose the exponent on physical grounds first, then fit a line and read the intercept.* The plot itself cannot decide the physics: the exponent must come from the material's band structure or from independent evidence, and plotting with the wrong exponent usually fails to give a clean straight line — a useful consistency check, though over a limited energy range even a wrong model can look linear, so the exponent must come from physics. For an **indirect** gap the transition is phonon-assisted and far weaker, so with the correct exponent \((\alpha h\nu)^{1/2}\) the same prescription applies — but only the physics justifies choosing it.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="How a Tauc plot yields the bandgap by extrapolation"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 13px; }.dim { opacity: .7; font-size: 12px; }.ax { stroke: currentColor; stroke-width: 1.5; }.data { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2.5; }.fit { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-dasharray: 7 4; }.pt { fill: var(--md-accent-fg-color); }</style><line class="ax" x1="60" y1="240" x2="510" y2="240"/><line class="ax" x1="60" y1="240" x2="60" y2="40"/><text x="510" y="262" text-anchor="end">h&#957;</text><text x="60" y="32" text-anchor="middle">(&#945;h&#957;)&#178;</text><!-- data curve --><path class="data" d="M60,236 C110,234 150,228 190,214 C240,196 275,170 300,146.3"/><circle class="pt" cx="300" cy="146.3" r="3.5"/><circle class="pt" cx="330" cy="120.7" r="3.5"/><circle class="pt" cx="360" cy="95.2" r="3.5"/><circle class="pt" cx="390" cy="69.6" r="3.5"/><!-- linear fit extrapolated --><line class="fit" x1="190" y1="240" x2="460" y2="10"/><circle class="pt" cx="190" cy="240" r="4.5" stroke="currentColor" stroke-width="2" fill="none"/><text x="130" y="180" text-anchor="middle" class="dim">below the gap,</text><text x="135" y="196" text-anchor="middle" class="dim">data hugs the axis</text><text x="235" y="85" text-anchor="start" class="dim" transform="rotate(-40 235 85)">straight-line region</text><text x="186" y="256" text-anchor="middle" class="dim" fill="var(--md-accent-fg-color)">intercept = E_g</text><text x="280" y="296" text-anchor="middle" class="dim">choose the exponent from physics first (n = 2 direct, n = &#189; indirect), then fit and extrapolate.</text><text x="280" y="312" text-anchor="middle" class="dim" opacity=".55">Schematic illustration, not real data.</text></svg>

*The whole procedure at a glance: below the gap the data stay near the axis; above it they rise along a line, and the extrapolated intercept is the gap. The method works only when the exponent is chosen on physical grounds.*

## 5. A real material: BiOCl

Bismuth oxychloride, \(\mathrm{BiOCl}\), is a layered semiconductor studied for photocatalysis, and it is a good case study in the caution above. In the measurements behind this site, BiOCl powder was dispersed in a solution and deposited onto a glass slide, and the sample was characterized by diffuse reflectance spectroscopy with an integrating sphere. Because the measured reflectance of such a powder-on-glass sample mixes contributions from the powder and from the glass behind it — not the optically thick bulk assumed by the Kubelka–Munk model — \(F(R_\infty)\) can serve only as an approximation there; the transmission description above remains the simpler reference model. White crystalline BiOCl absorbs only in the ultraviolet: the spectrum is flat across the visible and rises steeply near the edge. Reported bandgap values in the literature cluster around \(3.2\)–\(3.5\ \mathrm{eV}\), corresponding to an absorption edge near

\[
E_g \approx 3.2\text{–}3.5\ \mathrm{eV}
\quad\Longleftrightarrow\quad
\lambda_g = \frac{1240}{E_g\,[\mathrm{eV}]}\ \mathrm{nm}
\approx 390\text{–}355\ \mathrm{nm}.
\tag{9}
\]

A steep edge by itself says little about the transition type. Most analyses of BiOCl in the literature treat it as an **indirect**-gap material and fit the Tauc relation with \(n = \tfrac12\); the fitted gap depends on that choice, and the direct-versus-indirect decision must be justified from band-structure evidence (or consistency across independent measurements), not from the steepness of a single absorption spectrum. Doping changes the story in a measurable way: substituting a fraction of the atoms shifts the band edges and can introduce states inside the gap, moving the absorption edge and bending the Tauc line. Comparing pristine and doped spectra — under the *same* fitting conventions — is therefore where the analysis begins rather than where it ends.

## Sources

- NIST — Fundamental Physical Constants (values of \(h\) and \(c\)): [https://physics.nist.gov/cuu/Constants/](https://physics.nist.gov/cuu/Constants/)
- K.-L. Zhang, C.-M. Liu, F.-Q. Huang, C. Zheng, W.-D. Wang, *Study of the electronic structure and photocatalytic activity of the BiOCl photocatalyst*, Appl. Catal. B **68**, 125–129 (2006) — an early report of BiOCl's optical bandgap, with an indirect-gap analysis.
