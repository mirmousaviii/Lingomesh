import React from "react";
import { Language } from "../../hooks/useTranslations";
import PageLayout from "../../components/layout/PageLayout/PageLayout";
import Box from "../../components/ui/Box/Box";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import QuizWidget, {
  convertMultilingualQuestions,
} from "../../components/widgets/QuizWidget/QuizWidget";
import AlphabetWidget from "../../components/widgets/AlphabetWidget/AlphabetWidget";
import { alphabetQuizQuestions } from "../../data/quizData";

interface AlphabetProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Alphabet: React.FC<AlphabetProps> = ({ language }) => {
  const isGerman = language === "de";

  const speakGerman = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Alphabet pronunciation rules
  const alphabetRules = [
    {
      title: isGerman ? "Umlaute" : "Umlauts",
      description: isGerman
        ? "ä, ö, ü haben Punkte über sich und werden anders ausgesprochen"
        : "ä, ö, ü have dots above them and are pronounced differently",
      example: "ä → ah-umlaut, ö → oh-umlaut, ü → oo-umlaut",
    },
    {
      title: isGerman ? "Eszett (ß)" : "Eszett (ß)",
      description: isGerman
        ? "Wird wie 'ss' ausgesprochen und nur in Kleinbuchstaben verwendet"
        : "Pronounced like 'ss' and only used in lowercase",
      example: "Straße → Strasse",
    },
    {
      title: isGerman ? "Vokale" : "Vowels",
      description: isGerman
        ? "a, e, i, o, u werden klar und deutlich ausgesprochen"
        : "a, e, i, o, u are pronounced clearly and distinctly",
      example: "a → ah, e → eh, i → ee, o → oh, u → oo",
    },
  ];

  // Alphabet vocabulary
  const alphabetVocabulary = [
    { german: "das Alphabet", english: "alphabet", category: "noun" },
    { german: "der Buchstabe", english: "letter", category: "noun" },
    { german: "der Umlaut", english: "umlaut", category: "noun" },
    { german: "die Aussprache", english: "pronunciation", category: "noun" },
    { german: "buchstabieren", english: "to spell", category: "verb" },
    { german: "aussprechen", english: "to pronounce", category: "verb" },
  ];

  const questions = convertMultilingualQuestions(
    alphabetQuizQuestions,
    language
  );

  return (
    <PageLayout>
      {/* Interactive Alphabet Widget in Box */}
      <Box
        title={isGerman ? "Deutsches Alphabet" : "German Alphabet"}
        description={
          isGerman
            ? "Das deutsche Alphabet hat 30 Buchstaben"
            : "The German alphabet has 30 letters"
        }
        headerColor="blue"
      >
        <AlphabetWidget language={language} />
      </Box>

      {/* Alphabet Rules Section */}
      <Box
        title={isGerman ? "Alphabet-Regeln" : "Alphabet Rules"}
        description={
          isGerman
            ? "Wichtige Regeln für die Aussprache im Deutschen"
            : "Important rules for German pronunciation"
        }
        headerColor="purple"
      >
        <div className="space-y-4">
          {alphabetRules.map((rule, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {rule.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {rule.description}
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-md p-3 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-indigo-700 dark:text-indigo-300">
                    {rule.example}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(rule.example.split(" → ")[0])}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Alphabet Vocabulary Section */}
      <Box
        title={isGerman ? "Alphabet-Vokabular" : "Alphabet Vocabulary"}
        description={
          isGerman
            ? "Wichtige Wörter rund um das Alphabet"
            : "Important words related to the alphabet"
        }
        headerColor="pink"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {alphabetVocabulary.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {item.german}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {item.english}
                  </div>
                </div>
                <AudioButton
                  onClick={() => speakGerman(item.german)}
                  title={isGerman ? "Hören" : "Listen"}
                  size="sm"
                />
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Quiz Widget */}
      <QuizWidget
        language={language}
        questions={questions}
        subject={isGerman ? "Alphabet" : "Alphabet"}
      />
    </PageLayout>
  );
};

export default Alphabet;
