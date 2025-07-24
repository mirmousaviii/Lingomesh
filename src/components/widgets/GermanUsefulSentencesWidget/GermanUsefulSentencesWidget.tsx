import React, { useState } from "react";
import { Language } from "../../../hooks/useTranslations";
import Widget from "../../ui/Widget/Widget";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanUsefulSentencesWidgetProps {
  language: Language;
}

interface SentenceExample {
  german: string;
  english: string;
  pronunciation: string;
}

interface SentenceSection {
  title: string;
  englishTitle: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  examples: SentenceExample[];
}

const GermanUsefulSentencesWidget: React.FC<
  GermanUsefulSentencesWidgetProps
> = ({ language }) => {
  const [activeSection, setActiveSection] = useState<
    "greetings" | "daily" | "travel"
  >("greetings");

  const sentenceSections: Record<string, SentenceSection> = {
    greetings: {
      title: "Begrüßungen",
      englishTitle: "Greetings",
      icon: "👋",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      examples: [
        {
          german: "Guten Morgen!",
          english: "Good morning!",
          pronunciation: "goo-ten mor-gen",
        },
        {
          german: "Guten Tag!",
          english: "Good day!",
          pronunciation: "goo-ten tahk",
        },
        {
          german: "Guten Abend!",
          english: "Good evening!",
          pronunciation: "goo-ten ah-bent",
        },
        {
          german: "Auf Wiedersehen!",
          english: "Goodbye!",
          pronunciation: "owf vee-der-zay-en",
        },
        {
          german: "Bis später!",
          english: "See you later!",
          pronunciation: "bis shpay-ter",
        },
      ],
    },
    daily: {
      title: "Tägliche Sätze",
      englishTitle: "Daily Sentences",
      icon: "📝",
      color: "text-orange-700 dark:text-orange-300",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      examples: [
        {
          german: "Ich verstehe nicht.",
          english: "I don't understand.",
          pronunciation: "ikh fer-shtay-en nikht",
        },
        {
          german: "Können Sie das wiederholen?",
          english: "Can you repeat that?",
          pronunciation: "kern-en zee das vee-der-hoh-len",
        },
        {
          german: "Sprechen Sie langsam, bitte.",
          english: "Please speak slowly.",
          pronunciation: "shprekhen zee lahng-zahm bit-te",
        },
        {
          german: "Entschuldigung, wo ist...?",
          english: "Excuse me, where is...?",
          pronunciation: "ent-shool-di-gung vo ist",
        },
        {
          german: "Danke schön!",
          english: "Thank you very much!",
          pronunciation: "dahn-ke shern",
        },
      ],
    },
    travel: {
      title: "Reise & Verkehr",
      englishTitle: "Travel & Transportation",
      icon: "🚗",
      color: "text-teal-700 dark:text-teal-300",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      examples: [
        {
          german: "Wo ist der Bahnhof?",
          english: "Where is the train station?",
          pronunciation: "vo ist der bahn-hof",
        },
        {
          german: "Wie komme ich zum Flughafen?",
          english: "How do I get to the airport?",
          pronunciation: "vee kom-me ikh tsoom flook-hah-fen",
        },
        {
          german: "Ein Ticket nach Berlin, bitte.",
          english: "One ticket to Berlin, please.",
          pronunciation: "ain ti-ket nahkh ber-leen bit-te",
        },
        {
          german: "Wann fährt der nächste Bus?",
          english: "When does the next bus leave?",
          pronunciation: "van fairt der naykh-ste boos",
        },
        {
          german: "Können Sie mir helfen?",
          english: "Can you help me?",
          pronunciation: "kern-en zee meer hel-fen",
        },
      ],
    },
  };

  const currentSection = sentenceSections[activeSection];

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Widget titleKey="nuetzlicheSaetze" language={language}>
      <div className="space-y-4">
        {/* Sentence Type Selector Tabs */}
        <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
          {Object.entries(sentenceSections).map(([key, section]) => (
            <button
              key={key}
              onClick={() =>
                setActiveSection(key as "greetings" | "daily" | "travel")
              }
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
              <span className="text-purple-500">•</span>
              <span>
                <strong>Begrüßungen:</strong>{" "}
                {language === "en"
                  ? "Use appropriate greetings based on time of day"
                  : "Verwende passende Begrüßungen je nach Tageszeit"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span>
                <strong>Tägliche Sätze:</strong>{" "}
                {language === "en"
                  ? "Essential phrases for daily communication"
                  : "Wichtige Sätze für die tägliche Kommunikation"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-teal-500">•</span>
              <span>
                <strong>Reise & Verkehr:</strong>{" "}
                {language === "en"
                  ? "Useful phrases for travel and transportation"
                  : "Nützliche Sätze für Reisen und Verkehr"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default GermanUsefulSentencesWidget;
