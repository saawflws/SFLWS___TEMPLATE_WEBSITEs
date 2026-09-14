---
id: 0011-single-drop-zone
title: 0011 — Single drop zone with detection
area: decisions
updated: 2026-09-14T00:00:00Z
summary: One incoming/ folder for every drop; add-template detects static vs framework and delegates.
related: [0004-two-drop-zones, add-static-template, import-framework-project, frameworks]
---
# 0011 — Single drop zone with detection

**Date:** 2026-09-14 · **Status:** accepted · **Supersedes:** [0004](0004-two-drop-zones.md)

## Context

Templates arrived through two folders: `incoming/` for static pages, `raw_make_websites/`
for framework projects. The split was by shape and unambiguous — but it pushed the
classification work onto the person dropping the folder, who had to know which zone a
template belonged in before the system ever looked at it. Drops regularly landed in the
wrong zone.

## Decision

One drop zone, `incoming/`, for every shape. A thin dispatcher skill, `add-template`,
detects the shape at intake time and delegates:

| Signal | Route |
| --- | --- |
| Top-level `package.json` present | `import-project` |
| Otherwise | `ingest-template` |

"`package.json` wins" on ties is deliberate: a folder holding both still goes the
framework route, because the build tooling is what decides where it is filed. A drop with
neither signal stops and asks instead of guessing.

`ingest-template` and `import-project` keep all of their logic — detection is the only
thing that moved. `orchestrator` classifies the *job* (intake vs. build) and sends intake
work to `add-template`; `add-template` classifies the *drop*. The two routers compose
rather than compete.

## Why

This does **not** meet the reversal condition 0004 stated ("framework imports became as
cheap as static ones") — the import path is still expensive: framework detection,
`node_modules` exclusion, copy verification, a build before anything can be screenshotted.
What changed is the judgment about *who should pay the classification cost*. The test
("a top-level `package.json` or not") was always mechanical; making the human apply it by
choosing a folder bought nothing once a dispatcher could apply the same test itself.
User-side simplicity won over symmetrical folders.

## Consequences

- `raw_make_websites/` is flagged `_DELETE_ME_raw_make_websites/` for removal. There is
  exactly one place to drop anything.
- Five skills instead of four; every tool-specific pointer set gains an `add-template`
  stub. Skill logic still lives in `skills/` only.
- A static site carrying an incidental `package.json` (local tooling, no framework
  signals) routes to `import-project`, which then stops and asks when framework detection
  fails. That fallback is part of the design, not a misfire.

## What would reverse this

If auto-detection proves unreliable in practice — drops routinely needing human
re-routing, or the `package.json` signal turning ambiguous — the honest fix is restoring
an explicit human choice at drop time, not adding heuristics to the dispatcher.
