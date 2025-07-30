import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "./useTranslations";
import { buildUrl } from "../routes";

export const useLanguageSelection = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if language is already set in localStorage
    const savedLanguage = localStorage.getItem("language");

    if (!savedLanguage) {
      // No language saved - show language selection modal
      setShowLanguageModal(true);
    }
  }, [navigate]);

  const handleLanguageSelect = (language: Language) => {
    localStorage.setItem("language", language);
    setShowLanguageModal(false);

    // Navigate to the selected language using React Router
    const newUrl = buildUrl(language, "home");
    navigate(newUrl);
  };

  const closeModal = () => {
    setShowLanguageModal(false);
  };

  return {
    showLanguageModal,
    handleLanguageSelect,
    closeModal,
  };
};
