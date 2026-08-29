---
id: 0004-two-drop-zones
title: 0004 — Two drop zones, split by shape
area: decisions
updated: 2026-08-29T15:00:00Z
summary: incoming/ for static templates, raw_make_websites/ for framework projects.
related: [frameworks, add-static-template, import-framework-project]
---
# 0004 — Two drop zones, split by shape

**Date:** 2026-08-29 · **Status:** accepted

## Context

Templates arrive in two very different forms: a static page that can be served immediately,
and a framework project needing an install and a build. One drop zone would mean detecting
which at ingest time.

## Decision

Two zones, split by **shape, not intent**:

| Zone | Contents | Skill |
| --- | --- | --- |
| `incoming/` | Static templates | `ingest-template` |
| `raw_make_websites/` | Anything with a `package.json` | `import-project` |

## Why

The two paths genuinely differ. A static template is read, filed and screenshotted in one
step. A framework project needs framework detection, a `node_modules` exclusion, a copy
verification, a build and a served URL before anything can look at it. Fusing them into one
skill with a branch at step 1 makes both harder to follow.

"Anything with a `package.json`" is also an unambiguous test. Splitting by intent —
"is this a template or a project?" — is not.

## Consequences

- Two skills stay short and readable rather than one long branching one.
- The `orchestrator` skill routes by the same test.
- A folder in the wrong zone is an easy, obvious fix rather than a silent misfile.

## What would reverse this

If framework imports became as cheap as static ones — no build needed to screenshot, no
exclusions to manage — the split would stop earning its keep.
