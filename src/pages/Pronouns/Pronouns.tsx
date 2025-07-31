import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import GermanPersonalPronounsWidget from "../../components/widgets/GermanPersonalPronounsWidget/GermanPersonalPronounsWidget";
import {
  QuizWidget,
  type QuizQuestion,
} from "../../components/widgets/QuizWidget";
import PageLayout from "../../components/layout/PageLayout";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import Box from "../../components/ui/Box/Box";

interface PronounsProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Pronouns: React.FC<PronounsProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Pronoun cases
  const pronounCases = [
    {
      case: isGerman ? "Nominativ" : "Nominative",
      description: isGerman ? "Wer? (Subjekt)" : "Who? (Subject)",
      pronouns: [
        { german: "ich", english: "I" },
        { german: "du", english: "you (informal)" },
        { german: "er", english: "he" },
        { german: "sie", english: "she" },
        { german: "es", english: "it" },
        { german: "wir", english: "we" },
        { german: "ihr", english: "you (plural)" },
        { german: "sie", english: "they" },
        { german: "Sie", english: "you (formal)" },
      ],
    },
    {
      case: isGerman ? "Akkusativ" : "Accusative",
      description: isGerman
        ? "Wen? (Direktes Objekt)"
        : "Whom? (Direct Object)",
      pronouns: [
        { german: "mich", english: "me" },
        { german: "dich", english: "you" },
        { german: "ihn", english: "him" },
        { german: "sie", english: "her" },
        { german: "es", english: "it" },
        { german: "uns", english: "us" },
        { german: "euch", english: "you (plural)" },
        { german: "sie", english: "them" },
        { german: "Sie", english: "you (formal)" },
      ],
    },
    {
      case: isGerman ? "Dativ" : "Dative",
      description: isGerman
        ? "Wem? (Indirektes Objekt)"
        : "To whom? (Indirect Object)",
      pronouns: [
        { german: "mir", english: "to me" },
        { german: "dir", english: "to you" },
        { german: "ihm", english: "to him" },
        { german: "ihr", english: "to her" },
        { german: "ihm", english: "to it" },
        { german: "uns", english: "to us" },
        { german: "euch", english: "to you (plural)" },
        { german: "ihnen", english: "to them" },
        { german: "Ihnen", english: "to you (formal)" },
      ],
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

  // Quiz questions for pronouns
  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Welche Form hat 'ich' im Dativ?"
          : "What form does 'ich' have in dative?",
      options: ["ich", "mich", "mir", "mein"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "'Ich' wird zu 'mir' im Dativ."
          : "'Ich' becomes 'mir' in dative.",
    },
    {
      question:
        language === "de"
          ? "Welches Pronomen ist richtig: 'Ich gebe ___ das Buch' (to him)?"
          : "Which pronoun is correct: 'Ich gebe ___ das Buch' (to him)?",
      options: ["er", "ihn", "ihm", "sein"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "Nach 'geben' steht das indirekte Objekt im Dativ: 'ihm'."
          : "After 'geben' the indirect object is in dative: 'ihm'.",
    },
    {
      question:
        language === "de"
          ? "Was ist das Possessivpronomen für 'du'?"
          : "What is the possessive pronoun for 'du'?",
      options: ["dein", "dich", "dir", "du"],
      correctAnswer: 0,
      explanation:
        language === "de"
          ? "Das Possessivpronomen für 'du' ist 'dein'."
          : "The possessive pronoun for 'du' is 'dein'.",
    },
  ];

  return (
    <PageLayout>
      <GermanPersonalPronounsWidget language={language} />
      <QuizWidget
        language={language}
        questions={quizQuestions}
        subject="pronouns"
      />
      {/* Cases Overview */}
      {pronounCases.map((caseData, index) => (
        <Box
          key={index}
          title={caseData.case}
          description={caseData.description}
          headerColor={
            caseData.case.includes("Nominativ")
              ? "blue"
              : caseData.case.includes("Akkusativ")
              ? "green"
              : caseData.case.includes("Dativ")
              ? "purple"
              : "primary"
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {caseData.pronouns.map((pronoun, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {pronoun.german}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {pronoun.english}
                    </div>
                  </div>
                  <AudioButton
                    onClick={() => speakGerman(pronoun.german)}
                    title={t.ui.listen}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </Box>
      ))}

      {/* Usage Examples */}
      <Box
        title={isGerman ? "Verwendungsbeispiele" : "Usage Examples"}
        description={
          isGerman
            ? "Praktische Beispiele für Personalpronomen"
            : "Practical examples of personal pronouns"
        }
        headerColor="orange"
      >
        <div className="space-y-4">
          {[
            {
              german: "Ich sehe dich.",
              english: "I see you.",
              explanation: isGerman
                ? "Nominativ (ich) + Akkusativ (dich)"
                : "Nominative (ich) + Accusative (dich)",
            },
            {
              german: "Er gibt mir das Buch.",
              english: "He gives me the book.",
              explanation: isGerman
                ? "Nominativ (er) + Dativ (mir)"
                : "Nominative (er) + Dative (mir)",
            },
            {
              german: "Wir helfen ihnen.",
              english: "We help them.",
              explanation: isGerman
                ? "Nominativ (wir) + Dativ (ihnen)"
                : "Nominative (wir) + Dative (ihnen)",
            },
            {
              german: "Sie kennt uns sehr gut.",
              english: "She knows us very well.",
              explanation: isGerman
                ? "Nominativ (sie) + Akkusativ (uns)"
                : "Nominative (sie) + Accusative (uns)",
            },
          ].map((example, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {example.german}
                </span>
                <AudioButton
                  onClick={() => speakGerman(example.german)}
                  title={t.ui.listen}
                  size="sm"
                />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                {example.english}
              </div>
              <div className="text-xs text-orange-600 dark:text-orange-400">
                {example.explanation}
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Practice Section */}
      <Box
        title={isGerman ? "Pronomen üben" : "Practice Pronouns"}
        description={
          isGerman
            ? "Gedächtnishilfen und Übungstipps"
            : "Memory tips and practice hints"
        }
        headerColor="green"
      >
        <div className="space-y-6">
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              {isGerman ? "Gedächtnishilfen" : "Memory Tips"}
            </h3>
            <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-start space-x-2">
                <span className="text-green-600 dark:text-green-400 font-bold">
                  •
                </span>
                <div>
                  <strong>ich → mich:</strong>{" "}
                  {isGerman
                    ? "Denke 'ich' wird zu 'mich' im Akkusativ"
                    : "Think 'I' becomes 'me' in accusative"}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 dark:text-green-400 font-bold">
                  •
                </span>
                <div>
                  <strong>du → dich:</strong>{" "}
                  {isGerman
                    ? "Denke 'du' wird zu 'dich' (Objektform)"
                    : "Think 'you' becomes 'you' (object form)"}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 dark:text-green-400 font-bold">
                  •
                </span>
                <div>
                  <strong>er → ihn:</strong>{" "}
                  {isGerman
                    ? "Denke 'er' wird zu 'ihn' im Akkusativ"
                    : "Think 'he' becomes 'him' in accusative"}
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-green-600 dark:text-green-400 font-bold">
                  •
                </span>
                <div>
                  <strong>sie → ihr:</strong>{" "}
                  {isGerman
                    ? "Denke 'sie' wird zu 'ihr' im Dativ"
                    : "Think 'she' becomes 'her' in dative"}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              {isGerman ? "Häufige Muster" : "Common Patterns"}
            </h3>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <div>
                <strong>Nominativ:</strong> ich, du, er, sie, es, wir, ihr, sie,
                Sie
              </div>
              <div>
                <strong>Akkusativ:</strong> mich, dich, ihn, sie, es, uns, euch,
                sie, Sie
              </div>
              <div>
                <strong>Dativ:</strong> mir, dir, ihm, ihr, ihm, uns, euch,
                ihnen, Ihnen
              </div>
              <div>
                <strong>Genitiv:</strong> meiner, deiner, seiner, ihrer, seiner,
                unserer, eurer, ihrer, Ihrer
              </div>
            </div>
          </div>
        </div>
      </Box>

      {/* Examples Section */}
      <Box
        title={isGerman ? "Beispiele" : "Examples"}
        description={
          isGerman
            ? "Personalpronomen in verschiedenen Fällen"
            : "Personal pronouns in different cases"
        }
        headerColor="purple"
      >
        <div className="p-6">
          <div className="grid gap-8">
            {/* Nominativ Examples */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                {isGerman ? "Nominativ (Subjekt)" : "Nominative (Subject)"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    german: "Ich lerne Deutsch.",
                    english: "I learn German.",
                    pronoun: "ich",
                    explanation: "Subject of the sentence",
                  },
                  {
                    german: "Du bist nett.",
                    english: "You are nice.",
                    pronoun: "du",
                    explanation: "Subject of the sentence",
                  },
                  {
                    german: "Er arbeitet heute.",
                    english: "He works today.",
                    pronoun: "er",
                    explanation: "Subject of the sentence",
                  },
                  {
                    german: "Sie singt schön.",
                    english: "She sings beautifully.",
                    pronoun: "sie",
                    explanation: "Subject of the sentence",
                  },
                ].map((example, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          <span className="font-bold text-blue-600 dark:text-blue-400">
                            {example.pronoun}
                          </span>{" "}
                          {example.german.substring(example.pronoun.length)}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {example.english}
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                          {example.explanation}
                        </div>
                      </div>
                      <AudioButton
                        onClick={() => speakGerman(example.german)}
                        title={isGerman ? "Anhören" : "Listen"}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Akkusativ Examples */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                {isGerman
                  ? "Akkusativ (Direktes Objekt)"
                  : "Accusative (Direct Object)"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    german: "Er sieht mich.",
                    english: "He sees me.",
                    pronoun: "mich",
                    explanation: "Direct object",
                  },
                  {
                    german: "Ich kenne dich.",
                    english: "I know you.",
                    pronoun: "dich",
                    explanation: "Direct object",
                  },
                  {
                    german: "Wir treffen ihn.",
                    english: "We meet him.",
                    pronoun: "ihn",
                    explanation: "Direct object",
                  },
                  {
                    german: "Ich rufe sie an.",
                    english: "I call her.",
                    pronoun: "sie",
                    explanation: "Direct object",
                  },
                ].map((example, index) => (
                  <div
                    key={index}
                    className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {example.german.split(example.pronoun)[0]}
                          <span className="font-bold text-red-600 dark:text-red-400">
                            {example.pronoun}
                          </span>
                          {example.german.split(example.pronoun)[1]}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {example.english}
                        </div>
                        <div className="text-xs text-red-600 dark:text-red-400 mt-2">
                          {example.explanation}
                        </div>
                      </div>
                      <AudioButton
                        onClick={() => speakGerman(example.german)}
                        title={isGerman ? "Anhören" : "Listen"}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dativ Examples */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                {isGerman
                  ? "Dativ (Indirektes Objekt)"
                  : "Dative (Indirect Object)"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    german: "Er gibt mir ein Buch.",
                    english: "He gives me a book.",
                    pronoun: "mir",
                    explanation: "Indirect object",
                  },
                  {
                    german: "Ich helfe dir.",
                    english: "I help you.",
                    pronoun: "dir",
                    explanation: "Indirect object",
                  },
                  {
                    german: "Sie gibt ihm einen Kaffee.",
                    english: "She gives him a coffee.",
                    pronoun: "ihm",
                    explanation: "Indirect object",
                  },
                  {
                    german: "Er schenkt ihr Blumen.",
                    english: "He gives her flowers.",
                    pronoun: "ihr",
                    explanation: "Indirect object",
                  },
                ].map((example, index) => (
                  <div
                    key={index}
                    className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {example.german.split(example.pronoun)[0]}
                          <span className="font-bold text-green-600 dark:text-green-400">
                            {example.pronoun}
                          </span>
                          {example.german.split(example.pronoun)[1]}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {example.english}
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                          {example.explanation}
                        </div>
                      </div>
                      <AudioButton
                        onClick={() => speakGerman(example.german)}
                        title={isGerman ? "Anhören" : "Listen"}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </PageLayout>
  );
};

export default Pronouns;
