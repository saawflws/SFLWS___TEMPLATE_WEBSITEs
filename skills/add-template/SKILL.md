---
name: add-template
description: Add any new template through the single incoming/ drop zone — detect static vs framework project by shape and delegate to ingest-template or import-project.
---

# add-template

The single front door for everything landing on the shelf. Any template — a static page
or a full framework project — is dropped into `incoming/`; this skill detects its shape
and hands off to the skill that owns it. It catalogs nothing itself.

Read [`RULES.md`](../../RULES.md) first. Rules 1, 3, 4 and 9 bind here through the
downstream skills.

## Input

Any folder in `incoming/<name>/`:

| Shape | Contents | Delegates to |
| --- | --- | --- |
| Static pair, bare HTML, or multi-file | `index.html`, no `package.json` | `ingest-template` |
| Framework project | top-level `package.json` | `import-project` |

- If `incoming/` holds several folders and the user did not say which, list them and ask.
- Look at **directories only** — files such as `incoming/README.md` are not templates.
  Ignore `_DELETE_ME_*`.
- Check for `package.json` at the **top level** of the drop folder only
  (`incoming/<name>/package.json`). Never recurse into `node_modules/` to probe.

## Flow

### 1. Detect the shape

- **`incoming/<name>/package.json` exists → `import-project`.** A folder holding both a
  `package.json` and a self-contained `index.html` also goes this route — the build
  tooling is the thing that determines where it is filed.
- **No `package.json` → `ingest-template`.**
- **Neither signal** (no `index.html`, no `package.json`), or a `package.json` nested
  deeper than the top level → **stop and ask**. Do not guess a shape — it decides the
  destination path and is expensive to undo.

A static site that merely carries an incidental `package.json` (local tooling with no
framework signals) will route to `import-project`, which then stops and asks when its
framework detection fails. That is the designed fallback, not a misfire — report it as
such.

### 2. Hand off

Say which skill you are routing to and why, in one line. Then follow that skill's
`SKILL.md` from step 1 — do not summarise it, skip its verification steps, or
substitute your own judgment for its flow.

### 3. Confirm the downstream skill finished

`ingest-template` and `import-project` both end by running `node scripts/build-data.js`.
If you routed to one of them, that step happened or the task is not done.

## Output

Report: the routing decision and what in the drop folder decided it, plus whatever the
downstream skill produces — including the final path, the `build-data.js` result, and
any `_DELETE_ME_` folder awaiting confirmation.

## Do not

- Catalog anything directly — detection and delegation only.
- Guess the shape when signals are missing or nested.
- Skip the downstream skill's verification or `build-data.js` steps (Rule 3).
- Delete the drop folder (Rule 1).
- Read `dum/` (Rule 2).
