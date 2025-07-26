import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import GermanQuestionsWidget, {
  questionQuizQuestions,
} from "../../components/widgets/GermanQuestionsWidget/GermanQuestionsWidget";
import {
  QuizWidget,
  type QuizQuestion,
} from "../../components/widgets/QuizWidget";
import PageLayout from "../../components/layout/PageLayout";
import AudioButton from "../../components/ui/AudioButton/AudioButton";

interface QuestionsProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Questions: React.FC<QuestionsProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Question words (W-Fragen)
  const questionWords = [
    {
      german: "Wer?",
      english: "Who?",
      usage: isGerman ? "Person (Nominativ)" : "Person (Nominative)",
    },
    {
      german: "Wen?",
      english: "Whom?",
      usage: isGerman ? "Person (Akkusativ)" : "Person (Accusative)",
    },
    {
      german: "Wem?",
      english: "To whom?",
      usage: isGerman ? "Person (Dativ)" : "Person (Dative)",
    },
    {
      german: "Was?",
      english: "What?",
      usage: isGerman ? "Sache/Objekt" : "Thing/Object",
    },
    {
      german: "Wo?",
      english: "Where?",
      usage: isGerman ? "Ort (Position)" : "Place (Position)",
    },
    {
      german: "Wohin?",
      english: "Where to?",
      usage: isGerman ? "Richtung" : "Direction",
    },
    {
      german: "Woher?",
      english: "Where from?",
      usage: isGerman ? "Herkunft" : "Origin",
    },
    { german: "Wann?", english: "When?", usage: isGerman ? "Zeit" : "Time" },
    {
      german: "Wie?",
      english: "How?",
      usage: isGerman ? "Art und Weise" : "Manner",
    },
    {
      german: "Wie viel?",
      english: "How much?",
      usage: isGerman ? "Menge (unzählbar)" : "Amount (uncountable)",
    },
    {
      german: "Wie viele?",
      english: "How many?",
      usage: isGerman ? "Anzahl (zählbar)" : "Number (countable)",
    },
    { german: "Warum?", english: "Why?", usage: isGerman ? "Grund" : "Reason" },
    {
      german: "Wieso?",
      english: "Why?",
      usage: isGerman ? "Grund (umgangssprachlich)" : "Reason (colloquial)",
    },
    {
      german: "Weshalb?",
      english: "Why?",
      usage: isGerman ? "Grund (formal)" : "Reason (formal)",
    },
  ];

  // Yes/No questions
  const yesNoQuestions = [
    {
      german: "Bist du müde?",
      english: "Are you tired?",
      pattern: isGerman
        ? "Verb + Subjekt + Adjektiv?"
        : "Verb + Subject + Adjective?",
    },
    {
      german: "Hast du Zeit?",
      english: "Do you have time?",
      pattern: isGerman
        ? "Hilfsverb + Subjekt + Objekt?"
        : "Auxiliary verb + Subject + Object?",
    },
    {
      german: "Gehst du ins Kino?",
      english: "Are you going to the cinema?",
      pattern: isGerman
        ? "Verb + Subjekt + Präposition + Objekt?"
        : "Verb + Subject + Preposition + Object?",
    },
    {
      german: "Kannst du mir helfen?",
      english: "Can you help me?",
      pattern: isGerman
        ? "Modalverb + Subjekt + Dativ + Infinitiv?"
        : "Modal verb + Subject + Dative + Infinitive?",
    },
  ];

  // Question formation rules
  const questionRules = [
    {
      title: isGerman ? "W-Fragen" : "Wh-Questions",
      description: isGerman
        ? "Beginnen mit einem Fragewort (W-Wort), dann folgt das Verb."
        : "Begin with a question word (W-word), followed by the verb.",
      example: "Was machst du? (What are you doing?)",
    },
    {
      title: isGerman ? "Ja/Nein-Fragen" : "Yes/No Questions",
      description: isGerman
        ? "Beginnen mit dem Verb, das Subjekt folgt danach."
        : "Begin with the verb, followed by the subject.",
      example: "Kommst du heute? (Are you coming today?)",
    },
    {
      title: isGerman ? "Indirekte Fragen" : "Indirect Questions",
      description: isGerman
        ? "Das Verb steht am Ende des Satzes."
        : "The verb goes to the end of the sentence.",
      example: "Ich frage, ob du kommst. (I ask if you're coming.)",
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

  // Convert questionQuizQuestions to QuizQuestion format
  const quizQuestions: QuizQuestion[] = questionQuizQuestions.map((q) => ({
    question: language === "de" ? q.question : q.questionEn,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: language === "de" ? q.explanation : q.explanationEn,
  }));

  return (
    <PageLayout
      widget={<GermanQuestionsWidget language={language} />}
      quizWidget={
        <QuizWidget
          language={language}
          questions={quizQuestions}
          subject="questions"
        />
      }
    >
      {/* Question Words Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Fragewörter" : "Question Words"}
          </h2>
          <p className="text-blue-100 mt-1 text-sm">
            {isGerman
              ? "Wichtige W-Fragen im Deutschen"
              : "Important W-questions in German"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {questionWords.map((word, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {word.german}
                      </span>
                      <span className="text-sm text-neutral-900 dark:text-neutral-100">
                        {word.english}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {word.usage}
                    </div>
                  </div>
                  <AudioButton
                    onClick={() => speakGerman(word.german)}
                    title={t.ui.listen}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Question Formation Rules */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Fragebildung" : "Question Formation"}
          </h2>
          <p className="text-green-100 mt-1 text-sm">
            {isGerman
              ? "Regeln für die Bildung von Fragen"
              : "Rules for forming questions"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {questionRules.map((rule, index) => (
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
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-green-700 dark:text-green-300">
                      {rule.example}
                    </span>
                    <AudioButton
                      onClick={() => speakGerman(rule.example.split(" (")[0])}
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

      {/* Yes/No Questions Examples */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Ja/Nein-Fragen" : "Yes/No Questions"}
          </h2>
          <p className="text-purple-100 mt-1 text-sm">
            {isGerman
              ? "Beispiele für Ja/Nein-Fragen"
              : "Examples of Yes/No questions"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {yesNoQuestions.map((question, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {question.german}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(question.german)}
                    title={t.ui.listen}
                    size="sm"
                  />
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  {question.english}
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400">
                  {question.pattern}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Questions;
