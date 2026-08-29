# SFLWS Template Website System — Full Build Prompt

**Repo:** https://github.com/saawflws/SFLWS___TEMPLATE_WEBSITEs
**Executor:** Claude Code (this build), consumed later by Claude Code / Codex / OpenCode / Antigravity / Commandcode / Gemini for local dev, and by an external autonomous website-building agent system for generation.

Work through the phases below **in order**. After each phase, commit with the exact message given (`PHASE N COMMIT: <summary>`). Do not skip ahead. Do not combine phases into one commit. If something discovered mid-phase contradicts an instruction below, stop and ask before proceeding — do not silently improvise around a hard rule.

---

## GLOBAL HARD RULES (apply to every phase, every skill, forever)

1. **Never delete anything automatically.** To remove a file/folder, rename it to `_DELETE_ME_<originalname>/` (or `_DELETE_ME_<filename>` for a single file) and explicitly ask the user to confirm before any real deletion happens. No exceptions, no "obviously safe" cases.
2. **Never read the root folder `dum/`** unless the user explicitly asks about something in it in that specific message — and even then, read only the exact file(s) asked for, never the whole folder.
3. **`data.js` at repo root is a generated artifact only.** It is produced solely by `scripts/build-data.js`. Never hand-edit it. If it looks wrong, fix the source `INDEX.md`/`META.md` and regenerate.
4. **Ingestion must independently verify classification.** When cataloging a new template, read both `p.md` AND `index.html` yourself and confirm the category — never trust `p.md`'s stated category blindly.
5. **Generation ambiguity → ask, don't guess.** If a site-build request has enough info (category + enough constraints), proceed automatically (auto-pick template, or use the one the user names). If ambiguous or missing key info, stop and ask clarifying questions first.
6. **`AGENTS.md` at repo root is the single source of truth** for local dev instructions. Every tool-specific file (`CLAUDE.md`, `.opencode/*`, `.gemini/*`, etc.) is a thin shim that redirects to `AGENTS.md` — never duplicates its content.
7. **All skills live in one place: `skills/`.** Tool-specific skill/plugin/command mechanisms reference into `skills/`, they never own a separate copy of the logic.
8. **Two entry chains, never mixed:** local dev docs (`AGENTS.md`, `CLAUDE.md`, `RULES.md` at root) vs. external consumer docs (`public-agents/AGENTS.md`, `RULES.md`, `INDEX.md`). An external agent should never need to read the root local-dev files, and vice versa.

---

## TARGET FINAL STRUCTURE

```
SFLWS___TEMPLATE_WEBSITEs/
├── AGENTS.md                      # local dev source of truth
├── CLAUDE.md                      # shim → points to AGENTS.md
├── RULES.md                       # local dev hard rules (includes global rules above)
├── CNAME
├── index.html                     # GitHub Pages showcase site, minimal markup
├── data.js                        # AUTO-GENERATED, never hand-edited
│
├── assets/
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   ├── main.js
│   │   └── data.js (reads generated root data.js, or root data.js is this file — decide during Phase 5 based on what's cleanest, keep single source)
│   └── pages/                     # only if/when root grows beyond one page
│
├── scripts/
│   └── build-data.js              # plain Node, zero dependencies
│
├── skills/
│   ├── orchestrator/
│   ├── ingest-template/
│   ├── import-project/
│   └── generate-site/
│
├── public-agents/                 # external agent entry chain
│   ├── AGENTS.md
│   ├── RULES.md
│   └── INDEX.md                   # lists frameworks → categories, explicit paths, no ambiguity
│
├── raw_make_websites/             # drop zone for full React/Next/Astro project folders (input to import-project skill)
│
├── websites/
│   ├── static/
│   │   ├── gym/
│   │   │   ├── INDEX.md
│   │   │   ├── ironforge/META.md + files
│   │   │   ├── ironhouse/META.md + files
│   │   │   └── forgefitnessstudio/META.md + files
│   │   ├── boutique_yoga_studio/
│   │   │   ├── INDEX.md
│   │   │   ├── morrow/META.md + files
│   │   │   └── stillwater/META.md + files
│   │   ├── designers_portfolio/
│   │   │   ├── INDEX.md
│   │   │   ├── junoharada/META.md + files
│   │   │   └── severinhalbe/META.md + files
│   │   ├── programmerblog/
│   │   │   ├── INDEX.md
│   │   │   └── devlog/META.md + files
│   │   └── techYouTubers_home/
│   │       ├── INDEX.md
│   │       └── killburn/META.md + files
│   ├── astro/                     # empty for now, populated later via import-project
│   ├── react/                     # empty for now
│   └── nextjs/                    # empty for now
│
└── dum/                           # UNTOUCHED. Never read unless explicitly asked. Do not move, catalog, or reference.
```

---

## PHASE 0 — Research & Discovery (no repo changes)

Research how each of these tools natively handles skills, plugins, commands, and cross-file references, so later shim/skill design matches real conventions instead of assumptions:
- Claude Code
- Codex
- OpenCode
- Antigravity
- Commandcode
- Gemini (CLI/agent tooling)

For each, determine: what root file it auto-loads (if any), how it discovers skills/plugins, expected folder conventions, and any frontmatter/config format required.

Produce a findings summary (can be a scratch note, not committed to repo) that will inform Phase 2's shim design. Ask the user before finalizing shim formats if any tool's convention is unclear or conflicting.

**No commit for this phase** (no repo changes yet).

---

## PHASE 1 — Repo Reorganization

1. Create `websites/static/`, `websites/astro/`, `websites/react/`, `websites/nextjs/` (the latter three empty, add a `.gitkeep` or short `README.md` explaining they're populated via the `import-project` skill).
2. Move existing template categories into `websites/static/`:
   - `gym/` → `websites/static/gym/` (contains `ironforge/`, `ironhouse/`, `forgefitnessstudio/`)
   - `boutique_yoga_studio/` → `websites/static/boutique_yoga_studio/` (contains `morrow/`, `stillwater/`)
   - `designers_portfolio/` → `websites/static/designers_portfolio/` (contains `junoharada/`, `severinhalbe/`)
   - `programmerblog/` → `websites/static/programmerblog/` (contains `devlog/`)
   - `techYouTubers_home/` → `websites/static/techYouTubers_home/` (contains `killburn/`)
3. Do **not** touch `dum/`, root `index.html`, or `CNAME` — these stay exactly where they are.
4. Verify nothing is broken by the move (check for any relative paths inside template files that assumed the old location — fix if found).

**PHASE 1 COMMIT: reorganize templates into websites/{static,astro,react,nextjs} structure**

---

## PHASE 2 — Local Dev Docs & Tool Shims

1. Write root `AGENTS.md` — full local dev instructions: repo purpose, folder map, hard rules (reference `RULES.md`), how to use `skills/`, workflow for adding new templates/projects.
2. Write root `RULES.md` — the global hard rules listed above, in full, as the canonical local copy.
3. Write root `CLAUDE.md` as a shim: brief note that says "See AGENTS.md — this file exists only because Claude Code looks for CLAUDE.md by convention. All real instructions live in AGENTS.md."
4. Based on Phase 0 research, create equivalent thin shims for the other tools (Codex, OpenCode, Antigravity, Commandcode, Gemini) in whatever file/folder convention each expects — all pointing back to `AGENTS.md`. Ask the user to confirm exact filenames/paths if Phase 0 research left any tool's convention ambiguous.
5. Create `skills/` folder with four empty subfolders: `orchestrator/`, `ingest-template/`, `import-project/`, `generate-site/` (implemented in Phase 6). Add a short root `skills/README.md` explaining this is the single source of truth and tool-specific mechanisms reference into it.

**PHASE 2 COMMIT: add local dev docs (AGENTS.md, RULES.md) and tool shims pointing to them**

---

## PHASE 3 — External Agent Entry Chain

1. Create `public-agents/AGENTS.md` — lightweight, portable instructions for an external agent consuming this repo as a template library. No local dev noise. Explains: read `public-agents/RULES.md` first, then `public-agents/INDEX.md`, then drill into the relevant `websites/<framework>/<category>/INDEX.md`, then the specific template's `META.md`, and only open raw files if `META.md` isn't enough.
2. Create `public-agents/RULES.md` — the subset of global hard rules relevant to an external consuming agent (never invent a template not listed, always check `META.md` before opening raw files, strict-clone vs loose-reference decision logic, ask-if-ambiguous rule for generation).
3. Create `public-agents/INDEX.md` — explicit per-framework category listing, direct paths, no ambiguity:
   ```
   static/
     - gym → websites/static/gym/INDEX.md
     - boutique_yoga_studio → websites/static/boutique_yoga_studio/INDEX.md
     - designers_portfolio → websites/static/designers_portfolio/INDEX.md
     - programmerblog → websites/static/programmerblog/INDEX.md
     - techYouTubers_home → websites/static/techYouTubers_home/INDEX.md
   astro/    (empty for now)
   react/    (empty for now)
   nextjs/   (empty for now)
   ```
   This file must stay tiny — categories only, never individual templates.

**PHASE 3 COMMIT: add public-agents/ external entry chain (AGENTS.md, RULES.md, INDEX.md)**

---

## PHASE 4 — Category & Template Metadata

For each existing category under `websites/static/`, create `INDEX.md` listing its templates with short tags/summary (this file grows over time as more templates are ingested).

For each existing template, create `META.md` covering:
- Name, category, framework (static)
- Style tags (e.g. dark/aggressive/minimal/playful)
- Section list (what the page actually contains, e.g. hero, pricing, testimonials)
- Color palette (hex values pulled from the actual CSS)
- Font choices
- "Best suited for" — client/brand types this template fits
- Note that agents may still open the raw HTML/CSS/JS for finer detail beyond what META.md covers

Templates needing `META.md`: `ironforge`, `ironhouse`, `forgefitnessstudio`, `morrow`, `stillwater`, `junoharada`, `severinhalbe`, `devlog`, `killburn`.

**PHASE 4 COMMIT: add category INDEX.md and template META.md for all existing templates**

---

## PHASE 5 — Showcase Site Data Pipeline

1. Write `scripts/build-data.js` — plain Node, **zero npm dependencies** (only `fs`/`path`), so it always runs inside any agent sandbox without an install step:
   - Read `public-agents/INDEX.md` → get frameworks + categories.
   - For each category, read its `INDEX.md` → get template list + tags/summary.
   - For each template, pull key fields from its `META.md` (name, tags, best-suited-for, thumbnail path if present) — just enough for a showcase card.
   - Flatten into one structure, write it to root `data.js` as `const TEMPLATES = [...]`, overwriting completely each run.
2. Wire root `index.html` + `assets/scripts/main.js` to read from root `data.js` and render the showcase cards.
3. Move any inline styles/scripts currently sitting in the 24K root `index.html` out into `assets/styles/main.css` and `assets/scripts/main.js` — keep `index.html` itself minimal markup only.
4. Run `build-data.js` once now to produce the first real `data.js` from Phase 4's metadata, and verify the showcase site renders correctly.

**PHASE 5 COMMIT: add build-data.js pipeline, generate data.js, slim down root index.html**

---

## PHASE 6 — Skills Implementation

Implement each skill as instructions/logic inside its `skills/<name>/` folder (format per Phase 0 findings for whichever tool will execute it first — likely Claude Code).

### `skills/orchestrator/`
Tiny router: given an incoming task, decide whether it's an ingestion task (single template drop), an import task (full framework project folder), or a generation task (new site request) — then hand off to the matching skill below.

### `skills/ingest-template/`
Input: a `p.md` + `index.html` pair (location TBD by user — likely a drop folder, confirm with user if not already specified).
Flow:
1. Read both `p.md` and `index.html` directly.
2. Independently determine category (do not blindly trust `p.md`'s claim — Global Rule 4).
3. Decide: fits an existing category folder under `websites/static/<category>/`, or needs a new category folder created.
4. File the template into the correct location.
5. Generate its `META.md` (same fields as Phase 4).
6. Update the relevant `websites/static/<category>/INDEX.md`.
7. Run `scripts/build-data.js` to regenerate root `data.js` — **non-optional last step, every time.**

### `skills/import-project/`
Input: a full project folder inside `raw_make_websites/` (React, Next.js, or Astro).
Flow:
1. Read the project to detect framework and structure.
2. Copy everything into the correct `websites/<framework>/<category>/<project>/` location, **excluding `node_modules`**.
3. Verify the copy succeeded (file count / integrity check).
4. Only after verified success: rename the original source folder in `raw_make_websites/` to `_DELETE_ME_<projectname>/` and ask the user to confirm before any real deletion (Global Rule 1 — never auto-delete).
5. Generate `META.md` for the new template and update the relevant category `INDEX.md` (create the category if new).
6. Run `scripts/build-data.js` as the final step.

### `skills/generate-site/`
Input: a user request for a new website.
Flow:
1. Read `public-agents/AGENTS.md` → `public-agents/RULES.md` → `public-agents/INDEX.md`.
2. If the user named a specific template, use it. Otherwise auto-pick the best match by scanning the relevant category `INDEX.md` tags, narrowing candidates, then confirming fit via the specific template's `META.md`.
3. Determine mode: **strict-clone** (reuse structure/sections, reskin content) or **loose-reference** (style/vibe only, new layout/sections) — from explicit user instruction if given, otherwise pick the more sensible default and state the assumption.
4. If the request lacks enough info to proceed confidently (category unclear, no style direction, contradictory asks), **stop and ask clarifying questions** instead of guessing (Global Rule 5).
5. Build the site accordingly.

**PHASE 6 COMMIT: implement orchestrator, ingest-template, import-project, generate-site skills**

---

## PHASE 7 — Validation & Dry-Run Testing

1. Create a throwaway test `p.md` + `index.html` pair and run it through `ingest-template` — confirm it lands in the right category, `META.md` is generated correctly, category `INDEX.md` updates, and `data.js` regenerates. Remove the test artifacts afterward (via the delete-flag rule, confirm with user).
2. Create a throwaway minimal React project folder in `raw_make_websites/` and run it through `import-project` — confirm framework detection, correct copy destination, `node_modules` exclusion, verification step, and that the original is renamed to `_DELETE_ME_...` rather than deleted.
3. Confirm `dum/` was not read or referenced anywhere in the above (Global Rule 2).
4. Confirm root `data.js` still matches the current true state of all `INDEX.md`/`META.md` files (no drift).
5. Confirm GitHub Pages still serves `index.html` correctly with the new `assets/` structure.

**PHASE 7 COMMIT: validate ingestion, import, and delete-flag flows with test fixtures**

---

## PHASE 8 — Final Review & Handoff

1. Full read-through of `AGENTS.md`, `RULES.md`, `public-agents/*`, all category `INDEX.md`, and a sample of `META.md` files for consistency and accuracy.
2. Confirm all tool shims (Phase 2) correctly point to `AGENTS.md` and nothing is duplicated.
3. Summarize the final structure and workflow back to the user for sign-off.

**PHASE 8 COMMIT: final structure review and documentation pass**

---

*End of build prompt. Do not deviate from the global hard rules at any phase, even if a later phase seems to suggest a shortcut around them.*