import { Language } from "../../../hooks/useTranslations";
import React, { useState } from "react";
import Widget from "../../ui/Widget/Widget";

interface GermanAdjectiveDeclensionWidgetProps {
  language: Language;
}

interface DeclensionData {
  nominativ: string;
  akkusativ: string;
  dativ: string;
  genitiv: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const GermanAdjectiveDeclensionWidget: React.FC<
  GermanAdjectiveDeclensionWidgetProps
> = ({ language }) => {
  const [activeDeclension, setActiveDeclension] = useState<
    "strong" | "weak" | "mixed"
  >("strong");
  // Strong declension (no article or indefinite article)
  const strongDeclension: Record<string, DeclensionData> = {
    masculine: {
      nominativ: "-er",
      akkusativ: "-en",
      dativ: "-em",
      genitiv: "-en",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-er",
      genitiv: "-er",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "-es",
      akkusativ: "-es",
      dativ: "-em",
      genitiv: "-en",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-er",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  // Weak declension (with definite article)
  const weakDeclension: Record<string, DeclensionData> = {
    masculine: {
      nominativ: "-e",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-en",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-en",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "-en",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  // Mixed declension (with indefinite article)
  const mixedDeclension: Record<string, DeclensionData> = {
    masculine: {
      nominativ: "-er",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-en",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "-es",
      akkusativ: "-es",
      dativ: "-en",
      genitiv: "-en",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "-en",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  const cases = [
    {
      name: "Nominativ",
      english: "Nominative",
      description: "Subject of the sentence",
      color: "text-orange-700 dark:text-orange-300",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      name: "Akkusativ",
      english: "Accusative",
      description: "Direct object",
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      name: "Dativ",
      english: "Dative",
      description: "Indirect object",
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
    {
      name: "Genitiv",
      english: "Genitive",
      description: "Possession/relationship",
      color: "text-amber-700 dark:text-amber-300",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
  ];

  const genders = [
    { key: "masculine", label: "Maskulin", english: "Masculine" },
    { key: "feminine", label: "Feminin", english: "Feminine" },
    { key: "neuter", label: "Neutrum", english: "Neuter" },
    { key: "plural", label: "Plural", english: "Plural" },
  ];

  const declensionTypes = [
    {
      key: "strong",
      label: "Starke Deklination",
      english: "Strong Declension",
      description: "No article or indefinite article",
      data: strongDeclension,
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      key: "weak",
      label: "Schwache Deklination",
      english: "Weak Declension",
      description: "With definite article",
      data: weakDeclension,
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      key: "mixed",
      label: "Gemischte Deklination",
      english: "Mixed Declension",
      description: "With indefinite article",
      data: mixedDeclension,
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  ];

  const examples = [
    {
      strong: "Ein großer Mann",
      weak: "Der große Mann",
      mixed: "Ein großer Mann",
      english: "A big man / The big man",
    },
    {
      strong: "Eine schöne Frau",
      weak: "Die schöne Frau",
      mixed: "Eine schöne Frau",
      english: "A beautiful woman / The beautiful woman",
    },
  ];

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Widget titleKey="adjektivdeklination" language={language}>
      <div className="space-y-3 sm:space-y-4">
        {/* Declension Type Selector Tabs */}
        <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
          {declensionTypes.map((type) => (
            <button
              key={type.key}
              onClick={() =>
                setActiveDeclension(type.key as "strong" | "weak" | "mixed")
              }
              className={`flex-1 px-2 sm:px-4 py-2.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 touch-manipulation ${
                activeDeclension === type.key
                  ? `${type.bgColor} ${type.color} shadow-sm`
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-600/30"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Active Declension Content */}
        {declensionTypes.map((type) => (
          <div
            key={type.key}
            className={`${
              activeDeclension === type.key ? "block" : "hidden"
            } space-y-3 sm:space-y-4`}
          >
            {/* Declension Table */}
            <div
              className={`p-3 sm:p-4 rounded-md border ${type.borderColor} ${type.bgColor}`}
            >
              <div className="mb-2 sm:mb-3">
                <h4 className={`text-base sm:text-lg font-bold ${type.color}`}>
                  {language === "en" ? type.english : type.label}
                </h4>
                {language === "en" && (
                  <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {type.description}
                  </div>
                )}
              </div>

              <div className="space-y-2 sm:space-y-3">
                {/* Header Row */}
                <div className="grid grid-cols-5 gap-1">
                  <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-xs">
                    {language === "en" ? "Gender" : "Geschlecht"}
                  </div>
                  {cases.map((caseItem, index) => (
                    <div
                      key={index}
                      className={`text-center font-semibold text-xs p-1 rounded ${caseItem.bgColor} ${caseItem.color}`}
                    >
                      <div className="text-xs leading-tight">
                        {caseItem.name}
                      </div>
                      {language === "en" && (
                        <div className="text-xs opacity-75 leading-tight mt-0.5">
                          {caseItem.english}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Table Rows */}
                {genders.map((gender) => {
                  const declension = type.data[gender.key];
                  return (
                    <div
                      key={gender.key}
                      className={`grid grid-cols-5 gap-1 p-2 rounded border ${declension.borderColor} ${declension.bgColor}`}
                    >
                      <div className="flex flex-col justify-center">
                        <div
                          className={`font-semibold text-xs sm:text-sm ${declension.color}`}
                        >
                          {gender.label}
                        </div>
                        {language === "en" && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                            {gender.english}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm sm:text-lg font-bold ${declension.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${declension.borderColor}`}
                        >
                          {declension.nominativ}
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm sm:text-lg font-bold ${declension.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${declension.borderColor}`}
                        >
                          {declension.akkusativ}
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm sm:text-lg font-bold ${declension.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${declension.borderColor}`}
                        >
                          {declension.dativ}
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className={`text-sm sm:text-lg font-bold ${declension.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${declension.borderColor}`}
                        >
                          {declension.genitiv}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Examples for this declension type */}
            <div className="p-3 sm:p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
              <h4 className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2 sm:mb-3">
                {language === "en" ? "Examples" : "Beispiele"}
              </h4>
              <div className="space-y-2">
                {examples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border border-white/30 dark:border-neutral-600/30"
                  >
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="flex-1 space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                          <span className={`font-semibold ${type.color}`}>
                            {type.label}:
                          </span>{" "}
                          {type.key === "strong"
                            ? example.strong
                            : type.key === "weak"
                            ? example.weak
                            : example.mixed}
                        </div>
                        {language === "en" && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 italic leading-tight">
                            {example.english}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          speakText(
                            type.key === "strong"
                              ? example.strong
                              : type.key === "weak"
                              ? example.weak
                              : example.mixed
                          )
                        }
                        className="flex-shrink-0 p-2.5 sm:p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200 touch-manipulation"
                        title={language === "en" ? "Listen" : "Hören"}
                      >
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Quick Reference */}
        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            {language === "en" ? "Quick Reference:" : "Schnellübersicht:"}
          </h5>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
            <div className="leading-tight">
              <strong>Strong:</strong>{" "}
              {language === "en"
                ? "No article or indefinite article"
                : "Kein Artikel oder unbestimmter Artikel"}
            </div>
            <div className="leading-tight">
              <strong>Weak:</strong>{" "}
              {language === "en"
                ? "With definite article (der, die, das)"
                : "Mit bestimmtem Artikel (der, die, das)"}
            </div>
            <div className="leading-tight">
              <strong>Mixed:</strong>{" "}
              {language === "en"
                ? "With indefinite article (ein, eine, ein)"
                : "Mit unbestimmtem Artikel (ein, eine, ein)"}
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default GermanAdjectiveDeclensionWidget;
