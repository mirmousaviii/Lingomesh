import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import NumberConverterWidget from "../../components/widgets/NumberConverterWidget/NumberConverterWidget";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import PageLayout from "../../components/layout/PageLayout";
import { QuizWidget, QuizQuestion } from "../../components/widgets/QuizWidget";

interface NumbersProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Numbers: React.FC<NumbersProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Example numbers for learning
  const basicNumbers = [
    { number: 0, german: "null", english: "zero" },
    { number: 1, german: "eins", english: "one" },
    { number: 2, german: "zwei", english: "two" },
    { number: 3, german: "drei", english: "three" },
    { number: 4, german: "vier", english: "four" },
    { number: 5, german: "fünf", english: "five" },
    { number: 6, german: "sechs", english: "six" },
    { number: 7, german: "sieben", english: "seven" },
    { number: 8, german: "acht", english: "eight" },
    { number: 9, german: "neun", english: "nine" },
    { number: 10, german: "zehn", english: "ten" },
    { number: 11, german: "elf", english: "eleven" },
    { number: 12, german: "zwölf", english: "twelve" },
    { number: 13, german: "dreizehn", english: "thirteen" },
    { number: 20, german: "zwanzig", english: "twenty" },
    { number: 21, german: "einundzwanzig", english: "twenty-one" },
    { number: 30, german: "dreißig", english: "thirty" },
    { number: 100, german: "hundert", english: "one hundred" },
    { number: 1000, german: "tausend", english: "one thousand" },
  ];

  const ordinalNumbers = [
    { number: "1.", german: "erste", english: "first" },
    { number: "2.", german: "zweite", english: "second" },
    { number: "3.", german: "dritte", english: "third" },
    { number: "4.", german: "vierte", english: "fourth" },
    { number: "5.", german: "fünfte", english: "fifth" },
    { number: "10.", german: "zehnte", english: "tenth" },
    { number: "20.", german: "zwanzigste", english: "twentieth" },
    { number: "100.", german: "hundertste", english: "hundredth" },
  ];

  const numberRules = [
    {
      title: isGerman ? "Einer kommen zuerst" : "Units come first",
      description: isGerman
        ? "Bei zweistelligen Zahlen wird die Einerstelle vor der Zehnerstelle gesprochen: 21 = einundzwanzig"
        : "In two-digit numbers, the units are spoken before the tens: 21 = einundzwanzig",
      example: "21 → ein-und-zwanzig",
    },
    {
      title: isGerman ? "Dreißig ist anders" : "Thirty is different",
      description: isGerman
        ? "30 heißt 'dreißig', nicht 'dreizig'"
        : "30 is called 'dreißig', not 'dreizig'",
      example: "30 → dreißig",
    },
    {
      title: isGerman ? "Hundert ohne 'ein'" : "Hundred without 'ein'",
      description: isGerman
        ? "100 heißt einfach 'hundert', nicht 'einhundert'"
        : "100 is simply 'hundert', not 'einhundert'",
      example: "100 → hundert",
    },
    {
      title: isGerman ? "Ordinalzahlen enden auf -te" : "Ordinals end in -te",
      description: isGerman
        ? "Ordinalzahlen enden meist auf -te: erste, zweite, dritte"
        : "Ordinal numbers usually end in -te: erste, zweite, dritte",
      example: "1. → erste, 2. → zweite",
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

  // Quiz questions for numbers
  const numberQuizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Wie sagt man '17' auf Deutsch?"
          : "How do you say '17' in German?",
      options: ["siebzehn", "siebenzehn", "siebenundzehn", "zehnsieben"],
      correctAnswer: 0,
      explanation:
        language === "de"
          ? "'17' heißt 'siebzehn' - eine der wenigen Ausnahmen bei der Zahlenbildung."
          : "'17' is 'siebzehn' - one of the few exceptions in number formation.",
    },
    {
      question:
        language === "de"
          ? "Wie wird '21' auf Deutsch ausgesprochen?"
          : "How is '21' pronounced in German?",
      options: ["zwanzigeins", "einzwanzig", "einundzwanzig", "zwanzigund"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "Bei zweistelligen Zahlen kommt die Einerstelle zuerst: 'einundzwanzig'."
          : "In two-digit numbers, the units come first: 'einundzwanzig'.",
    },
    {
      question:
        language === "de"
          ? "Was ist das deutsche Wort für '30'?"
          : "What is the German word for '30'?",
      options: ["dreizig", "dreißig", "dreiundzwanzig", "dreizehn"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'30' heißt 'dreißig' (mit ß), nicht 'dreizig'."
          : "'30' is 'dreißig' (with ß), not 'dreizig'.",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man '100' auf Deutsch?"
          : "How do you say '100' in German?",
      options: ["einhundert", "hundert", "zehnhundert", "tausend"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'100' heißt einfach 'hundert', ohne 'ein' davor."
          : "'100' is simply 'hundert', without 'ein' before it.",
    },
    {
      question:
        language === "de"
          ? "Was ist 'zweite' für eine Art von Zahl?"
          : "What type of number is 'zweite'?",
      options:
        language === "de"
          ? ["Grundzahl", "Ordinalzahl", "Bruchzahl", "Dezimalzahl"]
          : ["Cardinal", "Ordinal", "Fraction", "Decimal"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'zweite' ist eine Ordinalzahl (2.). Ordinalzahlen enden meist auf -te."
          : "'zweite' is an ordinal number (2nd). Ordinal numbers usually end in -te.",
    },
    {
      question:
        language === "de"
          ? "Wie wird '56' auf Deutsch geschrieben?"
          : "How is '56' written in German?",
      options: [
        "fünfzigsechs",
        "sechsundfünfzig",
        "fünfundsechzig",
        "sechsfünfzig",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'56' = sechs-und-fünfzig. Die Einerstelle (sechs) kommt zuerst."
          : "'56' = sechs-und-fünfzig. The units (sechs) come first.",
    },
    {
      question:
        language === "de"
          ? "Was ist die Ordinalzahl für '1.'?"
          : "What is the ordinal number for '1st'?",
      options: ["eins", "erste", "ein", "erstes"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "Die Ordinalzahl für '1.' ist 'erste' (maskulin/feminin) oder 'erstes' (neutrum)."
          : "The ordinal number for '1st' is 'erste' (masculine/feminine) or 'erstes' (neuter).",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man '1000' auf Deutsch?"
          : "How do you say '1000' in German?",
      options: ["eintausend", "tausend", "zehnhundert", "hundertzehn"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'1000' heißt 'tausend', ohne 'ein' davor."
          : "'1000' is 'tausend', without 'ein' before it.",
    },
  ];

  // Quiz questions are already mapped based on language
  const mappedQuizQuestions = numberQuizQuestions;

  return (
    <PageLayout
      widget={<NumberConverterWidget language={language} />}
      quizWidget={
        <QuizWidget
          language={language}
          questions={mappedQuizQuestions}
          subject={isGerman ? "Zahlen" : "Numbers"}
        />
      }
    >
      {/* Basic Numbers Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Grundzahlen" : "Basic Numbers"}
          </h2>
          <p className="text-green-100 mt-1 text-sm">
            {isGerman
              ? "Die wichtigsten Zahlen im Deutschen"
              : "The most important numbers in German"}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {basicNumbers.map((item) => (
              <div
                key={item.number}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-1">
                      {item.number}
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
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
        </div>
      </div>

      {/* Number Rules Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-accent-600 to-primary-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Zahlenregeln" : "Number Rules"}
          </h2>
          <p className="text-accent-100 mt-1 text-sm">
            {isGerman
              ? "Wichtige Regeln für deutsche Zahlen"
              : "Important rules for German numbers"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {numberRules.map((rule, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
              >
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  {rule.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {rule.description}
                </p>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3 border border-primary-200 dark:border-primary-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-primary-700 dark:text-primary-300">
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
        </div>
      </div>

      {/* Ordinal Numbers Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Ordinalzahlen" : "Ordinal Numbers"}
          </h2>
          <p className="text-purple-100 mt-1 text-sm">
            {isGerman
              ? "Erste, zweite, dritte... Lernen Sie die Ordinalzahlen"
              : "First, second, third... Learn the ordinal numbers"}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ordinalNumbers.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">
                      {item.number}
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
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
        </div>
      </div>
    </PageLayout>
  );
};

export default Numbers;
