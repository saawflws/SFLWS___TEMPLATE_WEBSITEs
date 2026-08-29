# IRONFORGE — Elite Strength & Conditioning Studio

> A single-location, black-and-orange strength studio landing page with a photo "reel" hero, flip-card coach bios, and a drag-swipe transformation carousel.

| Field | Value |
| --- | --- |
| **Name** | IRONFORGE — Elite Strength & Conditioning Studio |
| **Slug** | ironforge |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/ironforge/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` |

## Style tags

`high-contrast-dark` `neon-orange-accent` `condensed-display-type` `grayscale-photography` `flip-card-interaction` `drag-swipe-carousel` `tight-five-section-flow` `tailwind-utility-css`

## Summary

A boutique single-studio site built as five tight content sections (curriculum, coaches, stories, booking, plus the hero) rather than the sprawling multi-section builds of its siblings. It is the only one of the three gym templates with 3D-flip coach cards, a momentum/rubber-band drag carousel for member transformations, and a sticky bottom booking bar that appears once the hero scrolls away. Visually it leans hardest into Tailwind utility classes layered under a custom `<style>` block, with a scanline + grain texture over a cycling five-image "reel" hero (not real video). No schedule grid, no membership tiers, and no multi-location content — this is a single-studio, single-CTA (book a trial) design.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | Auto-cycling 5-frame photo "reel" (Ken Burns zoom), mute toggle with fake sound-wave bars, headline, coach-avatar strip, scrolling marquee ticker |
| 2 | Stats | — | 4 count-up tiles: years operating, active members, transformations, elite coaches |
| 3 | Curriculum | `#curriculum` | 3 program cards (Hypertrophy, Metabolic Shred, Primal Foundation) with goal-pill filter chips (visual only) |
| 4 | Coaches | `#coaches` | 4 flip cards — front shows photo/name/role, back reveals credentials + signature workout |
| 5 | Member Stories | `#stories` | Drag/swipe carousel of 6 transformation cards with before/after stats |
| 6 | Booking | `#booking` | Trial-request form (name/phone/email/goal/time) + location, hours, and direct-contact info cards |
| 7 | Footer | — | Large IRONFORGE wordmark watermark, program/studio link columns, newsletter signup |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0a0a0a` | Page background |
| `--bg-darker` | `#050505` | Stats / coaches / booking section background |
| `--bg-card` | `#141414` | Card background |
| `--bg-card-hover` | `#1a1a1a` | Card hover background |
| `--fg` | `#f5f5f5` | Primary text |
| `--fg-dim` | `#c0c0c0` | Secondary text |
| `--muted` | `#6a6a6a` | Muted labels / eyebrows |
| `--accent` | `#FF5400` | Primary accent orange |
| `--accent-bright` | `#FF7A33` | Accent hover state |
| `--accent-dim` | `#B33A00` | Dim accent (scrollbar thumb) |
| `--accent-glow` | `rgba(255,84,0,0.45)` | Glow / shadow accent |
| `--silver` | `#C8C8C8` | Secondary accent (nav CTA button) |
| `--silver-dim` | `#5a5a5a` | Text-stroke / dim silver |
| `--border` | `#1f1f1f` | Hairline border |
| `--border-light` | `#2a2a2a` | Lighter border |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Bebas Neue | 400 | Ultra-condensed all-caps display, hero headline and section numerals |
| Heading | Oswald | 300–700 | Condensed grotesque, uppercase labels/buttons/nav |
| Body | Archivo | 400–900 | Body copy and paragraphs |
| Mono | JetBrains Mono | 400,500,700 | Eyebrow labels, stat captions, data chips |

Icons via Font Awesome 6.4.0 (cdnjs). Layout built on the Tailwind CDN play script plus a large custom `<style>` block.

## Interaction & motion

- Hero "reel" auto-cycles 5 static photos (Ken Burns zoom) every 5s with a progress bar and chapter counter; the mute toggle only animates fake sound-wave bars — there is no actual audio or video element.
- Scroll reveal via IntersectionObserver (`.reveal` / `.reveal-stagger`) with per-child stagger delays.
- Stat counters animate from 0 with cubic easing when scrolled into view.
- Coach cards use a true 3D CSS flip (`rotateY(180deg)`) on hover; touch devices tap-to-flip via `matchMedia('(hover: none)')`.
- Member-story carousel is hand-rolled JS: drag/swipe with momentum and rubber-band clamping at both edges, auto-advances every 4.5s, pauses on hover, has dot indicators and prev/next buttons.
- Curriculum and booking-form "goal pill" selectors only toggle an `.active` class — they do not filter or hide any cards.
- A sticky bottom CTA bar fades in once the hero scrolls out of view and hides again while the booking section is on screen.
- Booking form submit shows a toast notification; no real backend call.
- A grain-texture overlay parallaxes vertically with scroll, and the hero reel container gets a subtle additional parallax translate.

## Best suited for

- A single-location premium strength studio that wants a punchy, cinematic landing page rather than an operations dashboard.
- Brands with a small (3–5 person), personality-driven coaching staff, since the flip-card format is built for a handful of named coaches with signature workouts.
- Studios with strong before/after photography who want a swipeable testimonial wall as the emotional centerpiece.
- Clients whose funnel is a single "book a trial" CTA, reinforced by the persistent sticky bar.

## Not a good fit for

- Multi-location chains or studios that need to publish a real class schedule or membership/pricing tiers — neither exists in this template.
- Brands needing bilingual or multilingual copy — all text here is English-only and terse.
- Clients without professional grayscale-friendly photography, since the noir image treatment and hero reel are central to the design.

## Notes for agents

- Effectively 5 primary content sections (hero, curriculum, coaches, stories, booking) plus a stats strip and footer — the leanest, most tightly scoped of the three sibling gym templates.
- Copy is short and punchy (imperative headlines, mono-spaced data chips) rather than long-form; expect to write terse replacement copy, not paragraphs.
- All imagery is `picsum.photos` seeded placeholders — every seed must be swapped for real assets before shipping.
- Built on the Tailwind CDN script plus a large custom `<style>` block, so expect a mix of Tailwind utility classes and hand-written CSS custom properties (`var(--accent)` etc.) in the markup.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
