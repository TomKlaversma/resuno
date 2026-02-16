"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Language = "nl" | "en";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("nl");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === "nl" ? "en" : "nl";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);

    // Update HTML lang attribute
    document.documentElement.lang = newLang;

    // Trigger custom event for language change
    window.dispatchEvent(new CustomEvent("languagechange", { detail: newLang }));
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
      aria-label={`Switch to ${language === "nl" ? "English" : "Dutch"}`}
    >
      {language === "nl" ? "EN" : "NL"}
    </motion.button>
  );
}
