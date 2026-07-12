<p align="center">
  <img src="./public/readme/banner.svg" alt="Alex Benavídez Portfolio banner" width="100%" />
</p>

<p align="center">
  <a href="https://alexbenavidez.dev"><strong>Live Website</strong></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white" />
  <img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-DNS-F38020?logo=cloudflare&logoColor=white" />
</p>

## Overview

This repository contains the source code for my personal portfolio website. It presents my experience as a Senior Software Engineer working across enterprise systems, backend development, system integrations, mobile applications, and modern web products.

The project was built with a strong focus on performance, accessibility, responsive design, maintainability, and production-ready engineering practices.

## Preview

<p align="center">
  <img src="./public/readme/portfolio-preview.png" alt="Portfolio homepage preview" width="100%" />
</p>

## Features

- Responsive design across desktop, tablet, and mobile
- Dark and light themes
- Contact form with server-side validation
- Email delivery through Resend
- Honeypot and rate limiting for spam protection
- Custom domain with Cloudflare DNS
- SEO metadata, Open Graph, Twitter cards, sitemap, and robots
- Custom loading, error, and not-found pages
- Vercel Analytics and Speed Insights
- Accessible, type-safe component architecture

## Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui |
| Forms | React Hook Form, Zod |
| Email | Resend |
| Hosting | Vercel |
| DNS and email routing | Cloudflare |

## Lighthouse

| Category | Desktop score |
|---|---:|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Measured against the production build.

<p align="center">
  <img src="./public/readme/lighthouse-desktop.png" alt="Lighthouse desktop results" width="100%" />
</p>

## Project Structure

```text
src
├── app
│   ├── api
│   ├── error.tsx
│   ├── loading.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components
│   ├── layout
│   ├── shared
│   └── ui
├── constants
├── lib
├── sections
├── services
├── types
└── validations
```

## Local Development

```bash
git clone https://github.com/asamuel/alex-portfolio.git
cd alex-portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=
RESEND_FROM=
CONTACT_EMAIL=
```

Never commit real environment variable values.

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

The application is deployed on Vercel and connected to the custom domain `alexbenavidez.dev`. DNS and email routing are managed through Cloudflare.

## Roadmap

- [x] Responsive portfolio
- [x] Dark and light themes
- [x] Contact form and email integration
- [x] Custom domain
- [x] SEO and social metadata
- [x] Analytics and real-user performance monitoring
- [ ] Individual project pages
- [ ] Technical case studies
- [ ] Mobile bundle optimization
- [ ] Professional profile photography

## Contact

- Website: [alexbenavidez.dev](https://alexbenavidez.dev)
- LinkedIn: [linkedin.com/in/samuelbz](https://linkedin.com/in/samuelbz)
- GitHub: [github.com/asamuel](https://github.com/asamuel)
- Email: [contact@alexbenavidez.dev](mailto:contact@alexbenavidez.dev)

## License

This project is available under the MIT License.
