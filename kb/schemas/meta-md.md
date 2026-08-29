---
id: meta-md
title: META.md schema
area: schemas
updated: 2026-08-29T15:00:00Z
summary: Field-by-field definition of a template's catalog entry, the file agents actually read.
related: [template, data-pipeline, provenance]
---
# META.md schema

One per template, at `websites/<framework>/<category>/<slug>/META.md`. This is the file most
agents read, and the only one they need in order to choose.

## Shape

```markdown
# <Display Name>

> One sentence, under 25 words. This becomes the showcase card description.

| Field | Value |
| --- | --- |
| **Name** | Full page title |
| **Slug** | folder name |
| **Category** | category folder name |
| **Framework** | static / astro / react / nextjs |
| **Path** | `websites/<fw>/<cat>/<slug>/` |
| **Entry** | `index.html` — and whether single-file or a folder |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` |
| **Origin** | AI-generated, or Derived from <project> (<licence>) |

## Style tags
## Summary
## Sections
## Palette
## Typography
## Interaction & motion
## Best suited for
## Not a good fit for
## Notes for agents
```

## Which fields the tooling reads

| Field | Read | Notes |
| --- | --- | --- |
| Blockquote | yes, as the card description | Must be the first `>` line in the file |
| **Category** | yes, and validated | Must match the containing folder or the build fails |
| **Framework** | yes, and validated | Same |
| **Thumbnail** | yes | Relative filename; a declared-but-missing file is a hard error |
| **Origin** | yes | See [provenance](../concepts/provenance.md) |
| `## Style tags` | yes, for search | 6-10 backticked lowercase-hyphenated tags |

The sections the tooling ignores still matter — they are what an agent reads to decide.

## The rules that make it useful

**Everything comes from the markup.** Every hex, font, section and anchor is read out of the
real HTML and CSS. Never carried over from a sibling because they look similar, and never
taken from `p.md`.

**Tags must discriminate.** `high-contrast-dark` earns its place; `modern` does not.

**The differentiation test.** If a `META.md` could be swapped with a sibling's and nobody
would notice, it is wrong. Categories here hold several builds of near-identical briefs, and
telling them apart is the entire point of the file.

**"Not a good fit for" is not filler.** Eliminating a candidate is faster than confirming one,
and that section is what does it.
