import React, { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanPersonalPronounsWidgetProps {
  language: Language;
}

interface PronounData {
  person: string;
  german: string;
  english: string;
  possessive: string;
  possessiveEnglish: string;
  example: string;
  exampleEnglish: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface PronounCase {
  nominativ: string;
  akkusativ: string;
  dativ: string;
  genitiv: string;
}

interface PronounExample {
  pronoun: string;
  case: string;
  sentence: string;
  english: string;
  explanation: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const GermanPersonalPronounsWidget: React.FC<
  GermanPersonalPronounsWidgetProps
> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<
    "table" | "examples" | "practice" | "quiz"
  >("table");
  const [selectedPerson, setSelectedPerson] = useState<string>("ich");
  const [quizQuestion, setQuizQuestion] = useState<QuizQuestion | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const pronouns: PronounData[] = [
    {
      person: "1. Person Singular",
      german: "ich",
      english: "I",
      possessive: "mein",
      possessiveEnglish: "my",
      example: "Ich lese mein Buch.",
      exampleEnglish: "I read my book.",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      person: "2. Person Singular",
      german: "du",
      english: "you (informal)",
      possessive: "dein",
      possessiveEnglish: "your",
      example: "Du trinkst deinen Kaffee.",
      exampleEnglish: "You drink your coffee.",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      person: "3. Person Singular (m)",
      german: "er",
      english: "he",
      possessive: "sein",
      possessiveEnglish: "his",
      example: "Er fährt sein Auto.",
      exampleEnglish: "He drives his car.",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      person: "3. Person Singular (f)",
      german: "sie",
      english: "she",
      possessive: "ihr",
      possessiveEnglish: "her",
      example: "Sie schreibt ihr Buch.",
      exampleEnglish: "She writes her book.",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    {
      person: "3. Person Singular (n)",
      german: "es",
      english: "it",
      possessive: "sein",
      possessiveEnglish: "its",
      example: "Es öffnet sein Fenster.",
      exampleEnglish: "It opens its window.",
      color: "text-orange-700 dark:text-orange-300",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
      person: "1. Person Plural",
      german: "wir",
      english: "we",
      possessive: "unser",
      possessiveEnglish: "our",
      example: "Wir essen unser Brot.",
      exampleEnglish: "We eat our bread.",
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
      person: "2. Person Plural",
      german: "ihr",
      english: "you (plural)",
      possessive: "euer",
      possessiveEnglish: "your",
      example: "Ihr spielt euer Spiel.",
      exampleEnglish: "You play your game.",
      color: "text-teal-700 dark:text-teal-300",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
    {
      person: "3. Person Plural",
      german: "sie",
      english: "they",
      possessive: "ihr",
      possessiveEnglish: "their",
      example: "Sie kaufen ihr Haus.",
      exampleEnglish: "They buy their house.",
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      person: "Formal (Sie)",
      german: "Sie",
      english: "you (formal)",
      possessive: "Ihr",
      possessiveEnglish: "your",
      example: "Sie öffnen Ihr Fenster.",
      exampleEnglish: "You open your window.",
      color: "text-gray-700 dark:text-gray-300",
      bgColor: "bg-gray-50 dark:bg-gray-900/20",
      borderColor: "border-gray-200 dark:border-gray-800",
    },
  ];

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

  const pronounCases: Record<string, PronounCase> = {
    ich: {
      nominativ: "ich",
      akkusativ: "mich",
      dativ: "mir",
      genitiv: "meiner",
    },
    du: {
      nominativ: "du",
      akkusativ: "dich",
      dativ: "dir",
      genitiv: "deiner",
    },
    er: {
      nominativ: "er",
      akkusativ: "ihn",
      dativ: "ihm",
      genitiv: "seiner",
    },
    sie: {
      nominativ: "sie",
      akkusativ: "sie",
      dativ: "ihr",
      genitiv: "ihrer",
    },
    es: {
      nominativ: "es",
      akkusativ: "es",
      dativ: "ihm",
      genitiv: "seiner",
    },
    wir: {
      nominativ: "wir",
      akkusativ: "uns",
      dativ: "uns",
      genitiv: "unserer",
    },
    ihr: {
      nominativ: "ihr",
      akkusativ: "euch",
      dativ: "euch",
      genitiv: "eurer",
    },
    Sie: {
      nominativ: "Sie",
      akkusativ: "Sie",
      dativ: "Ihnen",
      genitiv: "Ihrer",
    },
  };

  const comprehensiveExamples: PronounExample[] = [
    {
      pronoun: "ich",
      case: "nominativ",
      sentence: "Ich gehe zur Schule.",
      english: "I go to school.",
      explanation: "Subject of the sentence",
    },
    {
      pronoun: "mich",
      case: "akkusativ",
      sentence: "Er sieht mich.",
      english: "He sees me.",
      explanation: "Direct object of the verb",
    },
    {
      pronoun: "mir",
      case: "dativ",
      sentence: "Er gibt mir ein Buch.",
      english: "He gives me a book.",
      explanation: "Indirect object (recipient)",
    },
    {
      pronoun: "meiner",
      case: "genitiv",
      sentence: "Das ist meiner.",
      english: "That is mine.",
      explanation: "Possessive form (rare in modern German)",
    },
    {
      pronoun: "du",
      case: "nominativ",
      sentence: "Du bist mein Freund.",
      english: "You are my friend.",
      explanation: "Subject of the sentence",
    },
    {
      pronoun: "dich",
      case: "akkusativ",
      sentence: "Ich liebe dich.",
      english: "I love you.",
      explanation: "Direct object of the verb",
    },
    {
      pronoun: "dir",
      case: "dativ",
      sentence: "Ich helfe dir.",
      english: "I help you.",
      explanation: "Indirect object (beneficiary)",
    },
    {
      pronoun: "er",
      case: "nominativ",
      sentence: "Er ist ein Lehrer.",
      english: "He is a teacher.",
      explanation: "Subject of the sentence",
    },
    {
      pronoun: "ihn",
      case: "akkusativ",
      sentence: "Ich kenne ihn.",
      english: "I know him.",
      explanation: "Direct object of the verb",
    },
    {
      pronoun: "ihm",
      case: "dativ",
      sentence: "Ich gebe ihm Geld.",
      english: "I give him money.",
      explanation: "Indirect object (recipient)",
    },
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "en"
          ? "What is the accusative form of 'ich'?"
          : "Was ist die Akkusativform von 'ich'?",
      options: ["ich", "mich", "mir", "meiner"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Ich' becomes 'mich' in the accusative case (direct object)."
          : "'Ich' wird zu 'mich' im Akkusativ (direktes Objekt).",
    },
    {
      question:
        language === "en"
          ? "What is the dative form of 'du'?"
          : "Was ist die Dativform von 'du'?",
      options: ["du", "dich", "dir", "deiner"],
      correctAnswer: 2,
      explanation:
        language === "en"
          ? "'Du' becomes 'dir' in the dative case (indirect object)."
          : "'Du' wird zu 'dir' im Dativ (indirektes Objekt).",
    },
    {
      question:
        language === "en"
          ? "What is the accusative form of 'er'?"
          : "Was ist die Akkusativform von 'er'?",
      options: ["er", "ihn", "ihm", "seiner"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Er' becomes 'ihn' in the accusative case (direct object)."
          : "'Er' wird zu 'ihn' im Akkusativ (direktes Objekt).",
    },
    {
      question:
        language === "en"
          ? "What is the dative form of 'sie' (she)?"
          : "Was ist die Dativform von 'sie' (sie)?",
      options: ["sie", "ihr", "ihnen", "ihrer"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Sie' (she) becomes 'ihr' in the dative case."
          : "'Sie' (sie) wird zu 'ihr' im Dativ.",
    },
    {
      question:
        language === "en"
          ? "What is the accusative form of 'wir'?"
          : "Was ist die Akkusativform von 'wir'?",
      options: ["wir", "uns", "euch", "ihnen"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Wir' becomes 'uns' in the accusative case."
          : "'Wir' wird zu 'uns' im Akkusativ.",
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

  const getSelectedPronounCases = () => {
    return pronounCases[selectedPerson] || pronounCases.ich;
  };

  useEffect(() => {
    if (activeTab === "quiz" && !quizQuestion) {
      startNewQuiz();
    }
  }, [activeTab]);

  return (
    <Widget titleKey="personalpronomen" language={language}>
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
            {/* Basic Pronouns Table */}
            <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
              <h4 className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
                {language === "en" ? "Personal Pronouns" : "Personalpronomen"}
              </h4>

              {/* Mobile-friendly layout */}
              <div className="block md:hidden space-y-3">
                {pronouns.map((pronoun, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded border ${pronoun.borderColor} ${pronoun.bgColor}`}
                  >
                    {/* Person */}
                    <div className="mb-2">
                      <div className={`font-semibold text-sm ${pronoun.color}`}>
                        {pronoun.person}
                      </div>
                      {language === "en" && (
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          {pronoun.english}
                        </div>
                      )}
                    </div>

                    {/* Pronouns and Possessives Row */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="text-center">
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                          {language === "en" ? "Pronoun" : "Pronomen"}
                        </div>
                        <div
                          className={`text-lg font-bold ${pronoun.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-2 border ${pronoun.borderColor}`}
                        >
                          {pronoun.german}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                          {language === "en" ? "Possessive" : "Possessiv"}
                        </div>
                        <div
                          className={`text-lg font-bold ${pronoun.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-2 border ${pronoun.borderColor}`}
                        >
                          {pronoun.possessive}
                        </div>
                      </div>
                    </div>

                    {/* Example */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                          {language === "en" ? "Example" : "Beispiel"}
                        </div>
                        <div className={`text-sm font-medium ${pronoun.color}`}>
                          {pronoun.example}
                        </div>
                        {language === "en" && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {pronoun.exampleEnglish}
                          </div>
                        )}
                      </div>
                      <AudioButton
                        onClick={() => speakText(pronoun.example)}
                        title={language === "en" ? "Listen" : "Hören"}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop layout */}
              <div className="hidden md:block">
                {/* Header Row */}
                <div className="grid grid-cols-4 gap-3 mb-3">
                  <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
                    {language === "en" ? "Person" : "Person"}
                  </div>
                  <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
                    {language === "en" ? "Pronoun" : "Pronomen"}
                  </div>
                  <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
                    {language === "en" ? "Possessive" : "Possessiv"}
                  </div>
                  <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
                    {language === "en" ? "Example" : "Beispiel"}
                  </div>
                </div>

                {/* Pronoun Rows */}
                {pronouns.map((pronoun, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-4 gap-3 p-3 rounded border ${pronoun.borderColor} ${pronoun.bgColor} mb-2`}
                  >
                    {/* Person */}
                    <div className="flex flex-col justify-center">
                      <div className={`font-semibold text-sm ${pronoun.color}`}>
                        {pronoun.person}
                      </div>
                      {language === "en" && (
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight mt-1">
                          {pronoun.english}
                        </div>
                      )}
                    </div>

                    {/* Pronoun */}
                    <div className="text-center flex flex-col justify-center">
                      <div
                        className={`text-xl font-bold ${pronoun.color} bg-white/50 dark:bg-neutral-800/50 rounded py-2 px-3 border ${pronoun.borderColor}`}
                      >
                        {pronoun.german}
                      </div>
                    </div>

                    {/* Possessive */}
                    <div className="text-center flex flex-col justify-center">
                      <div
                        className={`text-xl font-bold ${pronoun.color} bg-white/50 dark:bg-neutral-800/50 rounded py-2 px-3 border ${pronoun.borderColor}`}
                      >
                        {pronoun.possessive}
                      </div>
                    </div>

                    {/* Example */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1">
                        <div
                          className={`text-sm font-medium ${pronoun.color} leading-relaxed`}
                        >
                          {pronoun.example}
                        </div>
                        {language === "en" && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight mt-1">
                            {pronoun.exampleEnglish}
                          </div>
                        )}
                      </div>
                      <AudioButton
                        onClick={() => speakText(pronoun.example)}
                        title={language === "en" ? "Listen" : "Hören"}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Reference */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
              <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {language === "en" ? "Quick Reference:" : "Schnellübersicht:"}
              </h5>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                <div>
                  <strong>Singular:</strong> ich → mein, du → dein, er → sein,
                  sie → ihr, es → sein
                </div>
                <div>
                  <strong>Plural:</strong> wir → unser, ihr → euer, sie → ihr
                </div>
                <div>
                  <strong>Formal:</strong> Sie → Ihr
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

              {/* Pronoun Selector */}
              <Dropdown
                value={selectedPerson}
                onChange={setSelectedPerson}
                options={pronouns.map((pronoun) => ({
                  value: pronoun.german,
                  label: `${pronoun.german} (${pronoun.english})`,
                }))}
                label={
                  language === "en" ? "Select Pronoun:" : "Pronomen auswählen:"
                }
                className="mb-4"
              />

              {/* Full Case Table for Selected Pronoun */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {language === "en" ? "All Cases" : "Alle Fälle"}
                  </h5>
                  <div className="grid grid-cols-5 gap-2 text-xs">
                    <div className="font-semibold text-neutral-700 dark:text-neutral-300">
                      {language === "en" ? "Case" : "Fall"}
                    </div>
                    {cases.map((caseItem) => (
                      <div
                        key={caseItem.name}
                        className={`text-center font-semibold p-1 rounded ${caseItem.bgColor} ${caseItem.color}`}
                      >
                        {caseItem.name}
                      </div>
                    ))}

                    <div className="font-medium text-neutral-700 dark:text-neutral-300">
                      {language === "en" ? "Form" : "Form"}
                    </div>
                    {cases.map((caseItem) => {
                      const pronounCase = getSelectedPronounCases();
                      const form =
                        caseItem.name === "Nominativ"
                          ? pronounCase.nominativ
                          : caseItem.name === "Akkusativ"
                          ? pronounCase.akkusativ
                          : caseItem.name === "Dativ"
                          ? pronounCase.dativ
                          : pronounCase.genitiv;

                      return (
                        <div
                          key={caseItem.name}
                          className="text-center p-1 bg-white/50 dark:bg-neutral-800/50 rounded border font-bold text-blue-600 dark:text-blue-400"
                        >
                          {form}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Example Sentences */}
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Example Sentences" : "Beispielsätze"}
                  </h5>
                  <div className="space-y-2">
                    {comprehensiveExamples
                      .filter((example) => example.pronoun === selectedPerson)
                      .slice(0, 4)
                      .map((example, index) => (
                        <div
                          key={index}
                          className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border border-white/30 dark:border-neutral-600/30"
                        >
                          <div className="flex items-start justify-between gap-2 sm:gap-3">
                            <div className="flex-1 space-y-1 sm:space-y-2">
                              <div className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                                <span className="font-semibold text-blue-600 dark:text-blue-400">
                                  {example.pronoun}
                                </span>{" "}
                                ({example.case}) - {example.explanation}
                              </div>
                              <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-tight">
                                {example.sentence}
                              </div>
                              {language === "en" && (
                                <div className="text-xs text-neutral-500 dark:text-neutral-400 italic leading-tight">
                                  {example.english}
                                </div>
                              )}
                            </div>
                            <AudioButton
                              onClick={() => speakText(example.sentence)}
                              title={language === "en" ? "Listen" : "Hören"}
                              size="sm"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Practice Tab Content */}
        {activeTab === "practice" && (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
              <h4 className="text-base sm:text-lg font-bold text-green-700 dark:text-green-300 mb-3">
                {language === "en" ? "Practice Pronouns" : "Pronomen üben"}
              </h4>

              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Memory Tips" : "Gedächtnishilfen"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                    <div>
                      • <strong>ich → mich:</strong>{" "}
                      {language === "en"
                        ? "Think 'I' becomes 'me' in accusative"
                        : "Denke 'ich' wird zu 'mich' im Akkusativ"}
                    </div>
                    <div>
                      • <strong>du → dich:</strong>{" "}
                      {language === "en"
                        ? "Think 'you' becomes 'you' (object form)"
                        : "Denke 'du' wird zu 'dich' (Objektform)"}
                    </div>
                    <div>
                      • <strong>er → ihn:</strong>{" "}
                      {language === "en"
                        ? "Think 'he' becomes 'him' in accusative"
                        : "Denke 'er' wird zu 'ihn' im Akkusativ"}
                    </div>
                    <div>
                      • <strong>sie → ihr:</strong>{" "}
                      {language === "en"
                        ? "Think 'she' becomes 'her' in dative"
                        : "Denke 'sie' wird zu 'ihr' im Dativ"}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Common Patterns" : "Häufige Muster"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                    <div>
                      • <strong>Nominativ:</strong>{" "}
                      {language === "en"
                        ? "ich, du, er, sie, es, wir, ihr, sie, Sie"
                        : "ich, du, er, sie, es, wir, ihr, sie, Sie"}
                    </div>
                    <div>
                      • <strong>Akkusativ:</strong>{" "}
                      {language === "en"
                        ? "mich, dich, ihn, sie, es, uns, euch, sie, Sie"
                        : "mich, dich, ihn, sie, es, uns, euch, sie, Sie"}
                    </div>
                    <div>
                      • <strong>Dativ:</strong>{" "}
                      {language === "en"
                        ? "mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen"
                        : "mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen"}
                    </div>
                    <div>
                      • <strong>Genitiv:</strong>{" "}
                      {language === "en"
                        ? "meiner, deiner, seiner, ihrer, seiner, unserer, eurer, ihrer, Ihrer"
                        : "meiner, deiner, seiner, ihrer, seiner, unserer, eurer, ihrer, Ihrer"}
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

export default GermanPersonalPronounsWidget;
