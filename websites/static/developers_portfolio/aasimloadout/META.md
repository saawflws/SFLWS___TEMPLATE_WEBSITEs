# Aasim Loadout — Terrain-and-Inventory Developer Portfolio

> A warm-dark developer portfolio pairing a draggable voxel-terrain hero with a hotbar loadout, searchable inventory, and mineshaft career descent.

| Field | Value |
| --- | --- |
| **Name** | Aasim Loadout — Terrain-and-Inventory Developer Portfolio |
| **Slug** | aasimloadout |
| **Category** | developers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/developers_portfolio/aasimloadout/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + JS, Google Fonts + Tailwind Play + GSAP/ScrollTrigger + Three.js + Lenis + Motion + Lucide via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`loadout-detail-panel` `searchable-inventory-overlay` `voxel-terrain-hero` `mineshaft-strata-timeline` `pixel-topography-modals` `validated-contact-form` `blinking-pixel-avatar`

## Summary

A warm near-black expedition portfolio whose signature is inventory-as-interface: a 9-slot rarity-tiered hotbar driving a full loadout detail panel (lore, enchantments, proficiency, years/deployed/last-used), plus a filterable full-inventory overlay on the `E` key. The hero is a deterministic seeded voxel terrain with torch light and rising embers; experience descends a mineshaft (Y 128 to bedrock); contact pairs a direct channel with a validated mailto form — the only form in the category. Against its siblings it borrows vocabulary from `aasimvoxel` (slots, seeds, biomes, bedrock) and `aasimexpedition` (field-report modals, generative map art) but systematises both: nothing here is decorative chrome, every game element opens, filters, or submits something.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 0 | Preloader | — | "Generating world" percent bar, cycling status messages, seed tag |
| 1 | Hero | `#hero` | Typewriter eyebrow, huge serif headline with italic ember accents, lede, dual CTAs, voxel terrain canvas, scroll/drag hints |
| 2 | Ticker | — | Infinite skill marquee ribbon (pauses on hover, aria-hidden) |
| 3 | About | `#about` | Sticky ID card (blinking pixel avatar, name/class/base/status, level/coords stats, advancements) + narrative + count-up ledger (years/projects/pipelines/workflows/Friday incidents) |
| 4 | Skills | `#skills` | 9-slot hotbar with rarity tiers and tooltips + loadout detail panel + full-inventory button |
| 5 | Projects | `#projects` | Five field-report rows (Cartograph, Waypoint Ops, oxvm, chunkd, driftwatch) with pixel-topography thumbnails and complexity blocks; click opens the report modal |
| 6 | Experience | `#experience` | Mineshaft descent: five alternating strata cards (Y 128 → Y −64) on a scroll-filling shaft, ending in a bedrock pill link to contact |
| 7 | Contact | `#contact` | Direct email channel with copy button, social buttons, availability line + validated message form (mailto compose, no backend) |
| 8 | Footer | — | Copyright, seed tag, Y −64 bedrock marker, return-to-surface button |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#0D0C0A` | Page background (warm near-black) |
| `ink2` | `#14120E` | Cards, panels, modals, overlays |
| `ink3` | `#1C1915` | Selected slot, bedrock pill |
| `bone` | `#EAE3D6` | Primary text |
| `bone2` | `#A8A092` | Secondary text, ledes |
| `faint` | `#6B655A` | Muted labels, eyebrows, captions |
| `ember` | `#E8A33D` | Primary accent — CTAs, active states, markers, selection |
| `ember2` | `#F6C464` | Bright ember — hover states, italic headline accents |
| `moss` | `#93A878` | RARE rarity tier |
| `rust` | `#C4653A` | Form error borders |
| `line` | `rgba(233,226,214,0.12)` | Hairline dividers, borders |

Content-only colors (hardcoded, not tokens): COMMON tier `#A8A092`, EPIC tier `#E8A33D`, slot index `#5E594E`, scrollbar `#2B2721`, terrain low `#1A1815` / mid `#2B2721` / high `#3E382E` / dusted peaks `#8E8672`, torch `#FFB85C`, ember sprites `#F0B45A`, fog `#0D0C0A`, moonlight `#9AA5AD`, avatar pixels `#211C15` `#C99F72` `#A87F5A` `#12100D` `#8A6A4A` `#E8A33D` `#B57C2A`.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines / body serif | Fraunces (`opsz` 9–144, italic axis) | 300–600 | Light headlines with italic ember `em` accents; also runs body copy (body carries `font-serif`) — the only category template with no separate sans body face |
| Mono / labels | JetBrains Mono | 400, 500, 700 | Eyebrows, nav, HUD, ticker, slots, ledger, meta rows, buttons, toasts, footer |

## Interaction & motion

- Preloader counts to 86% with cycling "rolling terrain / placing torches / carving caves / spawning engineer" messages, completes on fonts+load+timer (5.5 s hard cap), then wipes up into a choreographed hero intro (nav drop, word-mask headline rise, typewriter eyebrow, canvas fade-in).
- Three.js voxel terrain (56×56 instanced stepped columns from seeded fbm noise, dusted peaks, ember ore cubes, moonlight + flickering torch, 130 rising ember sprites) drag-rotates on mouse, dollies with scroll (camera rise + fog thickening), and pauses offscreen or when hidden. Requires network access to the Three.js CDN.
- Fixed HUD shows live Y coordinate (64 → −64), a scroll gauge, and a biome name that letter-scrambles per section (`BIOME_MAP`); nav links highlight by scroll position and the header gains blur past 40px.
- Hotbar slots show rarity-tiered tooltips on hover and select a full detail readout (lore, enchantment list, animated XP bar, years/deployed/last-used); the inventory overlay (`E` key, button, or Escape) lists ~45 items across 7 categories with live filtering and dot ratings.
- Project rows open field-report modals (year/role/type/status meta, body, highlights, stack, complexity blocks, large seeded pixel-topography canvas, source link); thumbnails draw on scroll into view and glitch-scramble through seeds on hover. All map art is canvas-generated — no external images anywhere on the page.
- Mineshaft markers pop in per card while the shaft fill scrubs with scroll; headings reveal by masked-word rise, rules wipe in, counters count up once; magnetic pull on `[data-magnet]` elements; Lenis smooth scroll with anchor offset.
- Contact form validates inline (ember focus, rust error borders, shake + toast on failure) and composes via the visitor's mail app — prototype mode, no backend; copy-email uses Clipboard API with execCommand fallback and toast confirmation.
- Custom dot-and-ring cursor on fine pointers (DRAG badge over the hero, grows on interactive hover, hides over text inputs); blinking pixel avatar drawn from an 8-row pixel map.
- `prefers-reduced-motion` disables marquee, caret, ping, terrain embers, and scroll choreography; without GSAP the loader is removed and the page renders statically.

## Best suited for

- A full-stack or AI/ML engineer with a systems basement (compilers, VMs, storage, MLOps) who wants every portfolio section to feel playable
- Developers with 4–6 deep projects that deserve long-form field reports with metrics, highlights, and stack lists
- Freelancers who need a real contact funnel — direct channel plus a validated form — rather than just social links
- Tinkerers comfortable maintaining JS data arrays (`SKILLS`, `PROJECTS`, `STRATA`, `INV_CATS`) as the content source of truth
- Offline-image-friendly builds: all visuals are canvas-generated, so there are no screenshots to produce or host

## Not a good fit for

- Formal or minimal-taste clients — the expedition/game register (loadouts, rarity tiers, bedrock) is structural across nav, HUD, skills, and footer
- Teams or multi-person studios — all copy, from the ID card to the strata log, is first-person singular
- No-JS or CDN-hostile deployments — hotbar, inventory, modals, terrain, and reveals all require the CDN script bundle to load

## Notes for agents

- Content lives in JS data arrays that must be edited together with their renderers: `SKILLS` (9 hotbar entries with lore/enchantments), `PROJECTS` (5 entries with hex seeds driving both thumbnails and modal canvases), `STRATA` (5 experience cards), `INV_CATS` (7 inventory categories, ~45 items), `TICKS` (marquee), `BIOME_MAP` (section id → HUD biome). Project seeds are shared between the 13×13 row thumbnails and the 26×16 modal canvas — change a seed in one place (`PROJECTS`).
- Section ids (`hero/about/skills/projects/experience/contact`) are referenced by nav links, `BIOME_MAP`, the mobile menu, and anchor scrolling — rename everywhere or nowhere.
- Contact handles (`hi@aasimahmed.dev`, GitHub/LinkedIn/X URLs) and the five project source links are placeholders to replace before shipping; the résumé path is a `mailto:` request link, not a file.
- External dependencies: Google Fonts, Tailwind Play CDN, cdnjs GSAP 3.12.5 + ScrollTrigger + Three.js 0.149.0, unpkg Lucide UMD, jsdelivr Lenis 1.1.13 + Motion 10.18 — all require network access.
- The `[E]` inventory shortcut is suppressed while typing in inputs or while the modal is open; Escape closes menu → modal → inventory in that priority.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
