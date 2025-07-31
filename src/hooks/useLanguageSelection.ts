import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "./useTranslations";
import { buildUrl } from "../routes";

export const useLanguageSelection = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if language is already set in localStorage
    const savedLanguage = localStorage.getItem("lang");

    if (!savedLanguage) {
      // No language saved - show the language selection modal
      setShowLanguageModal(true);
    }
  }, []);

  const handleLanguageSelect = (language: Language) => {
    localStorage.setItem("lang", language);
    setShowLanguageModal(false);

    // Navigate to the selected language using React Router
    const newUrl = buildUrl(language, "home");
    navigate(newUrl);
  };

  const openModal = () => {
    setShowLanguageModal(true);
  };

  const closeModal = () => {
    setShowLanguageModal(false);
  };

  return {
    showLanguageModal,
    handleLanguageSelect,
    openModal,
    closeModal,
  };
};
