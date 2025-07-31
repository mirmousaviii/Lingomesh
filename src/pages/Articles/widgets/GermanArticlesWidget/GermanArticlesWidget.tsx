import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import Box from "../../../../components/ui/Box/Box";
import AudioButton from "../../../../components/ui/AudioButton/AudioButton";

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

export const articleQuizQuestions = [
  {
    question: "Was ist der richtige Artikel für 'Mann' im Akkusativ?",
    questionEn:
      "What is the correct article for 'Mann' (man) in the accusative case?",
    options: ["der", "den", "dem", "des"],
    correctAnswer: 1,
    explanation: "'Mann' ist maskulin, daher nimmt er im Akkusativ 'den'.",
    explanationEn: "'Mann' is masculine, so in accusative case it takes 'den'.",
  },
  {
    question: "Was ist der richtige Artikel für 'Frau' im Dativ?",
    questionEn:
      "What is the correct article for 'Frau' (woman) in the dative case?",
    options: ["die", "der", "dem", "den"],
    correctAnswer: 1,
    explanation: "'Frau' ist feminin, daher nimmt sie im Dativ 'der'.",
    explanationEn: "'Frau' is feminine, so in dative case it takes 'der'.",
  },
  {
    question: "Was ist der richtige Artikel für 'Kind' im Nominativ?",
    questionEn:
      "What is the correct article for 'Kind' (child) in the nominative case?",
    options: ["der", "die", "das", "den"],
    correctAnswer: 2,
    explanation: "'Kind' ist neutrum, daher nimmt es im Nominativ 'das'.",
    explanationEn: "'Kind' is neuter, so in nominative case it takes 'das'.",
  },
  {
    question: "Was ist der richtige Artikel für maskuline Nomen im Genitiv?",
    questionEn:
      "What is the correct article for masculine nouns in the genitive case?",
    options: ["der", "den", "dem", "des"],
    correctAnswer: 3,
    explanation: "Maskuline und neutrale Nomen nehmen 'des' im Genitiv.",
    explanationEn:
      "Masculine and neuter nouns take 'des' in the genitive case.",
  },
];

const GermanArticlesWidget: React.FC<GermanArticlesWidgetProps> = ({
  language,
}) => {
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

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
      description: "Possession",
      color: "text-teal-700 dark:text-teal-300",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
  ];

  const genders = [
    { key: "masculine", label: "Maskulin", english: "Masculine" },
    { key: "feminine", label: "Feminin", english: "Feminine" },
    { key: "neuter", label: "Neutrum", english: "Neuter" },
    { key: "plural", label: "Plural", english: "Plural" },
  ];

  return (
    <Box
      titleKey="artikel"
      language={language}
      headerColor="blue"
      description={
        language === "de"
          ? "Deutsche Artikel und ihre Deklination"
          : "German articles and their declension"
      }
    >
      <div className="space-y-4">
        {/* Article Table */}
        <div className="space-y-3">
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
                    <div className="text-xs opacity-75">{gender.english}</div>
                  )}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className={`font-bold text-sm ${article.color}`}>
                      {article.nominativ}
                    </span>
                    <AudioButton
                      onClick={() => speakText(article.nominativ)}
                      size="sm"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className={`font-bold text-sm ${article.color}`}>
                      {article.akkusativ}
                    </span>
                    <AudioButton
                      onClick={() => speakText(article.akkusativ)}
                      size="sm"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className={`font-bold text-sm ${article.color}`}>
                      {article.dativ}
                    </span>
                    <AudioButton
                      onClick={() => speakText(article.dativ)}
                      size="sm"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className={`font-bold text-sm ${article.color}`}>
                      {article.genitiv}
                    </span>
                    <AudioButton
                      onClick={() => speakText(article.genitiv)}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default GermanArticlesWidget;
