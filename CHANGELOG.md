# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project
does not use semantic versioning — it is a template library, not a released package — so
entries are grouped by date instead.

## [Unreleased]

Open-sourcing the repo and closing the gaps that showed up once it was in use.

### Added

- **Open-source scaffolding** — `LICENSE` (MIT), `README.md`, `CONTRIBUTING.md`, this
  changelog, and `.gitignore`. The repo was public but had none of the files an outsider
  needs to understand, run or contribute to it.
- **Provenance.** Every `META.md` carries an **Origin** row recording whether a template is
  AI-generated or derived from an open-source project. MIT covers the tooling and the
  AI-generated templates; it cannot relicense derived work, so origin travels per template
  rather than as one sentence in the README.
- **Handoff guides** — [`docs/`](docs/README.md), one per framework, for the audience the
  repo was missing: a person who has a site and wants it on the shelf. Skill files are
  execution flows for agents, not instructions for humans.
- **Knowledge base** — [`kb/`](kb/INDEX.md), 31 entries across concepts, architecture,
  schemas, workflows, operations and decisions, with `scripts/build-kb.js` validating
  frontmatter and generating the index and registry. It records *why* things are shaped as
  they are, and links to the operational files rather than restating them.
  New **Rule 9** keeps it current.
- **Pagination** on the showcase — ten per page, prev/next over the filtered set, resetting
  to page one whenever the filter changes.
- **Rainbow "view source" button** on every template, linking to its folder on GitHub. It
  self-hides on any host that is not the showcase, so a template cloned for a client site
  shows nothing and needs no cleanup step — a step someone would eventually forget.
  Injected idempotently by `scripts/add-source-button.js`.
- **Two more ingest shapes.** Static templates may now arrive as bare HTML with no prompt —
  the agent writes `p.md` from the markup and marks it reconstructed — or as multi-file
  folders with separate CSS, JS and assets, moved as a unit.
- **Framework thumbnails.** `shoot-thumbs.js --url --slug` captures an already-running dev
  or preview server, which is the only way to screenshot a project that needs a build.
- **Commandcode support** — `.commandcode/commands/`, frontmatter-free as its loader
  requires.

### Changed

- **Commit messages carry no generated trailers.** All 11 existing commits were rewritten to
  strip `Co-Authored-By` and `Claude-Session`; the rewrite touched messages only and left
  every tree byte-identical.
- **Thumbnails halved**, clipped to 2000px instead of 4000. A card shows a 16:10 window and
  the hover pan covers the rest, so the extra height was bytes nobody saw. Total weight
  520KB → 285KB. The pan recalculated itself from 80% to 60% with no code change, because it
  is derived from the image's own aspect ratio.
- **`generate-site` settles the framework first**, and says so plainly when the requested
  framework has nothing suitable rather than quietly substituting a static template.

### Fixed

- **A deadlock in the ingest pipeline.** `shoot-thumbs.js` and `add-source-button.js` read
  `data.js` to learn what existed, but a `META.md` declares its thumbnail before that file
  exists — so `data.js` could not build until the thumbnail was shot, and the shooter could
  not run until `data.js` built. Both now discover templates by walking `websites/`. This
  would have blocked the first real ingest.

## 2026-08-29

The initial build, in phases.

### Added

- **Structure.** Templates reorganised into `websites/{static,astro,react,nextjs}/`, with
  `incoming/` and `raw_make_websites/` as the two drop zones.
- **Local-dev docs.** `AGENTS.md` as the single source of truth, `RULES.md` with the hard
  rules, and thin shims for the tools that need them. Codex, OpenCode and Antigravity read
  `AGENTS.md` natively, so only Claude Code and Gemini CLI got a shim — each a single
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
