# gym — templates

Strength studio and personal training sites. The three studio builds share a near-identical
dark, orange-accented brief; Marcus Reid is the coach-led option. Pick on business model,
operations depth, dependencies and language rather than mood.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **FORGE** | `forgefitnessstudio/` | `bilingual-chinese-copy` `webgl-particle-hero` `scrolljacked-cardstack` `manifesto-driven` | The cinematic one. Bilingual English/Chinese copy throughout, WebGL particle hero, scroll-jacked card stack, and a manifesto section. Needs four external JS CDNs. |
| **IRONFORGE** | `ironforge/` | `flip-card-interaction` `drag-swipe-carousel` `tight-five-section-flow` `condensed-display-type` | The tight conversion funnel. Five sections, hero to booking, with flip-card coach bios and a drag-swipe transformation carousel. No schedule, no pricing. |
| **IRONHOUSE** | `ironhouse/` | `data-dense-tables` `operations-heavy` `multi-location` `anton-display-type` | The operations-heavy one. A real weekly class schedule, tiered yen-priced memberships, and three named studio locations. Static grids, no carousel. |
| **Marcus Reid** | `marcusreid/` | `personal-trainer-brand` `coach-led-conversion` `fitness-editorial` `testimonial-proof` | The individual-coach funnel. Four service offers, credentials, educational articles, client proof, and a free-session form for local or online coaching. |

## Choosing between them

| If the client... | Use |
| --- | --- |
| Runs multiple locations, publishes a timetable, sells memberships | `ironhouse` |
| Wants a short, hard-hitting page whose job is booking a trial | `ironforge` |
| Needs bilingual copy, or wants a high-production scroll experience | `forgefitnessstudio` |
| Needs the page to work with no external JS | `ironforge` or `ironhouse` |
| Is hiring an individual coach rather than joining a gym | `marcusreid` |
