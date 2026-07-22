# SquareLabs Frontend

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (Next.js config)

## Project structure

- `src/app/` — routes and layouts (App Router)
- `src/components/` — UI components (client components where interactive)
- `src/constants/` — static content and data
- `src/lib/assets.ts` — helpers for static image imports

## Migrating from Vite

If you add new files from the old Vite setup, run `node migrate.mjs` to convert React Router imports, SVG `?react` suffixes, and file extensions. Then run `node fix-images.mjs` and `node fix-refs.mjs` for Next.js-specific fixes.
