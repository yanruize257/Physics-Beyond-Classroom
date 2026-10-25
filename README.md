# Physics Beyond Classroom

A bilingual (English / 中文) physics website: 13 core articles plus a home page, organised around three research areas — hydrogen frequency standards (microwaves), semiconductor spectroscopy (visible/UV), and Fermi-LAT gamma-ray astronomy (high-energy photons) — with a Foundations section on the shared wave/quantum ideas.

Built with [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), with bilingual navigation provided by [mkdocs-static-i18n](https://github.com/ultrabug/mkdocs-static-i18n) and mathematics rendered by MathJax 3.

## Structure

- `docs/en/` — English pages (home + 13 articles)
- `docs/zh/` — Chinese pages (identical structure)
- `mkdocs.yml` — site configuration, navigation, and language translations
- `.github/workflows/deploy.yml` — GitHub Actions build & GitHub Pages deployment

All figures are inline SVG, drawn once per language so that labels are fully translated.

## Local preview

```bash
python -m venv .venv && source .venv/bin/activate   # optional
pip install -r requirements.txt
mkdocs serve
```

The preview is served at `http://127.0.0.1:8000/` (English), with the Chinese version under `/zh/`.

Build for production:

```bash
mkdocs build --strict
```

## Deployment

Pushing to the `main` branch triggers GitHub Actions, which installs the pinned dependencies, runs `mkdocs build --strict`, and publishes the `site/` output to GitHub Pages (Artifact-based Pages deployment). The site is published at:

<https://yanruize257.github.io/Physics-Beyond-Classroom/>
