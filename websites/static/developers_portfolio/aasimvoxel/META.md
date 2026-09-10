# Aasim Voxel — Survival-World Developer Portfolio

> A Minecraft-voiced dark developer portfolio with a minable 3D voxel island, inventory-grid skills, and a quest-log career timeline.

| Field | Value |
| --- | --- |
| **Name** | Aasim Voxel — Survival-World Developer Portfolio |
| **Slug** | aasimvoxel |
| **Category** | developers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/developers_portfolio/aasimvoxel/` |
| **Entry** | `index.html` — self-contained single file, inline CSS + JS, Google Fonts + Tailwind Play + Three.js + GSAP/ScrollTrigger + Motion + Lucide via CDN, project photos via picsum.photos |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`minecraft-voxel-hero` `hotbar-inventory-skills` `quest-xp-timeline` `end-portal-contact` `block-mining-interaction` `debug-hud-chrome` `crosshair-cursor` `typewriter-roles`

## Summary

A near-black olive survival-world portfolio that maps every section to game vocabulary: SPAWN hero, OVERWORLD about, HOTBAR skills, BUILDS projects, QUESTS experience, PORTAL contact. Its signature is a deterministic seeded Three.js voxel island (drag to rotate, click a block to burst-mine it) wired into an F3-style debug HUD tracking FPS, coordinates, biome, and blocks mined. Where `aasimexpedition` is a cartographic dossier with modal case files, and the two depth-chart siblings (`aasimdepthhud`, `aasimdepthchart`) share one navy/brass/teal descent system, this is the loud gamified one — hotbar slot nav, XP-valued roles, and an end-portal contact grid.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 0 | Preloader | — | "Generating world" terminal lines, segmented progress bar, seed/render-distance caption |
| 1 | Hero / Spawn | `#spawn` | Eyebrow tag, giant AASIM / outlined AHMED, typewriter role line, lede, VIEW BUILDS + copy-email CTAs, voxel canvas, scroll + drag hints |
| 2 | About / Overworld | `#overworld` | Survival-world narrative, shipped-counts strip, sticky PLAYER DATA ledger card (location/class/education/status/learning/biome) |
| 3 | Skills / Hotbar | `#hotbar` | Tabbed inventory panel (Frontend/Backend/AI-ML/Systems/Tooling, 9 slots each) with hover inspect tooltips; durability bar = proficiency, Efficiency enchants |
| 4 | Projects / Builds | `#builds` | Five accordion builds (SEMANTRA, ZFLOW, RIVER-LANG, FARMHAND, BLOCKMAP) with photos, outcome lines, chip stacks, prototype-link buttons; cursor-following preview card |
| 5 | Experience / Quests | `#quests` | Five XP-valued roles on a torch-lit timeline that fills with scroll (freelance, Zoho architect, full-stack dev, intern, B.Tech) |
| 6 | Contact / Portal | `#portal` | End-portal twinkle grid, "build something that survives" headline, giant click-to-copy email, social rows (GitHub/LinkedIn/X/Kaggle/Résumé) |
| 7 | Footer | — | Copyright, "world rendered client-side" line, back-to-spawn link |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0B0E08` | Page background (near-black olive) |
| `--panel` | `#12160D` | Cards, panels, dock background |
| `--line` | `#252C19` | Borders, rules, slot outlines |
| `--ink` | `#E7E4D3` | Primary text (warm bone) |
| `--muted` | `#8C9078` | Secondary text, captions |
| `--grass` | `#A3D34A` | Primary accent — CTAs, progress, active states, selection |
| `--ember` | `#E5A13D` | Secondary accent — XP values, torch, outcome markers |

Content-only colors (hardcoded in markup/JS, not CSS tokens): slot surface `#141A0F`, slot bevel `#2A3220`, slot icon `#9AA085`, hover bright grass `#BCE868`, button ink `#10140A`, tooltip panel `#0F130A`, voxel palette grass `#77A83E` / dirt `#7A5636` / stone `#767D70` / wood `#6B4A2C` / leaf `#4E8A35`, torch glow `#FFB85C`, glowstone `#E8A33D`.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines / body | Bricolage Grotesque (`opsz` 12–96) | 200–800 | Extrabold tight hero, bold section heads; also runs body copy |
| Mono / labels / buttons | JetBrains Mono | 400, 500, 700 | Eyebrows, HUD, tabs, chips, ledger, toasts; 10–11px tracked-out labels |

## Interaction & motion

- Preloader plays a staged "world generation" terminal + segmented bar, then wipes up into a choreographed hero intro (split-word name rise, staggered fades, dock slot pop).
- Three.js voxel island is deterministic from seed `20241207` (heightmap columns, tree, glowstone lanterns, clouds, orbiters, fog); drag rotates, click raycasts and burst-mines blocks with particles, incrementing BLOCKS_MINED with an achievement toast on first mine. Requires network access to the Three.js CDN; canvas pauses offscreen.
- F3-style debug HUD shows live FPS, IST clock, pseudo XYZ coordinates, and a per-section Minecraft biome label.
- Bottom hotbar dock (slot bevels, number badges, tooltips) smooth-scrolls to sections; IntersectionObserver sets the active slot and HUD biome.
- Hero role line typewrites four titles in a type/erase loop; skill tabs re-render the 9-slot inventory with a spring pop; slot hover/focus shows a positioned inspect tooltip (click pins it on touch).
- Project rows are single-open accordions (GSAP height animation); hovering a closed row shows a cursor-following preview photo (picsum.photos seeds — requires network access, placeholder imagery to replace).
- Quest timeline fill scrubs with scroll; quest diamonds ignite ember with glow as they pass the trigger line; end-portal grid twinkles on randomized delays.
- Custom crosshair cursor (difference-blend, rotates/scales on interactive hover) on fine pointers only; magnetic pull on CTAs via GSAP quickTo.
- Copy-email buttons use Clipboard API with textarea fallback and toast confirmation; prototype links fire explanatory toasts.
- `prefers-reduced-motion` disables grain, portal twinkle, typewriter (first role shown statically), and GSAP scroll choreography (timeline shows full).

## Best suited for

- A full-stack or AI/ML developer who wants a memorable game-literate brand and has 4–6 shippable projects with measurable outcomes
- Developers with a genuine systems/low-level thread (Rust, compilers, engines) who want the theme to carry that story
- Freelancers whose differentiator is production survival (migrations, edge cases, automation rescue) rather than visual design
- Builders comfortable replacing all five project write-ups, photos, and skill tooltips with their own proof
- Anyone presenting live metrics (counts, XP, outcomes) as part of the pitch

## Not a good fit for

- Formal, corporate, or minimal-taste clients — the Minecraft vocabulary (biomes, XP, hotbars) is structural, not a skin you can tone down
- Content-light portfolios: the inventory (45 skill tooltips), five builds, and quest log all demand real copy before shipping
- Offline or low-JS environments — the hero, skills, and motion all depend on multiple CDN libraries with no static fallback

## Notes for agents

- All five builds are hardcoded (SEMANTRA, ZFLOW, RIVER-LANG, FARMHAND, BLOCKMAP): accordion markup, `data-seed`/`data-name`/`data-year` attributes, picsum photo URLs, and the `SKILLS` object in JS must be edited together. Photos are `picsum.photos/seed/<seed>/` placeholders — swap for real screenshots before shipping.
- The 45 skill entries live in the `SKILLS` JS object (name, level, icon, lore); tab labels and the `ench()` thresholds are separate code.
- Contact/social handles (`hello@aasimahmed.dev`, github/linkedin/x/kaggle URLs) and the résumé toast are placeholders; the `EMAIL` const drives both copy buttons.
- External dependencies: Google Fonts, Tailwind Play CDN, cdnjs Three.js r128 + GSAP 3.12.5 + ScrollTrigger, jsdelivr Motion 10.18 + Lucide 0.294, picsum.photos images — all require network access.
- The `BIOMES` map ties section ids to HUD labels; renaming a section id means updating the dock buttons, the observer list, and that map.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
