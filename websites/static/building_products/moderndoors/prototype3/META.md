# MORDEN DOORS — Prototype 3 · Blueprint Spec

> A technical section-drawing take on the same cabinet-door manufacturer: an engineering-paper palette, a self-drawing SVG cross-section of a shaker door, a data-driven spec catalog, and a mailto-composing pricing form over declared sample data.

| Field | Value |
| --- | --- |
| **Name** | MORDEN DOORS — Blueprint Spec (prototype3) |
| **Slug** | moderndoors/prototype3 |
| **Category** | building_products |
| **Framework** | static |
| **Path** | `websites/static/building_products/moderndoors/prototype3/` |
| **Entry** | `index.html` — self-contained single file; zero raster assets (inline SVG + CSS gradients only) |
| **Prompt** | none — no `p.md` (omitted per user request) |
| **Origin** | AI-generated HTML; no hot-linked imagery or forms — safe to reuse beyond the real Morden Doors Ltd. |

## Style tags

`technical-section-drawing` `self-drawing-svg` `engineering-blue-accent` `sage-paper-palette` `real-dark-mode` `variable-font-stretch` `mono-spec-codes` `accessibility-first` `no-photography-css-finishes` `sample-data-prototype`

## Summary

The engineering voice of the five-prototype family: the page reads like a specification sheet printed on sage engineering paper (`--paper #EEF1EE`), ruled with hairlines (`#B3BEBA`) and speckled with IBM Plex Mono codes. Its hero is an inline SVG technical cross-section of a shaker door (19mm MDF core, 57mm stile, 8mm pocket, foil skin) that draws itself in with Motion when the page loads, and whose foil-skin colour is recoloured live from the finish chips beneath it (a `--foil` custom property). Real dark mode arrives properly — `prefers-color-scheme` plus a `data-theme` hook, dark accent `#6DB6E8`. Pricing exists only as a 3-step mailto composer, and the footer states outright: "Prototype redesign with sample data."

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Header | — | Non-sticky; SVG door mark + wordmark, 3 anchor links, Request Pricing CTA; `.skip` link precedes it |
| 2 | Hero | — | Overline, wide-stretched display H1, short intro; inline SVG cross-section figure (A–E callouts, centreline, dimensions) with foil-colour chips that recolour `--foil` live |
| 3 | Catalog | `#catalog` | Sticky category nav (vertical on desktop, horizontal scroll on mobile) + data-driven entry grid rendered from an inline JS array: 8 material categories, 14 sample finish entries with codes (`TF-M110`, `PET-A104`…), an `aria-live` result count, mailto links per entry |
| 4 | Pricing | `#pricing` | 3-step numbered process list + a spec form that opens a pre-composed `mailto:` draft (no backend) |
| 5 | Footer | — | Address, forms, "About this page" note declaring prototype/sample-data status |

## Palette

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--paper` | `#EEF1EE` | `#0E171E` | Page ground |
| `--panel` | `#E3E8E5` | `#16232C` | Cards / panel fills |
| `--ink` | `#101C26` | `#E8EEEB` | Text and drawn strokes |
| `--muted` | `#4A5A66` | `#A9B7B8` | Secondary text, figure labels |
| `--line` | `#B3BEBA` | `#2F4150` | Hairline rules, grid lines |
| `--accent` | `#0B6399` | `#6DB6E8` | Engineering blue — links, active states, the cross-section's callout markers |
| `--onaccent` | `#EEF1EE` | `#0E171E` | Text on blue |
| `--core` | `#A27B52` | `#A27B52` | MDF core tone inside the figure |
| woodgrains | `--walnut` / `--oak` repeating-linear-gradients | same | CSS-drawn finish swatch surfaces |

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | Archivo variable (wdth 75–125, wght 400–800) | Headings and bold brand strings set at `font-stretch: 112%` via a `.wide` class — the signature wide-engineering look |
| Body | Archivo (same variable font) | UI, forms, paragraphs |
| Codes | IBM Plex Mono 400/500 | Spec codes, figure labels, form hints, `aria-live` counts |

## Interaction & motion

- **Self-drawing cross-section**: each SVG stroke animates in via `stroke-dashoffset` timed by `data-d`/`data-t` attributes through Motion; guard rails for `prefers-reduced-motion` and a missing-Motion graceful fallback (full strokes shown).
- **Foil chips**: clicking a finish chip sets `--foil` on the figure, recolouring the door's skin; the chip gets `aria-pressed`.
- **Data-driven catalog**: category buttons filter an inline JS sample array and re-render the grid (template-literal render); entry codes are Plex Mono chips; each entry opens a `mailto:`.
- **Accessibility-first build**: skip link, `focus-visible` styles everywhere, `aria-pressed` on all filterable controls, `aria-live` regions for the catalog count, `html.js` class gating only progressive UI.
- **Real dark mode**: header shares the `data-theme` attribute pattern with a system-preference default; no broken half-themes.
- **Network check**: Tailwind pinned to 3.4.17 over CDN + Motion 11.18.2 + Google Fonts (Archivo + IBM Plex Mono). Layout holds without CDNs better than its siblings because the design system is mostly custom CSS, but the CDN scripts still load remote code.

## Best suited for

- Manufacturers with an engineering culture who want their web presence to read like their own spec sheets
- Photo-free finish/material catalogs driven by codes and tables
- Clients who want a genuinely correct dark mode, not a dark section
- Prototype/quote-first workflows where pricing happens by email

## Not a good fit for

- Photo-led consumer luxury — there is not a single photograph on the page
- Sites needing a cart, estimator or checkout — this prototype has none, by design
- Timelines that can't afford to swap the sample-data strings for real ones

## Notes for agents

- The catalog is explicitly sample data ("until the real price list is loaded") — the inline JS array holds 14 representative finishes; replace it with the client's real list.
- The pricing form never sends anywhere: it composes a `mailto:` draft. Swap for a real endpoint if the client needs capture.
- Two external PDFs are hot-linked from the real manufacturer's site in the footer.
- Dark theme is wired through `prefers-color-scheme` and honours an optional `data-theme` attribute — keep both paths if you clone.
- Family context: one of five in `moderndoors/` — see `../META.md` for the picker hub and the other four voices.
