---
id: showcase
title: The showcase site
area: architecture
updated: 2026-08-29T15:00:00Z
summary: The GitHub Pages front end — static thumbnails, a CSS hover pan, and no live iframes.
related: [data-pipeline, data-js, thumbnails]
---

# The showcase site

Root `index.html` plus `assets/`, served by GitHub Pages at `sflwsts.aasimahmed.com`.

| File | Role |
| --- | --- |
| `index.html` | Markup only, ~2.7KB |
| `assets/styles/main.css` | All styling |
| `assets/scripts/main.js` | All behaviour |
| `data.js` | GENERATED — the template list |

`index.html` loads `data.js` before `main.js`; the page has no build step and no framework.

## Cards are screenshots, not live sites

Each card previously embedded a live `<iframe>` of the template. That meant opening the page
booted every template at once — a WebGL scene, two animation loops that never stop, three
runtime Tailwind compilations — all in the background of a page nobody was looking at, and
getting linearly worse with each template added.

Cards now render a static `thumb.webp`. See
[decision 0003](../decisions/0003-static-thumbnails-over-iframes.md).

## The hover pan

The thumbnail is a tall capture shown top-aligned in a 16:10 window. On hover it translates
up by a percentage of **its own height**, so the pan always ends flush with the bottom edge
regardless of card width:

```
pan-pct = 1 − 0.625 × (naturalWidth / naturalHeight)
```

Expressing it as a percentage rather than pixels means nothing has to be measured. No
`clientWidth`, no `getBoundingClientRect`, no recalculation on resize or filter — which is
what allowed the old layout pass to be deleted outright.

## Filtering and pagination

Category chips and a search box filter the card set; the results are paginated ten at a time
with prev/next. Filtering resets to page one. Cards are shown and hidden with a class rather
than re-rendered, so each card's computed pan survives.
