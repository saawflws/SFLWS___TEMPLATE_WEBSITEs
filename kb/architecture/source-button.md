---
id: source-button
title: The source button
area: architecture
updated: 2026-08-29T16:30:00Z
summary: The rainbow "view source" pill injected into every template, and why it hides itself off the showcase.
related: [template, thumbnails, showcase]
---

# The source button

Every static template carries a small rainbow pill, fixed bottom-right, linking to that
template's folder on GitHub. It exists so anyone looking at a rendered template can reach its
source in one click — otherwise the only route is guessing the path.

Injected by `scripts/add-source-button.js`.

## Why it is inside the template

Templates are served directly from the repo, so there is no wrapper or chrome to put it in.
The button has to live in the page itself.

That creates an obvious problem: a template cloned for a real client site would ship a link
back to this repo.

## Why it hides itself

The injected script reveals the button **only** when the hostname is the showcase domain, a
localhost form, or a `*.github.io` host. Everywhere else it stays `display:none`.

So a clone needs no cleanup step, and — more importantly — no cleanup step that someone can
forget. Templates stay single-file and copyable, which is the property the whole shelf
depends on.

It is hidden by default in CSS and revealed by script, rather than the reverse, so a client
site never flashes it before the script runs.

## Why the block is delimited

The markup sits between `<!-- sflws:source-button:start -->` and `:end`. Re-running the
script **replaces** that block rather than appending, which makes it idempotent — safe to run
after every ingest, and safe to run repeatedly. It also makes removal a one-command operation
(`--remove`).

## The interaction with thumbnails

`shoot-thumbs.js` serves the repo from `127.0.0.1` — a localhost form — so the button *would*
appear in every screenshot. The shooter injects `#sflws-source-btn{display:none!important}`
before capturing. A thumbnail is a picture of the template, not of our chrome.

This is the kind of coupling worth writing down: the two scripts are independent, but the
self-hiding rule that makes clones clean is exactly what made thumbnails dirty.
