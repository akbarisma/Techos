# TECHOS - Home Service Platform

## Problem Statement
Build a static React frontend for TECHOS, a home service/technician platform based on provided design screenshots. Frontend statis only, no backend integration.

## Architecture
- **Frontend**: React + Tailwind CSS (SPA with React Router)
- **No backend required** - fully static data

## Pages Implemented
1. `/` - Home/Landing Page
2. `/services` - Services Grid
3. `/services/:serviceId` - Service Detail/Booking Page
4. `/schedule` - Schedule Management
5. `/history` - Service History
6. `/teca` - AI Chatbot (Teca)
7. `/contact` - Contact Page

## Components
- `Navbar.jsx` - Sticky navigation with active state, mobile menu
- `Footer.jsx` - Newsletter + links
- `HowItWorks.jsx` - 3-step process section (reusable)
- `CTASection.jsx` - Call to action section (reusable)

## Design System
- **Colors**: Dark Teal `#1D4F4F`, Bright Cyan `#17C3C9`, White `#FFFFFF`
- **Fonts**: Outfit (headings), Manrope (body)
- **Wave separators** for section transitions

## What's Implemented
- **2026-04-07**: Full MVP build - all 7 pages with complete sections
  - Home: Hero, stats bar, chatbot preview, service carousel, nearest technicians, benefits, how-it-works, CTA
  - Service Detail: Problem selection with +/- qty, property type radio, calendar, time picker, vehicle selector, estimated price
  - Schedule: List with Reschedule/Cancel dialogs
  - History: Filter tabs (Semua/Selesai/Dibatalkan) with status badges
  - Teca: Chat interface with suggestion chips, simulated bot replies

## Backlog
- P0: None (MVP complete)
- P1: Real navigation on "Buat Pesanan" button (booking confirmation flow)
- P1: Actual search functionality in service search section
- P2: Login/Register pages
- P2: Technician profile detail pages
- P2: Review & rating system
- P3: Multi-language support (ID/EN toggle)
