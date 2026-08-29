# Juno Harada — Monograph Vol. 01

> A risograph-print-styled monograph portfolio for a solo graphic/type designer to present logo, packaging, and type projects as printed "spreads."

| Field | Value |
| --- | --- |
| **Name** | Juno Harada — Monograph Vol. 01 |
| **Slug** | junoharada |
| **Category** | designers_portfolio |
| **Framework** | static |
| **Path** | `websites/static/designers_portfolio/junoharada/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Google Fonts via CDN |
| **Prompt** | `p.md` — original generation prompt |

## Style tags

`risograph-print` `kinetic-typography` `editorial-monograph` `warm-cream-paper` `cursor-dot-trail` `oversized-italic-serif` `project-spread-scroll` `draggable-type-specimens` `film-strip-palette`

## Summary

A cream-paper, riso-ink monograph built around five named client case studies ("spreads"), each pairing an editorial write-up with a hand-drawn animated SVG logo mark. It shares its brief and page structure almost verbatim with `severinhalbe` in this same category, but stays compact (five projects, ~1,000 lines) and leans into a bright, playful two-color riso palette (red/blue/yellow on warm cream) with a hidden custom cursor that leaves a dual-color dot trail. Where `severinhalbe` is a somber, three-times-longer deep-green-and-gold monograph with a much larger project roster, this build is the short, loud, riso-zine version of the same concept.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Cover | `#cover` | Oversized kinetic per-letter name animation ("Juno Harada"), edition/publisher metadata, subtitle |
| 2 | Contents | `#contents` | Numbered index/table of contents listing all 5 projects with year and page number |
| 3 | Projects | — | Five project "spreads" (articles, `data-project="1"`–`"5"`): Meridian Press (identity), Halcyon (type design), Kassia Records (packaging), The Long Now (posters), Forme & Press (identity) — each with client meta, editorial copy, pull-quote, and an animated SVG logo |
| 4 | Specimens | `#specimens` | Three draggable/pinch-zoomable type specimen cards (Halcyon Display, Halcyon Text, JetBrains Mono) with a fake-PDF download button |
| 5 | Palette | `#palette` | Ten-color film-strip carousel (drag/wheel to scrub) with live Pantone/CMYK/RGB readout |
| 6 | Lectures | `#lectures` | Three embedded talk recordings with click-to-play video, title, venue/date, description |
| 7 | Colophon | `#colophon` | Contact email, studio address, social/elsewhere links, representation, footer credits |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--paper` | `#ECE6D8` | Page background (warm cream) |
| `--paper-2` | `#E2DCC9` | Secondary surface (hover backgrounds, specimen desk) |
| `--paper-3` | `#D8D0BC` | Tertiary surface |
| `--ink` | `#0F0F0E` | Primary text / ink color |
| `--ink-2` | `#3A3835` | Secondary text |
| `--riso-red` | `#E84A2F` | Accent — selection, hover, cursor hover state |
| `--riso-blue` | `#1B4079` | Accent — secondary riso ink |
| `--riso-yellow` | `#E8B547` | Accent — tertiary riso ink |
| `--rule` | `rgba(15,15,14,.18)` | Hairline dividers |

Content-only colors (JS `colors` array powering the in-page Palette film strip, not CSS tokens): Riso Red `#E84A2F`, Ink Black `#0F0F0E`, Paper Cream `#ECE6D8`, Riso Blue `#1B4079`, Riso Yellow `#E8B547`, Ink Soft `#3A3835`, Riso Green `#3D7A4D`, Stamp Violet `#5B3A8A`, Press Ochre `#A86A2D`, Mist Grey `#9C988B` — each carries a Pantone, CMYK, and RGB value in the readout.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headlines / body serif | Fraunces (variable) | 300–900, italic axis, `opsz` 9–144 | Oversized italic-heavy display use on cover, section titles, project titles; also runs body copy at low `opsz` |
| Mono / labels | JetBrains Mono | 400, 500, 700 | All-caps eyebrow labels, running head, folios, metadata, captions, one of the three specimen samples |

## Interaction & motion

- Cover name animates in with a kinetic per-letter drop/rotate keyframe on load, followed by a drawing rule and staggered fade-ins.
- Custom hidden cursor (fine-pointer only) with a canvas-based dual-dot risograph trail (offset red + blue dots per mousemove, simulating print misregistration); cursor enlarges/reddens on hover, shrinks on drag. Falls back to a normal cursor and hides canvas/trail on touch (`pointer:coarse`).
- Project spreads cross-fade and slide horizontally based on distance from viewport center, computed on scroll via `requestAnimationFrame` (no IntersectionObserver).
- Each project's SVG logo builds/draws (stroke-dashoffset animation) when scrolled into view, via IntersectionObserver toggling an `is-in` class.
- Type specimen cards are draggable via Pointer Events, pinch-to-resize with two pointers, and wheel-zoomable; scale clamped 0.4–2.6.
- Specimen "download" buttons generate a placeholder PDF as a client-side Blob and trigger a browser download — no real files or server needed, works offline.
- Palette section is a horizontal film-strip carousel (drag or trackpad-scroll to scrub) with a live metadata readout; auto-scrubs a few frames on first appearance, then stops.
- Lecture videos: clicking play swaps a thumbnail image for a real `<video>` element pointing at external Google sample-bucket MP4s (BigBuckBunny, ElephantsDream, ForBiggerBlazes) — requires network access to that external host to actually play.
- A fixed side folio shows a page number that updates based on which section/project is centered in the viewport, via a hardcoded `pageMap`.
- `prefers-reduced-motion` disables the kinetic letter animation, spread cross-fade, and logo draw animations.

## Best suited for

- A solo graphic/type designer presenting a small number (four to six) of named client case studies as long-form editorial write-ups
- Designers whose work spans identity systems, custom typefaces, packaging, and posters and who want a bold, print-inspired (risograph/zine) visual identity
- Designers who also lecture/speak and want an embedded talk archive
- Clients wanting a playful, high-contrast, warm-toned aesthetic rather than a somber or corporate one

## Not a good fit for

- Multi-person studios or agencies — all copy is written in first-person singular ("I")
- Portfolios with more than roughly five to seven projects, since the Contents list, folio page-map, and hardcoded SVG logos all need manual updates per project
- Brands wanting a dark, formal, or minimal-color aesthetic — this build is intentionally bright, cream-toned, and loud

## Notes for agents

- Five project spreads and their SVG logo marks are fully hardcoded (Meridian Press, Halcyon, Kassia Records, The Long Now, Forme & Press); adding/removing a project means updating the article markup, its SVG, the Contents list, and the `pageMap` object together.
- The hidden custom cursor and dot trail only run on fine-pointer (mouse/trackpad) devices; touch devices get a normal cursor and no canvas trail.
- Specimen PDF "downloads" are placeholder Blobs generated in JS, not real files.
- Lecture video sources are external Google sample-bucket demo MP4s — swap for real hosted video before shipping.
- The in-page Palette section's 10 swatches (with Pantone/CMYK/RGB) live in a JS array, separate from the page's own `:root` CSS design tokens listed above.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
