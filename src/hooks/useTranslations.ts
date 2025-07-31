import { useState, useEffect } from "react";

export type Language = "de" | "en" | "es" | "ru";

export const useTranslations = () => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (
      savedLanguage &&
      (savedLanguage === "de" ||
        savedLanguage === "en" ||
        savedLanguage === "es" ||
        savedLanguage === "ru")
    ) {
      setLanguage(savedLanguage as Language);
    } else {
      // Set English as default if no valid language is saved
      setLanguage("en");
      localStorage.setItem("language", "en");
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return { language, setLanguage: handleLanguageChange };
};
