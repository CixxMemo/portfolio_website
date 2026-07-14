# Mehmet Can Kocakurt — Portfolio

Personal portfolio site. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Quick Start

```bash
git clone <your-repo-url>
cd portfolio_site
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `N8N_CONTACT_WEBHOOK_URL` | For contact form | n8n Cloud webhook URL |
| `N8N_SHARED_SECRET` | For contact form | Shared secret for webhook verification |
| `UPSTASH_REDIS_REST_URL` | For rate limiting | Upstash Redis REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | For rate limiting | Upstash Redis REST token |
| `NEXT_PUBLIC_SITE_URL` | For SEO | Your production URL |

> The site works without any env vars — the contact form logs to the console and rate limiting is skipped.

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

```bash
npm run build   # verify locally first
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx              # Home
│   ├── work/
│   │   ├── page.tsx          # Case studies index
│   │   └── [slug]/page.tsx   # Case study detail
│   ├── contact/page.tsx      # Contact (direct links + form)
│   └── api/contact/route.ts  # POST handler → n8n webhook
├── components/
│   ├── layout/               # Navbar, Footer, SectionWrapper
│   ├── home/                 # HeroSection, Expertise, FeaturedWork, AboutSection, ContactTeaser
│   ├── work/                 # ProjectCard
│   ├── contact/              # ContactForm
│   └── mdx/                  # OutcomesBox, CaseStudyCTA
├── lib/
│   ├── content.ts            # Case study data
│   ├── fonts.ts              # Font config
│   ├── utils.ts              # Helpers
│   └── ratelimit.ts          # Upstash rate limiter
├── styles/globals.css        # Design tokens + base styles
└── types/index.ts            # Shared types
```

## Content Editing

### Add a case study

1. Open `src/lib/content.ts`
2. Add a new entry to the `projects` array:

```ts
{
  slug: "your-project-slug",
  title: "Project Title",
  description: "One-line description",
  client: "Client type or 'Pilot Project'",
  timeline: "1 week",
  stack: ["n8n", "Notion API"],
  role: "Sole builder",
  tags: ["Automation"],
  featured: true,
  outcomes: [
    { label: "What was measured", value: "The result" },
  ],
  body: `## Problem
...
## Solution
...
## Results
...`,
}
```

3. `npm run build` to verify, then push.

### Edit personal info

| What | File |
|------|------|
| Name / logo | `src/components/layout/Navbar.tsx` |
| SEO metadata | `src/app/layout.tsx` |
| Hero text | `src/components/home/HeroSection.tsx` |
| About bio | `src/components/home/AboutSection.tsx` |
| Expertise items | `src/components/home/Expertise.tsx` |
| Social links | `src/components/layout/Footer.tsx`, `src/components/home/ContactTeaser.tsx` |
| Contact email | `src/app/contact/page.tsx`, `src/components/home/ContactTeaser.tsx` |

## Wiring n8n

1. Create a new n8n Cloud workflow with a **Webhook** trigger.
2. Add a **Code** node to verify the secret:

```js
const secret = $input.first().headers['x-portfolio-secret'];
if (secret !== 'YOUR_SHARED_SECRET') {
  throw new Error('Unauthorized');
}
return $input.all();
```

3. Add downstream nodes (Notion, Resend, Slack — as needed).
4. Copy the webhook URL and secret to `.env.local` and Vercel.

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Space Grotesk, Inter, JetBrains Mono |
| Forms | React Hook Form + Zod |
| Rate Limiting | Upstash Ratelimit |
| Automation | n8n Cloud webhooks |
| Deploy | Vercel |

## License

Private. All rights reserved.
