# FUN&FIT — Group Fitness Studio

> A bright paper-and-volt-yellow, multi-discipline Indian group fitness studio with a kinetic variable-font hero, a live today-aware timetable and INR memberships.

| Field | Value |
| --- | --- |
| **Name** | FUN&FIT — Group Fitness Studio |
| **Slug** | funandfit |
| **Category** | gym |
| **Framework** | static |
| **Path** | `websites/static/gym/funandfit/` |
| **Entry** | `index.html` — self-contained single file; inline CSS + JS. External: Google Fonts, GSAP + ScrollTrigger (cdnjs), Lucide icons (unpkg); coach/program images hotlink Picsum. |
| **Thumbnail** | `thumb.webp` |
| **Prompt** | `p.md` — reconstructed from the markup |
| **Origin** | AI-generated from `p.md` (prompt reconstructed) |

## Style tags

`light-paper-palette` `volt-yellow-accent` `variable-font-kinetic-type` `multi-discipline-group-classes` `today-aware-timetable` `inr-membership-tiers` `3d-tilt-flip-card` `playful-editorial-voice`

## Summary

The only **light** gym template on the shelf and the only **multi-discipline group** studio: a warm paper canvas with black ink and one electric volt-yellow accent, for a studio running strength, Zumba dance, power yoga, HIIT, functional and boxing classes rather than pure barbell work. It leans Indian (MG Road address, INR pricing, WhatsApp confirmation) and playful ("Train Hard. Laugh Louder."). Its signature is a kinetic hero headline built on the Archivo variable font whose letter widths follow the cursor, backed by a genuinely functional weekly timetable that defaults to the current day and flags an in-progress class as "NOW". Membership is a four-tier INR plan selector wired to a 3D-tilting, flipping membership card.

## Sections

| # | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Hero | `#hero` | Kinetic variable-font "Train hard, laugh louder." headline, live "next up" class chip, spinning "first class free" badge, studio facts |
| 2 | Marquee | — | Volt band: "Sweat · Smile · Repeat · FUN&FIT" |
| 3 | Manifesto | `#manifesto` | "The FUN&FIT way" statement that fills with ink word-by-word on a pinned scroll, plus fact chips |
| 4 | Programs | `#programs` | Seven programs (Strength & Conditioning, Zumba, Power Yoga, HIIT, Functional, Boxing, 1:1 PT) as an accordion with a floating cursor-preview image |
| 5 | Schedule | `#schedule` | Dark "ink" section: day-tab weekly timetable that defaults to today and marks a live "NOW" class; book buttons open the modal |
| 6 | Coaches | `#coaches` | Five staggered coach cards with discipline tags and credentials |
| 7 | Membership | `#membership` | Monthly / Quarterly / Annual / Student INR plans; selecting one flips a 3D mouse-tilt membership card |
| 8 | Proof | `#proof` | Two counter-scrolling belts of member testimonials |
| 9 | Trial | `#trial` | "First class is free" enquiry form (name/phone/goal/slot) with validation |
| 10 | Footer | — | Logo, sitemap, visit info, socials, back-to-top; a booking modal overlays the page |

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--paper` | `#F4F0E4` | Page background |
| `--paper2` | `#E9E3D1` | Deeper paper surface |
| `--ink` | `#161511` | Primary text / dark "ink" sections |
| `--ink2` | `#2B2921` | Secondary ink text |
| `--volt` | `#D6F640` | Volt lime-yellow accent (buttons, amp mark, live dots) |
| `--muted` | `#6E6A59` | Muted olive secondary text |
| `--line` | `rgba(22,21,17,.16)` | Hairline border |
| `--error` | `#C03A1E` | Burnt-red form error |

## Typography

| Role | Family | Weights | Notes |
| --- | --- | --- | --- |
| Display | Archivo (variable) | 100–900, wdth 62–125 | Heavy use of the width + weight axes; hero letters animate their `wdth` axis |
| Mono | Space Mono | 400,700 | Eyebrow labels, prices, metadata, chips |

Icons via Lucide (unpkg). No utility framework — hand-written CSS with custom properties and variable-font-settings.

## Interaction & motion

- Hero headline splits to characters whose variable-font width follows the cursor (and "breathes" idly on touch devices).
- Live schedule engine: day tabs default to the current weekday, render that day's classes, and flag an in-progress slot with a pulsing "NOW" tag; a hero "next class" chip recomputes every minute.
- Membership card tilts to the mouse (perspective) and performs a 3D flip when a different plan is selected; plan rows update its price/perks.
- Program accordion (GSAP height tween) with a cursor-following preview image; two testimonial belts auto-scroll and pause on hover; a custom dot cursor scales over interactive elements.
- Trial and modal booking forms validate name/phone (10-digit) and selections, show success + toast, with a WhatsApp-confirmation demo message (no backend).
- GSAP + ScrollTrigger power the manifesto pinned ink-fill and section reveals; full `prefers-reduced-motion` support disables animation. Sticky nav shrinks on scroll; full-screen mobile menu.

## Best suited for

- A multi-discipline group fitness studio (dance, yoga, HIIT, boxing + strength), not a pure iron gym.
- Studios that publish a real weekly class timetable and sell recurring memberships (especially INR / Indian market).
- Brands wanting a bright, friendly, playful personality rather than dark noir.
- Clients who want a genuinely functional today-aware schedule and a tactile membership-card interaction on the page.

## Not a good fit for

- Brands wanting a dark, heavy, "serious iron" aesthetic — this is the opposite (light paper, volt-yellow, jokes in the copy).
- Single-coach personal-training practices selling per-session packages — use `marcusreid` or `forgecoaching`; this is a facility with staff, classes and memberships.
- Clients outside an INR context who need the pricing model rethought (all plans and copy assume Indian Rupees and WhatsApp).

## Notes for agents

- This is the shelf's **light-palette, multi-discipline, group-class** gym option; every other gym template is dark. Closest sibling on features is `ironhouse` (also schedule + membership tiers), but that one is a dark, English-only, strength-focused ops build, whereas this is light, playful, multi-discipline and INR/India-oriented.
- Distinct volt-yellow accent (`#D6F640`) on paper — visually unmistakable next to the black/orange and black/red gyms.
- Depends on GSAP/ScrollTrigger and Lucide from CDN; images are Picsum placeholders — swap all before shipping. Pricing is INR; forms are front-end demos (WhatsApp copy only, no server).
- Agents may open `index.html` directly for finer detail — the schedule data, variable-font axis logic and animation timings are not fully summarised here.
