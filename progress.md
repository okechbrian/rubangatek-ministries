# Rubangatek Ministries — Website Progress

## Goal

Build a modern, clean, NGO-style website for **Rubangatek Ministries**, a charity organization based in Mukono and operating in Jinja City, Uganda. The ministry focuses on supporting vulnerable elderly who can no longer support themselves and children who cannot afford school.

---

## Tech Stack

- **Framework:** Next.js 16.2.7 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 (`@theme inline` for brand tokens)
- **Build tool:** Vite (via Next.js Turbopack)
- **Email:** Resend API
- **Payments:** Flutterwave (not yet active)
- **Hosting:** Vercel (free tier)

## Design System

- **Primary:** `#1E7A3B` (deep green)
- **Secondary:** `#F3E4D0` (warm beige)
- **Accent:** `#F28C35` (orange)
- **Text:** `#333333` / `#777777` / `#FFFFFF`
- **Fonts:** Poppins (headings) + Open Sans (body)

## Key Data

- **Bank:** ABSA Bank, Acc: Rubangatek Ministries Ltd, #: 6008979713
- **Phone:** 0771769971 / 0752881035
- **Locations:** Mukono, Uganda & Jinja City, Uganda
- **GitHub:** `okechbrian/rubangatek-ministries`
- **Live URL:** `https://rubangatek-ministries.vercel.app`

---

## What's Done

### Pages (all 7)
- [x] **Home** — Hero, StatsBar, Programs overview, Featured Story, Newsletter, CTA
- [x] **About** — Who We Are, Mission/Vision/Values, Where We Work
- [x] **Programs** — Elderly Care, Children's Education, Community Development
- [x] **Stories** — Story cards grid + expanded Sarah's story (2018)
- [x] **Donate** — DonateWidget (Flutterwave) + Bank/Mobile Money + FAQ + Contact form
- [x] **Donate Success** — Thank you page with transaction reference
- [x] **Donate Cancel** — Fallback for cancelled payments
- [x] **Contact** — Info, map placeholder, contact form, social links
- [x] **Privacy** — Privacy policy

### Components
- [x] Logo (SVG), Header (sticky + mobile hamburger), Footer
- [x] Hero, Card, StatsBar, Illustration (7 SVG variants)
- [x] ContactForm, DonateWidget, DonateInfo, FaqSection, MapEmbed, NewsletterSignup

### API Routes
- [x] `POST /api/contact` — sends email via Resend
- [x] `POST /api/donate` — initializes Flutterwave payment (returns 503 if key missing)

### Infrastructure
- [x] Git repo initialized and committed
- [x] GitHub repo created: `okechbrian/rubangatek-ministries`
- [x] Deployed to Vercel
- [x] Environment vars set: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_EMAIL`

---

## What's Pending

- [ ] Set `FLUTTERWAVE_SECRET_KEY` on Vercel to activate online donations
- [ ] Connect custom domain
- [ ] Add Google Maps API key for MapEmbed
- [ ] Add more stories, refine copy, expand programs content

---

## File Structure

```
.
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── progress.md
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── globals.css         # Tailwind v4 theme tokens
│   │   ├── page.tsx            # Home page
│   │   ├── icon.svg            # SVG favicon
│   │   ├── about/page.tsx
│   │   ├── programs/page.tsx
│   │   ├── stories/page.tsx
│   │   ├── donate/
│   │   │   ├── page.tsx
│   │   │   ├── success/page.tsx
│   │   │   └── cancel/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── api/
│   │       ├── contact/route.ts
│   │       └── donate/route.ts
│   ├── components/
│   │   ├── Logo.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Card.tsx
│   │   ├── StatsBar.tsx
│   │   ├── Illustration.tsx
│   │   ├── ContactForm.tsx
│   │   ├── DonateWidget.tsx
│   │   ├── DonateInfo.tsx
│   │   ├── FaqSection.tsx
│   │   ├── MapEmbed.tsx
│   │   └── NewsletterSignup.tsx
│   └── lib/
│       ├── constants.ts        # All content data
│       └── email.ts            # Email sending utility
```
