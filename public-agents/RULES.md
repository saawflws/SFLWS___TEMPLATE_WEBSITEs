# RULES.md — for external agents using this template library

Short list. All of it binding. Read [`AGENTS.md`](AGENTS.md) for how to navigate the shelf.

---

## 1. Never invent a template that is not listed

Every template you use must exist at a real path reachable from
[`INDEX.md`](INDEX.md) → a category `INDEX.md` → a template folder.

Do not guess at plausible names. Do not assume a category has a template just because it
would be reasonable. Do not cite a template you have not opened the `META.md` for. If the
shelf does not have what the request needs, say so plainly — that is a useful answer, and
a fabricated path is not.

## 2. Read `META.md` before you open raw files

The layers exist so you can choose cheaply:

```
INDEX.md  →  category INDEX.md  →  template META.md  →  raw index.html
 (tiny)         (short)              (one page)          (large)
```

`META.md` carries the style tags, section list, real colour palette, fonts, and intended
client fit. That is enough to choose. Open `index.html` only once you have committed to a
template and need implementation detail `META.md` does not cover — exact markup, exact
animation timing, exact responsive breakpoints.

Opening raw HTML to compare candidates means you skipped a layer. Go back.

## 3. Decide strict-clone vs loose-reference explicitly

**Strict clone** — same structure, section order, and component patterns; new content,
imagery, and brand colours.
**Loose reference** — same visual language; different layout and sections.

Choose from what the user actually said:

| Signal | Mode |
| --- | --- |
| "like this one", "this but for my gym", "same layout" | strict clone |
| "in the style of", "that vibe", "similar feel" | loose reference |
| They described their own section list | loose reference |
| Their content does not map onto the template's sections | loose reference |
| No clear signal either way | **strict clone**, and say so |

State your choice in one sentence before you build. Do not switch modes silently partway
through — a half-cloned layout is worse than either.

## 4. Ambiguous request → ask, don't guess

Proceed automatically when you have a clear category and enough constraints to choose
sensibly. State the assumptions you made.

Stop and ask when the category is unclear, when there is no style direction at all, or when
the requirements contradict each other. A clarifying question costs one message. A confidently
built wrong site costs the whole task.

## 5. Report what you used

When you deliver, say: the exact template path, the mode (strict clone or loose reference),
and anything you deliberately changed or dropped from the source template. Whoever reads
your output needs to be able to trace the result back to the shelf.

## 6. Treat the shelf as read-only

Copy from `websites/`. Do not modify, move, rename, or delete anything in this repo — the
templates are the library other agents are also reading. Build your output somewhere else.
