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

  // Example numbers for learning (removed English translations)
  const basicNumbers = [
    { number: 0, german: "null" },
    { number: 1, german: "eins" },
    { number: 2, german: "zwei" },
    { number: 3, german: "drei" },
    { number: 4, german: "vier" },
    { number: 5, german: "fünf" },
    { number: 6, german: "sechs" },
    { number: 7, german: "sieben" },
    { number: 8, german: "acht" },
    { number: 9, german: "neun" },
    { number: 10, german: "zehn" },
    { number: 11, german: "elf" },
    { number: 12, german: "zwölf" },
    { number: 13, german: "dreizehn" },
    { number: 14, german: "vierzehn" },
    { number: 15, german: "fünfzehn" },
    { number: 16, german: "sechzehn" },
    { number: 17, german: "siebzehn" },
    { number: 18, german: "achtzehn" },
    { number: 19, german: "neunzehn" },
    { number: 20, german: "zwanzig" },
    { number: 21, german: "einundzwanzig" },
    { number: 22, german: "zweiundzwanzig" },
    { number: 23, german: "dreiundzwanzig" },
    { number: 24, german: "vierundzwanzig" },
    { number: 25, german: "fünfundzwanzig" },
    { number: 26, german: "sechsundzwanzig" },
    { number: 27, german: "siebenundzwanzig" },
    { number: 28, german: "achtundzwanzig" },
    { number: 29, german: "neunundzwanzig" },
    { number: 30, german: "dreißig" },
    { number: 40, german: "vierzig" },
    { number: 50, german: "fünfzig" },
    { number: 60, german: "sechzig" },
    { number: 70, german: "siebzig" },
    { number: 80, german: "achtzig" },
    { number: 90, german: "neunzig" },
    { number: 100, german: "hundert" },
    { number: 1000, german: "tausend" },
    { number: 10000, german: "zehntausend" },
    { number: 100000, german: "hunderttausend" },
    { number: 1000000, german: "eine Million" },
  ];

  const ordinalNumbers = [
    { number: "0.", german: "nullte" },
    { number: "1.", german: "erste" },
    { number: "2.", german: "zweite" },
    { number: "3.", german: "dritte" },
    { number: "4.", german: "vierte" },
    { number: "5.", german: "fünfte" },
    { number: "6.", german: "sechste" },
    { number: "7.", german: "siebte" },
    { number: "8.", german: "achte" },
    { number: "9.", german: "neunte" },
    { number: "10.", german: "zehnte" },
    { number: "11.", german: "elfte" },
    { number: "12.", german: "zwölfte" },
    { number: "13.", german: "dreizehnte" },
    { number: "14.", german: "vierzehnte" },
    { number: "15.", german: "fünfzehnte" },
    { number: "16.", german: "sechzehnte" },
    { number: "17.", german: "siebzehnte" },
    { number: "18.", german: "achtzehnte" },
    { number: "19.", german: "neunzehnte" },
    { number: "20.", german: "zwanzigste" },
    { number: "21.", german: "einundzwanzigste" },
    { number: "22.", german: "zweiundzwanzigste" },
    { number: "23.", german: "dreiundzwanzigste" },
    { number: "24.", german: "vierundzwanzigste" },
    { number: "25.", german: "fünfundzwanzigste" },
    { number: "26.", german: "sechsundzwanzigste" },
    { number: "27.", german: "siebenundzwanzigste" },
    { number: "28.", german: "achtundzwanzigste" },
    { number: "29.", german: "neunundzwanzigste" },
    { number: "30.", german: "dreißigste" },
    { number: "40.", german: "vierzigste" },
    { number: "50.", german: "fünfzigste" },
    { number: "60.", german: "sechzigste" },
    { number: "70.", german: "siebzigste" },
    { number: "80.", german: "achtzigste" },
    { number: "90.", german: "neunzigste" },
    { number: "100.", german: "hundertste" },
    { number: "1000.", german: "tausendste" },
    { number: "10000.", german: "zehntausendste" },
    { number: "100000.", german: "hunderttausendste" },
    { number: "1000000.", german: "millionste" },
  ];

  // Titles and subtitles from translations
  const basicNumbersTitle =
    t.numbers.basicNumbersTitle ||
    (language === "de" ? "Grundzahlen" : "Basic Numbers");
  const basicNumbersSubtitle =
    t.numbers.basicNumbersSubtitle ||
    (language === "de"
      ? "Die wichtigsten Zahlen im Deutschen"
      : "The most important numbers in German");
  const numberRulesTitle =
    t.numbers.numberRulesTitle ||
    (language === "de" ? "Zahlenregeln" : "Number Rules");
  const numberRulesSubtitle =
    t.numbers.numberRulesSubtitle ||
    (language === "de"
      ? "Wichtige Regeln für deutsche Zahlen"
      : "Important rules for German numbers");
  const ordinalNumbersTitle =
    t.numbers.ordinalNumbersTitle ||
    (language === "de" ? "Ordinalzahlen" : "Ordinal Numbers");
  const ordinalNumbersSubtitle =
    t.numbers.ordinalNumbersSubtitle ||
    (language === "de"
      ? "Erste, zweite, dritte... Lernen Sie die Ordinalzahlen"
      : "First, second, third... Learn the ordinal numbers");

  // Number rules from translations
  const numberRules = t.numbers.numberRules || [];

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
      options: ["zwanzigeins", "einzwanzig", "einundzwanzig", "zwanzigand"],
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
          <h2 className="text-xl font-bold text-white">{basicNumbersTitle}</h2>
          <p className="text-green-100 mt-1 text-sm">{basicNumbersSubtitle}</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {basicNumbers.map((item) => (
              <div
                key={item.number}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {item.number >= 1000
                      ? item.number.toLocaleString()
                      : item.number}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {item.german}
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
          <h2 className="text-xl font-bold text-white">{numberRulesTitle}</h2>
          <p className="text-accent-100 mt-1 text-sm">{numberRulesSubtitle}</p>
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
            {ordinalNumbersTitle}
          </h2>
          <p className="text-purple-100 mt-1 text-sm">
            {ordinalNumbersSubtitle}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {ordinalNumbers.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {item.number.replace(/\d+/, (match) => {
                      const num = parseInt(match);
                      return num >= 1000 ? num.toLocaleString() : match;
                    })}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    {item.german}
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
