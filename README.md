# Mohammad Shahil Khan — Portfolio

Personal software engineering portfolio for **Mohammad Shahil Khan**, built to present selected full-stack web, Android, and AI-enabled software projects.

**Live:** https://shahilkhan-dev.vercel.app

## Overview

This portfolio is a modern Next.js application focused on clear engineering presentation, maintainable architecture, responsive design, accessibility, and production deployment.

It includes:

- Selected software engineering projects
- Dedicated project case studies
- Technical experience
- Capabilities and services
- Education and certifications
- Resume access
- Server-side contact workflow
- SEO and social metadata
- Automated testing
- Responsive desktop and mobile layouts

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Typography | Geist, Geist Mono, Plus Jakarta Sans |
| Icons | Lucide React |
| Validation | Zod |
| Email | Nodemailer |
| Testing | Vitest, Testing Library, Playwright |
| Deployment | Vercel |

## Selected Work

### Tourist Safety

Full-stack safety-focused web application built with technologies including:

- React
- Node.js
- Express
- MongoDB
- Socket.IO
- JWT

### Bharat Bhraman

Native Android travel application built with:

- Kotlin
- Firebase
- Gemini API

Published on Google Play.

### FitZone

Responsive business-focused website demonstrating practical frontend development and presentation for a fitness-oriented use case.

### GeoAI Smart Explorer

Android geography learning application using Kotlin, mapping capabilities, and Firebase-backed functionality.

### UtilMonitor

Android utility-monitoring application using Kotlin and Firebase-backed storage and synchronization.

## Application Structure

The project uses the Next.js App Router with structured separation between application routes, reusable components, portfolio content, and supporting utilities.

Key areas include:

```text
src/
├── app/          # Routes, metadata, API, resume and project pages
├── components/   # Layout, sections and reusable UI
├── content/      # Structured portfolio content
├── lib/          # Validation, mail, site and asset configuration
└── test/         # Test configuration and supporting utilities

e2e/
└── portfolio.spec.ts
```

## Main Routes

```text
/
├── /work
│   ├── /work/tourist-safety
│   ├── /work/bharat-bhraman
│   ├── /work/fitzone
│   ├── /work/geoai-smart-explorer
│   └── /work/utilmonitor
├── /resume
├── /api/contact
├── /robots.txt
├── /sitemap.xml
├── /icon
└── /opengraph-image
```

## Contact Workflow

The portfolio includes a server-side contact workflow with:

- Input validation
- Spam-resistant honeypot handling
- Request safeguards
- Server-side email delivery
- Structured success and error responses
- User-facing form feedback

Secrets and SMTP credentials are stored outside the repository through environment configuration.

## Testing

The project uses multiple testing layers:

### Vitest and Testing Library

Used for:

- Validation logic
- Contact API behavior
- Contact form interactions
- Success and failure states

### Playwright

Used for browser-level smoke coverage including:

- Homepage rendering
- Navigation
- Project routes
- Resume actions
- Desktop behavior
- Mobile navigation

Automated tests do not send real contact emails.

## SEO

The portfolio includes:

- Canonical metadata
- Open Graph metadata
- Twitter metadata
- Structured data
- Sitemap
- Robots configuration
- Generated favicon
- Generated social preview image
- Custom Not Found page

## Accessibility

The interface includes considerations such as:

- Semantic heading structure
- Keyboard-accessible controls
- Skip-to-content navigation
- Accessible form labels
- Validation associations
- Live form status feedback
- Meaningful image alternative text
- Responsive layouts
- Reduced-motion handling

## Security

Application safeguards include:

- Secrets stored outside source control
- Server-side contact processing
- Request-size safeguards
- Input validation
- Honeypot spam protection
- Security-related HTTP headers
- Restricted browser permissions
- Disabled framework identification header

## Local Development

Requirements:

- Node.js 22+
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run validation:

```bash
npm test
npm run test:e2e
npm run lint
npm run build
```

## Design Direction

The portfolio follows a restrained editorial engineering style with:

- Strong typography
- Neutral surfaces
- Functional accent colors
- Thin borders
- Minimal shadows
- Clear information hierarchy
- Limited decorative effects

The design intentionally avoids fake statistics, skill percentages, rating bars, unnecessary dashboards, and excessive animation.

## Author

**Mohammad Shahil Khan**

Software Engineer & Full-Stack Developer

- Portfolio: https://shahilkhan-dev.vercel.app
- GitHub: https://github.com/shahilkhan001
- LinkedIn: https://www.linkedin.com/in/mohammad-shahil-khan/

## Copyright

Copyright © 2026 Mohammad Shahil Khan. All rights reserved.

This repository is publicly available for portfolio review and evaluation. It is **not released under an open-source license**.

See [NOTICE.md](NOTICE.md) for repository usage information.
