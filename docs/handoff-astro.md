# Handing over a Astro project

A **Astro project** has a `package.json` and a build step. It goes to
`raw_make_websites/`, not `incoming/`.

## What to hand over

Drop the **whole project folder** in:

```
raw_make_websites/my-project/
├── package.json        required — this is what identifies the framework
├── astro.config.mjs
├── src/pages/index.astro
└── node_modules/       fine to leave; excluded on import
```

Leave `node_modules/` alone — do not spend time deleting it. The import excludes it, along
with build output and `.env*` files.

## Then run

```
/import-project
```

If `raw_make_websites/` holds several projects, say which one.

## What the agent does

1. **Detects the framework** from `package.json`, confirmed against the files on disk:
   `astro` in dependencies, plus `astro.config.{mjs,ts}` and `src/pages/*.astro`
2. **Decides the category** from what the project actually builds — the main page component,
   the site config, the nav — not from the folder name or the README's claim. Categories are
   shared across frameworks, so a Astro gym site lands in `websites/astro/gym/`, matching the
   existing `gym` name exactly.
3. **Copies it** to `websites/astro/<category>/<project>/`, excluding `node_modules/`,
   build output, `.git/` and `.env*`. Lockfiles and `.gitignore` are kept.
4. **Verifies the copy** by file count and by checking `package.json` parses and the entry
   directory is present. If verification fails it stops and tells you — your original is
   still the only copy.
5. **Only then** renames your folder `_DELETE_ME_my-project` and asks before deleting.
6. **Writes `META.md`**, updates the category `INDEX.md`, and regenerates `data.js`.

## What you get back

```
websites/astro/<category>/<project>/
├── package.json
├── astro.config.mjs
├── src/ …           your source, intact
└── META.md          generated — includes the stack, install and dev commands
```

## Thumbnails need a build

The screenshot tool captures a **served URL**. A static page can be served straight from
disk; a Astro project cannot — it has to be built and served first:

```bash
cd websites/astro/<category>/<project>
npm install
npm run build
npm run preview        # note the URL it prints
```

Leave that server running, and from the repo root:

```bash
node scripts/shoot-thumbs.js --url=http://localhost:4321 --slug=<project>
```

Then add the `Thumbnail` row to `META.md` — **after** the file exists. If you skip all of
this the card falls back to a typographic tile and nothing breaks, but never add a
`Thumbnail` row pointing at a file that is not there; `build-data.js` treats that as a hard
error and refuses to write.

## Gotchas

- **Secrets.** `.env*` files are excluded on import, but a key hardcoded in a component
  is copied like any other source. Check before handing over — this repo is public.
- **Environment variables.** If the project needs them to run, say so; it goes in the
  `META.md` notes so nobody wastes an afternoon on a blank page.
- **Node version.** If it only builds on a specific Node, record that too.
- **External services.** Anything calling a live API, CMS or database should be noted —
  a template that cannot run standalone is much less useful and people should know upfront.
- **Integrations.** React, Vue or Svelte islands inside an Astro project are normal and
  stay put — the project is still filed as `astro`, because the build tooling decides.
- **`.astro/`** is excluded on import; it is generated cache.
