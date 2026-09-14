> **Reconstructed prompt.** This template arrived as HTML with no prompt. This file was
> written by reading the markup — it describes what the page *is*, not what anyone asked
> for. It is not evidence of intent.

"Design a clean single-file clinic website for Shree Sai Clinic, a multi-specialty family clinic on FC Road, Pune, with online doctor appointment booking.

Six specialties with named doctors, fees and timings: General Physician (Dr. Ananya Kulkarni, ₹400), Orthopedic Surgeon (Dr. Rohan Deshmukh, ₹600), Pediatrician (Dr. Priya Nair, ₹500), Gynecologist (Dr. Kavita Joshi, ₹700), Dermatologist (Dr. Arjun Mehta, ₹550), Dentist (Dr. Sneha Patil, ₹350). Address Shop 12, Ganesh Complex, FC Road, Pune 411004. Phone/WhatsApp +91 98220 12345, care@shreesaiclinic.in. Mon–Sat 9am–8pm, Sunday 10am–1pm.

Visual: clinical clean light theme — white cards on soft mint backgrounds (#f7fbf9), deep green text (#0c3f37) and teal primary (#0e7c66, dark #095c4c), hairline borders (#dbe9e5), 24–30px rounded cards with soft green shadows. Inter throughout (400–800). Emoji icons in tinted tiles, gradient initial-avatars per doctor.

Page Structure:
Chrome: sticky blurred header (S badge + Shree Sai Clinic, links Home/Services/Doctors/Reviews/Contact, Book Appointment button, mobile Menu toggle).
Hero: eyebrow (Trusted local clinic in Pune), H1 booking headline, specialty summary, dual CTAs (Book Appointment / View Doctors), stat chips (6+ doctors, 12,000+ patients, 4.8/5 rating, 7 days), quick-info card (address, phone, timings, WhatsApp, Call Now button).
Services: six cards rendered from a JS array (General Physician, Orthopedics, Pediatrics, Gynecology, Dermatology, Dentistry).
Doctors: specialty filter dropdown plus doctor cards rendered from a JS array (initial avatar, specialty, experience/rating/timing chips, fee, per-card Book appointment button that pre-selects the doctor and scrolls to booking).
Appointment: booking form (patient name, 10-digit Indian mobile validated by pattern, doctor select, date, time slot) beside a Visit-us card (address/phone/email/timings, map placeholder linking to Google Maps).
Reviews: three patient testimonial cards rendered from a JS array (star glyphs, quote, name + Pune area).
Footer: dark green, clinic summary, quick links, contact block, demo copyright line.

Interaction Details:
- Services, doctors and testimonials are rendered from JS data arrays on load — edit the arrays, not the markup, to change them.
- Time slots are deterministic pseudo-availability: base weekday/Sunday slot lists filtered by a hash of doctor + date, so some slots read as taken; Sundays offer morning slots only.
- Booking date is clamped to today through +60 days; the slot dropdown stays disabled until doctor and date are both chosen.
- Submitting validates via native form validity, saves the appointment to localStorage (clinicAppointments key), shows a confirmation box with patient/doctor/date/time for 9 seconds, then resets the form.
- Mobile menu toggles the nav open; any nav link closes it. Smooth scrolling throughout.

Overall Vibe: clean, clinical, trustworthy, family-friendly — a modern light booking funnel for a neighbourhood clinic."
