import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import DateWidget from "../../components/widgets/DateWidget/DateWidget";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import PageLayout from "../../components/layout/PageLayout";
import { QuizWidget, QuizQuestion } from "../../components/widgets/QuizWidget";
import { useState, useEffect } from "react";
import Box from "../../components/ui/Box/Box";

interface DatePageProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const DatePage: React.FC<DatePageProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";
  const [currentTime, setCurrentTime] = useState(() => new Date());

  // Update time every minute
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(() => new Date());
    }, 60000);
    return () => clearInterval(timeInterval);
  }, []);

  // Months in German
  const months = [
    { german: "Januar", english: "January", abbr: "Jan." },
    { german: "Februar", english: "February", abbr: "Feb." },
    { german: "März", english: "March", abbr: "Mär." },
    { german: "April", english: "April", abbr: "Apr." },
    { german: "Mai", english: "May", abbr: "Mai" },
    { german: "Juni", english: "June", abbr: "Jun." },
    { german: "Juli", english: "July", abbr: "Jul." },
    { german: "August", english: "August", abbr: "Aug." },
    { german: "September", english: "September", abbr: "Sep." },
    { german: "Oktober", english: "October", abbr: "Okt." },
    { german: "November", english: "November", abbr: "Nov." },
    { german: "Dezember", english: "December", abbr: "Dez." },
  ];

  // Days of the week in German
  const weekdays = [
    { german: "Montag", english: "Monday", abbr: "Mo." },
    { german: "Dienstag", english: "Tuesday", abbr: "Di." },
    { german: "Mittwoch", english: "Wednesday", abbr: "Mi." },
    { german: "Donnerstag", english: "Thursday", abbr: "Do." },
    { german: "Freitag", english: "Friday", abbr: "Fr." },
    { german: "Samstag", english: "Saturday", abbr: "Sa." },
    { german: "Sonntag", english: "Sunday", abbr: "So." },
  ];

  // Date expressions
  const dateExpressions = [
    { german: "heute", english: "today", category: "time" },
    { german: "gestern", english: "yesterday", category: "time" },
    { german: "morgen", english: "tomorrow", category: "time" },
    { german: "vorgestern", english: "day before yesterday", category: "time" },
    { german: "übermorgen", english: "day after tomorrow", category: "time" },
    { german: "diese Woche", english: "this week", category: "time" },
    { german: "nächste Woche", english: "next week", category: "time" },
    { german: "letzte Woche", english: "last week", category: "time" },
    {
      german: "Welches Datum ist heute?",
      english: "What date is today?",
      category: "questions",
    },
    {
      german: "Der wievielte ist heute?",
      english: "What day of the month is today?",
      category: "questions",
    },
    {
      german: "am ersten Mai",
      english: "on the first of May",
      category: "expressions",
    },
    {
      german: "im Jahr 2024",
      english: "in the year 2024",
      category: "expressions",
    },
  ];

  // Date format examples
  const dateFormats = [
    {
      format: "01.05.2024",
      spoken: "der erste Mai zweitausendvierundzwanzig",
      description: isGerman
        ? "Deutsches Format (Tag.Monat.Jahr)"
        : "German format (Day.Month.Year)",
    },
    {
      format: "1. Mai 2024",
      spoken: "der erste Mai zweitausendvierundzwanzig",
      description: isGerman ? "Ausgeschriebenes Datum" : "Written out date",
    },
    {
      format: "Montag, 1. Mai",
      spoken: "Montag, der erste Mai",
      description: isGerman ? "Mit Wochentag" : "With weekday",
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
      case "time":
        return "text-green-600 dark:text-green-400";
      case "questions":
        return "text-blue-600 dark:text-blue-400";
      case "expressions":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  // Quiz questions for date
  const dateQuizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Wie heißt 'March' auf Deutsch?"
          : "What is 'March' in German?",
      options: ["März", "Mai", "Mär", "Märt"],
      correctAnswer: 0,
      explanation:
        language === "de"
          ? "'March' heißt auf Deutsch 'März'."
          : "'March' in German is 'März'.",
    },
    {
      question:
        language === "de"
          ? "Was bedeutet 'übermorgen'?"
          : "What does 'übermorgen' mean?",
      options: [
        "yesterday",
        "tomorrow",
        "day after tomorrow",
        "day before yesterday",
      ],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "'übermorgen' bedeutet 'day after tomorrow' - der Tag nach morgen."
          : "'übermorgen' means 'day after tomorrow' - the day after tomorrow.",
    },
    {
      question:
        language === "de"
          ? "Welcher Tag ist 'Mittwoch'?"
          : "Which day is 'Mittwoch'?",
      options: ["Tuesday", "Wednesday", "Thursday", "Monday"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Mittwoch' ist 'Wednesday' - die Mitte der Woche."
          : "'Mittwoch' is 'Wednesday' - the middle of the week.",
    },
    {
      question:
        language === "de"
          ? "Wie fragt man auf Deutsch nach dem Datum?"
          : "How do you ask for the date in German?",
      options: [
        "Wie spät ist es?",
        "Welches Datum ist heute?",
        "Wo sind wir?",
        "Was machst du?",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Welches Datum ist heute?' ist die übliche Frage nach dem Datum."
          : "'Welches Datum ist heute?' is the common way to ask for the date.",
    },
    {
      question:
        language === "de"
          ? "Was ist das deutsche Format für '1. Mai 2024'?"
          : "What is the German format for 'May 1st, 2024'?",
      options: ["01/05/2024", "01.05.2024", "05.01.2024", "2024.05.01"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "Deutsches Datumsformat: Tag.Monat.Jahr → 01.05.2024"
          : "German date format: Day.Month.Year → 01.05.2024",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man 'yesterday' auf Deutsch?"
          : "How do you say 'yesterday' in German?",
      options: ["heute", "morgen", "gestern", "übermorgen"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "'yesterday' heißt auf Deutsch 'gestern'."
          : "'yesterday' in German is 'gestern'.",
    },
    {
      question:
        language === "de"
          ? "Was ist der erste Tag der Woche in Deutschland?"
          : "What is the first day of the week in Germany?",
      options: ["Sonntag", "Montag", "Samstag", "Dienstag"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "In Deutschland beginnt die Woche mit Montag."
          : "In Germany, the week starts with Monday.",
    },
    {
      question:
        language === "de"
          ? "Welcher Monat ist 'Dezember'?"
          : "Which month is 'Dezember'?",
      options: ["November", "December", "October", "January"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Dezember' ist 'December' - der letzte Monat des Jahres."
          : "'Dezember' is 'December' - the last month of the year.",
    },
  ];

  return (
    <PageLayout>
      {/* Date Widget */}
      <DateWidget
        currentTime={currentTime}
        language={language}
        setCurrentTime={setCurrentTime}
      />

      {/* Quiz Widget */}
      <QuizWidget
        language={language}
        questions={dateQuizQuestions}
        subject={isGerman ? "Datum" : "Date"}
      />
      {/* Date Formats Section */}
      <Box
        title={isGerman ? "Datumsformate" : "Date Formats"}
        description={
          isGerman
            ? "Deutsche Datumsangaben verstehen und verwenden"
            : "Understand and use German date formats"
        }
        headerColor="emerald"
      >
        <div className="space-y-4">
          {dateFormats.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    {item.format}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {item.description}
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Spoken:</span>
                    <AudioButton
                      onClick={() => speakGerman(item.spoken)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {item.spoken}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Months and Days Section */}
      <Box
        title={isGerman ? "Monate und Tage" : "Months and Days"}
        description={
          isGerman
            ? "Alle Monatsnamen und Wochentage auf Deutsch"
            : "All month names and weekdays in German"
        }
        headerColor="blue"
      >
        <div className="space-y-6">
          {/* Months */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              {isGerman ? "Monate" : "Months"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {months.map((month, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {month.german}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        {month.english} ({month.abbr})
                      </div>
                    </div>
                    <AudioButton
                      onClick={() => speakGerman(month.german)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekdays */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              {isGerman ? "Wochentage" : "Weekdays"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weekdays.map((day, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        {day.german}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        {day.english} ({day.abbr})
                      </div>
                    </div>
                    <AudioButton
                      onClick={() => speakGerman(day.german)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>

      {/* Date Expressions Section */}
      <Box
        title={isGerman ? "Datumsausdrücke" : "Date Expressions"}
        description={
          isGerman
            ? "Nützliche Ausdrücke für Datumsangaben"
            : "Useful expressions for dates"
        }
        headerColor="purple"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {dateExpressions.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
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
    </PageLayout>
  );
};

export default DatePage;
