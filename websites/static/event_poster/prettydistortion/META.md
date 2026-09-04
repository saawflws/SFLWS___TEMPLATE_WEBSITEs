# PRETTY DISTORTION — Event Poster

> A single-screen, fixed-canvas digital gig flyer for a nightlife/electronic event: a chrome melting title, a keyed-out performer cut-out, and grain — driven by one editable DATA object.

| Field | Value |
| --- | --- |
| **Name** | PRETTY DISTORTION — Event Poster |
| **Slug** | prettydistortion |
| **Category** | event_poster |
| **Framework** | static |
| **Path** | `websites/static/event_poster/prettydistortion/` |
| **Entry** | `index.html` — self-contained single file; inline CSS + JS. External: Google Fonts, GSAP (cdnjs); the performer photo hotlinks Unsplash (with a built-in fallback image chain). |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`fixed-canvas-poster` `single-screen-non-scrolling` `chrome-melting-title` `grain-print-texture` `canvas-photo-keying` `data-driven-content` `nightlife-rave-flyer` `mouse-parallax`

## Summary

Not a conventional website — a **digital event poster**. The whole page is one fixed 1200×1600 "stage" that auto-scales to fit the viewport (the page itself never scrolls), rendered like a printed rave flyer: a warm off-white poster floating on a dark radial ground, framed by black bars, under a heavy grain multiply overlay. The centrepiece is a chrome, liquid-metal "melting" title (an SVG `feDisplacementMap` filter over Pirata One blackletter) with twinkling sparkles, above a performer photo whose background is keyed out to alpha on a canvas. Dense absolutely-positioned flyer typography carries the date, headliner, support acts, venue, time, ticket link and a sponsor row. Every string is driven by a single `DATA` object at the top of the script — "edit once, updates everywhere".

## Sections

The poster is a single fixed composition (no scroll, no anchors). Its labelled blocks:

| # | Block | Contents |
| --- | --- | --- |
| 1 | Frame | Black top/bottom bars, grain overlay, radial dark backdrop |
| 2 | Header | Promoter wordmark ("SOSHALS"), central venue badge (RAASTA/Nagpur), "party update" mark |
| 3 | Body copy | Two justified paragraphs — artist bio and event concept |
| 4 | Title | Melting chrome "PRETTY DISTORTION" (SVG displacement filter) with animated sparkles |
| 5 | Figure | Keyed-out performer photo (canvas alpha cut-out) as the hero image |
| 6 | Info blocks | Date, "featuring" headliner, "also featuring" support, venue + reservations, time, ticket provider, age/number mark |
| 7 | Sponsors | Bottom row of agency / entertainment-partner logos |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| Stage | `#e6e6e4` | Poster canvas (warm off-white) |
| Backdrop | `radial #141414 → #000` | Dark ground behind the poster |
| Frame bars | `#050505` | Solid black top/bottom bars |
| Ink | `#0a0a0a` | All poster type |
| Accent | `#d4241f` | Red mark (logo dot, venue badge, "neon" tube) |
| Title | chrome gradient `#fbfbfb → #41464c → #eef1f3 → #8b9299` | Metallic melting title fill |
| Muted | `#a2a2a2` / `#7c7c7c` | Body paragraph / sub-label greys |

There are no CSS custom properties — values are literal, matching a one-off poster rather than a themeable site.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Title | Pirata One | 400 | Blackletter, used for the melting chrome title (and loader) |
| Headliner | Metal Mania | 400 | Grunge display for the featured act name |
| Blocks | Archivo Black | 400 | Logos, dates, venue, sponsors, blocky labels |
| Body | Inter | 400–800 | Justified paragraphs, small labels |

## Interaction & motion

- The 1200×1600 stage auto-scales (`transform: scale`) to fit the viewport on load and resize; the document itself has `overflow:hidden` and does not scroll.
- All text content is injected from a single `DATA` object (date, times, artists, venue, paragraphs, model image list) — the intended edit point.
- GSAP entrance timeline: frame bars drop in, header staggers, the title springs in with elastic easing, info blocks and sponsors slide/stagger; the title then gently floats in a yoyo loop.
- Subtle mouse-parallax on `data-depth` layers.
- The performer photo is drawn to an offscreen canvas and its background is keyed to alpha by sampling the corners (`getImageData`); if the image is cross-origin tainted it falls back to `mix-blend-mode: multiply`, and there is a fallback image chain on load error.
- A blackletter loader covers the page until fonts are ready, then fades.

## Best suited for

- A one-off promotional poster for a nightclub night, DJ set, gig, rave, festival stage or party — a shareable digital flyer.
- Event promoters and entertainment/artist agencies who want a striking single-screen announcement rather than a full event site.
- Music, fashion or nightlife brands wanting a chrome/grain, "beautifully chaotic" aesthetic.

## Not a good fit for

- Anything that needs multiple pages, scrolling content, real ticketing/checkout, a schedule or a lineup grid — it is a single fixed poster with an external ticket link only.
- Responsive text-reflow layouts — the poster is a fixed-aspect canvas that scales as a whole; it does not reflow, and very small screens simply shrink the entire poster.
- Clients needing the page usable with JavaScript/GSAP blocked — the loader is hidden by GSAP on load, so a failed GSAP load can leave the loader covering the poster.

## Notes for agents

- This is the first template in the `event_poster` category — a **fixed-canvas digital poster/flyer**, structurally unlike the scrolling site templates elsewhere on the shelf. Treat "sections" as poster regions, not scroll anchors.
- Content is placeholder event detail (a specific venue/date/lineup). Everything is meant to be changed in the single `DATA` object near the top of the inline script; colours and the melting-title text live in the CSS/SVG.
- The performer photo depends on a CORS-clean image for the in-canvas keying to work cleanly; otherwise it degrades to a multiply blend. Swap the Unsplash URLs for owned assets.
- No membership/forms/backend. Agents may open `index.html` directly for the exact stage coordinates, the DATA object and the SVG filter definitions.
