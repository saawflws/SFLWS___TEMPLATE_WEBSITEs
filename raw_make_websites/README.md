# raw_make_websites/

**Drop zone.** Put complete, unprocessed website project folders here — React, Next.js,
or Astro projects straight out of a generator or an export.

```
raw_make_websites/
  my-cool-astro-site/     ← drop the whole project folder here
    package.json
    src/
    node_modules/         ← fine to leave; it is excluded on import
```

Then run the `import-project` skill (`skills/import-project/`). It will:

1. Detect the framework from `package.json` / config files.
2. Copy the project to `websites/<framework>/<category>/<project>/`, **excluding `node_modules`**.
3. Verify the copy (file count + integrity).
4. Only after a verified copy, rename the folder here to `_DELETE_ME_<project>/`
   and ask you to confirm before anything is really deleted.
5. Generate `META.md`, update the category `INDEX.md`, and regenerate root `data.js`.

**Nothing in this folder is ever deleted automatically.** See `RULES.md` (Rule 1).

Single-file static templates (`p.md` + `index.html`) do **not** belong here — those go
through the `ingest-template` skill instead.
