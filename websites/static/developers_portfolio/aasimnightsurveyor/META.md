# Aasim Night Surveyor — Field-Log Developer Portfolio

> A night-survey field-log developer portfolio with a Three.js terrain horizon, compass hero, and stacked expedition cards.

| Field | Value |
| --- | --- |
| **Name** | Aasim Night Surveyor — Field-Log Developer Portfolio |
| **Slug** | aasimnightsurveyor |
| **Category** | developers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/developers_portfolio/aasimnightsurveyor/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + JS, Google Fonts + Tailwind Play + Three.js + GSAP/ScrollTrigger + Motion + Lucide via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed prompt (arrived as bare HTML) |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`field-log-surveyor` `threejs-terrain-horizon` `compass-instrument-hero` `sticky-stacked-projects` `scramble-decode-labels` `dust-mote-canvas` `ist-clock-chrome`

## Summary

A nocturnal surveyor's field log that frames the same full-stack × AI/ML career spine as its siblings (React/Next products, Zoho automation, YOLOv8 pipelines, Rust VM) as night expeditions: FIELD NOTES, INSTRUMENTS, EXPEDITIONS, WAYPOINTS, BASECAMP. Where `aasimexpedition` is the serif dossier with case-file modals, `aasimvoxel`/`aasimloadout` are game worlds, and the depth-chart siblings share one navy/brass instrument system, this is the Unbounded-display night-survey one — a Three.js wireframe terrain horizon with ember particles behind a giant AASIM/AHMED hero, a rotating compass instrument, sticky stacked project cards with no modals, and scramble-decode mono labels throughout.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero / Top | `#top` | Eyebrow role line, giant AASIM (solid) / AHMED (outlined) display, lede, Hyderabad/IST/availability chips, dual CTAs, compass instrument, scroll cue, discipline marquee |
| 2 | About / Field notes | `#about` | Sticky portrait card (EST. 2020 · IN), whole-stack narrative (product + ML + Zoho cartography + systems), count-up stats strip, currently-exploring note |
| 3 | Skills / Instruments | `#skills` | Five metered groups: Frontend 92%, Backend 88%, AI/ML 84%, Systems 76%, full-width CRM specialty 95% with chip lists |
| 4 | Work / Expeditions | `#work` | Four sticky stacked cards (Trailhead, Meridian, Driftline, Emberlang) with metric chips and stack lines, plus Field Experiments E-01–E-06 index rows |
| 5 | Experience / Waypoints | `#experience` | Four dated entries (Independent Consultant, Zoho Architect, Full-stack, Systems Intern) beside a scroll-drawn timeline with activating dots |
| 6 | Contact / Basecamp | `#contact` | Giant headline, email line, transmit form (name/email/message), engagement-models table, socials + résumé button, timezone/response notes, footer |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `pitch` | `#090D0C` | Page background |
| `moss` | `#0F1513` | Alt section and project-card background |
| `panel` | `#121A17` | Panel, menu, toast surfaces |
| `line` | `#22302C` | Borders, rules, chips, scrollbar thumb |
| `fog` | `#E8EFEA` | Primary text |
| `mist` | `#93A69C` | Secondary text, eyebrows, labels |
| `ember` | `#E2A13E` | Primary accent — CTAs, active states, selection, markers |
| `signal` | `#63B8A9` | Secondary accent — eyebrows, meters, badges |

Content-only uses (same tokens, hardcoded in gradients): ember/signal radial fog glows, moss-to-transparent card scrims, `--ember`/`--signal` CSS vars for sweep underlines and progress bar.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines | Unbounded | 400, 600, 800 | Giant hero (clamp 3rem–8.5rem, 800), section titles (700/bold); AHMED line uses outlined stroke variant |
| Body | Sora | 300, 400, 500, 600 | Lede, narrative, project and timeline copy at light weights |
| Mono / labels | JetBrains Mono | 400, 500 | Nav, eyebrows, chips, meters, timeline dates, buttons, footer |

## Interaction & motion

- Live IST clock ticks every second in the nav; mobile hamburger opens a fullscreen menu overlay with staggered links, close button or any link dismisses it.
- Scroll progress bar fills via GSAP ScrollTrigger scrub; nav gains a blurred `nav-scrolled` background past 40px.
- Hero entrance is a masked line-rise plus fade-up stagger, followed by a scramble-decode of AASIM/AHMED; section headings mask-rise and generic `[data-reveal]` blocks fade up on scroll; mono `[data-scramble]` labels decode once in view.
- Ambient dust drifts on a 2D canvas (up to 80 motes, ember/signal tints); Three.js wireframe terrain undulates with ember particles above it, mouse-parallax camera, and ScrollTrigger pausing off-screen. Requires network access to the Three.js CDN; decorative and failure-safe.
- Skill meters wipe in and stat counters count up once (3+, 24, 40h, 99.9%); stacked `.project-card` entries shrink/fade the previous card as the next arrives with image parallax; experience timeline draws with scroll and waypoints activate passing a trigger.
- Custom dot-and-lerped-ring cursor on fine pointers (expands over links), magnetic CTAs via GSAP, experiment-row nudges and card shadows via Motion. Requires network access to GSAP/ScrollTrigger/Motion CDNs.
- Placeholder links (case studies, experiments, socials, résumé) and the contact form are fake: clicks show a "ROUTE MARKED" toast, submit plays TRANSMITTING… → SENT ✓ and clears fields with no backend.
- Lucide icons render via CDN with no local fallback; `prefers-reduced-motion` collapses all motion to a static page.

## Best suited for

- A full-stack or AI/ML engineer with ~4 substantial projects who wants sticky stacked cards rather than long-form case modals
- Developers whose brand is nocturnal fieldwork (coordinates, bearings, waypoints, basecamp) over studio polish
- Freelancers needing availability signalling (IST clock, open-to-work chip, engagement models, 48h reply promise)
- Dark Unbounded/Sora typographic tastes with an appetite for Three.js and GSAP chrome
- Clones where placeholder imagery (Picsum portrait/projects) and contact handles will be replaced wholesale

## Not a good fit for

- Portfolios needing real case-study pages or a working contact backend — every study link toasts and the form only pretends to send
- Bright, serif-editorial, or game-voiced brands — the night-survey register and Unbounded display are structural; see `aasimexpedition` or `aasimvoxel` instead
- Teams or agencies — all copy is first-person singular field notes for one engineer

## Notes for agents

- Project cards are static markup only (no JS data array unlike `aasimexpedition`): edit each `article.project-card` in place; metric chips and stack lines are hand-written per card.
- Section ids (`top/about/skills/work/experience/contact`) are referenced by the fixed nav, mobile `#menu` links, and the `#to-top` footer button — rename everywhere or nowhere.
- Imagery is remote placeholders: portrait `picsum.photos/seed/aasim-field-portrait`, projects `trailhead-vision-ai`, `meridian-crm-ops`, `driftline-whiteboard`, `emberlang-rust-compiler` — replace before any production use.
- Contact handles (`aasim.ahmed.dev@gmail.com`, `#` socials/GitHub/LinkedIn) are placeholders; `.toast-trigger` links intentionally `preventDefault`.
- External dependencies (all CDN, all require network access): Google Fonts (Unbounded/Sora/JetBrains Mono), Tailwind Play CDN with inline `tailwind.config`, GSAP 3.12.5 + ScrollTrigger, Motion 11.11.17, Three.js 0.160.0, Lucide 0.344.0.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
