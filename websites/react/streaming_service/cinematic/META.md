# CINEMATIC — Streaming Service Hero

> A single-viewport, black-and-glass streaming/movie-showcase landing: a muted autoplay video hero with a rotating IMDB-rated title carousel and search, profile, trailer and detail modals.

| Field | Value |
| --- | --- |
| **Name** | CINEMATIC — Streaming Service Hero |
| **Slug** | cinematic |
| **Category** | streaming_service |
| **Framework** | react |
| **Path** | `websites/react/streaming_service/cinematic/` |
| **Entry** | `index.html` → `src/main.jsx` → `src/App.jsx`. A Vite project with a build step, not a single file. |
| **Stack** | npm · Vite 8 · React 19 · Tailwind CSS v4 (`@tailwindcss/vite`) · `lucide-react` icons · Oxlint. JSX (no TypeScript). |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the source |
| **Origin** | AI-generated |

## Style tags

`fullscreen-video-hero` `liquid-glass-ui` `imdb-title-carousel` `blur-fade-up-entrance` `black-and-white-monochrome` `modal-heavy` `single-viewport-no-scroll` `ott-streaming`

## Summary

A React single-page hero for a movie/TV streaming service in the Netflix/Prime mould. The whole experience is one non-scrolling viewport: a muted, looping background video with a bottom blur mask, over which a rotating carousel of three IMDB-rated titles (rating, runtime, release, synopsis) is presented with Watch Now / Learn More CTAs and prev/next controls. The UI language is a custom "liquid glass" — near-transparent white panels with an inset gradient border — and entrances use a signature blur-fade-up. It is heavy on overlays: a catalog search modal with trending tags, a user-profile modal ("Premium Cinema Member"), a trailer modal (YouTube embed) and a title-detail modal. Monochrome (black + white + glass) with Inter type; nav is Movies / TV Series / Editor's Pick / Interviews / User Reviews.

## Sections

The page is a single hero screen plus overlays (no scrolling):

| # | Region | Contents |
| --- | --- | --- |
| 1 | Background | Fixed muted autoplay/loop video with a bottom `backdrop-blur` mask; a floating mute/unmute toggle |
| 2 | Navbar | CINEMATIC wordmark, desktop nav links, glass Search + Profile buttons, mobile hamburger |
| 3 | Mobile menu | Slide-down dropdown of nav links + search/profile actions |
| 4 | Hero content | Rotating title carousel: metadata row (IMDB / runtime / date), title, synopsis, Watch Now + Learn More, prev/next arrows |
| 5 | Search modal | Catalog search field with "trending searches" tag chips |
| 6 | Profile modal | Avatar, membership tier, watchlist / settings / streaming-quality items |
| 7 | Trailer modal | Full-width YouTube (`youtube-nocookie`) embed |
| 8 | Learn More modal | Title synopsis plus a rating / duration / release / format detail grid |

## Palette

Monochrome, defined in `src/index.css` base layer and Tailwind utilities on the components (no theme token file):

| Token | Value | Role |
| --- | --- | --- |
| Background | `#000000` | Page background (behind the video) |
| Text | `#ffffff` | Primary text |
| Muted text | Tailwind `gray-300`/`gray-400`/`gray-500` | Secondary copy |
| Glass surface | `rgba(255,255,255,0.01)` + inset white gradient border | `.liquid-glass` UI panels/buttons |
| Profile avatar | `linear-gradient(purple-500 → indigo-500)` | The only chromatic accent, on the profile avatar |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| All text | Inter | 300–700 | Loaded from Google Fonts in `index.html`; set as the base body font |

Icons via `lucide-react`.

## Interaction & motion

- Muted autoplay/loop background video (`playsInline`); a mute/unmute toggle controls its audio.
- Title carousel advances via prev/next (wraps around); metadata, title and synopsis re-animate per slide (keyed remount).
- `blur-fade-up` keyframe entrances staggered by inline `animationDelay` across nav, hero and controls.
- Four modal overlays (search, profile, trailer, learn-more) toggled from React state, each with a backdrop blur and close button; mobile menu with animated icon crossfade.
- `.liquid-glass` panels use `backdrop-filter` blur plus a masked inset gradient border. No routing, no scroll — the root is `w-screen h-screen overflow-hidden`.

## Best suited for

- A film/TV streaming or VOD service, a cinema, or a single-title film promo landing.
- Any "featured content" hero where a video background and a rotating showcase carousel are the centrepiece.
- Brands wanting a premium, monochrome, glassmorphism aesthetic.

## Not a good fit for

- Content-rich or multi-page sites — this is a single non-scrolling hero with modal overlays, no real catalog, routing or pages.
- Light or colourful brands — it is committed to a black + white + glass look over full-bleed video.
- Anyone needing it to work offline or without the (hard-coded) background video URL and a YouTube embed.

## Notes for agents

- **Rule 4 note:** the `index.html` `<title>` is "CINEMATIC — Step Through. Work Smarter." — a productivity-sounding tagline that does not match the build. The markup is unambiguously a **movie/TV streaming** showcase (IMDB ratings, TV Series/Interviews nav, Premium Cinema Member, trailers), so it is filed under `streaming_service`; the tagline is placeholder drift.
- Install/dev: `npm install`, then `npm run dev` (Vite). Build: `npm run build`; preview: `npm run preview`. Lint: `npm run lint` (Oxlint).
- The background video is a hard-coded CloudFront URL and the trailer is a YouTube embed — both require network and should be swapped for owned media. Movie data is a 3-item `SLIDES` array in `App.jsx`.
- `src/App.css` and `src/assets/{react,vite}.svg`, `hero.png` are unused Vite-starter leftovers — `main.jsx` imports only `index.css`, and `App.jsx` uses Tailwind. Safe to delete when adapting.
- No TypeScript, no router, no backend; forms/search are front-end only. Agents may open `src/App.jsx` for exact markup and animation timings.
