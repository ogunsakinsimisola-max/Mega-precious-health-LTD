# Base44 Dev Environment

## Overview
This is a **Vite + React + TypeScript** static marketing/brand website ("Mega Precious Health LTD") using **Bun** as the package manager. No backend, no database — purely a frontend SPA.

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d
```
- Web entry point: http://localhost:3000
- Dev server: `bun dev` → `vite --port=3000 --host=0.0.0.0` (live reload enabled)
- Package manager: Bun (`bun.lock`); deps installed via `bun install --frozen-lockfile` on container start

## Key notes
- The `@google/genai` (Gemini) dependency and `GEMINI_API_KEY`/`APP_URL` env vars are declared in `.env.example`/`metadata.json` but are **not referenced anywhere in the source code**. The site renders fully without any external credentials.
- Vite host allowlist is handled via the `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var (passed bare; platform sets it).
- HMR can be disabled via `DISABLE_HMR=true` (see `vite.config.ts`).

## Verifying it works
- `curl -s http://localhost:3000/` should return the HTML with `<title>Mega Precious Health LTD...`
- Healthcheck checks for `id="root"` in the served page.
