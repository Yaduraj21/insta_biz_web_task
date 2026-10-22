# TeddyPups U.A.E. — Clone Project Plan

## Step 0 Findings — Live Site Analysis

### Fonts (from CSS `2gh-2btcjgkih.css`)
| Role | Font Family | CSS Variable |
|------|------------|-------------|
| Display / headings | **Fraunces** (variable, 100–900) | `--font-fraunces` → `font-plush` |
| Body / UI | **Figtree** (variable, 300–900) | `--font-figtree` → default |
| Handwriting / decorative | **Shantell Sans** (variable, 300–800) | `--font-shantell` → `font-scrawl` |

Font aliases in Tailwind:
- `font-plush` → Fraunces (headings, logo brand name, mobile menu links)
- `font-plush-text` → Fraunces (FAQ question text in accordion)
- `font-scrawl` → Shantell Sans (eyebrows, handwritten labels)
- Body default → Figtree

### Color Palette (extracted from HTML/CSS)
| Token | Hex | Usage |
|-------|-----|-------|
| `milk` | `#fffdf8` | Page background, theme-color |
| `cocoa` | `#2a170e` | Primary text, borders, outlines |
| `honey` | `#fbe3b4` | Warm peach (curtain fill, parchment) — also used as menu bg |
| `honey-deep` | `#f2be6b` | Golden yellow (pup body, accents) |
| `toffee` | `#a24a1a` | Rust/amber (pup collar, links?) |
| `amber` | `#e4a352` | Pup ear/leg fill |
| `blush` | `#f9b9a6` | Pup cheeks |
| `tongue` | `#e98c8c` | Pup tongue, light accent |
| `sky-top` (hero) | `#fffdf8` → `#fff1d8` | Hero gradient |
| `sky-faq` | `#a95e32` → `#331c11` | FAQ dark scene |
| SVG outline | `#2a170e` | All SVG strokes |

Tailwind classes used on live site:
- `bg-cocoa` → `#2a170e`
- `bg-milk` → `#fffdf8`  
- `bg-honey` → `#fbe3b4` (mobile menu background)
- `text-cocoa-soft` (muted text color)
- `text-milk` (white-ish text on dark)
- `text-toffee` (accent text)
- `text-toffee-ink` (darker toffee for eyebrows)

### Typography Scale
- `text-giant` → H1 size (large display)
- `text-lede` → Lead paragraph
- Mobile menu links: `text-[clamp(2.4rem,11vw,3.4rem)]`
- Header brand: `font-plush` for "TeddyPups"

### Layout
- `.gutter` → horizontal padding utility
- `.tp-header` → sticky header `fixed inset-x-0 top-0 z-50`
- `--header-h` → CSS variable for header height (used as `pt-[var(--header-h)]`)
- Max content width: `max-w-[110rem]`

### Navigation (exact order)
1. Home → `/`
2. Puppies → `/puppies`
3. Happy families → `/happy-families`
4. How it works → `/how-it-works`
5. FAQ → `/faq`
6. Visit & contact → `/contact`

### Header Anatomy
- Brand: `[logo img 56×56] + "TeddyPups"` (font-plush)
- Desktop nav: links with paw-print SVG hover indicator
- Header "hem": scalloped SVG wave at bottom
- WhatsApp button (desktop)
- Menu button (mobile, `lg:hidden`)

### Mobile Menu (Dialog element)
- `<dialog>` element, full-screen `h-dvh w-screen`
- Background: `bg-honey` (warm peach)
- Title: "where to, friend?" (`font-scrawl`)
- Close button: rounded-full `bg-cocoa text-milk`
- Nav links: `font-plush` at `clamp(2.4rem,11vw,3.4rem)`
- Footer: WhatsApp button + phone number

### Page-Load Curtain Animation
- `.tp-curtain` div with `data-state="intro"`
- Scallop SVG border top/bottom: `#fbe3b4` fill, `#2a170e` stroke
- Running Teddy SVG animation (illustrated puppy character)
- Text: "every puppy is family" (`font-scrawl`)
- Colors: `#fbe3b4`, `#f2be6b`, `#e4a352`, `#2a170e`

### FAQ Data (9 questions — verbatim)
1. **Are your puppies vaccinated and health-checked?** — "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."
2. **Can I meet a puppy before I decide?** — "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."
3. **Can I take my puppy home the same day?** — "Local puppies are available immediately, so you can take your puppy home the same day."
4. **Do you import puppies from abroad?** — "Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the import for you."
5. **How does an imported puppy travel to Dubai?** — "We manage every part of the import process, including health checks, travel arrangements, and the necessary documentation, so your puppy arrives happy, healthy, and stress-free."
6. **Will I see photos and health details first?** — "Yes. Photos, videos, and health certificates are shared before your puppy travels, and our team sends real photos and health details directly on WhatsApp."
7. **Do you deliver?** — "Yes. We deliver within Dubai, and our trusted international cargo partners deliver puppies safely to loving homes all around the world."
8. **Which breeds do you usually have?** — "Breeds we regularly have include Maltipoo, Pomeranian, Poodle and Bichon, plus rare teacup lines such as Korean teacup poodles, Maltese, Pom and Yorkie."
9. **Is there help after my puppy comes home?** — "Yes. Our team is available 24/7 and offers advice on training, nutrition, and general care to ensure a smooth transition for you and your new furry friend."

### JSON-LD Schemas Found
- **Home**: `PetStore` schema with name, telephone, email, address, sameAs (socials)
- **FAQ**: `FAQPage` schema with all 9 Q&A pairs
- **Email**: `teddypupsadmin@gmail.com`

---

## Architecture

### Tech Stack
- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** + `@tailwindcss/turbopack`
- **next/font** for Fraunces, Figtree, Shantell Sans (Google Fonts)
- **next/image** for all images
- **Zod** for form validation

---

## Build Order

1. ✅ Step 0: Study live site (DONE)
2. ✅ Write PLAN.md (DONE)
3. ✅ Phase 1: Project scaffold + design tokens + layout shell (DONE)
4. ✅ Phase 2: Home page (all 8 sections + JSON-LD) (DONE)
5. ✅ Phase 3: Puppies list + detail pages (DONE)
6. ✅ Phase 4: Gone-home, Happy families, How it works (DONE)
7. ✅ Phase 5: FAQ + Contact (DONE)
8. ✅ Phase 6: API route (forms + validation + rate limit + honeypot) (DONE)
9. ✅ Phase 7: Polish (animations, a11y, performance) (DONE)
10. ✅ Phase 8: Production build verification (58/58 static pages generated) (DONE)
11. ✅ Phase 9: Typography, Font Variables & Animation Timing Fixes (DONE)
12. ✅ Phase 10: Carousel & Card Layering Refinement (unobstructed breed view) (DONE)
13. ✅ Phase 11: Zero-Git GitHub REST API Push Implementation (DONE)
14. ✅ Phase 12: Top-Layer Modal Architecture & Cursor Stacking Resolution (DONE)

---

## Post-Launch Architectural Decisions

### D-012: Modal Stacking vs. Browser Top-Layer Isolation
- **Context**: The browser's native `<dialog>` element with `showModal()` promotes the element and its `::backdrop` into the internal browser **Top Layer**. The Top Layer strictly sits above all standard DOM nodes regardless of `z-index`. Because of this, the interactive custom paw cursor (`PawCursor`) was visually submerged underneath the modal backdrop when viewing family photo stories.
- **Decision**: Refactored `FamilyLightbox.tsx` and `MobileMenu.tsx` from `<dialog>` to standard accessible fixed modal overlays (`role="dialog"`, `aria-modal="true"`, `z-50`). Maintained keyboard `Escape` closing, arrow key navigation, backdrop click-to-close, and `body.style.overflow = 'hidden'`.
- **Result**: `PawCursor` with `zIndex: 999999` remains completely visible and interactive on top of both backdrops and modal content across all viewport sizes.

### D-013: Zero-Git Deployment via GitHub REST API
- **Context**: In containerized or minimalist deployment environments where the Git CLI is not installed or available, code must still be pushed to remote repositories using personal access tokens.
- **Decision**: Created `github_push.js` utilizing GitHub's Git Data API (`/git/blobs`, `/git/trees`, `/git/commits`, `/git/refs`). The script handles binary files (images, SVGs) via Base64 encoding, batches uploads, constructs Git trees, and fast-forwards branch heads cleanly.
