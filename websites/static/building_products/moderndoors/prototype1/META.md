# MORDEN DOORS — Prototype 1 · Brass Luxury

> A brass-on-slate B2B manufacturing site for a custom cabinet door maker, with a live door configurator and instant estimator, a competitor comparison matrix, and a laminate cross-reference search.

| Field | Value |
| --- | --- |
| **Name** | MORDEN DOORS — Brass Luxury (prototype1) |
| **Slug** | moderndoors/prototype1 |
| **Category** | building_products |
| **Framework** | static |
| **Path** | `websites/static/building_products/moderndoors/prototype1/` |
| **Entry** | `index.html` — self-contained single file; all product imagery, maps and PDFs are hot-linked over CDN |
| **Prompt** | none — no `p.md` (omitted per user request) |
| **Origin** | AI-generated HTML; brand imagery hot-linked from Morden Doors Ltd.'s live site (`mordendoors.ca`), so reusing this design beyond that owner requires their permission |

## Style tags

`b2b-trade-portal` `brass-gold-accent` `dark-slate-hero` `glass-header` `interactive-door-configurator` `instant-price-estimator` `quote-drawer-cart` `comparison-table-heavy` `spec-pill-details` `tailwind-utility-css`

## Summary

The heavier, commerce-forward build of the five-prototype MORDEN DOORS family (`../META.md`). Its configurator is the rare kind that computes live square footage and an estimated CAD price range (category-tiered rates per sq ft), and it pairs that with a full seven-row competitor comparison matrix and a laminate brand cross-reference search whose results deep-link straight into the configurator. Visually it is brass/gold (`#C2983E`) on deep slate, with a sticky glass header, glass cards and a dotted gold hero pattern — no scroll-reveal library, every interaction is functional JS. Its counterpart `prototype2/` is the calm cream editorial build with no pricing at all.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Announcement bar | — | Canadian-manufacturer badge, trade phone/email, 7–10 day lead-time pill |
| 2 | Glass header | — | Logo, 8 anchor links (Visual Configurator tagged "Interactive"), quote button with count badge, Instant Quote CTA, mobile dropdown |
| 3 | Hero | — | B2B eyebrow, gradient display H1, 3 CTAs, 4 stat tiles (25+ yrs / 150+ swatches / 7–10 days / 100% CNC), featured Model 2000-D card with hotspots, spec pills and hotlinked product photo over rotating glow blobs + gold dot grid |
| 4 | Interactive Door Configurator & Spec Sheet | `#configurator` | 5-step estimator: 6 category tiles (per-category style dropdowns swap), 6 finish swatches, W/H/Qty inputs, hinge-bore and matching-back options |
| 5 | Configurator live output | `#configurator` | Dynamic 2D door render (aspect-ratio scaling, slab hides panel, fluted renders stripes, hinge holes toggle), sq-ft per door + batch totals, edgeband readout, estimated CAD price range, Add to Quote |
| 6 | Complete Manufacturing Catalog | `#collections` | 6 product cards (Thermofoil-PVC, TFL 5-Piece, TFL Slab & Cut/Tape, Acrylic/PET, Reeded & Fluted, Raw MDF) with hotlinked photos, filter pills, View-Full-Specs modals |
| 7 | Color Swatch & Board Match Library | `#swatches` | 6 swatch cards with Tafisa/Olon/Uniboard cross-refs, 6 filter tabs, live search, physical swatch-binder CTA banner |
| 8 | Specialized Manufacturing Services | `#services` | Cut & Tape, Lamination & Layup, Folding Shelves & Gables cards with checked capability lists |
| 9 | How Morden Doors Outperforms | `#comparison` | 7-row comparison matrix vs. corporate distributors and big-box flat-pack, plus a laminate brand cross-reference search table (5 board codes, each with a "Use in Configurator" deep link) |
| 10 | Contractor Program | `#trade` | 4 trade-account benefit tiles; embedded downloads hub (`#downloads`) linking 3 external PDF order/credit forms |
| 11 | Surrey Facility | `#contact` | Full inquiry form (name/company/email/phone/product interest/details), address/phone/email/hours cards, Google Maps iframe embed |
| 12 | FAQ | — | 4-item accordion: lead times, laminate matches, 35mm hinge boring, delivery scope |
| 13 | Footer | — | 5-column: bio + socials, Door Lines, Shop Services, Surrey Facility, legal bar |
| 14 | Floating dock & overlays | — | FAB pill (Review Quote / call / email / to-top), slide-out quote drawer with item cards and totals, product spec modal, toast notifications |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `brand-500` | `#C2983E` | Signature warm brass/gold — CTAs, links, estimate figures, badges |
| `brand-300` | `#DFC58C` | Light gold — hero gradient headline, icons on dark |
| `brand-400` | `#D4AF5F` | Mid gold — dark-surface icons and price text |
| `brand-900` | `#3D2D11` | Deep gold (scale floor, config token) |
| `slate-950` | `#070C18` | Hero band, price box, footer, announcement bar |
| `slate-900` | `#0F172A` | Nav brand chrome, table header row, dark comparison column |
| `slate-850` | `#151D2F` | Extended dark surface (config token) |
| `stone-50` | `#FAFAF9` (Tailwind default) | Page background |
| `stone-100` / `stone-200` | `#F5F5F4` / `#E7E5E4` (defaults) | Section banding and hairline borders |
| `slate-800` | `#1E293B` (default) | Body text on light sections |
| `emerald-500` | `#10B981` (default) | Verified-check pills, lead-time pulse, dock accents |
| `amber-500` | `#F59E0B` (default) | Info/warning notice bands, amber spec chips |
| glass header | `rgba(255,255,255,0.88)` + 14px blur | Sticky header fill (`.glass-header`) |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Outfit | 400;500;600;700;800 | Hero H1, section titles, stat figures — often `font-extrabold`, gradient-clipped in the hero |
| Body / UI | Inter | 300;400;500;600;700 | Body copy, nav, forms; small sizes (`text-xs`) dominate the spec-dense cards |
| Mono accents | system mono (`font-mono`) | — | Codes and spec chips ("Thermofoil 3D", board codes, dimension labels) |

Labels are uppercase with `tracking-wider/widest`; eyebrow pills pair a lucide icon with bold uppercase 11–12px text.

## Interaction & motion

No scroll-reveal or animation library — every behaviour is functional JS plus CSS transitions:

- **Door configurator**: category tiles swap the style dropdown's option set; width/height/qty inputs, hinge/back checkboxes recalculate sq-ft per door, batch area and a CAD price range (`$13–26/sq ft` base rates by category) on every input; the 2D door render rescales to the aspect ratio, hides its inset panel for slab styles, paints fluted/reeved stripes with `repeating-linear-gradient`, and toggles rendered hinge holes.
- **Quote drawer cart**: items accumulate with per-item spec lines, drawer and header/dock badges update, line items are removable, totals (units + sq ft) recompute, submit scrolls to the contact section; clear-all.
- **Cross-reference engine**: case-insensitive search over the board-match table rows; "Use in Configurator" sets the finish, reactivates the active swatch outline and jumps to `#configurator`.
- **Modals & drawer**: product spec modal and sample-kit CTA (scrolls to contact) with backdrop blur and scale/opacity transitions; slide-out quote drawer.
- **Filters & search**: catalog filter pills, swatch tabs, swatch search — all display-toggling JS.
- **FAQ accordion**, **mobile nav**, **toast system**, **floating dock** (quote/call/email/scroll-to-top), **glass sticky header**.
- **Fit-for-network check**: Tailwind is the runtime JS CDN (`cdn.tailwindcss.com`) — with CDNs offline all styling collapses, not just motion. Also needs Google Fonts, unpkg lucide, the seven product photos hot-linked from `mordendoors.ca`, three PDFs and the Google Maps iframes.

## Best suited for

- B2B manufacturers and trade suppliers (doors, panels, millwork, surfacing) selling to contractors and cabinet shops
- Spec-driven product catalogs where a configurator, estimator or quote-cart is the conversion path
- Factory/showroom businesses that publish order forms, credit applications and spec sheets as PDFs
- Local-facility businesses wanting a comparison-table pitch against national distributors and big-box retail

## Not a good fit for

- Consumer-facing retail showrooms that want mood-first photography and no ordering apparatus
- Sites that must work offline or expect to survive blocked CDNs (runtime Tailwind is load-bearing)
- Editorial/portfolio-grade interior studios — this is dense spec-sheet commerce, not atmosphere

## Notes for agents

- Single self-contained `index.html`; no build step. All visuals come from inline Tailwind utilities + one custom `<style>` block.
- `tailwind.config` carries `darkMode: 'class'` and `.dark .glass-header` CSS, but **no dark-mode toggle exists anywhere in the markup or script** — the page is permanently light; treat those tokens as dead code.
- Prices are estimates computed client-side (base rates hardcoded in `updateConfigurator()`); nothing submits to a backend — the contact and quote forms are `preventDefault` + toast.
- All seven product photos and the three PDFs point at `www.mordendoors.ca/wp-content/uploads/...`; the map is a Google embed keyed to the Surrey address. A clone keeps working only while that origin serves the images.
- Lucide icons render via `lucide.createIcons()` and are re-invoked whenever drawer items re-render — keep that call if you clone the cart.
- Section ids swap: the configurator is `#configurator`, catalog `#collections`, comparison `#comparison`, trade hub `#trade` with `#downloads` nested inside it.
- Family context: this design is one of five in `moderndoors/` — see `../META.md` for the picker hub and the other four voices.
