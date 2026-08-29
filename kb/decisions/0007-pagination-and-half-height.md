---
id: 0007-pagination-and-half-height
title: 0007 — Ten per page, half-height captures
area: decisions
updated: 2026-08-29T15:00:00Z
summary: Two limits chosen to keep the showcase usable as the shelf grows.
related: [showcase, thumbnails]
---
# 0007 — Ten per page, half-height captures

**Date:** 2026-08-29 · **Status:** accepted

## Context

Even with static thumbnails, the showcase rendered every card at once. At nine templates that
is fine; at thirty it is a long scroll and a lot of image bytes on first paint. Separately,
captures were clipped to the top 4000px of each page — far more than a card ever shows.

## Decision

**Ten cards per page**, with prev/next over the filtered set, resetting to page one whenever
the search or category changes.

**Captures clipped to 2000px**, halving each image.

## Why ten

It fills a couple of rows at common widths without dominating the viewport, and it keeps the
first paint to ten images. Round numbers also make the position indicator readable.

## Why halve the capture

The card shows a 16:10 window and the hover pan travels the rest. Beyond a point, extra height
is bytes nobody sees. Halving roughly halves the total image weight with no visible loss.

The pan needed no code change: it is derived from the image's own aspect ratio, so it simply
recalculates.

## Consequences

- Pagination operates on the **filtered** set, so a search returns pages of matches.
- Cards are hidden rather than re-rendered, so each card's computed pan survives paging.
- The pager hides entirely when one page covers everything.
