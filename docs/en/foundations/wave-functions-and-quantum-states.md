# Wave Functions and Quantum States

*This page introduces the wave function and the Born rule, and connects them to the quantum numbers of atomic states.*

## 1. Matter waves

De Broglie (1924): a particle with momentum \(p\) carries a wavelength

\[
\lambda = \frac{h}{p},
\tag{1}
\]

with \(h\) the Planck constant. Confirmed in 1927, when electrons fired at a crystal produced diffraction patterns exactly like those of X-rays (Davisson–Germer); today the electron microscope runs on it. A \(1\ \mathrm{kg}\) ball moving at \(1\ \mathrm{m/s}\) has \(\lambda = h/mv \approx 6.6\times10^{-34}\ \mathrm{m}\) — invisible. An electron inside an atom has \(\lambda \approx 10^{-10}\ \mathrm{m}\), the atom's own size: it must fit.

## 2. The wave function \(\psi\)

The particle's wave is written \(\psi\), the **wave function**. Born's rule: \(|\psi(x)|^2\) is the probability density of finding the particle at \(x\) — where the wave is tall, the particle is likely to be. The probability must add up to one over all space:

\[
\int |\psi|^2\, dx = 1.
\tag{2}
\]

One notation deserves a picture rather than algebra. \(\psi\) can be complex-valued, and \(|\psi|^2 = \psi^*\psi\) — the "squared size" of the wave, the way the squared length of a shadow is what matters rather than the direction the shadow points. Think of \(\psi\) as a rotating arrow: the arrow's direction carries the wave's phase — the overall phase is unobservable, though relative phases between paths do show up in interference — and only its *length*, squared, becomes the probability. The measurable, physical quantity is always \(|\psi|^2\).

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 200" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Wave function and its probability density"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.ax { stroke: currentColor; stroke-width: 1.3; }.w { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.p { fill: var(--md-accent-fg-color); opacity: .35; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }</style><line class="ax" x1="40" y1="60" x2="530" y2="60"/><path class="w" d="M40,60.0 L42,58.2 L44,56.4 L46,54.6 L48,52.9 L50,51.1 L52,49.4 L54,47.6 L56,45.9 L58,44.3 L60,42.6 L62,41.0 L64,39.5 L66,38.0 L68,36.5 L70,35.1 L72,33.7 L74,32.4 L76,31.1 L78,29.9 L80,28.7 L82,27.6 L84,26.6 L86,25.7 L88,24.8 L90,24.0 L92,23.2 L94,22.6 L96,22.0 L98,21.4 L100,21.0 L102,20.6 L104,20.4 L106,20.2 L108,20.0 L110,20.0 L112,20.0 L114,20.2 L116,20.4 L118,20.6 L120,21.0 L122,21.4 L124,22.0 L126,22.6 L128,23.2 L130,24.0 L132,24.8 L134,25.7 L136,26.6 L138,27.6 L140,28.7 L142,29.9 L144,31.1 L146,32.4 L148,33.7 L150,35.1 L152,36.5 L154,38.0 L156,39.5 L158,41.0 L160,42.6 L162,44.3 L164,45.9 L166,47.6 L168,49.4 L170,51.1 L172,52.9 L174,54.6 L176,56.4 L178,58.2 L180,60.0 L182,61.8 L184,63.6 L186,65.4 L188,67.1 L190,68.9 L192,70.6 L194,72.4 L196,74.1 L198,75.7 L200,77.4 L202,79.0 L204,80.5 L206,82.0 L208,83.5 L210,84.9 L212,86.3 L214,87.6 L216,88.9 L218,90.1 L220,91.3 L222,92.4 L224,93.4 L226,94.3 L228,95.2 L230,96.0 L232,96.8 L234,97.4 L236,98.0 L238,98.6 L240,99.0 L242,99.4 L244,99.6 L246,99.8 L248,100.0 L250,100.0 L252,100.0 L254,99.8 L256,99.6 L258,99.4 L260,99.0 L262,98.6 L264,98.0 L266,97.4 L268,96.8 L270,96.0 L272,95.2 L274,94.3 L276,93.4 L278,92.4 L280,91.3 L282,90.1 L284,88.9 L286,87.6 L288,86.3 L290,84.9 L292,83.5 L294,82.0 L296,80.5 L298,79.0 L300,77.4 L302,75.7 L304,74.1 L306,72.4 L308,70.6 L310,68.9 L312,67.1 L314,65.4 L316,63.6 L318,61.8 L320,60.0 L322,58.2 L324,56.4 L326,54.6 L328,52.9 L330,51.1 L332,49.4 L334,47.6 L336,45.9 L338,44.3 L340,42.6 L342,41.0 L344,39.5 L346,38.0 L348,36.5 L350,35.1 L352,33.7 L354,32.4 L356,31.1 L358,29.9 L360,28.7 L362,27.6 L364,26.6 L366,25.7 L368,24.8 L370,24.0 L372,23.2 L374,22.6 L376,22.0 L378,21.4 L380,21.0 L382,20.6 L384,20.4 L386,20.2 L388,20.0 L390,20.0 L392,20.0 L394,20.2 L396,20.4 L398,20.6 L400,21.0 L402,21.4 L404,22.0 L406,22.6 L408,23.2 L410,24.0 L412,24.8 L414,25.7 L416,26.6 L418,27.6 L420,28.7 L422,29.9 L424,31.1 L426,32.4 L428,33.7 L430,35.1 L432,36.5 L434,38.0 L436,39.5 L438,41.0 L440,42.6 L442,44.3 L444,45.9 L446,47.6 L448,49.4 L450,51.1 L452,52.9 L454,54.6 L456,56.4 L458,58.2 L460,60.0 L462,61.8 L464,63.6 L466,65.4 L468,67.1 L470,68.9 L472,70.6 L474,72.4 L476,74.1 L478,75.7 L480,77.4 L482,79.0 L484,80.5 L486,82.0 L488,83.5 L490,84.9 L492,86.3 L494,87.6 L496,88.9 L498,90.1 L500,91.3 L502,92.4 L504,93.4 L506,94.3 L508,95.2 L510,96.0 L512,96.8 L514,97.4 L516,98.0 L518,98.6 L520,99.0 L522,99.4 L524,99.6 L526,99.8 L528,100.0 L530,100.0"/><text x="285" y="13" text-anchor="middle">&#968;(x) = A sin(kx): can be positive or negative</text><line class="ax" x1="40" y1="150" x2="530" y2="150"/><path class="p" d="M40,150.0 L42,149.9 L44,149.7 L46,149.3 L48,148.7 L50,148.0 L52,147.2 L54,146.2 L56,145.1 L58,143.8 L60,142.5 L62,141.0 L64,139.5 L66,137.9 L68,136.2 L70,134.5 L72,132.7 L74,130.9 L76,129.1 L78,127.3 L80,125.5 L82,123.8 L84,122.1 L86,120.5 L88,119.0 L90,117.5 L92,116.2 L94,114.9 L96,113.8 L98,112.8 L100,112.0 L102,111.3 L104,110.7 L106,110.3 L108,110.1 L110,110.0 L112,110.1 L114,110.3 L116,110.7 L118,111.3 L120,112.0 L122,112.8 L124,113.8 L126,114.9 L128,116.2 L130,117.5 L132,119.0 L134,120.5 L136,122.1 L138,123.8 L140,125.5 L142,127.3 L144,129.1 L146,130.9 L148,132.7 L150,134.5 L152,136.2 L154,137.9 L156,139.5 L158,141.0 L160,142.5 L162,143.8 L164,145.1 L166,146.2 L168,147.2 L170,148.0 L172,148.7 L174,149.3 L176,149.7 L178,149.9 L180,150.0 L182,149.9 L184,149.7 L186,149.3 L188,148.7 L190,148.0 L192,147.2 L194,146.2 L196,145.1 L198,143.8 L200,142.5 L202,141.0 L204,139.5 L206,137.9 L208,136.2 L210,134.5 L212,132.7 L214,130.9 L216,129.1 L218,127.3 L220,125.5 L222,123.8 L224,122.1 L226,120.5 L228,119.0 L230,117.5 L232,116.2 L234,114.9 L236,113.8 L238,112.8 L240,112.0 L242,111.3 L244,110.7 L246,110.3 L248,110.1 L250,110.0 L252,110.1 L254,110.3 L256,110.7 L258,111.3 L260,112.0 L262,112.8 L264,113.8 L266,114.9 L268,116.2 L270,117.5 L272,119.0 L274,120.5 L276,122.1 L278,123.8 L280,125.5 L282,127.3 L284,129.1 L286,130.9 L288,132.7 L290,134.5 L292,136.2 L294,137.9 L296,139.5 L298,141.0 L300,142.5 L302,143.8 L304,145.1 L306,146.2 L308,147.2 L310,148.0 L312,148.7 L314,149.3 L316,149.7 L318,149.9 L320,150.0 L322,149.9 L324,149.7 L326,149.3 L328,148.7 L330,148.0 L332,147.2 L334,146.2 L336,145.1 L338,143.8 L340,142.5 L342,141.0 L344,139.5 L346,137.9 L348,136.2 L350,134.5 L352,132.7 L354,130.9 L356,129.1 L358,127.3 L360,125.5 L362,123.8 L364,122.1 L366,120.5 L368,119.0 L370,117.5 L372,116.2 L374,114.9 L376,113.8 L378,112.8 L380,112.0 L382,111.3 L384,110.7 L386,110.3 L388,110.1 L390,110.0 L392,110.1 L394,110.3 L396,110.7 L398,111.3 L400,112.0 L402,112.8 L404,113.8 L406,114.9 L408,116.2 L410,117.5 L412,119.0 L414,120.5 L416,122.1 L418,123.8 L420,125.5 L422,127.3 L424,129.1 L426,130.9 L428,132.7 L430,134.5 L432,136.2 L434,137.9 L436,139.5 L438,141.0 L440,142.5 L442,143.8 L444,145.1 L446,146.2 L448,147.2 L450,148.0 L452,148.7 L454,149.3 L456,149.7 L458,149.9 L460,150.0 L462,149.9 L464,149.7 L466,149.3 L468,148.7 L470,148.0 L472,147.2 L474,146.2 L476,145.1 L478,143.8 L480,142.5 L482,141.0 L484,139.5 L486,137.9 L488,136.2 L490,134.5 L492,132.7 L494,130.9 L496,129.1 L498,127.3 L500,125.5 L502,123.8 L504,122.1 L506,120.5 L508,119.0 L510,117.5 L512,116.2 L514,114.9 L516,113.8 L518,112.8 L520,112.0 L522,111.3 L524,110.7 L526,110.3 L528,110.1 L530,110.0"/><text x="285" y="166" text-anchor="middle">|&#968;|&#178; &#8805; 0</text><text x="285" y="186" text-anchor="middle" class="dim">this example uses a real-valued wave function; in general &#968; can be complex — only |&#968;|&#178; is real</text></svg>

*The wave function can be positive or negative; its squared magnitude is the probability density — never negative, and zero wherever the wave is zero. (Schematic, not to scale.)*

## 3. A wave must fit

Here the previous page's lesson becomes a physical principle. A confined wave — like the standing patterns on a fixed string ([page 1.2](interference-standing-waves-and-quantization.md)) — cannot have any shape; only certain patterns fit. The allowed patterns form a *discrete* set — pattern 1, pattern 2, pattern 3, with nothing in between — because a wave either fits or it does not.

The same idea, carried into three dimensions around a nucleus, produces the atom's discrete states. Around a nucleus the fitting is richer, and the surviving patterns are labelled by quantum numbers: \(n\) (the principal quantum number) is tied to the pattern's energy and size, \(l\) to the orbital angular momentum, and \(m\) to the projection of that angular momentum along a chosen axis. The key message is not the labels but their origin: discreteness comes from fitting, not from some hidden rule. Strictly speaking, the hydrogen levels come from the quantum eigenstates in the nucleus's Coulomb potential; the fitting picture captures the discreteness but is an analogy, not a derivation. (One careful distinction: "discrete" means the states are separate, with no states in between — it does *not* mean there are only finitely many. Hydrogen, for example, has an infinite ladder of them, \(n = 1, 2, 3, \dots\).)

## 4. Atomic energy levels

A real atom confines its electron through the Coulomb attraction of the nucleus, and its fitting patterns are its energy levels. Hydrogen's ladder is

\[
E_n = -\frac{13.6\ \mathrm{eV}}{n^2},
\tag{3}
\]

with \(n = 1, 2, 3, \dots\) the K, L, M shells — a standard result of quantum mechanics, quoted here rather than derived. The ground state \(E_1\) is the lowest rung; every rung above is an excited state; and the ladder is the same for every atom of the same element, anywhere in the universe — a frequency reference written into nature, unlike a pendulum whose frequency is hostage to its environment.

A **transition** is the wave switching from one pattern to another: the atom falls from \(E_2\) to \(E_1\), and the energy difference leaves as one photon,

\[
E_2 - E_1 = h\nu,
\qquad
\boxed{\nu = \frac{E_2 - E_1}{h}}
\tag{4}
\]

with \(h = 6.626\,070\,15\times10^{-34}\ \mathrm{J\cdot s}\) (exact since 2019). Because both the level spacing and \(h\) are universal constants, the photon's frequency is fixed and identical for every atom of the element — an oscillator with nothing to wear out. The reverse process is absorption, which is strongest when \(h\nu\) matches a level spacing — real spectral lines have a finite width, from the levels' natural lifetimes and the atoms' motion — and this is why each element has its own spectral fingerprint. A related but distinct process is the photoelectric effect, in which light frees an electron from a solid when \(h\nu\) exceeds the binding energy.

Experiments measure wavelengths, so the practical form matters:

\[
E = \frac{hc}{\lambda},
\qquad
E\,[\mathrm{eV}] \approx \frac{1240}{\lambda\,[\mathrm{nm}]}.
\tag{5}
\]

Hydrogen's spectral series are sorted by the landing rung: jumps ending on \(n = 1\) emit ultraviolet (Lyman series), on \(n = 2\) light mostly in the visible and near ultraviolet (Balmer series), on \(n = 3\) infrared (Paschen series).

??? example "Worked numbers: the Lyman-\(\alpha\) line"

    The jump \(n = 2 \to 1\):

    \[
    h\nu = E_2 - E_1
    = 13.6\,\mathrm{eV}\left(1 - \frac{1}{4}\right)
    = 10.2\ \mathrm{eV},
    \]

    \[
    \lambda = \frac{hc}{h\nu}
    = \frac{1240}{10.2}\ \mathrm{nm}
    \approx 121.6\ \mathrm{nm},
    \]

    deep in the ultraviolet — the first line of the Lyman series.

## 5. Spin: a quantum state of its own

If the states were only the fitting patterns, the list would end here. But Stern and Gerlach (1922) sent a beam of silver atoms through a magnet and watched it split into exactly *two* beams: the electron carries an internal angular momentum — **spin** — and for a spin-\(\tfrac12\) particle the projection along any chosen measurement axis has only two possible outcomes; the proton carries a spin as well.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 250" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Stern-Gerlach experiment: a beam splits into two"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12.5px; }.dim { opacity: .7; font-size: 11.5px; }.box { fill: none; stroke: currentColor; stroke-width: 1.5; }.magnet { fill: var(--md-accent-fg-color); opacity: .2; stroke: var(--md-accent-fg-color); stroke-width: 1.5; }.beam { fill: none; stroke: var(--md-accent-fg-color); stroke-width: 2; }.spot { fill: var(--md-accent-fg-color); }</style><rect class="box" x="20" y="100" width="70" height="40"/><text x="55" y="116" text-anchor="middle">atom beam</text><text x="55" y="131" text-anchor="middle" class="dim">(source)</text><path class="beam" d="M90,120 L230,120"/><rect class="magnet" x="230" y="70" width="26" height="100"/><rect class="magnet" x="256" y="70" width="26" height="100"/><text x="243" y="60" text-anchor="middle" font-weight="bold">N</text><text x="269" y="60" text-anchor="middle" font-weight="bold">S</text><text x="256" y="190" text-anchor="middle" class="dim">inhomogeneous magnet</text><path class="beam" d="M282,120 C330,120 340,80 390,62"/><path class="beam" d="M282,120 C330,120 340,160 390,178"/><line x1="400" y1="30" x2="400" y2="210" stroke="currentColor" stroke-width="2"/><text x="400" y="24" text-anchor="middle" class="dim">screen</text><circle class="spot" cx="400" cy="62" r="7"/><circle class="spot" cx="400" cy="178" r="7"/><text x="420" y="66" text-anchor="start" class="dim">spin up</text><text x="420" y="182" text-anchor="start" class="dim">spin down</text><text x="280" y="232" text-anchor="middle" class="dim">exactly two spots &#8212; the spin projection has only two outcomes; schematic, not to scale</text></svg>

*The Stern–Gerlach experiment: a beam of atoms passes through an inhomogeneous magnet and lands in exactly two spots, corresponding to the two possible spin projections. (Schematic, not to scale.)*

One point must be stated plainly: spin does **not** follow from the fitting argument of section 3. It is an additional, internal property of the particle, discovered in experiments and added to quantum mechanics as a new kind of state. What matters for this site is that spin exists, that each spin is a tiny magnet, and that two magnets differ in energy when parallel versus antiparallel. For hydrogen, that magnetic interaction splits the ground state into two very close rungs — the singlet and the triplet discussed in the next article (the picture of two bar magnets is only an illustration, not a fixed classical arrangement) — and the jump between them emits the \(21\ \mathrm{cm}\) line.
