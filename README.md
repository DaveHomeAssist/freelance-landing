# Freelance Landing

Dave Robertson's personal services page — "Systems Architecture & AI Engineering" — live at **[davehomeassist.github.io/freelance-landing](https://davehomeassist.github.io/freelance-landing/)** via GitHub Pages (served from `main`, root).

Despite the repo name, this is **not** a template for local-business freelance clients. It started that way, then `index.html` was fully rewritten (April 2026) into Dave's own consulting/portfolio page. The original React concept lives on as an unused legacy file (see below).

## What's here

| Path | What it is |
|---|---|
| `index.html` | **The live site.** Static HTML/CSS/vanilla JS — no build step, no framework. Hero, Services, Approach, and Contact sections, plus scroll-reveal animations and smooth-scroll nav. |
| `brand.html` | Standalone "System by Dave" brand reference/style guide page. Not linked from `index.html`; kept for design consistency reference. |
| `freelance-landing.jsx` | **Legacy/orphaned.** An earlier React component for a generic local-business landing page ("Rapid Sites" pricing tiers, portfolio, contact form). Written for a bundler (`import`/`export default`) — it is not loaded by the current `index.html` and does not run in production. Kept for reference only. |
| `freelance-landing-feature-analysis-2026-03-25.md` | A feature audit of the *old* React-based version of this page. Predates the April 2026 rewrite, so several of its findings (Babel loading bug, contact form, OG image) no longer apply to the current `index.html`. |
| `favicon.svg`, `assets/icons/favicon/` | Favicon set (SVG + PNG sizes + Apple touch icon) used by the live page. |

## How to run it

No build, no dependencies. Open `index.html` directly in a browser, or serve the directory statically:

```
npx serve .
```

## Conventions

- `index.html` is hand-authored HTML/CSS/JS committed as-is — there's no source/dist split and no bundler. Edit it directly.
- `skills.html`, linked from the nav, does not exist in this repo — it's expected to be added later or resolved by the Pages deploy environment.
