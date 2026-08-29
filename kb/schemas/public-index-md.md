---
id: public-index-md
title: public-agents/INDEX.md schema
area: schemas
updated: 2026-08-29T15:00:00Z
summary: The tiny root index of frameworks and categories, and why it must never list templates.
related: [category-index-md, data-pipeline, entry-chains]
---
# public-agents/INDEX.md schema

The entry point to the shelf, and deliberately the smallest file in the chain.

## Shape

```markdown
## static/

- `gym` -> [`websites/static/gym/INDEX.md`](../websites/static/gym/INDEX.md)
- `boutique_yoga_studio` -> [`...`](...)

## react/

*(empty for now)*
```

## Parsing rules

`build-data.js` treats an `## <name>` heading as a **framework**, and each bullet under it as
a category. The arrow may be a Unicode arrow or `->`. The path is resolved from the repo root.

## Two invariants

**It must never list individual templates.** Categories only. The point of the layered chain
is that this file stays readable at a glance no matter how large the shelf grows. A template
belongs in its category's `INDEX.md`.

**A category must appear here to exist.** A folder with its own `INDEX.md` that this file does
not list used to be skipped silently by the build — it simply never reached the shelf or the
showcase. That is now a hard error, and finding it is why the check exists at all.

## Adding a category

Create `websites/<framework>/<category>/INDEX.md` **and** add the bullet here, in the same
change. Either alone fails the build.
