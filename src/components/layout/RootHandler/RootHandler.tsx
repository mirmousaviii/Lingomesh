import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Language } from "../../../hooks/useTranslations";
import { buildUrl, SUPPORTED_LANGUAGES } from "../../../routes";
import LoadingPage from "../../ui/LoadingPage";
import LanguageSelectionModal from "../../ui/LanguageSelectionModal";

interface RootHandlerProps {
  children: React.ReactNode;
}

const RootHandler: React.FC<RootHandlerProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're on the root path
    if (window.location.pathname === "/") {
      // Check localStorage for saved language
      const savedLanguage = localStorage.getItem("lang") as Language;

      if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        // Redirect to saved language
        const newUrl = buildUrl(savedLanguage, "home");
        navigate(newUrl, { replace: true });
      } else {
        // Show language selection modal
        setShowLanguageModal(true);
        setIsLoading(false);
      }
    } else {
      // Not on root path, show children
      setIsLoading(false);
    }
  }, [navigate]);

  const handleLanguageSelect = (language: Language) => {
    localStorage.setItem("lang", language);
    setShowLanguageModal(false);

    // Navigate to the selected language
    const newUrl = buildUrl(language, "home");
    navigate(newUrl, { replace: true });
  };

  // Show loading while checking localStorage
  if (isLoading) {
    return <LoadingPage message="Loading..." />;
  }

  // Show language modal if needed
  if (showLanguageModal) {
    return (
      <>
        <LoadingPage message="Please select your language" />
        <LanguageSelectionModal
          isOpen={showLanguageModal}
          onLanguageSelect={handleLanguageSelect}
        />
      </>
    );
  }

  // Show children (normal app content)
  return <>{children}</>;
};

export default RootHandler;
