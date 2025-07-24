import React, { useState } from "react";
import Widget from "../../ui/Widget/Widget";

interface GermanVerbTensesWidgetProps {
  showTranslations: boolean;
}

interface TenseData {
  name: string;
  englishName: string;
  formula: string;
  englishFormula: string;
  examples: Array<{
    german: string;
    english: string;
    auxiliary?: string;
    participle?: string;
    mainVerb?: string;
  }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

const GermanVerbTensesWidget: React.FC<GermanVerbTensesWidgetProps> = ({
  showTranslations,
}) => {
  const [activeTense, setActiveTense] = useState<"präsens" | "perfekt">(
    "präsens"
  );

  const tenses: Record<string, TenseData> = {
    präsens: {
      name: "Präsens",
      englishName: "Present Tense",
      formula: "Subjekt + Verb (konjugiert)",
      englishFormula: "Subject + Verb (conjugated)",
      examples: [
        {
          german: "Ich lerne Deutsch.",
          english: "I learn German.",
          mainVerb: "lerne",
        },
        {
          german: "Du sprichst gut.",
          english: "You speak well.",
          mainVerb: "sprichst",
        },
        {
          german: "Er arbeitet im Büro.",
          english: "He works in the office.",
          mainVerb: "arbeitet",
        },
        {
          german: "Sie wohnt in Berlin.",
          english: "She lives in Berlin.",
          mainVerb: "wohnt",
        },
        {
          german: "Wir essen zu Abend.",
          english: "We eat dinner.",
          mainVerb: "essen",
        },
      ],
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    perfekt: {
      name: "Perfekt",
      englishName: "Present Perfect",
      formula: "Subjekt + haben/sein + Partizip II",
      englishFormula: "Subject + have/be + Past Participle",
      examples: [
        {
          german: "Ich habe Deutsch gelernt.",
          english: "I have learned German.",
          auxiliary: "habe",
          participle: "gelernt",
        },
        {
          german: "Du bist nach Hause gegangen.",
          english: "You have gone home.",
          auxiliary: "bist",
          participle: "gegangen",
        },
        {
          german: "Er hat das Buch gelesen.",
          english: "He has read the book.",
          auxiliary: "hat",
          participle: "gelesen",
        },
        {
          german: "Sie ist in die Stadt gefahren.",
          english: "She has driven to the city.",
          auxiliary: "ist",
          participle: "gefahren",
        },
        {
          german: "Wir haben gut geschlafen.",
          english: "We have slept well.",
          auxiliary: "haben",
          participle: "geschlafen",
        },
      ],
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
  };

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const highlightText = (
    text: string,
    highlightedParts: Array<{ part: string; type: string }> = []
  ) => {
    if (highlightedParts.length === 0) return text;

    let result = text;
    const elements: Array<{
      start: number;
      end: number;
      part: string;
      type: string;
    }> = [];

    // Find all highlighted parts and their positions
    highlightedParts.forEach(({ part, type }) => {
      let startIndex = 0;
      while (true) {
        const index = result.indexOf(part, startIndex);
        if (index === -1) break;
        elements.push({ start: index, end: index + part.length, part, type });
        startIndex = index + 1;
      }
    });

    // Sort by start position
    elements.sort((a, b) => a.start - b.start);

    // Remove overlapping elements (keep the first one)
    const filteredElements = elements.filter((element, index) => {
      if (index === 0) return true;
      const prevElement = elements[index - 1];
      return element.start >= prevElement.end;
    });

    if (filteredElements.length === 0) return text;

    // Build the highlighted text
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    filteredElements.forEach((element) => {
      // Add text before the highlighted part
      if (element.start > lastIndex) {
        parts.push(result.slice(lastIndex, element.start));
      }

      // Add the highlighted part
      const highlightColor =
        element.type === "auxiliary"
          ? "text-purple-700 dark:text-purple-300 font-semibold"
          : element.type === "participle"
          ? "text-orange-700 dark:text-orange-300 font-semibold"
          : "text-blue-700 dark:text-blue-300 font-semibold";

      parts.push(
        <span
          key={`${element.start}-${element.end}`}
          className={highlightColor}
        >
          {element.part}
        </span>
      );

      lastIndex = element.end;
    });

    // Add remaining text
    if (lastIndex < result.length) {
      parts.push(result.slice(lastIndex));
    }

    return <>{parts}</>;
  };

  return (
    <Widget
      title="Deutsche Verbzeiten"
      englishTitle={showTranslations ? "German Verb Tenses" : undefined}
    >
      <div className="space-y-4">
        {/* Tense Selector Tabs */}
        <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
          {Object.entries(tenses).map(([key, tense]) => (
            <button
              key={key}
              onClick={() => setActiveTense(key as "präsens" | "perfekt")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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
            className={`${activeTense === key ? "block" : "hidden"} space-y-4`}
          >
            {/* Formula Section */}
            <div
              className={`p-4 rounded-md border ${tense.borderColor} ${tense.bgColor}`}
            >
              <div className="mb-3">
                <h4 className={`text-lg font-bold ${tense.color}`}>
                  {showTranslations ? tense.englishName : tense.name}
                </h4>
              </div>

              <div className="space-y-4">
                {/* Formula */}
                <div className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-3 border border-white/30 dark:border-neutral-600/30">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {showTranslations ? "Formula:" : "Formel:"}
                  </h5>
                  <div className="text-base font-mono text-neutral-800 dark:text-neutral-200">
                    {tense.formula}
                  </div>
                  {showTranslations && (
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {tense.englishFormula}
                    </div>
                  )}
                </div>

                {/* Examples */}
                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    {showTranslations ? "Examples:" : "Beispiele:"}
                  </h5>
                  {tense.examples.map((example, index) => (
                    <div
                      key={index}
                      className="bg-white/50 dark:bg-neutral-800/50 rounded-md p-3 border border-white/30 dark:border-neutral-600/30"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 space-y-2">
                          <div className="text-base text-neutral-800 dark:text-neutral-200">
                            {highlightText(example.german, [
                              ...(example.auxiliary
                                ? [
                                    {
                                      part: example.auxiliary,
                                      type: "auxiliary",
                                    },
                                  ]
                                : []),
                              ...(example.participle
                                ? [
                                    {
                                      part: example.participle,
                                      type: "participle",
                                    },
                                  ]
                                : []),
                              ...(example.mainVerb
                                ? [
                                    {
                                      part: example.mainVerb,
                                      type: "mainVerb",
                                    },
                                  ]
                                : []),
                            ])}
                          </div>
                          {showTranslations && (
                            <div className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                              {example.english}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={() => speakText(example.german)}
                          className="flex-shrink-0 p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
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
              </div>
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-md border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            {showTranslations ? "Color Legend:" : "Farben-Legende:"}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                {showTranslations
                  ? "Auxiliary verb (haben/sein)"
                  : "Hilfsverb (haben/sein)"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                {showTranslations ? "Past participle" : "Partizip II"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                {showTranslations ? "Main verb" : "Hauptverb"}
              </span>
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-3 space-y-2">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
            <h6 className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
              💡 {showTranslations ? "Perfekt Tips:" : "Perfekt Tipps:"}
            </h6>
            <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
              <div>
                <strong>
                  {showTranslations ? "Use 'haben':" : "Verwende 'haben':"}
                </strong>{" "}
                {showTranslations
                  ? "Most verbs (learn, read, sleep)"
                  : "Die meisten Verben (lernen, lesen, schlafen)"}
              </div>
              <div>
                <strong>
                  {showTranslations ? "Use 'sein':" : "Verwende 'sein':"}
                </strong>{" "}
                {showTranslations
                  ? "Movement verbs (go, drive, fly) and state changes (become, die)"
                  : "Bewegungsverben (gehen, fahren, fliegen) und Zustandsänderungen (werden, sterben)"}
              </div>
            </div>
          </div>

          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-800">
            <h6 className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
              📝 {showTranslations ? "Präsens Usage:" : "Präsens Verwendung:"}
            </h6>
            <div className="text-xs text-green-600 dark:text-green-400">
              {showTranslations
                ? "Used for present actions, habits, and general truths."
                : "Verwendet für gegenwärtige Handlungen, Gewohnheiten und allgemeine Wahrheiten."}
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default GermanVerbTensesWidget;
