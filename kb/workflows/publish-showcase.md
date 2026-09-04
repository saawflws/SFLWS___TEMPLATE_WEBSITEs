---
id: publish-showcase
title: Publishing the showcase
area: workflows
updated: 2026-09-04T07:00:00Z
summary: A GitHub Actions build assembles the site and builds each framework template in place, then deploys the whole thing to Pages.
related: [showcase, data-pipeline, running-scripts, frameworks]
---
# Publishing the showcase

The showcase is published by **GitHub Actions**
([`.github/workflows/pages.yml`](../../.github/workflows/pages.yml)), not classic
deploy-from-branch. Pushing `main` (touching the served surface) triggers a build that
assembles the whole site and deploys it to Pages. See
[decision 0010](../decisions/0010-host-framework-builds-on-pages.md) for why.

## What the workflow does

1. Runs `node scripts/build-data.js --check` as a fast gate — a drifted catalog fails
   the deploy instead of publishing stale.
2. Assembles `_site/` = the repo's servable content (`index.html`, `data.js`,
   `assets/`, all of `websites/`, `META.md` + `thumb.webp`, `CNAME`), excluding
   `.git`, `.github`, `node_modules`, `dist`; adds a defensive `.nojekyll`.
3. **Builds every framework project in place.** For each
   `websites/<fw>/<cat>/<slug>/` with a `package.json`, it runs `npm ci` + a
   production build with the app's base set to its own subpath, and overlays the
   output onto that folder in `_site/` (replacing the dev `index.html`).
4. Deploys `_site/` with `actions/deploy-pages`.

## What is served

| Path | What |
| --- | --- |
| `/` | `index.html` |
| `/data.js` | The generated template list |
| `/assets/styles/main.css`, `/assets/scripts/main.js` | Showcase styling and behaviour |
| `/websites/static/...` | Static templates, served as-is |
| `/websites/{react,nextjs,astro}/...` | Framework templates, **built in place by CI** |
| `CNAME` | The custom domain |

A card links to a template's shelf `path`. For static templates that path is the real
file; for framework templates the CI build makes that path serve the compiled app —
same link, now backed by a build. There is still one URL per template and no separate
deployment to drift.

## One-time setup

GitHub → **Settings → Pages → Source: "GitHub Actions"** (was "Deploy from a branch").
Until that is set, `deploy-pages` cannot publish. The custom domain persists in
settings and the bundled `CNAME` keeps it.

## The base-path requirement

A framework app built for the domain root emits root-absolute asset URLs that 404 under
a subpath, so each is built with its base = `/websites/<fw>/<cat>/<slug>/`. Vite takes
`--base` on the CLI (handled by the workflow); Astro needs `base` in `astro.config`;
Next needs `output:'export'` + `basePath`. See `AGENTS.md`.

## Before pushing

```bash
node scripts/build-data.js --check
node scripts/build-kb.js --check
```

`data.js` and every `thumb.webp` are generated but **committed** — the assembled site
serves them as-is, and the CI gate re-runs `build-data.js --check`.

## Checking locally

```bash
python -m http.server 8000
```

Serve over HTTP; opening `index.html` as `file://` will not work (it fetches `data.js`
and same-origin assets). Static templates work locally as-is; framework templates only
run after their own `npm run build` (that is what CI does) — see
[thumbnails](../architecture/thumbnails.md).

## The custom-domain assumption

Paths in `data.js` are root-relative (`/websites/...`) because the site is served from a
domain root. If it ever moves to `username.github.io/repo-name`, the `root` value in
`assets/scripts/main.js` is the one knob to turn — and each framework build's base
prefix would need the same repo segment.
