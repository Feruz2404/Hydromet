# Hydromet — O‘zgidromet Landing (Vite + React + TS + Tailwind)

Premium, responsive landing page for **O‘zgidromet (Hydromet)**.

## Important: add official logo before deploy
This repo intentionally does **not** include any placeholder logo assets.

Before running or deploying, add the official logo images:
- `public/logo.png`
- `public/favicon.png`

**Do not** replace the official logo with SVG/Lucide placeholders.

## Tech
- Vite
- React
- TypeScript
- Tailwind CSS

## Weather
Uses Open‑Meteo current conditions for Tashkent (Asia/Tashkent timezone).

## Development
```bash
npm install
npm run dev
```

## Typecheck
```bash
npm run typecheck
```

## Build
```bash
npm run build
npm run preview
```

## Vercel settings
- Framework: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

## Uploading logo files (GitHub UI)
1. Open the repo on GitHub.
2. Go to the `public/` folder.
3. Click **Add file → Upload files**.
4. Upload your official files as **exact names**:
   - `logo.png`
   - `favicon.png`
5. Commit directly to `main` (or via PR if you prefer).

## Notes
- No admin panel
- No database
- No authentication
- No fake statistics
