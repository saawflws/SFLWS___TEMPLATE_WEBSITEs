# incoming/

**Drop zone for static templates.** One folder per template. Anything with a `package.json`
belongs in `raw_make_websites/` instead — that split is by shape, not intent.

## Three shapes, all accepted

**A pair** — the common case:

```
incoming/mytemplate/
├── index.html
└── p.md          the prompt it was generated from
```

**Bare HTML** — no prompt, just the page:

```
incoming/mytemplate/
└── index.html
```

The agent reads the markup and writes `p.md` for you, clearly marked as reconstructed. That
marker matters: a reverse-engineered prompt describes what the page *is*, not what anyone
asked for, so it can never be used to confirm the template's category.

**Multi-file** — HTML with its CSS, JS and assets alongside:

```
incoming/mytemplate/
├── index.html
├── styles/main.css
├── scripts/app.js
├── images/hero.jpg
└── p.md          optional
```

The folder moves as a unit, so relative paths keep working. Nothing is flattened into one
file, and nothing is split apart.

## Then run

The `ingest-template` skill (`skills/ingest-template/`). It will:

1. Read everything in full and decide the category **itself** from the markup — a stated
   category is a claim, not a fact (Rule 4).
2. Write `p.md` if there is none.
3. File the template into `websites/static/<category>/<slug>/`, creating the category if needed.
4. Write `META.md`, shoot a thumbnail, inject the source button.
5. Update the category `INDEX.md` and regenerate root `data.js`.
6. Rename this folder to `_DELETE_ME_<name>/` and ask you to confirm — never deleting it
   itself (Rule 1).

## Before you drop anything here

This repo is public. Strip secrets, and make sure you have the right to redistribute the
design — see `docs/handoff-static.md` and the Provenance section of the README.
