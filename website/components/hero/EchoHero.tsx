"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Echo {
  id: number;
  label: string;
  description: string;
  opacity: number;
  xOffset: number;
  yOffset: number;
}

const echoes: Echo[] = [
  {
    id: 1,
    label: "Echo 01: Security",
    description: "GDPR-compliant architectuur en zero-trust data flows",
    opacity: 0.15,
    xOffset: -40,
    yOffset: -20,
  },
  {
    id: 2,
    label: "Echo 02: Rapid Prototyping",
    description: "Van concept naar werkende POC in weken, niet maanden",
    opacity: 0.10,
    xOffset: -80,
    yOffset: -40,
  },
  {
    id: 3,
    label: "Echo 03: API Orchestration",
    description: "Private LLM setups en gestroomlijnde tool-consolidatie",
    opacity: 0.07,
    xOffset: -120,
    yOffset: -60,
  },
  {
    id: 4,
    label: "Echo 04: Scalable Architecture",
    description: "Van houtje-touwtje naar volwassen, productie-klare systemen",
    opacity: 0.04,
    xOffset: -160,
    yOffset: -80,
  },
];

export default function EchoHero() {
  const [hoveredEcho, setHoveredEcho] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-accent/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-tight">
              Van AI-chaos naar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                schaalbaar momentum
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-900/80 dark:text-gray-50/80 leading-relaxed max-w-2xl">
              Wij bouwen de architectuur die jouw team versterkt. Veilig, volwassen en zonder houtje-touwtje oplossingen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary dark:bg-accent text-white dark:text-gray-900 rounded-lg font-semibold text-lg hover:bg-primary-dark dark:hover:bg-accent/90 transition-colors shadow-lg shadow-primary/30 dark:shadow-accent/30 text-center"
              >
                Boek een Resuno Scan
              </motion.a>

              <motion.a
                href="#diensten"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 rounded-lg font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border-2 border-gray-900/20 dark:border-gray-50/20 text-center"
              >
                Bekijk Diensten
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-gray-900/20 dark:border-gray-50/20">
              <p className="text-sm text-gray-900/60 dark:text-gray-50/60 mb-4">Vertrouwd door MKB en Tech Startups in Nederland</p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">100% GDPR-compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-50">Nederlandse markt specialist</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - The Echo Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Echo silhouettes (background layers) */}
              {echoes.map((echo) => (
                <motion.div
                  key={echo.id}
                  className="absolute inset-0 cursor-pointer"
                  style={{
                    transform: `translate(${echo.xOffset}px, ${echo.yOffset}px)`,
                  }}
                  onMouseEnter={() => setHoveredEcho(echo.id)}
                  onMouseLeave={() => setHoveredEcho(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Placeholder for Tom's photo - will be replaced with actual image */}
                  <div
                    className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-accent dark:from-accent to-primary shadow-2xl"
                    style={{ opacity: echo.opacity }}
                  >
                    {/* Silhouette/photo placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
                      {echo.id === 4 && "Tom"}
                    </div>
                  </div>

                  {/* Hover tooltip */}
                  {hoveredEcho === echo.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 px-4 py-3 rounded-lg shadow-xl whitespace-nowrap z-50"
                    >
                      <p className="font-semibold text-sm mb-1">{echo.label}</p>
                      <p className="text-xs text-gray-50/80 dark:text-gray-900/80 max-w-xs whitespace-normal">{echo.description}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Main image (foreground) */}
              <motion.div
                className="relative w-full h-full cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary to-accent dark:from-accent to-primary shadow-2xl flex items-center justify-center">
                  {/* Placeholder for Tom's main photo */}
                  <div className="text-white dark:text-gray-900 text-xl font-semibold">Tom</div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">Tom van der Linden</p>
                    <p className="text-xs text-gray-900/70 dark:text-gray-50/70">AI Architect & Founder</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-accent/30 dark:bg-accent/40 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-900/40 dark:text-gray-50/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
