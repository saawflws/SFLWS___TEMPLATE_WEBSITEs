---
id: 0009-filesystem-discovery
title: 0009 — Tools discover the shelf from disk, not data.js
area: decisions
updated: 2026-08-29T18:30:00Z
summary: Reading the generated catalog to decide what to generate is a deadlock; walking websites/ is not.
related: [data-pipeline, thumbnails, source-button, running-scripts]
---

# 0009 — Tools discover the shelf from disk, not data.js

**Date:** 2026-08-29 · **Status:** accepted

## Context

`shoot-thumbs.js` and `add-source-button.js` originally read `data.js` to learn which
templates existed. That looked correct — `data.js` is the catalog, so working from it means
working on exactly what the showcase lists.

It deadlocks.

A template's `META.md` declares `Thumbnail: thumb.webp` as part of being written. But
`build-data.js` treats a declared-but-missing thumbnail as a hard error, so `data.js` cannot
build until the thumbnail is shot — and the shooter could not run until `data.js` built.

The first new template to go through the pipeline hit it immediately.

## Decision

Both scripts discover templates by walking `websites/<framework>/<category>/<slug>/` and
taking every folder containing a `META.md`. Neither reads `data.js`.

## Why not fix it by reordering

The alternative was to write `META.md` without the `Thumbnail` row, build, shoot, add the
row, and build again. That works, and it is a five-step dance around a self-inflicted
dependency that someone will get wrong. Removing the dependency is cheaper than documenting
how to tiptoe around it.

## The general shape of the mistake

A generated artifact should not be an input to the tools that produce what it is generated
from. `data.js` is downstream of the shelf; the shelf is the source of truth, and anything
producing shelf content reads the shelf.

`build-data.js` is the only script that reads or writes `data.js`, which is exactly the
relationship Rule 3 describes.

## Consequences

- The scripts work on a fresh clone with no `data.js` at all.
- They see templates the catalog does not yet know about, which is the whole point.
- `_DELETE_ME_*` folders are skipped explicitly during discovery, since they are on disk but
  deliberately not on the shelf.
