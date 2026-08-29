---
name: import-project
description: Import a full React, Next.js or Astro project from raw_make_websites/ into the websites/ shelf — detect the framework, copy without node_modules, verify, write META.md, update INDEX.md, and regenerate data.js.
---

# import-project

Brings a complete framework project onto the shelf as a cataloged template.

Read [`RULES.md`](../../RULES.md) first. Rule 1 is the one that matters most here — the
source folder is **never** deleted, only flagged.

## Input

A project folder inside `raw_make_websites/`.

- If `raw_make_websites/` holds several projects and the user did not say which, list them
  and ask.
- If the folder is a single static `p.md` + `index.html` pair with no `package.json`, this
  is the wrong skill — route to `ingest-template` instead.

## Flow

### 1. Detect the framework

Read `package.json` first, then confirm against the config files on disk:

| Framework | Signals |
| --- | --- |
| `nextjs` | `next` in dependencies; `next.config.{js,mjs,ts}`; an `app/` or `pages/` directory |
| `astro` | `astro` in dependencies; `astro.config.{mjs,ts}`; `src/pages/*.astro` |
| `react` | `react` present with **no** `next` and **no** `astro`; typically `vite.config.*` or CRA layout |

Order matters: Next.js and Astro projects both depend on React, so check for `next` and
`astro` before concluding `react`.

If no `package.json` exists, or the signals conflict, **stop and ask**. Do not guess a
framework — it decides the destination path and is expensive to undo.

### 2. Determine the category

Same standard as `ingest-template`, and the same rule (Rule 4): decide from what the project
actually builds, not from its folder name or its README's claim.

Read the main page component, the site metadata/config, and the nav. Then compare against
the categories already present under `websites/<framework>/` **and** under
`websites/static/` — categories are shared across frameworks, so a Next.js gym site belongs
in `websites/nextjs/gym/`, matching the existing `gym` name exactly.

Creating a new category means creating `websites/<framework>/<category>/INDEX.md` **and**
adding the category line under the right framework heading in `public-agents/INDEX.md`.
Both, or `build-data.js` will not see it.

### 3. Copy the project

Destination: `websites/<framework>/<category>/<project>/`

**Exclude** `node_modules/` — always. Also exclude build output and local state:
`.next/`, `dist/`, `build/`, `.astro/`, `.turbo/`, `.cache/`, `.vercel/`, `.git/`,
and any `.env*` file carrying secrets.

Keep everything else, including lockfiles and dotfiles like `.gitignore` and `.npmrc`.

```bash
# from the repo root
SRC="raw_make_websites/<project>"
DST="websites/<framework>/<category>/<project>"
mkdir -p "$DST"
tar --exclude=node_modules --exclude=.next --exclude=dist --exclude=build \
    --exclude=.astro --exclude=.turbo --exclude=.cache --exclude=.vercel \
    --exclude=.git --exclude='.env*' \
    -cf - -C "$SRC" . | tar -xf - -C "$DST"
```

If the destination already exists, **stop and ask**. Never overwrite an existing template.

### 4. Verify the copy

Do not proceed on the assumption that the copy worked. Check:

```bash
# file counts, both sides, with the same exclusions
find "$SRC" -type f -not -path '*/node_modules/*' -not -path '*/.next/*' \
     -not -path '*/dist/*' -not -path '*/build/*' -not -path '*/.git/*' | wc -l
find "$DST" -type f | wc -l
```

The counts must match. Then confirm the essentials landed:

- `package.json` exists at the destination and parses.
- The framework's config file is present.
- The entry directory (`app/`, `pages/`, or `src/pages/`) is present and non-empty.

If verification fails, **stop**. Report what is missing. Do not flag the source folder for
deletion — the source is the only surviving copy.

### 5. Flag the source (only after verified success)

```bash
mv "raw_make_websites/<project>" "raw_make_websites/_DELETE_ME_<project>"
```

Then tell the user, explicitly: *"Copy verified. I've renamed the source to
`raw_make_websites/_DELETE_ME_<project>/`. Confirm and I'll delete it."*

**Never delete it yourself** (Rule 1), and never do this step before step 4 passes.

### 6. Write `META.md`

Into `websites/<framework>/<category>/<project>/META.md`. Same structure as the static
templates — read an existing one and match it exactly. Framework-specific differences:

- **Framework** field is `react` / `nextjs` / `astro`, not `static`.
- **Entry** field names the real entry point (`app/page.tsx`, `src/pages/index.astro`, …)
  and states that this is a project with a build step, not a single file.
- Add a **Stack** row to the field table: package manager, styling approach
  (Tailwind / CSS modules / styled-components), and notable dependencies.
- Add a **Thumbnail** row only if you actually produced a `thumb.webp` (see the showcase
  note at the end) — a declared-but-missing thumbnail fails the build.
- **Palette** comes from the real source — a Tailwind theme extension, CSS custom
  properties, or a design-token file. Cite where you found it.
- Under **Notes for agents**, record: the install and dev commands, the Node version if
  pinned, whether it needs environment variables to run, and any external service it
  calls.

### 7. Update the category `INDEX.md`

Add one row to `websites/<framework>/<category>/INDEX.md`, matching the existing table
shape. Create the file with a header and table if the category is new.

### 8. Regenerate `data.js`

```bash
node scripts/build-data.js
```

**Non-optional, every time** (Rule 3). Fix source files if it errors; never hand-edit
`data.js`.

## Output

Report: detected framework and the signals that decided it, the category and why, the
destination path, the file-count verification result, the `_DELETE_ME_` folder awaiting
confirmation, and the `build-data.js` result.

## Do not

- Copy `node_modules` (it is large, platform-specific, and reproducible).
- Delete the source folder (Rule 1) — flag it and ask.
- Flag the source before verification passes.
- Guess the framework when signals conflict.
- Read `dum/` (Rule 2).

## Note on the showcase

The showcase renders static screenshots, never live iframes. `scripts/shoot-thumbs.js`
captures a served URL, so it handles `static` templates directly but **cannot shoot a
framework project** — that needs a build and a running dev server first.

So for an imported project, either:

- build it, serve it, capture a screenshot into
  `websites/<framework>/<category>/<project>/thumb.webp`, and add a Thumbnail row
  pointing at `thumb.webp` to its `META.md` field table; or
- leave the Thumbnail row off entirely, and the card falls back to a typographic tile.

Do **not** add a Thumbnail row pointing at a file that does not exist — `build-data.js`
treats that as a hard error and refuses to write.
