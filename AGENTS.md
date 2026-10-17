# Zambia Library, Cultural and Skills Center for the Visually Impaired

## Project Overview
A modern, accessible website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Designed to WCAG 2.2 Level AA accessibility standards.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Atkinson Hyperlegible + Inter (Google Fonts)

## Design System
- **Primary (Cobalt Clarity):** `#002F6C`
- **Accent (Zambian Copper):** `#D9531E`
- **Base (High-Contrast Bone):** `#F9F9F9`
- **Text (Ink Obsidian):** `#0A0A0A`
- **Body font size:** 1.125rem (18px), line-height 1.6
- **Focus halo:** 3px Zambian Copper outline

## Accessibility Features
- Skip-to-main-content link (first focusable element)
- High-contrast mode toggle (stored in localStorage)
- Text size controls (90%–150%, stored in localStorage)
- Semantic HTML5 with proper heading hierarchy
- ARIA landmarks, labels, and live regions
- Keyboard navigation with visible focus indicators
- All forms have accessible labels, error messages, and validation
- Responsive design (mobile, tablet, desktop)

## Development

### Run locally with Docker
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app runs on port 3000 with hot reload enabled.

### Run without Docker
```bash
npm install
npm run dev
```

## Project Structure
```
src/
  app/              # Next.js App Router pages
    about/
    contact/
    donate/
    impact/
    news/
    partners/
    policies/
    programmes/
    careers/
  components/       # Reusable React components
  lib/              # Shared data and utilities
```

## Pages
- `/` — Home (hero, mission, stats, programmes, stories, news, newsletter)
- `/about` — About Us (history, mission, vision, values, objectives, board)
- `/programmes` — Programmes overview
- `/programmes/[slug]` — Individual programme detail pages (8 programmes)
- `/impact` — Impact & Success Stories
- `/partners` — Partners & Sponsors (with partnership enquiry form)
- `/donate` — Donate & Get Involved (with donation form)
- `/news` — News, Events & Gallery
- `/careers` — Careers & Volunteer Opportunities
- `/contact` — Contact Us (with enquiry form)
- `/policies` — Policies & Downloads
- `/policies/privacy` — Privacy Policy
- `/policies/accessibility` — Accessibility Statement
- `/policies/cookies` — Cookie Notice
- `/policies/terms` — Terms of Use

## Notes
- All unverified information (registration numbers, leadership names, achievements, partnerships, testimonials, financial figures) uses clearly labelled placeholders.
- Statistics are marked as indicative pending verification.
- Payment processing is not yet integrated; the donation form collects enquiry details.
- CMS/admin dashboard is a future phase.
