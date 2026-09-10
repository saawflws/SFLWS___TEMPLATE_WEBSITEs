# Aasim Expedition — Cartographic Developer Portfolio

> An expedition-dossier developer portfolio with contour-map project art, modal case files, and a live depth rail.

| Field | Value |
| --- | --- |
| **Name** | Aasim Expedition — Cartographic Developer Portfolio |
| **Slug** | aasimexpedition |
| **Category** | developers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/developers_portfolio/aasimexpedition/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + JS, Google Fonts + Tailwind Play + Three.js + GSAP/ScrollTrigger + Lenis + Motion + Lucide via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`expedition-dossier` `topographic-contour-projects` `case-file-modal` `depth-rail-meter` `ember-particle-field` `letter-split-hero` `cdn-failure-banner`

## Summary

A dark ink-and-amber expedition dossier that frames a developer career as fieldwork: BASE CAMP hero, ORIGIN, EQUIPMENT, EXPEDITIONS, LOG, SIGNAL. Every project pairs its write-up with a procedurally generated topographic contour SVG that draws itself on scroll, and opens a full case-file modal (context/approach/outcome/stack). Where `aasimvoxel` is a loud Minecraft game world and the depth-chart siblings share one navy/brass/teal instrument system, this is the editorial cartographic one — Fraunces serif display, corner-ticked dossier panels, a live DEPTH rail, and the shelf's most defensive loading story (CDN diagnostics, no-GSAP static fallback, 5-second emergency reveal).

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 0 | Preloader | — | "Triangulating position" with live lat/long counter and progress bar |
| 1 | Hero / Base camp | `#hero` | Eyebrow (role + availability pulse), giant uppercase AASIM'AHMED, lede, coordinates, dual CTAs, scroll-to-descend cue |
| 2 | About / Origin | `#about` | Whole-stack narrative, production-metrics strip, corner-ticked dossier panel (base/focus/degree/current/status) |
| 3 | Skills / Equipment | `#skills` | Five groups (Frontend/Backend/AI-ML/Systems/Operations) as percentage bars with count-up values |
| 4 | Projects / Expeditions | `#projects` | Four entries (Cortexa, Zoho Overhaul, rust-tcc, Driftline) with contour terrain SVGs; click opens case-file modal |
| 5 | Experience / Log | `#experience` | Four dated entries (freelance, CRM engineer, intern, B.Tech) beside a self-drawing route line |
| 6 | Contact / Signal | `#contact` | Giant reply-within-a-day headline, copy-email line, project/social buttons, response dossier, footer |
| 7 | Case-file modal | — | Per-project context/approach/outcome/stack/GitHub link overlay (not a section) |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--ink` | `#0A0E0B` | Page background (green-black) |
| `--ink2` | `#101511` | Modal, toast, menu surfaces |
| `--line` | `#232B20` | Borders, rules, chips, buttons |
| `--bone` | `#E8E3D4` | Primary text |
| `--sage` | `#939A86` | Secondary text, eyebrows, labels |
| `--amber` | `#D9A24B` | Accent — selections, active states, markers, focus |

Content-only colors (hardcoded, not tokens): skill-bar track `#1A2018`, scrollbar thumb `#2A3225`, contour rings bone at low opacity with one amber ring, ember-field tints `#D9A24B` / `#E8E3D4` / `#6F7A62`, modal scrim ink at 90%.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines | Fraunces (`opsz` 9–144, italic axis) | 300–600 | Uppercase hero at huge scale, amber apostrophe; italic amber `em` accents in section titles |
| Body | Archivo | 400, 500, 600 | Lede, narrative, project and timeline copy |
| Mono / labels | JetBrains Mono | 400, 500 | Eyebrows, nav, meta columns, chips, dossier, rail, modal labels |

## Interaction & motion

- Preloader counts lat/long to 12.9716° N / 77.5946° E with a progress bar, then wipes up into a letter-split hero intro (per-character rise, staggered eyebrow/sub/header/rail/cue).
- Lenis smooth scroll (disabled under reduced motion) drives GSAP ScrollTrigger reveals: masked-word headings, fade-up blocks, rule scan-lines, ghost-numeral parallax, hero drift-and-fade on exit.
- Contour terrains are seeded procedural SVGs (6 rings + summit marker) drawn per project via stroke-dashoffset on first scroll into view; the experience route line scrubs its draw with scroll and entries activate passing a trigger.
- Skill bars wipe in and counters count up once per row; left rail (xl+) shows live section name, scroll progress fill, and a DEPTH 0000–1500M meter; header gains blur past 70px.
- Clicking (or Enter/Space on) a project opens its case-file modal from the `PROJECTS` JS array (context/approach/outcome/stack/link); Escape/backdrop/close dismisses with scroll-locking; text selection suppresses accidental opens.
- Custom dot-and-lagging-ring cursor on fine pointers (expands to an OPEN badge over projects); magnetic buttons via Motion springs.
- Three.js ember particle field (340–680 points by viewport) drifts upward behind content and descends with scroll progress; renders one static frame under reduced motion. Requires network access to the Three.js CDN; all 3D is decorative and failure-safe.
- CDN probe names any failed library in an on-page banner (Tailwind height check + typeof guards for GSAP/ScrollTrigger/Lucide/THREE/Lenis/Motion); missing GSAP renders a clean static page, and a 5-second emergency timer always removes the loader.
- Live IST clocks tick every second; copy-email uses Clipboard API with execCommand fallback and toast confirmation.

## Best suited for

- A full-stack or AI engineer with 3–5 substantial engagements who can write a real context/approach/outcome story per project
- Developers whose brand is fieldwork and honesty (production pager, edge cases, "terrain may vary" footnotes) over polish
- Freelancers needing a strong contact funnel (copy-email, project CTA, response-time dossier) with availability signalling
- Sites that must degrade gracefully — the static fallback and CDN diagnostics suit flaky-network audiences
- Serif-friendly tastes: the Fraunces/amber dossier look suits writers and conference speakers as well as builders

## Not a good fit for

- Portfolios with more than ~5 projects — contour seeds, modal array entries, and the rail map are all hand-wired per project
- Bright, playful, or game-voiced brands — the expedition register (log, dossier, signal) is structural, and `aasimvoxel` covers that mood instead
- Teams or agencies — every line of copy is first-person singular field notes

## Notes for agents

- The four projects live in two places that must be edited together: the article cards in markup and the `PROJECTS` JS array (idx/title/meta/context/approach/outcome/stack/link) that feeds the modal. Contour SVGs are generated from `seed = 7 + i * 131` per `.terrain` element in DOM order.
- Section ids (`hero/about/skills/projects/experience/contact`) are referenced by the header nav, rail dots, mobile menu, and the `SECTS` scrollspy array — rename everywhere or nowhere.
- Contact handles (`hello@aasimahmed.dev`, GitHub/LinkedIn URLs) and the `EMAIL` const are placeholders; project GitHub links point at example repos.
- External dependencies: Google Fonts, Tailwind Play CDN, cdnjs Three.js r128 + GSAP 3.12.5 + ScrollTrigger, unpkg Lenis 1.1.14 + Lucide 0.454, jsdelivr Motion 11.11 — all require network access; the page degrades without them but loses its motion.
- The `SECTS` rail labels (00 · BASE CAMP … 05 · SIGNAL) and ghost numerals are display copy, not navigation state — update the copy if section order changes.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
