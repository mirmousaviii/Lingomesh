import { Language } from "../../hooks/useTranslations";
import { useModuleTranslations } from "../../hooks/useModuleTranslations";
import { NumbersTranslations } from "./translations";
import { UITranslations } from "../../components/ui/translations";
import NumberConverterWidget from "./widgets/NumberConverterWidget/NumberConverterWidget";
import BasicNumbersWidget from "./widgets/BasicNumbersWidget/BasicNumbersWidget";
import OrdinalNumbersWidget from "./widgets/OrdinalNumbersWidget/OrdinalNumbersWidget";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import QuizWidget from "./widgets/QuizWidget/QuizWidget";
import type { QuizQuestion } from "../../components/widgets/QuizWidget/QuizWidget";
import PageLayout from "../../components/layout/PageLayout";
import Box from "../../components/ui/Box/Box";

interface NumbersProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Numbers: React.FC<NumbersProps> = ({ language }) => {
  const t = useModuleTranslations<NumbersTranslations>("numbers", language);
  const ui = useModuleTranslations<UITranslations>("ui", language);
  const isGerman = language === "de";

  // Titles and subtitles from translations
  const numberRulesTitle = t?.numberRulesTitle || "Number Rules";
  const numberRulesSubtitle =
    t?.numberRulesSubtitle || "Important rules for German numbers";
  const decimalNumbersTitle = t?.decimalNumbersTitle || "Decimal Numbers";
  const decimalNumbersSubtitle =
    t?.decimalNumbersSubtitle ||
    "How to read and write decimal numbers in German";
  const mathOperatorsTitle = t?.mathOperatorsTitle || "Mathematical Operators";
  const mathOperatorsSubtitle =
    t?.mathOperatorsSubtitle || "Basic mathematical operations in German";

  // Number rules from translations
  const numberRules = t?.numberRules || [];
  const decimalRules = t?.decimalRules || [];
  const mathOperators = t?.mathOperators || [];

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
    <PageLayout>
      {/* Number Converter Widget */}
      <NumberConverterWidget language={language} />

      {/* Basic Numbers Widget */}
      <BasicNumbersWidget language={language} />

      {/* Number Rules Section */}
      <Box
        title={numberRulesTitle}
        description={numberRulesSubtitle}
        headerColor="primary"
      >
        <div className="space-y-4">
          {numberRules.map((rule, index) => (
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
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-md p-3 border border-primary-200 dark:border-primary-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary-700 dark:text-primary-300">
                    {rule.example}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(rule.example.split(" → ")[1])}
                    title={ui?.listen || "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Decimal Numbers Section */}
      <Box
        title={decimalNumbersTitle}
        description={decimalNumbersSubtitle}
        headerColor="purple"
      >
        <div className="space-y-4">
          {decimalRules.map((rule, index) => (
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
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-md p-3 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-purple-700 dark:text-purple-300">
                    {rule.example}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(rule.example.split(" → ")[1])}
                    title={ui?.listen || "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Mathematical Operators Section */}
      <Box
        title={mathOperatorsTitle}
        description={mathOperatorsSubtitle}
        headerColor="green"
      >
        <div className="space-y-4">
          {mathOperators.map((operator, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {operator.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {operator.description}
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-3 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-green-700 dark:text-green-300">
                    {operator.example}
                  </span>
                  <AudioButton
                    onClick={() =>
                      speakGerman(operator.example.split(" → ")[1])
                    }
                    title={ui?.listen || "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Ordinal Numbers Widget */}
      <OrdinalNumbersWidget language={language} />

      {/* Quiz Widget */}
      <QuizWidget
        language={language}
        questions={mappedQuizQuestions}
        subject={isGerman ? "Zahlen" : "Numbers"}
      />
    </PageLayout>
  );
};

export default Numbers;
