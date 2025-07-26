import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import GermanVerbsPrepositionsWidget from "../../components/widgets/GermanVerbsPrepositionsWidget/GermanVerbsPrepositionsWidget";
import {
  QuizWidget,
  type QuizQuestion,
} from "../../components/widgets/QuizWidget";
import PageLayout from "../../components/layout/PageLayout";
import AudioButton from "../../components/ui/AudioButton/AudioButton";

interface PrepositionsProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Prepositions: React.FC<PrepositionsProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Quiz questions for prepositions
  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Welche Präposition ist richtig: 'Ich warte ___ den Bus'?"
          : "Which preposition is correct: 'Ich warte ___ den Bus'?",
      options: ["mit", "auf", "bei", "von"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Warten auf' ist eine feste Verb-Präposition-Kombination mit Akkusativ."
          : "'Warten auf' is a fixed verb-preposition combination with accusative.",
    },
    {
      question:
        language === "de"
          ? "Welcher Fall wird von 'mit' verlangt?"
          : "Which case does 'mit' require?",
      options: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "'Mit' ist eine Dativ-Präposition."
          : "'Mit' is a dative preposition.",
    },
    {
      question:
        language === "de"
          ? "Welche Präposition ist richtig: 'Ich denke ___ dich'?"
          : "Which preposition is correct: 'Ich denke ___ dich'?",
      options: ["für", "an", "bei", "zu"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Denken an' ist eine feste Verb-Präposition-Kombination mit Akkusativ."
          : "'Denken an' is a fixed verb-preposition combination with accusative.",
    },
    {
      question:
        language === "de"
          ? "Welche Präposition ist eine Wechselpräposition?"
          : "Which preposition is a two-way preposition?",
      options: ["für", "mit", "in", "bei"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "'In' ist eine Wechselpräposition, die Akkusativ oder Dativ verlangen kann."
          : "'In' is a two-way preposition that can require accusative or dative.",
    },
  ];

  // Preposition explanations
  const prepositionTypes = [
    {
      title: isGerman ? "Akkusativ-Präpositionen" : "Accusative Prepositions",
      description: isGerman
        ? "Diese Präpositionen verlangen immer den Akkusativ"
        : "These prepositions always require the accusative case",
      prepositions: ["für", "ohne", "um", "durch", "gegen", "bis"],
      example: "Ich kaufe ein Geschenk für dich.",
    },
    {
      title: isGerman ? "Dativ-Präpositionen" : "Dative Prepositions",
      description: isGerman
        ? "Diese Präpositionen verlangen immer den Dativ"
        : "These prepositions always require the dative case",
      prepositions: ["mit", "nach", "bei", "von", "zu", "aus"],
      example: "Ich gehe mit dir ins Kino.",
    },
    {
      title: isGerman ? "Wechselpräpositionen" : "Two-Way Prepositions",
      description: isGerman
        ? "Diese Präpositionen können Akkusativ oder Dativ verlangen"
        : "These prepositions can require either accusative or dative",
      prepositions: ["in", "an", "auf", "über", "unter", "vor"],
      example:
        "Ich gehe in die Stadt. (Akkusativ) / Ich bin in der Stadt. (Dativ)",
    },
  ];

  // Common verb-preposition combinations
  const verbPrepositions = [
    {
      verb: "denken an",
      english: "to think of",
      case: "Akkusativ",
      example: "Ich denke an dich.",
    },
    {
      verb: "warten auf",
      english: "to wait for",
      case: "Akkusativ",
      example: "Ich warte auf den Bus.",
    },
    {
      verb: "sprechen mit",
      english: "to speak with",
      case: "Dativ",
      example: "Ich spreche mit dem Lehrer.",
    },
    {
      verb: "helfen bei",
      english: "to help with",
      case: "Dativ",
      example: "Ich helfe dir bei den Hausaufgaben.",
    },
    {
      verb: "sich freuen über",
      english: "to be happy about",
      case: "Akkusativ",
      example: "Ich freue mich über das Geschenk.",
    },
    {
      verb: "sich freuen auf",
      english: "to look forward to",
      case: "Akkusativ",
      example: "Ich freue mich auf die Ferien.",
    },
    {
      verb: "sich interessieren für",
      english: "to be interested in",
      case: "Akkusativ",
      example: "Ich interessiere mich für Musik.",
    },
    {
      verb: "sich ärgern über",
      english: "to be angry about",
      case: "Akkusativ",
      example: "Ich ärgere mich über den Fehler.",
    },
  ];

  // Additional examples for practice
  const additionalExamples = [
    {
      category: isGerman ? "Emotionen" : "Emotions",
      examples: [
        {
          german: "Ich freue mich über das Geschenk.",
          english: "I'm happy about the gift.",
          preposition: "über",
          case: "Akkusativ",
        },
        {
          german: "Er ärgert sich über das Wetter.",
          english: "He's angry about the weather.",
          preposition: "über",
          case: "Akkusativ",
        },
        {
          german: "Sie freut sich auf die Reise.",
          english: "She's looking forward to the trip.",
          preposition: "auf",
          case: "Akkusativ",
        },
      ],
    },
    {
      category: isGerman ? "Kommunikation" : "Communication",
      examples: [
        {
          german: "Ich spreche mit meiner Mutter.",
          english: "I'm speaking with my mother.",
          preposition: "mit",
          case: "Dativ",
        },
        {
          german: "Er antwortet auf meine Frage.",
          english: "He answers my question.",
          preposition: "auf",
          case: "Akkusativ",
        },
        {
          german: "Sie denkt an ihre Kindheit.",
          english: "She thinks about her childhood.",
          preposition: "an",
          case: "Akkusativ",
        },
      ],
    },
    {
      category: isGerman ? "Hilfe & Unterstützung" : "Help & Support",
      examples: [
        {
          german: "Ich helfe dir bei der Arbeit.",
          english: "I help you with the work.",
          preposition: "bei",
          case: "Dativ",
        },
        {
          german: "Er dankt mir für die Hilfe.",
          english: "He thanks me for the help.",
          preposition: "für",
          case: "Akkusativ",
        },
        {
          german: "Sie kümmert sich um die Kinder.",
          english: "She takes care of the children.",
          preposition: "um",
          case: "Akkusativ",
        },
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

  const getCaseColor = (caseType: string) => {
    switch (caseType) {
      case "Akkusativ":
        return "text-green-600 dark:text-green-400";
      case "Dativ":
        return "text-blue-600 dark:text-blue-400";
      default:
        return "text-purple-600 dark:text-purple-400";
    }
  };

  return (
    <PageLayout
      widget={<GermanVerbsPrepositionsWidget language={language} />}
      quizWidget={
        <QuizWidget
          language={language}
          questions={quizQuestions}
          subject="prepositions"
        />
      }
    >
      {/* Preposition Types */}
      {prepositionTypes.map((type, index) => (
        <div
          key={index}
          className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        >
          <div
            className={`bg-gradient-to-r ${
              index === 0
                ? "from-green-600 to-emerald-600"
                : index === 1
                ? "from-blue-600 to-indigo-600"
                : "from-purple-600 to-pink-600"
            } px-6 py-4`}
          >
            <h2 className="text-xl font-bold text-white">{type.title}</h2>
            <p className="text-white/90 mt-1 text-sm">{type.description}</p>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {type.prepositions.map((prep, idx) => (
                  <div
                    key={idx}
                    className="bg-neutral-50 dark:bg-neutral-800 rounded-lg px-3 py-2 border border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {prep}
                      </span>
                      <AudioButton
                        onClick={() => speakGerman(prep)}
                        title={t.ui.listen}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {type.example}
                  </span>
                </div>
                <AudioButton
                  onClick={() => speakGerman(type.example)}
                  title={t.ui.listen}
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Verb-Preposition Combinations */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman
              ? "Verb-Präposition-Kombinationen"
              : "Verb-Preposition Combinations"}
          </h2>
          <p className="text-orange-100 mt-1 text-sm">
            {isGerman
              ? "Häufige Verben mit festen Präpositionen"
              : "Common verbs with fixed prepositions"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {verbPrepositions.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      {item.verb}
                    </span>
                    <span className="text-xs text-neutral-600 dark:text-neutral-400">
                      ({item.english})
                    </span>
                    <span
                      className={`text-xs font-medium ${getCaseColor(
                        item.case
                      )}`}
                    >
                      {item.case}
                    </span>
                  </div>
                  <AudioButton
                    onClick={() => speakGerman(item.verb)}
                    title={t.ui.listen}
                    size="sm"
                  />
                </div>
                <div className="bg-neutral-100 dark:bg-neutral-700 rounded-lg p-3 border border-neutral-200 dark:border-neutral-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-900 dark:text-neutral-100">
                      {item.example}
                    </span>
                    <AudioButton
                      onClick={() => speakGerman(item.example)}
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

      {/* Additional Examples by Category */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Weitere Beispiele" : "Additional Examples"}
          </h2>
          <p className="text-indigo-100 mt-1 text-sm">
            {isGerman
              ? "Beispiele nach Kategorien geordnet"
              : "Examples organized by categories"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {additionalExamples.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xs font-medium ${getCaseColor(
                            example.case
                          )}`}
                        >
                          {example.preposition} ({example.case})
                        </span>
                        <AudioButton
                          onClick={() => speakGerman(example.german)}
                          title={t.ui.listen}
                          size="sm"
                        />
                      </div>
                      <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">
                        {example.german}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        {example.english}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practice Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman
              ? "Verb-Präpositions-Kombinationen üben"
              : "Practice Verb-Preposition Combinations"}
          </h2>
          <p className="text-green-100 mt-1 text-sm">
            {isGerman
              ? "Gedächtnishilfen und Übungstipps"
              : "Memory tips and practice hints"}
          </p>
        </div>

        <div className="p-6">
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
                    <strong>auf + Akkusativ:</strong>{" "}
                    {isGerman
                      ? "Auf etwas warten (warten auf)"
                      : "Waiting for something (warten auf)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>an + Akkusativ:</strong>{" "}
                    {isGerman
                      ? "An etwas denken (denken an)"
                      : "Thinking about something (denken an)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>mit + Dativ:</strong>{" "}
                    {isGerman
                      ? "Etwas mit jemandem machen (sprechen mit)"
                      : "Doing something with someone (sprechen mit)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>für + Akkusativ:</strong>{" "}
                    {isGerman
                      ? "Für etwas/jemanden (sich interessieren für, danken für)"
                      : "For something/someone (sich interessieren für, danken für)"}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {isGerman ? "Häufige Muster" : "Common Patterns"}
              </h3>
              <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Emotions:</strong> sich freuen über, sich ärgern
                    über
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Communication:</strong> sprechen mit, antworten auf
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Help:</strong> helfen bei, danken für
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Interest:</strong> sich interessieren für, glauben
                    an
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Prepositions;
