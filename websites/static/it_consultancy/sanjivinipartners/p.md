> **Reconstructed prompt.** This template arrived as HTML with no prompt. This file was
> written by reading the markup — it describes what the page *is*, not what anyone asked
> for. It is not evidence of intent.

Build a precise, technical landing page for Sanjivini Digital Solutions — "Business-first technology partners" in Dakshina Kannada and Bengaluru. The framing: your business already works, the software should too; they map the process, then build Zoho where it fits, custom software where it doesn't, automation in between. The look should evoke an engineering blueprint.

Visual Strategy:
- Very dark blue-ink canvas overlaid with a faint blueprint grid, a light off-white, and a single cool cyan accent that subtly shifts toward emerald as you scroll.
- The hero pairs the headline with an animated SVG process flowchart that draws itself on load and then runs a traveling dot around the "automated" loop forever.
- Serif display type (Fraunces, light) against a grotesk body and monospaced labels; registration-mark corner ticks and outline numerals reinforce the technical-drawing feel.

Color Palette:
- Ink and a deeper "deep" background; off-white text and a muted sage for secondary copy.
- One cyan accent (~#41B9D3) that drifts toward emerald (~#34D399) on scroll; a warm coral reserved for form errors.

Typography:
- Fraunces (light) for display headings.
- Space Grotesk for body copy.
- JetBrains Mono for labels, numerals and metadata.

Page Structure:
- Fixed nav that hides on scroll-down; a full-screen mobile menu.
- Hero over a blueprint grid, with a self-drawing SVG flowchart and feature chips.
- A technology ticker (Zoho, automation, apps, marketplaces …).
- 01 Services: five services as an accordion (first item open by default).
- 02 Approach: "Business first. Technology next.", three principles, a scrubbed pull-quote, and by-the-numbers stat counters.
- 03 Work: the LocalFarmers marketplace as a pinned horizontal showcase — one surface per panel (Android app, consumer storefront, operations console) built as detailed pure-HTML/CSS device mockups.
- 04 Ways of working: four accountability statements.
- 05 About: the studio, sectors served, and a process-mapping photo.
- 06 Contact: a project-brief form with a honeypot and inline validation.
- Footer with columns and a back-to-top.

Interaction Details:
- A self-drawing hero flowchart (paths draw, nodes pop, a dot travels a motion path indefinitely).
- Scroll-driven accent drift from cyan to emerald; a running technology ticker.
- A pinned horizontal LocalFarmers showcase, one product surface per panel; stat counters; a scrubbed pull-quote; parallax on the about image.
- Magnetic buttons, an accordion, a project-brief form with honeypot + toast, image fallbacks (Unsplash → Picsum), and a graceful bail-out that keeps content visible if the CDNs fail.
- GSAP + ScrollTrigger + MotionPathPlugin + Lenis, Tailwind (play CDN); reduced-motion support.

Overall Vibe: engineered, methodical, credible and cool — a technology partner that draws you the system before it builds it.
