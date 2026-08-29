---
id: 0008-three-ingest-shapes
title: 0008 — Three ingest shapes, one flow
area: decisions
updated: 2026-08-29T18:30:00Z
summary: Accepting pairs, bare HTML and multi-file folders without branching the ingest flow.
related: [add-static-template, template, meta-md]
---

# 0008 — Three ingest shapes, one flow

**Date:** 2026-08-29 · **Status:** accepted

## Context

Ingest assumed every static template arrived as an `index.html` plus a `p.md`. Real inputs
often are not: a page exported from somewhere with no prompt attached, or a folder of HTML,
CSS, JS and images.

## Decision

Accept all three — pair, bare HTML, multi-file — through one flow. The differences are
absorbed in two steps rather than branching:

- **No prompt** → write `p.md` from the markup, marked reconstructed.
- **Multi-file** → move the folder as a unit; do not flatten or split.

## Why a reconstructed prompt must be labelled

An original prompt is evidence of *intent*. A reconstructed one is a description of the
*result*. Only the first can corroborate anything.

Rule 4 says classification is verified against the markup rather than the prompt, precisely
because the two drift. A reconstructed `p.md` cannot serve that purpose at all — it was
derived from the markup, so agreeing with it proves nothing. Labelling it keeps a later
reader from mistaking a description for a source.

## Why templates are not normalised

A single-file template is not split, and a multi-file one is not inlined. Both shapes work,
converting between them is lossy busywork, and rewriting someone's file layout on ingest
would violate the same principle that stops the flow "fixing" broken HTML: a template is
cataloged as it was written. `META.md`'s **Entry** row states the shape so an agent knows
before it starts copying.

## Consequences

- `incoming/` accepts anything static; the split from `raw_make_websites/` is still
  `package.json` or not.
- Multi-file templates must keep every path relative and internal, or they stop being
  copyable — which is the property the shelf depends on.
- `META.md` gains a shape statement and an origin note for reconstructed prompts.
