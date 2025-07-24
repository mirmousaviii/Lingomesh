import React from "react";
import Widget from "../../ui/Widget/Widget";

interface GermanArticlesWidgetProps {
  showTranslations: boolean;
}

interface ArticleData {
  nominativ: string;
  akkusativ: string;
  dativ: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const GermanArticlesWidget: React.FC<GermanArticlesWidgetProps> = ({
  showTranslations,
}) => {
  const articles: Record<string, ArticleData> = {
    masculine: {
      nominativ: "der",
      akkusativ: "den",
      dativ: "dem",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "die",
      akkusativ: "die",
      dativ: "der",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "das",
      akkusativ: "das",
      dativ: "dem",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "die",
      akkusativ: "die",
      dativ: "den",
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
  ];

  const genders = [
    { key: "masculine", label: "Masculine", english: "Masculine" },
    { key: "feminine", label: "Feminine", english: "Feminine" },
    { key: "neuter", label: "Neuter", english: "Neuter" },
    { key: "plural", label: "Plural", english: "Plural" },
  ];

  return (
    <Widget
      title="Bestimmte Artikel"
      englishTitle={showTranslations ? "Definite Articles" : undefined}
    >
      <div className="space-y-3">
        {/* Header Row */}
        <div className="grid grid-cols-4 gap-1">
          <div className="text-center font-semibold text-neutral-700 dark:text-neutral-300 text-xs">
            {showTranslations ? "Gender" : "Geschlecht"}
          </div>
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className={`text-center font-semibold text-xs p-1 rounded ${caseItem.bgColor} ${caseItem.color}`}
            >
              <div>{caseItem.name}</div>
              {showTranslations && (
                <div className="text-xs opacity-75 leading-tight">
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
              className={`grid grid-cols-4 gap-1 p-2 rounded border ${article.borderColor} ${article.bgColor}`}
            >
              <div className="flex flex-col justify-center">
                <div className={`font-semibold text-sm ${article.color}`}>
                  {gender.label}
                </div>
                {showTranslations && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                    {gender.english}
                  </div>
                )}
              </div>
              <div className="text-center">
                <div
                  className={`text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-2 border ${article.borderColor}`}
                >
                  {article.nominativ}
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-2 border ${article.borderColor}`}
                >
                  {article.akkusativ}
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-lg font-bold ${article.color} bg-white/50 dark:bg-neutral-800/50 rounded py-1 px-2 border ${article.borderColor}`}
                >
                  {article.dativ}
                </div>
              </div>
            </div>
          );
        })}

        {/* Case Descriptions */}
        {showTranslations && (
          <div className="mt-3 space-y-1">
            <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Case Functions:
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className={`p-2 rounded border ${caseItem.bgColor} ${caseItem.color}`}
                >
                  <div className="font-semibold text-xs">{caseItem.name}</div>
                  <div className="text-xs opacity-75 mt-0.5 leading-tight">
                    {caseItem.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Usage Examples */}
        <div className="mt-3 p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            {showTranslations ? "Quick Reference:" : "Schnellübersicht:"}
          </h5>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-0.5">
            <div>
              • <strong>Nominativ:</strong>{" "}
              {showTranslations
                ? "Who/what is doing the action"
                : "Wer/was macht die Aktion"}
            </div>
            <div>
              • <strong>Akkusativ:</strong>{" "}
              {showTranslations
                ? "Who/what receives the action"
                : "Wen/was betrifft die Aktion"}
            </div>
            <div>
              • <strong>Dativ:</strong>{" "}
              {showTranslations
                ? "Who/what benefits from the action"
                : "Wem/was nützt die Aktion"}
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default GermanArticlesWidget;
