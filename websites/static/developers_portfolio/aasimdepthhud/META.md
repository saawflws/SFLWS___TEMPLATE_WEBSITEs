# Aasim Depth HUD — Instrument Descent Portfolio

> A HUD-instrument developer portfolio with a live depth readout, rail nav, core-sample skills, and an expandable work manifest.

| Field | Value |
| --- | --- |
| **Name** | Aasim Depth HUD — Instrument Descent Portfolio |
| **Slug** | aasimdepthhud |
| **Category** | developers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/developers_portfolio/aasimdepthhud/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + module JS, Google Fonts + Tailwind Play + Three.js + GSAP/ScrollTrigger + Motion ESM + Lucide via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`hud-depth-readout` `scrollspy-rail-nav` `core-sample-skills` `manifest-details-worklog` `self-drawing-dive-chart` `bracket-mono-links`

## Summary

The instrument-voiced half of a two-template descent pair: no standard nav, just a fixed HUD (name + live 0000–6200 m depth) and a right-edge scrollspy rail. Skills render as a vertical core sample with depth-tagged branches; work is a native-details expandable manifest; experience pairs a self-drawing dive-profile chart with a log. Its sibling `aasimdepthchart` shares the navy/brass/teal tokens, fonts, copy spine, and particle atmosphere but uses conventional components throughout (header nav, depth bands, alternating cards, dot timeline) — pick this one for the HUD/rail/manifest reading, that one for the familiar structure. Both differ from `aasimvoxel` (game world) and `aasimexpedition` (cartographic dossier) in every component.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | Name pinned bottom-left at huge scale, floating HUD status panel (depth/role/base/status), lede, bracket mono links (work + résumé) |
| 2 | About | `#about` | Two-column narrative plus mono readout stat list (5+ years, 20+ projects, 3 languages, 1 compiler) with count-up |
| 3 | Skills | `#skills` | Vertical core-sample bar (brass→teal gradient) with four branching blocks: Surface 0 m, Application −420 m, Intelligence −1,150 m, Systems −3,600 m |
| 4 | Work | `#work` | Expandable manifest of four entries (Fieldwork, Compass CRM Sync, Ledger, Strata) with inline SVG visuals and tag rows |
| 5 | Experience | `#experience` | Self-drawing dive-profile SVG (solid path + dashed self-study branch, surface/deep captions) plus five-row log (2024–Present … 2020 B.Tech) |
| 6 | Contact | `#contact` | Quiet sign-off reusing readout lines (mail/code/profile placeholder handles) |
| 7 | Footer | — | Availability status line, "built with Tailwind, GSAP, Three.js and Motion" credit |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0A0E16` | Page background (dark navy) |
| `--bg-2` | `#0F1420` | Alternating surfaces, entry visuals |
| `--bg-3` | `#141A28` | Deepest card surfaces |
| `--ink` | `#ECE7DA` | Headings, primary text |
| `--ink-body` | `#C7C3B8` | Body copy |
| `--ink-dim` | `#7D8497` | Muted labels, ledes, captions |
| `--brass` | `#C9A227` | Shallow-depth accent (HUD, markers, dates) |
| `--brass-soft` | `#E3C267` | Bright brass — hover, active rail, readout indices |
| `--teal` | `#6FC8BC` | Deep-depth accent (Systems block, footer status, deep rows) |
| `--line` | `rgba(236,231,218,0.09)` | Hairline dividers |
| `--line-strong` | `rgba(236,231,218,0.18)` | Strong borders, HUD panel frame |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headings | Bricolage Grotesque (`opsz` 12–96) | 400–800, 600 for headings | Hero name, section titles, entry names, log headings |
| Body | Manrope | 400, 500, 600, 700 | Ledes, narrative, entry/log copy |
| Mono / data | IBM Plex Mono | 400, 500, 600 | HUD, readouts, depths, tags, dates, footer status |

## Interaction & motion

- Fixed HUD depth readout counts with scroll (rAF-throttled, 0000–6200 m max) in both the top-left chip and hero panel; right-edge rail dots scrollspy via IntersectionObserver with a centered root margin.
- Ambient Three.js particle field (420 brass/teal points) drifts behind the page; scroll dollies the camera forward and the mouse offsets it. Requires network access to the Three.js CDN; hidden entirely under reduced motion or if THREE fails to load.
- GSAP hero entrance staggers HUD panel, name lines, lede, and links; skill blocks parallax at staggered rates past the core sample; the dive path draws via stroke-dashoffset scrub; stats count up once via ScrollTrigger. Requires network access to the GSAP CDN; without it the page renders statically.
- Work entries are native `<details>` with an animated grid-rows expand and rotating chevron; HUD links have a Motion magnetic pull (Motion imported as ESM from jsdelivr — requires network access).
- Lucide icons render via CDN script with a `window.lucide` guard; résumé href (`./resume-aasim-ahmed.pdf`) is a placeholder file that does not ship.
- `prefers-reduced-motion` collapses all animation/transition durations and shows final states (counts set instantly, canvas hidden).

## Best suited for

- A backend-leaning or AI/systems developer who wants the "descent into the stack" story told structurally, not just in copy
- Minimal-chrome tastes: readers who prefer a HUD + rail over a marketing header will feel at home
- Portfolios with exactly 3–5 projects that suit short manifest rows better than big alternating cards
- Developers comfortable with Three.js/GSAP CDN dependencies in exchange for atmosphere
- Anyone pairing freelance availability with a research/systems thread (compilers, Rust, Go)

## Not a good fit for

- Audiences needing conventional navigation cues — there is no header menu, and first-time visitors may miss the rail
- Image-led portfolios: work visuals are abstract inline SVGs, so screenshot-driven case studies fit `aasimdepthchart` or `aasimexpedition` better
- Offline or CDN-hostile deployments — particles, entrance, and icons all fail without network access

## Notes for agents

- This template arrived with an `about.md` of rework notes (HUD replacing nav, bracket links, readout stats, core-sample bar, details manifest, dive chart, quiet contact) kept alongside as `about.md`; its facts are folded into this META.md and `p.md`. The arrival `about.md` is provenance, not site content.
- Work entries, skill bands, log rows, and rail dots are all hardcoded in matching order — adding a section means updating the rail `data-section` map, the observer list, and the depth scale together.
- Contact handles (`hello@aasimahmed.dev`, github/linkedin placeholder URLs) and the résumé PDF href are placeholders to replace before shipping.
- External dependencies: Google Fonts, Tailwind Play CDN, cdnjs Three.js r128 + GSAP 3.12.5 + ScrollTrigger, jsdelivr Motion ESM + Lucide UMD — all require network access.
- The `--brass` → `--teal` gradient is the design's load-bearing metaphor (shallow product → deep systems); retheming should preserve a two-pole depth ramp, not a single accent.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
