# FORGE — Strength & Conditioning Studio

> A dark iron-and-ember single-coach strength studio that sells four coaching services (not memberships), with heavy GSAP/Lenis motion and a horizontal article library.

| Field | Value |
| --- | --- |
| **Name** | FORGE — Strength & Conditioning Studio |
| **Slug** | forgecoaching |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/forgecoaching/` |
| **Entry** | `index.html` — self-contained single file; inline CSS + JS. Requires external CDNs for full effect: GSAP + ScrollTrigger + SplitText + Lenis (jsdelivr), Google Fonts; hero/portrait photos hotlink Unsplash and randomuser.me with a Picsum fallback. |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`high-contrast-dark` `ember-red-accent` `anton-display-type` `single-coach-brand` `service-not-membership` `pinned-horizontal-library` `gsap-splittext-lenis` `article-reader-modal`

## Summary

The ember-red FORGE: a private strength & conditioning studio built around one founding coach (Marcus Reeve) rather than a facility. Unlike the other gym templates it sells **coaching services** — One-on-One, Online Programs, Nutrition Planning and Group Training, each with per-session or per-month pricing — instead of membership tiers or a class schedule, which makes it the same conversion shape as `marcusreid` but under a studio brand with an iron/ember aesthetic. Near-black layered blacks, a single hot red accent, ultra-condensed Anton display, and a heavy motion layer: SplitText loader, choreographed hero intro, Lenis smooth scroll, a pinned horizontal "mindset" article library that opens full articles in a reader modal, scroll-velocity marquee and count-up stats.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | — (`#top` wraps main) | "Forge your best self.", coach status chip, founder badge, three count-up stats, background FORGE word |
| 2 | Marquee band | — | Red band of scrolling values (Strength / Discipline / Nutrition / Mindset / No Shortcuts) |
| 3 | Method | `#method` | Coach philosophy, portrait with parallax, a pull-quote, and a four-item counter strip |
| 4 | Programs | `#programs` | Four service offers as hoverable list rows (One-on-One $90/session, Online $39/mo, Nutrition $120/mo, Group $25/class) with a cursor-chasing image preview |
| 5 | Statement | — | Full-bleed "creed" section, scrub-lit title over a parallax photo |
| 6 | Mindset | `#mindset` | Pinned horizontal library of 3 articles + an "archive" CTA card; articles open in a reader modal |
| 7 | Proof | `#proof` | Two counter-scrolling rows of client testimonials with result badges |
| 8 | CTA / Contact | `#contact` | "Ready to be forged?", rotating "free session" badge, and a free-session request form (modal + inline) |
| 9 | Footer | — | Sitemap, hours, contact, socials, giant FORGE watermark, back-to-top |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--black` | `#0b0b0c` | Page background |
| `--coal` | `#111114` | Card / panel background |
| `--iron` | `#151518` | Deepest surface |
| `--bone` | `#f1ede6` | Primary text |
| `--ash` | `#8f8b84` | Secondary text |
| `--red` | `#EE2C1A` | Ember-red accent (buttons, headings-on-hover, marquee, links) |
| `--red-deep` | `#B81A0C` | Deeper accent red |
| `--line` | `#232327` | Hairline border |
| `--line2` | `#2a2a2e` | Stronger hairline border |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Anton | 400 | Condensed all-caps; hero, section titles, watermark |
| Body | Archivo | 400–700 (+ italic 400) | Body copy, article text |
| Mono | JetBrains Mono | 400,500,700 | Eyebrow labels, metadata, prices, nav |

Icons are hand-inline SVG. No utility framework — hand-written CSS.

## Interaction & motion

- SplitText-driven loader (word rises, bar fills, curtain lifts) then a choreographed GSAP hero intro; Lenis smooth scroll throughout.
- Custom cursor with a dot, a trailing ring and a contextual "VIEW" label; magnetic buttons (`data-magnetic`, pointer devices).
- Programs rows drive a cursor-chasing image preview; the mindset library pins and scrolls horizontally on ≥900px with a progress index/bar.
- Statement creed is scrub-lit word-by-word; marquee band's timeScale reacts to scroll velocity; count-up stats on view; parallax on hero/method/statement media.
- Article reader modal (3 full articles) and a contact-form modal that pre-selects the service from the row clicked; both validate name/email and show demo success states with no backend.
- Image `onerror` swaps to seeded Picsum grayscale placeholders. Rotating "free session" badge in the CTA. Footer word tints red on hover.
- `prefers-reduced-motion` renders everything static (loader hidden, counters set, no scroll effects). If GSAP fails to load, the loader is removed and content stays visible, but the motion layer is lost.

## Best suited for

- An individual strength/conditioning coach or a one-coach studio selling coaching packages rather than gym memberships.
- Coaches offering a mix of in-person and remote/online programs plus nutrition, who want per-service pricing on the page.
- Brands wanting a dark, premium, editorial look with heavy scroll choreography and a built-in article/blog surface (the mindset library).
- Studios with strong desaturated photography suited to a red-duotone treatment.

## Not a good fit for

- Multi-coach clubs or facilities needing membership tiers, a weekly class schedule or multiple locations — none exist here.
- Clients who need the page to work with external JS blocked — the motion and library depend on GSAP/ScrollTrigger/SplitText/Lenis, and while content survives, the experience is heavily degraded.
- Bright, playful or pastel brands — this is committed to near-black + ember-red noir.

## Notes for agents

- Same **conversion model as `marcusreid`** (single coach, four service offers, articles, testimonials, free-session form) but as the FORGE studio brand with an ember-red iron aesthetic and a far heavier GSAP/SplitText/Lenis motion layer. Pick `marcusreid` for a lighter, dependency-tolerant personal-trainer page; pick this for the high-production studio version.
- Accent is ember-red (`#EE2C1A`) — distinct from the acid-green `forgeathleticclub` and the bilingual WebGL `forgefitnessstudio`.
- Unlike `forgeathleticclub`, this template is **not** progressive-enhancement-hardened: its motion depends on the CDNs being reachable.
- Photography hotlinks Unsplash + randomuser.me with a Picsum fallback; swap all URLs for owned assets before shipping. Pricing is USD; forms are front-end demos only.
- Agents may open `index.html` directly for finer detail than this file covers.
