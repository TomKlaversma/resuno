# i18n Migration Guide

## Overview

The Resuno website now uses a centralized i18n system for all text content. **NO HARDCODED TEXT** should exist in components.

## Status

**Migrated Components:**
- ✅ Header (navigation, buttons)

**TODO - Migrate These Components:**
- ⏳ Hero (EchoHero.tsx)
- ⏳ ProblemStatement
- ⏳ ServicesGrid
- ⏳ ContactForm
- ⏳ Footer

## How to Migrate a Component

### Step 1: Import the Translation Hook

```typescript
import { useTranslation } from "@/lib/i18n";
```

### Step 2: Use the Hook in Your Component

```typescript
export default function MyComponent() {
  const { t } = useTranslation();

  // Rest of component
}
```

### Step 3: Replace Hardcoded Text

**Before:**
```typescript
<h1>Van AI-chaos naar schaalbaar momentum</h1>
<button>Boek een Scan</button>
```

**After:**
```typescript
<h1>{t.hero.title.part1} {t.hero.title.highlight}</h1>
<button>{t.nav.bookScan}</button>
```

### Step 4: Add Missing Translations

If you need new text that doesn't exist in translations.ts:

1. Open `/lib/i18n/translations.ts`
2. Add the key to the `Translations` interface
3. Add Dutch text to `translations.nl`
4. Add English text to `translations.en`

**Example:**

```typescript
// 1. Add to interface
export interface Translations {
  // ... existing
  newSection: {
    heading: string;
    description: string;
  };
}

// 2. Add Dutch
translations.nl = {
  // ... existing
  newSection: {
    heading: "Nederlandse kop",
    description: "Nederlandse beschrijving",
  },
};

// 3. Add English
translations.en = {
  // ... existing
  newSection: {
    heading: "English heading",
    description: "English description",
  },
};
```

## Component-Specific Migration Notes

### Hero Component
```typescript
// Use t.hero.title.part1, t.hero.title.highlight, etc.
<h1>
  {t.hero.title.part1}{" "}
  <span className="...">
    {t.hero.title.highlight}
  </span>
</h1>
```

### Services Grid
```typescript
// Package data is in t.services.packages.scan, .foundation, .custom
const scanPackage = t.services.packages.scan;

<h3>{scanPackage.name}</h3>
<p>{scanPackage.price}</p>
{scanPackage.features.map((feature, i) => (
  <li key={i}>{feature}</li>
))}
```

### Problem Statement
```typescript
// Problems array
{t.problems.items.map((problem, index) => (
  <div key={index}>
    <h3>{problem.title}</h3>
    <p>{problem.description}</p>
  </div>
))}
```

### Contact Form
```typescript
// Form labels
<label>{t.contact.form.name}</label>
<label>{t.contact.form.email}</label>

// Select options
<option value="scan">{t.contact.packages.scan}</option>
```

## Testing

After migrating a component:

1. Test in Dutch (default)
2. Click the language toggle to switch to English
3. Verify all text changes correctly
4. Check for console errors

## Common Mistakes to Avoid

❌ **Don't:** Leave hardcoded text
```typescript
<h1>Van AI-chaos naar {t.hero.highlight}</h1> // Mixed!
```

✅ **Do:** Use translations only
```typescript
<h1>{t.hero.title.part1} {t.hero.title.highlight}</h1>
```

❌ **Don't:** Forget to add English translations
```typescript
translations.en.newText = ""; // Empty!
```

✅ **Do:** Always provide both languages
```typescript
translations.nl.newText = "Nederlandse tekst";
translations.en.newText = "English text";
```

❌ **Don't:** Use translations in non-client components without checking
```typescript
// This might fail in server components
export default function ServerComponent() {
  const { t } = useTranslation(); // Error!
}
```

✅ **Do:** Mark as client component
```typescript
"use client";

export default function ClientComponent() {
  const { t } = useTranslation(); // Works!
}
```

## Priority Migration Order

1. **Hero** - Most visible section
2. **Services** - Core product offering
3. **Contact Form** - User interaction
4. **Problem Statement** - Key messaging
5. **Footer** - Less critical

## Questions?

Check:
- `/lib/i18n/translations.ts` - All translations
- `/lib/i18n/LanguageContext.tsx` - Context provider
- `/components/layout/Header.tsx` - Example implementation
- `/CLAUDE.md` - Full documentation
