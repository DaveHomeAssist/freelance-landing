# Changelog

Sourced from `git log`. Grouped by date.

## 2026-03-17 — Initial scaffold
- Initial commit: freelance landing page component (`freelance-landing.jsx`, a React component built for a bundler)
- Initial project snapshot

## 2026-03-19 — Housekeeping
- Add local archives ignore
- Sync local changes

## 2026-03-20 — Static shell + accessibility
- Add `index.html` with meta tags and a React (CDN + Babel) entry point for `freelance-landing.jsx`
- Add SPA fallback landmarks and skip link (a11y)
- Add robust `<noscript>` fallback for React CDN failure

## 2026-03-21 — Polish
- Add meta descriptions, `prefers-reduced-motion` support, and favicon fixes

## 2026-04-12 — Full rewrite
- Replace `index.html` wholesale with a new static (no React) personal services page for Dave Robertson — "Systems Architecture & AI Engineering." This superseded the original React/Babel campaign-landing concept; `freelance-landing.jsx` was left in place but is no longer loaded by the page.

## 2026-04-17 — Brand + scaffolding
- Add `brand.html` (System by Dave brand reference), a multi-size favicon set, `CLAUDE.md`, and a feature-analysis writeup of the pre-rewrite version

## 2026-04-18 — Cleanup
- Remove deprecated `AGENTS.md` (`CLAUDE.md` is canonical)

## 2026-06-20 — Favicon audit
- Add site favicon (favicon audit remediation)

## 2026-07-06 — Licensing
- Add LICENSE: explicit all-rights-reserved
