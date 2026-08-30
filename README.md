# Mohammad Shahil Khan — Portfolio

A modern, full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, and a production-ready contact workflow.

The portfolio presents selected software engineering work across full-stack web development, Android applications, AI/API integration, technical evaluation work, education, certifications, and resume access.

## Live Portfolio

**Production:** https://shahilkhan-dev.vercel.app

## Overview

This portfolio was rebuilt from the ground up as a modern Next.js application with an emphasis on:

- Clear software-engineering positioning
- Recruiter-friendly project presentation
- Responsive and accessible UI
- Full-stack contact functionality
- Structured content architecture
- SEO and social metadata
- Versioned resume and profile-photo delivery
- Automated unit, integration, component, and end-to-end testing
- Maintainable deployment on Vercel

## Professional Focus

**Software Engineer & Full-Stack Developer**

Building practical web, Android, and AI-enabled software.

## Features

### Portfolio Experience

- Responsive editorial-style homepage
- Sticky desktop and mobile navigation
- Selected engineering work
- Dedicated project case studies
- Technical experience
- Capabilities and skills
- Services
- About and education
- Verified certifications
- Versioned resume experience
- Google Drive-backed profile photo
- Full-stack contact form
- Responsive footer with professional links and location

### Project Case Studies

The portfolio currently includes:

- **Tourist Safety** — Full-stack safety-focused web application
- **Bharat Bhraman** — Native Android travel application published on Google Play
- **FitZone** — Responsive business-facing fitness website
- **GeoAI Smart Explorer** — Android geography learning application
- **UtilMonitor** — Android utility-tracking application

Each project route includes:

- Project summary
- Detailed overview
- Technology stack
- Engineering highlights
- Relevant external links
- Previous / next project navigation

## Resume

The `/resume` route provides:

- Professional resume overview
- View Resume action
- Download PDF action
- Route-specific SEO metadata
- Stable Google Drive-backed document delivery

The resume is referenced through a stable Google Drive file ID. A newer PDF can therefore replace the current version through Google Drive version management without modifying portfolio source code or redeploying the application.

## Profile Photo

The Hero profile photo is also backed by a stable Google Drive file ID and served through Googleusercontent.

This allows the displayed photo to be updated through file version replacement while keeping the portfolio implementation unchanged.

## Certifications

Selected verified credentials include:

- **Introduction to Android Mobile Application Development** — Meta · Coursera
- **Programming Fundamentals in Kotlin** — Meta · Coursera
- **Programming in C++: A Hands-on Introduction Specialization** — Codio · Coursera
- **Mastering Data Structure and Algorithm** — Udemy

Each credential shown on the portfolio links to a publicly verifiable certificate page.

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
| Unit / Integration Testing | Vitest |
| Component Testing | Testing Library |
| End-to-End Testing | Playwright |
| Deployment | Vercel |

## Application Routes

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

A custom Not Found experience is also included.

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── contact/
│   ├── resume/
│   ├── work/
│   ├── icon.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   ├── sections/
│   ├── seo/
│   └── ui/
├── content/
│   ├── capabilities.ts
│   ├── certifications.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── services.ts
│   └── types.ts
├── lib/
│   ├── contact-options.ts
│   ├── contact-schema.ts
│   ├── mail.ts
│   ├── profile-photo.ts
│   ├── resume.ts
│   └── site.ts
└── test/
    └── setup.ts

e2e/
└── portfolio.spec.ts
```

## Contact Architecture

The contact form is implemented as a real full-stack workflow.

### Request Flow

```text
Contact Form
    ↓
POST /api/contact
    ↓
Content-Type and request-size checks
    ↓
Zod validation
    ↓
Honeypot spam validation
    ↓
Nodemailer SMTP transport
    ↓
Portfolio inbox
```

The API includes:

- JSON-only request validation
- Request-size protection
- Field-level validation
- Honeypot spam protection
- Structured HTTP error responses
- Safe user-facing failure messages
- Server-side SMTP delivery

SMTP credentials are never committed to the repository.

## Environment Variables

Create `.env.local` based on `.env.example`.

```env
CONTACT_SMTP_HOST=smtp.gmail.com
CONTACT_SMTP_PORT=465
CONTACT_SMTP_SECURE=true

CONTACT_SMTP_USER=
CONTACT_SMTP_PASS=
CONTACT_TO_EMAIL=
```

`CONTACT_SMTP_USER` and `CONTACT_SMTP_PASS` are required for contact-form email delivery.

## Local Development

### Requirements

- Node.js 22+
- npm
- Chromium installed through Playwright for end-to-end testing

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm test
npm run test:watch
npm run test:e2e
```

## Testing

The project uses complementary testing layers rather than relying on a single type of test.

### Vitest

Coverage includes:

- Contact schema validation
- Valid and invalid form data
- Input trimming
- Honeypot behavior
- Contact API HTTP responses
- Request-size handling
- Malformed request handling
- Mail-delivery failure behavior
- ContactForm submission
- Success and reset behavior
- API validation errors
- Network failure fallback
- Disabled submission state

Current suite:

**18 tests passing**

### Playwright

Chromium end-to-end smoke coverage includes:

- Homepage rendering
- Primary portfolio experience
- Work listing
- Project case-study navigation
- Resume actions
- Desktop home navigation
- Mobile navigation at 390px

Current suite:

**5 tests passing**

The automated test suites do not send real emails.

## SEO

Implemented SEO and discovery features include:

- Canonical URLs
- Route-specific metadata
- Open Graph metadata
- Twitter card metadata
- Person structured data
- WebSite structured data
- XML sitemap
- Robots configuration
- Dynamically generated favicon
- Dynamically generated social image
- Custom Not Found behavior

## Accessibility

The portfolio includes:

- Semantic heading hierarchy
- Accessible navigation labels
- Keyboard-accessible interactive controls
- Skip-to-content navigation
- Form labels
- Error associations
- `aria-invalid` validation states
- Live submission status messaging
- Reduced-motion handling
- Responsive layouts
- Meaningful image alternative text

The testing process also identified and corrected semantic heading structure on the standalone Work page.

## Security and Privacy

The application uses several defensive defaults:

- SMTP secrets stored only in environment variables
- No public phone number
- No authentication secrets exposed to client code
- Request-size checks on the contact endpoint
- Honeypot spam protection
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- Restrictive browser Permissions Policy
- Disabled Next.js `X-Powered-By` header

## Content Architecture

Portfolio content is separated from presentation components.

Structured content modules are maintained for:

- Profile
- Projects
- Experience
- Capabilities
- Services
- Education
- Certifications

This keeps content updates independent from UI implementation and helps reduce duplication across pages.

## Design Direction

The visual system follows a restrained editorial engineering style:

- Strong typography
- Neutral surfaces
- Functional blue accents
- Thin borders
- Minimal shadows
- Limited functional icon usage
- Responsive layouts
- Clear information hierarchy
- No fake statistics
- No skill percentages
- No rating bars
- No decorative dashboards
- No unnecessary animation framework

The goal is to keep attention on engineering work, technical credibility, and professional communication.

## Deployment

The application is designed for Vercel.

Preview deployments are used to validate changes before they reach production.

Production contact delivery requires the following environment variables:

```text
CONTACT_SMTP_HOST
CONTACT_SMTP_PORT
CONTACT_SMTP_SECURE
CONTACT_SMTP_USER
CONTACT_SMTP_PASS
CONTACT_TO_EMAIL
```

The project can then be deployed through the connected Git repository or Vercel tooling.

## Engineering Principles

This rebuild intentionally avoids unnecessary portfolio complexity.

Decisions include:

- No CMS where structured source content is sufficient
- No database where persistent application data is unnecessary
- No fake testimonials or client logos
- No artificial GitHub statistics
- No decorative skill ratings
- No large animation dependency
- No unnecessary theme system
- No public exposure of private contact information

The implementation prioritizes maintainability, accessibility, performance, credibility, and clarity.

## Author

**Mohammad Shahil Khan**

Software Engineer & Full-Stack Developer

- GitHub: https://github.com/shahilkhan001
- LinkedIn: https://www.linkedin.com/in/mohammad-shahil-khan/
- Portfolio: https://shahilkhan-dev.vercel.app

---

Built and maintained as a personal software-engineering portfolio.
