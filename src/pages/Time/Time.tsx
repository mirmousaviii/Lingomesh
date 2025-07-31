import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import TimeWidget from "../../components/widgets/TimeWidget/TimeWidget";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import PageLayout from "../../components/layout/PageLayout";
import { QuizWidget, QuizQuestion } from "../../components/widgets/QuizWidget";
import { useState, useEffect } from "react";
import Box from "../../components/ui/Box/Box";

interface TimeProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Time: React.FC<TimeProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timeInterval);
  }, []);

  // Time vocabulary
  const timeVocabulary = [
    { german: "die Uhr", english: "the clock/time", category: "basic" },
    { german: "die Zeit", english: "the time", category: "basic" },
    { german: "die Stunde", english: "the hour", category: "basic" },
    { german: "die Minute", english: "the minute", category: "basic" },
    { german: "die Sekunde", english: "the second", category: "basic" },
    {
      german: "Wie spät ist es?",
      english: "What time is it?",
      category: "phrases",
    },
    {
      german: "Es ist ... Uhr",
      english: "It's ... o'clock",
      category: "phrases",
    },
    { german: "halb", english: "half past", category: "expressions" },
    { german: "Viertel", english: "quarter", category: "expressions" },
    { german: "vor", english: "to/before", category: "expressions" },
    { german: "nach", english: "past/after", category: "expressions" },
    { german: "genau", english: "exactly", category: "expressions" },
  ];

  // Time examples
  const timeExamples = [
    { time: "13:00", formal: "dreizehn Uhr", informal: "ein Uhr" },
    {
      time: "13:15",
      formal: "dreizehn Uhr fünfzehn",
      informal: "Viertel nach eins",
    },
    { time: "13:30", formal: "dreizehn Uhr dreißig", informal: "halb zwei" },
    {
      time: "13:45",
      formal: "dreizehn Uhr fünfundvierzig",
      informal: "Viertel vor zwei",
    },
    { time: "14:00", formal: "vierzehn Uhr", informal: "zwei Uhr" },
    { time: "18:30", formal: "achtzehn Uhr dreißig", informal: "halb sieben" },
  ];

  // Time rules
  const timeRules = [
    {
      title: isGerman ? "24-Stunden-Format" : "24-Hour Format",
      description: isGerman
        ? "In Deutschland wird meist das 24-Stunden-Format verwendet: 13:00, 14:30, etc."
        : "In Germany, the 24-hour format is commonly used: 13:00, 14:30, etc.",
      example: "13:00 → dreizehn Uhr",
    },
    {
      title: isGerman ? "Halb-Regel" : "Half Rule",
      description: isGerman
        ? "'Halb' bezieht sich auf die kommende Stunde: halb zwei = 1:30"
        : "'Halb' refers to the coming hour: halb zwei = 1:30",
      example: "1:30 → halb zwei",
    },
    {
      title: isGerman ? "Viertel-Ausdrücke" : "Quarter Expressions",
      description: isGerman
        ? "Viertel nach = :15, Viertel vor = :45"
        : "Viertel nach = :15, Viertel vor = :45",
      example: "2:15 → Viertel nach zwei",
    },
  ];

  // Speech synthesis function
  const speakGerman = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "basic":
        return "text-blue-600 dark:text-blue-400";
      case "phrases":
        return "text-green-600 dark:text-green-400";
      case "expressions":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  // Quiz questions for time
  const timeQuizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Was bedeutet 'halb zwei'?"
          : "What does 'halb zwei' mean?",
      options: ["2:30", "1:30", "2:15", "1:15"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'halb zwei' bedeutet 1:30. 'halb' bezieht sich auf die kommende Stunde."
          : "'halb zwei' means 1:30. 'halb' refers to the coming hour.",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man '2:15' informell?"
          : "How do you say '2:15' informally?",
      options: [
        "halb drei",
        "Viertel nach zwei",
        "Viertel vor drei",
        "zwei fünfzehn",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'2:15' ist 'Viertel nach zwei' - 15 Minuten nach 2 Uhr."
          : "'2:15' is 'Viertel nach zwei' - 15 minutes past 2 o'clock.",
    },
    {
      question:
        language === "de"
          ? "Was ist '13:45' informell?"
          : "What is '13:45' informally?",
      options: [
        "halb zwei",
        "Viertel vor zwei",
        "Viertel nach eins",
        "Viertel vor eins",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'13:45' ist 'Viertel vor zwei' (nachmittags). 15 Minuten vor 14:00."
          : "'13:45' is 'Viertel vor zwei' (afternoon). 15 minutes before 14:00.",
    },
    {
      question:
        language === "de"
          ? "Wie fragt man nach der Uhrzeit?"
          : "How do you ask for the time?",
      options: [
        "Wie geht es?",
        "Wie spät ist es?",
        "Was machst du?",
        "Wo ist die Uhr?",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Wie spät ist es?' ist die übliche Frage nach der Uhrzeit."
          : "'Wie spät ist es?' is the common way to ask for the time.",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man '18:30' formal?"
          : "How do you say '18:30' formally?",
      options: [
        "achtzehn Uhr dreißig",
        "sechs Uhr dreißig",
        "halb sieben",
        "halb achtzehn",
      ],
      correctAnswer: 0,
      explanation:
        language === "de"
          ? "Im 24-Stunden-Format: '18:30' ist 'achtzehn Uhr dreißig'."
          : "In 24-hour format: '18:30' is 'achtzehn Uhr dreißig'.",
    },
    {
      question:
        language === "de"
          ? "Was bedeutet 'Viertel vor' auf English?"
          : "What does 'Viertel vor' mean in English?",
      options: ["quarter past", "quarter to", "half past", "quarter hour"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Viertel vor' bedeutet 'quarter to' - 15 Minuten vor der vollen Stunde."
          : "'Viertel vor' means 'quarter to' - 15 minutes before the full hour.",
    },
    {
      question:
        language === "de"
          ? "Wie antwortet man auf 'Wie spät ist es?'"
          : "How do you answer 'Wie spät ist es?'",
      options: [
        "Mir geht es gut",
        "Es ist ... Uhr",
        "Ich habe Zeit",
        "Die Uhr ist kaputt",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "Man antwortet: 'Es ist ... Uhr' oder 'Es ist [Zeit]'."
          : "You answer: 'Es ist ... Uhr' or 'Es ist [time]'.",
    },
    {
      question:
        language === "de"
          ? "Was ist das deutsche Wort für 'minute'?"
          : "What is the German word for 'minute'?",
      options: ["die Stunde", "die Minute", "die Sekunde", "die Zeit"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'die Minute' ist das deutsche Wort für 'minute'."
          : "'die Minute' is the German word for 'minute'.",
    },
  ];

  return (
    <PageLayout>
      {/* Time Widget */}
      <TimeWidget
        currentTime={currentTime}
        language={language}
        setCurrentTime={setCurrentTime}
      />

      {/* Time Examples Section */}
      <Box
        title={isGerman ? "Zeitformate" : "Time Formats"}
        description={
          isGerman
            ? "Lernen Sie 12- und 24-Stunden-Formate im Deutschen"
            : "Learn 12 and 24-hour formats in German"
        }
        headerColor="blue"
      >
        <div className="space-y-4">
          {timeExamples.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {item.time}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Formal:</span>
                    <AudioButton
                      onClick={() => speakGerman(item.formal)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.formal}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Informal:</span>
                    <AudioButton
                      onClick={() => speakGerman(item.informal)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.informal}
                  </div>
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
                    title={t.ui.listen}
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
                  title={t.ui.listen}
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
        questions={timeQuizQuestions}
        subject={isGerman ? "Zeit" : "Time"}
      />
    </PageLayout>
  );
};

export default Time;
