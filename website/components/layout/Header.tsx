"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Diensten", href: "#diensten" },
    { name: "Over Resuno", href: "#over" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand-white/80 dark:bg-brown-dark/80 backdrop-blur-md border-b border-brown-dark/10 dark:border-sand-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Resuno
            </span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-brown-dark dark:text-sand-white hover:text-primary dark:hover:text-accent font-medium transition-colors px-3 py-2"
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageToggle />
            <ThemeToggle />
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary dark:bg-accent text-white dark:text-brown-dark rounded-lg font-semibold hover:bg-primary-dark dark:hover:bg-accent/90 transition-colors"
            >
              Boek een Scan
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-brown-dark dark:text-sand-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-brown-dark dark:text-sand-white hover:text-primary dark:hover:text-accent font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2 bg-primary dark:bg-accent text-white dark:text-brown-dark rounded-lg font-semibold text-center hover:bg-primary-dark dark:hover:bg-accent/90 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Boek een Scan
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
