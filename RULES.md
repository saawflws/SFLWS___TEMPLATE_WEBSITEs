# RULES.md — Hard Rules (local development)

These are **hard rules**. They apply to every session, every skill, every phase, forever.
They are not defaults to be optimised around. If following a rule seems to block the task,
**stop and ask the user** — do not improvise a workaround.

For instructions on *how to work in this repo*, see [`AGENTS.md`](AGENTS.md).
External agents consuming this repo as a template library read
[`public-agents/RULES.md`](public-agents/RULES.md) instead — a different, smaller rule set.

---

## 1. Never delete anything automatically

To remove a file or folder, **rename it** to a delete-flag name and ask the user to confirm
before anything is really deleted:

| Target | Rename to |
| --- | --- |
| Folder `myproject/` | `_DELETE_ME_myproject/` |
| File `stale.md` | `_DELETE_ME_stale.md` |

Then say, explicitly: *"I've flagged `_DELETE_ME_x` for deletion. Confirm and I'll remove it."*

No exceptions. Not for temp files, not for test fixtures, not for "obviously safe" cases,
not for `node_modules`, not for something you created yourself five minutes ago. Overwriting
a file in place is also a deletion of its previous contents — for anything you did not author
in this session, read it first.

## 2. Never read the root folder `dum/`

`dum/` is the user's private scratch area. Do not list it, read it, grep it, catalog it,
index it, move it, or reference it in generated output.

The **only** exception: the user explicitly names a specific file inside it *in that
message*. Then read exactly that one file — never the surrounding folder, and never
"while I'm here" adjacent files. The exception expires with the message that granted it.

`dum/` is also excluded from every script in `scripts/` and every skill in `skills/`.

## 3. `data.js` at repo root is a generated artifact only

Root `data.js` is produced **solely** by `scripts/build-data.js`, which overwrites it
completely on every run.

- Never hand-edit `data.js`.
- Never patch it to fix a showcase bug.
- If it looks wrong, the bug is in the source `INDEX.md` / `META.md` files or in
  `build-data.js`. Fix the source, then regenerate.
- Any skill that adds, moves, or changes a template **must** run `node scripts/build-data.js`
  as its final step. This is non-optional.

## 4. Ingestion must independently verify classification

When cataloging a new template, read **both** its `p.md` **and** its `index.html` yourself
and reach your own conclusion about the category.

`p.md` states an intent; `index.html` is what actually got built, and the two drift. Never
trust `p.md`'s stated category on its own. The same rule applies to style tags, section
lists, palettes, and fonts — every field in a `META.md` is read out of the real markup and
CSS, never copied from the prompt file.

If your reading disagrees with `p.md`, say so and file it under the category the markup
supports.

## 5. Generation ambiguity → ask, don't guess

For a site-build request:

- **Enough info** (a clear category plus enough constraints to choose sensibly) → proceed
  automatically. Auto-pick the best template, or use the one the user named. State the
  assumptions you made.
- **Ambiguous or missing key info** (category unclear, no style direction, contradictory
  requirements) → **stop and ask clarifying questions first.** Do not build something
  plausible and hope it lands.

## 6. `AGENTS.md` at repo root is the single source of truth

All local-dev instructions live in root `AGENTS.md`.

Every tool-specific file — `CLAUDE.md`, `.opencode/`, `.gemini/`, `.github/`, and any
future one — is a **thin shim** that redirects to `AGENTS.md`. A shim points; it never
duplicates. If a shim contains real instructions, that is a bug: move the content into
`AGENTS.md` and shrink the shim back to a pointer.

## 7. All skills live in one place: `skills/`

`skills/<name>/` holds the actual logic. Tool-specific skill, plugin, and command
mechanisms **reference into** `skills/` — they never own a separate copy.

When you change a skill, you change exactly one file. If you find yourself editing the
same instructions in two places, the second place is a bug.

## 8. Two entry chains, never mixed

| | Local development | External consumer |
| --- | --- | --- |
| **Entry** | root `AGENTS.md` | `public-agents/AGENTS.md` |
| **Rules** | root `RULES.md` | `public-agents/RULES.md` |
| **Index** | — | `public-agents/INDEX.md` |
| **Audience** | you, working *on* this repo | an outside agent building sites *from* this repo |

An external agent should never need to read the root local-dev files. A local dev session
should never treat `public-agents/` as its own instructions. Do not cross-link the chains,
and do not let local-dev detail leak into `public-agents/`.

## 9. Keep the knowledge base current

`kb/` records why this repo is shaped the way it is: concepts, schemas, workflow reasoning,
and dated decisions. It is only worth having if it is true.

So: any change to **structure, a schema, or a workflow** updates the matching `kb/` entry,
bumps its `updated:` timestamp, and re-runs `node scripts/build-kb.js`. Every skill that
changes the shelf carries this as an explicit step.

`kb/` never restates `AGENTS.md`, `RULES.md` or the skills — it links to them (Rule 6).
`kb/INDEX.md` and `kb/registry.json` are generated; never hand-edit them (Rule 3 applies to
them exactly as it does to `data.js`).

A new decision gets a new dated entry in `kb/decisions/` rather than an edit to an old one.
Decisions are a record of what was chosen and why, not a description of the current state —
rewriting them destroys the reasoning someone will need later.
