# FORGE — Athletic Club, Brooklyn

> A near-black, acid-green 24/7 Brooklyn iron house with a pinned horizontal programs track and a fully progressive-enhancement build that stands up with every CDN dead.

| Field | Value |
| --- | --- |
| **Name** | FORGE — Athletic Club, Brooklyn |
| **Slug** | forgeathleticclub |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/forgeathleticclub/` |
| **Entry** | `index.html` — self-contained single file; inline CSS + JS. Google Fonts via CDN; GSAP + ScrollTrigger + Lenis loaded as optional enhancement (site works fully without them). |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`high-contrast-dark` `acid-green-accent` `anton-display-type` `grayscale-photography` `pinned-horizontal-programs` `progressive-enhancement` `custom-cursor-magnetic` `usd-membership-tiers`

## Summary

A cinematic, magazine-grade landing page for a single-location 24/7 strength club in East Williamsburg. It is the acid-green FORGE: near-black canvas, one volt-green accent, ultra-condensed Anton display used at hero scale with a rotating seal for the "O". Its defining engineering trait among the gym templates is progressive enhancement done properly — a full vanilla core (menu, modals, accordion, counters, cursor, preloader with a hard kill-switch) runs first and survives every CDN failing, and GSAP/ScrollTrigger/Lenis load afterwards only to add smooth scroll, a pinned horizontal five-discipline programs track, parallax and reveals. Membership is a three-tier USD accordion (Day/Monthly/Annual) with a localStorage join flow that greets returning visitors.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#top` | Full-viewport ANTON "FORGE" wordmark with a rotating circular seal as the "O", grayscale training photo, vertical side label, live-clock nav, scroll hint |
| 2 | Marquee | — | Velocity-reactive scrolling band of the five disciplines (playback rate reacts to scroll speed) |
| 3 | Manifesto | `#manifesto` | Large statement paragraph that fills with ink word-by-word on scroll, plus two parallaxing photo figures |
| 4 | Programs | `#programs` | Pinned horizontal track of 5 disciplines (Strength, Conditioning, Mobility, Combat, Recovery), each with intensity meter, schedule and coach; vertical stacked fallback with no ScrollTrigger |
| 5 | Numbers | `#numbers` | Count-up stat rows (years, members, coaches, weekly classes) plus a live "pounds moved today" ticker |
| 6 | Coaches | `#coaches` | Four-coach hover-peek list opening a full-screen bio modal (image, tag, credentials, stats, book CTA) |
| 7 | Membership | `#membership` | Day Pass / Monthly / Annual as a single-open accordion, USD pricing, "first week free" |
| 8 | CTA | `#join` | "Stop scrolling. Start lifting." with a magnetic button opening the join modal |
| 9 | Footer | `#contact` | Click-to-copy address + email, hours, socials, giant FORGE watermark, back-to-top |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0C0C0B` | Page background |
| `--bg2` | `#121311` | Warmer card / media black |
| `--bone` | `#E9E6DD` | Primary text |
| `--muted` | `#8F8B80` | Secondary text |
| `--dim` | `#5E5B53` | Dim labels / eyebrows |
| `--acc` | `#D0F224` | Acid-green accent (seals, buttons, live dots) |
| `--red` | `#E5484D` | Reserved error / accent red |
| `--line` | `rgba(233,230,221,.14)` | Hairline border |
| `--line2` | `rgba(233,230,221,.22)` | Stronger hairline border |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Anton | 400 | Ultra-condensed all-caps; hero wordmark, section and panel titles, footer watermark |
| Body | Space Grotesk | 400–700 | Body copy, monospaced-style eyebrow labels, buttons, nav |

Icons are hand-inline SVG (no icon font). Layout is hand-written CSS custom properties — no utility framework.

## Interaction & motion

- Preloader counts 000→100 and lifts as a curtain; a hard 5-second kill-switch guarantees it can never trap the page even if scripts hang or a CDN blocks.
- Progressive enhancement: the vanilla core script runs immediately and independently — menu, modals, accordion, count-up stats, custom cursor, preloader, forms and toasts all work with zero external libraries. GSAP/ScrollTrigger/Lenis load *after* the core and only add smooth scroll, the pinned horizontal programs, hero parallax/skew, reveals and the manifesto ink-fill.
- Programs section pins and scrolls horizontally on ≥901px when there is room; otherwise it stays a vertical stack (`html.no-st`).
- Custom cursor with contextual `data-cursor` labels and `data-magnet` magnetic elements (pointer devices, non-reduced-motion).
- Stats count up on view; a "pounds moved today" figure increments live on a timer. Marquee playback rate reacts to scroll velocity.
- Coach list shows a cursor-trailing image peek and opens a full-screen bio modal; membership rows are a single-open accordion.
- Join form validates name/email, generates a demo member id, writes `{name,plan,id}` to `localStorage` under `forge-member`, and shows a "welcome back" toast on return visits. Address and email are click-to-copy. No real backend.
- Full `prefers-reduced-motion` handling disables animation and smooth scroll.

## Best suited for

- A single-location premium strength or athletic club that wants a magazine-grade, high-motion brand page.
- Gyms with a small roster of named coaches (the modal format suits ~4 personalities with credentials).
- Clients billing in USD with simple Day/Monthly/Annual tiers and a "first week free" funnel.
- Anyone who needs the page to remain fully usable even if the animation CDNs are blocked or slow.

## Not a good fit for

- Multi-location chains or studios needing a real weekly class timetable — there is none, only per-discipline day labels.
- Bright, friendly or pastel brands — the design is committed to a near-black, single-acid-accent noir look with grayscale photography.
- Clients wanting bilingual/multilingual copy — all text is terse English only.

## Notes for agents

- The strongest reason to pick this over its FORGE siblings is the **progressive-enhancement architecture**: unlike `forgecoaching` (which depends on GSAP/Lenis/SplitText for its motion) this one degrades to a complete vanilla site.
- Accent is acid/volt green (`#D0F224`) — distinct from the ember-red `forgecoaching` and the bilingual WebGL `forgefitnessstudio`.
- All imagery is Unsplash hotlinks; swap every URL for owned assets before shipping.
- Membership is USD; the join flow is a front-end demo only (localStorage, no server).
- Agents may open `index.html` directly for finer detail — exact animation timings, the kill-switch logic and responsive breakpoints are not fully summarised here.
