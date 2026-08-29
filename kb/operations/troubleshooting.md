---
id: troubleshooting
title: Troubleshooting
area: operations
updated: 2026-08-29T15:00:00Z
summary: The failures that actually happen, what each means, and how to fix it.
related: [running-scripts, data-pipeline, thumbnails]
---
# Troubleshooting

## build-data.js refuses to write

It is not being difficult — a broken catalog is worse than no update. Each message names the
file to fix.

| Message | Cause |
| --- | --- |
| `has a META.md but is not listed in INDEX.md` | Template filed, index not updated |
| `has an INDEX.md but is not listed under "## <fw>/"` | New category missing from `public-agents/INDEX.md` |
| `declares category "x" but sits in "y"` | `META.md` and the folder disagree |
| `declares thumbnail "x" but no such file` | Thumbnail row added before the image was shot |
| `lists "x" but the folder does not exist` | Index row points at nothing |

**Never** hand-edit `data.js` to silence these. Fix the source and re-run (Rule 3).

## The showcase is blank

Almost always `file://`. The page fetches `data.js` and same-origin assets; serve it over HTTP
instead. Otherwise check the console — a syntax error in `data.js` means it was hand-edited.

## Thumbnails are blank or half-rendered

The capture sweeps the page to fire scroll reveals, but content behind a click or a timer will
not appear. Content that needs the network renders whatever it gets, or its fallback.

If a whole shot is blank, the page probably failed to load: check the template serves at all.

## shoot-thumbs.js cannot find a browser

Set `CHROME_PATH` to a Chromium binary. It also needs Node 21+ for the built-in `WebSocket` —
check `node -v`.

## build-kb.js reports a related entry that does not exist

Either a typo in `related:`, or the entry it points at has not been written yet. Both are
worth knowing about, which is why it is an error rather than a warning.

## Something needs deleting

Rename it `_DELETE_ME_<name>` and ask. Never delete it yourself (Rule 1) — including things
you created minutes ago.
