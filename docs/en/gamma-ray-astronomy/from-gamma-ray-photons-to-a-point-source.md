# From Gamma-ray Photons to a Point Source

*This page explains how event lists are analysed to detect a point source: effective area, point spread function, flux sensitivity, and model comparison.*

## 1. What an event is

A single photon becomes a single **event**: a reconstructed arrival direction and energy, recorded at a moment in time ([page 4.2](how-fermi-lat-catches-them.md)). The catalogue accumulated over years contains billions of such events. But an event list is not yet astronomy — a "source" is a statement about the sky, and going from one to the other means distinguishing the photons of a source from the photons of everything else.

## 2. Three numbers that describe the instrument

Before a source can be claimed, the instrument itself must be understood. Three numbers matter, and they are deliberately kept distinct from each other ([page 4.2](how-fermi-lat-catches-them.md)):

- **Effective area** \(A_{\mathrm{eff}}(E, \theta)\). The size of an ideal detector that would catch the same number of photons as the real telescope. It is not a single number: it depends on photon energy and arrival angle, because conversion, tracking, and shower containment all vary with them.
- **Angular resolution / point spread function (PSF).** When a true point source is observed, the reconstructed directions do not all land on the source — they scatter around it. The **PSF** is that scatter's shape, and its width is quoted as the angle containing \(68\%\) of the events, \(\theta_{68}\) — a statistical property; a schematic sketch can only suggest the proportion, not count it exactly. For the LAT, \(\theta_{68} \approx 0.8^\circ\) at \(1\ \mathrm{GeV}\), worsening at lower energies as the electron–positron pair opens up.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="A point source seen through a point spread function, with background photons"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.ev { fill: var(--md-accent-fg-color); }.bg { fill: none; stroke: currentColor; stroke-width: 1.6; }.psf { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.6; stroke-dasharray: 6 4; }.src { fill: var(--md-accent-fg-color); }</style><path class="src" d="M280,130 l6,18 -20,-14 h28 l-20,14 Z"/><text x="280" y="104" text-anchor="middle" font-weight="bold">point source</text><circle class="psf" cx="280" cy="150" r="60"/><text x="280" y="232" text-anchor="middle" class="dim">&#952;&#8326;&#8328;: about 68% of source events land inside (schematic proportion)</text><circle class="ev" cx="280" cy="150" r="3"/><circle class="ev" cx="296" cy="138" r="3"/><circle class="ev" cx="265" cy="163" r="3"/><circle class="ev" cx="300" cy="166" r="3"/><circle class="ev" cx="256" cy="140" r="3"/><circle class="ev" cx="288" cy="176" r="3"/><circle class="ev" cx="322" cy="156" r="3"/><circle class="ev" cx="228" cy="112" r="3"/><circle class="ev" cx="345" cy="170" r="3"/><circle class="ev" cx="240" cy="205" r="3"/><circle class="bg" cx="140" cy="90" r="3.5"/><circle class="bg" cx="420" cy="80" r="3.5"/><circle class="bg" cx="480" cy="180" r="3.5"/><circle class="bg" cx="120" cy="220" r="3.5"/><circle class="bg" cx="400" cy="250" r="3.5"/><circle class="bg" cx="180" cy="40" r="3.5"/><text x="140" y="80" text-anchor="start" class="dim">background photon</text><text x="420" y="70" text-anchor="start" class="dim">background photon</text><text x="280" y="275" text-anchor="middle" class="dim">the instrument smears a true point into a scatter &#8212; that scatter is the PSF</text><text x="280" y="292" text-anchor="middle" class="dim">detection means: the concentration of events beats the background scatter</text><text x="280" y="309" text-anchor="middle" class="dim" opacity=".55">Schematic illustration, not real data.</text></svg>

*What a "point" source actually looks like to the instrument: its photons land in a scatter whose size is the PSF, while background photons land everywhere. A source claim is the statement that a concentration of events stands out from that background scatter — the intuitive content of the next section's arithmetic.*
- **Energy resolution.** How precisely the calorimeter assigns an energy — roughly \(10\)–\(15\%\) for the LAT.

These describe the *instrument*. They say nothing yet about what the sky actually emits — that is the distinction the rest of the page insists on.

## 3. Flux and flux sensitivity

**Flux** is a property of the source. A point source with flux \(F\) (photons per area per time) delivers, through an instrument with effective area \(A_{\mathrm{eff}}\) observed for time \(t\), an expected number of photons

\[
N_{\mathrm{src}} = F\, A_{\mathrm{eff}}\, t,
\tag{1}
\]

where \(A_{\mathrm{eff}}\) is averaged over the relevant energy range and viewing geometry.

**Flux sensitivity** is a property of the observation. The photons of interest arrive mixed with background counts \(B\) — the diffuse gamma-ray glow of the Galaxy and of the whole sky, plus any instrumental leakage.

Before any formula, the honest starting point is a fact about counting: photons arrive at random. Point the telescope at a perfectly steady source for eight equal time windows and you will not get the same count each time — the numbers scatter. In the ideal Poisson model of such counts, a measurement of \(N\) photons fluctuates from run to run by roughly

\[
\text{typical spread} \approx \sqrt{N},
\tag{2}
\]

and the bar chart below shows what that looks like for a source averaging ten photons per window:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 260" style="width:100%;max-width:640px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Poisson fluctuations of photon counts around a mean"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.ax { stroke: currentColor; stroke-width: 1.4; }.bar { fill: var(--md-accent-fg-color); opacity: .55; }.mean { stroke: var(--md-accent-fg-color); stroke-width: 1.6; stroke-dasharray: 5 4; }</style><line class="ax" x1="60" y1="180" x2="560" y2="180"/><line class="ax" x1="60" y1="180" x2="60" y2="30"/><text x="310" y="214" text-anchor="middle">observation window number</text><text transform="rotate(-90)" x="-105" y="22" text-anchor="middle">photon count</text><rect class="bar" x="80" y="72" width="34" height="108"/><rect class="bar" x="140" y="48" width="34" height="132"/><rect class="bar" x="200" y="84" width="34" height="96"/><rect class="bar" x="260" y="36" width="34" height="144"/><rect class="bar" x="320" y="60" width="34" height="120"/><rect class="bar" x="380" y="96" width="34" height="84"/><rect class="bar" x="440" y="24" width="34" height="156"/><rect class="bar" x="500" y="60" width="34" height="120"/><text x="97" y="196" text-anchor="middle" class="dim">1</text><text x="157" y="196" text-anchor="middle" class="dim">2</text><text x="217" y="196" text-anchor="middle" class="dim">3</text><text x="277" y="196" text-anchor="middle" class="dim">4</text><text x="337" y="196" text-anchor="middle" class="dim">5</text><text x="397" y="196" text-anchor="middle" class="dim">6</text><text x="457" y="196" text-anchor="middle" class="dim">7</text><text x="517" y="196" text-anchor="middle" class="dim">8</text><line class="mean" x1="60" y1="60" x2="560" y2="60"/><text x="310" y="232" text-anchor="middle" class="dim">dashed line: mean = 10 &#183; typical spread &#8776; &#8730;10 &#8776; 3</text><text x="310" y="252" text-anchor="middle" class="dim" opacity=".6">a perfectly steady source still gives fluctuating counts &#8212; schematic, not real data</text></svg>

*Eight identical observations of a perfectly steady source — the counts still differ, scattered around the mean by about \(\sqrt{\bar{N}}\). Detecting a few extra photons does not by itself prove anything new is there; it may just be the scatter. (Schematic, not real data.)*

So an excess \(S\) above background \(B\) is believable only when it clearly exceeds the background's own fluctuation, of order \(\sqrt{B}\). In the **background-dominated limit** — the regime that matters for faint sources, where the background supplies most of the counts — the significance is approximately

\[
\sigma \approx \frac{S}{\sqrt{B}},
\tag{3}
\]

an approximation with stated conditions, not a general law. Requiring a detection at significance \(\sigma\), and combining with equation (1), gives the minimum flux an observation can certify:

\[
\boxed{F_{\mathrm{min}} \propto \frac{\sqrt{B}}{A_{\mathrm{eff}}\, t}}
\tag{4}
\]

Three practical consequences, each worth pausing on:

- **Time helps twice.** \(B\) also grows with \(t\), so \(F_{\mathrm{min}} \propto \sqrt{t}/t = 1/\sqrt{t}\): four times longer exposure certifies sources twice as faint. This is why the LAT never stops scanning.
- **Area matters.** A larger effective area lowers \(F_{\mathrm{min}}\) when the background is unchanged. If the background counts scale with the area too, the gain is slower — the derivation below gives \(F_{\mathrm{min}} \propto 1/\sqrt{A_{\mathrm{eff}}\,t}\) for a uniform background.
- **Background matters.** In a crowded or diffuse-bright region (the Galactic plane), \(B\) is large and \(F_{\mathrm{min}}\) suffers; in a dark part of the sky, the same instrument certifies far fainter sources.

Flux is what the source *is*; sensitivity is what the observation *can say*. A null result — no detection — is a statement about \(F_{\mathrm{min}}\), not about the source being absent.

??? derivation "The scaling of equation (4)"

    From equation (1), the expected source counts are \(S = F A_{\mathrm{eff}} t\). Requiring \(S/\sqrt{B} = \sigma\):

    \[
    \frac{F A_{\mathrm{eff}} t}{\sqrt{B}} = \sigma
    \quad\Longrightarrow\quad
    F_{\mathrm{min}} = \frac{\sigma\sqrt{B}}{A_{\mathrm{eff}} t},
    \]

    which is equation (4) with the significance \(\sigma\) absorbed into the proportionality. If the background rate is uniform, \(B = b\, A_{\mathrm{eff}}\, t\, \Omega\) (rate \(b\), solid angle \(\Omega\)), then \(F_{\mathrm{min}} = \sigma\sqrt{b\,\Omega/(A_{\mathrm{eff}} t)} \propto 1/\sqrt{t}\) — the square-root improvement with time.

## 4. Turning events into a source

The standard analysis proceeds in four steps, and this section describes the method rather than any particular result.

**1. Choose the region.** A region of interest (ROI) is drawn around a candidate position — from a catalogue, an earlier hint, or a targeted question.

**2. Build a model of the sky.** The expected photon distribution is assembled from components: the candidate point source, the **Galactic diffuse emission** (gamma rays produced by cosmic rays interacting with interstellar gas and light), and an **isotropic diffuse** component from unresolved sources everywhere. Each component has parameters — position, flux, spectral shape.

**3. Compare the models.** Picture the question concretely. Two models describe the same sky region:

- **Model A**: a point source plus background.
- **Model B**: background alone.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" style="width:100%;max-width:660px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Two models of the same sky region"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.bg { fill: none; stroke: currentColor; stroke-width: 1.4; }.cl { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 1.5; stroke-dasharray: 5 4; }.panel { fill: none; stroke: currentColor; stroke-width: 1; opacity: .35; }</style><rect class="panel" x="20" y="40" width="290" height="170"/><text x="165" y="30" text-anchor="middle" font-weight="bold">Model A: source + background</text><circle class="bg" cx="120" cy="120" r="3"/><circle class="bg" cx="140" cy="95" r="3"/><circle class="bg" cx="160" cy="130" r="3"/><circle class="bg" cx="130" cy="105" r="3"/><circle class="bg" cx="150" cy="115" r="3"/><circle class="bg" cx="175" cy="100" r="3"/><circle class="bg" cx="60" cy="70" r="3"/><circle class="bg" cx="250" cy="60" r="3"/><circle class="bg" cx="270" cy="170" r="3"/><circle class="bg" cx="70" cy="180" r="3"/><circle class="bg" cx="200" cy="180" r="3"/><circle class="bg" cx="60" cy="120" r="3"/><circle class="cl" cx="145" cy="112" r="38"/><text x="220" y="108" text-anchor="start" class="dim">point</text><text x="220" y="121" text-anchor="start" class="dim">source</text><rect class="panel" x="340" y="40" width="290" height="170"/><text x="485" y="30" text-anchor="middle" font-weight="bold">Model B: background alone</text><circle class="bg" cx="440" cy="120" r="3"/><circle class="bg" cx="460" cy="95" r="3"/><circle class="bg" cx="480" cy="130" r="3"/><circle class="bg" cx="450" cy="105" r="3"/><circle class="bg" cx="470" cy="115" r="3"/><circle class="bg" cx="495" cy="100" r="3"/><circle class="bg" cx="380" cy="70" r="3"/><circle class="bg" cx="570" cy="60" r="3"/><circle class="bg" cx="590" cy="170" r="3"/><circle class="bg" cx="390" cy="180" r="3"/><circle class="bg" cx="520" cy="180" r="3"/><circle class="bg" cx="380" cy="120" r="3"/><text x="480" y="108" text-anchor="middle" class="dim">?</text><text x="320" y="238" text-anchor="middle" class="dim">the observed events are identical in both panels; only the model expectation differs</text></svg>

*The same observed events, seen under two models: once as a source plus background, once as background alone. Both panels show identical data; only the model's expectation differs. The model that makes the observed events more probable is preferred — and the size of its advantage is the evidence. (Schematic, not real data.)*

The parameters of each model are adjusted so that the model describes the observed events as well as possible, and then the two models are compared on the same data: how much larger is the likelihood of the data when the point source is included? A summary of this comparison, the **test statistic** (TS), condenses the answer into a single number — the larger the TS, the more strongly the data favour the source. (Converting a TS value into a familiar significance is a statistical step with its own conventions, beyond this site.) One caution closes the picture: a model that merely fits the data *better* does not prove the source. Any extra parameter tends to improve a fit; the question is whether the improvement is large enough to be believed — a judgment of significance, not of fit quality alone. What matters here is the logic — the source is the element that makes the data more probable — and its discipline: the model must be stated before it is tested against the data.

**4. Report with boundaries.** The output is a flux (with uncertainty), a significance, and a statement of the model's assumptions. The flux is only as good as the background model: an underestimated diffuse component masquerades as source flux, and in crowded regions nearby sources trade flux with each other.

The computational work — reading event lists, building the maps, running the comparison, drawing the results — is done with standard analysis software developed by the collaboration.

Instrumental effects matter as well — the PSF broadens at low energy, so positions and fluxes of faint sources carry larger uncertainties there. And the detection itself is a statistical statement: a marginal excess can disappear when the background model is changed slightly. These are the practical limits of any point-source claim.
