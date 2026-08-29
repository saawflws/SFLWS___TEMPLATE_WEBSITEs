# Handing over a static site

**Static** here means: HTML you can open in a browser with no build step. That is most
hand-written pages, most AI-generated pages, and anything exported flat.

Not sure it is static? If there is a `package.json`, it is not — see the
[React](handoff-react.md), [Next.js](handoff-nextjs.md) or [Astro](handoff-astro.md) guide.

## What to hand over

Drop a folder into `incoming/`, named however you like:

```
incoming/mysite/
├── index.html      required
└── p.md            optional — the prompt it was generated from
```

`p.md` is the prompt that produced the page, kept verbatim as provenance. If you have it,
include it: it records intent, which the markup cannot. If you do not have it, that is fine.

## Then run

The `ingest-template` skill, in whichever agent you use:

```
/ingest-template
```

If `incoming/` holds several folders, say which one.

## What the agent does

1. **Reads both files in full** — all of the HTML, not the first screen of it.
2. **Decides the category from the markup.** Your `p.md` is treated as a claim, not a fact.
   The two genuinely drift: a prompt describing a gym has been known to produce a coffee
   roaster. Where they disagree, the markup wins and the disagreement is recorded.
3. **Files it** at `websites/static/<category>/<slug>/`, creating the category if the page is
   a genuinely new kind of site.
4. **Writes `META.md`** — real sections with real anchors, the real colour palette pulled out
   of the CSS, real fonts, verified interaction behaviour, and who the template suits.
5. **Shoots a thumbnail** and regenerates `data.js` so the showcase picks it up.
6. **Renames your folder** `_DELETE_ME_mysite` and asks before deleting anything.

## What you get back

```
websites/static/<category>/<slug>/
├── index.html    yours, unmodified apart from the source button
├── p.md          yours, or reconstructed and marked as such
├── thumb.webp    generated
└── META.md       generated — the file agents actually read
```

Plus a row in the category `INDEX.md` and a card on the showcase.

## What makes a good static template

- **Self-contained.** No dependency on files outside its own folder. CDN links are fine —
  Google Fonts, Tailwind, GSAP are all used by templates already on the shelf.
- **Complete.** Real content, not lorem ipsum. `META.md` describes what a page *contains*, so
  a page of placeholders produces a useless catalog entry.
- **Distinct.** If it is near-identical to something already on the shelf, it adds nothing —
  the whole point of the metadata is telling siblings apart.

## Gotchas

- **Scroll-triggered reveals.** Sections that fade in on scroll are captured correctly — the
  screenshot tool sweeps the page first — but anything that only appears after a click or a
  timer will not be in the thumbnail.
- **Network-dependent content.** A page fetching a live API renders whatever it gets, or its
  fallback. If that matters, say so; it goes in the `META.md` notes.
- **Very long pages** are clipped in the thumbnail. Front-load the interesting part — that is
  what a card shows.
- **Your HTML is not rewritten.** If it is broken, it is cataloged broken and you are told,
  rather than silently fixed.
