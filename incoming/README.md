# incoming/

**Drop zone for single static templates.** One folder per template, each holding exactly
a `p.md` and an `index.html`:

```
incoming/
  mytemplate/
    p.md          ← the generation prompt
    index.html    ← the self-contained page
```

Then run the `ingest-template` skill (`skills/ingest-template/`). It will:

1. Read both files in full and decide the category **itself** from the markup — `p.md`
   states an intent, and the two drift (Rule 4).
2. File the pair into `websites/static/<category>/<slug>/`, creating the category if needed.
3. Write `META.md`, update the category `INDEX.md`, and regenerate root `data.js`.
4. Rename this folder to `_DELETE_ME_<name>/` and ask you to confirm — never delete it
   itself (Rule 1).

## Not this folder

Full React / Next.js / Astro **project** folders go to `raw_make_websites/` instead, and
are handled by the `import-project` skill. The split is by shape, not by intent:
one HTML file pair here, anything with a `package.json` there.

See `AGENTS.md` at the repo root for the full workflow.
