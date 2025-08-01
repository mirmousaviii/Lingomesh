import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "./useTranslations";
import { buildUrl } from "../routes";

export const useLanguageSelection = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Only show modal if explicitly opened, not automatically
    // The RootHandler will handle the initial language detection
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
