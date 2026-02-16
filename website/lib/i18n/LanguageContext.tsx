"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, Translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("nl");

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "nl" || saved === "en")) {
      setLanguageState(saved);
    }

    // Listen for language change events from LanguageToggle
    const handleLanguageChange = (e: CustomEvent<Language>) => {
      setLanguageState(e.detail);
    };

    window.addEventListener("languagechange" as any, handleLanguageChange);
    return () => {
      window.removeEventListener("languagechange" as any, handleLanguageChange);
    };
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
