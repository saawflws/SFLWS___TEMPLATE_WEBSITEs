# MORDEN DOORS — Prototype 5 · Shop Drawing

> An architectural-drafting take on the same cabinet-door manufacturer: a fixed drafting-sheet frame, a self-tracing SVG door elevation with dimension lines, drafting-tape yellow as the one accent, spec-key tables for every finish, and zero photographs.

| Field | Value |
| --- | --- |
| **Name** | MORDEN DOORS — Shop Drawing (prototype5) |
| **Slug** | moderndoors/prototype5 |
| **Category** | building_products |
| **Framework** | static |
| **Path** | `websites/static/building_products/moderndoors/prototype5/` |
| **Entry** | `index.html` — self-contained single file; zero raster images (inline SVG + CSS finishes only) |
| **Prompt** | none — no `p.md` (omitted per user request) |
| **Origin** | AI-generated HTML; no hot-linked imagery — safe to reuse beyond the real Morden Doors Ltd. |

## Style tags

`drafting-sheet-frame` `shop-drawing-hero` `self-tracing-toolpath` `drafting-tape-yellow` `spec-dl-tables` `barlow-condensed` `mono-code-legend` `no-photography-css-finishes` `accessibility-first` `edge-profile-svg`

## Summary

The blue-collar workshop voice of the five-prototype family: the entire page is styled as a shop drawing on sheet paper (`#F3F2EE`) — a fixed inset border frames the viewport like paper stock, sections sit on hairline rules (`#DAD8CF`), and the one colour accent is drafting-tape yellow (`#F2C230`), used the way real tape is used: filled cells, step numerals, the active chip's underline. The hero is a shaker-door elevation drawn as an SVG that traces itself like a toolpath (outline, panels, 35mm bores, dimension lines "17-13/16 × 23-11/16", leader lines finishing after everything), while six finish chips crossfade the door's CSS face. Product lines are index rows that deep-link into the finishes rack, where every swatch tile opens a five-row spec-key `dl` table.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Skip link + header | — | SVG door mark + condensed wordmark, 4 nav links, Request Pricing CTA, mobile nav (Escape closes) |
| 2 | Hero | — | Condensed H1, spec strip (core / hinge bore / tolerance / lead time over dark tile), CTAs; SVG shaker-door elevation drawing with dimension lines + leader callouts, and 6 finish chips that crossfade the door face |
| 3 | Product lines | `#products` | 6 index rows (Thermofoil-PVC, TFL, Acrylic/PET, Painted, Raw MDF, Lamination & Layup) with mini door faces; clicking a row pre-filters the finishes rack |
| 4 | Order process | `#process` | 3 steps with tape-yellow number chips: confirm the drawing → finance forms → production & delivery |
| 5 | Finish rack | `#finishes` | Filter buttons (`aria-pressed`, live count), edge-profile SVG legend (square / pencil / bullnose), 8 finish tiles each with a 5-row spec-key `dl` (code, material, edge, sheet size, runs) + mailto Request link |
| 6 | Contact band | `#contact` | Full-ink band: big condensed CTA + mono info column (shop address / trade counter / delivery / samples) |
| 7 | Footer | — | Drawn as a drafting title block: 4 cells including "drawing no. MD-2026-WEB · rev 01 · not to scale" |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--sheet` | `#F3F2EE` | Page paper + title-block background |
| `--ink` | `#212723` | Text, drawn strokes, the ink contact band |
| `--tape` | `#F2C230` | Drafting-tape yellow — filled step numerals, active chip underline, hover accents, CTA hover, selection |
| `--steel` | `#565D57` | Steel-grey secondary labels and strokes |
| `--hair` | `#DAD8CF` | Hairline rules, swatch borders, paper frame |
| `--lacq` | `#FFFFFF` | Spec table zebra/panel highlights |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Barlow Condensed | 500;600 | H1, index-row titles, contact band — tight leading 0.95, the workshop-signage voice |
| Body | Barlow | 400–600 | Body copy, forms, nav |
| Codes | IBM Plex Mono | 400;500 | Spec keys, finish codes (`TF-...`), step labels, title-block text, dimension strings |

## Interaction & motion

- **Self-tracing hero drawing**: outline + interior panel edges trace via `stroke-dashoffset`, bores pop, the door's finish face fades in, dimension lines "measure out", leader lines trace last; slower than a beat (multi-stage `data-` timing) but fully killed under `prefers-reduced-motion`; a fallback clear animates styles at 2.6s in case Motion fails to load.
- **Finish chips crossfade**: the hero face swaps between two pre-rendered CSS faces (`faceA/faceB`) with a 160ms crossfade; Motion optional; a mono `aria-live` readout names the active finish.
- **Finish rack filter**: `aria-pressed` filter set, hidden attr + Motion fade on the tiles, mono `aria-live` count.
- **Product index rows** deep-link into `#finishes` with the matching line pre-filtered.
- **Other**: Escape closes the mobile nav; smooth scrolling; the drafting frame (`position:fixed` border) is desktop-only furniture.

- **Network check**: Tailwind CDN + Google Fonts (Barlow Condensed / Barlow / IBM Plex Mono). No images, PDFs, maps or third-party embeds anywhere.

## Best suited for

- Manufacturers with an engineering or shop-culture identity wanting their site to look like their drawings
- Trade suppliers where spec codes, edge profiles and tolerance tables are the actual sales argument
- Builds that must ship with zero photography — every finish is rendered in CSS
- Small shops wanting a distinctive one-accent look that departs from the usual gold/wood luxury cliché

## Not a good fit for

- Luxury interiors or consumer showrooms needing warm photography and editorial charm
- Sites wanting estimator/cart/checkout; pricing is mailto + trade counter here
- Brands whose voice isn't workshop/engineering — the drafting frame doesn't soften

## Notes for agents

- Finish data lives in an inline `FINISHES` JS object mirroring the static tiles; the rack renders data-driven while the hero chips use the two pre-drawn faces — keep both in sync if you swap finishes.
- The hero mentions "credit application & card authorization forms available" as plain text — no PDF links exist in this prototype (its family peers P1/P2 carry the actual PDFs).
- Two `mailto:` CTAs (hero, rack) and a `tel:` in the contact band; no forms submit anywhere.
- The drafting frame and title-block footer are the identity — if the client wants "less drawing-table", clone `prototype3/` instead, which is the same spec-sheet DNA with softer furniture.
- Family context: one of five in `moderndoors/` — see `../META.md` for the picker hub and the other four voices.
