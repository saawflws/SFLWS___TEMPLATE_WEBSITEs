---
id: data-js
title: data.js schema
area: schemas
updated: 2026-08-29T15:00:00Z
summary: The generated template array the showcase reads, and why it is never hand-edited.
related: [data-pipeline, showcase, meta-md]
---
# data.js schema

Root `data.js`. **Generated** by `scripts/build-data.js`, overwritten completely on every run.
Never hand-edit it (Rule 3).

## Shape

```js
const FRAMEWORKS = ["static"];

const TEMPLATES = [
  {
    "title":     "IRONFORGE",
    "slug":      "ironforge",
    "path":      "/websites/static/gym/ironforge",
    "framework": "static",
    "category":  "gym",
    "desc":      "A single-location, black-and-orange strength studio landing page...",
    "tags":      ["high-contrast-dark", "neon-orange-accent"],
    "meta":      "/websites/static/gym/ironforge/META.md",
    "fullTitle": "IRONFORGE - Elite Strength & Conditioning Studio",
    "origin":    "AI-generated from p.md",
    "thumb":     "/websites/static/gym/ironforge/thumb.webp"
  }
];
```

## Fields

| Field | Source | Always present |
| --- | --- | --- |
| `title` | Category `INDEX.md`, template column | yes |
| `slug` `path` `framework` `category` | Position on disk | yes |
| `desc` | `META.md` blockquote, else the INDEX summary | yes |
| `tags` | INDEX tags first, then `META.md` style tags | yes |
| `meta` | Derived path | yes |
| `fullTitle` | `META.md` **Name**, when it differs from `title` | no |
| `origin` | `META.md` **Origin** | no |
| `thumb` | `META.md` **Thumbnail**, resolved to a site path | no |

Paths are root-relative because the site is served from a custom domain root.

## Why the title comes from two places

`INDEX.md` holds the short brand name that fits on a card; `META.md` holds the full page
title. Both are useful, so both travel — `title` for display, `fullTitle` for the real thing.

## It loads two ways

Plain script for the browser, with a `module.exports` tail so Node tooling can `require()` it.
That is how `shoot-thumbs.js` knows what to shoot.
