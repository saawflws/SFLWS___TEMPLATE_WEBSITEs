---
id: 0002-generated-data-js
title: 0002 — One generated data.js at the root
area: decisions
updated: 2026-08-29T15:00:00Z
summary: The showcase reads a single generated file built from the same markdown agents read.
related: [data-pipeline, data-js]
---
# 0002 — One generated data.js at the root

**Date:** 2026-08-29 · **Status:** accepted

## Context

The showcase needs a machine-readable template list. The original `index.html` carried a
hand-maintained `LINKS[]` array, which meant adding a template meant editing it in two places
and hoping.

An open question was whether the generated data should sit at the root or under
`assets/scripts/`.

## Decision

A single generated `data.js` at the repo root, built by `scripts/build-data.js` from
`public-agents/INDEX.md`, the category `INDEX.md` files and each `META.md`. Loaded directly by
`index.html`. **No second copy, no loader indirection.**

## Why

The same markdown an agent reads to choose a template is what the showcase is built from, so
the catalog cannot say one thing to an agent and another to a human.

An `assets/scripts/data.js` that re-exported the root file would give the shelf two sources of
truth to drift apart — exactly what Rule 3 exists to prevent.

Generating also allows validation. The script refuses to write when the shelf is inconsistent,
which turns a class of silent errors into loud ones.

## Consequences

- `data.js` is never hand-edited. If it is wrong, the source is wrong.
- Every skill that touches the shelf must end by regenerating it.
- Being generated but **committed** is deliberate: GitHub Pages serves the repo as-is.

## What this caught

A category folder with its own `INDEX.md` but missing from `public-agents/INDEX.md` was
silently skipped — it never reached the shelf or the showcase. Found by running a new category
through the ingest flow during validation, and now a hard error.
