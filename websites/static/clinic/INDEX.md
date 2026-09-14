# clinic — templates

Sites for single-location medical practices — neighbourhood clinics and family practices that
take appointments online without a backend. Both templates below are for the same real practice
(Shree Sai Clinic, FC Road, Pune) and share its six specialties, doctors, fees and timings, so
pick on **register and how booking is shown**, not on content.

Read the template's `META.md` before opening its `index.html`.

| Template | Path | Tags | Summary |
| --- | --- | --- | --- |
| **Shree Sai Clinic — Clean Booking Clinic** | `shreesaiclinic/` | `clean-clinical-booking` `specialty-filter-grid` `validated-booking-form` `localstorage-appointments` | The clean one. Inter on white/mint/teal, emoji tile icons, specialty-dropdown doctor grid, validated form with a simple confirmation box. Google Fonts is the only external dependency. |
| **Shree Sai Clinic — Ledger-and-Slip Clinic** | `shreesaiclinicledger/` | `editorial-paper-clinic` `services-ledger` `appointment-slip-modal` `live-open-status` | The editorial one. Fraunces on grained paper with hard shadows, clickable services ledger, live open-status with quick-hold slots, draggable doctor carousel, slip modal with barcode and CONFIRMED stamp. |

## Choosing between them

| If the clinic... | Use |
| --- | --- |
| Wants the plainest trustworthy booking funnel anyone understands | `shreesaiclinic` |
| Wants a warm paper-editorial identity with a slip for everything | `shreesaiclinicledger` |
| Has doctors on genuinely different rotas worth modelling | `shreesaiclinicledger` |
| Wants booking confirmation as a keepsake slip modal | `shreesaiclinicledger` |
| Wants the smallest possible logic to extend with a real API | `shreesaiclinic` |
