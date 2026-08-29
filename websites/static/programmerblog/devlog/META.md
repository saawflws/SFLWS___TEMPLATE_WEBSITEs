# /dev/log — Notes from a Programmer's Desk

> A terminal-flavored personal programmer blog with a real typewriter hero, live GitHub stats, and a 3-state (dark/light/cyber) theme toggle.

| Field | Value |
| --- | --- |
| **Name** | /dev/log — Notes from a Programmer's Desk |
| **Slug** | devlog |
| **Category** | programmerblog |
| **Framework** | static |
| **Path** | `websites/static/programmerblog/devlog/` |
| **Entry** | `index.html` — self-contained, inline CSS + JS, Tailwind CDN, Google Fonts + Font Awesome via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — original generation prompt |
| **Origin** | AI-generated from `p.md` |

## Style tags

`terminal-hacker` `monospace-heavy` `three-state-theme-toggle` `amber-dark-default` `neon-cyberpunk-alt` `code-snippet-showcase` `high-density-blog` `moderate-motion`

## Summary

A single-author developer blog built around a hacker/terminal aesthetic: monospace UI chrome, a `$ ` prompt-style typewriter hero, and a code-snippet section with real syntax-highlighted, copy-to-clipboard React code. Its defining feature is a genuine 3-way theme system (dark, light, and a near-black cyan/magenta "cyber" mode with CRT scanlines) driven entirely by CSS custom properties swapped via a `data-theme` attribute, with a smooth 0.6s cross-fade and a `t`-key keyboard shortcut to cycle themes. It also ships a "live" GitHub star/fork counter that does perform a real `fetch()` on load — but against a hardcoded, unrelated placeholder repo (`tailwindlabs/tailwindcss`) rather than the blog's own, with a graceful offline fallback.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Header/nav | `—` | Logo "/dev/log" with blinking cursor, nav links (notes/snippets/archive/about), live GitHub star/fork stat pill, 3-state theme toggle |
| 2 | Hero | `#hero` | Issue meta tags, typewriter greeting, italic subtitle, author blurb, two CTAs, 4-stat grid (essays/readers/last commit/coffee), scroll cue, drifting blurred background dots + cursor-following glow |
| 3 | Marquee | `—` | Continuously scrolling ticker of technology names (JavaScript, Rust, Go, etc.) |
| 4 | Recent notes | `#notes` | Section heading + "all posts" link, 3 hover-lift article cards (number, tag, date/read-time, title, excerpt, "read essay" arrow) |
| 5 | Snippets | `#snippets` | Sticky description column ("useTypewriter" hook writeup, feature list, tags) beside two syntax-highlighted code windows with traffic-light chrome and copy-to-clipboard buttons |
| 6 | Archive | `#archive` | Intro copy + 6 archive list rows (date, title, excerpt, tag, read time), "browse all 142 essays" link |
| 7 | Subscribe (About) | `#about` | Heading, subhead, email signup form, confirmation toast, 3-column feature list (no spam/tracking/paywall) |
| 8 | Footer | `—` | Copyright line, social icon links (GitHub/Twitter/RSS/email), terminal-style sign-off line |

## Palette

Three complete themes, switched via `data-theme` on `<html>` (`dark` is the default baked into the markup).

### Dark (default)

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#0c0b09` | Page background |
| `--bg-elev` | `#14120e` | Elevated sections (marquee, snippets bg, subscribe bg) |
| `--bg-elev-2` | `#1c1a14` | Further-elevated surfaces |
| `--fg` | `#f0ead6` | Primary text |
| `--fg-dim` | `#c9c1ad` | Secondary text |
| `--muted` | `#8a8275` | Tertiary/label text |
| `--accent` | `#f59e0b` | Primary accent (amber) — links, tags, buttons, progress bar |
| `--accent-2` | `#06b6d4` | Secondary accent (cyan) — stat dot, gradient end |
| `--card` | `#15130e` | Article card background |
| `--code-bg` | `#060503` | Code window background |
| `--border` / `--border-strong` | `rgba(240,234,214,.08)` / `.18` | Hairline dividers / stronger borders |

### Light

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#f3ecdc` | Page background |
| `--bg-elev` | `#faf3e1` | Elevated sections |
| `--bg-elev-2` | `#fffaee` | Further-elevated surfaces |
| `--fg` | `#1a1610` | Primary text |
| `--fg-dim` | `#3d362b` | Secondary text |
| `--muted` | `#6b6358` | Tertiary/label text |
| `--accent` | `#c2410c` | Primary accent (burnt orange) |
| `--accent-2` | `#0e7490` | Secondary accent (teal) |
| `--card` | `#fffaee` | Article card background |
| `--code-bg` | `#1a1610` | Code window background (stays dark for contrast even in light mode) |
| `--border` / `--border-strong` | `rgba(26,22,16,.12)` / `.24` | Hairline / stronger borders |

### Cyber

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#02060a` | Page background (near-black) |
| `--bg-elev` | `#050d10` | Elevated sections |
| `--bg-elev-2` | `#071318` | Further-elevated surfaces |
| `--fg` | `#4eff96` | Primary text (neon green) |
| `--fg-dim` | `#8affb8` | Secondary text |
| `--muted` | `#2a8a5e` | Tertiary/label text |
| `--accent` | `#ffea00` | Primary accent (yellow) |
| `--accent-2` | `#ff10f0` | Secondary accent (magenta) |
| `--card` | `#050d10` | Article card background |
| `--code-bg` | `#000` | Code window background |
| `--border` / `--border-strong` | `rgba(78,255,150,.18)` / `.4` | Hairline / stronger borders — also drives a CRT scanline overlay unique to this theme |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Body / UI default | Space Grotesk | 300–700 | Sans-serif workhorse for paragraphs and layout |
| Display (`.font-display`) | Fraunces | 400, 700, 900 (+ italic 400) | Serif used for section headlines, mixed roman/italic within the same heading for emphasis |
| Monospace (`.font-mono`) | JetBrains Mono | 400, 500, 700 | Used for nav, buttons, tags, code blocks, stat labels, and the typewriter hero — reinforces the terminal identity |
| Icons | Font Awesome 6.4.0 | — | Loaded via cdnjs stylesheet for star/fork/social/UI glyphs |

## Interaction & motion

- Hero headline is a genuine typewriter effect: cycles through 5 strings (including a hex-encoded easter-egg string) with randomized per-character speed, a pause at full length, then a delete-and-advance loop.
- Reading-progress bar fixed at the top of the viewport, width driven by `scrollY / (scrollHeight - innerHeight)` on every scroll event.
- 3-state theme toggle sets `data-theme` on `<html>`, persists the choice to `localStorage`, and adds a temporary `theme-anim` class to `<body>` for a 0.6s cross-fade of colors/borders/shadows; also cyclable via the `t` keyboard shortcut (ignored while focus is in an input/textarea).
- Cyber theme adds a CRT scanline overlay via a `::before` pseudo-element with a repeating linear gradient.
- Mouse-follow radial glow tracks the cursor inside the hero section only; blurred background "float dots" drift continuously via CSS keyframes.
- Article cards and archive rows lift/translate and reveal an accent underline/glow on hover.
- Copy buttons on both code snippets use `navigator.clipboard.writeText` (with a `document.execCommand('copy')` fallback for older browsers), flashing an accent overlay and swapping the label/icon to "copied" for 1.8s.
- Scroll-reveal via `IntersectionObserver` on `.reveal` elements throughout notes/archive/subscribe sections.
- **GitHub star/fork counters — verified against the script:** `loadGitHubStats()` performs a real `fetch()` to `https://api.github.com/repos/tailwindlabs/tailwindcss` (a hardcoded, unrelated placeholder repo, not the blog's own) with a 4-second `AbortController` timeout. On success it animates the counters up from 0 using the real `stargazers_count`/`forks_count` from that response; on any failure (offline, rate-limited, blocked) it silently falls back to hardcoded numbers (82,400 / 4,180) and animates those instead — so the page never visibly errors, but "live" data only actually appears when the API call succeeds and only ever reflects the Tailwind CSS repo until the URL is repointed. A separate `setInterval` every 9s has a 35% chance of incrementing the displayed star count by 1 purely client-side (a fake "live activity" flourish, no further network calls).
- Subscribe form is client-side only: shows a confirmation toast and resets the input; no network request is made.
- `prefers-reduced-motion` disables all animations/transitions site-wide.

## Best suited for

- A solo developer or technical-writer blog wanting a distinctive terminal/IDE visual identity rather than a generic blog layout.
- Writers who want to showcase real, copy-pasteable code (hooks, snippets) as a first-class content type.
- Projects that want a memorable multi-theme reading mode (including a cyberpunk/hacker alt-theme) beyond plain light/dark.
- Sites that want to display GitHub social proof for an associated open-source project once the stats endpoint is repointed.

## Not a good fit for

- Non-technical, lifestyle, or business blogs — the monospace/terminal aesthetic and code-snippet section assume a programming audience.
- Anyone expecting the star/fork counter to reflect their own repository out of the box — it is hardcoded to a placeholder repo and must be edited before ship.
- Fully offline or sandboxed deployments where the "live" framing matters — the GitHub fetch will always fail there and silently show fallback numbers instead.

## Notes for agents

- `p.md` promises "live GitHub star/fork counters" — **confirmed true but incomplete**: the script does make a genuine `fetch()` to the GitHub REST API on page load (not a static display), but the URL is hardcoded to `tailwindlabs/tailwindcss` rather than a placeholder for the site owner's own repo. Repoint the URL inside `loadGitHubStats()` before reuse. It degrades silently to fixed fallback numbers when offline/rate-limited, so the page works fine with no network but is then not actually "live."
- Theme state lives in the `data-theme` attribute on `<html>` (hardcoded to `dark` in the markup, then immediately overridden from `localStorage` on load, if present) — any new section added to this template should be styled against the shared CSS custom properties, not hardcoded colors, or it will break in the light/cyber themes.
- Uses the Tailwind Play CDN `<script>` for layout utility classes alongside a large hand-written `<style>` block for effects/components — a mixed utility-plus-custom-CSS approach, not pure Tailwind.
- All content is hardcoded placeholder copy and numbers (142 essays, 8.2k readers, archive dates/titles, snippet code) with dead `href="#"` links throughout — there is no CMS or data wiring to swap out.
- 8 sections total including header and footer; copy is short/punchy blog-teaser style (headlines and excerpts), not long-form prose.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup, animation timings, and responsive breakpoints are not summarised here.
