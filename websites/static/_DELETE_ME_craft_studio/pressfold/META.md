# PRESSFOLD — An Independent Bindery

> A quiet, serif-led page for a two-person bookbindery taking short-run commissions.

| Field | Value |
| --- | --- |
| **Name** | PRESSFOLD — An Independent Bindery |
| **Slug** | pressfold |
| **Category** | craft_studio |
| **Framework** | static |
| **Path** | `websites/static/craft_studio/pressfold/` |
| **Entry** | `index.html` + `styles/main.css` + `scripts/app.js` — multi-file, all paths relative |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated (prompt reconstructed) |

## Style tags

`bookish-serif` `linen-and-thread` `multi-file` `system-serif-no-webfont` `low-density` `animated-counter` `small-studio` `warm-neutral`

## Summary

A four-section page for a bindery: what they make, how much they have made, and how to
commission. Set entirely in a system serif with no webfont request. The only multi-file
template on the shelf — its CSS and JS are separate files rather than inlined.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Nav | — | Three inline anchor links |
| 2 | Hero | `#hero` | Declarative headline plus a lede describing the studio |
| 3 | Recent work | `#work` | The kinds of binding they take on |
| 4 | Process | `#process` | An animated counter of signatures folded this year |
| 5 | Quotes | `#quotes` | How to request one, and the response time |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--linen` | `#EFE9DF` | Page background |
| `--ink` | `#20201E` | Body text |
| `--thread` | `#8C5A3C` | Headings and links |
| `--sage` | `#7A8A72` | Lede text |

Declared in `styles/main.css`, not in the HTML.

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| All | Georgia, Times New Roman | default | System serif stack; **no webfont request at all** |

## Interaction & motion

- The `#process` counter eases from 0 to 4,820 on load via `requestAnimationFrame`, driven by
  `scripts/app.js`. It is the only motion on the page and needs no network.

## Best suited for

- A small maker or workshop taking commissions rather than selling stock
- A studio whose credibility rests on craft and volume, not imagery
- Anyone wanting a page that renders instantly with no webfont flash

## Not a good fit for

- Image-led portfolios — the template shows no photography
- Brands needing a distinctive typographic identity; it deliberately uses system fonts
- Anything requiring a dark theme

## Notes for agents

- **This is a Phase 8 test fixture, not a real template.** It validates the multi-file ingest
  path and is flagged for deletion.
- **Multi-file.** Copying `index.html` alone gets you an unstyled page with a broken counter.
  Take the whole folder — `styles/` and `scripts/` are referenced by relative path.
- It arrived with **no prompt**; the `p.md` was written from the markup and marked
  reconstructed.
- Agents may open the source directly for finer detail than this file covers.
