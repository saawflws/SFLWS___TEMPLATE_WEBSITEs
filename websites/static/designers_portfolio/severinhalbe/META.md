# SEVERIN HALBE — A Monograph, Vol. III

> A somber, GSAP-driven print-monograph portfolio for an established design studio with a large, award-decorated body of client work.

| Field | Value |
| --- | --- |
| **Name** | SEVERIN HALBE — A Monograph, Vol. III |
| **Slug** | severinhalbe |
| **Category** | designers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/designers_portfolio/severinhalbe/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts + GSAP/ScrollTrigger/Lenis via CDN |
| **Prompt** | `p.md` — original generation prompt |

## Style tags

`deep-green-and-gold` `essay-driven-monograph` `gsap-scroll-choreography` `pinned-scroll-scrub` `somber-luxury` `italic-serif-editorial` `roman-numeral-dividers` `long-form-case-studies` `risograph-cursor-trail`

## Summary

A dark jungle-green-and-gold monograph for an established studio (not a solo junior), built around a written manifesto essay plus five deeply detailed, awarded case studies spanning identity, packaging, posters, type design, and book design. It shares its brief and page skeleton almost verbatim with `junoharada` in this same category, but is nearly three times longer (~2,750 lines vs. ~1,030), voiced in first-person-plural ("we"/"the studio") rather than first-person-singular, and depends on external GSAP + ScrollTrigger + Lenis libraries for a pinned, scroll-scrubbed color-palette film strip and kinetic hero letters — where `junoharada` achieves similar effects with dependency-free vanilla JS and a brighter riso-red/blue/yellow-on-cream palette.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | GSAP-animated kinetic per-letter name ("Severin Halbe"), edition/ISBN metadata, scroll cue |
| 2 | Manifesto | — | Studio philosophy essay (4 paragraphs, drop-cap opening), signature block |
| 3 | Index / Contents | — | Clickable list of 5 projects with category and page range; clicking smooth-scrolls to that spread |
| 4 | Spread 01 — Kunsthaus Nord | — | Museum identity/wayfinding case study, generative hexagonal logo system with animated SVG mark + logo grid |
| 5 | Spread 02 — Hex & Oak Distillery | — | Whisky packaging case study, full-bleed bottle photograph, bottle spec grid |
| 6 | Spread 03 — Frequenz 24 | — | Poster series case study, BPM-driven typographic poster wall (8 cards shown) |
| 7 | Spread 04 — Rauhbart | — | Custom typeface case study, oversized glyph specimen stage, glyph-count stat grid |
| 8 | Spread 05 — Das Buch der Geräte | — | Book design case study, book-mockup visual with faux column text |
| 9 | Specimens | — | Five draggable/pinch-scalable type specimen cards (Rauhbart, Halbe Antiqua, Kalk Mono, Severus Italic, Eichenblatt ornaments) |
| 10 | Palette | `#palette` | Ten-frame color film strip, pinned and scrubbed via GSAP ScrollTrigger as the user scrolls |
| 11 | Lectures & Talks | — | Three talk cards with poster image, fake play button, duration, blurb |
| 12 | Contact / Colophon | — | Studio address, press contact, new-business contact, print colophon, sign-off |

Section content is also broken up by seven roman-numeral divider bars (I–VII: Preface, Contents, Selected Work, Type Specimens, Palette, Lectures, Colophon) between the major sections above.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--jungle-deep` | `#05140A` | Page background |
| `--jungle-primary` | `#0D2818` | Primary panel/surface fill |
| `--jungle-mid` | `#0a1f12` | Secondary panel fill (specimen stage, text columns) |
| `--jungle-secondary` | `#1A4D2E` | Deep green accent |
| `--gold` | `#C9A227` | Primary accent — eyebrows, rules, links, active states |
| `--gold-light` | `#D4AF37` | Lighter gold — emphasis text, highlights |
| `--gold-dark` | `#B8860B` | Darker gold — specimen-desk ink accents |
| `--ivory` | `#F5F5DC` | Primary text color |
| `--moss` | `#8FBC8F` | Soft green accent |

Content-only colors (film-strip section content, not `:root` tokens): Burnt Umber `#8B4513`, Slate `#2F4F4F` — two of the ten displayed swatches have no corresponding CSS custom property.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / editorial serif | Cormorant Garamond | 400, 500, 600, 700 | Italic-heavy, oversized use for hero name, chapter numerals, spread titles, pull-quotes, manifesto body |
| Sans / labels | Inter | 300, 400, 500 | All-caps eyebrows, small labels, byline, meta grids |
| Mono / metadata | JetBrains Mono | 400, 500 | Running head, page folios, spread headers, captions, specimen headers |

## Interaction & motion

- Hero name letters animate in via GSAP `.from()` tweens, each letter randomly assigned one of six motion presets (fly-in from above/below/left/right, scale-from-zero with 180° rotation, etc.), staggered ~70ms apart; byline and meta lines fade in afterward.
- Lenis provides inertial smooth-scrolling site-wide (disabled under `prefers-reduced-motion`), driving a `requestAnimationFrame` loop that also updates GSAP ScrollTrigger.
- Custom canvas-based risograph-style cursor dot trail in gold hues (native cursor hidden) on fine-pointer devices only; disabled on touch and under reduced motion.
- `.reveal` elements (manifesto, talk cards, contact) fade + slide up via IntersectionObserver, with staggered delay variants (`reveal--delay-1/2/3`).
- Each project "spread" cross-fades and slides horizontally in/out based on IntersectionObserver thresholds as it enters/exits the viewport, with a dimmed `is-past` state once scrolled beyond.
- The Kunsthaus Nord spread's SVG logo system draws itself in (stroke-dashoffset transition) once its spread's `is-in` class is set.
- Type specimen cards are draggable via Pointer Events, scalable via mouse-wheel (desktop "pinch" substitute) and native two-finger touch pinch; their "SPEC.PDF" download link is a non-functional placeholder that shows "REQUESTED" for ~1.8s then reverts.
- The Palette section is pinned to the viewport via GSAP ScrollTrigger and scrubs a 10-frame horizontal film strip as the user scrolls roughly 2.5 viewport-heights, updating a progress bar and frame-name readout; falls back to a plain horizontally-scrollable strip if ScrollTrigger fails to load.
- Lecture "play" buttons are placeholders: clicking one dims the poster and appends a static "Now Playing" overlay — no real video element or source is ever created.
- Clicking an Index/Contents entry smooth-scrolls the page to the matching spread.
- The running-head page counter and the palette frame counter are both cosmetic, computed from scroll progress rather than real pagination.
- Needs network access to `cdn.jsdelivr.net` for GSAP, ScrollTrigger, and Lenis; hero kinetic type and the pinned palette scrub will not run (or run in degraded fallback) if that CDN is unreachable.
- `prefers-reduced-motion` disables Lenis, the cursor trail, and the hero kinetic letters, and collapses remaining CSS transitions/animations to near-zero duration.

## Best suited for

- An established, multi-year design studio (not a solo junior) with five or more substantial, awarded case studies to show in long-form detail
- Studios wanting to pair a written manifesto/philosophy statement with their portfolio, not just project thumbnails
- Luxury, heritage, or craft-adjacent client work — museum identity, small-batch spirits packaging, foundry type, literary book design — that suits a somber deep-green-and-gold register
- Studios that also lecture and want a talks archive with a formal, essayistic voice ("the last good year for print")

## Not a good fit for

- Solo or early-career designers without a deep case-study roster — the essay-length copy and five full spreads assume a mature body of work
- Bright, casual, or youth-oriented brands — the palette, pacing, and prose are deliberately formal and unhurried
- Low-bandwidth, offline, or CSP-restricted deployments, since core motion (hero kinetic type, pinned palette scrub) depends on three external GSAP/Lenis scripts loaded from a CDN
- Anyone needing functioning embedded video — the lecture "play" buttons never load real video, only a cosmetic overlay

## Notes for agents

- `p.md` is nearly identical to `junoharada`'s (same designer-monograph brief), but the shipped builds diverge sharply: this one is ~2,750 lines / ~89KB with a manifesto essay, 5 fully worked case-study spreads, and GSAP/ScrollTrigger/Lenis dependencies, versus junoharada's ~1,030 lines / ~59KB, dependency-free vanilla-JS build.
- Loads three external scripts from `cdn.jsdelivr.net` (gsap.min.js, ScrollTrigger.min.js, lenis.min.js) — the hero letter animation and the pinned palette scrub degrade or no-op without them.
- Five project spreads (Kunsthaus Nord, Hex & Oak Distillery, Frequenz 24, Rauhbart, Das Buch der Geräte) each use a distinct per-spread layout modifier class (`.spread--kunsthaus`, `.spread--hex`, `.spread--frequenz`, `.spread--rauhbart`, `.spread--buch`); adding a spread means authoring a new modifier class plus updating the Index list and the hardcoded page-range strings in each `.spread__head`.
- Copy voice is first-person-plural ("we"), attributed to a named studio (Studio Halbe) — contrast junoharada's first-person-singular individual voice.
- Lecture "play" buttons and specimen "download" links are both non-functional visual placeholders, not real media/file behavior.
- The film strip's 10 displayed colors include 2 (Burnt Umber, Slate) that are not defined as `:root` CSS custom properties — treat the Palette table above as the design-token source of truth.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
