---
id: 0003-static-thumbnails-over-iframes
title: 0003 — Static thumbnails instead of live iframes
area: decisions
updated: 2026-08-29T15:00:00Z
summary: Cards render screenshots, because nine live sites in one page was untenable.
related: [showcase, thumbnails]
---
# 0003 — Static thumbnails instead of live iframes

**Date:** 2026-08-29 · **Status:** accepted

## Context

Each showcase card embedded a live `<iframe>` of its template, scaled down, panning on hover.
It looked excellent and it did not scale.

Opening the page booted **nine complete websites at once**. Between them that meant a three.js
WebGL context, two Lenis `requestAnimationFrame` loops that never stop, ScrollTrigger
listeners, and three separate runtime compilations of the Tailwind play CDN — all running in
the background of a page nobody was looking at, and growing linearly with every template
added.

`loading="lazy"` barely helped: nine cards fit in about three rows, so nearly all of them were
in or near the viewport immediately.

## Decision

Cards render a static `thumb.webp`. The hover pan is kept as a CSS transform on a single
composited image layer.

## Alternatives considered

**Patch the iframes** — cap frame height, null out `src` when a card leaves the viewport,
batch the layout reads. Worth maybe 2-3x, but it cannot fix "three Tailwind compilers and a
WebGL scene are running", so it only delays the same wall.

**Hybrid** — static image, with a live iframe spun up only for the hovered card. Keeps the
"it is really running" feel at the cost of latency. Still viable as an addition; it composes
cleanly with this decision.

## Consequences

- The page is nine images instead of several MB of JavaScript, and it works on mobile.
- Thumbnails must be generated and committed, and can go stale if a template changes.
- A declared-but-missing thumbnail is a hard error rather than a broken image.
- `layoutFrames()` disappeared entirely, along with the forced synchronous layout it ran on
  every iframe load, filter keystroke and resize frame.

## The detail that made the pan free

Expressing the pan as a percentage of the image's own height, derived from
`naturalWidth/naturalHeight`, means nothing has to be measured and nothing recalculates on
resize.
