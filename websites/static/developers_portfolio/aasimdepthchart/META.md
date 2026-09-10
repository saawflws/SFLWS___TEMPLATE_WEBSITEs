# Aasim Depth Chart — Banded Descent Portfolio

> A conventional-chrome developer portfolio rendering the same descent concept as stepped depth bands and alternating project cards.

| Field | Value |
| --- | --- |
| **Name** | Aasim Depth Chart — Banded Descent Portfolio |
| **Slug** | aasimdepthchart |
| **Category** | developers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/developers_portfolio/aasimdepthchart/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + module JS, Google Fonts + Tailwind Play + Three.js + GSAP/ScrollTrigger + Motion ESM + Lucide via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`depth-band-skills` `alternating-project-cards` `dot-timeline-progress` `pill-cta-hero` `particle-depth-field` `hamburger-overlay-nav`

## Summary

The conventional-chrome half of a two-template descent pair: a fixed header with pill CTA, full-width depth-band skills, alternating project cards, and a dot timeline with a scroll-filling progress line. It shares tokens, fonts, copy spine, projects, and particle atmosphere with its sibling `aasimdepthhud` — which renders the same content as HUD readout, rail nav, core sample, manifest, and dive chart — so pick on chrome, not content. Against the wider category it is the safe familiar one: nothing here needs explaining, unlike the game world of `aasimvoxel` or the dossier apparatus of `aasimexpedition`.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | Kicker, giant two-line name, role line, lede, pill buttons (primary + ghost résumé), scroll cue |
| 2 | About | `#about` | Two-column narrative plus 2×2 stat card grid (5+ years, 20+ projects, 3 languages, 1 compiler) with count-up |
| 3 | Skills | `#skills` | Four full-width depth bands: Surface 0 m, Application −420 m, Intelligence −1,150 m, Systems −3,600 m, with stepped indents and darkening backgrounds |
| 4 | Work | `#work` | Four alternating image/text cards (Fieldwork, Compass CRM Sync, Ledger, Strata) with inline SVG visuals and tag rows |
| 5 | Experience | `#experience` | Five-entry dot timeline with scroll-filling progress line (2024–Present … 2020 B.Tech) |
| 6 | Contact | `#contact` | Centered sign-off with icon links (email/GitHub/LinkedIn placeholders) |
| 7 | Footer | — | Availability status line, "built with Tailwind, GSAP, Three.js and Motion" credit |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0A0E16` | Page background (dark navy) |
| `--bg-2` | `#0F1420` | Band and card alternating surfaces |
| `--bg-3` | `#141A28` | Deepest visual surfaces |
| `--ink` | `#ECE7DA` | Headings, primary text |
| `--ink-body` | `#C7C3B8` | Body copy |
| `--ink-dim` | `#7D8497` | Muted labels, ledes, captions |
| `--brass` | `#C9A227` | Primary accent — CTAs, markers, active dates |
| `--brass-soft` | `#E3C267` | Bright brass — hover, stats, progress |
| `--teal` | `#6FC8BC` | Deep-depth accent (Systems band, deep rows, footer status) |
| `--line` | `rgba(236,231,218,0.09)` | Hairline dividers |
| `--line-strong` | `rgba(236,231,218,0.18)` | Strong borders, card frames |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headings | Bricolage Grotesque (`opsz` 12–96) | 400–800, 600 for headings | Hero title, section titles, band indices, project and timeline headings |
| Body | Manrope | 400, 500, 600, 700 | Ledes, narrative, project and timeline copy, buttons |
| Mono / data | IBM Plex Mono | 400, 500, 600 | Kicker, depths, tags, dates, contact links, footer status |

## Interaction & motion

- Fixed header with backdrop blur; mobile hamburger toggles a full-screen overlay nav that closes on link selection (aria-expanded tracked).
- Ambient Three.js particle field (420 brass/teal points) with scroll-driven camera dolly and mouse offset, identical system to its sibling. Requires network access to the Three.js CDN; hidden under reduced motion or if THREE fails.
- GSAP hero entrance staggers kicker, name lines, role, lede, and actions; hero content parallaxes down on exit; depth bands drift at staggered rates; timeline progress fills via scaleY scrub; stats count up once. Requires network access to the GSAP CDN.
- Motion magnetic pull on pill buttons plus scale tilt/zoom on project visuals (Motion ESM from jsdelivr — requires network access); Lucide icons guarded by `window.lucide`.
- Résumé href (`./resume-aasim-ahmed.pdf`) is a placeholder file that does not ship.
- `prefers-reduced-motion` collapses animation/transition durations and shows final states instantly.

## Best suited for

- A full-stack or AI developer who likes the depth-chart story but needs conventional navigation clients already understand
- Portfolios with 3–5 projects that deserve large alternating visuals rather than compact manifest rows
- Freelancers wanting a clear pill-CTA hero and centered contact funnel with minimal friction
- Teams cloning for a junior-to-mid engineer: the component shapes (cards, bands, timeline) are the easiest in the category to extend
- Anyone who wants the navy/brass/teal atmosphere without the HUD learning curve of `aasimdepthhud`

## Not a good fit for

- Brands needing a distinctive interaction signature — every pattern here is familiar, which is the point, but it will not be remembered for its chrome
- Game-voiced or dossier-voiced identities — those live in `aasimvoxel` and `aasimexpedition`
- Offline deployments — particles, entrance choreography, and icons all require network access

## Notes for agents

- This template arrived with an `about.md` design-concept note (depth-chart descent, navy base, brass→teal ramp, Bricolage/Manrope/Plex Mono, Three.js + GSAP + Motion, reduced-motion) kept alongside as `about.md`; its facts are folded into this META.md and `p.md`. The arrival `about.md` is provenance, not site content.
- The four projects (Fieldwork, Compass CRM Sync, Ledger, Strata) share copy and SVG visuals with `aasimdepthhud` but use different components (alternating cards vs manifest) — port content edits to both only if keeping the pair in sync deliberately.
- Depth bands use `data-depth` attributes with stepped padding and darkening backgrounds; the Systems band retints to teal. Adding a band means extending the ramp, not just appending a row.
- Contact handles (`hello@aasimahmed.dev`, github/linkedin placeholder URLs) and the résumé PDF href are placeholders to replace before shipping.
- External dependencies: Google Fonts, Tailwind Play CDN, cdnjs Three.js r128 + GSAP 3.12.5 + ScrollTrigger, jsdelivr Motion ESM + Lucide UMD — all require network access.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
