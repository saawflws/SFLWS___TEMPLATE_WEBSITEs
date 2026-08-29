---
id: provenance
title: Provenance and licensing
area: concepts
updated: 2026-08-29T15:00:00Z
summary: Where templates come from, why origin is recorded per template, and what MIT cannot cover.
related: [template, meta-md]
---

# Provenance and licensing

This is a public, MIT-licensed repo full of website designs. Where each design came from is a
licensing question, not a curiosity, so every `META.md` carries an **Origin** row.

## The two origins

**AI-generated** — produced from a written prompt, kept verbatim as `p.md`. Every template
currently on the shelf. MIT covers it.

**Open-source-derived** — adapted from an existing open-source project. The upstream project
and its licence are named, and **that licence continues to apply**.

## What the repo licence does not do

MIT covers the tooling, the metadata, and the AI-generated templates.

It **cannot relicense derived work**. An MIT `LICENSE` at the repo root does not convert a
GPL-derived template into an MIT one. That is exactly why origin travels per template instead
of being one sentence in the README.

## Third-party assets

Templates load fonts and libraries over CDN — Google Fonts, Tailwind, GSAP, Lenis, three.js —
each under its own licence. Nothing is vendored, so nothing here redistributes them.

## The practical rule

Before shipping a template commercially, read its Origin row. Before contributing one, be
able to fill that row in honestly.
