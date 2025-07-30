import React from "react";
import { Language } from "../../../hooks/useTranslations";
import { translations } from "../../../constants/translations";

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onLanguageSelect: (language: Language) => void;
}

const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({
  isOpen,
  onLanguageSelect,
}) => {
  if (!isOpen) return null;

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español" },
    { code: "ru", name: "Русский" },
  ];

  const getModalText = (language: Language) => {
    const t = translations[language];
    return {
      title: "Welcome to " + t.app.name,
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
  const modalText = getModalText("en");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {modalText.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {modalText.subtitle}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            {modalText.subtitleDe}
          </p>
        </div>

        <div className="space-y-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageSelect(lang.code)}
              className="w-full flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {lang.name}
              </span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            You can change this later in header
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionModal;
