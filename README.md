# La Maison Sanctuaries

> Private Design Sanctuaries — a members' designer showhouse and living showroom.

The marketing & investor site for **La Maison**, featuring the flagship
**Maison Sainte‑Florence** in Saint‑Émilion (Bordeaux) and the investor
opportunity for upcoming European openings.

🌐 **Live:** [lamaisonsanctuaries.lovable.app](https://lamaisonsanctuaries.lovable.app)

---

## ✨ Overview

La Maison reimagines the country club as a private design sanctuary: a
members'-only retreat where world-class interior designers, art-of-living
craft, wellness, and sustainability meet. This site presents the brand,
the flagship property, and the investment opportunity, with an inquiry
flow that routes directly to the three founding principals.

### Pages

| Route | Purpose |
|---|---|
| `/` | Landing — hero, brand pillars, founders, inquiry |
| `/maison-sainte-florence` | Flagship property — concept, location, design intent gallery |
| `/investment` | Investor highlights, revenue streams, ESG, CTA |

---

## 🎨 Design System

A "Bordeaux warmth" palette built on semantic tokens defined in
`src/styles.css` (oklch). Never hard‑code colors in components.

| Token | Role |
|---|---|
| `--background` `#F5EFE6` | Bone |
| `--foreground` `#1F1A17` | Near‑black ink |
| `--primary` `#5C1A24` | Deep bordeaux |
| `--secondary` `#B8654A` | Soft terracotta |
| `--muted` `#E8DCC8` | Warm sand |

**Typography:** Cormorant Garamond (display) · Inter (body)
**Motion:** framer‑motion fade‑ins on scroll, slow and restrained.

---

## 🏗 Architecture

Built on **TanStack Start v1** (React 19 + Vite 7) targeting **Cloudflare
Workers** for edge SSR. File‑based routing under `src/routes/` is
auto‑registered by the TanStack Router Vite plugin.

```
src/
├── routes/                       # File‑based routes (auto‑registered)
│   ├── __root.tsx                # HTML shell, global head, providers
│   ├── index.tsx                 # Landing page
│   ├── maison-sainte-florence.tsx
│   └── investment.tsx
├── components/
│   ├── SiteHeader.tsx            # Slim header + monogram
│   ├── SiteFooter.tsx            # Principals' contact block
│   ├── InquirySection.tsx        # Section wrapper around the form
│   ├── InquiryForm.tsx           # Zod‑validated mailto submission
│   ├── FadeIn.tsx                # framer‑motion scroll reveal
│   └── ui/                       # shadcn/ui primitives (Radix)
├── hooks/
│   └── use-mobile.tsx
├── lib/
│   └── utils.ts                  # cn() + helpers
├── assets/                       # Brand marks, hero imagery
├── styles.css                    # Tailwind v4 + design tokens
├── router.tsx                    # createRouter, error boundary
└── routeTree.gen.ts              # ⚠️ auto‑generated — do not edit
```

### Data flow

The site is fully static / SSR‑rendered. The inquiry form is validated
client‑side with **Zod** + **react‑hook‑form** and opens a pre‑filled
`mailto:` to all three principals — no backend required for v1.

---

## 🛠 Tech Stack

**Framework**
- [TanStack Start](https://tanstack.com/start) v1 — full‑stack React 19, SSR
- [TanStack Router](https://tanstack.com/router) — type‑safe file‑based routing
- [TanStack Query](https://tanstack.com/query) — async state (available, unused in v1)
- [Vite](https://vitejs.dev) 7 — build tool
- [Cloudflare Workers](https://workers.cloudflare.com) — edge runtime (`wrangler.jsonc`)

**UI**
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) v4 (CSS‑first config in `src/styles.css`)
- [shadcn/ui](https://ui.shadcn.com) on [Radix UI](https://radix-ui.com) primitives
- [framer‑motion](https://www.framer.com/motion/) — animation
- [lucide‑react](https://lucide.dev) — icons
- [class‑variance‑authority](https://cva.style) + [tailwind‑merge](https://github.com/dcastil/tailwind-merge) — variant system

**Forms & validation**
- [react‑hook‑form](https://react-hook-form.com) + [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- [Zod](https://zod.dev) — schema validation
- [sonner](https://sonner.emilkowal.ski) — toast notifications

**Tooling**
- TypeScript 5 (strict)
- ESLint 9 + Prettier 3
- Bun (lockfile committed) — npm/pnpm also work

See [`package.json`](./package.json) for the complete list with versions.

---

## 🚀 Local Development

### Prerequisites

- Node.js ≥ 20 (or [Bun](https://bun.sh) ≥ 1.1)

### Setup

```bash
# Install
npm install        # or: bun install

# Dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview prod build
npm run preview

# Lint & format
npm run lint
npm run format
```

> The Vite plugin auto‑generates `src/routeTree.gen.ts` on dev and build —
> never edit it by hand. Add a new route by creating a file in `src/routes/`.

---

## 📐 Conventions

- **Routing:** flat dot‑separated filenames (`settings.profile.tsx`), never folders.
- **Imports:** `@tanstack/react-router` only — never `react-router-dom`.
- **Styling:** semantic tokens from `src/styles.css`. No raw color classes
  (`text-white`, `bg-red-500`) in components.
- **Components:** small and focused; reusable primitives live in `components/ui/`.
- **Server constraints:** SSR runs on Cloudflare Workers — avoid Node‑only
  packages (sharp, child_process, native add‑ons). See `wrangler.jsonc`.

---

## 🚢 Deployment

The project is deployed via **Lovable**. Click **Publish** in the editor
to ship to `lamaisonsanctuaries.lovable.app`. The same Worker bundle can
be deployed to any Cloudflare account via `wrangler deploy` once the
account is configured.

---

## 🤝 Contact

The three founding principals:

- **Lauren Lozano Ziol**
- **Michelle Jolas**
- **Holly‑Mae Post**

Inquiries through the form on the site route to all three.

---

## 📄 License

© La Maison. All rights reserved.

Built with [Lovable](https://lovable.dev).
