# gym — templates

Strength and fitness studio sites. All three were generated from a near-identical brief and
are three genuinely different builds — pick on operations depth, dependencies and language,
not on mood, because all three are dark and orange-accented.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **FORGE** | `forgefitnessstudio/` | `bilingual-chinese-copy` `webgl-particle-hero` `scrolljacked-cardstack` `manifesto-driven` | The cinematic one. Bilingual English/Chinese copy throughout, WebGL particle hero, scroll-jacked card stack, and a manifesto section. Needs four external JS CDNs. |
| **IRONFORGE** | `ironforge/` | `flip-card-interaction` `drag-swipe-carousel` `tight-five-section-flow` `condensed-display-type` | The tight conversion funnel. Five sections, hero to booking, with flip-card coach bios and a drag-swipe transformation carousel. No schedule, no pricing. |
| **IRONHOUSE** | `ironhouse/` | `data-dense-tables` `operations-heavy` `multi-location` `anton-display-type` | The operations-heavy one. A real weekly class schedule, tiered yen-priced memberships, and three named studio locations. Static grids, no carousel. |

## Choosing between them

| If the client... | Use |
| --- | --- |
| Runs multiple locations, publishes a timetable, sells memberships | `ironhouse` |
| Wants a short, hard-hitting page whose job is booking a trial | `ironforge` |
| Needs bilingual copy, or wants a high-production scroll experience | `forgefitnessstudio` |
| Needs the page to work with no external JS | `ironforge` or `ironhouse` |
