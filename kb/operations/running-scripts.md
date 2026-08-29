---
id: running-scripts
title: Running the scripts
area: operations
updated: 2026-08-29T18:00:00Z
summary: All four scripts, what each needs, and what to expect from them.
related: [data-pipeline, thumbnails, troubleshooting]
---
# Running the scripts

Everything in `scripts/` is plain Node using `fs` and `path` only. **No `npm install`, ever.**
There is no `package.json` at the repo root and that is deliberate: any agent sandbox with
Node can run these on a fresh clone.

## build-data.js

```bash
node scripts/build-data.js          # regenerate data.js
node scripts/build-data.js --check  # validate only, exit 1 on drift
```

Run after **any** change to the shelf. It validates as it goes and refuses to write a broken
catalog.

## build-kb.js

```bash
node scripts/build-kb.js
node scripts/build-kb.js --check
```

Regenerates `kb/INDEX.md` and `kb/registry.json` from entry frontmatter.

## shoot-thumbs.js

```bash
node scripts/shoot-thumbs.js               # only templates with no thumb yet
node scripts/shoot-thumbs.js --all         # re-shoot everything
node scripts/shoot-thumbs.js --only=devlog

# framework projects: capture an already-running dev/preview server
node scripts/shoot-thumbs.js --url=http://localhost:4321 --slug=mysite
```

Needs a locally installed Chrome or Edge and Node 21+ for the built-in `WebSocket`. Set
`CHROME_PATH` if it cannot find one. It starts its own throwaway static server, except in
`--url` mode where it captures whatever you already have running.

## add-source-button.js

```bash
node scripts/add-source-button.js
node scripts/add-source-button.js --check
```

Idempotent — it replaces its own delimited block rather than stacking copies.

## Order, when doing several

```
ingest/import -> shoot-thumbs -> add-source-button -> build-data -> build-kb
```

`build-data.js` last, because it validates everything the earlier steps produced.

The order is not arbitrary. A `META.md` declares its thumbnail before the file exists, so
running `build-data.js` first would fail on a thumbnail that has not been shot yet. For the
same reason `shoot-thumbs.js` and `add-source-button.js` discover templates by walking
`websites/` rather than reading `data.js` — otherwise the two would deadlock, each waiting
on the other.
