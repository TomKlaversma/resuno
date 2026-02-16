# Claude Code Instructions for RESUNO Project

## Project Overview

This is the **Resuno** website and brand project. Resuno is a high-end AI Architecture Agency targeting SMEs (MKB) and startups in the Netherlands.

**CRITICAL:** Always reference and follow the guidelines in `BRAND_VISION.md` before making any development decisions.

---

## Brand & Strategic Context

**Required Reading:** Before making ANY content, design, or architectural decisions, you MUST read and understand:
* `/BRAND_VISION.md` - Complete brand vision and technical briefing

### Key Principles

1. **Language:** All user-facing content MUST be in Dutch (Nederlands)
2. **Tone:** Direct, no-nonsense, "MKB-mentaliteit" (typical Dutch SME mindset)
3. **USP:** Security as a guardrail for speed ("Veiligheid als vangrail voor snelheid")
4. **Visual Identity:** "The Echo of Tom" - representing one architect orchestrating multiple AI capabilities

---

## Technical Stack

### Approved Technologies
* **Framework:** Next.js (App Router preferred)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Deployment:** Vercel
* **Language:** TypeScript
* **Typography:** Playfair Display (H1 only) + Inter (everything else)

### Typography Rules - CRITICAL

**Font Pairing: Classic Chic + Modern Tech**

* **Playfair Display:** H1 ONLY (one per page) and logo
  - Use `font-display` class or `<h1>` (auto-applied)
  - Classical serif, elegant, luxury feel
  - NEVER use for body text or multiple headers

* **Inter:** Everything else
  - H2-H6, body text, buttons, navigation
  - Modern sans-serif, tech-forward
  - Default font (no class needed)

**Example:**
```tsx
// ✅ Correct
<h1 className="font-display text-5xl">Main Heading</h1>
<h2 className="text-3xl">Subheading</h2>

// ❌ Wrong - don't use Playfair for multiple headers
<h1 className="font-display">Title</h1>
<h2 className="font-display">Subtitle</h2>
```

See `/website/TYPOGRAPHY.md` for complete guidelines.

### Code Standards
* Use modern React patterns (hooks, server components where appropriate)
* Prioritize performance and SEO
* Mobile-first responsive design
* Accessibility (WCAG 2.1 AA minimum)

---

## Internationalization (i18n) - CRITICAL

**NEVER USE HARDCODED TEXT IN COMPONENTS**

All user-facing text MUST use the i18n translation system:

```typescript
import { useTranslation } from "@/lib/i18n";

export default function MyComponent() {
  const { t } = useTranslation();

  return <h1>{t.section.key}</h1>;
}
```

### Translation Files Location
* `/website/lib/i18n/translations.ts` - Main translation file
* Contains both Dutch (nl) and English (en) translations
* ALL new text must be added to BOTH languages

### Adding New Translations

1. Add the key to the `Translations` interface
2. Add Dutch text to `translations.nl`
3. Add English text to `translations.en`
4. Use `t.yourKey` in components

**Example:**
```typescript
// In translations.ts
export interface Translations {
  mySection: {
    newText: string;
  };
}

translations.nl.mySection.newText = "Nederlandse tekst";
translations.en.mySection.newText = "English text";

// In component
<p>{t.mySection.newText}</p>
```

### Why This Matters
* Supports Dutch/English language toggle
* Centralizes all copy for easy updates
* Prevents inconsistencies
* Required for international expansion

## Content Guidelines

### Brand Voice (Applied in Translations)
* **DO:** Be direct, concrete, and honest about pricing and capabilities
* **DON'T:** Use Silicon Valley buzzwords or vague promises
* **DO:** Use "wij" (we) in Dutch, "we" in English to emphasize partnership
* **DON'T:** Oversell or use hyperbole

---

## File Structure

```
/BRAND_VISION.md          # Complete brand & technical briefing (READ THIS FIRST)
/CLAUDE.md                # This file - AI agent instructions
/website/                 # Next.js application
  /src/
    /app/                 # App router pages
    /components/          # Reusable components
    /lib/                 # Utilities and helpers
  /public/
    /images/              # Image assets
```

---

## Development Workflow

### Before Starting ANY Task:
1. Read relevant sections of `BRAND_VISION.md`
2. Understand the brand tone and messaging guidelines
3. Confirm language (should be Dutch for user-facing content)
4. Verify design aligns with "Echo of Tom" visual concept

### When Creating Components:
1. Use Tailwind CSS for styling (SaaS aesthetic)
2. Implement Framer Motion for animations
3. Ensure mobile responsiveness
4. Add proper TypeScript types
5. Include accessibility attributes

### When Writing Copy:
1. Write in Dutch
2. Be direct and concrete
3. Avoid jargon
4. Reference messaging examples in BRAND_VISION.md
5. Emphasize security + speed balance

---

## Product Offering Structure

### The Three Tiers (Always present in this order):

1. **Pakket A: De Resuno Scan** (€2.000,-)
   - Entry point
   - 2-day on-site engagement
   - Quick wins + roadmap

2. **Pakket B: De Foundation Build**
   - Project-based pricing
   - Core stack implementation
   - Tool consolidation

3. **Pakket C: Custom AI Development**
   - Equity/hybrid model
   - Strategic partnerships
   - Custom software development

---

## Design System

### Colors (To be defined)
* Primary: TBD (suggest professional blues/grays)
* Accent: TBD (suggest subtle energetic color)
* Background: Clean whites/light grays
* Text: Dark grays (not pure black)

### Typography
* Modern, professional sans-serif
* Clear hierarchy
* Excellent readability

### Layout Patterns
* **Bento Grid:** For services section
* **Hero with Echoes:** Visual "Multi-Tom" effect
* **High-contrast CTAs:** Clear conversion points

---

## SEO Strategy

### Primary Keywords (Dutch)
* AI Architect
* AI Implementatie MKB
* Private LLM opzetten
* Data Security Audit

### Secondary Keywords
* Houtje-touwtje AI fixen
* AI voor startups Nederland
* AI consultancy Nederland
* Volwassen AI architectuur

---

## Conversion Strategy

### Lead Quality > Lead Quantity
* Use "high-friction" forms (more fields, qualification questions)
* Clear pricing transparency
* Direct CTA: "Boek een Resuno Scan"
* Case studies as trust signals

---

## Special Instructions

### The "Echo" Effect
* Hero section must support layered image effect
* 3-4 transparent copies of Tom's photo
* Hover states reveal Echo functions
* Use Framer Motion for smooth transitions

### Case Studies Section
* Must include both MKB and Startup examples
* Focus on measurable outcomes (tool reduction, time savings, security improvements)
* Use authentic Dutch company scenarios

### Security Messaging
* Never position security as a blocker
* Always frame as "guardrail for speed"
* Emphasize GDPR compliance for Dutch/EU market

---

## Common Pitfalls to Avoid

1. ❌ Writing content in English
2. ❌ Using buzzwords like "synergy," "leverage," "disruption"
3. ❌ Hiding pricing or using "contact us" without transparency
4. ❌ Over-promising AI capabilities
5. ❌ Designing for US market instead of Dutch MKB culture
6. ❌ Creating low-friction forms (we want quality leads)

---

## Questions to Ask Before Proceeding

If you're unsure about:
* **Tone/Voice:** Check BRAND_VISION.md Section 3 and 13
* **Technical Stack:** Check BRAND_VISION.md Section 5 and 11
* **Product Offerings:** Check BRAND_VISION.md Section 4
* **Visual Design:** Check BRAND_VISION.md Section 2 and 6
* **Target Audience:** Check BRAND_VISION.md Section 10

---

## Contact & Decisions

**Founder:** Tom
**Final Decision Authority:** Tom (ask before major architectural or brand decisions)

---

*This file should be updated as the project evolves. Always keep it in sync with BRAND_VISION.md.*
