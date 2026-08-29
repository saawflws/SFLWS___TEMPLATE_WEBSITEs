# Stillwater · A Yoga Studio in Cobble Hill

> A cinematic, editorial yoga-studio one-pager for an established Brooklyn studio, with a sticky glass header and persistent ambient breathing/sound widgets.

| Field | Value |
| --- | --- |
| **Name** | Stillwater · A Yoga Studio in Cobble Hill |
| **Slug** | stillwater |
| **Category** | boutique_yoga_studio |
| **Framework** | static |
| **Path** | `websites/static/boutique_yoga_studio/stillwater/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` |

## Style tags

`editorial-cinematic` `sans-serif-body` `sticky-blurred-header` `full-bleed-hero-image` `persistent-ambient-widgets` `warm-earthy` `card-grid-teachers` `moderate-motion`

## Summary

Stillwater is the more produced, magazine-style build of the two boutique-yoga templates in this category. It opens with a full-viewport hero photograph under a radial veil and a diagonal light-beam overlay, keeps a sticky, backdrop-blurred header pinned through the whole scroll, and adds two persistent fixed-position widgets — a bottom-left breathing-phase indicator and a bottom-center sound-consent toast — that stay on screen across every section. Its sibling, Morrow, is quieter and flatter: no sticky chrome, no full-bleed photography, no floating widgets, and a serif-on-serif (Fraunces + Spectral) body face versus Stillwater's serif-display/sans-serif-body (Fraunces + Inter) pairing. Pick Stillwater when the brief calls for a bigger, more art-directed, editorial-magazine feel with always-visible ambient branding; pick Morrow for a hushed, small-press, everything-in-flow feel.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Topbar | `—` | Sticky/blurred header: circular breathing brand mark, wordmark "Stillwater", nav links, sound toggle with animated wave icon |
| 2 | Hero | `#top` | Full-bleed breathing hero photo with veil + light-beam overlays, kicker label, huge display title, italic tagline, "Reserve a mat" CTA, scroll indicator |
| 3 | Practices | `#practices` | 2×2 grid of 4 practices (Vinyasa, Yin, Restorative, Breathwork), each with a Sanskrit gloss, description, and meta tags (duration/room/level) |
| 4 | Teachers | `#teachers` | 3-card grid: photo, name, role/years, quote that types out on hover/tap, card lifts on hover |
| 5 | Schedule | `#schedule` | Column-headed weekly list (9 static rows across Mon–Sun) with seat dots; rows expand to a definition-list detail (room/temperature, what to bring, prep notes) |
| 6 | First Class Free (Signup) | `#signup` | Two-column layout: offer copy + bulleted list, and a capture form (name, email, preferred-day select, optional notes) over decorative radial-gradient blobs |
| 7 | Footer | `—` | Brand blurb, Visit/Hours/"Quietly" (social) columns, bottom bar |
| 8 | Breath guide widget | `—` | Fixed bottom-left overlay showing live Inhale/Exhale phase + count, cycling on an 8s timer, visible on every section |
| 9 | Sound consent toast | `—` | Fixed bottom-center overlay offering to opt in to the ambient chime, auto-shows ~2.4s after load and auto-hides after 14s |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--cream` | `#f4ede0` | Page background |
| `--cream-bright` | `#faf5ec` | Cards, form panel, hero text tint |
| `--cream-soft` | `#efe6d4` | Hover backgrounds (practice cells, schedule rows) |
| `--sand` | `#e3d5c1` | Signup section background |
| `--sand-deep` | `#c9b89e` | Teacher photo placeholder background |
| `--sage` | `#8a9a87` | Filled seat dots |
| `--sage-deep` | `#5d6e5a` | Teacher role labels, section-title italic accent |
| `--terracotta` | `#b16a48` | Primary accent — labels, links, quote marks, hover states |
| `--terracotta-deep` | `#8e4f33` | Signup heading italic accent |
| `--dusk-pink` | `#d4a5a0` | Decorative radial glow in signup section |
| `--ink` | `#2c2620` | Primary text, footer background |
| `--ink-soft` | `#4a4036` | Secondary text |
| `--ink-mute` | `#7a6e60` | Tertiary/label text |
| `--line` / `--line-soft` | `rgba(44,38,32,.14)` / `.07` | Borders and dividers |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headings | Fraunces | 300–600 (+ italic 300–500) | Variable optical size; italic used as a sage/terracotta color accent within headings |
| Body / UI | Inter | 300, 400, 500 | Sans-serif body and all-caps tracked labels/buttons — the key typographic difference from Morrow's serif body |

## Interaction & motion

- Hero image scales/translates on an 8s alternating keyframe "breath," paused via `IntersectionObserver` whenever the hero scrolls off-screen.
- Nearly every section uses staggered `.fade-up` reveal classes (`delay-1`…`delay-4`) triggered by `IntersectionObserver`; hero elements fire on load instead of on scroll.
- A fixed breath-guide widget runs a `requestAnimationFrame` loop computing Inhale/Exhale phase and count from elapsed wall-clock time (4s in / 4s out) and fades in ~1.2s after load.
- Teacher card quotes type out character-by-character with punctuation-aware pacing, triggered on `mouseenter` (desktop) or tap-to-toggle (`click`, works as touch fallback too).
- Schedule rows toggle an `is-open` class on click, animating `max-height` and rotating the "+" expand icon 45°.
- Sound: a toast auto-appears after load offering to opt in; once enabled, a 3-oscillator (root/fifth/sub-octave triangle wave) chime is synthesized via Web Audio and plays once on the visitor's first scroll — no audio files, fully offline-capable, wrapped in try/catch.
- Sticky topbar slightly increases its background opacity after 60px of scroll (a "condense" effect).
- Anchor links get a custom smooth-scroll handler that offsets for the fixed header height.
- The signup form is client-side only (inline `onsubmit` swaps the button text) — no network request is made.
- `prefers-reduced-motion` disables the hero breathing animation and the breath-orb pulse.

## Best suited for

- An established, multi-teacher boutique studio (e.g. a "quiet luxury" Brooklyn/urban brand) wanting a cinematic, full-bleed editorial hero.
- Brands that want persistent ambient branding — a breathing widget and consent-gated chime — as a signature touch throughout the whole site, not just the hero.
- Studios with rich, room-specific schedule detail (temperature, what to bring, prep notes per class) worth surfacing in an expandable list.
- Teams comfortable with a heavier JS footprint in exchange for more polish (typewriter quotes, toast, floating widget).

## Not a good fit for

- Small, single-teacher studios that don't have enough per-class detail (room temp, prep notes) to fill out the schedule's expanded view meaningfully.
- Projects that want a lightweight, low-JS page — this template leans on several always-running scripts (breath timer, mouse-independent widgets, scroll listeners).
- Non-wellness brands — the breathing widget and ambient chime are yoga-specific flourishes that would read as gimmicky elsewhere.

## Notes for agents

- 9 rows in the section table (7 `<section>`/structural regions plus 2 persistent fixed-position widgets that render outside the normal section flow but are always visible) — copy is long-form/poetic (Sanskrit glosses, teacher narratives), similar register to Morrow but delivered in a sans-serif voice.
- The schedule is hand-authored as 9 repeated static `.sched-row` HTML blocks (not a JS data array like Morrow) — to edit classes, edit the markup directly.
- All imagery is `picsum.photos` seeded placeholder URLs.
- No backend anywhere: signup form and the "live" ambient chime are both client-side only.
- Distinguishing this from its sibling `morrow`: Stillwater has a sticky/blurred header, a full-bleed cinematic hero photo, and two always-on floating widgets (breath guide + sound toast) that Morrow entirely lacks; Stillwater's body copy renders in Inter (sans-serif) where Morrow's renders in Spectral (serif).
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
