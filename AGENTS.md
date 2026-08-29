# AGENTS.md — SFLWS Template Websites

**Single source of truth for local development in this repo.**
Every other tool-specific instruction file (`CLAUDE.md`, `.gemini/`, `.opencode/`, …) is a
thin shim pointing here. Do not duplicate this content anywhere.

**Read [`RULES.md`](RULES.md) before doing anything.** Those are hard rules, not defaults.
The two that catch people out: never delete (rename to `_DELETE_ME_*` and ask), and never
read `dum/`.

---

## What this repo is

A curated library of hand-built website templates, plus the machinery to catalog them and
serve them to autonomous site-building agents.

It has two jobs:

1. **A shelf.** Templates organised by framework → category → template, each with metadata
   rich enough that an agent can choose one without opening the raw HTML.
2. **A showcase.** A GitHub Pages site at `sflwsts.aasimahmed.com` (root `index.html`) that
   renders the shelf as a browsable grid with live iframe previews.

External agents consume the shelf through a separate, deliberately minimal entry chain in
[`public-agents/`](public-agents/). That chain and this file never mix — see Rule 8.

---

## Folder map

```
.
├── AGENTS.md              ← you are here. Local dev source of truth.
├── RULES.md               ← hard rules. Read first.
├── CLAUDE.md              ← shim → AGENTS.md (Claude Code)
├── GEMINI.md              ← shim → AGENTS.md (Gemini CLI)
├── .claude/skills/        ← pointers into skills/ (Claude Code discovery)
├── .agents/skills/        ← pointers into skills/ (Codex, OpenCode, Antigravity)
├── .gemini/commands/      ← pointers into skills/ (Gemini CLI, TOML)
├── CNAME                  ← sflwsts.aasimahmed.com
├── index.html             ← GitHub Pages showcase. Minimal markup only.
├── data.js                ← GENERATED. Never hand-edit. See Rule 3.
│
├── assets/
│   ├── styles/main.css    ← showcase styles
│   └── scripts/main.js    ← showcase behaviour (reads root data.js)
│
├── scripts/
│   └── build-data.js      ← plain Node, zero dependencies. Regenerates data.js.
│
├── skills/                ← the ONLY place skill logic lives (Rule 7)
│   ├── orchestrator/      ← routes an incoming task to one of the three below
│   ├── ingest-template/   ← one p.md + index.html pair → cataloged template
│   ├── import-project/    ← a full React/Next/Astro folder → cataloged template
│   └── generate-site/     ← a user request → a new website built from a template
│
├── public-agents/         ← external consumer entry chain (Rule 8)
│   ├── AGENTS.md
│   ├── RULES.md
│   └── INDEX.md           ← frameworks → categories. Tiny. Never lists templates.
│
├── incoming/              ← drop zone for single static templates (p.md + index.html)
├── raw_make_websites/     ← drop zone for full framework project folders
│
├── websites/
│   ├── static/            ← single-file HTML templates
│   │   └── <category>/
│   │       ├── INDEX.md   ← lists this category's templates + tags
│   │       └── <template>/
│   │           ├── index.html   ← the template itself, self-contained
│   │           ├── p.md         ← the original generation prompt
│   │           └── META.md      ← the catalog entry agents read
│   ├── astro/             ← empty. Populated via import-project.
│   ├── react/             ← empty. Populated via import-project.
│   └── nextjs/            ← empty. Populated via import-project.
│
└── dum/                   ← DO NOT READ. See Rule 2.
```

### Why there is only one data.js

The build prompt left open whether the generated data should live at the repo root or under
`assets/scripts/`. It lives at the **root**, as a single file, loaded directly by
`index.html` before `main.js`:

```html
<script src="/data.js"></script>
<script src="/assets/scripts/main.js"></script>
```

There is no second copy under `assets/` and no loader indirection. One generated file, one
writer (`scripts/build-data.js`), one reader. Adding an `assets/scripts/data.js` that
re-exports the root file would give the shelf two sources of truth to drift apart, which is
exactly what Rule 3 exists to prevent.

### Why the metadata is layered

An agent picking a template walks: `public-agents/INDEX.md` (which categories exist) →
`websites/<framework>/<category>/INDEX.md` (which templates, with tags) →
`<template>/META.md` (full detail) → raw `index.html` only if `META.md` was not enough.

Each layer is small enough to read cheaply and specific enough to eliminate most candidates.
Keep it that way: `public-agents/INDEX.md` must never grow to list individual templates,
and `META.md` must never become a paraphrase of the HTML.

---

## Skills

Skill logic lives in `skills/<name>/SKILL.md`. Tool-specific mechanisms reference into that
folder rather than copying it (Rule 7).

| Skill | Input | Use when |
| --- | --- | --- |
| `orchestrator` | any task | You're not sure which of the three below applies. It routes. |
| `ingest-template` | a `p.md` + `index.html` pair | A single static template needs cataloging. |
| `import-project` | a folder in `raw_make_websites/` | A full React/Next/Astro project needs importing. |
| `generate-site` | a user request | Someone wants a new site built from the shelf. |

Every skill that changes the shelf ends by running `node scripts/build-data.js`. No exceptions.

---

## Tool support

Root `AGENTS.md` is the single source of truth (Rule 6). Tools that read it natively need
nothing; the rest get a one-line shim that *imports* it rather than copying it.

| Tool | Root file | Shim needed? |
| --- | --- | --- |
| Codex CLI | `AGENTS.md` | No — native, canonical |
| OpenCode | `AGENTS.md` | No — native (`CLAUDE.md` is only its fallback) |
| Antigravity | `AGENTS.md` | No — native as of v1.20.5+ |
| Claude Code | `CLAUDE.md` | Yes — `CLAUDE.md` contains `@AGENTS.md` |
| Gemini CLI | `GEMINI.md` | Yes — `GEMINI.md` contains `@AGENTS.md` |
| Commandcode | *unverified* | None written — see note below |

`@AGENTS.md` is an import directive, not a link: Claude Code and Gemini CLI inline the
target at load time, so the shims stay pointers. A symlink would also work on POSIX but not
on Windows without developer mode, so the import is used instead.

**Commandcode.** Its root-instructions convention could not be verified against official
docs, so no root shim was invented for it (Rule: don't guess). Its skills discovery is
confirmed to fall back to `.agents/skills/`, which this repo provides, so skills reach it
either way. If you confirm what root file it reads, add the shim then — not before.

Skill discovery is wired separately, in the tool-specific reference layer described in
[`skills/README.md`](skills/README.md). Those files point into `skills/`; they never copy it.

---

## Common workflows

### Add a new static template

1. Drop the `p.md` + `index.html` pair into `incoming/<name>/`.
2. Run `ingest-template`.
3. It reads both files, decides the category **itself** (Rule 4 — `p.md` is a claim, not a
   fact), files the template, writes `META.md`, updates the category `INDEX.md`, and
   regenerates `data.js`.
4. Review the generated `META.md`. It is the thing agents actually read; a wrong palette or
   a missing section is a real defect.

### Add a new framework project

1. Drop the whole project folder into `raw_make_websites/`. (Single static template pairs
   go to `incoming/` instead — the split is by shape: anything with a `package.json` is a
   project.)
2. Run `import-project`. It detects the framework, copies to
   `websites/<framework>/<category>/<project>/` excluding `node_modules`, verifies the copy,
   writes `META.md`, updates `INDEX.md`, regenerates `data.js`.
3. The source folder is renamed `_DELETE_ME_<project>/` — never deleted. You confirm.

### Add a new category

Create `websites/<framework>/<category>/` with an `INDEX.md`, then add the category line to
`public-agents/INDEX.md`. Both, or the shelf goes inconsistent and `build-data.js` will
silently skip the new category.

### Regenerate the showcase

```bash
node scripts/build-data.js
```

Zero npm dependencies — `fs` and `path` only, so it runs in any sandbox with no install step.
It reads `public-agents/INDEX.md` → each category `INDEX.md` → each `META.md`, and overwrites
root `data.js` completely.

### Preview the showcase locally

```bash
python -m http.server 8000
# or: npx serve .
```

Then open `http://localhost:8000`. It must be served over HTTP, not opened as a `file://`
URL — the card previews are same-origin iframes and will not measure correctly otherwise.

---

## Conventions

- **Static templates are single-file.** One self-contained `index.html`: inline `<style>`,
  inline `<script>`, and no local asset dependencies. This is what makes the iframe
  previews and the "copy one folder" workflow work. Keep it. External CDNs are allowed and
  used — Google Fonts everywhere, and GSAP/Lenis/Three.js in `forgefitnessstudio` and
  `severinhalbe` — so a template is self-contained on disk, not necessarily offline-capable.
  Each `META.md` records its own external dependencies.
- **Category folder names are `snake_case`** (`boutique_yoga_studio`), template folder names
  are lowercase, no separators (`forgefitnessstudio`).
- **`p.md` is the original generation prompt**, kept verbatim as provenance. Never rewrite it
  to match what was built — if they disagree, the disagreement is the useful information.
  The filename is always exactly `p.md`.
- **Root `index.html` stays minimal markup.** Styles go in `assets/styles/main.css`,
  behaviour in `assets/scripts/main.js`, data in generated `data.js`.
- **Paths in `data.js` are root-relative** (`/websites/static/gym/ironforge`) because the
  site is served from a custom domain root. If that ever changes to
  `username.github.io/repo`, the `root` config in `assets/scripts/main.js` is the one knob
  to turn.

---

## Before you commit

- Did a skill change the shelf? Then `data.js` must have been regenerated in the same change.
- Does `public-agents/INDEX.md` list every category folder that actually exists?
- Does every template folder have a `META.md`?
- Is `dum/` untouched in the diff?
- Is anything flagged `_DELETE_ME_*` still waiting on user confirmation? Say so — do not
  delete it yourself.
