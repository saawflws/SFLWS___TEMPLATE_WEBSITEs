---
id: 0006-kb-currency
title: 0006 — A knowledge base that must stay current
area: decisions
updated: 2026-08-29T15:00:00Z
summary: Why kb/ exists alongside AGENTS.md, and the rule that keeps it from rotting.
related: [kb-entry, running-scripts]
---
# 0006 — A knowledge base that must stay current

**Date:** 2026-08-29 · **Status:** accepted

## Context

The repo accumulated real knowledge with nowhere to live: why decisions were made, what each
metadata field means, what the alternatives were. `AGENTS.md` is an instruction file and
`RULES.md` is a rule list — neither is a place for reasoning, and stuffing it into them would
have made the operational docs worse.

## Decision

A `kb/` of many small entries, each with validated frontmatter and an `updated` timestamp,
grouped by area, with a **generated** index and machine registry.

`kb/` holds what the operational files have no room for: concepts, schemas, workflow
reasoning, and dated decisions. **It does not restate them.** Anything operational links to
the canonical file instead.

## Why not one big document

A single knowledge file is read once and never again. Small addressable entries can be linked
to, cross-referenced, and updated individually — and an entry that goes stale is visible as
one stale entry rather than one stale paragraph inside something nobody re-reads.

## Why generated indexes

Hand-maintained indexes rot immediately. `build-kb.js` regenerates `INDEX.md` and
`registry.json` from frontmatter, and fails on a duplicate id, a broken `related` reference,
or a malformed timestamp.

## The rule

Rule 9: a change to structure, schema or workflow updates the matching entry with a fresh
`updated` timestamp and re-runs the generator. Every skill carries this as an explicit step.

## The honest limitation

None of this can force an entry to be *correct* — only to exist, resolve, and carry a date.
Timestamps make staleness visible; they do not prevent it.
