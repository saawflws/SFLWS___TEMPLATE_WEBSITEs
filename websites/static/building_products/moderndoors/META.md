# MORDEN DOORS — Cabinet Doors & Surfaces (design family)

> One build brief, five complete designs for the same Surrey cabinet-door manufacturer — brass commerce, warm editorial, blueprint spec-sheet, wholesale swatch library and drafting sheet. The card entry is a design picker; pick a prototype number and clone that file.

| Field | Value |
| --- | --- |
| **Name** | MORDEN DOORS — Cabinet Doors & Surfaces (design family) |
| **Slug** | moderndoors |
| **Category** | building_products |
| **Framework** | static |
| **Path** | `websites/static/building_products/moderndoors/` |
| **Entry** | `index.html` — design-picker hub; the five designs live in `prototype1/` … `prototype5/`, each a self-contained single-file site |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | none — no `p.md` in this family (omitted per user request) |
| **Origin** | AI-generated HTML; prototype1 & prototype2 hot-link brand imagery from Morden Doors Ltd.'s live site (`mordendoors.ca`) — reusing those two beyond that owner requires their permission; prototype3–5 use no imagery at all |

## Style tags

`doors-manufacturing` `design-family` `five-prototypes` `b2b-trade` `surrey-bc` `cabinet-doors` `one-brief-five-voices`

## Summary

All five designs answer the same brief — a custom cabinet-door manufacturer (thermofoil, TFL, acrylic, MDF) in Surrey, BC serving cabinet shops and the trade — and differ purely in voice. `index.html` here is NOT a website: it is a quiet hub page listing the five prototypes with palette dots and one-liners. Each prototype sub-folder holds a complete, self-contained `index.html` plus its own detailed `META.md`; the shelf deliberately shows this as ONE card so the family stays browsable as one product. Cloning to a client normally means copying exactly one prototype sub-folder.

## The five designs

| Prototype | Voice | Palette | Typography | Apparatus | Imagery |
| --- | --- | --- | --- | --- | --- |
| `prototype1/` **Brass Luxury** | Commerce-forward B2B portal | Brass `#C2983E` on deep slate | Outfit + Inter | Live door configurator with instant CAD estimator, quote-drawer cart, competitor matrix + laminate cross-reference engine | 7 photos hot-linked from `mordendoors.ca`, 3 PDFs, Google Maps |
| `prototype2/` **Cream Editorial** | Quiet, quote-first editorial | Cream `#FDFAF6` + ink, brass `#A3864A` | DM Serif Display + DM Sans | Motion.dev scroll reveals, film-grain texture, spec configurator that deliberately shows no price, quote drawer | 7 photos hot-linked from `mordendoors.ca`, 3 PDFs, Google Maps |
| `prototype3/` **Blueprint Spec** | Technical section-drawing | Sage paper `#EEF1EE` + engineering blue `#0B6399` | Archivo variable (wide) + IBM Plex Mono | Self-drawing SVG door cross-section, data-driven spec catalog with sticky category nav, mailto pricing form, real dark mode | None — CSS-drawn finishes only; footer declares sample data |
| `prototype4/` **Swatch Library** | Wholesale trade prototype (fictional "Haldane Door Co." branding) | Paper `#F2F0EB`, ink, navy, oak `#A9825C` | Archivo (semi-condensed headings) + Inter + IBM Plex Mono spec codes | 52-finish flip-card binder across 6 material tabs, 3D swatch-board hero, demo 4-stage order tracker, trade-only pricing stance | None — CSS-drawn swatch surfaces only |
| `prototype5/` **Shop Drawing** | Architectural drafting sheet | Sheet `#F3F2EE`, ink, drafting-tape yellow `#F2C230` | Barlow Condensed + Barlow + IBM Plex Mono | Self-tracing SVG door elevation with dimension lines, finish-rack spec tables, drafting-frame page furniture | None — CSS-drawn finishes only |

## Choosing a prototype

| If the client... | Use |
| --- | --- |
| Wants pricing up front, a quote cart, and a spec-portal feel | `prototype1/` |
| Wants understated elegance, quote-only pricing, scroll-reveal polish | `prototype2/` |
| Has an engineering culture; wants drawings, spec codes and dark mode | `prototype3/` |
| Is a wholesale supplier; wants a swatch-book catalog and an order tracker | `prototype4/` |
| Wants the blue-collar workshop look: tape yellow, shop drawings, spec-sheet tables | `prototype5/` |
| Must have zero hot-linked brand assets (reusable beyond Morden Doors Ltd.) | `prototype3/`, `prototype4/` or `prototype5/` |

## Notes for agents

- The hub `index.html` is what the showcase card opens and what got screenshotted to `thumb.webp`. It links each prototype by relative path, works offline, and carries no JS.
- Each prototype's full detail — sections, anchors, palettes, interactions, clone warnings — lives in its own `prototypeN/META.md`. Read that before opening the HTML.
- **Clone one prototype, not the family**: copy `prototypeN/` alone (self-contained) for a client site; the hub is repo furniture. P1/P2 clones keep working only while `mordendoors.ca` serves their images/PDFs/map.
- P3 and P4 declare prototype/sample status in-page (P3 in the footer; P4 uses a fictional brand, Grand Forks address and 555 phone) — real-client use needs their strings replaced wholesale.
- No `p.md` in any prototype (omitted per user request), and the rainbow view-source button was deliberately never injected on this family (also user request) — re-running `scripts/add-source-button.js` would add it; don't.
