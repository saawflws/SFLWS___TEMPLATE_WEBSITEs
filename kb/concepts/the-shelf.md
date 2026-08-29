---
id: the-shelf
title: The shelf
area: concepts
updated: 2026-08-29T15:00:00Z
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
