---
id: publish-showcase
title: Publishing the showcase
area: workflows
updated: 2026-08-29T15:00:00Z
summary: What GitHub Pages serves, what has to be regenerated first, and how to check it locally.
related: [showcase, data-pipeline, running-scripts]
---
# Publishing the showcase

The showcase is plain GitHub Pages: no build, no CI, no deploy step. Pushing `main` publishes
it, which makes the pre-push checks the whole safety net.

## What is served

| Path | What |
| --- | --- |
| `/` | `index.html` |
| `/data.js` | The generated template list |
| `/assets/styles/main.css`, `/assets/scripts/main.js` | Showcase styling and behaviour |
| `/websites/...` | Every template, served as-is |
| `CNAME` | The custom domain |

Because templates are served directly from the repo, **a card links to the real file**. There
is no separate deployment of the templates and no chance of the two drifting.

## Before pushing

```bash
node scripts/build-data.js --check
node scripts/build-kb.js --check
```

`data.js` and every `thumb.webp` are generated but **committed**, because Pages serves the
repo as-is. Forgetting to regenerate `data.js` publishes a stale catalog, which is exactly
what `--check` is for.

## Checking locally

```bash
python -m http.server 8000
```

Serve over HTTP. Opening `index.html` as a `file://` URL will not work — the page fetches
`data.js` and same-origin assets.

## The custom-domain assumption

Paths in `data.js` are root-relative (`/websites/...`) because the site is served from a
domain root. If it ever moves to `username.github.io/repo-name`, the `root` value in
`assets/scripts/main.js` is the one knob to turn.
