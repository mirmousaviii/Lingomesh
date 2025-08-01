import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Language } from "./useTranslations";
import { buildUrl, getPageFromPath } from "../routes";

export const useLanguageSelection = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only show modal if explicitly opened, not automatically
    // The RootHandler will handle the initial language detection
  }, []);

  const handleLanguageSelect = (language: Language) => {
    localStorage.setItem("lang", language);
    setShowLanguageModal(false);

    // Get the current page from the URL
    const currentPage = getPageFromPath(location.pathname);

    // Navigate to the same page with the new language
    const newUrl = buildUrl(language, currentPage);
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
