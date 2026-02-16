"use client";

import { motion } from "framer-motion";

const problems = [
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
];

export default function ProblemStatement() {
  return (
    <section className="py-24 bg-gradient-to-br from-sand-light to-sand-white dark:from-brown-medium dark:to-brown-dark">
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
            Herken je dit?
          </h2>
          <p className="text-xl text-brown-dark/70 dark:text-sand-white/70 max-w-3xl mx-auto">
            De meeste bedrijven experimenteren met AI. Maar zonder architectuur wordt het al snel een duur, chaotisch experiment.
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-sand-white dark:bg-brown-medium rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-brown-dark/10 dark:border-sand-white/10"
            >
              <h3 className="text-lg font-bold text-brown-dark dark:text-sand-white mb-2">{problem.title}</h3>
              <p className="text-brown-dark/70 dark:text-sand-white/70 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The solution teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary to-accent dark:from-accent dark:to-primary rounded-2xl p-8 md:p-12 text-white dark:text-brown-dark shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              De oplossing? Volwassen architectuur.
            </h3>
            <p className="text-lg mb-6 text-white/90 dark:text-brown-dark/90">
              Wij consolideren jouw AI-stack van 20+ tools naar 5-8 kerncomponenten. Met security als vangrail, niet als blokkade.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Private LLM-instances (Azure/Cloudflare) voor gevoelige data",
                "Eén unified API-laag voor alle AI-functionaliteit",
                "100% GDPR-compliant dataflows",
                "Scalable software, geen plugin-wrappers",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white dark:text-brown-dark mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 dark:text-brown-dark/90">{item}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href="#diensten"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-sand-white dark:bg-brown-dark text-primary dark:text-accent rounded-lg font-semibold hover:bg-sand-light dark:hover:bg-brown-dark/80 transition-colors shadow-lg"
            >
              Bekijk onze aanpak
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
