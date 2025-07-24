import React from "react";
import Widget from "../../ui/Widget/Widget";

interface GermanPersonalPronounsWidgetProps {
  showTranslations: boolean;
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

const GermanPersonalPronounsWidget: React.FC<
  GermanPersonalPronounsWidgetProps
> = ({ showTranslations }) => {
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

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Widget
      title="Personalpronomen"
      englishTitle={showTranslations ? "Personal Pronouns" : undefined}
    >
      <div className="space-y-3">
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
                {showTranslations && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {pronoun.english}
                  </div>
                )}
              </div>

              {/* Pronouns and Possessives Row */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="text-center">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                    {showTranslations ? "Pronoun" : "Pronomen"}
                  </div>
                  <div
                    className={`text-lg font-bold ${pronoun.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-2 border ${pronoun.borderColor}`}
                  >
                    {pronoun.german}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                    {showTranslations ? "Possessive" : "Possessiv"}
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
                    {showTranslations ? "Example" : "Beispiel"}
                  </div>
                  <div className={`text-sm font-medium ${pronoun.color}`}>
                    {pronoun.example}
                  </div>
                  {showTranslations && (
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {pronoun.exampleEnglish}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => speakText(pronoun.example)}
                  className="flex-shrink-0 p-2 rounded bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
                  title={showTranslations ? "Listen" : "Hören"}
                >
                  <svg
                    className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
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

        {/* Desktop layout */}
        <div className="hidden md:block">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
              {showTranslations ? "Person" : "Person"}
            </div>
            <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
              {showTranslations ? "Pronoun" : "Pronomen"}
            </div>
            <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
              {showTranslations ? "Possessive" : "Possessiv"}
            </div>
            <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-sm">
              {showTranslations ? "Example" : "Beispiel"}
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
                {showTranslations && (
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
                  {showTranslations && (
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight mt-1">
                      {pronoun.exampleEnglish}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => speakText(pronoun.example)}
                  className="flex-shrink-0 p-2 rounded bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
                  title={showTranslations ? "Listen" : "Hören"}
                >
                  <svg
                    className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
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

        {/* Quick Reference */}
        <div className="mt-3 p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            {showTranslations ? "Quick Reference:" : "Schnellübersicht:"}
          </h5>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
            <div>
              <strong>Singular:</strong> ich → mein, du → dein, er → sein, sie →
              ihr, es → sein
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
    </Widget>
  );
};

export default GermanPersonalPronounsWidget;
