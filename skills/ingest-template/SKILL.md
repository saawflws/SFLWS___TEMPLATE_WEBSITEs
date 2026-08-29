---
name: ingest-template
description: Catalog a single static website template (a p.md + index.html pair) into websites/static/ — verify its category from the markup, file it, write META.md, update the category INDEX.md, and regenerate data.js.
---

# ingest-template

Turns a loose `p.md` + `index.html` pair into a properly cataloged entry on the shelf.

Read [`RULES.md`](../../RULES.md) first. Rules 1, 3 and 4 all bind here.

## Input

A folder containing exactly one `p.md` and one `index.html`.

- **Default location:** `incoming/<name>/`. This is the drop zone for single static
  templates — full framework projects go to `raw_make_websites/` and belong to
  `import-project` instead.
- If the user points at a pair somewhere else, use that path.
- If `incoming/` holds several folders and the user did not say which, list them and ask.

## Flow

### 1. Read both files, in full

Read `p.md` **and** `index.html` yourself. Not the first 200 lines of the HTML — all of it.
These files run 40–90KB; the sections, palette and interactions you need are spread through
the whole thing.

### 2. Determine the category yourself

**Do not trust `p.md`'s stated category** (Rule 4). `p.md` is the prompt someone wrote; the
markup is what actually got built, and they drift.

Decide from the markup: the nav labels, the section headings, the content domain, the
imagery and the calls to action. Then:

- Compare against the categories already in `websites/static/`. Read the candidate
  category's `INDEX.md` to see what actually lives there.
- **Fits an existing category** → use it.
- **Does not fit** → create a new one. A new category needs a real distinction, not a
  synonym: a second yoga template is `boutique_yoga_studio`, not a new `wellness` folder.
  If it is a genuinely new kind of site, create
  `websites/static/<new_category>/` with a fresh `INDEX.md`, and add the category line to
  `public-agents/INDEX.md` in the same change. Both, or `build-data.js` will not see it.
- **Genuinely borderline** → say which two categories you are between, state which you
  picked, and why. Do not silently pick.

If your reading disagrees with `p.md`, file it where the markup says and record the
disagreement under "Notes for agents" in `META.md`.

### 3. File the template

Move the pair to `websites/static/<category>/<slug>/`.

- `<slug>` is lowercase, no separators, matching existing convention
  (`forgefitnessstudio`, `junoharada`).
- The prompt file is always named `p.md`. Rename it if it arrived as `prompt.md` or
  similar.
- Use `git mv` so history follows the file.
- If the destination folder already exists, **stop and ask** — do not overwrite.

### 4. Write `META.md`

Into `websites/static/<category>/<slug>/META.md`. Match the structure of the existing
`META.md` files on the shelf exactly — read one before writing (any of them; they are all
the same shape). The required sections, in order:

| Section | What goes in it |
| --- | --- |
| H1 + blockquote | Display name, then a one-sentence description under 25 words. The blockquote is what `build-data.js` puts on the showcase card. |
| Field table | Name, Slug, Category, Framework, Path, Entry, Thumbnail, Prompt, Origin |
| `## Style tags` | 6–10 backticked lowercase-hyphenated tags. Discriminating, not generic. |
| `## Summary` | 2–4 sentences, including what separates it from its siblings in the same category. |
| `## Sections` | Table: #, Section, Anchor, Contents — every real section, document order, real `id` anchors. |
| `## Palette` | Table: Token, Hex, Role — real CSS custom properties. One subheading per theme if it ships several. |
| `## Typography` | Table: Role, Family, Weights, Notes. |
| `## Interaction & motion` | Verified behaviour from the inline script and CSS. Flag anything needing network access. |
| `## Best suited for` | 3–5 concrete client types. |
| `## Not a good fit for` | 2–3 bullets. This is what stops a wrong pick. |
| `## Notes for agents` | Structural facts, external dependencies, naming quirks, and the standing note that agents may open `index.html` for finer detail. |

**Origin** records provenance: `AI-generated from `p.md`` when the template came from a
prompt, or `Derived from <project> (<licence>)` when it was adapted from existing
open-source work — in which case that upstream licence keeps applying and must be named.
If you cannot establish the origin, say so in the row rather than guessing.

Every hex, font, section and anchor comes from the file you just read. Never carry a value
across from a sibling template because they look similar — they are not.

**The differentiation test:** if your new `META.md` could be swapped with a sibling's
without anyone noticing, it is wrong. Rewrite it.

### 5. Shoot the thumbnail

```bash
node scripts/shoot-thumbs.js
```

With no arguments it shoots only templates that have no `thumb.webp` yet, so this picks up
the one you just filed and leaves the rest alone. It needs no npm install — it drives a
local Chrome or Edge over the DevTools Protocol.

Then add the row to the `META.md` field table:

```
| **Thumbnail** | `thumb.webp` |
```

The showcase renders these screenshots, not live iframes. Skipping this step is not fatal —
the card falls back to a typographic tile — but the template will look unfinished next to
its siblings.

### 6. Inject the source button

```bash
node scripts/add-source-button.js
```

Adds the rainbow "view source" pill linking to the template's folder on GitHub. It is
idempotent — the block is delimited, so re-running refreshes rather than duplicates — and it
self-hides on any host that is not the showcase, so a cloned client site needs no cleanup.

### 7. Update the category `INDEX.md`

Add one row to the table in `websites/static/<category>/INDEX.md`:

```
| **DISPLAY NAME** | `slug/` | `tag` `tag` `tag` | One-line summary. |
```

Keep rows alphabetical by slug. The tags here are the 3–5 sharpest from `META.md` — this
table is what an agent scans to shortlist, so they must discriminate between the rows
directly above and below.

### 8. Regenerate `data.js`

```bash
node scripts/build-data.js
```

**Non-optional. Every time.** (Rule 3.) It validates as it goes — a missing `META.md`, a
category mismatch, or a template on disk that `INDEX.md` never lists all fail the run.
If it exits non-zero, fix the source files and run it again. Never hand-edit `data.js` to
make the error go away.

### Sync the knowledge base

If this task changed **structure, a schema, or a workflow** — a new category, a changed
`META.md` field, a different step order — update the matching entry under `kb/`, bump its
`updated:` timestamp, and run:

```bash
node scripts/build-kb.js
```

Cataloging one more template into an existing category is not a structural change and needs
no KB edit. Adding a category, a field, or a new step is (Rule 9).

### 9. Clean up the drop folder

The source folder in `incoming/` is now empty (you moved the files out). Rename it to
`_DELETE_ME_<name>/` and ask the user to confirm before deleting (Rule 1). Do not remove it
yourself, even though it is empty.

## Output

Report: the category you chose and what in the markup decided it, the final path, and the
`build-data.js` result. Name anything you flagged `_DELETE_ME_`.

## Do not

- Trust `p.md`'s category (Rule 4).
- Skip `build-data.js` (Rule 3).
- Delete the drop folder (Rule 1).
- Read `dum/` (Rule 2).
- Edit the template's `index.html`. It is cataloged as-is; if it is broken, say so rather
  than fixing it silently.
