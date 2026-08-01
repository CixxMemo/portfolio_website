# 🚀 Mehmet Can Koçakurt — Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](#license)

A high-performance, visually striking personal portfolio website for **Mehmet Can Koçakurt** — *AI System Developer & Architect*. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4, featuring high-contrast brutalist aesthetic touches, interactive modal dialogs, smooth scroll reveal transitions, and modular content architecture.

---

## 🌟 Key Features

- 🎨 **Neo-Brutalist & High-Contrast Design**: Distinctive aesthetic featuring bold typography (**Outfit** & **Inter** fonts), vibrant color accents (Energetic Orange, Deep Navy, Crisp White), and crisp structural borders.
- ⚡ **Next.js 16 & React 19 Engine**: Built on the Next.js App Router architecture for optimal rendering performance, zero layout shift, and SEO excellence.
- 📱 **Fully Responsive Layout**: Fluid, mobile-first design ensuring seamless user experience across smartphones, tablets, and desktop displays.
- 🧩 **Interactive Project Showcase**: Dynamic portfolio modal displaying full project breakdowns, metrics, architecture diagrams, role details, and tech stack tags.
- 📰 **Blog & Articles Section**: Live modal reader for in-depth technical posts, complete with reading time estimations, category tags, and structured markdown-style content.
- 🛤️ **Interactive Career Journey**: Timeline tracking professional milestones, career evolution, roles, and key technical achievements.
- 🧰 **Categorized Skills Matrix**: Interactive skill grid highlighting core competencies across AI systems, backend engineering, cloud/DevOps, and frontend development.
- 🔄 **n8n & ASP.NET Backend Ready**: Clean separation of data services (`BlogService`, Zod schema validation) engineered for REST API and n8n automation webhook integration.
- 🔍 **Automated SEO & Sitemap**: Integrated `next-sitemap` build pipeline generating automated XML sitemaps and rich OpenGraph/Twitter meta tags.

---

## 🛠️ Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.1.6 (App Router) | Server Components & client-side rendering optimization |
| **UI Library** | React 19.2.3 | Concurrent React features & modern Hooks |
| **Language** | TypeScript 5.0+ | Strict type safety across components, props, and data schemas |
| **Styling** | Tailwind CSS v4 | Utility-first CSS styling with modern `@theme` design tokens |
| **Typography** | Google Fonts (`next/font`) | **Outfit** (Headings) & **Inter** (Body text) |
| **Validation & Forms** | Zod 4 & React Hook Form | Runtime schema validation (`BlogSchema`, project schemas) |
| **SEO & Sitemaps** | `next-sitemap` 4.2.3 | Post-build XML sitemap generation |
| **Linting** | ESLint 9 | Modern flat config (`eslint-config-next`) for code quality |

---

## 📁 Project Structure

```
portfolio_site/
├── public/                     # Static assets (favicons, OG images, badges)
│   ├── favicon.ico
│   └── og-default.png
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── globals.css         # Tailwind v4 directives, font variables, design tokens
│   │   ├── layout.tsx          # Root Layout (Metadata, Fonts, Navbar, Footer)
│   │   └── page.tsx            # Single-page portfolio root (Hero, Journey, Projects, Skills, Blogs, Contact)
│   ├── components/             # Component library
│   │   ├── features/           # Feature section components
│   │   │   ├── HeroSection.tsx     # Hero banner with bio and call-to-action
│   │   │   ├── JourneySection.tsx  # Interactive career timeline
│   │   │   ├── ProjectsSection.tsx # Portfolio showcase with category filtering
│   │   │   ├── SkillsSection.tsx   # Skill matrix & tech categories
│   │   │   ├── BlogsSection.tsx    # Technical articles grid
│   │   │   ├── BlogList.tsx        # Blog items list renderer
│   │   │   ├── ContactSection.tsx  # High-impact contact banner & social links
│   │   │   └── index.ts            # Centralized export barrel
│   │   ├── layout/             # Shell layout components
│   │   │   ├── Navbar.tsx          # Sticky navigation header
│   │   │   ├── Footer.tsx          # Copyright & social links footer
│   │   │   └── index.ts
│   │   └── ui/                 # Reusable UI primitives
│   │       ├── Modal.tsx           # Accessible modal dialog overlay
│   │       └── index.ts
│   ├── hooks/                  # Custom React hooks
│   │   └── useModal.ts         # Modal dialog open/close state management
│   ├── lib/                    # Utilities & content storage
│   │   ├── content.ts          # Centralized data repository (Projects, Blogs, Skills, Journey)
│   │   ├── fonts.ts            # Google Fonts loading configuration (Outfit, Inter)
│   │   ├── useScrollReveal.ts  # Scroll animation hook (IntersectionObserver)
│   │   └── utils.ts            # Utility functions (`clsx` helper)
│   ├── services/               # Data services & API abstraction
│   │   └── blogService.ts      # Blog data fetching service & Zod schema validation
│   └── types/                  # Shared TypeScript interfaces & types
│       ├── index.ts            # Core domain models (Project, Journey, Skill)
│       └── blog.ts             # Blog schema & type declarations
├── .env.example                # Environment variables template
├── next-sitemap.config.js      # Sitemap builder configuration
├── next.config.ts              # Next.js application configuration
├── postcss.config.mjs          # PostCSS setup for Tailwind CSS v4
├── tsconfig.json               # TypeScript compiler & alias configuration (`@/*`)
└── package.json                # Project dependencies and script scripts
```

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (`v20+` recommended)
- **npm**: `v9+` (or `pnpm` / `yarn`)

### 1. Clone the Repository

```bash
git clone https://github.com/CixxMemo/portfolio_website.git
cd portfolio_website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Adjust the values in `.env.local` according to your environment (see [Environment Variables](#%EF%B8%8F-environment-variables)).

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

---

## ⚙️ Environment Variables

The site works out-of-the-box with default fallback settings. To enable full contact automation and production analytics, configure the following variables in `.env.local`:

| Variable | Required | Description | Example / Default |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical website URL used for metadata and sitemaps | `https://mehmetcan.dev` |
| `N8N_CONTACT_WEBHOOK_URL` | Optional | Webhook endpoint for n8n contact form automation | `https://n8n.example.com/webhook/...` |
| `N8N_SHARED_SECRET` | Optional | Secret key passed via `x-portfolio-secret` header | `your-shared-secret-here` |
| `UPSTASH_REDIS_REST_URL` | Optional | Upstash Redis REST URL for API rate limiting | `https://your-redis.upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | Optional | Upstash Redis REST token for authentication | `your-upstash-token` |
| `NEXT_PUBLIC_CAL_EMBED_URL` | Optional | Booking URL for Cal.com or Calendly integration | `https://cal.com/your-name/15min` |

---

## 📝 Content Management & Customization

The project uses a structured TypeScript data layer at `src/lib/content.ts`. You can update all portfolio content, personal info, journey items, and skills without modifying UI JSX components.

### 1. Managing Projects
Open [`src/lib/content.ts`](file:///Users/mehmetcankocakurt/Documents/development/portfolio_site/src/lib/content.ts) and add or update project objects inside the `projects` array:

```typescript
{
  slug: "ai-lead-pipeline",
  title: "Autonomous AI Lead Pipeline",
  description: "n8n and OpenAI integration saving 6 hours of manual processing per week.",
  client: "Pilot Project",
  timeline: "1 week",
  stack: ["n8n", "OpenAI", "Notion API", "Resend"],
  role: "Sole Builder & Architect",
  tags: ["Automation", "AI / ML"],
  featured: true,
  outcomes: [
    { label: "Time Saved", value: "~6 hrs/week" },
    { label: "Response Speed", value: "< 5 seconds" }
  ],
  body: `## Problem\nDetailed description...\n\n## Solution\nHow it was built...`
}
```

### 2. Updating Skills & Journey Matrix
Modify the `skills` array or `journey` entries in `src/lib/content.ts` to update your technical stack and career timeline.

### 3. Connecting Backend / External Blog APIs
Blog fetching logic is encapsulated in [`src/services/blogService.ts`](file:///Users/mehmetcankocakurt/Documents/development/portfolio_site/src/services/blogService.ts). When your ASP.NET backend or CMS API is live, update `BlogService.getLatestBlogs()` to perform a live `fetch()` validated by Zod schema.

---

## 📜 NPM Scripts Reference

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches Next.js local development server on port `3000` |
| `npm run build` | Compiles and builds the production-ready web application |
| `npm run postbuild` | Executed automatically post-build to generate `sitemap.xml` |
| `npm run start` | Runs the compiled Next.js production build |
| `npm run lint` | Runs ESLint to check for code syntax errors and guidelines |

---

## 📄 License

© **Mehmet Can Kocakurt**. All rights reserved.  
This source code is private and intended solely for personal portfolio demonstration.
