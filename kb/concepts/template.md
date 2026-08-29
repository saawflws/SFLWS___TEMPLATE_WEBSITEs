---
id: template
title: What counts as a template
area: concepts
updated: 2026-08-29T15:00:00Z
summary: A self-contained site plus the metadata that makes it choosable without opening it.
related: [the-shelf, provenance]
---

# What counts as a template

A template is a **complete, working site** plus **enough metadata to choose it without
opening it**. Both halves are required — a folder of HTML with no `META.md` is not a template
on this shelf, because nothing can find it.

| File | Required | What it is |
| --- | --- | --- |
| `index.html` (or a framework entry) | yes | The site itself |
| `META.md` | yes | The catalog entry; the only file most agents read |
| `p.md` | usual | The prompt it was generated from, verbatim |
| `thumb.webp` | usual | Generated screenshot for the showcase |

## Self-contained

A static template depends on nothing outside its own folder and can be copied out and served
anywhere. CDN links are fine and widely used — Google Fonts everywhere, plus GSAP, Lenis,
three.js and Tailwind in individual templates. So the promise is *self-contained on disk*,
**not** *works offline*. Each `META.md` records its own external dependencies.

## Complete, not a skeleton

Templates carry real copy, real names, real prices. That is what makes `META.md` meaningful:
the section list describes what a page genuinely contains. A page of placeholders produces a
catalog entry that says nothing.

## Distinct

Categories here often hold several builds of the same brief. The entire value of the metadata
is telling them apart, so a template near-identical to an existing one adds nothing. If two
`META.md` files could be swapped without anyone noticing, both are wrong.
