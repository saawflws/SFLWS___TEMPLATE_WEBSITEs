# building_products — templates

Cabinet doors, panel and building-product manufacturers selling to cabinets shops, contractors
and the trade. Trade pricing, spec codes and finish libraries lead here, not retail baskets.
Pick on how much commerce apparatus the client needs, which voice fits their culture, and
whether the design can ship without hot-linked brand assets.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **Morden Doors** | `moderndoors/` | `doors-manufacturing` `design-family` `five-prototypes` `b2b-trade` | One build brief, five complete designs in numbered prototype sub-folders (`prototype1/`…`prototype5/`): brass commerce portal, cream editorial, blueprint spec-sheet, wholesale swatch library, drafting shop-drawing. The card opens a design-picker hub; each prototype is self-contained with its own `META.md` inside. |

## How this family works

`moderndoors/` is a **design family**, not a single design. Its top-level `index.html` is a
small picker hub (what the showcase card opens and what `thumb.webp` screenshots); the actual
websites live in `prototype1/` … `prototype5/`, each an independent self-contained single-file
site with its own detailed `META.md`.

Which prototype builds the client's site:

| If the client... | Use |
| --- | --- |
| Wants live pricing, a quote cart and a comparison matrix | `moderndoors/prototype1/` (Brass Luxury — brass on slate, Outfit/Inter, hot-linked photos) |
| Wants quote-only pricing with editorial polish | `moderndoors/prototype2/` (Cream Editorial — DM Serif Display, film grain, Motion reveals) |
| Has an engineering culture, wants spec codes + dark mode | `moderndoors/prototype3/` (Blueprint Spec — sage paper, engineering blue, self-drawing SVG cross-section) |
| Is a wholesale supplier with a swatch-book / order-tracker workflow | `moderndoors/prototype4/` (Swatch Library — fictional Haldane Door Co. sample branding, 52-finish flip binder) |
| Wants the workshop look: tape yellow, shop drawings, title-block footer | `moderndoors/prototype5/` (Shop Drawing — Barlow Condensed, drafting frame, spec-key tables) |

Clone **one prototype sub-folder** for a client, not the family folder. Prototype1 and prototype2
hot-link brand imagery from the real manufacturer's site (`mordendoors.ca`) — reuse beyond that
owner needs their permission; prototype3–5 are photo-free CSS-drawn designs and carry nothing of
the real brand.

## Choosing between them

All five are the same brief — Surrey, BC cabinet-door manufacturer for the trade. The voice is
the decision: commerce-forward portal / quiet editorial / engineering spec-sheet / wholesale
swatch book / drafting sheet. Each prototype's `META.md` carries its full section list,
palette, interactions and clone warnings.
