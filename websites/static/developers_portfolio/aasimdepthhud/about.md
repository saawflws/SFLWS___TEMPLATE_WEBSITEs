Reworked the whole component system, kept the atmosphere:

Nav gone — replaced with a fixed depth readout (top-left, updates live as you scroll) and a right-edge scrollspy rail instead of a logo+links+CTA header
Hero — name pinned bottom-left, huge; a HUD "status" panel floats top-right with depth/role/base/status readouts; buttons are now bracket-style mono links, not pills
About — stats are a mono readout list, not a card grid
Skills — one vertical core-sample bar with four category blocks branching off it, instead of stacked colored rectangles
Work — a click-to-expand log/manifest (native <details>) instead of alternating image cards
Experience — an actual dive-profile line chart (draws itself as you scroll) with a dashed branch for the ongoing self-study track, feeding into a manifest-style log — no more dot timeline
Contact — quiet sign-off, same readout-line component reused from About/Hero
