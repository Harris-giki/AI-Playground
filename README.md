# AI Playground — Website

The official website for **AI Playground**, ImagineArt's curated, invite-only
creative event held on **6 June 2026**.

Built with Next.js 16 (App Router), React 19, Tailwind 4, and Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Shell: fixed wordmark, navbar, theme provider, footer
│   ├── page.tsx         # Home — hero, philosophy teaser, segments, tiers, CTA
│   ├── details/         # Full event details (philosophy, segments, tiers, schedule, who)
│   └── globals.css      # Theme tokens, typography, utilities
├── components/          # Navbar, Footer, Countdown, ScrollReveal, ThemeProvider, icons
└── lib/site.ts          # Shared event config (apply URL, event date)
```

## Notes

- Apply CTA points to `/apply` which redirects to a Google Form URL — update
  that destination in `next.config.ts` and `src/lib/site.ts` once the form is live.
- Inspired by the ImagineArt AI Playground HTML reference (`../ai-playground.html`)
  and the Vyrothon site architecture.
