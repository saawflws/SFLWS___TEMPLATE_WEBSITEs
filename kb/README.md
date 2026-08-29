# kb/ — the knowledge base

**Start at [`INDEX.md`](INDEX.md).** It lists every entry, grouped by area, and is
regenerated from the entries themselves.

## What this is for

`kb/` holds what the operational files have nowhere to put:

- **Why** things are shaped the way they are, and what the alternatives were.
- **Field-by-field schemas** for the files the tooling reads and writes.
- **Concepts and vocabulary** the rest of the repo assumes you already have.
- **Dated decisions**, so a choice made once does not have to be re-argued from scratch.

## What this is *not* for

It does **not** restate [`AGENTS.md`](../AGENTS.md), [`RULES.md`](../RULES.md), or the
skills. Those are the canonical, operational files — the moment a KB entry paraphrases one,
the two start drifting and nobody can say which is right. That is the failure mode
[Rule 6](../RULES.md) exists to prevent, and a knowledge base is an unusually easy way to
walk into it.

So: an entry explaining *why* the data pipeline validates before writing is right at home
here. An entry listing *how to run* `build-data.js` links to the canonical place instead.

| Question | Where it belongs |
| --- | --- |
| Why is it built this way? | `kb/` |
| What does this field mean? | `kb/schemas/` |
| What am I not allowed to do? | `RULES.md` |
| How do I do the task? | `AGENTS.md`, `skills/` |
| I have a site — where do I put it? | `docs/` |

## Layout

```
kb/
├── INDEX.md        GENERATED — the registry, grouped by area
├── registry.json   GENERATED — the same, machine-readable
├── concepts/       what the moving parts are
├── architecture/   how they fit together, and why
├── schemas/        field-by-field file definitions
├── workflows/      end-to-end paths, with the reasoning
├── operations/     running things, and fixing them
└── decisions/      dated records: the call, the alternatives, what would reverse it
```

Many small entries, never one big file. A single long document gets read once and never
again; small addressable entries can be linked to and updated one at a time, and a stale
entry is visible as one stale entry rather than a stale paragraph buried inside something
nobody re-reads.

## Adding or changing an entry

1. Create `kb/<area>/<id>.md`. The filename **is** the id.
2. Give it frontmatter — the full contract is in
   [`schemas/kb-entry.md`](schemas/kb-entry.md):

   ```yaml
   ---
   id: my-entry
   title: A readable title
   area: concepts
   updated: 2026-08-29T15:00:00Z
   summary: One line, shown in the index.
   related: [some-other-entry]
   ---
   ```

3. **Bump `updated` whenever you change the entry.** That timestamp is the only signal
   anyone has about whether the entry can still be trusted.
4. Regenerate:

   ```bash
   node scripts/build-kb.js
   ```

`INDEX.md` and `registry.json` are generated. Never hand-edit them — the generator
overwrites both on every run.

## What the generator enforces

It refuses to write on: a missing required field, an `id` that does not match its filename,
an `area` that does not match its folder, a malformed `updated`, a duplicate `id`, or a
`related:` pointing at an entry that does not exist.

`node scripts/build-kb.js --check` validates without writing and exits non-zero on drift.

Broken cross-references are errors rather than warnings on purpose: a `related:` pointing at
nothing is either a typo or a note that an entry still needs writing, and both are worth
being told about.

## Keeping it current

[Rule 9](../RULES.md) — a change to structure, a schema, or a workflow updates the matching
entry with a fresh `updated` timestamp and re-runs the generator. Every skill carries this as
an explicit final step alongside regenerating `data.js`.

Being honest about the limit: none of this can make an entry *correct*. It can only make sure
the entry exists, that its links resolve, and that it carries a date you can judge it by.
