# MORDEN DOORS EDITORIAL — Warm Editorial Trade Catalog

> A quiet, cream-paper editorial build for the same cabinet-door manufacturer: serif display headings, film grain, scroll-reveal motion, and a spec configurator that deliberately shows no pricing.

| Field | Value |
| --- | --- |
| **Name** | MORDEN DOORS EDITORIAL — Warm Editorial Trade Catalog |
| **Slug** | moderndoorseditorial |
| **Category** | building_products |
| **Framework** | static |
| **Path** | `websites/static/building_products/moderndoorseditorial/` |
| **Entry** | `index.html` — self-contained single file; all product imagery, maps and PDFs are hot-linked over CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | none — no `p.md` in this template (omitted per user request) |
| **Origin** | AI-generated HTML; brand imagery hot-linked from Morden Doors Ltd.'s live site (`mordendoors.ca`), so reusing this design beyond that owner requires their permission |

## Style tags

`warm-editorial` `cream-ink-palette` `dm-serif-display` `film-grain-overlay` `scroll-reveal-motion` `no-pricing-configurator` `quote-drawer-cart` `calm-trade-tone` `tailwind-utility-css`

## Summary

The calm editorial counterpart to its sibling `moderndoors` — same business, same section skeleton (catalog, configurator, finishes, services, trade downloads, contact, FAQ), but a completely different voice: cream (`#FDFAF6`) and ink (`#0A0A09`) with DM Serif Display headings, an SVG-noise film-grain wash, and Motion.dev scroll reveals that slide headers and stagger the product cards. Its one deliberate product decision: the configurator computes specs (area, edge treatment, hinge holes) but shows **no price at all** — "our team will provide an itemized quote based on your spec sheet." Carries 8 finish swatches to the sibling's 6, and drops the sibling's competitor table, estimator and cross-reference engine to stay lean.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Topbar | — | "Manufacturing in Surrey, BC since 2000", trade phone/email, 7–10 day lead time |
| 2 | Header | — | Serif logotype, 6 links, quote-list button (badge hidden until first item), Request Quote CTA, mobile menu |
| 3 | Hero | — | Serif clamp H1, intro copy, Build-your-spec CTA + Browse catalog, 3 serif stats (25+ / 150+ / 7–10), featured Model 2000-D door card with hotlinked photo and gradient-tested footer |
| 4 | Product catalog | `#products` | Filter pills + 6 product cards (whole card opens its spec modal), aspect-4/3 hotlinked photos, zoom-on-hover |
| 5 | Door configurator | `#configurator` | 5-step builder: 6 category tiles, per-category style dropdown, 8 finish swatches, W/H/Qty, 35mm-hinge and matching-back toggles; live door preview, spec summary with per-category edge treatments, Add to Quote — no pricing shown |
| 6 | Color & finish library | `#finishes` | 6 swatch cards with Tafisa/Olon/Uniboard cross-refs, 6 tabs, search input, physical swatch-binder banner |
| 7 | Manufacturing services | `#services` | Cut & Tape, Lamination & Layup, Folding Shelves & Gables cards with check lists |
| 8 | How Morden Doors compares | `#why-us` | 4 differentiator rows (7–10 day production, 150+ matches, 48-hour rush, local delivery); embedded downloads panel (`#downloads`) linking 3 external PDFs |
| 9 | Visit our Surrey facility | `#contact` | Inquiry form (name/company/email/phone/product interest/details), address/phone/email/hours cards, Google Maps iframe |
| 10 | FAQ | — | 4-item max-height accordion: lead times, laminate matches, hinge boring, delivery |
| 11 | Footer | — | 4-column serif footer with legal bar |
| 12 | Floating actions & overlays | — | FAB pill (Quote / call / to-top), toast, slide-out quote drawer, product spec modal |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `warm-500` | `#A3864A` | Antique brass accent — CTAs, badges, hover text (darker than sibling's gold) |
| `warm-400` | `#C8A66E` | Light brass — eyebrow labels and icon hits on dark sections |
| `warm-50` | `#FDFAF6` | Page background cream, sticky header fill |
| `warm-100` / `warm-200` | `#F8F2E8` / `#EFE2CC` | Configurator card fills, selection band |
| `ink-950` | `#0A0A09` | Hero, why-us band, footer |
| `ink-900` | `#131210` | Dark cards, swatch-kit banner, toast, FAB dock |
| `ink-800` | `#242320` | Body text on light sections |
| `ink-500` / `ink-400` | `#6B685F` / `#8A877E` | Muted hierarchy, specs, captions |
| `ink-100` | `#EDEDEA` | Hairlines and borders on light sections |
| film grain | feTurbulence SVG at 0.018 opacity | Fixed full-page editorial texture (`.body::after`) |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | DM Serif Display | 400 | Hero, section titles, product names, footer logotype — all headings down-grade in size via `clamp()` |
| Body / UI | DM Sans | 300–700 (variable `opsz` axis, +italic) | Body, nav, forms, labels; the template's scale is small (13–15px dominates) |
| Mono accents | system mono (`font-mono`) | — | Dimension labels ("18" × 30"") in the configurator |

Uppercase tracking-wider eyebrow labels (`text-warm-500`) lead every section — the editorial kicker pattern.

## Interaction & motion

- **Motion.dev reveals** (v11.11.13 over jsDelivr): hero copy rises 30px, hero image 40px; every `[data-motion="section-header"]` fades/rises on scroll (offset 90%→65%); `[data-motion="card"]` staggered y-20 with 0.08s siblings; configurator columns slide in from ±20px. `[data-motion]` starts at opacity 0 — no-JS visitors get nothing visible until JS runs (flagged in Notes).
- **Door configurator**: same 6-category tile system as the sibling with per-category style dropdowns and live 2D preview (aspect-ratio scaling, slab/fluted visual variants, hinge-hole visibility toggle), but output stops at spec summary — sq footage, edge treatment, finish name — and never estimates price.
- **Quote drawer cart**: identical architecture to sibling — add from configurator, item cards, per-item delete, units + sq-ft totals, header badge appears only after the first item; submit scrolls to contact.
- **Product modals**: cards open a spec modal (core + edge treatment) with translateY/scale transition via `.modal-panel.active`.
- **FAQ accordion** (`max-height` transition), **filter pills + swatch tabs + search**, **mobile nav**, **toast**, **sticky blurred warm header**.
- **Reduced-motion**: not unset for Motion reveals (no `prefers-reduced-motion` guard in the JS — guard is only on CSS transitions).
- **Network check**: runtime Tailwind CDN, Google Fonts, unpkg lucide, jsDelivr Motion, 7 photos hot-linked from `mordendoors.ca`, three PDFs, Google Maps iframe. With CDNs offline the layout collapses rather than degrades.

## Best suited for

- Trade manufacturers and suppliers wanting an understated, premium print-like presentation
- Shops whose pricing is quote-only and whose conversion path is a spec sheet + inquiry
- Designers who prefer serif-editorial tone over SaaS-style spec dashboards
- Small independent shops wanting the full configurator/quote architecture without a busy gold-luxury skin

## Not a good fit for

- Self-service price-estimating funnels — pricing is deliberately absent
- Marketing pages that must survive with JS disabled (the Motion gating hides content at opacity 0)
- Clients wanting aggressive commercial push: no comparison table, no cross-reference engine, no instant estimate — that arsenal lives in `moderndoors`

## Notes for agents

- Single self-contained `index.html`; no build step. Same business data as `moderndoors` (phone, address, PDFs, photos, map) but a distinct navigation set (6 links vs 8) and `#why-us` instead of `#comparison`.
- Every title uses `text-[clamp(min,vw,max)]` sizing — copy the serialized clamp values, not fixed px, if re-using headings.
- The 8 finish swatches reuse the sibling's color values (Pure White, Cashmere, Charcoal, Navy, Karisma Walnut, Rift Oak, Forest Sage, Mirror Black) — swatch names/hexes identical between siblings, design framing differs.
- Quote badge markup carries inline `style="display:none"` — its first update flips it via `style.display`; keep that if you clone the cart.
- Lucide icons render on load and again after any drawer re-render (`lucide.createIcons()`).
- Product photos and PDFs point at `www.mordendoors.ca/wp-content/uploads/...`; the map is keyed to the Surrey address. A clone works only while that origin serves the assets.
- Open `index.html` for finer detail; every hex, font and anchor above was read from the file.
