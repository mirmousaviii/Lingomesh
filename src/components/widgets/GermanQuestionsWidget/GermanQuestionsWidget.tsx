import React from "react";
import Widget from "../../ui/Widget/Widget";

interface GermanQuestionsWidgetProps {
  showTranslations: boolean;
}

interface QuestionExample {
  german: string;
  english: string;
  pronunciation: string;
}

interface QuestionSection {
  title: string;
  englishTitle: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  examples: QuestionExample[];
}

const GermanQuestionsWidget: React.FC<GermanQuestionsWidgetProps> = ({
  showTranslations,
}) => {
  const questionSections: QuestionSection[] = [
    {
      title: "W-Fragen",
      englishTitle: "W-Questions",
      icon: "❓",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      examples: [
        {
          german: "Was ist das?",
          english: "What is that?",
          pronunciation: "vas ist das",
        },
        {
          german: "Wo wohnst du?",
          english: "Where do you live?",
          pronunciation: "vo vohnst doo",
        },
        {
          german: "Wann kommst du?",
          english: "When are you coming?",
          pronunciation: "van komst doo",
        },
        {
          german: "Warum lernst du Deutsch?",
          english: "Why are you learning German?",
          pronunciation: "va-room lernst doo doytsh",
        },
        {
          german: "Wie geht es dir?",
          english: "How are you?",
          pronunciation: "vee gayt es deer",
        },
      ],
    },
    {
      title: "Ja/Nein Fragen",
      englishTitle: "Yes/No Questions",
      icon: "❔",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      examples: [
        {
          german: "Sprechen Sie Deutsch?",
          english: "Do you speak German?",
          pronunciation: "shprekhen zee doytsh",
        },
        {
          german: "Haben Sie Zeit?",
          english: "Do you have time?",
          pronunciation: "hahben zee tsait",
        },
        {
          german: "Kommen Sie aus Deutschland?",
          english: "Are you from Germany?",
          pronunciation: "kommen zee ows doytshland",
        },
        {
          german: "Möchten Sie Kaffee?",
          english: "Would you like coffee?",
          pronunciation: "mekhten zee kah-fay",
        },
        {
          german: "Verstehen Sie mich?",
          english: "Do you understand me?",
          pronunciation: "fer-shtayen zee mikh",
        },
      ],
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
      title="Deutsche Fragen"
      englishTitle={showTranslations ? "German Questions" : undefined}
    >
      <div className="space-y-6">
        {questionSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`p-4 rounded-lg border ${section.borderColor} ${section.bgColor}`}
          >
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{section.icon}</span>
              <div>
                <h4 className={`text-lg font-bold ${section.color}`}>
                  {section.title}
                </h4>
                {showTranslations && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {section.englishTitle}
                  </p>
                )}
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-3">
              {section.examples.map((example, exampleIndex) => (
                <div
                  key={exampleIndex}
                  className="bg-white/70 dark:bg-neutral-800/70 rounded-md p-3 border border-white/50 dark:border-neutral-700/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900 dark:text-neutral-100">
                        {example.german}
                      </div>
                      {showTranslations && (
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {example.english}
                        </div>
                      )}
                      <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 italic">
                        [{example.pronunciation}]
                      </div>
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
        ))}

        {/* Quick Tips */}
        <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-md border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
            {showTranslations ? "Quick Tips:" : "Schnelle Tipps:"}
          </h5>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>W-Fragen:</strong>{" "}
                {showTranslations
                  ? "Start with W-words (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)"
                  : "Beginnen mit W-Wörtern (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>
                <strong>Ja/Nein Fragen:</strong>{" "}
                {showTranslations
                  ? "Verb comes first, subject second"
                  : "Verb kommt zuerst, Subjekt zweitens"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-500">•</span>
              <span>
                <strong>Formal vs Informal:</strong>{" "}
                {showTranslations
                  ? "Use 'Sie' for formal, 'du' for informal"
                  : "Verwende 'Sie' für formell, 'du' für informell"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default GermanQuestionsWidget;
