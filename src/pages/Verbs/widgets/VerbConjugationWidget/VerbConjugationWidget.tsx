import React, { useState } from "react";
import { Language } from "../../../../hooks/useTranslations";
import Box from "../../../../components/ui/Box/Box";
import Dropdown from "../../../../components/ui/Dropdown/Dropdown";
import AudioButton from "../../../../components/ui/AudioButton/AudioButton";

interface VerbConjugationWidgetProps {
  language: Language;
}

interface ConjugationData {
  pronoun: string;
  verb: string;
  ending: string;
  translation: string;
}

interface VerbData {
  infinitive: string;
  english: string;
  conjugations: ConjugationData[];
  perfekt: {
    auxiliary: string;
    participle: string;
    example: string;
    english: string;
  };
  präteritum: {
    form: string;
    example: string;
    english: string;
  };
}

export const verbQuizQuestions = [
  {
    question: "Was ist die richtige Konjugation von 'haben' für 'du'?",
    questionEn: "What is the correct conjugation of 'haben' for 'du'?",
    options: ["habe", "hast", "hat", "haben"],
    correctAnswer: 1,
    explanation: "'Du' nimmt immer die -st Endung: ich habe → du hast",
    explanationEn: "'Du' always takes the -st ending: ich habe → du hast",
  },
  {
    question: "Welches Hilfsverb wird mit 'gehen' im Perfekt verwendet?",
    questionEn: "What auxiliary verb is used with 'gehen' in Perfekt?",
    options: ["haben", "sein", "werden", "können"],
    correctAnswer: 1,
    explanation:
      "'Gehen' ist ein Bewegungsverb, daher verwendet es 'sein' im Perfekt.",
    explanationEn: "'Gehen' is a movement verb, so it uses 'sein' in Perfekt.",
  },
  {
    question: "Was ist die Perfektform von 'lernen'?",
    questionEn: "What is the Perfekt form of 'lernen'?",
    options: ["lernte", "gelernt", "lerne", "lernst"],
    correctAnswer: 1,
    explanation: "'Lernen' wird zu 'gelernt' im Perfekt (ge- + lernen + -t).",
    explanationEn: "'Lernen' becomes 'gelernt' in Perfekt (ge- + lernen + -t).",
  },
  {
    question: "Was ist die Präteritumform von 'sein'?",
    questionEn: "What is the Präteritum form of 'sein'?",
    options: ["bin", "war", "gewesen", "ist"],
    correctAnswer: 1,
    explanation: "'Sein' wird zu 'war' im Präteritum (unregelmäßiges Verb).",
    explanationEn: "'Sein' becomes 'war' in Präteritum (irregular verb).",
  },
];

const VerbConjugationWidget: React.FC<VerbConjugationWidgetProps> = ({
  language,
}) => {
  const [selectedVerb, setSelectedVerb] = useState<string>("haben");
  const [activeTense, setActiveTense] = useState<
    "präsens" | "perfekt" | "präteritum"
  >("präsens");

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

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
          translation: "you have (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "haben",
          ending: "en",
          translation: "they/you have (formal)",
        },
      ],
      perfekt: {
        auxiliary: "habe",
        participle: "gehabt",
        example: "Ich habe ein Auto gehabt.",
        english: "I have had a car.",
      },
      präteritum: {
        form: "hatte",
        example: "Ich hatte ein Auto.",
        english: "I had a car.",
      },
    },
    sein: {
      infinitive: "sein",
      english: "to be",
      conjugations: [
        { pronoun: "ich", verb: "bin", ending: "bin", translation: "I am" },
        {
          pronoun: "du",
          verb: "bist",
          ending: "bist",
          translation: "you are (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "ist",
          ending: "ist",
          translation: "he/she/it is",
        },
        { pronoun: "wir", verb: "sind", ending: "sind", translation: "we are" },
        {
          pronoun: "ihr",
          verb: "seid",
          ending: "seid",
          translation: "you are (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "sind",
          ending: "sind",
          translation: "they/you are (formal)",
        },
      ],
      perfekt: {
        auxiliary: "bin",
        participle: "gewesen",
        example: "Ich bin zu Hause gewesen.",
        english: "I have been at home.",
      },
      präteritum: {
        form: "war",
        example: "Ich war zu Hause.",
        english: "I was at home.",
      },
    },
    lernen: {
      infinitive: "lernen",
      english: "to learn",
      conjugations: [
        { pronoun: "ich", verb: "lerne", ending: "e", translation: "I learn" },
        {
          pronoun: "du",
          verb: "lernst",
          ending: "st",
          translation: "you learn (informal)",
        },
        {
          pronoun: "er/sie/es",
          verb: "lernt",
          ending: "t",
          translation: "he/she/it learns",
        },
        {
          pronoun: "wir",
          verb: "lernen",
          ending: "en",
          translation: "we learn",
        },
        {
          pronoun: "ihr",
          verb: "lernt",
          ending: "t",
          translation: "you learn (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "lernen",
          ending: "en",
          translation: "they/you learn (formal)",
        },
      ],
      perfekt: {
        auxiliary: "habe",
        participle: "gelernt",
        example: "Ich habe Deutsch gelernt.",
        english: "I have learned German.",
      },
      präteritum: {
        form: "lernte",
        example: "Ich lernte Deutsch.",
        english: "I learned German.",
      },
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
          translation: "you go (plural)",
        },
        {
          pronoun: "sie/Sie",
          verb: "gehen",
          ending: "en",
          translation: "they/you go (formal)",
        },
      ],
      perfekt: {
        auxiliary: "bin",
        participle: "gegangen",
        example: "Ich bin nach Hause gegangen.",
        english: "I have gone home.",
      },
      präteritum: {
        form: "ging",
        example: "Ich ging nach Hause.",
        english: "I went home.",
      },
    },
  };

  const tenses = {
    präsens: {
      name: language === "en" ? "Present" : "Präsens",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    perfekt: {
      name: language === "en" ? "Perfect" : "Perfekt",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    präteritum: {
      name: language === "en" ? "Past" : "Präteritum",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
  };

  const getSelectedVerbData = () => {
    return verbs[selectedVerb];
  };

  const highlightEnding = (verb: string, ending: string) => {
    if (ending === verb) {
      return (
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          {verb}
        </span>
      );
    }
    const base = verb.slice(0, -ending.length);
    return (
      <>
        <span>{base}</span>
        <span className="text-blue-600 dark:text-blue-400 font-bold">
          {ending}
        </span>
      </>
    );
  };

  return (
    <Box
      titleKey="verbzeiten"
      language={language}
      headerColor="purple"
      description={
        language === "de"
          ? "Verbkonjugation und Zeitformen"
          : "Verb conjugation and tenses"
      }
    >
      <div className="space-y-6">
        {/* Verb Selector */}
        <Dropdown
          value={selectedVerb}
          onChange={setSelectedVerb}
          options={Object.entries(verbs).map(([key, verb]) => ({
            value: key,
            label: `${verb.infinitive} (${verb.english})`,
          }))}
          placeholder={language === "en" ? "Select Verb" : "Verb auswählen"}
        />

        {/* Tense Selector */}
        <div className="flex bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
          {Object.entries(tenses).map(([key, tense]) => (
            <button
              key={key}
              onClick={() =>
                setActiveTense(key as "präsens" | "perfekt" | "präteritum")
              }
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTense === key
                  ? `${tense.bgColor} ${tense.color} shadow-sm`
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-600/30"
              }`}
            >
              {tense.name}
            </button>
          ))}
        </div>

        {/* Conjugation Table */}
        {activeTense === "präsens" && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {language === "en" ? "Present Tense" : "Präsens"}
            </h3>
            <div className="space-y-2">
              {getSelectedVerbData().conjugations.map((conjugation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300 w-20">
                      {conjugation.pronoun}
                    </span>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {highlightEnding(conjugation.verb, conjugation.ending)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {conjugation.translation}
                    </span>
                    <AudioButton
                      onClick={() =>
                        speakText(`${conjugation.pronoun} ${conjugation.verb}`)
                      }
                      size="sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Perfekt */}
        {activeTense === "perfekt" && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {language === "en" ? "Perfect Tense" : "Perfekt"}
            </h3>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {language === "en" ? "Formation:" : "Bildung:"}
                  </span>
                  <span className="text-green-700 dark:text-green-300 font-bold">
                    {getSelectedVerbData().perfekt.auxiliary} +{" "}
                    {getSelectedVerbData().perfekt.participle}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {getSelectedVerbData().perfekt.example}
                    </span>
                    <AudioButton
                      onClick={() =>
                        speakText(getSelectedVerbData().perfekt.example)
                      }
                      size="sm"
                    />
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                    {getSelectedVerbData().perfekt.english}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Präteritum */}
        {activeTense === "präteritum" && (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {language === "en" ? "Past Tense" : "Präteritum"}
            </h3>
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-neutral-700 dark:text-neutral-300">
                    {language === "en" ? "Form:" : "Form:"}
                  </span>
                  <span className="text-purple-700 dark:text-purple-300 font-bold">
                    {getSelectedVerbData().präteritum.form}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {getSelectedVerbData().präteritum.example}
                    </span>
                    <AudioButton
                      onClick={() =>
                        speakText(getSelectedVerbData().präteritum.example)
                      }
                      size="sm"
                    />
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                    {getSelectedVerbData().präteritum.english}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default VerbConjugationWidget;
