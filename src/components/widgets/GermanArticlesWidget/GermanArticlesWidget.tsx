import React, { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanArticlesWidgetProps {
  language: Language;
}

interface ArticleData {
  nominativ: string;
  akkusativ: string;
  dativ: string;
  genitiv: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface ArticleExample {
  article: string;
  noun: string;
  meaning: string;
  case: string;
  sentence: string;
  english: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const GermanArticlesWidget: React.FC<GermanArticlesWidgetProps> = ({
  language,
}) => {
  const [activeTab, setActiveTab] = useState<
    "table" | "examples" | "practice" | "quiz"
  >("table");
  const [selectedGender, setSelectedGender] = useState<string>("masculine");
  const [quizQuestion, setQuizQuestion] = useState<QuizQuestion | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [askedQuestions, setAskedQuestions] = useState<Set<number>>(new Set());
  const articles: Record<string, ArticleData> = {
    masculine: {
      nominativ: "der",
      akkusativ: "den",
      dativ: "dem",
      genitiv: "des",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "die",
      akkusativ: "die",
      dativ: "der",
      genitiv: "der",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "das",
      akkusativ: "das",
      dativ: "dem",
      genitiv: "des",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "die",
      akkusativ: "die",
      dativ: "den",
      genitiv: "der",
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

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const startNewQuiz = () => {
    // Get available questions (not yet asked)
    const availableQuestions = quizQuestions.filter(
      (_, index) => !askedQuestions.has(index)
    );

    // If all questions have been asked, reset the asked questions
    if (availableQuestions.length === 0) {
      setAskedQuestions(new Set());
      const randomQuestion =
        quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
      setQuizQuestion(randomQuestion);
      setAskedQuestions(new Set([quizQuestions.indexOf(randomQuestion)]));
    } else {
      // Select a random question from available ones
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const selectedQuestion = availableQuestions[randomIndex];
      const originalIndex = quizQuestions.indexOf(selectedQuestion);

      setQuizQuestion(selectedQuestion);
      setAskedQuestions((prev) => new Set([...prev, originalIndex]));
    }

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

  const getSelectedGenderData = () => {
    return articles[selectedGender];
  };

  useEffect(() => {
    if (activeTab === "quiz" && !quizQuestion) {
      startNewQuiz();
    }
  }, [activeTab]);

  const genders = [
    { key: "masculine", label: "Maskulin", english: "Masculine" },
    { key: "feminine", label: "Feminin", english: "Feminine" },
    { key: "neuter", label: "Neutrum", english: "Neuter" },
    { key: "plural", label: "Plural", english: "Plural" },
  ];

  const comprehensiveExamples: ArticleExample[] = [
    {
      article: "der",
      noun: "Mann",
      meaning: "man",
      case: "nominativ",
      sentence: "Der Mann liest ein Buch.",
      english: "The man reads a book.",
    },
    {
      article: "den",
      noun: "Mann",
      meaning: "man",
      case: "akkusativ",
      sentence: "Ich sehe den Mann.",
      english: "I see the man.",
    },
    {
      article: "dem",
      noun: "Mann",
      meaning: "man",
      case: "dativ",
      sentence: "Ich gebe dem Mann ein Buch.",
      english: "I give the man a book.",
    },
    {
      article: "des",
      noun: "Mannes",
      meaning: "man's",
      case: "genitiv",
      sentence: "Das ist das Auto des Mannes.",
      english: "That is the man's car.",
    },
    {
      article: "die",
      noun: "Frau",
      meaning: "woman",
      case: "nominativ",
      sentence: "Die Frau kocht.",
      english: "The woman cooks.",
    },
    {
      article: "die",
      noun: "Frau",
      meaning: "woman",
      case: "akkusativ",
      sentence: "Ich kenne die Frau.",
      english: "I know the woman.",
    },
    {
      article: "der",
      noun: "Frau",
      meaning: "woman",
      case: "dativ",
      sentence: "Ich helfe der Frau.",
      english: "I help the woman.",
    },
    {
      article: "der",
      noun: "Frau",
      meaning: "woman's",
      case: "genitiv",
      sentence: "Das ist das Haus der Frau.",
      english: "That is the woman's house.",
    },
    {
      article: "das",
      noun: "Kind",
      meaning: "child",
      case: "nominativ",
      sentence: "Das Kind spielt.",
      english: "The child plays.",
    },
    {
      article: "das",
      noun: "Kind",
      meaning: "child",
      case: "akkusativ",
      sentence: "Ich liebe das Kind.",
      english: "I love the child.",
    },
    {
      article: "dem",
      noun: "Kind",
      meaning: "child",
      case: "dativ",
      sentence: "Ich gebe dem Kind ein Spielzeug.",
      english: "I give the child a toy.",
    },
    {
      article: "des",
      noun: "Kindes",
      meaning: "child's",
      case: "genitiv",
      sentence: "Das ist das Zimmer des Kindes.",
      english: "That is the child's room.",
    },
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "en"
          ? "What is the correct article for 'Mann' (man) in the accusative case?"
          : "Was ist der richtige Artikel für 'Mann' im Akkusativ?",
      options: ["der", "den", "dem", "des"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Mann' is masculine, so in accusative case it takes 'den'."
          : "'Mann' ist maskulin, daher nimmt er im Akkusativ 'den'.",
    },
    {
      question:
        language === "en"
          ? "What is the correct article for 'Frau' (woman) in the dative case?"
          : "Was ist der richtige Artikel für 'Frau' im Dativ?",
      options: ["die", "der", "dem", "den"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Frau' is feminine, so in dative case it takes 'der'."
          : "'Frau' ist feminin, daher nimmt sie im Dativ 'der'.",
    },
    {
      question:
        language === "en"
          ? "What is the correct article for 'Kind' (child) in the nominative case?"
          : "Was ist der richtige Artikel für 'Kind' im Nominativ?",
      options: ["der", "die", "das", "den"],
      correctAnswer: 2,
      explanation:
        language === "en"
          ? "'Kind' is neuter, so in nominative case it takes 'das'."
          : "'Kind' ist neutrum, daher nimmt es im Nominativ 'das'.",
    },
    {
      question:
        language === "en"
          ? "What is the correct article for masculine nouns in the genitive case?"
          : "Was ist der richtige Artikel für maskuline Nomen im Genitiv?",
      options: ["der", "den", "dem", "des"],
      correctAnswer: 3,
      explanation:
        language === "en"
          ? "Masculine and neuter nouns take 'des' in the genitive case."
          : "Maskuline und neutrale Nomen nehmen 'des' im Genitiv.",
    },
  ];

  return (
    <Widget titleKey="artikel" language={language}>
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
                  <div className="text-xs leading-tight">{caseItem.name}</div>
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
              const article = articles[gender.key];
              return (
                <div
                  key={gender.key}
                  className={`grid grid-cols-5 gap-1 p-2 rounded border ${article.borderColor} ${article.bgColor}`}
                >
                  <div className="flex flex-col justify-center">
                    <div
                      className={`font-semibold text-xs sm:text-sm ${article.color}`}
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
                      className={`text-sm sm:text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${article.borderColor}`}
                    >
                      {article.nominativ}
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-sm sm:text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${article.borderColor}`}
                    >
                      {article.akkusativ}
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-sm sm:text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${article.borderColor}`}
                    >
                      {article.dativ}
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-sm sm:text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-1 sm:px-2 border ${article.borderColor}`}
                    >
                      {article.genitiv}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Reference */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
              <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {language === "en" ? "Quick Reference:" : "Schnellübersicht:"}
              </h5>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5">
                <div>
                  • <strong>Nominativ:</strong>{" "}
                  {language === "en"
                    ? "Who/what is doing the action"
                    : "Wer/was macht die Aktion"}
                </div>
                <div>
                  • <strong>Akkusativ:</strong>{" "}
                  {language === "en"
                    ? "Who/what receives the action"
                    : "Wen/was betrifft die Aktion"}
                </div>
                <div>
                  • <strong>Dativ:</strong>{" "}
                  {language === "en"
                    ? "Who/what benefits from the action"
                    : "Wem/was nützt die Aktion"}
                </div>
                <div>
                  • <strong>Genitiv:</strong>{" "}
                  {language === "en"
                    ? "Shows possession or relationship"
                    : "Zeigt Besitz oder Beziehung"}
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
                {language === "en" ? "Article Examples" : "Artikel-Beispiele"}
              </h4>

              {/* Gender Selector */}
              <Dropdown
                value={selectedGender}
                onChange={setSelectedGender}
                options={genders.map((gender) => ({
                  value: gender.key,
                  label: `${gender.label} (${gender.english})`,
                }))}
                label={
                  language === "en" ? "Select Gender:" : "Geschlecht auswählen:"
                }
                className="mb-4"
              />

              {/* Full Article Table for Selected Gender */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {language === "en"
                      ? "Definite Articles"
                      : "Bestimmte Artikel"}
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
                      {language === "en" ? "Article" : "Artikel"}
                    </div>
                    {cases.map((caseItem) => {
                      const articleData = getSelectedGenderData();
                      const article =
                        caseItem.name === "Nominativ"
                          ? articleData.nominativ
                          : caseItem.name === "Akkusativ"
                          ? articleData.akkusativ
                          : caseItem.name === "Dativ"
                          ? articleData.dativ
                          : articleData.genitiv;

                      return (
                        <div
                          key={caseItem.name}
                          className="text-center p-1 bg-white/50 dark:bg-neutral-800/50 rounded border font-bold text-blue-600 dark:text-blue-400"
                        >
                          {article}
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
                      .filter((example) => {
                        const genderMap = {
                          masculine: ["Mann", "Mannes"],
                          feminine: ["Frau"],
                          neuter: ["Kind", "Kindes"],
                          plural: ["Männer", "Frauen", "Kinder"],
                        };
                        return genderMap[
                          selectedGender as keyof typeof genderMap
                        ]?.includes(example.noun);
                      })
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
                                  {example.article} {example.noun}
                                </span>{" "}
                                ({example.meaning}) - {example.case}
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
                {language === "en" ? "Practice Articles" : "Artikel üben"}
              </h4>

              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Memory Tips" : "Gedächtnishilfen"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                    <div>
                      • <strong>der → den:</strong>{" "}
                      {language === "en"
                        ? "Masculine changes in accusative"
                        : "Maskulin ändert sich im Akkusativ"}
                    </div>
                    <div>
                      • <strong>die → der:</strong>{" "}
                      {language === "en"
                        ? "Feminine changes in dative"
                        : "Feminin ändert sich im Dativ"}
                    </div>
                    <div>
                      • <strong>das → dem:</strong>{" "}
                      {language === "en"
                        ? "Neuter changes in dative"
                        : "Neutrum ändert sich im Dativ"}
                    </div>
                    <div>
                      • <strong>des:</strong>{" "}
                      {language === "en"
                        ? "Used for masculine/neuter genitive"
                        : "Wird für maskulin/neutral Genitiv verwendet"}
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
                        ? "der, die, das, die"
                        : "der, die, das, die"}
                    </div>
                    <div>
                      • <strong>Akkusativ:</strong>{" "}
                      {language === "en"
                        ? "den, die, das, die"
                        : "den, die, das, die"}
                    </div>
                    <div>
                      • <strong>Dativ:</strong>{" "}
                      {language === "en"
                        ? "dem, der, dem, den"
                        : "dem, der, dem, den"}
                    </div>
                    <div>
                      • <strong>Genitiv:</strong>{" "}
                      {language === "en"
                        ? "des, der, des, der"
                        : "des, der, des, der"}
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
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {language === "en"
                    ? `Questions left: ${
                        quizQuestions.length - askedQuestions.size
                      }`
                    : `Verbleibende Fragen: ${
                        quizQuestions.length - askedQuestions.size
                      }`}
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

export default GermanArticlesWidget;
