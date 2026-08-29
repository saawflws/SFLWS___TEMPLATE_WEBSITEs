# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project
does not use semantic versioning — it is a template library, not a released package — so
entries are grouped by date instead.

## [Unreleased]

### Added

- `LICENSE` (MIT), `README.md`, `CONTRIBUTING.md`, this changelog, and `.gitignore` — the
  repo is now genuinely open source rather than merely public.
- **Origin** row in every `META.md`, recording whether a template is AI-generated or derived
  from an open-source project, and carried through into `data.js`.

### Changed

- Commit messages no longer carry `Co-Authored-By` or `Claude-Session` trailers. All 11
  existing commits were rewritten to strip them; the rewrite touched messages only and left
  every tree byte-identical.

## 2026-08-29

The initial build, in phases.

### Added

- **Structure.** Templates reorganised into `websites/{static,astro,react,nextjs}/`, with
  `incoming/` and `raw_make_websites/` as the two drop zones.
- **Local-dev docs.** `AGENTS.md` as the single source of truth, `RULES.md` with the eight
  hard rules, and thin shims for the tools that need them. Codex, OpenCode and Antigravity
  read `AGENTS.md` natively, so only Claude Code and Gemini CLI got a shim — each a single
  `@AGENTS.md` import rather than a copy.
- **External entry chain.** `public-agents/` — a deliberately minimal contract for agents
  consuming the shelf, kept strictly separate from the local-dev docs.
- **Metadata.** `META.md` for all nine static templates, each read out of the real markup:
  true section lists with real anchors, real CSS custom properties, verified interaction
  behaviour, and explicit "best suited for" / "not a good fit for" guidance. Category
  `INDEX.md` files with a chooser table for telling siblings apart.
- **Data pipeline.** `scripts/build-data.js` — plain Node, zero dependencies — walks
  `public-agents/INDEX.md` → category `INDEX.md` → `META.md` and regenerates root `data.js`.
  It validates as it goes and refuses to write on inconsistency.
- **Skills.** `orchestrator`, `ingest-template`, `import-project` and `generate-site`, with
  logic in `skills/` only and tool-specific discovery paths holding pointers, never copies.
- **Thumbnails.** `scripts/shoot-thumbs.js` — drives a local Chrome or Edge over the DevTools
  Protocol using Node's built-in `WebSocket`. No npm install, no Playwright. Sweeps each page
  before capturing so scroll-revealed sections are actually visible.

### Changed

- **The showcase renders static screenshots instead of live iframes.** Each card previously
  embedded a running copy of the site, so opening the page booted nine complete websites at
  once — a WebGL scene, two `requestAnimationFrame` loops that never stop, and three runtime
  Tailwind compilations, all in the background of a page nobody was looking at, and getting
  linearly worse with every template added. The hover pan is preserved as a CSS transform on
  a single composited image layer.
- Root `index.html` slimmed from 22.7KB to 2.7KB: styles moved to `assets/styles/main.css`,
  behaviour to `assets/scripts/main.js`, and the hand-maintained `LINKS[]` array replaced by
  the generated `data.js`.
- `severinhalbe`'s prompt file renamed `prompt.md` → `p.md` so the shelf has one filename.

### Fixed

- `build-data.js` silently skipped a category folder that existed on disk but was missing
  from `public-agents/INDEX.md`. Found by running a new category through the ingest flow
  during validation; it is now a hard error.
- The markdown parser stripped `_` as emphasis, mangling snake_case category slugs
  (`boutique_yoga_studio` → `boutiqueyogastudio`) and producing false category mismatches.
- Removed `layoutFrames()`, which forced a synchronous layout across every card on each
  iframe load, every filter keystroke and every resize frame.

### Validated

- Both write-path skills were run end to end against real fixtures. The ingest fixture's
  `p.md` deliberately described a gym while its markup was a coffee roaster; the flow
  classified from the markup and recorded the disagreement. The import fixture carried
  `node_modules/`, `dist/` and `.env.local`, all correctly excluded, with `.gitignore`
  preserved and the source only flagged `_DELETE_ME_` after a verified file-count match.
