# VANGUARD — Creative Agency Hero

> A single-screen, black-and-white brand-studio landing: a muted video background under a sharp PODIUM display headline ("Design. Disrupt. Conquer."), agency stats, and a full-screen mobile menu.

| Field | Value |
| --- | --- |
| **Name** | VANGUARD — Creative Agency Hero |
| **Slug** | vanguard |
| **Category** | creative_agency |
| **Framework** | react |
| **Path** | `websites/react/creative_agency/vanguard/` |
| **Entry** | `index.html` → `src/main.jsx` → `src/App.tsx`. A Vite project with a build step, not a single file. |
| **Stack** | npm · Vite 8 · React 19 · Tailwind CSS v4 (`@tailwindcss/postcss` + PostCSS + Autoprefixer, `tailwind.config.js`) · `lucide-react` icons · Oxlint. Root component is `.tsx` (TypeScript) but there is no `tsconfig`/`typescript` dep — Vite/esbuild transpiles it. |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the source |
| **Origin** | AI-generated |

## Style tags

`fullscreen-video-hero` `monochrome-black-white` `podium-sharp-display` `single-hero-landing` `fade-up-entrance` `agency-stat-row` `fullscreen-mobile-menu` `brand-studio`

## Summary

A one-screen React landing hero for a creative / brand-design studio ("VANGUARD — World-Class Digital Collective"). A muted looping video fills the background; over it sit a minimal nav, an oversized uppercase headline set in the sharp **PODIUM Sharp** display face ("Design. Disrupt. Conquer."), a short positioning line about building brand identities, a black "See Our Work" CTA with a "Top-Rated Brand Studio" award badge, and a three-figure credibility stat row (250+ brands, 95% retention, 10+ years). It is strictly monochrome — black and white with opacity — and animates in with staggered fade-ups. Where `cinematic` (its react sibling) is a content-showcase carousel, this is a single-statement agency splash.

## Sections

The page is one hero screen plus an overlay menu (minimal scrolling):

| # | Region | Contents |
| --- | --- | --- |
| 1 | Background | Fixed muted autoplay/loop video covering the viewport (`-z-10`) |
| 2 | Nav | VANGUARD wordmark, desktop links (Projects, Studio, Offerings, Inquire), "Get in touch" button, mobile hamburger |
| 3 | Mobile menu | Full-screen black overlay with staggered large nav links and a contact CTA |
| 4 | Hero | Crown eyebrow ("World-Class Digital Collective"), "Design. Disrupt. Conquer." headline, positioning line, "See Our Work" CTA + award badge, and a stats row |

## Palette

Monochrome; body base set in `src/index.css` (`@apply bg-black text-white`), everything else Tailwind white-with-opacity utilities. No accent colour and no theme token file — only fonts are themed.

| Token | Value | Role |
| --- | --- | --- |
| Background | `black` | Page background (behind video) |
| Text | `white` | Primary text |
| Muted text | `white/50`–`white/80` | Eyebrow, nav, stats labels, body |
| CTA | `bg-black` (→ `neutral-900` hover) | "See Our Work" button |
| Borders | `white/30`–`white/60` | Outlined "Get in touch" button, menu |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | FSP DEMO — PODIUM Sharp 4.11 | bold | Wordmark, headline, menu links; loaded from `db.onlinewebfonts.com` in `index.html`, themed as `--font-podium` / Tailwind `font-podium` |
| Body | Inter | 400–700 | Eyebrow, nav, body copy, stats; Google Fonts |

Icons via `lucide-react` (Crown, Award, ArrowUpRight, X).

## Interaction & motion

- Muted autoplay/loop background video (`playsInline`).
- Staggered `fade-up` entrance keyframes (`animate-fade-up`, `-delay-1..4`) across eyebrow, headline, copy, CTAs and stats.
- Full-screen mobile menu toggled from React state, with per-link staggered translate/opacity transitions and a matching close.
- Hover states on nav links and buttons; `scroll-behavior: smooth`. No routing; content is a single hero (anchors point at sections that do not exist yet, so it is a splash/landing shell to extend).

## Best suited for

- A creative, branding, design or digital agency / studio that wants a bold single-statement splash landing.
- Any brand wanting an oversized-type, monochrome, video-backed hero with credibility stats.
- A starting shell to extend with Projects / Studio / Offerings / Inquire sections (the nav already anticipates them).

## Not a good fit for

- Multi-section or content-heavy sites out of the box — this is a single hero; the nav links are placeholders for sections not yet built.
- Colourful or soft brands — it is committed to stark black-and-white with a sharp display face.
- Clients who cannot load the PODIUM display font from a third-party web-font host, or the hard-coded background video.

## Notes for agents

- Install/dev: `npm install`, then `npm run dev` (Vite). Build: `npm run build`; preview: `npm run preview`. Lint: `npm run lint` (Oxlint).
- The root component is `src/App.tsx` (imported by `main.jsx`). **`src/App.jsx` is an unused Vite-starter leftover** — do not edit it expecting changes; also `src/App.css` and `src/assets/{react,vite}.svg`, `hero.png` are unused. Safe to delete when adapting.
- The background video is a hard-coded CloudFront URL and the PODIUM display font loads from `db.onlinewebfonts.com` — swap both for owned assets/licensed fonts before shipping.
- Monochrome by design — there is no accent colour to theme; introduce one via Tailwind if the brand needs it. No backend, no forms. Agents may open `src/App.tsx` for exact markup and animation delays.
