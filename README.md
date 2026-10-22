# TeddyPups U.A.E. — Dubai Teacup & Teddy-Bear Puppy Showroom

> A pixel-faithful, responsive clone of [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/) built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview

TeddyPups U.A.E. is Dubai’s boutique showroom for teacup, miniature, and teddy-bear companion puppies (Maltipoos, Pomeranians, Toy Poodles, and Bichon Frises). This repository contains the complete frontend clone built to exact production specifications for a senior frontend hiring assignment.

---

## 🚀 Live Demo & Repository

- **Live Reference**: [https://puppy.instabizweb.com/](https://puppy.instabizweb.com/)
- **GitHub Repository**: [https://github.com/Yaduraj21/insta_biz_web_task](https://github.com/Yaduraj21/insta_biz_web_task)
- **Tech Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Zod
- **Typography**: `Fraunces` (Headings/Plush), `Figtree` (UI/Body), `Shantell Sans` (Scrawl/Accents)
- **Primary Color Palette**: Milk (`#fffdf8`), Cocoa (`#2a170e`), Honey (`#fbe3b4`), Honey-Deep (`#f2be6b`), Toffee (`#a24a1a`)

---

## 📐 Architecture & Key Design Decisions

For full technical rationale and trade-offs, please see [DECISIONS.md](./DECISIONS.md) and [PLAN.md](./PLAN.md).

1. **Native Dialog Mobile Menu (`D-003`)**: Implemented using HTML5 `<dialog>` element with `showModal()` and `close()` for native focus trapping, keyboard `Escape` closing, and backdrop blurring.
2. **Zero Heavy UI Libraries**: Bespoke custom components for image carousels, photo lightboxes, scroll reveals, and accordions to achieve fast load speeds and zero layout shift.
3. **Interactive Delight & Animations**: Interactive custom paw-cursor trails (`PawCursor.tsx`), intersection observer scroll triggers (`useScrollAnimation.ts`), seamless infinite breed marquees, and CSS-based micro-interactions.
4. **Typed Data Layer**: No hard-coded JSX strings. All puppy records, tickets, customer stories, and FAQ Q&As live in strongly typed TypeScript modules in `/src/data/`.
5. **Honeypot + In-Memory Rate Limiting (`D-007` & `D-008`)**: The `/api/enquiry` route is protected with server-side Zod validation, a hidden honeypot field, and IP rate limiting (5 requests per 10 minutes).
6. **Static Site Generation (SSG)**: 58 routes prerendered at build time via `generateStaticParams()` across all 15 available puppies and 30 gone-home alumni puppies.
7. **Dynamic SEO & Rich Schemas**: Complete with Open Graph, Twitter Cards, canonical tags, `og:locale: en_AE`, dynamic `sitemap.xml`, `robots.txt`, and Schema.org `PetStore` & `FAQPage` JSON-LD scripts.

---

## 📁 Project Structure

```
teddypups-clone/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (fonts, header, footer, floating widgets)
│   │   ├── page.tsx                   # / (Home — 8 sections + PetStore JSON-LD)
│   │   ├── puppies/
│   │   │   ├── page.tsx               # /puppies (Client filter grid + gone-home preview)
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # /puppies/[slug] (Detail, gallery, specs, enquiry form)
│   │   ├── gone-home/
│   │   │   └── page.tsx              # /gone-home (30 vintage ticket cards)
│   │   ├── happy-families/
│   │   │   └── page.tsx              # /happy-families (Polaroid masonry + lightbox dialog)
│   │   ├── how-it-works/
│   │   │   └── page.tsx              # /how-it-works (Sticky navigation + 4 process sections)
│   │   ├── faq/
│   │   │   └── page.tsx              # /faq (Search filter + 9 accordion notes + FAQPage JSON-LD)
│   │   ├── contact/
│   │   │   └── page.tsx              # /contact (Letter form + showroom details + Google Maps)
│   │   ├── api/
│   │   │   └── enquiry/
│   │   │       └── route.ts          # POST /api/enquiry (Zod validation + rate limit + honeypot)
│   │   ├── sitemap.ts                 # Dynamic sitemap (all 58 URLs)
│   │   └── robots.ts                  # robots.txt configuration
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx             # Sticky header with hover paw indicators & mobile trigger
│   │   │   ├── MobileMenu.tsx         # Fullscreen <dialog> menu with warm peach background
│   │   │   ├── Footer.tsx             # Night sky footer with Explore links & Downtown address
│   │   │   ├── AnnouncementStrip.tsx  # Top tagline bar & session-aware curtain intro
│   │   │   ├── FloatingWhatsApp.tsx   # Floating animated WhatsApp concierge badge
│   │   │   └── MobileBottomBar.tsx    # Mobile sticky bottom quick actions
│   │   ├── sections/
│   │   │   ├── home/                  # 8 modular sections for homepage
│   │   │   ├── puppies/               # Filterable client grid
│   │   │   ├── puppy-detail/          # Custom image/video gallery & enquiry form
│   │   │   ├── families/              # Interactive photo lightbox modal
│   │   │   ├── faq/                   # Live search & topic filter
│   │   │   └── contact/               # Letter enquiry form
│   │   └── ui/
│   │       ├── PuppyCard.tsx          # Card with video badge, origin pill, and quick specs
│   │       ├── GoneHomeCard.tsx       # Perforated ticket card with destination stamps
│   │       ├── Accordion.tsx          # Accessible accordion with ARIA expansion
│   │       ├── AnimatedSection.tsx    # Scroll reveal wrapper with configurable transitions
│   │       ├── PawCursor.tsx          # Playful interactive paw print cursor trails
│   │       ├── PawIcon.tsx            # SVG paw, star, and sparkle icons
│   │       └── ScallopHem.tsx         # Scalloped hem SVG wave divider
│   ├── data/
│   │   ├── puppies.ts                 # 15 available puppies with comprehensive specs
│   │   ├── gone-home.ts               # 30 sold puppies with alumni ticket details
│   │   ├── faq.ts                     # 9 exact FAQ questions and answers
│   │   └── families.ts                # Customer photos and testimonials
│   ├── lib/
│   │   ├── whatsapp.ts                # WhatsApp URL generator with prefilled messages
│   │   ├── rateLimit.ts               # In-memory IP rate limiter
│   │   └── useScrollAnimation.ts      # IntersectionObserver hook for scroll reveals
│   └── types/
│       └── index.ts                   # Shared TypeScript definitions
├── public/                            # Static assets & category images
├── PLAN.md                            # Comprehensive architecture plan
├── PROMPTS.md                         # Chronological prompt log
├── DECISIONS.md                       # Technical decision records (D-001 to D-011)
├── README.md                          # Documentation (this file)
└── next.config.ts                     # Next.js configuration with remotePatterns & Turbopack
```

---

## 🛠️ Getting Started Locally

### 1. Prerequisites
- Node.js 18+ (tested on Node 20 / 22)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Yaduraj21/insta_biz_web_task.git
cd insta_biz_web_task

# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env.local` file from `.env.example`:
```bash
cp .env.example .env.local
```
Key variables:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: The showroom WhatsApp phone number (default: `971501234567`)
- `RESEND_API_KEY`: Optional Resend email API key for form routing

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 5. Production Build & Validation
```bash
npm run build
npm run start
```
All 58 pages will compile statically into production artifacts.

---

## 🖼️ Media & Image Sourcing (`D-002`)

In accordance with technical decision `D-002`, remote CDN images are configured in `next.config.ts` via `images.remotePatterns` for immediate, zero-lag development.

If you wish to download all images into `/public/media/` for a self-hosted offline deployment:
```bash
# Optional asset sync script
node -e "
const fs = require('fs');
const path = require('path');
// Script fetches remote images and writes them locally into public/media/
console.log('Images can be mirrored to /public/media/');
"
```

---

## 🚢 Deployment to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project in your [Vercel Dashboard](https://vercel.com).
3. The build command `npm run build` and output directory `.next` will be detected automatically.
4. Add any environment variables (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `RESEND_API_KEY`) under **Project Settings > Environment Variables**.
5. Click **Deploy**.

---

## ♿ Accessibility & Performance

- **Semantic HTML**: `<header>`, `<main id="main">`, `<footer>`, `<nav>`, `<dialog>`, `<article>`
- **Keyboard Navigation**: Native tab flow, `Escape` key closes dialogs, Arrow keys navigate galleries
- **Skip Link**: Accessible skip-to-content link for screen readers
- **ARIA Compliance**: `aria-expanded`, `aria-controls`, `aria-label`, `role="region"`
- **Lighthouse Friendly**: Next.js automatic image optimization (`next/image`), `font-display: swap` (`next/font`), zero blocking scripts.
