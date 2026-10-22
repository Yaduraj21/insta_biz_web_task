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
