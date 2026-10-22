---
id: the-shelf
title: The shelf
area: concepts
updated: 2026-10-23T12:00:00Z
summary: The template library itself — framework, category, template, and why it nests in that order.
related: [template, frameworks, entry-chains]
---

# The shelf

"The shelf" is this repo's name for the template library: everything under `websites/`.

```
websites/<framework>/<category>/<template>/
```

Three levels, and the order matters.

**Framework first** because it is the hardest constraint. Someone who needs Astro cannot use
a React template no matter how well the design fits, so it prunes the most candidates
soonest. It also decides how a template is served, built and screenshotted.

**Category second** because it maps to how requests actually arrive — "a gym site", "a yoga
studio" — and because it is the level at which templates are worth comparing.

**Template last**, the individual design.

## Categories are shared across frameworks

`gym` under `static/` and `gym` under `nextjs/` are the same category, spelled identically.
A category is a kind of *site*, not a kind of *code*. That means a request for a gym site
can be answered across frameworks with no translation table.

## Why not a flat tagged list

Tags describe a template; the hierarchy *eliminates* templates. An agent reading a flat list
must consider every entry. Walking the hierarchy it reads three small files and never sees
the other categories at all. That gap widens as the shelf grows.

## Template families

A template may also hold a *family*: sub-folders under one shelf entry, each with its own
self-contained `index.html` and `META.md`, numbered from a shared brief. `building_products`
introduced the shape with `moderndoors/` (decided October 2026): a drop of five complete
Morden Doors designs from the same brief became ONE card with a design-picker hub
`index.html` at the template root, and `prototype1/` … `prototype5/` underneath.

This works because nothing downstream governs sub-folders: `build-data.js`, the INDEX/META
reader and the thumbnail shooter only look at the template root, so the drift checks scope
to what the INDEX row names. The category `INDEX.md` carries the per-prototype chooser and
each `prototypeN/` carries its own `META.md` for direct reads. The cost is real and shows up
in AGENTS.md conventions, so keep it an exception: a family still needs every prototype
readable and choosable without opening HTML, and the cluster name used on the card must be
the user-facing name, not the internal slug.
