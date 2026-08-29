---
id: kb-entry
title: Knowledge-base entry schema
area: schemas
updated: 2026-08-29T15:00:00Z
summary: The frontmatter contract every kb/ entry must satisfy, and what the generator enforces.
related: [0006-kb-currency, data-js]
---
# Knowledge-base entry schema

Every file under `kb/<area>/` carries YAML frontmatter. `scripts/build-kb.js` validates it and
refuses to write the registry if anything is wrong.

## Frontmatter

```yaml
---
id: data-pipeline
title: The data pipeline
area: architecture
updated: 2026-08-29T15:00:00Z
summary: One line - this is what INDEX.md shows.
related: [meta-md, data-js]
---
```

| Field | Required | Rule |
| --- | --- | --- |
| `id` | yes | Must equal the filename without `.md`, and be unique across the KB |
| `title` | yes | Shown in the index |
| `area` | yes | Must equal the containing folder name |
| `updated` | yes | ISO-8601. Bump it on every edit |
| `summary` | yes | One line |
| `related` | no | Ids of other entries. **Every one must resolve** |

## What the generator enforces

**Hard errors:** a missing required field, an `id` that does not match its filename, an `area`
that does not match its folder, a malformed `updated`, a duplicate `id`, or a `related`
pointing at nothing.

**Warnings:** an unknown area folder, an empty area, an unparsed frontmatter line, an entry
listing itself as related.

## The parser is deliberately small

It handles `key: value`, and `related` as either an inline list or a block of `-` lines.
Nothing else. If an entry needs richer YAML, that is a signal the contract is being stretched
rather than a reason to grow the parser.

## Areas

`concepts` · `architecture` · `schemas` · `workflows` · `operations` · `decisions`

The index orders them that way on purpose: concepts before the things built on them, and
decisions last as the historical record.
