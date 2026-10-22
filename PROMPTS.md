# PROMPTS.md — Prompt Log

This file records prompts given to the agent in order, as required for the Loom demo workflow.

---

## Prompt 1 — Original Task (2026-10-22)

> You are a senior front-end engineer. Build a pixel-faithful, fully responsive clone of https://puppy.instabizweb.com/ (brand: "TeddyPups U.A.E." - a Dubai teacup/teddy-bear puppy showroom). This is a hiring assignment, so code quality, structure and clear documentation matter.
>
> **Step 0** - Study the live site first...
> **Tech stack**: Next.js (App Router) + TypeScript + Tailwind CSS...
> **[Full prompt includes global layout, all pages, forms/backend, seed data, quality bar, and process/deliverables sections]**

### Key requirements delivered:
- Pixel-faithful clone responsive at 390px, 768px, and 1440px
- Next.js 16 App Router + TypeScript + Tailwind CSS v4 + Turbopack
- `next/image` + `next/font` (Fraunces, Figtree, Shantell Sans) + per-page metadata (`en_AE`)
- 8 unique pages + API route (`/api/enquiry`)
- 15 available puppies + 30 gone-home alumni tickets
- 100% typed data files in `/src/data/`
- Full project documentation: `PLAN.md`, `PROMPTS.md`, `DECISIONS.md`, `README.md`
- Zod form validation + honeypot spam protection + IP rate limiting
- 58 static routes compiled and prerendered cleanly in production build

---

## Prompt 2 — Clarification & Implementation Approvals

> The user approved starting with Step 0, writing PLAN.md, and building out the Next.js project scaffold with remote patterns and typed data layers.

---

## Prompt 3 — Font Rendering, Typography & Animation Fixes

> "lets fix the words issues as you can see in the screen shots, that the fonts are not fixed and fix other issues and animations"

### Key actions delivered:
- Fixed `@import` rule placement in `src/app/globals.css` ensuring `@import` rules precede all other styles.
- Corrected CSS font variables and classes (`font-plush`, `font-scrawl`, `font-sans`) mapping directly to Google Fonts (`Fraunces`, `Shantell Sans`, `Figtree`).
- Added smooth easing and staggered delay classes for entrance animations.
- Ensured crisp text rendering with `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`.

---

## Prompt 4 — Carousel Overlap & Element Stacking Tuning

> "either remove this element or make it raising in up direction behind the corusel. cause right now it just disturbing it"

### Key actions delivered:
- Identified overlapping animated elements in the hero breed carousel and the "Meet the pups" horizontal cards section.
- Repositioned the walking mascot in `MeetThePupsSection.tsx` behind the cards (`z-[1]`), raising it up behind the wooden floor base with subtle opacity (`opacity-60`) rather than obstructing the puppy cards.

---

## Prompt 5 — Hero Mascot Face Removal

> "I wanna remove this" (with screenshot pointing to circular mascot badge floating on top of the hero breed carousel)

### Key actions delivered:
- Removed the absolute-positioned floating mascot face overlay (`animate-float`) from `HeroSection.tsx` to give the breed category carousel a clean, unobstructed view.

---

## Prompt 6 — Push to GitHub via API (Zero-Git Environment)

> "great lets push it to the git hub, my git hub token: [TOKEN] git repo: https://github.com/Yaduraj21/insta_biz_web_task.git" / "I think we can do this with the help of git token"

### Key actions delivered:
- Implemented an automated Node.js push script (`github_push.js`) leveraging the GitHub REST API (Blobs, Trees, Commits, and Refs).
- Uploaded all 113 project source files, images, and configurations directly to the `main` branch of `Yaduraj21/insta_biz_web_task` without requiring a local Git installation.

---

## Prompt 7 — README.md Documentation Updates

> "update readme.md file if needed"

### Key actions delivered:
- Added direct GitHub repository URL and updated clone commands.
- Expanded the project tree in `README.md` to include new UI components (`AnimatedSection.tsx`, `PawCursor.tsx`) and hooks (`useScrollAnimation.ts`).
- Documented custom interactive paw cursor trails and scroll reveal animations.
- Pushed updated `README.md` to GitHub.

---

## Prompt 8 — Happy Families Lightbox Cursor Stacking Fix

> "in the happy famalies page the cursor get behind, I marked the cursor as well, please fix it then push it"

### Key actions delivered:
- Diagnosed root cause: Native HTML5 `<dialog>` element with `showModal()` promotes the dialog and `::backdrop` into the browser's Top Layer, which strictly renders above all regular DOM elements regardless of `z-index`.
- Refactored `FamilyLightbox.tsx` and `MobileMenu.tsx` from native `<dialog>` to accessible fixed overlay modals (`role="dialog"`, `aria-modal="true"`).
- Maintained all accessibility features: keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), body scroll lock, and backdrop click-to-close.
- Increased `PawCursor.tsx` z-index to `999999` (trails at `999998`), ensuring the custom paw cursor renders seamlessly on top of both backdrops and modal cards.
- Verified production build (`npm run build` — 58/58 pages compiled cleanly) and pushed commit `5def0b6` to GitHub.

---

## Prompt 9 — Update PLAN.md and PROMPTS.md & Push to GitHub

> "please update the plan.md and prompt.md as well and then push it as well"

### Key actions delivered:
- Synchronized `PROMPTS.md` with complete history of user prompts, root-cause analyses, and implemented solutions.
- Updated `PLAN.md` with post-launch architectural refinements, modal top-layer stacking resolution, and zero-git GitHub API deployment strategy.
- Pushed updated documentation to GitHub `main` branch.

---

## Prompt 10 — System Design Diagram Integration & Push

> "if this image is appropriate, can we add it to the plan.md and if yes then please add it"

### Key actions delivered:
- Evaluated system design diagram: accurately maps developer pipeline, Vercel edge caching, Next.js App Router core, typed data layer, API enquiry route with spam protection, and external WhatsApp/social/Resend integrations.
- Persisted high-resolution asset to `/public/system-design.png`.
- Embedded diagram and comprehensive architecture overview into `PLAN.md` and `README.md`.
- Pushed commit to GitHub `main` branch.
