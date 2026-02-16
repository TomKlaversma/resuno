export type Language = "nl" | "en";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    bookScan: string;
  };

  // Hero Section
  hero: {
    title: {
      part1: string;
      highlight: string;
    };
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadge: string;
    gdprCompliant: string;
    dutchMarket: string;
  };

  // Problem Statement
  problems: {
    heading: string;
    subheading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    solution: {
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
  };

  // Services
  services: {
    heading: {
      part1: string;
      highlight: string;
    };
    subheading: string;
    packages: {
      scan: {
        name: string;
        price: string;
        duration: string;
        description: string;
        features: string[];
        cta: string;
        badge: string;
      };
      foundation: {
        name: string;
        price: string;
        duration: string;
        description: string;
        features: string[];
        cta: string;
      };
      custom: {
        name: string;
        price: string;
        duration: string;
        description: string;
        features: string[];
        cta: string;
      };
    };
    notSure: string;
    planCall: string;
  };

  // Contact Form
  contact: {
    heading: {
      part1: string;
      highlight: string;
    };
    subheading: string;
    form: {
      name: string;
      email: string;
      company: string;
      employees: string;
      currentTools: string;
      challenge: string;
      package: string;
      selectPlaceholder: string;
      submit: string;
      responseTime: string;
      directContact: string;
    };
    packages: {
      scan: string;
      foundation: string;
      custom: string;
      unsure: string;
    };
  };

  // Footer
  footer: {
    tagline: string;
    kvk: string;
    btw: string;
    links: string;
    contactHeading: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<Language, Translations> = {
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      about: "Over Resuno",
      contact: "Contact",
      bookScan: "Boek een Scan",
    },
    hero: {
      title: {
        part1: "Van AI-chaos naar",
        highlight: "schaalbaar momentum",
      },
      subtitle: "Wij bouwen de architectuur die jouw team versterkt. Veilig, volwassen en zonder houtje-touwtje oplossingen.",
      ctaPrimary: "Boek een Resuno Scan",
      ctaSecondary: "Bekijk Diensten",
      trustBadge: "Vertrouwd door MKB en Tech Startups in Nederland",
      gdprCompliant: "100% GDPR-compliant",
      dutchMarket: "Nederlandse markt specialist",
    },
    problems: {
      heading: "Herken je dit?",
      subheading: "De meeste bedrijven experimenteren met AI. Maar zonder architectuur wordt het al snel een duur, chaotisch experiment.",
      items: [
        {
          title: "20+ losse tools",
          description: "ChatGPT, Notion AI, Zapier, Make, en nog 15 andere apps. Elk met eigen login en licentie.",
        },
        {
          title: "Data overal verspreid",
          description: "Niemand weet meer waar welke data staat. Privacy-risico's en GDPR-hoofdpijn.",
        },
        {
          title: "Geen schaalbare basis",
          description: "Wat werkt voor 5 mensen, faalt bij 20. Houtje-touwtje oplossingen die niet groeien.",
        },
        {
          title: "Geen ROI-inzicht",
          description: "Maandelijks €2.000+ aan AI-tools, maar niemand kan vertellen wat het oplevert.",
        },
      ],
      solution: {
        title: "De oplossing? Volwassen architectuur.",
        description: "Wij consolideren jouw AI-stack van 20+ tools naar 5-8 kerncomponenten. Met security als vangrail, niet als blokkade.",
        features: [
          "Private LLM-instances (Azure/Cloudflare) voor gevoelige data",
          "Eén unified API-laag voor alle AI-functionaliteit",
          "100% GDPR-compliant dataflows",
          "Scalable software, geen plugin-wrappers",
        ],
        cta: "Bekijk onze aanpak",
      },
    },
    services: {
      heading: {
        part1: "Van chaos naar",
        highlight: "controle",
      },
      subheading: "Drie pakketten, één doel: jouw AI-stack volwassen maken. Kies het niveau dat past bij jouw ambities.",
      packages: {
        scan: {
          name: "Pakket A: De Resuno Scan",
          price: "€ 2.000,-",
          duration: "2 dagen on-site",
          description: "Direct momentum en audit. Perfect voor bedrijven die nu willen starten met AI-implementatie.",
          features: [
            "Dag 1: Audit van tool-overload en team interviews",
            "Dag 2: Implementatie van 3 'Quick Wins'",
            "Gedetailleerde Architectural Roadmap",
            "Data security scan (GDPR compliance)",
          ],
          cta: "Boek een scan",
          badge: "MEEST GEKOZEN",
        },
        foundation: {
          name: "Pakket B: De Foundation Build",
          price: "Op projectbasis",
          duration: "4-12 weken",
          description: "Van 20+ losse tools naar een coherente, veilige AI-stack. De basis voor schaalbaar groeien.",
          features: [
            "Consolidatie van 20+ tools naar core-set",
            "Private LLM setup (Azure/Cloudflare)",
            "Secure data flows en API orchestration",
            "Team training en knowledge transfer",
          ],
          cta: "Plan een gesprek",
        },
        custom: {
          name: "Pakket C: Custom AI Development",
          price: "Equity/Hybrid model",
          duration: "3-6 maanden",
          description: "Strategisch partnerschap voor startups. Wij bouwen jouw unique moat, van de grond af aan.",
          features: [
            "Custom software (geen plugins/wrappers)",
            "Laravel, TypeScript, Cloudflare stack",
            "Scalable architectuur voor groei",
            "Equity partnership mogelijk",
          ],
          cta: "Bespreek partnerschap",
        },
      },
      notSure: "Niet zeker welk pakket bij jou past? Geen probleem.",
      planCall: "Plan een vrijblijvend gesprek",
    },
    contact: {
      heading: {
        part1: "Klaar voor",
        highlight: "volwassen AI",
      },
      subheading: "Vul onderstaand formulier in. We filteren op kwaliteit, dus wees zo specifiek mogelijk over jouw situatie.",
      form: {
        name: "Jouw naam *",
        email: "E-mail *",
        company: "Bedrijfsnaam *",
        employees: "Aantal medewerkers *",
        currentTools: "Welke AI-tools gebruiken jullie nu? *",
        challenge: "Wat is jouw grootste AI-uitdaging? *",
        package: "Welk pakket interesseert je? *",
        selectPlaceholder: "Selecteer...",
        submit: "Verstuur aanvraag",
        responseTime: "We nemen binnen 24 uur contact op voor een vrijblijvend gesprek.",
        directContact: "Liever direct contact?",
      },
      packages: {
        scan: "Pakket A: De Resuno Scan (€2.000)",
        foundation: "Pakket B: De Foundation Build",
        custom: "Pakket C: Custom AI Development",
        unsure: "Weet ik nog niet",
      },
    },
    footer: {
      tagline: "AI Architectuur voor MKB en Startups. Van chaos naar schaalbaar momentum.",
      kvk: "KvK: [Nog in te vullen]",
      btw: "BTW: [Nog in te vullen]",
      links: "Links",
      contactHeading: "Contact",
      copyright: "Alle rechten voorbehouden.",
      privacy: "Privacy Policy",
      terms: "Algemene Voorwaarden",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Resuno",
      contact: "Contact",
      bookScan: "Book a Scan",
    },
    hero: {
      title: {
        part1: "From AI chaos to",
        highlight: "scalable momentum",
      },
      subtitle: "We build the architecture that empowers your team. Secure, mature, and without makeshift solutions.",
      ctaPrimary: "Book a Resuno Scan",
      ctaSecondary: "View Services",
      trustBadge: "Trusted by SMEs and Tech Startups in the Netherlands",
      gdprCompliant: "100% GDPR-compliant",
      dutchMarket: "Dutch market specialist",
    },
    problems: {
      heading: "Sound familiar?",
      subheading: "Most companies experiment with AI. But without architecture, it quickly becomes an expensive, chaotic experiment.",
      items: [
        {
          title: "20+ separate tools",
          description: "ChatGPT, Notion AI, Zapier, Make, and 15 other apps. Each with its own login and license.",
        },
        {
          title: "Data scattered everywhere",
          description: "Nobody knows where which data is located. Privacy risks and GDPR headaches.",
        },
        {
          title: "No scalable foundation",
          description: "What works for 5 people fails at 20. Makeshift solutions that don't scale.",
        },
        {
          title: "No ROI insight",
          description: "€2,000+ monthly on AI tools, but nobody can tell you what it delivers.",
        },
      ],
      solution: {
        title: "The solution? Mature architecture.",
        description: "We consolidate your AI stack from 20+ tools to 5-8 core components. With security as a guardrail, not a roadblock.",
        features: [
          "Private LLM instances (Azure/Cloudflare) for sensitive data",
          "One unified API layer for all AI functionality",
          "100% GDPR-compliant data flows",
          "Scalable software, not plugin wrappers",
        ],
        cta: "View our approach",
      },
    },
    services: {
      heading: {
        part1: "From chaos to",
        highlight: "control",
      },
      subheading: "Three packages, one goal: making your AI stack mature. Choose the level that fits your ambitions.",
      packages: {
        scan: {
          name: "Package A: The Resuno Scan",
          price: "€ 2,000",
          duration: "2 days on-site",
          description: "Direct momentum and audit. Perfect for companies ready to start with AI implementation.",
          features: [
            "Day 1: Tool overload audit and team interviews",
            "Day 2: Implementation of 3 'Quick Wins'",
            "Detailed Architectural Roadmap",
            "Data security scan (GDPR compliance)",
          ],
          cta: "Book a scan",
          badge: "MOST POPULAR",
        },
        foundation: {
          name: "Package B: The Foundation Build",
          price: "Project-based",
          duration: "4-12 weeks",
          description: "From 20+ loose tools to a coherent, secure AI stack. The foundation for scalable growth.",
          features: [
            "Consolidation from 20+ tools to core set",
            "Private LLM setup (Azure/Cloudflare)",
            "Secure data flows and API orchestration",
            "Team training and knowledge transfer",
          ],
          cta: "Schedule a call",
        },
        custom: {
          name: "Package C: Custom AI Development",
          price: "Equity/Hybrid model",
          duration: "3-6 months",
          description: "Strategic partnership for startups. We build your unique moat, from the ground up.",
          features: [
            "Custom software (no plugins/wrappers)",
            "Laravel, TypeScript, Cloudflare stack",
            "Scalable architecture for growth",
            "Equity partnership possible",
          ],
          cta: "Discuss partnership",
        },
      },
      notSure: "Not sure which package suits you? No problem.",
      planCall: "Schedule a no-obligation call",
    },
    contact: {
      heading: {
        part1: "Ready for",
        highlight: "mature AI",
      },
      subheading: "Fill out the form below. We filter for quality, so please be as specific as possible about your situation.",
      form: {
        name: "Your name *",
        email: "Email *",
        company: "Company name *",
        employees: "Number of employees *",
        currentTools: "Which AI tools are you currently using? *",
        challenge: "What is your biggest AI challenge? *",
        package: "Which package interests you? *",
        selectPlaceholder: "Select...",
        submit: "Submit request",
        responseTime: "We'll contact you within 24 hours for a no-obligation conversation.",
        directContact: "Prefer direct contact?",
      },
      packages: {
        scan: "Package A: The Resuno Scan (€2,000)",
        foundation: "Package B: The Foundation Build",
        custom: "Package C: Custom AI Development",
        unsure: "Not sure yet",
      },
    },
    footer: {
      tagline: "AI Architecture for SMEs and Startups. From chaos to scalable momentum.",
      kvk: "CoC: [To be filled]",
      btw: "VAT: [To be filled]",
      links: "Links",
      contactHeading: "Contact",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
};
