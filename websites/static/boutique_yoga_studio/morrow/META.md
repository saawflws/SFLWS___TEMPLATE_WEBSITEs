# Morrow — A small studio for slow practice

> A quiet, literary yoga-studio one-pager built for a two-teacher Hudson, NY studio with a paper-grain aesthetic and a serif-on-serif voice.

| Field | Value |
| --- | --- |
| **Name** | Morrow — A small studio for slow practice |
| **Slug** | morrow |
| **Category** | boutique_yoga_studio |
| **Framework** | static |
| **Path** | `websites/static/boutique_yoga_studio/morrow/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` |

## Style tags

`warm-earthy` `serif-on-serif` `paper-grain-texture` `slow-breathing-motion` `single-column-editorial` `low-density` `quiet-literary` `terracotta-sage`

## Summary

Morrow is the calmer, more understated of the two boutique-yoga builds in this category. It runs entirely on a serif body face (Spectral) paired with Fraunces for display, sits on a sand/paper background with a visible SVG-noise grain overlay, and never introduces a sticky header, floating widget, or full-bleed cinematic image — every element scrolls with the page. Its sibling, Stillwater, is the louder, more produced build: sans-serif (Inter) body copy, a sticky glass-blur header, a full-bleed hero photograph with a light-beam overlay, and two persistent fixed-position widgets (a breathing indicator and a sound-consent toast) that Morrow does not have. If an agent needs a hushed, small-press, "handwritten sign on the door" feel, pick Morrow; if they need a polished, editorial, more heavily art-directed studio site, pick Stillwater.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Header | `—` | Wordmark "Morrow.", nav links, sound on/off toggle button |
| 2 | Hero | `—` | Large serif headline, studio meta line (location/est./room size), lede paragraph, "Book a first class" CTA, self-breathing hero image with caption |
| 3 | Practices | `#practices` | Numbered list of 4 practices (Vinyasa, Yin, Restorative, Breathwork) with description and duration |
| 4 | Interlude | `—` | Full-width italic pull-quote with a hand-written-sign attribution |
| 5 | Teachers | `#teachers` | 3 teacher profiles: photo, name, role, "why I teach" quote (types out on hover/scroll), bio meta |
| 6 | Schedule | `#schedule` | This-week class list (9 rows) rendered from a JS data array; rows expand to show room, prerequisites, duration/what-to-bring, and a reserve/waitlist link |
| 7 | Free class (Begin) | `#free-class` | Offer copy + pricing note, capture form (name, email, interest select, optional notes) |
| 8 | Footer | `#visit` | Signature blurb, address, live open/closed status, hours, contact links, bottom bar |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--sand` | `#EFE9DD` | Page background |
| `--sand-deep` | `#E5DDC9` | Image/frame placeholder background |
| `--paper` | `#F5F0E4` | Schedule + footer section background |
| `--ink` | `#1F1B17` | Primary text |
| `--ink-soft` | `#5C544A` | Secondary text (body copy, meta) |
| `--ink-faint` | `#8A7F70` | Tertiary/label text |
| `--sage` | `#7A8C72` | Filled seat dot, "open" status dot |
| `--sage-deep` | `#5A6B52` | Sound-toggle "on" state text/dot |
| `--terracotta` | `#B5613F` | Primary accent — links, italics, CTA underline, submit button |
| `--terracotta-deep` | `#974F31` | Accent hover/active state |
| `--dusk` | `#D4A89A` | Breathing indicator dot |
| `--border` | `#D9D1C2` | Section dividers |
| `--border-soft` | `#E8E0CE` | Row/card dividers |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headings | Fraunces | 300, 400, 500 (+ italic) | Variable optical size pushed to 144 for large display type; italic used as an accent color-swap on key words |
| Body | Spectral | 300, 400, 500 (+ italic) | Serif body text, 17px base, line-height 1.75 — deliberately serif-on-serif with the headings |

## Interaction & motion

- Hero image scales on an 8-second CSS `breathe` keyframe loop; a small dot pulses in sync as a visual "breathing" indicator.
- Headings/paragraphs/rows use a shared `.reveal` class faded up via `IntersectionObserver` (700ms ease, one-time).
- Teacher quotes type out character-by-character: on hover of the parent card on pointer devices, or automatically ~500ms after scrolling into view on touch devices (detected via `matchMedia('(hover: none)')`).
- Schedule rows toggle open/closed on click (`dataset.open`), animating `max-height` and rotating a "+" into an "×".
- Sound toggle button lazily creates a `Web Audio` `AudioContext` and, once enabled, plays a synthesized 4-oscillator bell chime once on the visitor's first scroll — no audio files, generated entirely client-side, works fully offline.
- The "free class" form is client-side only: it validates required fields and swaps the button's label/color on submit; there is no network request, so no data is actually sent anywhere.
- The open/closed footer indicator computes the studio's open state from the visitor's local system clock (hardcoded Mon–Fri/Sat–Sun hour ranges) and refreshes every 60s — it does not account for timezone or holidays.
- `prefers-reduced-motion` disables the breathing animation, the blinking cursor, and the reveal transform.

## Best suited for

- A small, one- or two-room boutique studio with named founder-teachers and a personal, narrative brand voice.
- Studios whose selling point is intimacy/slowness (capped class sizes, no music with words, no memberships).
- A "first class free" lead-capture flow where a human (not a booking engine) replies by hand.
- Brands that want a warm, small-press/paper aesthetic rather than a polished commercial look.

## Not a good fit for

- High-energy studios, CrossFit-style gyms, or brands wanting bold/high-contrast visuals — the palette and pacing are deliberately muted.
- Multi-location chains or franchises needing a location switcher or scalable schedule data source.
- Businesses that need real payment/booking integration out of the box — the schedule and signup form are both static/decorative.

## Notes for agents

- 8 sections total including header and footer; copy is long-form and narrative (teacher bios read like short essays, not bullet specs).
- All imagery is `picsum.photos` seeded placeholder URLs — replace with real studio/teacher photography before shipping.
- The weekly schedule is generated client-side from a hardcoded `scheduleData` JS array (`<script>` near the bottom) and injected into `#scheduleList` — to edit classes, edit that array, not the markup.
- No backend anywhere: the signup form and the open/closed clock are both purely client-side/decorative.
- Distinguishing this from its sibling `stillwater`: Morrow has no sticky header, no full-bleed hero photo, and no persistent floating widgets — everything is inline in normal document flow, and the body font is a serif (Spectral) rather than Stillwater's sans-serif (Inter).
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
