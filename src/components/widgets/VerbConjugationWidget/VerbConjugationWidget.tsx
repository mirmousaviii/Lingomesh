import React, { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface VerbConjugationWidgetProps {
  language: Language;
}

interface VerbData {
  infinitive: string;
  english: string;
  conjugations: {
    pronoun: string;
    verb: string;
    ending: string;
    translation: string;
  }[];
  perfekt: {
    auxiliary: string;
    participle: string;
    example: string;
    english: string;
  };
  präteritum: {
    form: string;
    example: string;
    english: string;
  };
}

interface TenseData {
  name: string;
  englishName: string;
  formula: string;
  englishFormula: string;
  description: string;
  englishDescription: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const VerbConjugationWidget: React.FC<VerbConjugationWidgetProps> = ({
  language,
}) => {
  const [activeTab, setActiveTab] = useState<
    "table" | "examples" | "practice" | "quiz"
  >("table");
  const [selectedVerb, setSelectedVerb] = useState<string>("haben");
  const [activeTense, setActiveTense] = useState<
    "präsens" | "perfekt" | "präteritum"
  >("präsens");
  const [quizQuestion, setQuizQuestion] = useState<QuizQuestion | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const verbs: Record<string, VerbData> = {
    haben: {
      infinitive: "haben",
      english: "to have",
      conjugations: [
        { pronoun: "ich", verb: "habe", ending: "e", translation: "I have" },
        {
          pronoun: "du",
          verb: "hast",
          ending: "st",
          translation: "you have (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "hat",
          ending: "t",
          translation: "he/she/it has",
        },
        { pronoun: "wir", verb: "haben", ending: "en", translation: "we have" },
        {
          pronoun: "ihr",
          verb: "habt",
          ending: "t",
          translation: "you have (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "haben",
          ending: "en",
          translation: "they/you have (formal)",
        },
      ],
      perfekt: {
        auxiliary: "habe",
        participle: "gehabt",
        example: "Ich habe ein Auto gehabt.",
        english: "I have had a car.",
      },
      präteritum: {
        form: "hatte",
        example: "Ich hatte ein Auto.",
        english: "I had a car.",
      },
    },
    sein: {
      infinitive: "sein",
      english: "to be",
      conjugations: [
        { pronoun: "ich", verb: "bin", ending: "bin", translation: "I am" },
        {
          pronoun: "du",
          verb: "bist",
          ending: "st",
          translation: "you are (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "ist",
          ending: "t",
          translation: "he/she/it is",
        },
        { pronoun: "wir", verb: "sind", ending: "sind", translation: "we are" },
        {
          pronoun: "ihr",
          verb: "seid",
          ending: "seid",
          translation: "you are (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "sind",
          ending: "sind",
          translation: "they/you are (formal)",
        },
      ],
      perfekt: {
        auxiliary: "bin",
        participle: "gewesen",
        example: "Ich bin in Berlin gewesen.",
        english: "I have been in Berlin.",
      },
      präteritum: {
        form: "war",
        example: "Ich war in Berlin.",
        english: "I was in Berlin.",
      },
    },
    werden: {
      infinitive: "werden",
      english: "to become",
      conjugations: [
        { pronoun: "ich", verb: "werde", ending: "e", translation: "I become" },
        {
          pronoun: "du",
          verb: "wirst",
          ending: "st",
          translation: "you become (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "wird",
          ending: "t",
          translation: "he/she/it becomes",
        },
        {
          pronoun: "wir",
          verb: "werden",
          ending: "en",
          translation: "we become",
        },
        {
          pronoun: "ihr",
          verb: "werdet",
          ending: "t",
          translation: "you become (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "werden",
          ending: "en",
          translation: "they/you become (formal)",
        },
      ],
      perfekt: {
        auxiliary: "bin",
        participle: "geworden",
        example: "Ich bin Lehrer geworden.",
        english: "I have become a teacher.",
      },
      präteritum: {
        form: "wurde",
        example: "Ich wurde Lehrer.",
        english: "I became a teacher.",
      },
    },
    machen: {
      infinitive: "machen",
      english: "to make/do",
      conjugations: [
        { pronoun: "ich", verb: "mache", ending: "e", translation: "I make" },
        {
          pronoun: "du",
          verb: "machst",
          ending: "st",
          translation: "you make (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "macht",
          ending: "t",
          translation: "he/she/it makes",
        },
        {
          pronoun: "wir",
          verb: "machen",
          ending: "en",
          translation: "we make",
        },
        {
          pronoun: "ihr",
          verb: "macht",
          ending: "t",
          translation: "you make (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "machen",
          ending: "en",
          translation: "they/you make (formal)",
        },
      ],
      perfekt: {
        auxiliary: "habe",
        participle: "gemacht",
        example: "Ich habe Hausaufgaben gemacht.",
        english: "I have done homework.",
      },
      präteritum: {
        form: "machte",
        example: "Ich machte Hausaufgaben.",
        english: "I did homework.",
      },
    },
    gehen: {
      infinitive: "gehen",
      english: "to go",
      conjugations: [
        { pronoun: "ich", verb: "gehe", ending: "e", translation: "I go" },
        {
          pronoun: "du",
          verb: "gehst",
          ending: "st",
          translation: "you go (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "geht",
          ending: "t",
          translation: "he/she/it goes",
        },
        { pronoun: "wir", verb: "gehen", ending: "en", translation: "we go" },
        {
          pronoun: "ihr",
          verb: "geht",
          ending: "t",
          translation: "you go (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "gehen",
          ending: "en",
          translation: "they/you go (formal)",
        },
      ],
      perfekt: {
        auxiliary: "bin",
        participle: "gegangen",
        example: "Ich bin zur Schule gegangen.",
        english: "I have gone to school.",
      },
      präteritum: {
        form: "ging",
        example: "Ich ging zur Schule.",
        english: "I went to school.",
      },
    },
    kommen: {
      infinitive: "kommen",
      english: "to come",
      conjugations: [
        { pronoun: "ich", verb: "komme", ending: "e", translation: "I come" },
        {
          pronoun: "du",
          verb: "kommst",
          ending: "st",
          translation: "you come (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "kommt",
          ending: "t",
          translation: "he/she/it comes",
        },
        {
          pronoun: "wir",
          verb: "kommen",
          ending: "en",
          translation: "we come",
        },
        {
          pronoun: "ihr",
          verb: "kommt",
          ending: "t",
          translation: "you come (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "kommen",
          ending: "en",
          translation: "they/you come (formal)",
        },
      ],
      perfekt: {
        auxiliary: "bin",
        participle: "gekommen",
        example: "Ich bin nach Hause gekommen.",
        english: "I have come home.",
      },
      präteritum: {
        form: "kam",
        example: "Ich kam nach Hause.",
        english: "I came home.",
      },
    },
    lernen: {
      infinitive: "lernen",
      english: "to learn",
      conjugations: [
        { pronoun: "ich", verb: "lerne", ending: "e", translation: "I learn" },
        {
          pronoun: "du",
          verb: "lernst",
          ending: "st",
          translation: "you learn (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "lernt",
          ending: "t",
          translation: "he/she/it learns",
        },
        {
          pronoun: "wir",
          verb: "lernen",
          ending: "en",
          translation: "we learn",
        },
        {
          pronoun: "ihr",
          verb: "lernt",
          ending: "t",
          translation: "you learn (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "lernen",
          ending: "en",
          translation: "they/you learn (formal)",
        },
      ],
      perfekt: {
        auxiliary: "habe",
        participle: "gelernt",
        example: "Ich habe Deutsch gelernt.",
        english: "I have learned German.",
      },
      präteritum: {
        form: "lernte",
        example: "Ich lernte Deutsch.",
        english: "I learned German.",
      },
    },
  };

  const tenses: Record<string, TenseData> = {
    präsens: {
      name: "Präsens",
      englishName: "Present Tense",
      formula: "Subjekt + Verb (konjugiert)",
      englishFormula: "Subject + Verb (conjugated)",
      description: "Gegenwart, Gewohnheiten, allgemeine Wahrheiten",
      englishDescription: "Present, habits, general truths",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    perfekt: {
      name: "Perfekt",
      englishName: "Present Perfect",
      formula: "Subjekt + haben/sein + Partizip II",
      englishFormula: "Subject + have/be + Past Participle",
      description: "Vergangene Handlungen mit Gegenwartsbezug",
      englishDescription: "Past actions with present relevance",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    präteritum: {
      name: "Präteritum",
      englishName: "Simple Past",
      formula: "Subjekt + Verb (Präteritum)",
      englishFormula: "Subject + Verb (Simple Past)",
      description: "Vergangene Handlungen, Erzählungen",
      englishDescription: "Past actions, narratives",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "en"
          ? "What is the correct conjugation of 'haben' for 'du'?"
          : "Was ist die richtige Konjugation von 'haben' für 'du'?",
      options: ["habe", "hast", "hat", "haben"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Du' always takes the -st ending: ich habe → du hast"
          : "'Du' nimmt immer die -st Endung: ich habe → du hast",
    },
    {
      question:
        language === "en"
          ? "What auxiliary verb is used with 'gehen' in Perfekt?"
          : "Welches Hilfsverb wird mit 'gehen' im Perfekt verwendet?",
      options: ["haben", "sein", "werden", "können"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Gehen' is a movement verb, so it uses 'sein' in Perfekt."
          : "'Gehen' ist ein Bewegungsverb, daher verwendet es 'sein' im Perfekt.",
    },
    {
      question:
        language === "en"
          ? "What is the Perfekt form of 'lernen'?"
          : "Was ist die Perfektform von 'lernen'?",
      options: ["lernte", "gelernt", "lerne", "lernst"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Lernen' becomes 'gelernt' in Perfekt (ge- + lernen + -t)."
          : "'Lernen' wird zu 'gelernt' im Perfekt (ge- + lernen + -t).",
    },
    {
      question:
        language === "en"
          ? "What is the Präteritum form of 'sein'?"
          : "Was ist die Präteritumform von 'sein'?",
      options: ["bin", "war", "gewesen", "ist"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Sein' becomes 'war' in Präteritum (irregular verb)."
          : "'Sein' wird zu 'war' im Präteritum (unregelmäßiges Verb).",
    },
    {
      question:
        language === "en"
          ? "Which ending is used for 'er/sie/es' in Präsens?"
          : "Welche Endung wird für 'er/sie/es' im Präsens verwendet?",
      options: ["-e", "-st", "-t", "-en"],
      correctAnswer: 2,
      explanation:
        language === "en"
          ? "'Er/sie/es' always takes the -t ending in Präsens."
          : "'Er/sie/es' nimmt immer die -t Endung im Präsens.",
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

  const getSelectedVerbData = () => {
    return verbs[selectedVerb];
  };

  const highlightEnding = (verb: string, ending: string) => {
    if (ending === verb) {
      return (
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          {verb}
        </span>
      );
    }
    const base = verb.slice(0, -ending.length);
    return (
      <>
        <span>{base}</span>
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          {ending}
        </span>
      </>
    );
  };

  useEffect(() => {
    if (activeTab === "quiz" && !quizQuestion) {
      startNewQuiz();
    }
  }, [activeTab]);

  return (
    <Widget titleKey="verbzeiten" language={language}>
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
            {/* Verb Selector */}
            <Dropdown
              value={selectedVerb}
              onChange={setSelectedVerb}
              options={Object.entries(verbs).map(([key, verb]) => ({
                value: key,
                label: `${verb.infinitive} (${verb.english})`,
              }))}
              label={language === "en" ? "Select Verb:" : "Verb auswählen:"}
              className="mb-4"
            />

            {/* Tense Selector Tabs */}
            <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
              {Object.entries(tenses).map(([key, tense]) => (
                <button
                  key={key}
                  onClick={() =>
                    setActiveTense(key as "präsens" | "perfekt" | "präteritum")
                  }
                  className={`flex-1 px-2 sm:px-4 py-2.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 touch-manipulation ${
                    activeTense === key
                      ? `${tense.bgColor} ${tense.color} shadow-sm`
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-600/30"
                  }`}
                >
                  {tense.name}
                </button>
              ))}
            </div>

            {/* Active Tense Content */}
            {Object.entries(tenses).map(([key, tense]) => (
              <div
                key={key}
                className={`${
                  activeTense === key ? "block" : "hidden"
                } space-y-3 sm:space-y-4`}
              >
                <div
                  className={`p-3 sm:p-4 rounded-md border ${tense.borderColor} ${tense.bgColor}`}
                >
                  <div className="mb-2 sm:mb-3">
                    <h4
                      className={`text-base sm:text-lg font-bold ${tense.color}`}
                    >
                      {language === "en" ? tense.englishName : tense.name}
                    </h4>
                    <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                      {language === "en"
                        ? tense.englishDescription
                        : tense.description}
                    </div>
                  </div>

                  {/* Formula */}
                  <div className="mb-3 sm:mb-4 bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border">
                    <h5 className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-1 sm:mb-2">
                      {language === "en" ? "Formula:" : "Formel:"}
                    </h5>
                    <div className="text-sm sm:text-base font-mono text-neutral-800 dark:text-neutral-200">
                      {tense.formula}
                    </div>
                    {language === "en" && (
                      <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {tense.englishFormula}
                      </div>
                    )}
                  </div>

                  {/* Conjugation Table */}
                  {key === "präsens" && (
                    <div className="space-y-2 sm:space-y-3">
                      <h5 className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {language === "en" ? "Conjugations:" : "Konjugationen:"}
                      </h5>
                      {getSelectedVerbData().conjugations.map(
                        (conjugation, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 sm:p-3 bg-white/50 dark:bg-neutral-800/50 rounded-md border border-white/30 dark:border-neutral-600/30"
                          >
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 min-w-[60px]">
                                {conjugation.pronoun}
                              </span>
                              <span className="text-sm sm:text-lg font-medium">
                                {highlightEnding(
                                  conjugation.verb,
                                  conjugation.ending
                                )}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              {language === "en" && (
                                <span className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                                  {conjugation.translation}
                                </span>
                              )}
                              <AudioButton
                                onClick={() => speakText(conjugation.verb)}
                                title={language === "en" ? "Listen" : "Hören"}
                                size="sm"
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Perfekt Examples */}
                  {key === "perfekt" && (
                    <div className="space-y-2 sm:space-y-3">
                      <h5 className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {language === "en" ? "Examples:" : "Beispiele:"}
                      </h5>
                      <div className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border">
                        <div className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                          <span className="font-semibold text-purple-600 dark:text-purple-400">
                            {getSelectedVerbData().perfekt.auxiliary}
                          </span>{" "}
                          <span className="font-semibold text-orange-600 dark:text-orange-400">
                            {getSelectedVerbData().perfekt.participle}
                          </span>
                        </div>
                        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-1">
                          {getSelectedVerbData().perfekt.example}
                        </div>
                        {language === "en" && (
                          <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 italic mt-1">
                            {getSelectedVerbData().perfekt.english}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Präteritum Examples */}
                  {key === "präteritum" && (
                    <div className="space-y-2 sm:space-y-3">
                      <h5 className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {language === "en" ? "Examples:" : "Beispiele:"}
                      </h5>
                      <div className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border">
                        <div className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {getSelectedVerbData().präteritum.form}
                          </span>
                        </div>
                        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-1">
                          {getSelectedVerbData().präteritum.example}
                        </div>
                        {language === "en" && (
                          <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 italic mt-1">
                            {getSelectedVerbData().präteritum.english}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Reference */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
              <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {language === "en" ? "Quick Reference:" : "Schnellübersicht:"}
              </h5>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                <div>
                  <strong>Präsens:</strong>{" "}
                  {language === "en"
                    ? "ich (-e), du (-st), er/sie/es (-t), wir/ihr/sie/Sie (-en/-t/-en)"
                    : "ich (-e), du (-st), er/sie/es (-t), wir/ihr/sie/Sie (-en/-t/-en)"}
                </div>
                <div>
                  <strong>Perfekt:</strong>{" "}
                  {language === "en"
                    ? "haben/sein + Partizip II (ge- + verb + -t/-en)"
                    : "haben/sein + Partizip II (ge- + verb + -t/-en)"}
                </div>
                <div>
                  <strong>Präteritum:</strong>{" "}
                  {language === "en"
                    ? "Regular: -te, Irregular: special forms"
                    : "Regelmäßig: -te, Unregelmäßig: Sonderformen"}
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

              {/* Verb Selector */}
              <Dropdown
                value={selectedVerb}
                onChange={setSelectedVerb}
                options={Object.entries(verbs).map(([key, verb]) => ({
                  value: key,
                  label: `${verb.infinitive} (${verb.english})`,
                }))}
                label={language === "en" ? "Select Verb:" : "Verb auswählen:"}
                className="mb-4"
              />

              {/* All Tenses for Selected Verb */}
              <div className="space-y-3">
                {Object.entries(tenses).map(([key, tense]) => (
                  <div key={key} className="space-y-2">
                    <h5 className={`text-sm font-semibold ${tense.color}`}>
                      {language === "en" ? tense.englishName : tense.name}
                    </h5>
                    <div className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border">
                      {key === "präsens" && (
                        <div className="space-y-2">
                          {getSelectedVerbData().conjugations.map(
                            (conjugation, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between"
                              >
                                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                  {conjugation.pronoun}
                                </span>
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                  {conjugation.verb}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      )}
                      {key === "perfekt" && (
                        <div className="space-y-2">
                          <div className="text-sm text-neutral-700 dark:text-neutral-300">
                            <span className="font-semibold text-purple-600 dark:text-purple-400">
                              {getSelectedVerbData().perfekt.auxiliary}
                            </span>{" "}
                            <span className="font-semibold text-orange-600 dark:text-orange-400">
                              {getSelectedVerbData().perfekt.participle}
                            </span>
                          </div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            {getSelectedVerbData().perfekt.example}
                          </div>
                          {language === "en" && (
                            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                              {getSelectedVerbData().perfekt.english}
                            </div>
                          )}
                        </div>
                      )}
                      {key === "präteritum" && (
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            {getSelectedVerbData().präteritum.form}
                          </div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">
                            {getSelectedVerbData().präteritum.example}
                          </div>
                          {language === "en" && (
                            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                              {getSelectedVerbData().präteritum.english}
                            </div>
                          )}
                        </div>
                      )}
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
                  ? "Practice Verb Conjugations"
                  : "Verbkonjugationen üben"}
              </h4>

              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Memory Tips" : "Gedächtnishilfen"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                    <div>
                      • <strong>ich:</strong>{" "}
                      {language === "en"
                        ? "Always ends with -e"
                        : "Endet immer mit -e"}
                    </div>
                    <div>
                      • <strong>du:</strong>{" "}
                      {language === "en"
                        ? "Always ends with -st"
                        : "Endet immer mit -st"}
                    </div>
                    <div>
                      • <strong>er/sie/es:</strong>{" "}
                      {language === "en"
                        ? "Always ends with -t"
                        : "Endet immer mit -t"}
                    </div>
                    <div>
                      • <strong>wir/ihr/sie/Sie:</strong>{" "}
                      {language === "en"
                        ? "Use infinitive form or -t/-en"
                        : "Verwende Infinitivform oder -t/-en"}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Perfekt Rules" : "Perfekt Regeln"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                    <div>
                      • <strong>haben:</strong>{" "}
                      {language === "en"
                        ? "Most verbs (learn, read, sleep)"
                        : "Die meisten Verben (lernen, lesen, schlafen)"}
                    </div>
                    <div>
                      • <strong>sein:</strong>{" "}
                      {language === "en"
                        ? "Movement verbs (go, drive, fly) and state changes"
                        : "Bewegungsverben (gehen, fahren, fliegen) und Zustandsänderungen"}
                    </div>
                    <div>
                      • <strong>Partizip II:</strong>{" "}
                      {language === "en"
                        ? "ge- + verb stem + -t/-en"
                        : "ge- + Verbstamm + -t/-en"}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Common Patterns" : "Häufige Muster"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                    <div>
                      • <strong>Regular verbs:</strong>{" "}
                      {language === "en"
                        ? "machen → machte → gemacht"
                        : "machen → machte → gemacht"}
                    </div>
                    <div>
                      • <strong>Irregular verbs:</strong>{" "}
                      {language === "en"
                        ? "sein → war → gewesen"
                        : "sein → war → gewesen"}
                    </div>
                    <div>
                      • <strong>Mixed verbs:</strong>{" "}
                      {language === "en"
                        ? "bringen → brachte → gebracht"
                        : "bringen → brachte → gebracht"}
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

export default VerbConjugationWidget;
