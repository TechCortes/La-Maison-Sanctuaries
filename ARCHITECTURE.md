# Architecture

This document describes the structure, runtime, and conventions of the
La Maison Sanctuaries site. It complements the high‑level overview in
[README.md](./README.md).

---

## 1. Runtime model

| Layer | Technology |
|---|---|
| Framework | TanStack Start v1 (React 19) |
| Bundler | Vite 7 |
| SSR runtime | Cloudflare Workers (`nodejs_compat`) |
| Static assets | Served from the same Worker bundle |
| Styling | Tailwind CSS v4 (CSS‑first via `src/styles.css`) |

The site is rendered server‑side on every request at the edge, then
hydrated on the client. There is no separate API server: the inquiry
form composes a `mailto:` URL — no fetch, no backend.

---

## 2. Directory layout

```
.
├── public/                       # Static files served at the root (favicons, og)
├── src/
│   ├── routes/                   # File‑based routing (auto‑registered)
│   ├── components/
│   │   ├── ui/                   # shadcn/ui primitives
│   │   └── *.tsx                 # Site‑specific composites
│   ├── hooks/                    # Reusable React hooks
│   ├── lib/                      # Pure utilities (cn, formatters)
│   ├── assets/                   # Imported images & brand marks
│   ├── styles.css                # Tailwind import + design tokens
│   ├── router.tsx                # Router factory (errors, scroll restoration)
│   └── routeTree.gen.ts          # ⚠️ auto‑generated, never edit
├── components.json               # shadcn/ui config
├── eslint.config.js              # Flat config
├── tsconfig.json                 # strict TS, "@/*" → "src/*"
├── vite.config.ts                # Lovable preset (do not duplicate plugins)
└── wrangler.jsonc                # Worker compat date + flags
```

---

## 3. Routing

Routes are flat files in `src/routes/`. The TanStack Router Vite plugin
parses them and writes `src/routeTree.gen.ts` automatically.

| File | URL | Notes |
|---|---|---|
| `__root.tsx` | — | HTML shell (`html`/`head`/`body`), global meta |
| `index.tsx` | `/` | Landing |
| `investment.tsx` | `/investment` | Investor page (own `head()`) |
| `maison-sainte-florence.tsx` | `/maison-sainte-florence` | Flagship page |

Each leaf route owns its own `head()` with unique title, description,
`og:title`, `og:description`, and `og:image` (when a hero exists). The
root deliberately does **not** set an `og:image` — leaves win.

---

## 4. Component layers

```
┌──────────────────────────────────────────┐
│  Routes (pages)                          │  src/routes/*.tsx
├──────────────────────────────────────────┤
│  Site composites                         │  SiteHeader, SiteFooter,
│  (brand‑specific, not reusable)          │  InquirySection, InquiryForm
├──────────────────────────────────────────┤
│  Motion / layout primitives              │  FadeIn
├──────────────────────────────────────────┤
│  shadcn/ui primitives                    │  src/components/ui/*
│  (Radix‑powered, project‑agnostic)       │
└──────────────────────────────────────────┘
```

Rules:
- **Pages** assemble composites — no business logic, no fetch glue.
- **Composites** are brand‑specific; they may import primitives but not
  other composites' internals.
- **Primitives** are project‑agnostic and stay aligned with shadcn/ui
  upstream so they can be regenerated.

---

## 5. Design system

Tokens live in `src/styles.css` as CSS variables in `oklch`. Tailwind v4
reads them through `@theme` blocks, so utility classes like
`bg-primary`, `text-foreground`, `border-border` resolve to the tokens.

**Never** write `text-[#5C1A24]` or `bg-white` in a component. Always:
1. Reference an existing token, or
2. Add a new token to `src/styles.css` first.

Typography is loaded via the document `<head>` (Cormorant Garamond +
Inter). Eyebrow labels use generous letter‑spacing to keep the
editorial feel.

---

## 6. Forms

`InquiryForm.tsx` uses **react‑hook‑form** with a **Zod** resolver:

```
Name        — required, 2..80 chars
Email       — required, valid email
Interest    — enum: Membership | Investor | Press | Other
Message     — required, 10..1000 chars
```

On submit, a `mailto:` URL is composed with all three principals in the
`To` field, the interest in the subject, and the message in the body.
Success/error feedback is shown with `sonner` toasts. There is no
network call — this is intentional for v1.

---

## 7. Edge runtime constraints

The Worker bundle uses `nodejs_compat`. Keep these rules in mind when
adding dependencies:

- ✅ Pure JS / ESM packages
- ✅ Web Standard APIs (`fetch`, `crypto`, `Response`)
- ❌ `child_process`, `sharp`, `canvas`, `puppeteer`
- ❌ Packages requiring native add‑ons (`.node` files, `node-gyp`)
- ❌ Packages that read arbitrary host filesystem paths at runtime

If a package "works in dev but breaks in production", it almost always
relies on a Node‑only runtime feature. Replace it with a Worker‑safe
alternative or move that workload off the Worker.

---

## 8. Adding a new page

1. Create `src/routes/<name>.tsx` with `createFileRoute("/<name>")`.
2. Add a unique `head()` block (title, description, og:*).
3. Compose existing site composites (`SiteHeader`, `SiteFooter`, …).
4. Use semantic tokens for all styling.
5. Link to it with `<Link to="/<name>">` — TanStack will type‑check.

You do **not** need to touch `routeTree.gen.ts`; it regenerates.

---

## 9. Deployment

- **Lovable** owns the production deployment to
  `lamaisonsanctuaries.lovable.app`.
- The codebase syncs bidirectionally with GitHub once connected via
  **Connectors → GitHub**.
- The same Worker bundle is portable to any Cloudflare account through
  `wrangler deploy`.
