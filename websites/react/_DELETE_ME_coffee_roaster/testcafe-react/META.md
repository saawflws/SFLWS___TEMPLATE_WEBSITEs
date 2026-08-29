# Test Cafe (React)

> A minimal Vite + React fixture used to validate the import-project flow. Not a usable template.

| Field | Value |
| --- | --- |
| **Name** | Test Cafe (React) |
| **Slug** | testcafe-react |
| **Category** | coffee_roaster |
| **Framework** | react |
| **Path** | `websites/react/coffee_roaster/testcafe-react/` |
| **Entry** | `src/main.jsx` — a Vite project with a build step, not a single file |
| **Stack** | npm · Vite 5 · React 18 · plain CSS custom properties |
| **Prompt** | — (imported project, no `p.md`) |

## Style tags

`test-fixture` `vite-react` `minimal-scaffold` `no-styling-system` `single-component`

## Summary

A three-component Vite scaffold with one CSS custom property. It exists to exercise
framework detection, the `node_modules` exclusion, and the copy-verification step of the
`import-project` skill. It is not a design and should never be offered to a site request.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | App | — | A single `<main>` with an `<h1>` |
| 2 | Nav | — | An unused `Nav` component |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--brand` | `#3A5A40` | Sole declared colour, in `src/index.css` |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| All | browser default | — | No font stack is declared |

## Interaction & motion

- None. No event handlers, no state, no animation.

## Best suited for

- Nothing. This is a test fixture.

## Not a good fit for

- Any real site request — it has no design, no layout and no content
- Any category match; it sits under `coffee_roaster` only to exercise the import path

## Notes for agents

- **This is a Phase 7 test fixture and is flagged for deletion.** Do not select it.
- Install and run: `npm install` then `npm run dev`. No environment variables required.
- The source folder's `node_modules/`, `dist/` and `.env.local` were excluded on import;
  `.gitignore` was deliberately kept.
- Agents may open the source directly for finer detail than this file covers.
