# HALDANE — Prototype 4 · Swatch Library

> A wholesale trade prototype for a cabinet-door supplier: a swatch-book design system of square CSS-drawn finish tiles, a 52-finish flip-card catalog across six material binder tabs, and a demo order tracker with a four-stage stepper.

| Field | Value |
| --- | --- |
| **Name** | HALDANE — Wholesale Cabinet Door Swatch Library (prototype4) |
| **Slug** | moderndoors/prototype4 |
| **Category** | building_products |
| **Framework** | static |
| **Path** | `websites/static/building_products/moderndoors/prototype4/` |
| **Entry** | `index.html` — self-contained single file; zero images, zero maps — every finish surface is drawn in CSS |
| **Prompt** | none — no `p.md` (omitted per user request) |
| **Origin** | AI-generated HTML; deliberately fictional brand ("Haldane Door Co.", Grand Forks BC, 555 phone, `haldanedoor.com`) — safe to rebrand wholesale onto a real client |

## Style tags

`swatch-book-language` `square-swatch-tiles` `flip-card-catalog` `binder-tab-navigation` `css-drawn-woodgrain` `mono-spec-codes` `order-tracking-stepper` `accessibility-first` `warm-paper-palette` `semi-condensed-archivo`

## Summary

The wholesale/trade voice of the five-prototype MORDEN DOORS family — wearing deliberately fictional "Haldane Door Co." sample branding so nothing about the real manufacturer leaks into it. Its design system is a swatch book: everything square, swatches everywhere, and the only rounded elements on the page are pill CTAs. The hero is a 15-tile finish-chip mosaic (two 2×2 spans) that assembles once with a Motion stagger; the catalog is a 6-line binder of ARIA tabs (thermofoil / TFL / acrylic / painted / raw / laminate) whose grids hold 52 CSS-drawn finishes — each card a 3D flip revealing material, edge profile and "Request pricing" on its back. Its one distinctive apparatus: a deterministic-hash order tracker demo that walks a job through Received → In Production → Ready → Shipped with computed dates.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Skip link + header | — | Slim trade band: brand mark, "wholesale · cabinet doors · made for the trade" tagline, phone, Request Pricing CTA |
| 2 | Hero | — | Semi-condensed display headline, trade-first copy, CTA pair; 15-tile finish-chip mosaic (4/5/6-col responsive, `tile--2` 2×2 spans) staggering in on load; small "you're calling the shop" note card |
| 3 | Material lines | `#lines` | 6 ARIA binder tabs with roving keyboard nav (Arrow/Home/End); each panel renders from the inline `CATALOG` JS object — 52 finishes total (10+10+8+8+8+8) with spec codes (`TF-101`, `TL-214`, `AC-302`…), material + edge profile on card backs |
| 4 | Catalog cards | `#lines` | 3D flip cards (`rotateY`, `is-flipped`): face = swatch surface (grain / sheen / gloss / matte / pet / raw classes, `sw-shaker` router reveal), back = material, edge profile, Request pricing |
| 5 | Order tracking | `#tracking` | Job-number input + deterministic hash → one of 4 stages (Received / In Production / Ready / Shipped) with computed dates; 4-stage stepper display |
| 6 | Footer | — | Grand Forks BC trade counter info, mailto pricing link, wholesale-stockists note |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--paper` | `#F2F0EB` | Page ground — warm shop-paper |
| `--panel` | `#FBFAF7` | Card and tile faces |
| `--ink` | `#211D1A` | Text and headings |
| `--navy` | `#283447` | Primary CTA fill, dark tiles (hover deepens to `#1D2736`) |
| `--oak` | `#A9825C` | Signature accent — P-numbers, links, badges, active states |
| `--greige` | `#D8D3C9` | Neutral swatch fills, dividers |
| `--mute` | `#5C5852` | Secondary text, trail sentences, spec labels |

The motif rule: **square swatches, zero radius everywhere; rounded pills reserved for CTAs only.**

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | Archivo (ital, wdth 62–125, wght 400–900) | Headings set at `font-stretch: 87.5%` (semi-condensed) — punchy shop voice |
| Body / UI | Inter 400–600 | Body copy, tabs, forms |
| Codes | IBM Plex Mono | Spec finish codes exclusively — never used for body text |

## Interaction & motion

- **Hero mosaic assemble**: tiles rise/fade once with Motion stagger; `prefers-reduced-motion` collapses it to an instant grid.
- **Binder tabs**: full ARIA tab semantics with roving focus (←→ Home End), `aria-selected`, panels `role="tabpanel"`; switching re-renders the finish grid from `CATALOG`.
- **Flip cards**: `rotateY(180deg)` on hover/`focus-within`/tap (`is-flipped`); keyboard users get the pricing request reachable without the flip.
- **Order tracker**: deterministic string hash picks a 0–3 stage; stepper lines draw with stagger; `esc()` helper sanitises the injected job number.
- **Accessibility-first**: skip link, `focus-visible` styles, `aria-live` on tracker output, reduced-motion guards around every stagger.
- **Network check**: Tailwind CDN, Google Fonts, Motion CDN. The design itself is CSS-drawn — no photos, no iframes, nothing hot-linked.

## Best suited for

- Wholesale cabinet-door / panel suppliers whose whole pitch is "note the code, call for pricing"
- Material finish libraries and swatch-book presentations for cabinet shops
- Sites that need an order-status tool demoed for the client conversation
- Builds that must ship with zero external imagery

## Not a good fit for

- Consumer retail showrooms and mood-board luxury — the trade-binder voice is dry on purpose
- Configurator/cart/estimator needs — pricing is a phone call and an email here
- Real client use before rebranding: the Haldane strings (name, address, 555 number, `haldanedoor.com`) are placeholders by design

## Notes for agents

- The fictional brand is a feature, not an oversight — it was built that way so the design can be cloned onto any real wholesaler without scrubbing the real manufacturer's identity. Replace name/address/phone/domain wholesale.
- `CATALOG` holds 52 representative finishes with codes (`TF-` thermofoil, `TL-` TFL, `AC-` acrylic, `PT-` painted, `RW-` raw, `LM-` laminate), an edge profile and a surface-surface class each — swap in the client's list.
- The order tracker is a demo (hash → stage), not a backend — keep the demo framing on real deployments or wire it to an actual API.
- Family context: one of five in `moderndoors/` — see `../META.md` for the picker hub and the other four voices.
