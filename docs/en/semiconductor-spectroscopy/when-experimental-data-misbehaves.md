# Sources of Error in Bandgap Measurements

*This page describes the main sources of error in bandgap measurements: instrumental noise, sample effects, and the choices made during Tauc fitting.*

## 1. The ideal and the real

The ideal chain is short. In the transmission geometry, light of intensity \(I_0\) enters a sample of thickness \(d\) and decays exponentially (Beer–Lambert law, [page 3.2](measuring-a-bandgap-with-light.md)):

\[
I = I_0\, e^{-\alpha d},
\qquad
\alpha = \frac{1}{d}\ln\frac{1}{T}.
\tag{1}
\]

Every step of the chain — instrument, sample, fitting procedure — makes an assumption. The chain works exactly when all of them hold, and real data departs from the chain wherever one of them fails. The useful skill is not pretending the data obeys; it is finding *which* assumption broke.

## 2. Where the errors come from

The sources of departure fall into three groups.

**The instrument.** A spectrophotometer reports \(I\) and \(I_0\), but what it measures is limited by its own imperfections: dark current (the detector's signal with no light at all), stray light that bypassed the sample, the finite width of the monochromator slit, and detector nonlinearity at extreme intensities. Each bends the measured \(T\) slightly away from the true one.

**The sample.** Equation (1) assumes a flat, uniform slab that only absorbs. Real samples also:

- **absorb in the substrate** — the glass or quartz holding the film has its own absorption edge;
- **interfere** — two parallel surfaces form a thin film, and reflected beams add constructively or destructively ([page 1.2](../foundations/interference-standing-waves-and-quantization.md)), printing fringes onto the spectrum;
- **scatter** — rough surfaces, powders, and suspensions send light away from the detector, which the instrument records as if it had been absorbed;
- **have uncertain thickness** — and since \(\alpha = (1/d)\ln(1/T)\), an error in \(d\) rescales every value of \(\alpha\) directly.

**The procedure.** Fitting a Tauc line involves choices — the wavelength range, the exponent \(n\), the extrapolation region — and each choice moves the intercept.

**The DRS-specific effects.** Diffuse reflectance measurements have their own error sources: the white reference and its baseline drift, the integrating sphere's collection geometry and whether the specular component is included or excluded, the scattering and thickness of the powder layer — if the layer is thin enough that light reaches the glass, the measured signal mixes light scattered by the powder with light reflected at the glass and passed back through the layer, so the sample acts as a two-layer system rather than an optically thick powder bed — and the wavelength dependence of the scattering coefficient. A pseudo-absorbance output such as \(\log(1/R)\) is not the absorption coefficient \(\alpha\), and the two must not be confused in a Tauc analysis. The error-propagation formula of Derivation 1 applies to the transmission model only.

??? derivation "Error propagation: how a small \(T\) error becomes a big \(\alpha\) error"

    From \(\alpha = \frac{1}{d}\ln\frac{1}{T}\), a small uncertainty \(\delta T\) in transmittance produces

    \[
    \delta\alpha = \frac{d\alpha}{dT}\,\delta T = -\frac{1}{d}\,\frac{\delta T}{T}.
    \]

    The sign only gives the direction; expressed as an uncertainty, take the magnitude \(|\delta\alpha| = \frac{1}{d}\frac{\delta T}{T}\). The trouble is the \(1/T\): where the sample transmits most of the light, \(T \approx 1\), and a small transmittance error stays small in \(\alpha\); where the sample absorbs strongly and \(T\) is small, the same absolute error \(\delta T\) is amplified. Where the worst noise lands depends on the sample and the wavelength range — it is *not* automatically in the Tauc fitting region, but wherever the transmittance is lowest. This first-order relation applies to any small deviation of \(T\) from its true value, random or systematic alike — a small systematic bias in \(T\) maps into a bias in \(\alpha\) through the same factor. The distinction between random and systematic errors appears afterwards, in the statistics: random errors shrink when measurements are repeated and averaged, while systematic ones persist.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Thin-film interference with oblique incidence"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.film { fill: var(--md-accent-fg-color); opacity: .18; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }.b1 { fill: none; stroke: currentColor; stroke-width: 1.8; }.b2 { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.8; }.nl { fill: none; stroke: currentColor; stroke-width: 1; stroke-dasharray: 4 4; opacity: .5; }</style><rect class="film" x="180" y="110" width="200" height="60"/><text x="335" y="145" text-anchor="middle" font-weight="bold">film (d, n)</text><line class="b1" x1="120" y1="20" x2="240" y2="110"/><line class="b1" x1="240" y1="110" x2="360" y2="20"/><text x="80" y="15" text-anchor="middle" class="dim">incoming</text><text x="330" y="12" text-anchor="middle" class="dim">beam 1 (top surface)</text><line class="b2" x1="120" y1="20" x2="240" y2="110"/><line class="b2" x1="240" y1="110" x2="258" y2="170"/><line class="b2" x1="258" y1="170" x2="276" y2="110"/><line class="b2" x1="276" y1="110" x2="396" y2="20"/><text x="465" y="12" text-anchor="middle" class="dim">beam 2 (bottom surface)</text><line class="nl" x1="240" y1="90" x2="240" y2="130"/><text x="232" y="100" text-anchor="end" class="dim">&#952;</text><line x1="165" y1="110" x2="165" y2="170" stroke="currentColor" stroke-width="1.4"/><polygon points="165,114 161,122 169,122" fill="currentColor"/><polygon points="165,166 161,158 169,158" fill="currentColor"/><text x="158" y="146" text-anchor="end" class="dim">d</text><text x="180" y="105" text-anchor="start" class="dim">n</text><text x="280" y="200" text-anchor="middle" class="dim">extra path &#8776; 2nd (near-normal): beams 1 and 2 leave parallel and interfere</text><text x="280" y="218" text-anchor="middle" class="dim">schematic, not to scale; reflection phase shifts can move the condition by half a period</text></svg>

*Two beams, one reflected from each face of the film, recombine at the detector — the two-beam interference of page 1.2. The bottom beam has travelled an extra round trip \(2nd\). When the two interfaces produce the same reflection phase shift (a free-standing film, or a film on a substrate with suitable index ordering), the beams reinforce for \(2nd = m\lambda\) and cancel half a wavelength away from that; if the two reflection phase shifts differ, these conditions move by half a period. For smooth, parallel surfaces the result is a set of fringes in the measured spectrum — exactly the kind of oscillation that distorts the "straight" Tauc region if uncorrected. The \(2nd\) estimate is a near-normal-incidence approximation; at larger angles the path difference also depends on the angle and on \(n\). A rough powder layer does not produce clear interference fringes.*

## 3. The Tauc fit is a choice

The [previous page](measuring-a-bandgap-with-light.md)'s prescription — *choose a physically justified Tauc exponent, fit an appropriate linear region, and extrapolate* — hides three decisions that real analysis must make.

**Which region to fit.** The data are never perfectly linear everywhere. The analyst chooses the energy window that "looks straightest", and the extrapolated intercept depends on that window. Fitting a slightly different range can shift \(E_g\) significantly, so the fitted value should carry an uncertainty from this choice.

**Which exponent.** The choice \(n = 2\) (direct) versus \(n = \tfrac12\) (indirect) is a physical hypothesis, not a fitting convenience. The wrong choice usually distorts the line: a direct-gap material plotted with the indirect exponent (or vice versa) typically fails to give a clean straight line. Even if part of the curve looks linear, that alone does not establish the model. The exponent must be justified from the material's band structure ([page 3.1](from-levels-to-bands.md)) or from independent evidence, not chosen to make the data look tidy.

**What the intercept actually is.** Even with correct choices, the fitted gap need not equal the intrinsic bandgap. The number extracted can be shifted by:

- **excitons** — the electron and hole it leaves behind attract each other, forming a bound pair with energy slightly *below* the gap, so absorption can start just below \(E_g\);
- **disorder** — structural disorder smears the band edges, so the absorption onset has no sharp beginning to intercept;
- **defect states** — impurities inside the gap open absorption channels at energies the pure crystal would forbid;
- **doping** — deliberately introduced atoms move the edge and bend the Tauc region.

Each of these is a *candidate explanation*, not an automatic conclusion, and distinguishing them requires further checks — temperature-dependent measurements, comparison with a pristine reference, or independent probes.

Each of the effects above is checked with a concrete measurement. A blank-substrate scan shows how much of the spectrum belongs to the substrate rather than the film. The thin-film fringes of [page 1.2](../foundations/interference-standing-waves-and-quantization.md) can be removed by fitting, or avoided by measuring on a different substrate. The sensitivity of the result to the fitting range can be estimated by repeating the fit over several slightly different energy windows and comparing the intercepts — their spread is a practical measure of the uncertainty in \(E_g\). A reported bandgap should state which checks were performed; a single spectrum can suggest a bandgap, and independent checks are what make the number trustworthy.
