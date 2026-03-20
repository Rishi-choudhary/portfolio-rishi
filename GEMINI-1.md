# GEMINI.md — Portfolio Website for Rishi Choudhary
> Instruction file for AI-assisted development.
> Inspiration reference: https://kirillz.com

---

## 0. Project Overview

Build a **single-page personal portfolio website** for Rishi Choudhary — a first-year CS student, Shopify developer, and AI/ML builder. The site must feel like a **human-crafted, editorial personal site** — not a template. Think kirillz.com: ruthless minimalism, generous whitespace, typography-first, zero fluff.

**Stack:** Next.js 14 (App Router) + Tailwind CSS  
**Deployment target:** Vercel  
**No external UI libraries.** Custom CSS only where Tailwind falls short.

---

## 1. Design Language

### 1.1 Aesthetic Directive
Mirror kirillz.com exactly in spirit:
- **White background. Dark text. Nothing else competes.**
- Single column, centered, max-width `680px`, generous horizontal padding (`px-6`)
- Every section separated by whitespace alone — no dividers, no cards, no borders
- Typography is the primary design element
- Minimal UI chrome: no heavy navbar, no sidebars, no hero images

### 1.2 Typography
```
Display / Name:    "Playfair Display" or "DM Serif Display" — weight 400
Body:              "DM Sans" or "Geist" — weight 400, line-height 1.7
Mono accents:      "JetBrains Mono" — for years, labels, tags only
```
Import via Google Fonts or next/font. **Do NOT use Inter, Roboto, or system fonts.**

### 1.3 Color Palette
```
Background:   #FFFFFF
Text primary: #111111
Text muted:   #777777
Accent:       #111111 (underline hover only)
Link hover:   underline, no color change
```
Implement a **dark mode toggle** (top-right). Dark mode:
```
Background:   #0F0F0F
Text primary: #EEEEEE
Text muted:   #888888
```
Persist preference to `localStorage`.

### 1.4 Spacing Scale
Follow kirillz.com's rhythm: very little between elements within a section, large gaps (`mt-24` to `mt-32`) between sections.

### 1.5 Links
All external links open in `_blank`. Use the `↗` arrow suffix on project titles (exactly like kirillz.com). Internal anchor links scroll smoothly.

---

## 2. Site Structure

Single HTML page (`/`). No sub-routes needed at MVP. Sections in order:

```
1. Header (sticky, minimal)
2. Hero
3. About
4. Select Work       ← primary projects
5. Experience        ← work history (styled like "Special Projects")
6. Achievements      ← styled like "Features" on kirillz.com
7. Footer
```

---

## 3. Section Specifications

### 3.1 Header
```
Layout:   full width, top of page, NOT sticky
Left:     "Rishi Choudhary" in body font, links to #top
Right:    [dark mode toggle icon] + [rishichoudhary582@gmail.com mailto link]
```
- No navigation links. Exactly like kirillz.com.
- Dark mode toggle: a small ☼ / ☾ icon button, no label

---

### 3.2 Hero
```
Large heading:   "Rishi Choudhary"  (display font, ~3.5rem)
Subtitle line:   "Developer & AI Builder"  (body font, muted, ~1.1rem)
```
Nothing else. Just the name and role. Massive whitespace below before About.

---

### 3.3 About
Layout: Two-column on desktop (text left ~65%, photo right ~30%), single column on mobile (photo comes after text).

**Bio copy (use this exactly):**
> I'm a Computer Science student at Manipal University, Jaipur — building at the intersection of Shopify development, AI integrations, and SaaS products. Within my first year of college, I shipped production e-commerce platforms for real clients, trained under senior engineers at Craxinno Technologies, and won Smart India Hackathon.
>
> Currently building [VibeQA](https://github.com/rishi-choudhary) — an automated QA and testing platform for AI-generated web apps.
>
> Find me on [GitHub](https://github.com/rishi-choudhary), [LinkedIn](https://linkedin.com/in/rishichoudharii), or email me at [rishichoudhary582@gmail.com](mailto:rishichoudhary582@gmail.com).

**Photo:**  
Use a `<img>` placeholder with `src="/images/rishi.jpg"` and alt `"That's me!"`. Style it as a slightly rounded rectangle, grayscale filter by default, color on hover — matching kirillz.com's subtle photo treatment.

---

### 3.4 Select Work

Section heading: `### Select Work` (h3, small, body font weight 500)

Render each project as a **card block** structured exactly like kirillz.com:
```
[Project image — full width, aspect-ratio: 16/9, object-fit: cover]
[Title ↗]  (year)
[One-line description]
[Tech stack: label]
```

**Projects to render (in this order):**

---

**Project 1: Smart Parking System**
```
Image:       /images/projects/smart-parking.jpg  (placeholder: bg-gray-200)
Title:       Smart Parking System ↗
Link:        https://github.com/rishi-choudhary
Year:        2024
Description: Real-time urban parking management platform — built and won 1st place at Smart India Hackathon against 100+ national teams in a 36-hour sprint.
Stack:       HTML5 · CSS3 · JavaScript · Python
Tag line:    Smart India Hackathon — 1st Place, Web Engineering
```

---

**Project 2: VibeQA**
```
Image:       /images/projects/vibeqa.jpg  (placeholder: bg-gray-100)
Title:       VibeQA ↗  (badge: "In Development")
Link:        https://github.com/rishi-choudhary
Year:        2025
Description: Automated QA and testing platform for AI-generated web apps — four-stage pipeline: URL crawler → LLM test generator → Playwright executor → failure reporter.
Stack:       Python · Playwright · LLM APIs · Next.js · Supabase
```

---

**Project 3: Visda Organix — Shopify Store**
```
Image:       /images/projects/visda.jpg  (placeholder: bg-gray-200)
Title:       Visda Organix ↗
Link:        #
Year:        2024
Description: Full e-commerce storefront for an organic personal care brand — 6 custom Liquid section templates, schema-driven CMS controls, mobile-first build. Delivered solo in under 3 weeks.
Stack:       Shopify Liquid · Theme 2.0 · CSS3 · JavaScript
```

---

**Project 4: SAKE Clothing — Interface Design**
```
Image:       /images/projects/sake.jpg  (placeholder: bg-gray-100)
Title:       SAKE Clothing Brand ↗
Link:        #
Year:        2023
Description: 12-screen website prototype for a fashion label — complete design system including typography scale, colour tokens, and reusable component library.
Stack:       Figma · Adobe XD
```

---

### 3.5 Experience
Section heading: `### Experience`

Style: same as "Special Projects" on kirillz.com — **no images**, just text blocks with a subtle visual hierarchy.

Each entry:
```
[Role, Company ↗] (Year range)
[2–3 line description]
```

**Entries:**

---

**Entry 1:**
```
Title:    Frontend Engineering Trainee — Craxinno Technologies ↗
Link:     #
Year:     Dec 2025 – Jan 2026
Text:     Completed an intensive 2-month programme in Next.js and Shopify theme engineering, contributing to 2 live client-facing projects. Recognised by leadership for outstanding initiative — one of very few trainees to receive a formal commendation.
```

---

**Entry 2:**
```
Title:    Shopify Theme Developer — Visda Organix (Freelance) ↗
Link:     #
Year:     2024
Text:     Sole developer for a full organic e-commerce storefront. Authored all custom Liquid section templates with schema-driven controls so the client could manage content post-launch without developer assistance.
```

---

**Entry 3:**
```
Title:    Interface Designer — SAKE Clothing (Freelance) ↗
Link:     #
Year:     2023
Text:     Designed a 12-screen Figma prototype covering all primary user journeys, plus a full design system — cutting estimated future design iteration time by over 40%.
```

---

### 3.6 Achievements
Section heading: `### Recognition`

Style: Exactly like "Features" section on kirillz.com — **plain text list**, no images, two columns on desktop (title left, type right).

```
[Title ↗]                          (Type)         (Year)
```

**Entries:**
```
Smart India Hackathon — 1st Place                  Award          2024
  Web Engineering category, national level, 100+ competing teams

Sub-Junior AIFF Football — National Representative  Achievement    2023
  Selected to represent Dadra and Nagar Haveli at the national level

Frontend Engineering Certification — Craxinno      Certification  2026
  Certified by a Senior Software Developer post 2-month programme

AI & Machine Learning — Active Course              Certification  2025–26
  Ongoing certification programme alongside college curriculum
```

---

### 3.7 Footer

Exact copy of kirillz.com footer:

```
Left:   "Be nice © ツ"
Right:  [GitHub] [LinkedIn] [Twitter/X] [Email]
Below:  "Updated March 2026"
```

Social links:
- GitHub: https://github.com/rishi-choudhary
- LinkedIn: https://linkedin.com/in/rishichoudharii
- Email: mailto:rishichoudhary582@gmail.com

---

## 4. Interactions & Animations

Keep animations **subtle and purposeful** — matching kirillz.com's restraint.

```
Page load:         Fade-in the hero text over 400ms (opacity 0 → 1)
Section reveal:    Use IntersectionObserver — fade + translateY(16px → 0) as sections enter viewport
Project images:    Slight scale(1.0 → 1.02) on hover, 300ms ease
Links:             Underline appears on hover (no color change)
Photo (About):     grayscale(1) → grayscale(0) on hover, 400ms
Dark mode toggle:  Instant swap, no animation
```

**No scroll-jacking. No parallax. No loading screens.**

---

## 5. File Structure

```
/
├── app/
│   ├── layout.tsx          ← font imports, metadata, dark mode wrapper
│   ├── page.tsx            ← single-page composition
│   └── globals.css         ← CSS variables, dark mode, base resets
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx            ← Select Work section
│   ├── Experience.tsx
│   ├── Recognition.tsx
│   ├── Footer.tsx
│   └── DarkModeToggle.tsx
├── public/
│   └── images/
│       ├── rishi.jpg           ← personal photo (add manually)
│       └── projects/           ← project screenshots (add manually)
│           ├── smart-parking.jpg
│           ├── vibeqa.jpg
│           ├── visda.jpg
│           └── sake.jpg
├── GEMINI.md
└── README.md
```

---

## 6. Metadata & SEO

```tsx
// app/layout.tsx
export const metadata = {
  title: "Rishi Choudhary — Developer & AI Builder",
  description: "First-year CS student building at the intersection of Shopify, AI, and SaaS. Smart India Hackathon winner.",
  openGraph: {
    title: "Rishi Choudhary",
    description: "Developer & AI Builder",
    url: "https://rishiworks.netlify.app",
    type: "website",
  },
};
```

---

## 7. Responsive Breakpoints

```
Mobile  (<640px):   Single column. Photo below bio. Full-width project images.
Tablet  (640–1024): Same as mobile, slightly more padding.
Desktop (>1024px):  About section: 2-column (text + photo). Max content width: 680px centered.
```

---

## 8. Placeholder Images

Until real images are added, render placeholders using a CSS background:
```tsx
// For project images with no src
<div className="w-full aspect-video bg-gray-100 dark:bg-zinc-800 rounded-sm" />
```
Never use external placeholder services like picsum or placehold.it.

---

## 9. What NOT to Build

- ❌ No hero background image or gradient
- ❌ No skill bars, pie charts, or proficiency meters
- ❌ No animated typing text / typewriter effects
- ❌ No particle backgrounds
- ❌ No "Download Resume" button in the hero
- ❌ No contact form (email link is sufficient)
- ❌ No sticky nav with section highlights
- ❌ No testimonial / client logo carousels

---

## 10. Agent Task Checklist

Execute in this order:

- [x] 1. Scaffold Next.js 14 project with Tailwind CSS
- [x] 2. Set up font imports (Playfair Display + DM Sans via next/font/google)
- [x] 3. Implement CSS variables for light/dark themes in globals.css
- [x] 4. Build DarkModeToggle component with localStorage persistence
- [x] 5. Build Header component
- [x] 6. Build Hero component
- [x] 7. Build About component (bio copy + photo placeholder)
- [x] 8. Build Work component (all 4 projects with placeholders)
- [x] 9. Build Experience component (3 entries)
- [x] 10. Build Recognition component (4 entries)
- [x] 11. Build Footer component
- [x] 12. Compose page.tsx with IntersectionObserver animation wrapper
- [x] 13. Set metadata in layout.tsx
- [x] 14. Test mobile responsiveness at 375px, 768px, 1280px
- [x] 15. Verify all external links open in _blank with rel="noopener noreferrer"
