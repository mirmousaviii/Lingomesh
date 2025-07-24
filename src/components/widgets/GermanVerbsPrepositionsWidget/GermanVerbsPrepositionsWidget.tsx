import React, { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanVerbsPrepositionsWidgetProps {
  language: Language;
}

interface VerbData {
  verb: string;
  preposition: string;
  case: string;
  example: string;
  translation: string;
  pronunciation: string;
  color: string;
  bgColor: string;
  borderColor: string;
  category: string;
  englishCategory: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const GermanVerbsPrepositionsWidget: React.FC<
  GermanVerbsPrepositionsWidgetProps
> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<
    "table" | "examples" | "practice" | "quiz"
  >("table");
  const [selectedVerb, setSelectedVerb] = useState<string>("warten");
  const [selectedCategory, setSelectedCategory] = useState<string>("Gefühle");
  const [quizQuestion, setQuizQuestion] = useState<QuizQuestion | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const verbs: Record<string, VerbData> = {
    warten: {
      verb: "warten",
      preposition: "auf",
      case: "Akkusativ",
      example: "Ich warte auf den Bus.",
      translation: "I'm waiting for the bus.",
      pronunciation: "ikh var-te owf den boos",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      category: "Warten & Hoffen",
      englishCategory: "Waiting & Hoping",
    },
    denken: {
      verb: "denken",
      preposition: "an",
      case: "Akkusativ",
      example: "Ich denke an dich.",
      translation: "I'm thinking of you.",
      pronunciation: "ikh den-ke an dikh",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      category: "Denken & Erinnern",
      englishCategory: "Thinking & Remembering",
    },
    sprechen: {
      verb: "sprechen",
      preposition: "mit",
      case: "Dativ",
      example: "Ich spreche mit meiner Freundin.",
      translation: "I'm speaking with my friend.",
      pronunciation: "ikh shpre-khe mit mai-ner froy-nin",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      category: "Kommunikation",
      englishCategory: "Communication",
    },
    "sich freuen": {
      verb: "sich freuen",
      preposition: "über",
      case: "Akkusativ",
      example: "Ich freue mich über das Geschenk.",
      translation: "I'm happy about the gift.",
      pronunciation: "ikh froy-e mikh ue-ber das ge-shenk",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      category: "Gefühle",
      englishCategory: "Emotions",
    },
    "sich interessieren": {
      verb: "sich interessieren",
      preposition: "für",
      case: "Akkusativ",
      example: "Ich interessiere mich für Musik.",
      translation: "I'm interested in music.",
      pronunciation: "ikh in-te-re-see-re mikh fuer moo-zeek",
      color: "text-orange-700 dark:text-orange-300",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      category: "Interesse",
      englishCategory: "Interest",
    },
    "sich beschweren": {
      verb: "sich beschweren",
      preposition: "über",
      case: "Akkusativ",
      example: "Er beschwert sich über das Wetter.",
      translation: "He's complaining about the weather.",
      pronunciation: "er be-shvayrt zikh ue-ber das vet-ter",
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      category: "Beschwerden",
      englishCategory: "Complaints",
    },
    "sich kümmern": {
      verb: "sich kümmern",
      preposition: "um",
      case: "Akkusativ",
      example: "Sie kümmert sich um ihre Kinder.",
      translation: "She takes care of her children.",
      pronunciation: "zee kue-mer zikh oom ee-re kin-der",
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      category: "Sorge",
      englishCategory: "Care",
    },
    "sich erinnern": {
      verb: "sich erinnern",
      preposition: "an",
      case: "Akkusativ",
      example: "Ich erinnere mich an den Urlaub.",
      translation: "I remember the vacation.",
      pronunciation: "ikh er-in-ner mikh an den oor-loup",
      color: "text-teal-700 dark:text-teal-300",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      category: "Denken & Erinnern",
      englishCategory: "Thinking & Remembering",
    },
    "sich verlieben": {
      verb: "sich verlieben",
      preposition: "in",
      case: "Akkusativ",
      example: "Er verliebt sich in sie.",
      translation: "He falls in love with her.",
      pronunciation: "er fer-leept zikh in zee",
      color: "text-rose-700 dark:text-rose-300",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      borderColor: "border-rose-200 dark:border-rose-800",
      category: "Liebe",
      englishCategory: "Love",
    },
    "sich ärgern": {
      verb: "sich ärgern",
      preposition: "über",
      case: "Akkusativ",
      example: "Ich ärgere mich über den Lärm.",
      translation: "I'm annoyed about the noise.",
      pronunciation: "ikh er-ger mikh ue-ber den lerm",
      color: "text-amber-700 dark:text-amber-300",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      category: "Gefühle",
      englishCategory: "Emotions",
    },
    helfen: {
      verb: "helfen",
      preposition: "bei",
      case: "Dativ",
      example: "Ich helfe dir bei der Arbeit.",
      translation: "I'm helping you with the work.",
      pronunciation: "ikh hel-fe deer bai der ar-bait",
      color: "text-emerald-700 dark:text-emerald-300",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      category: "Hilfe",
      englishCategory: "Help",
    },
    danken: {
      verb: "danken",
      preposition: "für",
      case: "Dativ",
      example: "Ich danke dir für das Geschenk.",
      translation: "I thank you for the gift.",
      pronunciation: "ikh dan-ke deer fuer das ge-shenk",
      color: "text-cyan-700 dark:text-cyan-300",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      category: "Höflichkeit",
      englishCategory: "Politeness",
    },
    glauben: {
      verb: "glauben",
      preposition: "an",
      case: "Dativ",
      example: "Ich glaube an dich.",
      translation: "I believe in you.",
      pronunciation: "ikh glau-be an dikh",
      color: "text-violet-700 dark:text-violet-300",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      borderColor: "border-violet-200 dark:border-violet-800",
      category: "Glauben",
      englishCategory: "Belief",
    },
    antworten: {
      verb: "antworten",
      preposition: "auf",
      case: "Dativ",
      example: "Ich antworte auf deine Frage.",
      translation: "I'm answering your question.",
      pronunciation: "ikh ant-vor-te owf dai-ne fra-ge",
      color: "text-lime-700 dark:text-lime-300",
      bgColor: "bg-lime-50 dark:bg-lime-900/20",
      borderColor: "border-lime-200 dark:border-lime-800",
      category: "Kommunikation",
      englishCategory: "Communication",
    },
    gehören: {
      verb: "gehören",
      preposition: "zu",
      case: "Dativ",
      example: "Das gehört zu mir.",
      translation: "That belongs to me.",
      pronunciation: "das ge-hert tsoo meer",
      color: "text-sky-700 dark:text-sky-300",
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
      borderColor: "border-sky-200 dark:border-sky-800",
      category: "Besitz",
      englishCategory: "Possession",
    },
    träumen: {
      verb: "träumen",
      preposition: "von",
      case: "Dativ",
      example: "Ich träume von einer Reise.",
      translation: "I'm dreaming of a trip.",
      pronunciation: "ikh troy-me fon ai-ner rai-ze",
      color: "text-fuchsia-700 dark:text-fuchsia-300",
      bgColor: "bg-fuchsia-50 dark:bg-fuchsia-900/20",
      borderColor: "border-fuchsia-200 dark:border-fuchsia-800",
      category: "Wünsche",
      englishCategory: "Wishes",
    },
    "sich sorgen": {
      verb: "sich sorgen",
      preposition: "um",
      case: "Akkusativ",
      example: "Ich sorge mich um dich.",
      translation: "I'm worried about you.",
      pronunciation: "ikh zor-ge mikh oom dikh",
      color: "text-yellow-700 dark:text-yellow-300",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      category: "Sorge",
      englishCategory: "Care",
    },
    "sich entscheiden": {
      verb: "sich entscheiden",
      preposition: "für",
      case: "Akkusativ",
      example: "Ich entscheide mich für das rote Auto.",
      translation: "I'm deciding on the red car.",
      pronunciation: "ikh ent-shai-de mikh fuer das ro-te au-to",
      color: "text-stone-700 dark:text-stone-300",
      bgColor: "bg-stone-50 dark:bg-stone-900/20",
      borderColor: "border-stone-200 dark:border-stone-800",
      category: "Entscheidungen",
      englishCategory: "Decisions",
    },
  };

  const categories = [
    { key: "Gefühle", label: "Gefühle", english: "Emotions" },
    { key: "Kommunikation", label: "Kommunikation", english: "Communication" },
    {
      key: "Denken & Erinnern",
      label: "Denken & Erinnern",
      english: "Thinking & Remembering",
    },
    { key: "Hilfe", label: "Hilfe", english: "Help" },
    { key: "Sorge", label: "Sorge", english: "Care" },
    {
      key: "Warten & Hoffen",
      label: "Warten & Hoffen",
      english: "Waiting & Hoping",
    },
    { key: "Interesse", label: "Interesse", english: "Interest" },
    { key: "Beschwerden", label: "Beschwerden", english: "Complaints" },
    { key: "Liebe", label: "Liebe", english: "Love" },
    { key: "Höflichkeit", label: "Höflichkeit", english: "Politeness" },
    { key: "Glauben", label: "Glauben", english: "Belief" },
    { key: "Besitz", label: "Besitz", english: "Possession" },
    { key: "Wünsche", label: "Wünsche", english: "Wishes" },
    { key: "Entscheidungen", label: "Entscheidungen", english: "Decisions" },
  ];

  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "en"
          ? "Which preposition is used with 'warten'?"
          : "Welche Präposition wird mit 'warten' verwendet?",
      options: ["an", "auf", "mit", "für"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Warten' always takes 'auf' + Akkusativ."
          : "'Warten' nimmt immer 'auf' + Akkusativ.",
    },
    {
      question:
        language === "en"
          ? "Which case is used with 'sprechen mit'?"
          : "Welcher Fall wird mit 'sprechen mit' verwendet?",
      options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
      correctAnswer: 2,
      explanation:
        language === "en"
          ? "'Sprechen mit' takes Dativ case."
          : "'Sprechen mit' nimmt Dativ.",
    },
    {
      question:
        language === "en"
          ? "Which preposition is used with 'sich interessieren'?"
          : "Welche Präposition wird mit 'sich interessieren' verwendet?",
      options: ["an", "für", "über", "mit"],
      correctAnswer: 1,
      explanation:
        language === "en"
          ? "'Sich interessieren' takes 'für' + Akkusativ."
          : "'Sich interessieren' nimmt 'für' + Akkusativ.",
    },
    {
      question:
        language === "en"
          ? "Which case is used with 'helfen bei'?"
          : "Welcher Fall wird mit 'helfen bei' verwendet?",
      options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
      correctAnswer: 2,
      explanation:
        language === "en"
          ? "'Helfen bei' takes Dativ case."
          : "'Helfen bei' nimmt Dativ.",
    },
    {
      question:
        language === "en"
          ? "Which preposition is used with 'denken'?"
          : "Welche Präposition wird mit 'denken' verwendet?",
      options: ["an", "auf", "über", "für"],
      correctAnswer: 0,
      explanation:
        language === "en"
          ? "'Denken' takes 'an' + Akkusativ."
          : "'Denken' nimmt 'an' + Akkusativ.",
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

  const getFilteredVerbs = () => {
    return Object.values(verbs).filter(
      (verb) => verb.category === selectedCategory
    );
  };

  const caseColors = {
    Akkusativ: {
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    Dativ: {
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
  };

  useEffect(() => {
    if (activeTab === "quiz" && !quizQuestion) {
      startNewQuiz();
    }
  }, [activeTab]);

  return (
    <Widget titleKey="verbenPraepositionen" language={language}>
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
              options={Object.values(verbs).map((verb) => ({
                value:
                  Object.keys(verbs).find((key) => verbs[key] === verb) || "",
                label: `${verb.verb} + ${verb.preposition} (${verb.case})`,
              }))}
              label={language === "en" ? "Select Verb:" : "Verb auswählen:"}
              className="mb-4"
            />

            {/* Selected Verb Details */}
            <div
              className={`p-3 sm:p-4 rounded-md border ${
                getSelectedVerbData().borderColor
              } ${getSelectedVerbData().bgColor}`}
            >
              {/* Verb and Preposition Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`text-lg sm:text-xl font-bold ${
                      getSelectedVerbData().color
                    }`}
                  >
                    {getSelectedVerbData().verb}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
                    +
                  </span>
                  <span
                    className={`text-lg sm:text-xl font-bold ${
                      getSelectedVerbData().color
                    }`}
                  >
                    {getSelectedVerbData().preposition}
                  </span>
                </div>
                <div
                  className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium ${
                    caseColors[
                      getSelectedVerbData().case as keyof typeof caseColors
                    ].bgColor
                  } ${
                    caseColors[
                      getSelectedVerbData().case as keyof typeof caseColors
                    ].color
                  }`}
                >
                  {getSelectedVerbData().case}
                </div>
              </div>

              {/* Category */}
              <div className="mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  {language === "en" ? "Category:" : "Kategorie:"}{" "}
                  {language === "en"
                    ? getSelectedVerbData().englishCategory
                    : getSelectedVerbData().category}
                </span>
              </div>

              {/* Example Sentence with Speech */}
              <div className="flex items-start justify-between gap-2 sm:gap-3">
                <div className="flex-1 space-y-1 sm:space-y-2">
                  <div className="text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-200">
                    {getSelectedVerbData().example}
                  </div>
                  {language === "en" && (
                    <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 italic">
                      {getSelectedVerbData().translation}
                    </div>
                  )}
                  <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 italic">
                    [{getSelectedVerbData().pronunciation}]
                  </div>
                </div>
                <AudioButton
                  onClick={() => speakText(getSelectedVerbData().example)}
                  title={language === "en" ? "Listen" : "Hören"}
                  size="sm"
                />
              </div>
            </div>

            {/* Quick Reference */}
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
              <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                {language === "en" ? "Quick Reference:" : "Schnellübersicht:"}
              </h5>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                <div>
                  <strong>Akkusativ:</strong>{" "}
                  {language === "en"
                    ? "auf, an, über, für, um, in"
                    : "auf, an, über, für, um, in"}
                </div>
                <div>
                  <strong>Dativ:</strong>{" "}
                  {language === "en"
                    ? "mit, bei, zu, von, nach"
                    : "mit, bei, zu, von, nach"}
                </div>
                <div>
                  <strong>Reflexive:</strong>{" "}
                  {language === "en"
                    ? "sich freuen, sich interessieren, sich ärgern"
                    : "sich freuen, sich interessieren, sich ärgern"}
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

              {/* Category Selector */}
              <Dropdown
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categories.map((category) => ({
                  value: category.key,
                  label: language === "en" ? category.english : category.label,
                }))}
                label={
                  language === "en"
                    ? "Select Category:"
                    : "Kategorie auswählen:"
                }
                className="mb-4"
              />

              {/* Examples by Category */}
              <div className="space-y-3">
                {getFilteredVerbs().map((verb, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-2 sm:p-3 border border-white/30 dark:border-neutral-600/30"
                  >
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="flex-1 space-y-1 sm:space-y-2">
                        <div className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                          <span className={`font-semibold ${verb.color}`}>
                            {verb.verb} + {verb.preposition}
                          </span>{" "}
                          ({verb.case}) -{" "}
                          {language === "en"
                            ? verb.englishCategory
                            : verb.category}
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-tight">
                          {verb.example}
                        </div>
                        {language === "en" && (
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 italic leading-tight">
                            {verb.translation}
                          </div>
                        )}
                      </div>
                      <AudioButton
                        onClick={() => speakText(verb.example)}
                        title={language === "en" ? "Listen" : "Hören"}
                        size="sm"
                      />
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
                  ? "Practice Verb-Preposition Combinations"
                  : "Verb-Präpositions-Kombinationen üben"}
              </h4>

              <div className="space-y-4">
                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Memory Tips" : "Gedächtnishilfen"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                    <div>
                      • <strong>auf + Akkusativ:</strong>{" "}
                      {language === "en"
                        ? "Waiting for something (warten auf)"
                        : "Auf etwas warten (warten auf)"}
                    </div>
                    <div>
                      • <strong>an + Akkusativ:</strong>{" "}
                      {language === "en"
                        ? "Thinking about something (denken an)"
                        : "An etwas denken (denken an)"}
                    </div>
                    <div>
                      • <strong>mit + Dativ:</strong>{" "}
                      {language === "en"
                        ? "Doing something with someone (sprechen mit)"
                        : "Etwas mit jemandem machen (sprechen mit)"}
                    </div>
                    <div>
                      • <strong>für + Akkusativ/Dativ:</strong>{" "}
                      {language === "en"
                        ? "For something/someone (sich interessieren für, danken für)"
                        : "Für etwas/jemanden (sich interessieren für, danken für)"}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en" ? "Common Patterns" : "Häufige Muster"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                    <div>
                      • <strong>Emotions:</strong>{" "}
                      {language === "en"
                        ? "sich freuen über, sich ärgern über"
                        : "sich freuen über, sich ärgern über"}
                    </div>
                    <div>
                      • <strong>Communication:</strong>{" "}
                      {language === "en"
                        ? "sprechen mit, antworten auf"
                        : "sprechen mit, antworten auf"}
                    </div>
                    <div>
                      • <strong>Help:</strong>{" "}
                      {language === "en"
                        ? "helfen bei, danken für"
                        : "helfen bei, danken für"}
                    </div>
                    <div>
                      • <strong>Interest:</strong>{" "}
                      {language === "en"
                        ? "sich interessieren für, glauben an"
                        : "sich interessieren für, glauben an"}
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 dark:bg-neutral-800/50 rounded p-3 border">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {language === "en"
                      ? "Important Notes"
                      : "Wichtige Hinweise"}
                  </h5>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                    <div>
                      •{" "}
                      {language === "en"
                        ? "These combinations must be memorized - they don't follow strict rules"
                        : "Diese Kombinationen müssen auswendig gelernt werden - sie folgen keinen strengen Regeln"}
                    </div>
                    <div>
                      •{" "}
                      {language === "en"
                        ? "The case (Akkusativ/Dativ) is determined by the preposition"
                        : "Der Fall (Akkusativ/Dativ) wird durch die Präposition bestimmt"}
                    </div>
                    <div>
                      •{" "}
                      {language === "en"
                        ? "Some prepositions can take both cases with different meanings"
                        : "Einige Präpositionen können beide Fälle mit unterschiedlichen Bedeutungen nehmen"}
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

export default GermanVerbsPrepositionsWidget;
