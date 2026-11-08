# Sites By Andrew

A mobile-first Astro website for Sites By Andrew, focused on practical web and small-business solutions for local cleaning companies.

## Local development

- Node.js 22.12 or later
- `npm install`
- `npm run dev`

## Build and checks

- `npm run check`
- `npm run build`

The site uses the Astro Vercel adapter. Contact requests use the hosted form endpoint through `src/pages/api/sendEmail.ts`. Blog pages are prepared for future Penny posts. Penny doesn't provide a custom-site feed/API, so new articles must be supplied as Markdown and connected when the post backend is decided.
