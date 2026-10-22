# DECISIONS.md — Key Technical Decisions

---

## D-001: Font Strategy
**Decision**: Use `next/font/google` to load Fraunces, Figtree, and Shantell Sans as CSS variables, then reference them in Tailwind theme tokens.

**Rationale**: The live site uses these exact three Google Fonts (confirmed from CSS inspection). `next/font` provides self-hosted zero-CLS loading with `font-display: swap` built in.

---

## D-002: Image Sourcing
**Decision**: Reference live site images via their CDN URLs for the initial build with `images.remotePatterns` configured in `next.config.ts`, and document the local storage script in `README.md`.

**Rationale**: Pragmatic strategy ensuring immediate high-fidelity rendering without multi-gigabyte repository bloat while preserving 100% type safety and next/image optimization.

---

## D-003: Mobile Menu Implementation
**Decision**: Use the native `<dialog>` element with `showModal()` / `close()` APIs, matching the original site's exact markup.

**Rationale**: The live site HTML uses `<dialog aria-label="Site menu" class="tp-menu ...">`. This provides native backdrop rendering, focus trapping, and `Escape` key closing without heavy third-party modal libraries.

---

## D-004: Filter Implementation on /puppies
**Decision**: Client-side filtering synchronized with URL search params (`useSearchParams`) wrapped in a React `Suspense` boundary.

**Rationale**: Shareable, bookmarkable URLs (e.g. `?origin=local&breed=Maltipoo`) with zero full-page reloads.

---

## D-005: Image & Video Gallery (Puppy Detail)
**Decision**: Custom lightweight gallery with CSS transitions, thumbnail click-to-view, keyboard arrow navigation, and responsive HTML5 `<video>` embedding.

**Rationale**: Meets the "no heavy UI libraries" constraint while providing smooth, accessible media interaction.

---

## D-006: Happy Families Lightbox
**Decision**: Custom polaroid gallery with HTML5 `<dialog>` modal, keyboard navigation, and star rating reviews.

---

## D-007: Rate Limiting Strategy
**Decision**: In-memory rate limiting using a `Map<ip, {count, resetAt}>`. Resets every 10 minutes per IP with a 5 request ceiling.

---

## D-008: Form Submission & Validation
**Decision**: POST to `/api/enquiry` validated by Zod schema with honeypot field (`website`) detection and JSON error formatting.

---

## D-009: Static Generation for Puppy Pages
**Decision**: `generateStaticParams()` returns all 15 puppy slugs and all 30 gone-home slugs, enabling full build-time SSG (58 total pages).

---

## D-010: Announcement Strip & Curtain Intro
**Decision**: Persistent top announcement strip ("every puppy is family") plus session-aware page-load curtain animation using `sessionStorage` to avoid intrusive re-triggers.

---

## D-011: Tailwind CSS v4 & Turbopack
**Decision**: Utilize Tailwind CSS v4 natively configured with `@tailwindcss/turbopack` in `next.config.ts` and `@theme` definitions in `globals.css`.

**Rationale**: Next.js 16 defaults to Tailwind v4, compiling 58 pages in under 2.5s with zero warnings.
