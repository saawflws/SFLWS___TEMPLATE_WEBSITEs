---
id: thumbnails
title: How thumbnails are made
area: architecture
updated: 2026-08-29T18:00:00Z
summary: Driving Chrome over the DevTools Protocol with zero dependencies, and why the page is swept before capture.
related: [showcase, running-scripts]
---

# How thumbnails are made

`scripts/shoot-thumbs.js` produces each template's `thumb.webp`. It is dev-only —
`build-data.js` never calls it — and run occasionally rather than on every change.

## Zero dependencies, still

Playwright would mean a ~150MB browser download and an npm install. Instead the script drives
a **locally installed Chrome or Edge** over the Chrome DevTools Protocol, using Node's
built-in `WebSocket` (Node 21+). It also starts a throwaway static server so templates load
over HTTP exactly as GitHub Pages serves them, rather than as `file://` URLs.

## The sweep is the important part

Most templates hide sections until they scroll into view — IntersectionObserver, or GSAP
ScrollTrigger. Capturing immediately would produce a page of blank panels.

So before capturing, the script:

1. Emulates `prefers-reduced-motion: reduce`.
2. Scrolls to the bottom in steps, firing every reveal.
3. Scrolls back to the top.
4. Injects a stylesheet collapsing any remaining animation and transition durations.

Only then does it capture, with `captureBeyondViewport`.

## Clipping

Pages here run 5,000–18,000px tall. A card shows a fraction of that, so captures are clipped
to the top portion and scaled to 640px wide. The result is tens of KB per template rather
than hundreds.

## Framework projects

The script captures a **served URL**. Static templates can be served straight from disk; a
framework project has to be built and served first:

```bash
node scripts/shoot-thumbs.js --url=http://localhost:4321 --slug=mysite
```

That path is deliberately manual. Auto-running `npm install` and a build would be slow,
network-dependent, and a genuinely bad thing for a script to do unprompted inside an agent
sandbox. The script captures what is already running and nothing more.

## Why it does not read data.js

It discovers templates by walking `websites/` directly. Reading `data.js` would deadlock:
a template's `META.md` declares its thumbnail before that thumbnail exists, so `data.js`
cannot build until the thumbnail is shot — and the thumbnail could not be shot until
`data.js` built. Found the first time a new template was run through the pipeline.
