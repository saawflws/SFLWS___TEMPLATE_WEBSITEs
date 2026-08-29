# websites/react/

React template projects live here, one folder per category:

```
websites/react/<category>/<template-name>/
```

**This folder is currently empty.** It is populated by the `import-project` skill
(`skills/import-project/`), never by hand.

## How templates get here

1. Drop a complete React project folder (e.g. from `npm create vite@latest -- --template react`)
   into `raw_make_websites/` at the repo root.
2. Run the `import-project` skill. It detects the framework, copies the project
   here under the right category (excluding `node_modules`), verifies the copy,
   generates a `META.md`, updates the category `INDEX.md`, and regenerates root `data.js`.
3. The original folder in `raw_make_websites/` is renamed to `_DELETE_ME_<name>/` —
   never deleted automatically. You confirm the deletion yourself.

See `AGENTS.md` at the repo root for the full workflow.
