# How Accurate Is an Atomic Clock?

*This page explains the difference between clock accuracy and stability, and why both matter for timekeeping.*

## 1. What makes a clock accurate?

Two different qualities hide behind the everyday word "accuracy", and separating them is the first lesson of timekeeping.

**Accuracy** asks whether the clock's average rate is right. Suppose a clock runs at frequency \(f\), while the true frequency is \(f_0\). Its fractional offset is

\[
y = \frac{f - f_0}{f_0} = \frac{\Delta f}{f_0}.
\tag{1}
\]

A clock with \(y = 10^{-10}\) is, on average, off by one part in ten billion — a systematic error.

**Stability** asks something different: how constant is the rate over time? A clock whose frequency wobbles slightly around \(f_0\), sometimes fast and sometimes slow, can be accurate *on average* while being unstable at every instant.

The classic analogy is archery. Accuracy is where the centre of the arrow group lands relative to the bullseye; stability is how tightly the arrows cluster.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" style="width:100%;max-width:600px;height:auto;display:block;margin:1.25em auto;" role="img" aria-label="Accuracy versus stability: four targets"><style>text { font-family: var(--md-text-font, sans-serif); fill: currentColor; font-size: 12px; }.dim { opacity: .7; font-size: 11px; }.dot { fill: var(--md-accent-fg-color); }</style><circle cx="140" cy="75" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="75" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="116" cy="59" r="3"/><circle class="dot" cx="120" cy="61" r="3"/><circle class="dot" cx="114" cy="63" r="3"/><circle class="dot" cx="118" cy="57" r="3"/><circle class="dot" cx="122" cy="59" r="3"/><circle cx="400" cy="75" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="400" cy="75" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="397" cy="72" r="3"/><circle class="dot" cx="403" cy="73" r="3"/><circle class="dot" cx="400" cy="78" r="3"/><circle class="dot" cx="398" cy="77" r="3"/><circle class="dot" cx="403" cy="76" r="3"/><circle cx="140" cy="165" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="140" cy="165" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="156" cy="165" r="3"/><circle class="dot" cx="170" cy="145" r="3"/><circle class="dot" cx="146" cy="135" r="3"/><circle class="dot" cx="168" cy="161" r="3"/><circle class="dot" cx="152" cy="151" r="3"/><circle class="dot" cx="168" cy="149" r="3"/><circle cx="400" cy="165" r="18" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="400" cy="165" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle class="dot" cx="382" cy="151" r="3"/><circle class="dot" cx="416" cy="155" r="3"/><circle class="dot" cx="392" cy="181" r="3"/><circle class="dot" cx="414" cy="177" r="3"/><circle class="dot" cx="398" cy="145" r="3"/><circle class="dot" cx="408" cy="167" r="3"/><circle class="dot" cx="384" cy="169" r="3"/><text x="140" y="118" text-anchor="middle" class="dim">stable but offset</text><text x="400" y="118" text-anchor="middle" class="dim">stable and accurate</text><text x="140" y="208" text-anchor="middle" class="dim">unstable and inaccurate</text><text x="400" y="208" text-anchor="middle" class="dim">accurate on average, unstable</text><text x="280" y="232" text-anchor="middle" class="dim" opacity=".55">Schematic illustration.</text></svg>

*Accuracy is where the group lands; stability is how tightly the group clusters. Both axes are needed to judge a clock. (Schematic illustration.)* A group can be tightly clustered far from the bullseye (stable, inaccurate) or loosely scattered around it (accurate on average, unstable). Real clocks occupy both axes at once, and different technologies are strong on different axes:

- **A quartz watch** ticks steadily, but its crystal ages — its frequency drifts slowly but surely. Stable in the short term, drifting in the long term.
- **A hydrogen maser** ([pages 2.1–2.3](the-hydrogen-atoms-smallest-split.md)) is among the steadiest oscillators ever built over seconds to hours — the stability champion — but its absolute frequency depends on the tuning of its cavity, so its *accuracy* is not automatic.
- **A caesium clock** is the accuracy reference: the SI second is defined by fixing the caesium-133 hyperfine transition at \(9\,192\,631\,770\) cycles per second. A real caesium clock still carries its own measurement errors — the definition does not make any individual instrument automatically perfect. Yet its short-term rate fluctuates more than a hydrogen maser's.

The lesson: accuracy and stability are independent axes, and a frequency standard is judged on both. A good clock must be *right* and *steady* — and those must be measured separately.

## 2. Why do real clocks drift?

The atom's transition is fixed by fundamental constants to an extraordinary approximation; the apparatus around it is not. Every real clock is a compromise between an ideal reference and imperfect hardware. For a hydrogen maser, the drift sources are a short list, and each traces back to pages of this site:

- **Magnetic fields.** A stray field shifts the transition ([page 2.2](spins-in-a-magnetic-field.md)). Magnetic shielding and a controlled C-field keep this shift small and known.
- **Wall collisions.** Each bounce of an atom against the storage bulb's coating perturbs its levels slightly — the wall shift of [page 2.3](from-a-quiet-atom-to-a-ticking-clock.md).
- **Cavity temperature.** Metal expands when heated. The cavity's resonant frequency depends on its size ([page 1.2](../foundations/interference-standing-waves-and-quantization.md): the note of a "string" depends on its length), so an unregulated cavity slowly retunes itself.
- **Electronics.** The feedback loop that locks the quartz oscillator to the atoms contributes its own noise.

Each of these effects is tiny, but a frequency standard is judged on tiny numbers, so a real clock must account for its own imperfections.

## 3. How small errors become large problems

A frequency error does not stay small; it *accumulates* as a time error. This is the key arithmetic of timekeeping.

Suppose a clock runs at \(f = f_0 + \Delta f\), a constant offset (this is the systematic-error case; random wobble belongs to stability, section 1). Over a time \(T\), it counts

\[
N = f\,T
\tag{2}
\]

ticks, but the correct count is \(f_0 T\). The error in the count is

\[
\Delta N = \Delta f \cdot T,
\tag{3}
\]

and since each tick is meant to be \(1/f_0\) seconds, the accumulated time error is

\[
\boxed{\Delta t = \frac{\Delta N}{f_0} = \frac{\Delta f}{f_0}\,T = y\,T}
\tag{4}
\]

The fractional frequency error, multiplied by the elapsed time, is the time error. Two worked numbers:

\[
y = 10^{-12}:\quad
\Delta t = 10^{-12}\times 86\,400\ \mathrm{s} = 86.4\ \mathrm{ns\ per\ day},
\]

\[
y = 10^{-15}:\quad
\Delta t = 10^{-15}\times 3.16\times10^{7}\ \mathrm{s} \approx 31.5\ \mathrm{ns\ per\ year}.
\]

One century is \(100\) years \(\approx 3.16\times10^{9}\ \mathrm{s}\), so the accumulated errors over a century are

\[
y = 10^{-12}:\quad
\Delta t = 10^{-12}\times 3.16\times10^{9}\ \mathrm{s} \approx 3.2\ \mathrm{ms},
\]

\[
y = 10^{-15}:\quad
\Delta t = 10^{-15}\times 3.16\times10^{9}\ \mathrm{s} \approx 3.2\ \mu\mathrm{s}.
\]

The lesson: *a constant fractional error is not a constant time error — it grows linearly with time*, and what matters is not the offset alone but how long the clock runs unattended.

??? derivation "The counting steps (equations 2–4)"

    Start from the definition: a clock counts cycles. In time \(T\), a clock running at \(f\) cycles per second counts \(N = fT\) cycles. The ideal clock running at \(f_0\) would count \(N_0 = f_0 T\).

    The difference is \(\Delta N = N - N_0 = (f - f_0)T = \Delta f \cdot T\).

    Each cycle of the ideal clock lasts \(1/f_0\) seconds, so a miscount of \(\Delta N\) cycles corresponds to a time error

    \[
    \Delta t = \frac{\Delta N}{f_0} = \frac{\Delta f}{f_0}\,T,
    \]

    which is equation (4). This derivation *does* assume a constant offset: \(\Delta f\) was taken as a fixed number. If the offset wanders in time, the accumulated error is instead the integral

    \[
    \Delta t = \int_0^T y(t)\, dt,
    \]

    and describing that wandering — rather than this simple linear growth — is the job of professional metrology, which tracks a clock's frequency continuously rather than trusting one measurement.

## 4. Why does this matter in astronomy?

Two applications of this site's context make the arithmetic above urgent.

**Very Long Baseline Interferometry.** Radio dishes separated by thousands of kilometres observe the same source, each recording its signal with its own local clock; the recordings are combined afterwards. For the signals to add coherently, the arrival-time differences between stations must be known to nanoseconds. A maser at each station provides the reference that keeps the array in phase — this is why the observatory context of this site is full of hydrogen masers.

**Satellite navigation.** GPS, Galileo, and BeiDou work by timing: a receiver measures how long a radio signal took to travel from the satellite, then converts travel time into distance:

\[
\Delta x = c\,\Delta t,
\tag{5}
\]

so a timing error of \(1\ \mathrm{ns}\) becomes a distance error of \(0.30\ \mathrm{m}\) along a single signal path, and \(1\ \mu\mathrm{s}\) becomes \(300\ \mathrm{m}\) — the full position error also depends on the satellite geometry. The satellites therefore carry atomic clocks, and the systems are steered from the ground by stations running hydrogen masers.

## Sources

- BIPM — SI base unit: second (caesium transition, \(9\,192\,631\,770\ \mathrm{Hz}\)): [https://www.bipm.org/en/si-base-units/second](https://www.bipm.org/en/si-base-units/second)
- NIST — Time and Frequency publications: [https://www.nist.gov/pml/time-and-frequency-division](https://www.nist.gov/pml/time-and-frequency-division)
- Typical active hydrogen masers show fractional frequency instabilities of order \(10^{-13}\)–\(10^{-15}\) on timescales from seconds to hours, and VLBI arrays require station clocks synchronised to nanoseconds — both standard figures in the time-and-frequency literature, with exact numbers varying between instruments.
