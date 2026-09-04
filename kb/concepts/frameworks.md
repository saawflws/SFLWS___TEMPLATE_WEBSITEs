---
id: frameworks
title: Frameworks on the shelf
area: concepts
updated: 2026-09-04T07:00:00Z
summary: static, astro, react and nextjs — what each means here, and why detection order matters.
related: [the-shelf, template, publish-showcase]
---

# Frameworks on the shelf

Four, and the distinction is **mechanical, not stylistic** — it is about how a template is
served and built.

| Framework | What it is | Served |
| --- | --- | --- |
| `static` | HTML that runs with no build step | Directly from disk |
| `astro` | An Astro project | After a build |
| `react` | React with no framework on top (Vite, CRA) | After a build |
| `nextjs` | A Next.js project | After a build |

## Detection order matters

Next.js and Astro projects **both depend on React**. Checking for `react` first would misfile
every one of them. The order is always:

1. `next` in dependencies → `nextjs`
2. `astro` in dependencies → `astro`
3. `react`, with neither of the above → `react`
4. No `package.json` → `static`

Confirm against the config files on disk rather than trusting `package.json` alone.

## Why the split has teeth

This is not bookkeeping. A `static` template can be served, screenshotted and copied in one
step. A framework project needs an install, a build, and a running server before anything can
even look at it. That single difference drives the two drop zones, the two ingest skills, and two separate
thumbnail paths.

For the **live site**, that build is automated: the Pages workflow builds each framework
template in place so its showcase card opens a working app rather than a dev entry (decision
[0010](../decisions/0010-host-framework-builds-on-pages.md),
[publish-showcase](../workflows/publish-showcase.md)).

## Framework is the first filter when choosing

A template in the wrong framework is unusable at any price, so it prunes candidates faster
than anything else — which is why it sits above category in the shelf and why
`generate-site` settles it before mapping the request to a category.

When the requested framework has nothing in the needed category, the honest answer is to say
so and offer the alternatives. Quietly substituting a static template for a requested Astro
one produces work the user cannot use.
