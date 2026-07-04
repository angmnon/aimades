# AGENTS.md

## Project Overview
**MADES** — the Industrial World Model marketing & console website. An English-language, premium dark-themed marketing site for AIMADES, built to deploy on Cloudflare Pages. Stack: Next.js 16 (App Router, static/edge-friendly), React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui, Framer Motion, Supabase Auth.

## Build & Run
- Install: `pnpm install`
- Dev: `pnpm dev` (listens on `${DEPLOY_RUN_PORT}`, HMR via port 6000)
- Build: `pnpm build`
- Start: `pnpm start`
- Type check: `pnpm ts-check`
- Lint: `pnpm lint --quiet`

## Directory Structure
```
public/
  logo.svg, favicon.svg            # brand assets
src/
  app/                             # Next.js App Router pages
    page.tsx                       # Home (all marketing sections)
    login/, register/, forgot-password/
    dashboard/                     # authenticated console stub
    docs/, research/, careers/, news/, partners/, contact/
    privacy/, terms/
    api/supabase-config/route.ts   # public config endpoint (anon key + url)
  components/
    ui/                            # shadcn/ui primitives
    sections/                      # home page sections
    BackgroundAurora.tsx           # aurora + grid + breathing effects
    Header.tsx  Footer.tsx  Logo.tsx  SimplePage.tsx
  lib/
    content.ts                     # marketing copy & structured content
    supabase-browser.ts            # Supabase client factory (memoized)
    supabase-config-inject.tsx     # fetches public anon config on mount
    utils.ts                       # cn helper
  storage/database/
    supabase-client.ts             # generic supabase client helper
```

## Auth
- Supabase Auth via `@supabase/supabase-js` (cookie-safe SSR helper available).
- Public Supabase URL/anon-key are served from `/api/supabase-config` (no secrets exposed).
- Client creates a singleton once config arrives; sign-in / sign-up / sign-out / magic-link / forgot-password flows implemented client-side.
- The `x-session` header is reserved for future authenticated API calls.
- Email + password is enabled. Forgot-password page posts a reset email.

## Styling
- Dark-first theme with aurora gradients (`src/components/BackgroundAurora.tsx`), grid overlay, gradient text, glass cards (`backdrop-blur-xl`), breathing / pulse animations (`@keyframes breathe`, `pulse-dot`, `orb-a/b/c`).
- Primary gradient: cyan → indigo → violet; accents in cyan / violet / indigo.
- Display typeface via Google Fonts CN domain: Space Grotesk (loaded in `globals.css` at `@import url(https://fonts.googleapis.cn/...)`).
- Body: Inter via next/font.

## Content
All marketing copy (hero, architecture layers, capability matrix, foundation models, scenarios, trusted by, CTA) lives in `src/lib/content.ts` to keep text centralized and bilingual-easy. All visible copy is English.

## Cloudflare Deployment Notes
- The project is written in standard Next.js (App Router) with no Node-only APIs in client components, so it deploys cleanly to Cloudflare Pages (`next-on-pages` optional). Avoid server-rendered code that requires Node.js runtime.
- Supabase Auth is fully edge-compatible.
- All environment secrets (`SUPABASE_URL`, `SUPABASE_ANON_KEY`) are injected via runtime env; the `/api/supabase-config` route already falls back to env vars when Coze CLI is unavailable.

## Conventions
- Strict TypeScript, no `any`, no implicit any. All props/types explicit.
- Tailwind v4 `@theme` block in `globals.css` defines the color/type scale.
- Use `motion` from `framer-motion` for reveal/scroll animations; use `whileInView={{ once: true }}` for entry animations.
- No hard-coded ports; always read `process.env.DEPLOY_RUN_PORT` when needed.
- Images/SVGs for logo are inline (Logo.tsx) to avoid hydration issues from `next/image` aspect-ratio warnings.
