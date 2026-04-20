# Eugene Leow — Digital Name Card

A single-page Next.js digital name card. The page shows current roles,
highlights, and contact links; displays a QR code that encodes the URL the page
is served from; and offers a downloadable `.vcf` so anyone who scans it can
tap **Save to Contacts**.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS
- `qrcode` (client-side QR generation)
- Deploys to Vercel as a static prerendered site

## Local development

```bash
npm install
npm run dev          # → http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Deploy to Vercel

You already have GitHub + Vercel accounts, so:

1. **Push to GitHub** from this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial digital name card"
   gh repo create digital-name-card --public --source=. --push
   ```
   (If you prefer the web UI: create an empty repo on github.com, then
   `git remote add origin <url> && git push -u origin main`.)

2. **Import into Vercel**:
   - Go to <https://vercel.com/new>
   - Select the `digital-name-card` repo
   - Accept all defaults (framework auto-detected as Next.js)
   - Click **Deploy**

3. Vercel will return a production URL like
   `https://digital-name-card-<hash>.vercel.app`. Open it — the QR code on the
   page automatically encodes whatever URL the page is served from, so no
   rebuild is needed. Scan it with a phone to confirm.

4. (Optional) Add a custom domain in Vercel → project → **Settings →
   Domains**.

## Editing the card content

All displayed content lives in these three files — no CMS, just edit and
redeploy:

- [`app/page.tsx`](app/page.tsx) — name, headline, bio, roles, highlights
- [`components/ContactLinks.tsx`](components/ContactLinks.tsx) — email /
  LinkedIn / website links
- [`app/vcard/route.ts`](app/vcard/route.ts) — contents of the downloadable
  vCard

## Routes

| Route     | What it serves                                                 |
| --------- | -------------------------------------------------------------- |
| `/`       | The card itself (static)                                       |
| `/vcard`  | `text/vcard` attachment — "Save to Contacts" (`eugene-leow.vcf`) |

Both routes are statically prerendered at build time.
