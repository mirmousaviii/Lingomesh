import React, { useState } from "react";
import { Language } from "../../../hooks/useTranslations";
import Widget from "../../ui/Widget/Widget";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanQuestionsWidgetProps {
  language: Language;
}

export const questionQuizQuestions = [
  {
    question: "Welches Fragewort benutzt man für 'What'?",
    questionEn: "Which question word is used for 'What'?",
    options: ["Wo", "Was", "Wann", "Warum"],
    correctAnswer: 1,
    explanation: "'Was' bedeutet 'What' auf Deutsch.",
    explanationEn: "'Was' means 'What' in German.",
  },
  {
    question: "Wie fragt man nach dem Ort?",
    questionEn: "How do you ask about location?",
    options: ["Was", "Wann", "Wo", "Wie"],
    correctAnswer: 2,
    explanation: "'Wo' bedeutet 'Where' und fragt nach dem Ort.",
    explanationEn: "'Wo' means 'Where' and asks about location.",
  },
  {
    question: "Welche Frage erwartet eine Ja/Nein-Antwort?",
    questionEn: "Which question expects a Yes/No answer?",
    options: [
      "Was machst du?",
      "Sprechen Sie Deutsch?",
      "Wo wohnst du?",
      "Warum lernst du?",
    ],
    correctAnswer: 1,
    explanation: "Ja/Nein-Fragen beginnen mit dem Verb.",
    explanationEn: "Yes/No questions start with the verb.",
  },
  {
    question: "Was bedeutet 'Warum'?",
    questionEn: "What does 'Warum' mean?",
    options: ["When", "Where", "What", "Why"],
    correctAnswer: 3,
    explanation: "'Warum' bedeutet 'Why' auf Englisch.",
    explanationEn: "'Warum' means 'Why' in English.",
  },
];

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
  language,
}) => {
  const [activeSection, setActiveSection] = useState<"w-fragen" | "ja-nein">(
    "w-fragen"
  );

  const questionSections: Record<string, QuestionSection> = {
    "w-fragen": {
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
    "ja-nein": {
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
  };

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const currentSection = questionSections[activeSection];

  return (
    <Widget
      titleKey="fragen"
      language={language}
      headerColor="teal"
      description={
        language === "de"
          ? "Fragewörter und ihre Verwendung"
          : "Question words and their usage"
      }
    >
      <div className="space-y-4">
        {/* Question Type Selector Tabs */}
        <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
          {Object.entries(questionSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key as "w-fragen" | "ja-nein")}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === key
                  ? `${section.bgColor} ${section.color} shadow-sm`
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-600/30"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        <div
          className={`p-4 rounded-lg border ${currentSection.borderColor} ${currentSection.bgColor}`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{currentSection.icon}</span>
            <div>
              <h4 className={`text-lg font-bold ${currentSection.color}`}>
                {currentSection.title}
              </h4>
              {language === "en" && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {currentSection.englishTitle}
                </p>
              )}
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-3">
            {currentSection.examples.map((example, exampleIndex) => (
              <div
                key={exampleIndex}
                className="bg-white/70 dark:bg-neutral-800/70 rounded-md p-3 border border-white/50 dark:border-neutral-700/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900 dark:text-neutral-100">
                      {example.german}
                    </div>
                    {language === "en" && (
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {example.english}
                      </div>
                    )}
                    <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 italic">
                      [{example.pronunciation}]
                    </div>
                  </div>
                  <AudioButton
                    onClick={() => speakText(example.german)}
                    title={language === "en" ? "Listen" : "Hören"}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-4 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-md border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
            {language === "en" ? "Quick Tips:" : "Schnelle Tipps:"}
          </h5>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>W-Fragen:</strong>{" "}
                {language === "en"
                  ? "Start with W-words (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)"
                  : "Beginnen mit W-Wörtern (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>
                <strong>Ja/Nein Fragen:</strong>{" "}
                {language === "en"
                  ? "Verb comes first, subject second"
                  : "Verb kommt zuerst, Subjekt zweitens"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-500">•</span>
              <span>
                <strong>Formal vs Informal:</strong>{" "}
                {language === "en"
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
