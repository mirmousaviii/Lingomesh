import { useState, useEffect } from "react";

export type Language = "de" | "en";

export const useTranslations = () => {
  const [language, setLanguage] = useState<Language>("de");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "de" || savedLanguage === "en")) {
      setLanguage(savedLanguage as Language);
    }
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return { language, setLanguage: handleLanguageChange };
};
