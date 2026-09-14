> **Reconstructed prompt.** This template arrived as HTML with no prompt. This file was
> written by reading the markup — it describes what the page *is*, not what anyone asked
> for. It is not evidence of intent.

"Design an editorial paper-style single-file clinic website for Shree Sai Clinic, a six-specialty family practice on FC Road, Pune, that books appointments like issuing a paper slip.

Same practice, doctors, fees, timings and contact details as its clean sibling: General Medicine / Orthopedics / Pediatrics / Gynecology / Dermatology / Dentistry (Drs. Kulkarni, Deshmukh, Nair, Joshi, Mehta, Patil; ₹350–₹700), Shop 12, Ganesh Complex, FC Road, Pune 411004, +91 98220 12345, Mon–Sat 9am–8pm, Sunday 10am–1pm.

Visual: warm paper editorial — grain-textured paper backgrounds (#f5f0e3 / #ece4d0), ink text (#1d2a25), pine green (#1f5d49) + terracotta clay (#bf5b38) + ochre (#9a7b2e) accents, hard offset shadows instead of blurs. Fraunces serif headlines with italic clay accents, Instrument Sans body, inline-SVG stroke icon sprite (no emoji). ECG heartbeat line motif in hero and footer.

Page Structure:
Chrome: dark topbar with live open/closed status dot + phone, sticky paper header (pulse mark + Shree Sai Clinic, Departments/Doctors/Reviews/Contact links, Book button, circular mobile toggle opening a fullscreen serif menu).
Hero: eyebrow (Trusted on FC Road since 2009), giant serif headline 'Good medicine, around the corner', lede, Book + Meet-the-doctors actions, facts row (12,000+ patients, 4.8 from 620+ reviews, 7 days), Today-at-the-clinic card (live clock, open-status dot, next-free-today quick-hold slots, week hours, Call/WhatsApp buttons), animated ECG strip, specialty marquee ribbon.
Departments: six numbered services-ledger rows (icon medallion, title, description, attending doctor + from-fee, arrow button) — clicking a row filters the doctor carousel and scrolls to it.
Doctors: specialty filter chips plus a draggable snap carousel of six cards (monogram band, bio, rating/years chips, real per-doctor consulting hours, live 'slots free today / fully booked / next open' hint, fee, Book button), with arrow buttons, progress bar and count label.
Booking: visit card (address/phone/email/timings, directions link, emergencies note) beside an appointment-slip form (slip header with live slip number, patient name, +91 mobile, doctor select, date, tappable slot grid with booked slots struck through, note field, full-width confirm).
Reviews: auto-rotating quote carousel (four neighbourhood reviews, monogram, star icons, dots + arrows, 7-second timer).
Footer: dark green with serif wordmark, ECG strip, clinic/hours/contact columns, demo copyright, back-to-top button.
Confirmation: booking opens an appointment-slip modal (slip number, patient/mobile/doctor/department/date/time/fee rows, random barcode, arrival note, animated CONFIRMED stamp) plus toast notifications.

Interaction Details:
- Clock ticks every second; open status derives from the real clock against clinic hours; quick-hold slots jump the date to today and hold the time while prompting for a doctor.
- The slot engine respects each doctor's real consulting days and hours, strikes through pseudo-booked slots deterministically, hides past slots intraday, and offers the next open date on days off.
- Inline validation with error messages and a toast on failure; confirmed bookings persist to localStorage (ssc_appointments key) and the slip preview number updates live.
- Scroll reveals via IntersectionObserver; drag-to-scroll carousel with moved-click suppression; Escape closes modal and mobile menu; reduced motion disables marquee, ECG and reveals.

Overall Vibe: warm, editorial, paper-and-ink, neighbourhood-trustworthy — a clinic that feels like a well-kept family practice with a paper slip for everything."
