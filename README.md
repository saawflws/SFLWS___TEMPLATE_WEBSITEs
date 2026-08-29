# SFLWS — Template Websites

A curated shelf of hand-built website templates, structured so that **an AI agent can pick
the right one without opening a single HTML file**.

Every template carries a `META.md` describing its sections, real colour palette, fonts,
motion, and the kind of client it suits. Agents read that metadata, narrow to one template,
and only then touch the markup.

**Live showcase:** [sflwsts.aasimahmed.com](https://sflwsts.aasimahmed.com)
**Licence:** [MIT](LICENSE) · **Templates:** AI-generated or open-source-derived — see [Provenance](#provenance)

---

## What this is

Two things, in one repo:

1. **A shelf.** Templates organised `framework → category → template`, each with metadata
   rich enough to choose from.
2. **A showcase.** A static GitHub Pages site that renders the shelf as a searchable,
   filterable grid.

It exists because picking a template by looking at screenshots does not scale, and because
handing an agent a folder of raw HTML and hoping is worse.

## Quick start

**Browse the templates** — open the [showcase](https://sflwsts.aasimahmed.com), or read
[`public-agents/INDEX.md`](public-agents/INDEX.md) and drill down.

**Build a site from the shelf (as an agent)** — start at
[`public-agents/AGENTS.md`](public-agents/AGENTS.md). That is the whole contract: three
short files, then the template's `META.md`.

**Work on this repo** — start at [`AGENTS.md`](AGENTS.md), and read
[`RULES.md`](RULES.md) first.

**Run it locally:**

```bash
git clone https://github.com/saawflws/SFLWS___TEMPLATE_WEBSITEs.git
cd SFLWS___TEMPLATE_WEBSITEs
python -m http.server 8000     # or: npx serve .
```

Serve it over HTTP rather than opening `index.html` as a `file://` URL — the showcase
fetches `data.js` and same-origin assets.

There is **no build step and no `npm install`**. Every script in `scripts/` is plain Node
using only `fs` and `path`, so it runs in any sandbox as-is.

## Repository layout

```
AGENTS.md            local-dev source of truth   ·  RULES.md   hard rules
public-agents/       the contract for outside agents consuming the shelf
docs/                human guides: how to hand a project to the agents
kb/                  knowledge base — concepts, schemas, decisions, history
skills/              the four skills, and the only place their logic lives
scripts/             build-data.js · shoot-thumbs.js · build-kb.js
websites/            static/ · astro/ · react/ · nextjs/     ← the shelf
incoming/            drop zone: single static templates
raw_make_websites/   drop zone: full framework projects
index.html           the showcase        ·  data.js   GENERATED — never hand-edit
```

A template folder looks like this:

```
websites/static/gym/ironforge/
├── index.html    the template, self-contained
├── p.md          the prompt it was generated from
├── thumb.webp    showcase screenshot (generated)
└── META.md       the catalog entry agents actually read
```

## Using the shelf

Agents walk four layers, each cheap enough to read and specific enough to eliminate most
candidates:

```
public-agents/INDEX.md    which categories exist                    (tiny)
  └─ <category>/INDEX.md  which templates, with tags + a chooser     (short)
      └─ <t>/META.md      sections, palette, fonts, who it suits     (one page)
          └─ index.html   only if META.md was not enough             (large)
```

If you find yourself opening HTML to *compare* templates, you skipped a layer.

## Adding templates

Two drop zones, split by shape — not by intent:

| You have | Drop it in | Skill |
| --- | --- | --- |
| A static template (`index.html`, optionally with `p.md` and assets) | `incoming/` | [`ingest-template`](skills/ingest-template/SKILL.md) |
| A full React / Next.js / Astro project (has a `package.json`) | `raw_make_websites/` | [`import-project`](skills/import-project/SKILL.md) |

The skill reads the markup, decides the category **itself** rather than trusting any stated
one, writes `META.md`, updates the category index, shoots a thumbnail, and regenerates
`data.js`.

Step-by-step guides per framework live in `docs/`.

## Scripts

```bash
node scripts/build-data.js          # regenerate data.js from INDEX.md + META.md
node scripts/build-data.js --check  # report drift, write nothing
node scripts/shoot-thumbs.js        # screenshot templates missing a thumb.webp
node scripts/build-kb.js            # regenerate the kb/ registry
```

`data.js` is a **generated artifact**. Never hand-edit it — fix the `INDEX.md` / `META.md`
it is built from and re-run the script.

`shoot-thumbs.js` needs no npm install either: it drives a locally installed Chrome or Edge
over the DevTools Protocol using Node's built-in `WebSocket` (Node 21+).

## Provenance

Templates here come from two places, and each `META.md` records which in its **Origin** row:

- **AI-generated** — produced from a written prompt, kept verbatim as `p.md` alongside the
  template. This is the origin of every template currently on the shelf.
- **Open-source-derived** — adapted from an existing open-source project. Those record the
  upstream project and its licence, which continues to apply to that template regardless of
  this repo's licence.

MIT covers the tooling, the metadata, and the AI-generated templates. It does not and cannot
relicense derived work — check a template's Origin row before shipping it commercially.

The templates use third-party fonts and libraries over CDN (Google Fonts, GSAP, Lenis,
three.js, Tailwind), each under its own licence. Nothing is vendored into this repo.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). The short version: never delete anything (flag it
`_DELETE_ME_*` and ask), never hand-edit `data.js`, and never trust a `p.md` about what a
template actually is — read the markup.

## Licence

[MIT](LICENSE) © 2026 SFLWS. See [Provenance](#provenance) for the caveat on derived
templates.
