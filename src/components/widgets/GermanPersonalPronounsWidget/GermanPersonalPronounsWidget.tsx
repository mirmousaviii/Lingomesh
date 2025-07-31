import React from "react";
import { Language } from "../../../hooks/useTranslations";
import Box from "../../ui/Box/Box";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanPersonalPronounsWidgetProps {
  language: Language;
}

interface PronounCase {
  nominativ: string;
  akkusativ: string;
  dativ: string;
  genitiv: string;
}

export const pronounQuizQuestions = [
  {
    question: "Was ist das richtige Personalpronomen für 'uns' im Akkusativ?",
    questionEn: "What is the correct personal pronoun for 'us' in accusative?",
    options: ["wir", "uns", "unser", "mir"],
    correctAnswer: 1,
    explanation:
      "'Uns' ist bereits das Personalpronomen für 'wir' im Akkusativ.",
    explanationEn:
      "'Uns' is already the personal pronoun for 'we' in accusative.",
  },
  {
    question: "Welche Form hat 'ich' im Dativ?",
    questionEn: "What form does 'ich' have in dative?",
    options: ["ich", "mich", "mir", "mein"],
    correctAnswer: 2,
    explanation: "'Ich' wird zu 'mir' im Dativ.",
    explanationEn: "'Ich' becomes 'mir' in dative.",
  },
  {
    question: "Was ist das Possessivpronomen für 'du'?",
    questionEn: "What is the possessive pronoun for 'du'?",
    options: ["dein", "dich", "dir", "du"],
    correctAnswer: 0,
    explanation: "Das Possessivpronomen für 'du' ist 'dein'.",
    explanationEn: "The possessive pronoun for 'du' is 'dein'.",
  },
  {
    question: "Welches Pronomen ist richtig: 'Ich gebe ___ das Buch' (to him)?",
    questionEn: "Which pronoun is correct: 'Ich gebe ___ das Buch' (to him)?",
    options: ["er", "ihn", "ihm", "sein"],
    correctAnswer: 2,
    explanation: "Nach 'geben' steht das indirekte Objekt im Dativ: 'ihm'.",
    explanationEn: "After 'geben' the indirect object is in dative: 'ihm'.",
  },
];

const GermanPersonalPronounsWidget: React.FC<
  GermanPersonalPronounsWidgetProps
> = ({ language }) => {
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

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
    "er/es": {
      nominativ: "er/es",
      akkusativ: "ihn/es",
      dativ: "ihm",
      genitiv: "seiner",
    },
    sie: {
      nominativ: "sie",
      akkusativ: "sie",
      dativ: "ihr",
      genitiv: "ihrer",
    },
    wir: {
      nominativ: "wir",
      akkusativ: "uns",
      dativ: "uns",
      genitiv: "unser",
    },
    ihr: {
      nominativ: "ihr",
      akkusativ: "euch",
      dativ: "euch",
      genitiv: "euer",
    },
    "sie/Sie": {
      nominativ: "sie/Sie",
      akkusativ: "sie/Sie",
      dativ: "ihnen/Ihnen",
      genitiv: "ihrer/Ihrer",
    },
  };

  const cases = [
    {
      name: "Nominativ",
      english: "Nominative",
      description: "Subject",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
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
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      name: "Genitiv",
      english: "Genitive",
      description: "Possession",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ];

  const pronouns = [
    {
      key: "ich",
      label: "ich",
      english: "I",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      key: "du",
      label: "du",
      english: "you",
      color: "text-green-600 dark:text-green-400",
    },
    {
      key: "er/es",
      label: "er/es",
      english: "he/it",
      color: "text-orange-600 dark:text-orange-400",
    },
    {
      key: "sie",
      label: "sie",
      english: "she",
      color: "text-pink-600 dark:text-pink-400",
    },
    {
      key: "wir",
      label: "wir",
      english: "we",
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      key: "ihr",
      label: "ihr",
      english: "you (plural)",
      color: "text-indigo-600 dark:text-indigo-400",
    },
    {
      key: "sie/Sie",
      label: "sie/Sie",
      english: "they/you (formal)",
      color: "text-teal-600 dark:text-teal-400",
    },
  ];

  return (
    <Box titleKey="personalpronomen"
      language={language}
      headerColor="pink"
      description={
        language === "de"
          ? "Personalpronomen und ihre Deklination"
          : "Personal pronouns and their declension"
      }
    >
      <div className="space-y-4">
        {/* Pronoun Cases Table */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {language === "en" ? "Pronoun Cases" : "Pronomen-Fälle"}
          </h3>

          {/* Header Row */}
          <div className="grid grid-cols-5 gap-1">
            <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-xs">
              {language === "en" ? "Pronoun" : "Pronomen"}
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
        </div>

        {/* All Pronouns Overview */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {language === "en" ? "Complete Overview" : "Vollständige Übersicht"}
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-200 dark:border-neutral-700">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-800">
                  <th className="border border-neutral-200 dark:border-neutral-700 p-2 text-left">
                    {language === "en" ? "Person" : "Person"}
                  </th>
                  {cases.map((caseItem) => (
                    <th
                      key={caseItem.name}
                      className={`border border-neutral-200 dark:border-neutral-700 p-2 text-center ${caseItem.color}`}
                    >
                      {caseItem.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pronouns.map((pronoun) => {
                  const cases = pronounCases[pronoun.key];
                  return (
                    <tr
                      key={pronoun.key}
                      className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                    >
                      <td className="border border-neutral-200 dark:border-neutral-700 p-2 font-medium">
                        <div className="flex items-center space-x-2">
                          <span className={pronoun.color}>{pronoun.label}</span>
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">
                            ({pronoun.english})
                          </span>
                        </div>
                      </td>
                      {Object.entries(cases).map(([caseName, caseValue]) => (
                        <td
                          key={caseName}
                          className="border border-neutral-200 dark:border-neutral-700 p-2 text-center"
                        >
                          <div className="flex items-center justify-center space-x-1">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              {caseValue}
                            </span>
                            <AudioButton
                              onClick={() => speakText(caseValue)}
                              size="sm"
                            />
                          </div>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default GermanPersonalPronounsWidget;
