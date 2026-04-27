# Accredian Enterprise — Internship Assignment
## Project Blueprint

---

## What This Is
A Next.js clone of enterprise.accredian.com
India's enterprise learning platform that helps
companies upskill their workforce with IIT/IIM
certified programs, live mentorship, and analytics.

---

## Tech Stack (Mandatory)
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Language: JavaScript (functional components + hooks)
- Deployment: Vercel
- API: Next.js API routes (mock data)
- Forms: React Hook Form or plain useState

---

## Pages
1. Landing Page (/) — main page, all sections

---

## Landing Page Sections (top to bottom)

### 1. Navbar
- Logo left
- Nav links: Home, Programs, Why Accredian, Testimonials, Contact
- CTA button: "Get Started" (right side)
- Sticky on scroll
- Mobile: hamburger menu

### 2. Hero Section
- Headline: "Next-Gen Expertise for Your Enterprise"
- Subheadline: upskill workforce at scale
- Two CTA buttons: "Explore Programs" + "Talk to Us"
- Background: gradient or abstract

### 3. Stats Section
- 4 key numbers: eg 500+ Mentors, 94% Completion Rate,
  300+ Enterprise Clients, IIT/IIM Partners
- Animated counters

### 4. Features Section
- Grid of 6 feature cards:
  - Custom Curriculum
  - Live Mentorship
  - Real-time Analytics
  - Cohort Learning
  - Global Certifications
  - AI-driven Learning Paths

### 5. How It Works Section
- 4 step process:
  Step 1: Consultation
  Step 2: Custom Program Design
  Step 3: Onboarding
  Step 4: Analytics & Reviews

### 6. Testimonials Section
- 3 testimonial cards with quote, name, company
- Carousel or grid layout

### 7. Partners Section
- Logo strip: IIT, IIM, XLRI, SP Jain etc
- Scrolling marquee effect

### 8. Lead Capture Form (Bonus)
- Name, Company, Email, Phone, Team Size
- Submits to Next.js API route
- Stores in mock JSON or console logs

### 9. Footer
- Logo, links, social icons, copyright

---

## API Routes
- POST /api/contact — receives lead form data,
  returns success response
  (mock — just logs and returns 200)

---

## Component Structure
app/
├── page.js              # main landing page
├── layout.js            # root layout + metadata
├── globals.css          # global styles
├── api/
│   └── contact/
│       └── route.js     # lead capture API
components/
├── Navbar.jsx
├── Hero.jsx
├── Stats.jsx
├── Features.jsx
├── HowItWorks.jsx
├── Testimonials.jsx
├── Partners.jsx
├── LeadForm.jsx
└── Footer.jsx

---

## Rules
1. All components are functional, no class components
2. Tailwind only for styling, no inline styles
3. Fully responsive — mobile first
4. Reusable components — no duplicate code
5. Clean readable code with comments
6. No templates copied directly
7. Deploy to Vercel before submission