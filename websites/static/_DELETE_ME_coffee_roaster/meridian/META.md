# MERIDIAN — Small-Batch Coffee Roasters, est. 2014

> A warm, paper-toned landing page for a neighbourhood coffee roaster selling rotating single origins and subscriptions.

| Field | Value |
| --- | --- |
| **Name** | MERIDIAN — Small-Batch Coffee Roasters, est. 2014 |
| **Slug** | meridian |
| **Category** | coffee_roaster |
| **Framework** | static |
| **Path** | `websites/static/coffee_roaster/meridian/` |
| **Entry** | `index.html` — self-contained, inline CSS, Google Fonts via CDN |
| **Prompt** | `p.md` — original generation prompt |

## Style tags

`warm-paper` `serif-display-sans-body` `low-density` `retail-product-listing` `neighbourhood-scale` `no-motion` `crema-and-bean-palette`

## Summary

A single-column landing page for a small roastery, built around a rotating origins list with
prices, a subscription pitch, and a physical cafe address. The only template in this category
so far. Deliberately static — no scroll animation, no carousel, no JavaScript at all.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Nav | — | Four inline anchor links |
| 2 | Hero | `#hero` | Headline plus a one-line provenance statement |
| 3 | Origins | `#origins` | This month's coffees with process notes and prices |
| 4 | Subscriptions | `#subscribe` | Cadence options and cancellation terms |
| 5 | Brewing guides | `#brewing` | V60, Aeropress, espresso dial-in |
| 6 | The cafe | `#cafe` | Street address and opening hours |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--bean` | `#2B1810` | Headline text, darkest brown |
| `--crema` | `#C8956C` | Price and accent tan |
| `--paper` | `#FBF7F0` | Page background |
| `--ink` | `#1A1310` | Body text |
| `--sage` | `#7D8471` | Secondary accent (declared, lightly used) |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Fraunces | 400–700 | Optical-size serif, used for h1/h2 |
| Body | Inter | 300/400/600 | Neutral grotesque |

## Interaction & motion

- None. No inline `<script>`, no transitions, no scroll effects. The page is pure markup
  and CSS and works fully offline apart from the Google Fonts request.

## Best suited for

- A single-location coffee roaster selling bags direct
- A small food producer with a rotating seasonal product list
- Any retail brand needing prices visible on the landing page
- A business whose main call to action is a subscription

## Not a good fit for

- Brands needing a rich, animated brand experience — there is no motion layer to build on
- Sites with a large catalogue; the origins list is hand-written markup, not a grid
- Anything requiring a dark theme

## Notes for agents

- **This is a Phase 7 test fixture, not a real template.** It exists to validate the
  `ingest-template` flow and is flagged for deletion.
- Its `p.md` describes a **gym** — dark, aggressive, neon orange, coach profiles, trial-class
  booking. The markup is unambiguously a coffee roaster. Per Rule 4 it was cataloged from the
  markup, and the disagreement is recorded here rather than resolved silently.
- Agents may open `index.html` directly for finer detail than this file covers — exact markup,
  animation timings, and responsive breakpoints are not summarised here.
