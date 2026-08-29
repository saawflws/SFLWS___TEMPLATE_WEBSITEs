---
id: data-pipeline
title: The data pipeline
area: architecture
updated: 2026-08-29T15:00:00Z
summary: How INDEX.md and META.md become data.js, and why the script refuses to write on drift.
related: [meta-md, data-js, showcase, public-index-md]
---

# The data pipeline

`scripts/build-data.js` turns the shelf's markdown into the showcase's data file.

```
public-agents/INDEX.md          which frameworks and categories exist
  └─ <category>/INDEX.md        which templates, with curated tags
      └─ <template>/META.md     name, summary, tags, thumbnail, origin
          → data.js             one flat array, overwritten every run
```

## Why markdown is the source

The same files an agent reads to choose a template are the files the showcase is built from.
There is no second database to keep in step, and no way for the catalog to say one thing to
an agent and another to a human. Metadata that is wrong on the site is wrong in the shelf,
where someone will notice.

## Zero dependencies, on purpose

`fs` and `path` only. No `npm install` before it runs, so it works in any agent sandbox, in
CI, and on a fresh clone with nothing but Node.

## It validates, and refuses to write

Rather than emitting a broken catalog, it exits non-zero on:

- a template listed in an `INDEX.md` with no folder on disk
- a folder carrying a `META.md` that no `INDEX.md` lists
- a category folder with an `INDEX.md` missing from `public-agents/INDEX.md`
- a `META.md` whose declared category or framework disagrees with where it sits
- a declared `Thumbnail` with no such file

The third of those was a real bug, found by running a new category through the ingest flow
during validation — the category was silently skipped instead of flagged. See
[decision 0002](../decisions/0002-generated-data-js.md) and the
[add-static-template workflow](../workflows/add-static-template.md).

## `--check`

Same validation, writes nothing, exits 1 on drift. Use it in review and CI.
