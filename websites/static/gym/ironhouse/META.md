# IRONHOUSE — Performance Training Collective

> A multi-city training collective site with a real weekly class schedule, tiered yen-denominated membership pricing, and three named studio locations.

| Field | Value |
| --- | --- |
| **Name** | IRONHOUSE — Performance Training Collective |
| **Slug** | ironhouse |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/ironhouse/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` |

## Style tags

`high-contrast-dark` `ember-orange-accent` `anton-display-type` `data-dense-tables` `operations-heavy` `multi-location` `hand-rolled-css` `no-carousel-static-grids`

## Summary

The most content-dense and operations-complete of the three gym templates: it is the only one with a real weekly class-schedule grid, a three-tier membership pricing table (in Japanese yen), and three distinct studio location cards (Tokyo, New York, Berlin). Where ironforge is a tight five-section funnel and forgefitnessstudio is a scroll-jacked animation showcase, ironhouse reads like a mature multi-studio business's homepage — twelve sections, hand-rolled BEM-style CSS (no Tailwind, no icon font), and static hover-parallax coach cards instead of flip cards or carousels. Despite the shared `p.md` calling for a drag/swipe member-story carousel, this build ships that section as a static, DEXA-data-driven list.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | — | Split headline + large portrait image, founding stats strip, member-count overlay card |
| 2 | Ticker | — | Infinite horizontal marquee of brand facts (est. year, coach count, member count, retention rate) |
| 3 | Stats | — | 5-column stat bar (operating since, coaches, members trained, studios, 12-month retention) |
| 4 | Curriculum | `#training` | 3 program cards (Hypertrophy, Shred, Performance) with duration/frequency/session/coaching-ratio specs |
| 5 | Coaches | `#coaches` | 6 coach cards (photo, bio, credentials, mini stat row) with cursor-parallax photo tilt |
| 6 | Transformations | `#stories` | 3 static case-study rows with DEXA-verified before/after data tables |
| 7 | Collective | — | Manifesto paragraph + 3-paragraph founding story + 3 member "voice" testimonial cards |
| 8 | Schedule | `#schedule` | Full weekly class timetable (7 days × 6 time slots) with coach names and open/full spot counts |
| 9 | Membership | `#membership` | 3 pricing tiers (Drop-In, Monthly Unlimited, Annual Collective) in ¥, with feature checklists |
| 10 | Locations | `#locations` | 3 studio cards (Tokyo/Shibuya, New York/Tribeca, Berlin/Mitte) with founding year, floor area, staff count |
| 11 | Final CTA | `#book` | Trial-booking form (name + studio select) with inline success message |
| 12 | Footer | — | Brand tagline, social links, 4 link columns, copyright bar |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--void` | `#050505` | Deepest section background (stats, collective, final CTA) |
| `--carbon` | `#0C0C0C` | Page/body background |
| `--ash` | `#141414` | Card and dark-section background |
| `--graphite` | `#1B1B1B` | Card hover background |
| `--raised` | `#222222` | Raised surface token |
| `--steel` | `#2C2C2C` | Hairline borders / grid gaps |
| `--silver` | `#C8CCD0` | Body/label text on dark |
| `--mercury` | `#7A7E82` | Muted secondary text |
| `--dim` | `#4A4D50` | Disabled / off state text |
| `--chalk` | `#F2F2F3` | Headline / high-emphasis text |
| `--ember` | `#FF4D00` | Primary accent orange |
| `--ember-dim` | `#C73A00` | Dimmer accent variant |
| `--ember-soft` | `rgba(255,77,0,0.12)` | Soft accent background wash |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Anton | 400 | Ultra-bold condensed display, every headline and big number |
| Condensed | Barlow Condensed | 300–700 | Uppercase nav, labels, subheads, buttons, form field values |
| Body | Inter | 300–700 | Paragraph copy and bios |
| Mono | JetBrains Mono | 300–700 | Eyebrow labels, timestamps, schedule/data cells |

No icon library — icons are CSS pseudo-element dots/lines/glyphs. No Tailwind; layout is hand-written CSS with BEM-style class names (`.coach__photo`, `.tier__cta`, etc.).

## Interaction & motion

- Hero headline lines slide up once on page load (CSS keyframe), not scroll-triggered.
- Infinite marquee ticker of brand stats runs continuously.
- Stat numbers count up from 0 when scrolled into view, parsing the existing text (handles `%`, `+`, and comma-formatted values).
- Reveal-on-scroll via IntersectionObserver (`.reveal` / `.reveal-stagger`), same staggered-delay pattern as its siblings.
- Coach cards get a subtle mouse-move parallax tilt on the photo (image translates opposite the cursor position within the card); there is no flip and no carousel.
- The "Transformations" section is a static 3-row list with DEXA-style before/after data — despite `p.md` calling for a drag/swipe auto-advancing carousel, no carousel exists anywhere in this build.
- The weekly schedule table is fully hardcoded (times, classes, coaches, spot counts); no real booking logic behind it.
- The final trial form does client-side validation only and swaps in an inline success message — no backend call.
- Smooth-scroll anchor links correct for the fixed header offset; a "back to top" footer link is wired up.
- Respects `prefers-reduced-motion` by disabling the ticker animation and shortening transitions.

## Best suited for

- A multi-studio business (2+ physical locations) that needs to publish a real class timetable and tiered membership pricing on the homepage.
- International or expat-facing training brands — the shipped content already assumes multiple cities (Tokyo/NYC/Berlin) and yen pricing.
- Clients who want the most content-complete, "everything a prospective member needs" single-page site of the three siblings.
- Operators who want their coaching staff shown as a large roster (6+) rather than a small personality-led team.

## Not a good fit for

- A single small studio with no public class schedule or fixed membership tiers — the schedule and membership sections will look empty or fabricated if left as-is.
- Brands wanting a cinematic, high-motion hero (this hero is a static split-image layout with a one-time load animation, not an auto-cycling reel or video).
- Clients who specifically want a swipeable/drag testimonial carousel — this build's member stories are a static list, not a carousel.

## Notes for agents

- 12 sections total (hero through footer) — the most section-rich and business-operations-complete of the three gym templates; expect to prune sections (e.g. schedule, membership) for a smaller single-location client.
- Schedule table data (days, times, classes, coaches, spot counts) and all membership pricing/features are fully hardcoded placeholder content — replace before production use.
- Membership pricing is denominated in Japanese yen (¥); reformat currency/values for other markets.
- `p.md` (shared with ironforge/forgefitnessstudio) specifies a drag/swipe auto-advancing member-story carousel; this build does not implement one — the "Transformations" section is a static grid instead. Flag this if a task specifically requires carousel behavior.
- Copy is longer-form than ironforge (multi-paragraph "Collective" founding story, detailed coach bios) but more clinical/data-driven than forgefitnessstudio's manifesto voice.
- All imagery is `picsum.photos` placeholders keyed by descriptive seeds.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
