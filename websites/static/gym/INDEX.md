# gym — templates

Strength studios, group fitness studios and personal-training sites. Most are dark and
accent-driven; the range now spans full clubs with memberships and timetables, single-coach
service funnels, and one bright multi-discipline group studio. Pick on business model,
operations depth, dependencies, palette and language rather than mood alone.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **FORGE — Athletic Club** | `forgeathleticclub/` | `acid-green-accent` `pinned-horizontal-programs` `progressive-enhancement` `usd-membership-tiers` | The progressive-enhancement club. Near-black + acid-green 24/7 Brooklyn iron house, pinned horizontal 5-discipline programs, USD Day/Monthly/Annual tiers. Full vanilla core works with every CDN dead; GSAP/Lenis only enhance. |
| **FORGE — Conditioning Studio** | `forgecoaching/` | `ember-red-accent` `single-coach-brand` `service-not-membership` `pinned-horizontal-library` | The single-coach studio. Dark iron/ember-red brand selling four coaching services (not memberships) with per-session pricing, an article reader and a horizontal mindset library. Heavy GSAP/SplitText/Lenis. |
| **FORGE — Fitness Studio** | `forgefitnessstudio/` | `bilingual-chinese-copy` `webgl-particle-hero` `scrolljacked-cardstack` `manifesto-driven` | The cinematic one. Bilingual English/Chinese copy throughout, WebGL particle hero, scroll-jacked card stack, and a manifesto section. Needs four external JS CDNs. |
| **FUN&FIT** | `funandfit/` | `light-paper-palette` `volt-yellow-accent` `multi-discipline-group-classes` `today-aware-timetable` | The bright group studio. The only light template: paper + volt-yellow, multi-discipline classes (dance, yoga, HIIT, boxing), a today-aware live timetable, INR memberships and a kinetic variable-font hero. |
| **IRONFORGE** | `ironforge/` | `flip-card-interaction` `drag-swipe-carousel` `tight-five-section-flow` `condensed-display-type` | The tight conversion funnel. Five sections, hero to booking, with flip-card coach bios and a drag-swipe transformation carousel. No schedule, no pricing. |
| **IRONHOUSE** | `ironhouse/` | `data-dense-tables` `operations-heavy` `multi-location` `anton-display-type` | The operations-heavy one. A real weekly class schedule, tiered yen-priced memberships, and three named studio locations. Static grids, no carousel. |
| **Marcus Reid** | `marcusreid/` | `personal-trainer-brand` `coach-led-conversion` `fitness-editorial` `testimonial-proof` | The individual-coach funnel. Four service offers, credentials, educational articles, client proof, and a free-session form for local or online coaching. |

## Choosing between them

| If the client... | Use |
| --- | --- |
| Runs multiple locations, publishes a timetable, sells memberships | `ironhouse` |
| Is a bright, multi-discipline group studio (dance/yoga/HIIT/boxing) with a live timetable | `funandfit` |
| Is a single 24/7 club wanting a high-motion brand page that survives CDN failure | `forgeathleticclub` |
| Wants a short, hard-hitting page whose job is booking a trial | `ironforge` |
| Needs bilingual copy, or wants a high-production scroll experience | `forgefitnessstudio` |
| Needs the page to work with no external JS | `ironforge`, `ironhouse` or `forgeathleticclub` |
| Is an individual coach selling coaching packages rather than memberships | `marcusreid` (lighter) or `forgecoaching` (high-production studio brand) |

### The FORGE cluster

Four templates share the FORGE name — tell them apart by accent and model: **acid-green**
`forgeathleticclub` (24/7 club, memberships, progressive-enhancement), **ember-red**
`forgecoaching` (single coach, services not memberships, heavy motion), and the bilingual
WebGL **`forgefitnessstudio`**.
