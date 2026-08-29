---
id: category-index-md
title: Category INDEX.md schema
area: schemas
updated: 2026-08-29T15:00:00Z
summary: The shortlist table for one category, plus the chooser that tells siblings apart.
related: [meta-md, public-index-md, data-pipeline]
---
# Category INDEX.md schema

One per category, at `websites/<framework>/<category>/INDEX.md`. An agent reads this to
shortlist two or three candidates before opening any `META.md`.

## Shape

```markdown
# <category> - templates

One or two lines on what this category is and the axis its templates differ on.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **IRONFORGE** | `ironforge/` | `tag` `tag` `tag` | One line. |

## Choosing between them

| If the client... | Use |
| --- | --- |
| Publishes a timetable and sells memberships | `ironhouse` |
```

## Parsing rules

`build-data.js` reads the **first table only** — the template table. Anything after it, the
chooser included, is ignored by the tooling and exists purely for the reader.

| Column | Used for |
| --- | --- |
| Template | The showcase card title. Keep it the short brand name, not the full page title |
| Path | The slug. Trailing slash optional |
| Tags | Curated search tags, listed ahead of the `META.md` tags |
| Summary | Fallback description when a `META.md` has no blockquote |

## Why the chooser table exists

The template table says what each template *is*. The chooser says **which to pick**, phrased
as the situation rather than the design — which is the shape a real request arrives in. It is
the difference between a list and a recommendation.

## Drift is an error

A folder in this category carrying a `META.md` that this file does not list fails the build.
So does a row pointing at a folder that does not exist.
