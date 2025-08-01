import React, { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onLanguageSelect: (language: Language) => void;
}

const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({
  isOpen,
  onLanguageSelect,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const languages: { code: Language; name: string; nativeName: string }[] = [
    { code: "en", name: "English", nativeName: "Englisch" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "ru", name: "Russian", nativeName: "Русский" },
  ];

  const getModalText = () => {
    return {
      subtitle: "Choose your preferred language to learn German",
      subtitleDe: "Wählen Sie Ihre bevorzugte Sprache zum Deutschlernen",
      subtitleEs: "Elige tu idioma preferido para aprender alemán",
      subtitleRu: "Выберите предпочитаемый язык для изучения немецкого",
      continue: "Continue",
      continueDe: "Weiter",
      continueEs: "Continuar",
      continueRu: "Продолжить",
    };
  };

  // Default to English for the modal text
  const modalText = getModalText();

  // Prevent closing modal by clicking outside or pressing escape
  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] p-4 bg-opacity-75 backdrop-blur-sm ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
      aria-describedby="language-modal-description"
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 max-w-sm sm:max-w-md w-full shadow-xl ${
          isClosing ? "animate-modalSlideOut" : "animate-modalSlideIn"
        }`}
      >
        <div className="text-center mb-4 sm:mb-6">
          <p
            id="language-modal-description"
            className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"
          >
            {modalText.subtitle}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {modalText.subtitleDe}
          </p>
        </div>

        <div
          className="space-y-2 sm:space-y-3"
          role="group"
          aria-label="Language options"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              className="w-full flex items-center justify-between p-3 sm:p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label={`Select ${lang.name} as your language`}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">
                  {lang.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {lang.nativeName}
                </span>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionModal;
