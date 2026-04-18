# Freelance Landing -- Feature Analysis

**Date:** 2026-03-25
**Files analyzed:** `index.html`, `freelance-landing.jsx`
**Stack:** React 18 (CDN) + JSX via Babel, static HTML shell

---

## Summary Table

| Feature | Status | Data Source / Persistence | Critical Gap |
|---|---|---|---|
| Campaign landing page | Working | Static JSX component | None |
| Pricing cards (3 tiers) | Working | Hardcoded PACKAGES array | Identical data to freelance/app.js |
| Portfolio showcase (4 projects) | Working | Hardcoded PORTFOLIO array | 2 of 4 are "Coming Soon" placeholders |
| Contact form | **Broken** | Local state only | **P1: Form data never submitted -- same bug as freelance** |
| FAQ accordion (7 items) | Working | Hardcoded FAQS array | None |
| Process timeline (4 steps) | Working | Hardcoded PROCESS array | None |
| Social proof testimonials | Working | Hardcoded SOCIAL_PROOF array | Generic attributions |
| Sticky nav with blur | Working | CSS backdrop-filter | None |
| Satisfaction guarantee | Working | Static content | None |
| OG meta + og:image | Working | Static in `<head>` | og:image URL defined (better than siblings) |
| Noscript fallback | Working | `<noscript>` block | Good |
| Reduced-motion support | Working | `prefers-reduced-motion` | None |
| Babel JSX transform | Working | `type="text/babel"` script tag | **JSX requires Babel runtime -- see below** |

---

## Detailed Feature Analysis

### 1. Relationship to Freelance Main Site
**Problem it solves:** Provides a standalone, campaign-ready landing page separate from the full freelance site. Designed for alternate entry points (ads, social links).
**Implementation:** `freelance-landing.jsx` uses ES module `import` syntax and `export default` -- but `index.html` loads it via `<script type="text/babel">`. The data arrays (PACKAGES, PORTFOLIO, PROCESS, FAQS, SOCIAL_PROOF) are identical to `freelance/app.js`.
**Critical gap:** The JSX file uses `import { useState, useEffect, useRef } from "react"` which would only work with a bundler, but index.html loads React from CDN and uses `type="text/babel"`. **This file likely does not render in production** without a Babel standalone script tag (which is missing). The page would show only the noscript fallback content.

### 2. Contact Form (Same Bug as Freelance)
**Problem it should solve:** Lead capture.
**Implementation:** `ContactForm` component calls `setSent(true)` on click. No actual data submission.
**Critical gap:** Identical to the freelance project -- form shows fake success, data goes nowhere.

### 3. Design System
**Problem it solves:** Maintains visual consistency with the freelance main site.
**Implementation:** Identical CSS token system (same custom properties, same font imports, same animation keyframes). The entire CSS block is duplicated from freelance/app.js.
**Tradeoffs:** Full code duplication means any design change must be made in two places.

### 4. OG Image
**Implementation:** Unlike the contractor and freelance siblings, this project defines `og:image` pointing to `https://davehomeassist.github.io/freelance-landing/assets/og-image.png`. Social sharing will render properly if the image exists at that URL.

---

## Top 3 Priorities

1. **Fix the Babel/JSX loading issue.** The `index.html` references `freelance-landing.jsx` as `type="text/babel"` but does not include the Babel standalone script. This means the component never mounts in production. Either add `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>` or pre-compile the JSX to plain JS (matching the contractor/freelance pattern).

2. **Fix the contact form submission.** Same P1 issue as freelance -- wire to Netlify Forms or another backend.

3. **Eliminate code duplication with freelance.** The data arrays and CSS are fully duplicated. Consider whether this landing page should exist as a separate project or be a route/variant within the main freelance site.
