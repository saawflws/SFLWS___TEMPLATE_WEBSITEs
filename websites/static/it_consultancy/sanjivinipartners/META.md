# Sanjivini — Business-first technology partners

> A blueprint-grid IT-consultancy landing page with a self-drawing SVG process flowchart, a cool cyan→emerald accent, and a pinned one-surface-per-panel LocalFarmers showcase.

| Field | Value |
| --- | --- |
| **Name** | Sanjivini — Business-first technology partners |
| **Slug** | sanjivinipartners |
| **Category** | it_consultancy |
| **Framework** | static |
| **Path** | `websites/static/it_consultancy/sanjivinipartners/` |
| **Entry** | `index.html` — self-contained single file; inline CSS + JS + Tailwind config. Requires external CDNs: Tailwind (play CDN), GSAP + ScrollTrigger + MotionPathPlugin (cdnjs), Lenis (jsdelivr), Google Fonts; a few demo images hotlink Unsplash with a Picsum fallback. |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`blueprint-grid` `self-drawing-svg-flowchart` `cyan-to-emerald-accent` `fraunces-serif-display` `pinned-horizontal-showcase` `pure-css-device-mockups` `honeypot-contact-form` `graceful-cdn-fallback`

## Summary

The cool, engineering-blueprint cut of Sanjivini Digital Solutions. A very dark blue-ink canvas carries a faint blueprint grid, registration-mark corner ticks and outline numerals; the accent is a cyan (`#41B9D3`) that drifts toward emerald on scroll. Its signature is a hero SVG **process flowchart that draws itself** on load and then runs a dot around the "automated" loop forever via MotionPathPlugin. The flagship LocalFarmers marketplace is presented as a **pinned horizontal showcase with one product surface per panel** — Android app, consumer storefront, operations console — each an intricate pure-HTML/CSS device mockup (no screenshots). It carries more editorial sections than its sibling (six numbered: Services, Approach, Work, Ways of working, About, Contact) and degrades gracefully if its CDNs fail. Same company as `sanjivinifirst`; opposite temperature and a different way of showing the product.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | — (`#top` wraps main) | Blueprint grid, "Your business already works. The software should too.", self-drawing SVG flowchart with a traveling dot, feature chips |
| 2 | Ticker | — | Running band: Zoho One & CRM, process automation, web & mobile apps, marketplace platforms, Deluge, AppSheet … |
| 3 | Services | `#services` | Five services as an accordion (Zoho, Consulting, Custom apps, Marketplace, Automation); first item open by default |
| 4 | Approach | `#approach` | "Business first. Technology next.", three principles, a scrub-lit pull-quote, and by-the-numbers stat counters |
| 5 | Work | `#work` | Pinned horizontal LocalFarmers showcase — one surface per panel: Android app, storefront, ops console (pure-CSS mockups) |
| 6 | Ways of working | `#working` | Four accountability rows (one team end-to-end, honest platform/custom, "we run what we build", local & reachable) |
| 7 | About | `#about` | Studio statement, sectors served, process-mapping photo, based-in/hours/email facts |
| 8 | Contact | `#contact` | Project-brief form (name/email/topic/message) with honeypot + validation, "what happens next", direct contact |
| 9 | Footer | — | Brand, explore/services/contact columns, back-to-top |

## Palette

| Token | Hex / value | Role |
| --- | --- | --- |
| `ink` | `#0A1119` | Page background |
| `deep` | `#060B10` | Loader / deepest surface |
| `paper` | `#E9F1EC` | Primary text |
| `mist` | `#8CA39B` | Secondary / muted text |
| `--acid` | `#41B9D3` → `#34D399` | Cyan accent that drifts to emerald on scroll (buttons, links, flowchart, dots) |
| `--warn` | `#E0876A` | Coral form-error accent |
| `line` | `rgba(233,241,236,.12)` | Hairline borders / blueprint grid lines |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Fraunces | 300–650 (light default; italic accent word) | Serif display; hero, section titles, stats |
| Body | Space Grotesk | 300–700 | Body copy |
| Mono | JetBrains Mono | 300–700 | Labels, numerals, ticker, metadata |

Built on the Tailwind play CDN plus a custom `<style>` block. Icons are hand-inline SVG (no icon font).

## Interaction & motion

- Hero flowchart self-draws (stroke-dashoffset), nodes pop in, then a dot travels a motion path around the loop indefinitely (MotionPathPlugin); the whole SVG bobs gently.
- Accent colour drifts from cyan `rgb(65,185,211)` to emerald `rgb(52,211,153)` across the scroll, recolouring buttons, links and the flowchart.
- Services accordion (first open on load, single-open); a running technology ticker; scroll progress hairline; nav hides on scroll-down.
- Approach: scrub-lit pull-quote (words fade in) and count-up stats; parallax on the about image.
- Work: on ≥1024px the panel track pins and scrolls horizontally, one LocalFarmers surface per panel, with a live panel index/bar; stacked and revealed on mobile.
- Magnetic buttons, full-screen mobile menu, a project-brief form with a hidden honeypot field, inline validation and a toast; image `onerror`/empty swaps to seeded Picsum.
- Graceful degradation: if GSAP/ScrollTrigger fail to load the loader is removed and all content stays visible. Full `prefers-reduced-motion` path renders static (accordion first item opened, counters set).

## Best suited for

- IT / software / digital consultancies and technology partners that want an engineered, methodical, "we draw you the system" identity.
- Firms offering platform config (Zoho), custom apps, marketplace/platform work and automation, wanting a services accordion plus richer About / Ways-of-working editorial.
- Agencies with a flagship product they want to walk through surface-by-surface as detailed, dependency-free device mockups (no screenshots to maintain).
- Clients who value a resilient build that still shows content if the animation CDNs are blocked.

## Not a good fit for

- Warm, atmospheric or maximalist brands — this is cool, technical and restrained (blueprint grid, cyan accent).
- Clients without a flagship product or comparable case study — the pinned per-surface showcase is a centrepiece that expects real product surfaces.
- Sites needing the Tailwind/GSAP CDNs absent entirely — content survives, but the flowchart, showcase motion and drift do not.

## Notes for agents

- Same company and services as `sanjivinifirst`, deliberately the **cool, blueprint-diagram** counterpart: fixed cyan→emerald accent, self-drawing SVG flowchart, one-surface-per-panel horizontal showcase, and two extra editorial sections (Ways of working, About). Its sibling is warmer and more atmospheric (hue-drift, flow-field particles, an overlapping live device composition with a mode toggle). Pick on temperature and on how the flagship product should be shown.
- The LocalFarmers device mockups are pure HTML/CSS (no images), so they restyle cleanly to another brand's colours.
- Content is real (Sanjivini Digital Solutions, Bantwala / Bengaluru, LocalFarmers). Replace copy, contact details and the showcase surfaces for any other client.
- Uses MotionPathPlugin (in addition to GSAP/ScrollTrigger/Lenis). Forms are front-end only; a honeypot field guards against bots. Agents may open `index.html` for finer detail than this file covers.
