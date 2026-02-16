# Typography System - Resuno

## Font Pairing: Classic Chic + Modern Tech

**Display Font (Headers):** Playfair Display - Classic elegance
**Body Font (Everything else):** Inter - Modern tech

---

## The Fonts

### Playfair Display
- **Usage:** H1 only (main page headers)
- **Style:** Classical serif, elegant, luxury
- **Feel:** Classic chic, established, authoritative
- **Variable:** `--font-playfair` or `font-display` class

### Inter
- **Usage:** All other text (body, H2-H6, buttons, etc.)
- **Style:** Modern sans-serif, geometric, clean
- **Feel:** Tech-forward, professional, readable
- **Variable:** `--font-inter` or `font-sans` class

---

## Usage Guidelines

### ✅ DO

**Use Playfair Display for:**
- Main page heading (H1) - ONE per page
- Logo/brand name
- Hero titles

**Use Inter for:**
- All body text
- Navigation
- Buttons and CTAs
- Form labels
- H2, H3, H4, H5, H6
- Descriptions and paragraphs
- Footer text

### ❌ DON'T

- Use Playfair for body text (too decorative, poor readability)
- Use Playfair for multiple headers on same page (loses impact)
- Mix fonts within a single text block
- Use Playfair for small text (below 24px)

---

## Implementation

### In Components

```tsx
// H1 - Playfair Display (automatic via global CSS)
<h1 className="text-5xl font-bold">
  Main Heading
</h1>

// Or explicitly with class
<h1 className="font-display text-5xl font-bold">
  Main Heading
</h1>

// H2-H6 - Inter (default)
<h2 className="text-3xl font-bold">
  Subheading
</h2>

// Body - Inter (default)
<p className="text-lg">
  Body text
</p>

// Logo - Playfair Display
<span className="font-display text-2xl">
  Resuno
</span>
```

### Global CSS Rules

```css
/* H1 automatically uses Playfair Display */
h1 {
  font-family: var(--font-playfair), Georgia, serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Everything else uses Inter */
body {
  font-family: var(--font-inter), system-ui, sans-serif;
}
```

---

## Font Weights

### Playfair Display
- **400** Regular - Don't use
- **700** Bold - Use for all headers

### Inter
- **400** Regular - Body text
- **500** Medium - Emphasis
- **600** Semibold - Subheadings
- **700** Bold - H2-H6, important elements

---

## Size Scale

### Playfair Display (H1 only)
- Mobile: `text-5xl` (48px)
- Tablet: `text-6xl` (60px)
- Desktop: `text-7xl` (72px)

### Inter (Everything else)
- **H2:** `text-4xl` (36px)
- **H3:** `text-2xl` (24px)
- **Body Large:** `text-xl` (20px)
- **Body:** `text-base` (16px)
- **Small:** `text-sm` (14px)

---

## Examples

### Hero Section
```tsx
{/* H1 - Playfair Display */}
<h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold">
  Van AI-chaos naar{" "}
  <span className="text-gradient">schaalbaar momentum</span>
</h1>

{/* Subtitle - Inter */}
<p className="text-xl md:text-2xl">
  Wij bouwen de architectuur die jouw team versterkt.
</p>
```

### Services Section
```tsx
{/* Section heading - Inter H2 */}
<h2 className="text-4xl font-bold">
  Van chaos naar <span className="text-primary">controle</span>
</h2>

{/* Package name - Inter H3 */}
<h3 className="text-2xl font-bold">
  Pakket A: De Resuno Scan
</h3>
```

---

## Why This Pairing Works

**Contrast:**
- Serif (Playfair) vs Sans-serif (Inter)
- Classical vs Modern
- Decorative vs Functional

**Harmony:**
- Both have strong geometric foundations
- Similar x-heights for good proportions
- Complementary weight ranges

**Brand Alignment:**
- **Playfair:** Established, authoritative, premium (matches "volwassen architectuur")
- **Inter:** Tech-forward, clean, modern (matches AI/tech positioning)

---

## Testing Checklist

When adding new sections:
- [ ] Only ONE H1 per page using Playfair
- [ ] Logo uses Playfair (`font-display`)
- [ ] All other headings use Inter (default)
- [ ] Body text uses Inter (default)
- [ ] Font weights are appropriate (700 for Playfair, 400-600 for Inter)
- [ ] Text is readable at all sizes
- [ ] Dark mode text contrast is sufficient

---

## Alternative: Cormorant Garamond

If Playfair feels too dramatic, consider **Cormorant Garamond**:
- More similar to Palatino
- Less contrast, more subtle
- Equally elegant but quieter

To switch:
```tsx
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["400", "700"],
  variable: "--font-playfair",
  subsets: ["latin"],
});
```
