# Sanjivini — Business first, technology next

> A dark teal-ink IT-consultancy landing page with a scroll-driven blue→emerald hue drift, a flow-field particle hero, and a live e-Bazar/eStore device composition.

| Field | Value |
| --- | --- |
| **Name** | Sanjivini — Business first, technology next |
| **Slug** | sanjivinifirst |
| **Category** | it_consultancy |
| **Framework** | static |
| **Path** | `websites/static/it_consultancy/sanjivinifirst/` |
| **Entry** | `index.html` — self-contained single file; inline CSS + JS + Tailwind config. Requires external CDNs: Tailwind (play CDN), GSAP + ScrollTrigger + Lenis (jsdelivr), Lucide icons, Google Fonts; demo images hotlink Unsplash/Picsum. |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`dark-teal-ink` `scroll-hue-drift` `flow-field-particle-hero` `fraunces-serif-display` `pinned-horizontal-process` `live-device-composition` `duotone-cursor-preview` `process-first-consultancy`

## Summary

An editorial landing page for an IT & business-systems consultancy that leads with method ("map the process before choosing the tool"). Its signature is a single accent colour whose HSL hue drifts continuously from blue (~208) to emerald (~152) as you scroll, tinting buttons, links and a gradient wordmark, over a deep teal-ink canvas with Fraunces serif display. The hero sits on an interactive flow-field particle canvas the cursor disturbs. The proof section renders the studio's own LocalFarmers marketplace as a **composed, overlapping device scene** — browser storefront, Android app and ops console together — with a live e-Bazar / eStore toggle that animates and swaps the catalogue content across the phone and storefront at once. This is the "warm, atmospheric" Sanjivini; its sibling `sanjivinipartners` is the cooler, blueprint-diagram cut of the same company.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | Flow-field particle canvas, "Business first, technology next.", CTAs, live IST clock, "taking new projects" dot |
| 2 | Sectors marquee | — | Scrolling industries: Manufacturing, Retail, Construction, Agriculture, Professional services, E-commerce |
| 3 | Manifesto | `#manifesto` | "(01) The approach" — a statement whose words light up as you read |
| 4 | Process | `#process` | Pinned horizontal four-step method: Listen → Map → Build → Run, with a progress bar and step name |
| 5 | Services | `#services` | Five services (Consulting, Zoho, Custom apps, Marketplace, Automation) as an accordion with a cursor-following duotone preview |
| 6 | Work | `#work` | LocalFarmers device composition (browser storefront + Android app + ops console) with a live e-Bazar/eStore mode toggle |
| 7 | Contact | `#contact` | Enquiry form (name/company/email/phone/service/message) with inline validation + office/contact info |
| 8 | Footer | — | Large blue→emerald gradient "Sanjivini" wordmark, nav, credit line |

## Palette

| Token | Hex / value | Role |
| --- | --- | --- |
| `ink` | `#081114` | Page background |
| `ink2` | `#0b1417` | Process / darker section background |
| `paper` | `#edf4ef` | Primary text |
| `--h` accent | `hsl(var(--h) 70% 58%)`, `--h` 208→152 | Scroll-driven accent (blue→emerald), buttons/links/dots |
| grad-text | `linear-gradient(100deg, hsl(208 80% 68%), hsl(183 70% 58%), hsl(152 62% 52%))` | Blue→teal→emerald wordmark gradient |
| `--hair` | `hsla(168,22%,82%,.13)` | Hairline borders |
| muted text | `rgba(237,244,239,.42–.70)` | Secondary / kicker text |

The accent is expressed through a live `--h` custom property; there is no fixed accent hex — it is animated on scroll.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Fraunces | 300–700 (+ italic) | Serif display, frequently italic; hero, section titles, wordmark |
| Body | Space Grotesk | 300–700 | Body copy |
| Mono | IBM Plex Mono | 400,500 | Kickers, labels, metadata, prices |

Built on the Tailwind play CDN plus a large custom `<style>` block. Icons via Lucide.

## Interaction & motion

- Scroll-driven accent hue drift (`--h` 208→152) recolours the entire accent system, including the hero particle field.
- Hero flow-field: a canvas of hundreds of particles following a noise field; the cursor repels them like a stone in a stream (static pre-render under reduced motion).
- Pinned horizontal process track (≥1024px) with a live step index/name and progress bar; stacked on mobile.
- Services accordion with a cursor-chasing, rotating duotone preview image (pointer devices).
- LocalFarmers work section: an overlapping browser + phone + console composition with parallax; a shared e-Bazar/eStore toggle swaps catalogue tiles, captions and badges across surfaces with a staggered animation.
- Magnetic buttons, live IST clock (Asia/Kolkata), active-section nav highlighting, manifesto word-by-word reveal, contact form validation + toast, full-screen mobile menu.
- GSAP + ScrollTrigger + Lenis smooth scroll; `prefers-reduced-motion` renders static and skips the particle animation.

## Best suited for

- IT / software / digital-solutions consultancies and dev studios that sell a process-first, "map before you build" methodology.
- Firms with services spanning platform configuration (e.g. Zoho), custom apps, marketplaces and automation who want an accordion services list.
- Agencies with a flagship product or case study they want to show as a rich interactive device demo rather than a static screenshot.
- Brands wanting a calm, premium, design-studio aesthetic with distinctive scroll-reactive colour.

## Not a good fit for

- Clients needing the page to work with external JS/Tailwind blocked — it depends on the Tailwind, GSAP, Lenis and Lucide CDNs.
- Loud, high-contrast or maximalist brands — this is restrained, dark and atmospheric.
- Simple brochure sites that don't have a flagship product to demonstrate — the LocalFarmers device composition is a centrepiece that expects real product surfaces to adapt.

## Notes for agents

- Same company and service list as its sibling `sanjivinipartners`, but a genuinely different design: this one is **warm and atmospheric** (hue-drift accent, flow-field particle hero, overlapping live device composition with a mode toggle); `sanjivinipartners` is **cool and technical** (fixed cyan accent, blueprint grid, a self-drawing SVG flowchart, and a pinned horizontal one-surface-per-panel showcase). Pick on mood and on how you want the flagship product shown.
- There is no static accent hex — the accent is a scroll-animated `--h`; if you need a single brand colour, sample it or set `--h` to a fixed value.
- The content is real (Sanjivini Digital Solutions, Bantwal / Bengaluru, LocalFarmers). Replace copy, contact details and the LocalFarmers demo for any other client.
- Demo images hotlink Unsplash/Picsum; forms are front-end only. Agents may open `index.html` for finer detail than this file covers.
