# incoming/

**The single drop zone for everything.** One folder per template — static or framework
project. The `add-template` skill detects the shape and routes it to the right flow.

## Four shapes, all accepted

**A pair** — the common static case:

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

**A framework project** — React, Next.js or Astro, straight out of a generator or export:

```
incoming/my-project/
├── package.json        required — this is what marks it as a project
├── src/
└── node_modules/       fine to leave; it is excluded on import
```

Leave `node_modules/` alone — do not spend time deleting it. The import excludes it, along
with build output and `.env*` files.

## How the shape is detected

A top-level `package.json` means a framework project; anything else is static. A folder
holding both still goes the framework route — the build tooling decides where it is filed.
If a drop has neither signal, the agent stops and asks rather than guessing.

## Then run

The `add-template` skill (`skills/add-template/`). It will:

1. Detect the shape and delegate — static drops to `ingest-template`, projects to
   `import-project`. (You can also invoke either skill directly on the folder.)
2. Read everything in full and decide the category **itself** from what was actually
   built — a stated category is a claim, not a fact (Rule 4).
3. File the template into `websites/<framework>/<category>/<slug>/`, creating the
   category if needed.
4. Write `META.md`, shoot a thumbnail, inject the source button (thumbnail needs a
   build-and-serve step for framework projects — see the skill).
5. Update the category `INDEX.md` and regenerate root `data.js`.
6. Rename this folder to `_DELETE_ME_<name>/` and ask you to confirm — never deleting it
   itself (Rule 1).

## Before you drop anything here

This repo is public. Strip secrets, and make sure you have the right to redistribute the
design — see `docs/handoff-static.md` and the Provenance section of the README.
