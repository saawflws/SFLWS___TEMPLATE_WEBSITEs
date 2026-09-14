---
name: orchestrator
description: Route an incoming task to the right SFLWS skill — cataloging a static template, importing a framework project, or generating a new site from the shelf. Use when it is not obvious which skill applies.
---

# orchestrator

A router, nothing more. It decides which of the other skills owns the task and hands
off. It does not catalog, import, or build anything itself.

Read [`RULES.md`](../../RULES.md) before acting on any route.

## Input

Any task touching this repo's template shelf.

## Flow

### 1. Classify the task

Work down this list and take the first match:

| Signal | Route |
| --- | --- |
| Anything dropped in `incoming/`, or the user hands over a template or project to add | `add-template` — it detects the shape and delegates to `ingest-template` / `import-project` |
| The user explicitly names `ingest-template` or `import-project` for a folder | that skill, directly |
| The user wants a website *built* — for a client, a brand, themselves | `generate-site` |
| "What do we have for X?", "which template suits Y?" | `generate-site` (selection only — stop after the pick) |

### 2. Resolve the ambiguous cases

- **"Add this and then build me a site from it"** → two tasks. Run `add-template` to
  completion first (including the `build-data.js` step), then `generate-site`. Never
  interleave them.
- **Nothing in `incoming/` and no clear request** → do not guess a route. Ask what
  the user wants to do.

### 3. Hand off

Say which skill you are routing to and why, in one line. Then follow that skill's
`SKILL.md` from step 1 — do not summarise it, skip its verification steps, or
substitute your own judgment for its flow.

## Output

The routing decision, plus whatever the downstream skill produces.

## Notes

- `add-template` delegates to `ingest-template` / `import-project`, which both end by
  running `node scripts/build-data.js`.
  If you route to one of them, that step happened or the task is not done.
- `generate-site` reads from `public-agents/`, not from the local dev docs. It never
  modifies the shelf.
- Never read `dum/` while classifying (Rule 2). It is not a drop folder.
