> **Reconstructed prompt.** This template arrived as HTML with no prompt. This file was
> written by reading the markup — it describes what the page *is*, not what anyone asked
> for. It is not evidence of intent.

Build an editorial, high-production landing page for FORGE — a 24/7 "iron house" athletic club in East Williamsburg, Brooklyn. The tone is uncompromising and physical ("Trained, not rendered"), and the whole page should feel like a fashion-grade brand site rather than a fitness brochure.

Visual Strategy:
- Near-black canvas with a single acid-green accent and a bone off-white for text. Grayscale photography that reveals its colour on hover.
- Oversized Anton display type used at extreme scale — the hero is the word "FORGE" filling the viewport, with a rotating circular seal standing in for the "O".
- A fine hairline grid, monospaced eyebrow labels, and a grain overlay give it a technical, print-poster feel.

Color Palette:
- Page background near-black; a slightly warmer card black.
- Bone off-white primary text, muted grey and dim grey supporting labels.
- One acid/volt green accent for highlights, buttons, seals and live indicators; a single red reserved for errors.

Typography:
- Anton for all display and headings — ultra-condensed, all-caps.
- Space Grotesk for body copy, labels, buttons and navigation.

Page Structure:
- Fixed nav with a live local clock and a JOIN button; a full-screen clip-path mobile menu.
- Hero: giant FORGE wordmark, rotating seal, grayscale training photo, scroll hint.
- Velocity-reactive marquee of the five disciplines.
- Manifesto paragraph that fills with ink word-by-word as you scroll.
- Programs: a pinned, horizontally-scrolling track of five disciplines (Strength, Conditioning, Mobility, Combat, Recovery), each with an intensity meter, schedule and coach.
- Numbers: large count-up statistics plus a live "pounds moved today" ticker.
- Coaches: four named coaches as a hover-peek list opening into a full-screen bio modal.
- Membership: Day Pass / Monthly / Annual as an accordion, USD pricing, "first week free".
- CTA: "Stop scrolling. Start lifting." with a magnetic button.
- Footer: address (click-to-copy), hours, contact, socials and a giant FORGE watermark.

Interaction Details:
- A preloader with a hard 5-second kill-switch that can never trap the page.
- Custom cursor with contextual labels and magnetic buttons (pointer devices only).
- Progressive enhancement: a full vanilla core (menu, modals, forms, accordion, counters, cursor, loader) runs first and works with every CDN dead; GSAP, ScrollTrigger and Lenis load afterwards purely to add smooth scroll, the pinned horizontal programs, parallax and reveals.
- Join form writes a demo member record to localStorage and greets returning visitors with a "welcome back" toast; click-to-copy address and email.

Overall Vibe: cinematic, brutal, premium, technical — a Brooklyn strength club that treats its landing page like a magazine cover.
