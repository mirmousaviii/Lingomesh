import React from "react";
import { Language } from "../../hooks/useTranslations";
import PageLayout from "../../components/layout/PageLayout/PageLayout";
import Box from "../../components/ui/Box/Box";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import QuizWidget, {
  convertMultilingualQuestions,
} from "../../components/widgets/QuizWidget/QuizWidget";
import { timeQuizQuestions } from "../../data/quizData";

interface TimeProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Time: React.FC<TimeProps> = ({ language }) => {
  const isGerman = language === "de";

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "formal":
        return "text-purple-600 dark:text-purple-400";
      case "informal":
        return "text-green-600 dark:text-green-400";
      case "quarter":
        return "text-blue-600 dark:text-blue-400";
      case "half":
        return "text-orange-600 dark:text-orange-400";
      default:
        return "text-neutral-600 dark:text-neutral-400";
    }
  };

  const speakGerman = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Time data with formal and informal expressions
  const timeData = [
    {
      time: "14:00",
      formal: "vierzehn Uhr",
      informal: "zwei Uhr",
      category: "formal",
    },
    {
      time: "14:15",
      formal: "vierzehn Uhr fünfzehn",
      informal: "Viertel nach zwei",
      category: "quarter",
    },
    {
      time: "14:30",
      formal: "vierzehn Uhr dreißig",
      informal: "halb drei",
      category: "half",
    },
    {
      time: "14:45",
      formal: "vierzehn Uhr fünfundvierzig",
      informal: "Viertel vor drei",
      category: "quarter",
    },
    {
      time: "15:00",
      formal: "fünfzehn Uhr",
      informal: "drei Uhr",
      category: "formal",
    },
    {
      time: "15:20",
      formal: "fünfzehn Uhr zwanzig",
      informal: "zwanzig nach drei",
      category: "informal",
    },
    {
      time: "15:40",
      formal: "fünfzehn Uhr vierzig",
      informal: "zwanzig vor vier",
      category: "informal",
    },
  ];

  // Time rules and expressions
  const timeRules = [
    {
      title: isGerman ? "Formelle Zeit" : "Formal Time",
      description: isGerman
        ? "Verwenden Sie das 24-Stunden-Format für offizielle Situationen"
        : "Use 24-hour format for official situations",
      example: "14:30 → vierzehn Uhr dreißig",
    },
    {
      title: isGerman ? "Informelle Zeit" : "Informal Time",
      description: isGerman
        ? "Verwenden Sie das 12-Stunden-Format für alltägliche Gespräche"
        : "Use 12-hour format for everyday conversations",
      example: "14:30 → halb drei",
    },
    {
      title: isGerman ? "Viertelstunden" : "Quarter Hours",
      description: isGerman
        ? "'Viertel nach' und 'Viertel vor' für 15-Minuten-Intervalle"
        : "'Quarter past' and 'quarter to' for 15-minute intervals",
      example: "14:15 → Viertel nach zwei",
    },
  ];

  // Time vocabulary
  const timeVocabulary = [
    { german: "die Uhr", english: "clock/watch", category: "noun" },
    { german: "die Zeit", english: "time", category: "noun" },
    { german: "spät", english: "late", category: "adjective" },
    { german: "früh", english: "early", category: "adjective" },
    { german: "pünktlich", english: "on time", category: "adjective" },
    { german: "verspätet", english: "delayed", category: "adjective" },
  ];

  const questions = convertMultilingualQuestions(timeQuizQuestions, language);

  return (
    <PageLayout>
      {/* Time Display Section */}
      <Box
        title={isGerman ? "Zeitanzeige" : "Time Display"}
        description={
          isGerman
            ? "Formelle und informelle Zeitausdrücke"
            : "Formal and informal time expressions"
        }
        headerColor="blue"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {timeData.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {item.time}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(
                    item.category
                  )} bg-opacity-10`}
                >
                  {item.category}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {isGerman ? "Formell:" : "Formal:"}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(item.formal)}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">
                  {item.formal}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {isGerman ? "Informell:" : "Informal:"}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(item.informal)}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">
                  {item.informal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Time Rules Section */}
      <Box
        title={isGerman ? "Zeitausdrücke" : "Time Expressions"}
        description={
          isGerman
            ? "Wichtige Ausdrücke für die Uhrzeit im Deutschen"
            : "Important time expressions in German"
        }
        headerColor="purple"
      >
        <div className="space-y-4">
          {timeRules.map((rule, index) => (
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
                    onClick={() => speakGerman(rule.example.split(" → ")[1])}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Time Vocabulary Section */}
      <Box
        title={isGerman ? "Zeit-Vokabular" : "Time Vocabulary"}
        description={
          isGerman
            ? "Wichtige Wörter rund um die Zeit"
            : "Important words related to time"
        }
        headerColor="pink"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {timeVocabulary.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div
                    className={`text-sm font-semibold ${getCategoryColor(
                      item.category
                    )} mb-1`}
                  >
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
        subject={isGerman ? "Zeit" : "Time"}
      />
    </PageLayout>
  );
};

export default Time;
