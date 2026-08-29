# NORTHBOUND — Guided Alpine Treks, Since 2011

> A plain, information-first page for a guided alpine trekking company, built around named routes and prices.

| Field | Value |
| --- | --- |
| **Name** | NORTHBOUND — Guided Alpine Treks, Since 2011 |
| **Slug** | northbound |
| **Category** | adventure_travel |
| **Framework** | static |
| **Path** | `websites/static/adventure_travel/northbound/` |
| **Entry** | `index.html` — self-contained single file, inline CSS, Google Fonts via CDN |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated (prompt reconstructed) |

## Style tags

`information-first` `light-neutral` `no-motion` `price-led` `single-column` `system-sans` `low-density` `practical-tone`

## Summary

A deliberately unshowy page for a trekking operator: routes with durations and prices, guide
credentials stated numerically, and an explicit gear list. There is no script tag at all. The
only template in this category so far, and the plainest on the shelf.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Nav | — | Four inline anchor links |
| 2 | Hero | `#hero` | One-line positioning statement plus a qualifier |
| 3 | Routes | `#routes` | Named routes with duration and price |
| 4 | Guides | `#guides` | Certification count and average seasons |
| 5 | Gear list | `#gear` | What is included, what is not |
| 6 | Book | `#book` | When deposits open |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--snow` | `#F7F7F4` | Page background |
| `--stone` | `#3E4A47` | Body and heading text |
| `--moss` | `#6B7F5C` | Secondary accent |
| `--rope` | `#C46B3D` | Prices |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| All | Inter | 400/600 | Single family; fluid `clamp()` display size on the h1 |

## Interaction & motion

- None. No inline or external script, no transitions, no scroll effects. Works fully offline
  apart from the Google Fonts request.

## Best suited for

- A guided tour or expedition operator publishing fixed itineraries and prices
- Any service business whose customers compare options on duration and cost
- A brand that wants credibility over polish

## Not a good fit for

- Anything needing a rich animated brand experience — there is no motion layer to build on
- Image-led travel marketing; this template shows no photography at all
- Long-form editorial content

## Notes for agents

- **This is a Phase 8 test fixture, not a real template.** It validates the bare-HTML ingest
  path and is flagged for deletion.
- It arrived as HTML with **no prompt**. The `p.md` was written from the markup and is marked
  reconstructed at the top — it describes the result, not anyone's intent, so it cannot be
  used to corroborate this template's category.
- Agents may open `index.html` directly for finer detail than this file covers.
