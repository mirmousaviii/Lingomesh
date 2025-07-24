import { Language } from "../../../hooks/useTranslations";
import React, { useState, useEffect } from "react";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

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

interface AdjectiveExample {
  base: string;
  meaning: string;
  strong: Record<string, string>;
  weak: Record<string, string>;
  mixed: Record<string, string>;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const GermanAdjectiveDeclensionWidget: React.FC<
  GermanAdjectiveDeclensionWidgetProps
> = ({ language }) => {
  const [activeDeclension, setActiveDeclension] = useState<
    "strong" | "weak" | "mixed"
  >("strong");
  const [activeTab, setActiveTab] = useState<
    "table" | "examples" | "practice" | "quiz"
  >("table");
  const [selectedAdjective, setSelectedAdjective] = useState<string>("groß");
  const [quizQuestion, setQuizQuestion] = useState<QuizQuestion | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
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
  ];

  const comprehensiveExamples: AdjectiveExample[] = [
    {
      base: "groß",
      meaning: "big, tall",
      strong: {
        masculine: "großer",
        feminine: "große",
        neuter: "großes",
        plural: "große",
      },
      weak: {
        masculine: "große",
        feminine: "große",
        neuter: "große",
        plural: "großen",
      },
      mixed: {
        masculine: "großer",
        feminine: "große",
        neuter: "großes",
        plural: "großen",
      },
    },
    {
      base: "schön",
      meaning: "beautiful",
      strong: {
        masculine: "schöner",
        feminine: "schöne",
        neuter: "schönes",
        plural: "schöne",
      },
      weak: {
        masculine: "schöne",
        feminine: "schöne",
        neuter: "schöne",
        plural: "schönen",
      },
      mixed: {
        masculine: "schöner",
        feminine: "schöne",
        neuter: "schönes",
        plural: "schönen",
      },
    },
    {
      base: "alt",
      meaning: "old",
      strong: {
        masculine: "alter",
        feminine: "alte",
        neuter: "altes",
        plural: "alte",
      },
      weak: {
        masculine: "alte",
        feminine: "alte",
        neuter: "alte",
        plural: "alten",
      },
      mixed: {
        masculine: "alter",
        feminine: "alte",
        neuter: "altes",
        plural: "alten",
      },
    },
    {
      base: "jung",
      meaning: "young",
      strong: {
        masculine: "junger",
        feminine: "junge",
        neuter: "junges",
        plural: "junge",
      },
      weak: {
        masculine: "junge",
        feminine: "junge",
        neuter: "junge",
        plural: "jungen",
      },
      mixed: {
        masculine: "junger",
        feminine: "junge",
        neuter: "junges",
        plural: "jungen",
      },
    },
    {
      base: "klein",
      meaning: "small",
      strong: {
        masculine: "kleiner",
        feminine: "kleine",
        neuter: "kleines",
        plural: "kleine",
      },
      weak: {
        masculine: "kleine",
        feminine: "kleine",
        neuter: "kleine",
        plural: "kleinen",
      },
      mixed: {
        masculine: "kleiner",
        feminine: "kleine",
        neuter: "kleines",
        plural: "kleinen",
      },
    },
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "en"
          ? "What is the correct form of 'groß' in the nominative masculine with definite article?"
          : "Was ist die richtige Form von 'groß' im Nominativ Maskulin mit bestimmtem Artikel?",
      options: ["großer", "große", "großes", "großen"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "With definite article (der), adjectives take weak declension: -e for masculine nominative."
          : "Mit bestimmtem Artikel (der) nehmen Adjektive schwache Deklination: -e für Maskulin Nominativ.",
    },
    {
      question:
        language === "en"
          ? "What is the correct form of 'schön' in the dative feminine with indefinite article?"
          : "Was ist die richtige Form von 'schön' im Dativ Feminin mit unbestimmtem Artikel?",
      options: ["schöner", "schöne", "schönes", "schönen"],
      correctAnswer: 3,
      explanation:
        language === "en"
          ? "With indefinite article (einer), adjectives take mixed declension: -en for feminine dative."
          : "Mit unbestimmtem Artikel (einer) nehmen Adjektive gemischte Deklination: -en für Feminin Dativ.",
    },
    {
      question:
        language === "en"
          ? "What is the correct form of 'alt' in the accusative neuter with no article?"
          : "Was ist die richtige Form von 'alt' im Akkusativ Neutrum ohne Artikel?",
      options: ["alter", "alte", "altes", "alten"],
      correctAnswer: 2,
      explanation:
        language === "en"
          ? "Without article, adjectives take strong declension: -es for neuter accusative."
          : "Ohne Artikel nehmen Adjektive starke Deklination: -es für Neutrum Akkusativ.",
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

  const startNewQuiz = () => {
    const randomQuestion =
      quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    setQuizQuestion(randomQuestion);
    setQuizAnswer(null);
    setShowQuizResult(false);
    setTotalQuestions((prev) => prev + 1);
  };

  const checkAnswer = (selectedAnswer: number) => {
    if (!quizQuestion) return;

    setQuizAnswer(selectedAnswer);
    setShowQuizResult(true);

    if (selectedAnswer === quizQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const getSelectedAdjectiveData = () => {
    return (
      comprehensiveExamples.find((adj) => adj.base === selectedAdjective) ||
      comprehensiveExamples[0]
    );
  };

  useEffect(() => {
    if (activeTab === "quiz" && !quizQuestion) {
      startNewQuiz();
    }
  }, [activeTab]);

  return (
    <Widget titleKey="adjektivdeklination" language={language}>
      <div className="space-y-3 sm:space-y-4">
        {/* Main Feature Tabs */}
        <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
          {[
            { key: "table", label: language === "en" ? "Tables" : "Tabellen" },
            {
              key: "examples",
              label: language === "en" ? "Examples" : "Beispiele",
            },
            {
              key: "practice",
              label: language === "en" ? "Practice" : "Übung",
            },
            { key: "quiz", label: language === "en" ? "Quiz" : "Quiz" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(
                  tab.key as "table" | "examples" | "practice" | "quiz"
                )
              }
              className={`flex-1 px-2 sm:px-4 py-2.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 touch-manipulation ${
                activeTab === tab.key
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-600/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table Tab Content */}
        {activeTab === "table" && (
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
                    <h4
                      className={`text-base sm:text-lg font-bold ${type.color}`}
                    >
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
                          <AudioButton
                            onClick={() =>
                              speakText(
                                type.key === "strong"
                                  ? example.strong
                                  : type.key === "weak"
                                  ? example.weak
                                  : example.mixed
                              )
                            }
                            title={language === "en" ? "Listen" : "Hören"}
                            size="sm"
                          />
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
        )}

        {/* Examples Tab Content */}
        {activeTab === "examples" && (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
              <h4 className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
                {language === "en"
                  ? "Comprehensive Examples"
                  : "Umfassende Beispiele"}
              </h4>

              {/* Adjective Selector */}
              <Dropdown
                value={selectedAdjective}
                onChange={setSelectedAdjective}
                options={comprehensiveExamples.map((adj) => ({
                  value: adj.base,
                  label: `${adj.base} (${adj.meaning})`,
                }))}
                label={
                  language === "en"
                    ? "Select Adjective:"
                    : "Adjektiv auswählen:"
                }
                className="mb-4"
              />

              {/* Full Declension Table for Selected Adjective */}
              <div className="space-y-3">
                {declensionTypes.map((type) => (
                  <div key={type.key} className="space-y-2">
                    <h5 className={`text-sm font-semibold ${type.color}`}>
                      {language === "en" ? type.english : type.label}
                    </h5>
                    <div className="grid grid-cols-5 gap-2 text-xs">
                      <div className="font-semibold text-neutral-700 dark:text-neutral-300">
                        {language === "en" ? "Gender" : "Geschlecht"}
                      </div>
                      {cases.map((caseItem) => (
                        <div
                          key={caseItem.name}
                          className={`text-center font-semibold p-1 rounded ${caseItem.bgColor} ${caseItem.color}`}
                        >
                          {caseItem.name}
                        </div>
                      ))}

                      {genders.map((gender) => {
                        const adjData = getSelectedAdjectiveData();
                        const form =
                          type.key === "strong"
                            ? adjData.strong[gender.key]
                            : type.key === "weak"
                            ? adjData.weak[gender.key]
                            : adjData.mixed[gender.key];

                        return (
                          <React.Fragment key={gender.key}>
                            <div className="font-medium text-neutral-700 dark:text-neutral-300">
                              {gender.label}
                            </div>
                            {cases.map((caseItem) => (
                              <div
                                key={caseItem.name}
                                className="text-center p-1 bg-white/50 dark:bg-neutral-800/50 rounded border"
                              >
                                {form}
                              </div>
                            ))}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Practice Tab Content */}
        {activeTab === "practice" && (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
              <h4 className="text-base sm:text-lg font-bold text-green-700 dark:text-green-300 mb-3">
                {language === "en"
                  ? "Practice Declensions"
                  : "Deklinationen üben"}
              </h4>

              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Memory Tips" : "Gedächtnishilfen"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                    <div>
                      • <strong>Strong:</strong>{" "}
                      {language === "en"
                        ? "Think 'strong' = more endings"
                        : "Denke 'stark' = mehr Endungen"}
                    </div>
                    <div>
                      • <strong>Weak:</strong>{" "}
                      {language === "en"
                        ? "Think 'weak' = fewer endings (-e, -en)"
                        : "Denke 'schwach' = weniger Endungen (-e, -en)"}
                    </div>
                    <div>
                      • <strong>Mixed:</strong>{" "}
                      {language === "en"
                        ? "Combines strong and weak patterns"
                        : "Kombiniert starke und schwache Muster"}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Common Patterns" : "Häufige Muster"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                    <div>
                      • <strong>-er:</strong>{" "}
                      {language === "en"
                        ? "Masculine nominative (strong/mixed)"
                        : "Maskulin Nominativ (stark/gemischt)"}
                    </div>
                    <div>
                      • <strong>-e:</strong>{" "}
                      {language === "en"
                        ? "Feminine nominative/accusative"
                        : "Feminin Nominativ/Akkusativ"}
                    </div>
                    <div>
                      • <strong>-es:</strong>{" "}
                      {language === "en"
                        ? "Neuter nominative/accusative (strong/mixed)"
                        : "Neutrum Nominativ/Akkusativ (stark/gemischt)"}
                    </div>
                    <div>
                      • <strong>-en:</strong>{" "}
                      {language === "en"
                        ? "Dative/genitive, plural, weak declension"
                        : "Dativ/Genitiv, Plural, schwache Deklination"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quiz Tab Content */}
        {activeTab === "quiz" && (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800">
              <h4 className="text-base sm:text-lg font-bold text-purple-700 dark:text-purple-300 mb-3">
                {language === "en" ? "Quiz" : "Quiz"}
              </h4>

              {/* Score Display */}
              <div className="mb-4 p-2 bg-white/50 dark:bg-neutral-800/50 rounded border">
                <div className="text-sm text-neutral-700 dark:text-neutral-300">
                  {language === "en" ? "Score:" : "Punktzahl:"} {score}/
                  {totalQuestions}
                  {totalQuestions > 0 && (
                    <span className="ml-2 text-xs">
                      ({Math.round((score / totalQuestions) * 100)}%)
                    </span>
                  )}
                </div>
              </div>

              {/* Quiz Question */}
              {quizQuestion && (
                <div className="space-y-3">
                  <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                    <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
                      {quizQuestion.question}
                    </h5>

                    <div className="space-y-2">
                      {quizQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => checkAnswer(index)}
                          disabled={showQuizResult}
                          className={`w-full p-2 text-left rounded border transition-colors ${
                            showQuizResult
                              ? index === quizQuestion.correctAnswer
                                ? "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700"
                                : index === quizAnswer &&
                                  index !== quizQuestion.correctAnswer
                                ? "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700"
                                : "bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                              : "bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {showQuizResult && (
                      <div className="mt-3 p-2 bg-neutral-50 dark:bg-neutral-700/50 rounded border">
                        <div className="text-sm text-neutral-700 dark:text-neutral-300">
                          {quizQuestion.explanation}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={startNewQuiz}
                    className="w-full p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                  >
                    {language === "en" ? "Next Question" : "Nächste Frage"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Widget>
  );
};

export default GermanAdjectiveDeclensionWidget;
