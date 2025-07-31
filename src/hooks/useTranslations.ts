import { useState, useEffect } from "react";

export type Language = "de" | "en" | "es" | "ru";

export const useTranslations = () => {
  const [language, setLanguage] = useState<Language | null>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang");
    if (
      savedLanguage &&
      (savedLanguage === "de" ||
        savedLanguage === "en" ||
        savedLanguage === "es" ||
        savedLanguage === "ru")
    ) {
      setLanguage(savedLanguage as Language);
    }
    // Don't set any default language - let the language selection modal handle it
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("lang", newLanguage);
  };

  return { language: language || "en", setLanguage: handleLanguageChange };
};
