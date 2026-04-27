# Accredian Enterprise Clone

A Next.js clone of [enterprise.accredian.com](https://enterprise.accredian.com) built for a Full Stack Developer internship assignment.

## Live Demo

[View Live Site](YOUR_VERCEL_URL)

## GitHub Repository

[https://github.com/arnavvsharmaaa/accredian-enterprise](https://github.com/arnavvsharmaaa/accredian-enterprise)

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | React framework with file-based routing |
| Tailwind CSS | Utility-first responsive styling |
| JavaScript (ES6+) | Component logic and interactivity |
| Vercel | Deployment and hosting |

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/arnavvsharmaaa/accredian-enterprise.git
   ```

2. **Navigate to project folder**
   ```bash
   cd accredian-enterprise
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Approach Taken

- Built each section as an **independent reusable component** under `/components`
- Used **Next.js App Router** for modern routing structure (`app/page.js`)
- **Tailwind CSS** for responsive mobile-first styling throughout
- All repeated data stored in **arrays and mapped** to avoid hardcoded repetition
- **Custom smooth scroll navigation** with `requestAnimationFrame` + `easeInOutCubic` easing — accounts for sticky navbar offset
- **Lead capture form** with client-side validation and a Next.js API route handler (`/api/contact`)
- **Animated statistics counter** using `IntersectionObserver` — counts up only when section enters the viewport
- **Horizontal timeline** layout for the AccredianEdge section with mobile horizontal scroll

## Components Built

| Component | Description |
|---|---|
| `Navbar` | Sticky with custom smooth scroll + mobile hamburger menu |
| `Hero` | Two-column layout with corporate image and CTA |
| `Stats` | Animated counter triggered on scroll into view |
| `Partnerships` | Company logo/name badges grid |
| `AccredianEdge` | Horizontal alternating timeline with dashed connectors |
| `DomainExpertise` | Responsive card grid with icons |
| `CourseSegmentation` | Colored 2×2 category grid |
| `WhoShouldJoin` | Blue background section with audience cards |
| `CATFramework` | Three connected circles (Concept → Application → Tools) |
| `HowWeDeliver` | Numbered 3-step process cards |
| `FAQ` | Tabbed accordion with 3 content categories |
| `Testimonials` | Partner quote cards with company badges |
| `LeadForm` | Validated form wired to `/api/contact` |
| `CTABanner` | Full-width blue call-to-action strip |
| `Footer` | Multi-column with real social and page links |

## API Integration

`POST /api/contact` — handles lead form submissions

- Parses JSON request body
- Validates required fields: `name`, `company`, `email`, `phone`, `teamSize`
- Validates email format via regex
- Returns `400` with `missingFields` array if validation fails
- Returns `200` with `{ success: true, data: { ... } }` on success
- Logs each submission to the server console with a timestamp

## AI Usage

- **Claude AI** — Project planning, blueprint creation, section-by-section prompt writing, and debugging guidance
- **Antigravity IDE** — Code generation for all components based on structured prompts
- **Manual work** — Reviewing all generated code, testing each component, fixing bugs, adjusting styling, connecting components, and deployment configuration

## Improvements With More Time

- Add a database (MongoDB / PostgreSQL) to persist form submissions
- Add email notifications on form submit using Nodemailer or SendGrid
- Add scroll-triggered entrance animations using Framer Motion
- Improve mobile responsive design across all sections
- Replace text badge logos with real company SVG logos
- Add more interactive elements to closer match the original site
- Add unit and integration tests for components
- Migrate to TypeScript for better type safety
