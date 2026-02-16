"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "scan",
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
    highlight: true,
    cta: "Boek een scan",
  },
  {
    id: "foundation",
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
    highlight: false,
    cta: "Plan een gesprek",
  },
  {
    id: "custom",
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
    highlight: false,
    cta: "Bespreek partnerschap",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ServicesGrid() {
  return (
    <section id="diensten" className="py-24 bg-sand-white dark:bg-brown-dark">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-dark dark:text-sand-white mb-6">
            Van chaos naar <span className="text-primary dark:text-accent">controle</span>
          </h2>
          <p className="text-xl text-brown-dark/70 dark:text-sand-white/70 max-w-3xl mx-auto">
            Drie pakketten, één doel: jouw AI-stack volwassen maken. Kies het niveau dat past bij jouw ambities.
          </p>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`
                relative p-8 rounded-2xl border-2
                ${
                  service.highlight
                    ? "border-primary dark:border-accent bg-gradient-to-br from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 shadow-xl shadow-primary/10 dark:shadow-accent/10"
                    : "border-brown-dark/20 dark:border-sand-white/20 bg-sand-light dark:bg-brown-medium hover:border-primary dark:hover:border-accent"
                }
                transition-all duration-300
              `}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-8">
                  <span className="px-4 py-1 bg-primary dark:bg-accent text-white dark:text-brown-dark text-xs font-semibold rounded-full shadow-lg">
                    MEEST GEKOZEN
                  </span>
                </div>
              )}

              {/* Service header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brown-dark dark:text-sand-white mb-2">{service.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary dark:text-accent">{service.price}</span>
                </div>
                <p className="text-sm text-brown-dark/60 dark:text-sand-white/60">{service.duration}</p>
              </div>

              {/* Description */}
              <p className="text-brown-dark/80 dark:text-sand-white/80 mb-6 leading-relaxed">{service.description}</p>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent dark:text-accent mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-brown-dark/80 dark:text-sand-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all
                  ${
                    service.highlight
                      ? "bg-primary dark:bg-accent text-white dark:text-brown-dark hover:bg-primary-dark dark:hover:bg-accent/90 shadow-lg shadow-primary/30 dark:shadow-accent/30"
                      : "bg-brown-dark dark:bg-sand-white text-sand-white dark:text-brown-dark hover:bg-brown-dark/90 dark:hover:bg-sand-white/90"
                  }
                `}
              >
                {service.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-brown-dark/70 dark:text-sand-white/70 mb-4">
            Niet zeker welk pakket bij jou past? Geen probleem.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary dark:text-accent font-semibold hover:text-primary-dark dark:hover:text-accent/90 transition-colors"
          >
            Plan een vrijblijvend gesprek
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
