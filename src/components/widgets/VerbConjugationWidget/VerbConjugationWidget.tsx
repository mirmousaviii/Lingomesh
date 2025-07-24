import { useState } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";

interface VerbData {
  infinitive: string;
  english: string;
  conjugations: {
    pronoun: string;
    verb: string;
    ending: string;
    translation: string;
  }[];
}

interface VerbConjugationWidgetProps {
  language: Language;
}

const VerbConjugationWidget: React.FC<VerbConjugationWidgetProps> = ({
  language,
}) => {
  const [selectedVerb, setSelectedVerb] = useState("haben");
  const t = useTranslation(language);

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
          translation: "you have (plural informal)",
        },
        {
          pronoun: "sie/Sie",
          verb: "haben",
          ending: "en",
          translation: "they/you have (formal)",
        },
      ],
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
          translation: "you are (plural informal)",
        },
        {
          pronoun: "sie/Sie",
          verb: "sind",
          ending: "sind",
          translation: "they/you are (formal)",
        },
      ],
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
          translation: "you become (plural informal)",
        },
        {
          pronoun: "sie/Sie",
          verb: "werden",
          ending: "en",
          translation: "they/you become (formal)",
        },
      ],
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
          translation: "you make (plural informal)",
        },
        {
          pronoun: "sie/Sie",
          verb: "machen",
          ending: "en",
          translation: "they/you make (formal)",
        },
      ],
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
          translation: "you go (plural informal)",
        },
        {
          pronoun: "sie/Sie",
          verb: "gehen",
          ending: "en",
          translation: "they/you go (formal)",
        },
      ],
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
          translation: "you come (plural informal)",
        },
        {
          pronoun: "sie/Sie",
          verb: "kommen",
          ending: "en",
          translation: "they/you come (formal)",
        },
      ],
    },
  };

  const currentVerb = verbs[selectedVerb];

  // Highlight the ending in the verb
  const highlightEnding = (verb: string, ending: string) => {
    if (ending === verb) {
      return (
        <span className="text-primary-600 dark:text-primary-400 font-bold">
          {verb}
        </span>
      );
    }
    const base = verb.slice(0, -ending.length);
    return (
      <>
        <span>{base}</span>
        <span className="text-primary-600 dark:text-primary-400 font-bold">
          {ending}
        </span>
      </>
    );
  };

  // Speech synthesis function
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Widget titleKey="praesensVerb" language={language}>
      <div className="space-y-4">
        {/* Verb Selector */}
        <div className="mb-4">
          <select
            value={selectedVerb}
            onChange={(e) => setSelectedVerb(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            }}
          >
            {Object.entries(verbs).map(([key, verb]) => (
              <option key={key} value={key}>
                {verb.infinitive} - {verb.english}
              </option>
            ))}
          </select>
        </div>

        {/* Conjugations */}
        <div className="space-y-3">
          {currentVerb.conjugations.map((conjugation, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-md border border-neutral-200 dark:border-neutral-600"
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 min-w-[60px]">
                  {conjugation.pronoun}
                </span>
                <span className="text-lg font-medium">
                  {highlightEnding(conjugation.verb, conjugation.ending)}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                {language === "en" && (
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                    {conjugation.translation}
                  </span>
                )}
                <button
                  onClick={() => speakText(conjugation.verb)}
                  className="flex-shrink-0 p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
                  title={t.ui.listen}
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

        {/* Quick Tips */}
        <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-700/50 rounded-md border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">
            {t.ui.schnelleTipps}
          </h5>
          <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>ich:</strong>{" "}
                {language === "en"
                  ? "Always ends with -e"
                  : "Endet immer mit -e"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500">•</span>
              <span>
                <strong>du:</strong>{" "}
                {language === "en"
                  ? "Always ends with -st"
                  : "Endet immer mit -st"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-500">•</span>
              <span>
                <strong>er/sie/es:</strong>{" "}
                {language === "en"
                  ? "Always ends with -t"
                  : "Endet immer mit -t"}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span>
                <strong>wir/ihr/sie/Sie:</strong>{" "}
                {language === "en"
                  ? "Use infinitive form"
                  : "Verwende Infinitivform"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default VerbConjugationWidget;
