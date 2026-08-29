# KILBURN — Tech Reviews Without the Marketing Filter

> A high-production, video-first home page for a solo tech YouTuber who pairs every video with a deep-dive written review and a buying guide.

| Field | Value |
| --- | --- |
| **Name** | KILBURN — Tech Reviews Without the Marketing Filter |
| **Slug** | killburn |
| **Category** | techYouTubers_home |
| **Framework** | static |
| **Path** | `websites/static/techYouTubers_home/killburn/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Tailwind CDN runtime, Font Awesome + Google Fonts via CDN |
| **Prompt** | `p.md` — original generation prompt |

## Style tags

`video-first-layout` `dark-signal-red-yellow-blue` `hover-preview-cards` `scroll-driven-accent-shift` `heavy-display-grotesque` `film-grain-overlay` `sticky-video-companion` `price-slider-filtering` `opinionated-editorial-voice`

## Summary

A black-background, signal-red/electric-blue/neon-yellow home page for a single named tech reviewer, built around six numbered content sections: a video library with filterable hover-preview cards, a written review with a sticky video player alongside scrolling article text, a price-filterable "what I'd buy" recommendation grid, a newsletter block, a Patreon/behind-the-scenes teaser, and an about/studio section. Its signature mechanic is a dynamic `--section-accent` CSS custom property that smoothly retints live-dot indicators, underlines, and borders between red, blue, and yellow as the user scrolls past different `data-accent`-tagged sections.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Header / Nav | — | Fixed logo mark, numbered nav links to sections 01–04, search icon, Subscribe CTA |
| 2 | Hero | — | Cinematic 16:9 latest-episode frame with hover pan/scan-line effect, live viewer/subscriber stats, 4-cell stats strip |
| 3 | Marquee | — | Looping horizontal ticker of brand taglines ("HONEST TAKES", "NO SPONSOR FILTERS", etc.) |
| 4 | Video Library | `#library` | Eyebrow "/ 01 — The Library"; sort buttons, category filter chips, JS-rendered video grid (12 of 412), load-more control |
| 5 | Written Review | `#reviews` | Eyebrow "/ 02 — Written Companion"; sticky video player + chapter list on the left, full long-form article with drop cap, pull-quotes, and measurement-note callout on the right |
| 6 | Recommendations | `#recommendations` | Eyebrow "/ 03 — What I'd Buy"; dual-handle price-range sliders, category filter buttons, JS-rendered product grid with live re-sort/re-filter |
| 7 | Newsletter | `#newsletter` | Eyebrow "/ 04 — Direct Line"; typewriter-placeholder email signup form, subscriber/issue/read-time stats |
| 8 | Patreon / Behind The Curtain | — | Eyebrow "/ 05 — Behind The Curtain"; Patreon pitch copy and CTA, grayscale-to-color studio photo grid |
| 9 | About / Studio | `#about` | Eyebrow "/ 06 — About"; host portrait and stats, bio copy, numbered "Operating Principles" list |
| 10 | Footer | — | Brand block with social icons, three link columns (Content / Studio / Support), legal line, "all systems operational" status |

## Palette

| Token | Hex / Value | Role |
| --- | --- | --- |
| `--bg` | `#080808` | Page background |
| `--bg-elevated` | `#111111` | Elevated surfaces (video player shell, rec cards) |
| `--fg` | `#f5f5f5` | Primary text |
| `--fg-dim` | `#888888` | Secondary/muted text |
| `--fg-mute` | `#555555` | Tertiary text, placeholders |
| `--accent` | `#ff2a2a` | Signal red — primary accent, CTAs, live indicators |
| `--yellow` | `#e5ff00` | Neon yellow — recommendations section accent, price slider thumb |
| `--blue` | `#2b6fff` | Electric blue — secondary section accent |
| `--border` | `rgba(255,255,255,0.08)` | Hairline dividers |
| `--border-strong` | `rgba(255,255,255,0.18)` | Stronger borders (buttons, back-to-top) |
| `--section-accent` | `#ff2a2a` (dynamic) | Registered animatable custom property; JS retargets it to red/blue/yellow per `data-accent` section in view, driving scrollbar thumb, live dots, headings, section labels |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display / headings | Bricolage Grotesque (variable) | 300–800, `opsz` 12–96 | Heavy (800) display use, tight negative letter-spacing, `font-display` utility class; used for hero headline, section titles, stat numbers |
| Body | Space Grotesk | 300–700 | Default body font site-wide |
| Mono / labels | JetBrains Mono | 400, 700 | `font-mono` utility class; eyebrows, timestamps, chip counts, video metadata, price labels |

## Interaction & motion

- `--section-accent` is a registered CSS custom property (`@property`, `syntax: '<color>'`) that transitions over 0.7s; an IntersectionObserver watches all `[data-accent]` sections and retargets the property to red/blue/yellow as the user scrolls, per the brief's "scroll-driven brand color shifts at section breaks."
- Constant animated film-grain overlay (inline SVG `feTurbulence` data-URI, stepped keyframe animation) across the whole page.
- Hero "cinematic frame" pans/zooms the thumbnail on hover (Ken Burns effect) and reveals a moving scan-line overlay plus a "PREVIEWING" indicator.
- Video library cards: hovering pans/brightens the thumbnail, reveals a blinking red "PREVIEWING" tag and a 4-second simulated progress bar — this is a purely CSS/JS visual simulation; no real video asset or muted `<video>` preview is loaded.
- Filter chips re-render the video grid from a JS array with a staggered (35ms) "shuffle-in" entrance animation per card.
- Written review section pins the video player column (`position: sticky`) while the article scrolls; chapter list items are clickable but only toggle an "active" visual state — there is no real seekable video.
- Recommendations use two native range-input handles to filter a JS product array by price and re-sort the DOM, animated with the FLIP technique (capture start position, reflow, animate the transform delta) rather than a layout-only transition.
- Newsletter email field has a typewriter effect cycling through five placeholder strings (typed and deleted character-by-character), pausing while focused or filled; form submit is intercepted client-side and shows a fake "SUBSCRIBED" status message — no network request is made.
- Scroll progress bar fills across the top of the viewport based on scroll percentage; a "back to top" button fades in past 800px of scroll.
- Marquee ticker loops an infinite CSS `translateX` animation of tagline text.
- `prefers-reduced-motion` collapses all animation/transition durations to near-zero and hides the grain overlay.

## Best suited for

- A solo (or small-team) tech reviewer/YouTuber publishing both video content and long-form written companion reviews under one host persona
- Creators who want a price-filterable "gear I'd actually buy" affiliate/recommendation section
- Creators running a newsletter and a Patreon/membership tier alongside their channel
- Brands wanting a dark, high-contrast, neon-accented, unapologetically opinionated review-site aesthetic rather than a soft/corporate one

## Not a good fit for

- Multi-host channels, networks, or general entertainment creators — copy and structure are built around one named reviewer ("Marcus Kilburn") in a single tech-review niche
- Non-video creators (podcasters, writers, musicians), since the hero, video grid, and sticky-player patterns all assume video is the primary content format
- Anyone needing genuinely playable embedded video out of the box — every "video" on the page is a static placeholder image with a simulated hover-preview/play interaction; no real video files or player are wired up

## Notes for agents

- Naming discrepancy: the folder slug is `killburn` (two Ls), but the shipped brand and page title are "KILBURN" (one L) throughout the markup — `<title>`, header/footer logo, and the host name "Marcus Kilburn." Preserve the one-L brand spelling in cloned content even though the directory uses the two-L slug.
- The six primary content sections carry numbered eyebrow labels directly in the markup: `/ 01 — The Library` (`#library`), `/ 02 — Written Companion` (`#reviews`), `/ 03 — What I'd Buy` (`#recommendations`), `/ 04 — Direct Line` (`#newsletter`), `/ 05 — Behind The Curtain` (no `id`), `/ 06 — About` (`#about`).
- All thumbnails, product photos, and portraits are `picsum.photos` seeded placeholder images — swap for real photography/screenshots before shipping.
- Video grid and product grid are both rendered client-side from hardcoded JS arrays (`videos`, `products`); adding real content means editing those arrays, not the HTML.
- Newsletter subscribe and the video "Load 12 More" button are both non-functional stubs (client-side only, no backend integration).
- Depends on the Tailwind CDN runtime (`cdn.tailwindcss.com`) plus a large hand-written `<style>` block for effects Tailwind doesn't cover (grain, scan-line, marquee, custom range-slider thumb, the registered `--section-accent` property) — both utility classes and the bespoke CSS are required together.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
