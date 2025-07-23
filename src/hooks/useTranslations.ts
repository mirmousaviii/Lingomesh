import { useState, useEffect } from "react";

export const useTranslations = () => {
  const [showTranslations, setShowTranslations] = useState(false);

  useEffect(() => {
    const savedTranslations = localStorage.getItem("showTranslations");
    if (savedTranslations !== null) {
      setShowTranslations(JSON.parse(savedTranslations));
    }
  }, []);

  const handleTranslationChange = (show: boolean) => {
    setShowTranslations(show);
    localStorage.setItem("showTranslations", JSON.stringify(show));
  };

  return { showTranslations, setShowTranslations: handleTranslationChange };
};
