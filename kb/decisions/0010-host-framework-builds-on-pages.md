---
id: 0010-host-framework-builds-on-pages
title: 0010 — Build and host framework templates on Pages via Actions
area: decisions
updated: 2026-09-04T07:00:00Z
summary: A GitHub Actions build compiles each framework project in place, so its showcase card opens a working app instead of a dev entry.
related: [publish-showcase, showcase, frameworks]
---

# 0010 — Build and host framework templates on Pages via Actions

**Date:** 2026-09-04 · **Status:** accepted

## Context

Classic GitHub Pages "deploy from branch" serves the repo as-is. That is exactly
right for `static` templates — a card links to `/websites/static/.../index.html`
and the browser gets the real, working file.

It breaks framework templates. A React project's committed `index.html` is the Vite
**dev** entry (`<script src="/src/main.jsx">`); the production build lives in a
git-ignored `dist/` that nothing builds. So the `cinematic` and `vanguard` cards
linked to a page that cannot run in a browser. As soon as `websites/react/` had
entries, the "a card links to the real file" invariant was quietly false for them.

## Decision

GitHub Pages moves from deploy-from-branch to a **GitHub Actions build+deploy**
([`.github/workflows/pages.yml`](../../.github/workflows/pages.yml)). The workflow
assembles the whole site (static showcase + static templates + built framework apps)
and deploys it as one Pages artifact. Each framework project is built **in place at
its own shelf path** with its base set to that subpath
(`/websites/<fw>/<cat>/<slug>/`), and the output overlaid onto that folder — so the
existing card link opens the built app with no change to `data.js` or `main.js`.

## Why this is not [0003](0003-static-thumbnails-over-iframes.md) again

0003 rejected embedding **nine live templates as iframes in one showcase page** — a
WebGL context, Lenis rAF loops and runtime Tailwind compilers all running at once
behind a page nobody was looking at. This is the opposite shape: the showcase page
stays nine static thumbnails, and a template only runs when a visitor **navigates to
it** (one app per page load, on click). Nothing here re-embeds live templates in the
grid; 0003 stands.

## Alternatives considered

**A separate `/live/` subtree with a hosted-URL field in `data.js`.** Rejected: it
means editing the generator (`build-data.js`, Rule 3) and `main.js`, and it splits a
template's URL from its shelf path. Building in place needs zero showcase changes and
keeps one path per template.

**Commit `dist/` so classic Pages serves it.** Rejected: Rule 1 and the import
workflow deliberately exclude build output; committing generated bundles is exactly
what the repo avoids. The build belongs in CI, not in git.

## Consequences

- The Pages **Source** must be switched to "GitHub Actions" once, by hand, in repo
  settings; the bundled `CNAME` (and a defensive `.nojekyll`) keep the custom domain.
- The base-path is the one knob: Vite takes `--base` on the CLI (works today); Astro
  needs `base` in `astro.config`; Next needs `output:'export'` + `basePath`. These
  are authoring requirements recorded in `AGENTS.md`.
- Framework cards now open real, running apps — but their runtime depends on whatever
  the template fetches at load (hero videos, third-party fonts, embeds).
- The workflow runs `build-data.js --check` as a fast gate, so a drifted catalog
  fails the deploy rather than publishing stale.
