# FORGE — Iron doesn't lie. Built by the barbell, since 2017.

> A bilingual English/Chinese hardcore-training-studio site built as a cinematic, GSAP-scroll-jacked showcase with a WebGL particle hero and a real manifesto section.

| Field | Value |
| --- | --- |
| **Name** | FORGE — Iron doesn't lie. Built by the barbell, since 2017. |
| **Slug** | forgefitnessstudio |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/forgefitnessstudio/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |

## Style tags

`high-contrast-dark` `orange-accent` `single-family-inter-display` `bilingual-chinese-copy` `scrolljacked-cardstack` `webgl-particle-hero` `custom-cursor` `manifesto-driven`

## Summary

The most animation-heavy and technically fragile of the three gym templates: it loads GSAP, ScrollTrigger, Lenis smooth-scroll, and Three.js from external CDNs to drive a WebGL particle background, a scroll-jacked pinned curriculum card stack, and a scroll-scrubbed word-by-word manifesto reveal. It is also the only sibling with genuine bilingual content — Chinese program names, coach names, member names, and district names are threaded through the real copy, not decorative. Where ironforge is a tight 5-section funnel and ironhouse is an operations-heavy multi-location business site, this build is organized around brand philosophy (a dedicated Manifesto section) and facility photography (a bento-grid Facility section) for a single brand operating across three Chinese cities.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | Headline, typewriter-animated sub-copy, 3 overlapping coach portraits, 4-stat ticker row |
| 2 | Marquee | — | Infinite scrolling brand-slogan ticker |
| 3 | Manifesto | `#manifesto` | Brand-philosophy paragraph (scroll-scrubbed word reveal) + signed/revision/binding-on sign-off row |
| 4 | Curriculum | `#curriculum` | 3 program cards (Hypertrophy 增肌, Metabolic 减脂, Performance 体能) as a pinned, scroll-jacked stack with schedule slots and stat readouts |
| 5 | Coaches | `#coaches` | 6 coach cards with bilingual EN/ZH names, hover quote, credentials, and personal-record stats |
| 6 | Community | `#community` | 6-cell stat grid (member count, retention, gender split, professions, tenure, busiest session) |
| 7 | Member Stories | `#stories` | 5 static story rows with bilingual member names and before/after metric pairs |
| 8 | Facility | `#facility` | Asymmetric bento-grid photo gallery of the training floor, equipment, and DEXA/recovery rooms |
| 9 | Booking | `#booking` | Trial-request form (name/phone/email/city/goal/history) + 3-city location and hours info panel |
| 10 | Footer | — | Brand tagline, studio/program/contact link columns (programs and studios listed with Chinese labels), copyright bar |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#000000` | Page background |
| `--deep-black` | `#0a0a0a` | Marquee / community / booking section background |
| `--card` | `#141414` | Card background |
| `--card-elevated` | `#1a1a1a` | Elevated card surface |
| `--text` | `#ffffff` | Primary text |
| `--text-soft` | `rgba(255,255,255,0.6)` | Secondary text |
| `--text-mute` | `rgba(255,255,255,0.32)` | Muted / tertiary text |
| `--line` | `rgba(255,255,255,0.10)` | Hairline border |
| `--line-bright` | `rgba(255,255,255,0.22)` | Brighter border (form fields) |
| `--highlight` | `#FF5E1A` | Primary accent orange |
| `--highlight-dim` | `rgba(255,94,26,0.45)` | Dim accent (hover borders) |
| `--highlight-soft` | `rgba(255,94,26,0.12)` | Soft accent background wash |
| `--silver` | `#B8B8B8` | Secondary label text |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display + body | Inter | 400,500,700,800,900 | Single family carries everything — huge 900-weight uppercase headlines down to 400-weight body copy; no separate display face |
| Mono | JetBrains Mono | 400,700 | Eyebrow labels, stat units, form labels, footer meta |

No icon library — icons are unicode glyphs (`→`, `✕`, `✦`). Depends on 4 external script CDNs beyond fonts: GSAP, GSAP ScrollTrigger, Lenis (jsdelivr), and Three.js (via `<script type="importmap">` pointing at unpkg).

## Interaction & motion

- Loads GSAP, ScrollTrigger, Lenis, and Three.js from external CDNs — needs live network access to those hosts; the particle canvas stays blank and scroll-jacking/manifesto-scrub degrade to no-ops if any of them fail to load.
- A full-viewport WebGL particle field (Three.js shader points, two color layers) drifts behind the hero and marquee and parallax-reacts to mouse position; skipped entirely under `prefers-reduced-motion`.
- Custom two-state cursor dot (`mix-blend-mode: difference`) enlarges over interactive elements; desktop/fine-pointer only, hidden on touch devices.
- Hero sub-copy is typed out character-by-character via `setInterval`, then a blinking caret hides and the CTA buttons fade in.
- Manifesto paragraph is split into per-word `<span>`s that stay blurred/dimmed until scroll position brings them into focus one-by-one via GSAP ScrollTrigger `scrub`.
- Curriculum section pins the viewport (`ScrollTrigger.create({ pin: ... })`) and scroll-jacks three stacked program cards, translating/scaling/dimming them into place as the user scrolls — the most complex interaction of the three sibling templates.
- Coach and member-story sections are plain hover-highlight grids/lists — no flip cards and no drag carousel.
- Booking form submit is a bare inline `onsubmit="...alert(...)"` — not a styled toast or inline success panel like its siblings.
- Lenis intercepts same-page anchor clicks for eased smooth-scrolling instead of native `scrollIntoView`.
- All motion (particles, cardstack pin, manifesto blur, hero line animation) is explicitly disabled or short-circuited under `prefers-reduced-motion`.

## Best suited for

- A bilingual (English/Chinese) hardcore training-studio brand where the Chinese-language content is a real requirement, not a nice-to-have — program names, coach names, and locations are already localized.
- Teams comfortable depending on external JS libraries (GSAP, Three.js, Lenis) for a maximally cinematic, scroll-driven presentation, and who control or can verify the deployment's CDN access.
- Brands that want a dedicated brand-philosophy/manifesto moment and a facility-photography showcase, rather than a schedule or pricing table.
- Studios operating across multiple Chinese cities (the shipped content assumes Shanghai/Beijing/Shenzhen).

## Not a good fit for

- Low-bandwidth, offline, or CDN-restricted deployments (e.g. sandboxed artifact viewers) — four external script dependencies beyond fonts must all load for the intended experience.
- Teams who don't want Chinese-language content and can't easily strip it — it's threaded through program names, coach names, member names, and district names across many sections, not isolated in one config block.
- Clients wanting the simplest, lightest-weight build of the three — this is the heaviest and most JS-dependent, with the most moving parts to debug if something breaks.

## Notes for agents

- Contains genuine Chinese-language content, not just decorative flourishes: program names (增肌 / 减脂 / 体能), coach names (滕伟, 赵琳, 张易, 陈默, 王舒, 刘颜), member names (王辉, 陈思, 林晨, 吴洁, 张恒), and district names (静安 / 朝阳 / 南山) appear in headings, card copy, and footer links. This materially affects reuse — translating or genericizing the site means touching many scattered spots, not one string table.
- Depends on four external script CDNs beyond Google Fonts (GSAP, ScrollTrigger, Lenis via jsdelivr; Three.js via import map to unpkg) — verify CDN allowlists before reusing in a sandboxed or offline context; without them the hero particle canvas is blank and the curriculum section will not scroll-jack.
- 9 primary content sections plus a marquee — comparable density to ironhouse, but organized around brand philosophy and facility photography rather than schedule/pricing tables.
- All imagery is `picsum.photos` placeholders keyed by descriptive seeds.
- Custom cursor and particle canvas are desktop-only (disabled on coarse/touch pointers via `pointer: coarse` media query and JS check).
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
