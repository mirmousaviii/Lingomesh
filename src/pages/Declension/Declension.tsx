import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import GermanAdjectiveDeclensionWidget from "../../components/widgets/GermanAdjectiveDeclensionWidget/GermanAdjectiveDeclensionWidget";
import {
  QuizWidget,
  type QuizQuestion,
} from "../../components/widgets/QuizWidget";
import PageLayout from "../../components/layout/PageLayout";
import AudioButton from "../../components/ui/AudioButton/AudioButton";

interface DeclensionProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Declension: React.FC<DeclensionProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Quiz questions for declension
  const quizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Welche Endung hat 'gut' in 'der ___ Wein' (maskulin Nominativ)?"
          : "What ending does 'gut' have in 'der ___ Wein' (masculine nominative)?",
      options: ["-er", "-e", "-es", "-en"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "Nach dem bestimmten Artikel 'der' steht die schwache Deklination: '-e'."
          : "After the definite article 'der' comes weak declension: '-e'.",
    },
    {
      question:
        language === "de"
          ? "Welche Endung hat 'schön' in 'ein ___ Mann' (maskulin Nominativ)?"
          : "What ending does 'schön' have in 'ein ___ Mann' (masculine nominative)?",
      options: ["-er", "-e", "-es", "-en"],
      correctAnswer: 0,
      explanation:
        language === "de"
          ? "Nach dem unbestimmten Artikel 'ein' steht die gemischte Deklination: '-er'."
          : "After the indefinite article 'ein' comes mixed declension: '-er'.",
    },
    {
      question:
        language === "de"
          ? "Welche Endung hat 'klein' in 'das ___ Kind' (neutral Nominativ)?"
          : "What ending does 'klein' have in 'das ___ Kind' (neuter nominative)?",
      options: ["-er", "-e", "-es", "-en"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "Nach dem bestimmten Artikel 'das' steht die schwache Deklination: '-e'."
          : "After the definite article 'das' comes weak declension: '-e'.",
    },
    {
      question:
        language === "de"
          ? "Welche Deklination wird nach 'kein' verwendet?"
          : "Which declension is used after 'kein'?",
      options: ["Starke", "Schwache", "Gemischte", "Keine"],
      correctAnswer: 2,
      explanation:
        language === "de"
          ? "'Kein' verhält sich wie 'ein' und verlangt die gemischte Deklination."
          : "'Kein' behaves like 'ein' and requires mixed declension.",
    },
  ];

  // Declension types
  const declensionTypes = [
    {
      title: isGerman ? "Starke Deklination" : "Strong Declension",
      description: isGerman
        ? "Ohne Artikel oder nach unbestimmten Artikeln (ein, eine, ein)"
        : "Without articles or after indefinite articles (ein, eine, ein)",
      color: "from-blue-600 to-indigo-600",
      examples: [
        {
          german: "guter Wein",
          english: "good wine",
          case: "Nominativ maskulin",
        },
        {
          german: "eine schöne Frau",
          english: "a beautiful woman",
          case: "Nominativ feminin",
        },
        {
          german: "ein kleines Kind",
          english: "a small child",
          case: "Nominativ neutral",
        },
      ],
    },
    {
      title: isGerman ? "Schwache Deklination" : "Weak Declension",
      description: isGerman
        ? "Nach bestimmten Artikeln (der, die, das)"
        : "After definite articles (der, die, das)",
      color: "from-green-600 to-emerald-600",
      examples: [
        {
          german: "der gute Wein",
          english: "the good wine",
          case: "Nominativ maskulin",
        },
        {
          german: "die schöne Frau",
          english: "the beautiful woman",
          case: "Nominativ feminin",
        },
        {
          german: "das kleine Kind",
          english: "the small child",
          case: "Nominativ neutral",
        },
      ],
    },
    {
      title: isGerman ? "Gemischte Deklination" : "Mixed Declension",
      description: isGerman
        ? "Nach unbestimmten Artikeln im Nominativ und Akkusativ"
        : "After indefinite articles in nominative and accusative",
      color: "from-purple-600 to-pink-600",
      examples: [
        {
          german: "ein guter Wein",
          english: "a good wine",
          case: "Nominativ maskulin",
        },
        {
          german: "einen guten Wein",
          english: "a good wine",
          case: "Akkusativ maskulin",
        },
        {
          german: "einem guten Wein",
          english: "to a good wine",
          case: "Dativ maskulin",
        },
      ],
    },
  ];

  // Adjective endings table
  const adjectiveEndings = [
    {
      type: isGerman ? "Starke Deklination" : "Strong Declension",
      endings: {
        maskulin: { nom: "-er", akk: "-en", dat: "-em", gen: "-en" },
        feminin: { nom: "-e", akk: "-e", dat: "-er", gen: "-er" },
        neutral: { nom: "-es", akk: "-es", dat: "-em", gen: "-en" },
      },
    },
    {
      type: isGerman ? "Schwache Deklination" : "Weak Declension",
      endings: {
        maskulin: { nom: "-e", akk: "-en", dat: "-en", gen: "-en" },
        feminin: { nom: "-e", akk: "-e", dat: "-en", gen: "-en" },
        neutral: { nom: "-e", akk: "-e", dat: "-en", gen: "-en" },
      },
    },
  ];

  // Common adjectives
  const commonAdjectives = [
    { german: "groß", english: "big/large", category: "size" },
    { german: "klein", english: "small", category: "size" },
    { german: "alt", english: "old", category: "age" },
    { german: "neu", english: "new", category: "age" },
    { german: "gut", english: "good", category: "quality" },
    { german: "schlecht", english: "bad", category: "quality" },
    { german: "schön", english: "beautiful", category: "appearance" },
    { german: "hässlich", english: "ugly", category: "appearance" },
    { german: "schnell", english: "fast", category: "speed" },
    { german: "langsam", english: "slow", category: "speed" },
    { german: "warm", english: "warm", category: "temperature" },
    { german: "kalt", english: "cold", category: "temperature" },
  ];

  // Additional examples for practice
  const additionalExamples = [
    {
      category: isGerman ? "Größe & Aussehen" : "Size & Appearance",
      examples: [
        {
          german: "ein großer Mann",
          english: "a big man",
          declension: "mixed",
          case: "Nominativ maskulin",
        },
        {
          german: "die kleine Frau",
          english: "the small woman",
          declension: "weak",
          case: "Nominativ feminin",
        },
        {
          german: "schöne Blumen",
          english: "beautiful flowers",
          declension: "strong",
          case: "Nominativ plural",
        },
      ],
    },
    {
      category: isGerman ? "Alter & Qualität" : "Age & Quality",
      examples: [
        {
          german: "der alte Lehrer",
          english: "the old teacher",
          declension: "weak",
          case: "Nominativ maskulin",
        },
        {
          german: "ein neues Auto",
          english: "a new car",
          declension: "mixed",
          case: "Nominativ neutral",
        },
        {
          german: "gute Freunde",
          english: "good friends",
          declension: "strong",
          case: "Nominativ plural",
        },
      ],
    },
    {
      category: isGerman
        ? "Geschwindigkeit & Temperatur"
        : "Speed & Temperature",
      examples: [
        {
          german: "der schnelle Zug",
          english: "the fast train",
          declension: "weak",
          case: "Nominativ maskulin",
        },
        {
          german: "ein langsamer Bus",
          english: "a slow bus",
          declension: "mixed",
          case: "Nominativ maskulin",
        },
        {
          german: "warmes Wasser",
          english: "warm water",
          declension: "strong",
          case: "Nominativ neutral",
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "size":
        return "text-blue-600 dark:text-blue-400";
      case "age":
        return "text-green-600 dark:text-green-400";
      case "quality":
        return "text-purple-600 dark:text-purple-400";
      case "appearance":
        return "text-pink-600 dark:text-pink-400";
      case "speed":
        return "text-orange-600 dark:text-orange-400";
      case "temperature":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  const getDeclensionColor = (declension: string) => {
    switch (declension) {
      case "strong":
        return "text-blue-600 dark:text-blue-400";
      case "weak":
        return "text-green-600 dark:text-green-400";
      case "mixed":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-neutral-600 dark:text-neutral-400";
    }
  };

  return (
    <PageLayout
      widget={<GermanAdjectiveDeclensionWidget language={language} />}
      quizWidget={
        <QuizWidget
          language={language}
          questions={quizQuestions}
          subject="declension"
        />
      }
    >
      {/* Declension Types */}
      {declensionTypes.map((type, index) => (
        <div
          key={index}
          className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${type.color} px-6 py-4`}>
            <h2 className="text-xl font-bold text-white">{type.title}</h2>
            <p className="text-white/90 mt-1 text-sm">{type.description}</p>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {type.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                        {example.german}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                        {example.english}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {example.case}
                      </div>
                    </div>
                    <AudioButton
                      onClick={() => speakGerman(example.german)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Adjective Endings Table */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Adjektivendungen" : "Adjective Endings"}
          </h2>
          <p className="text-orange-100 mt-1 text-sm">
            {isGerman
              ? "Übersicht der Adjektivendungen"
              : "Overview of adjective endings"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {adjectiveEndings.map((declension, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                  {declension.type}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-700">
                        <th className="text-left py-2 text-neutral-700 dark:text-neutral-300">
                          {isGerman ? "Fall" : "Case"}
                        </th>
                        <th className="text-left py-2 text-blue-600 dark:text-blue-400">
                          {isGerman ? "Maskulin" : "Masculine"}
                        </th>
                        <th className="text-left py-2 text-pink-600 dark:text-pink-400">
                          {isGerman ? "Feminin" : "Feminine"}
                        </th>
                        <th className="text-left py-2 text-green-600 dark:text-green-400">
                          {isGerman ? "Neutral" : "Neuter"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-100 dark:border-neutral-800">
                        <td className="py-2 font-medium">Nominativ</td>
                        <td className="py-2 font-mono">
                          {declension.endings.maskulin.nom}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.feminin.nom}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.neutral.nom}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-100 dark:border-neutral-800">
                        <td className="py-2 font-medium">Akkusativ</td>
                        <td className="py-2 font-mono">
                          {declension.endings.maskulin.akk}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.feminin.akk}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.neutral.akk}
                        </td>
                      </tr>
                      <tr className="border-b border-neutral-100 dark:border-neutral-800">
                        <td className="py-2 font-medium">Dativ</td>
                        <td className="py-2 font-mono">
                          {declension.endings.maskulin.dat}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.feminin.dat}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.neutral.dat}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Genitiv</td>
                        <td className="py-2 font-mono">
                          {declension.endings.maskulin.gen}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.feminin.gen}
                        </td>
                        <td className="py-2 font-mono">
                          {declension.endings.neutral.gen}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Adjectives */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Häufige Adjektive" : "Common Adjectives"}
          </h2>
          <p className="text-indigo-100 mt-1 text-sm">
            {isGerman
              ? "Wichtige deutsche Adjektive"
              : "Important German adjectives"}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commonAdjectives.map((adjective, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div
                      className={`text-sm font-semibold ${getCategoryColor(
                        adjective.category
                      )} mb-1`}
                    >
                      {adjective.german}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {adjective.english}
                    </div>
                  </div>
                  <AudioButton
                    onClick={() => speakGerman(adjective.german)}
                    title={t.ui.listen}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Examples by Category */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Weitere Beispiele" : "Additional Examples"}
          </h2>
          <p className="text-teal-100 mt-1 text-sm">
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
                          className={`text-xs font-medium ${getDeclensionColor(
                            example.declension
                          )}`}
                        >
                          {example.declension} ({example.case})
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
            {isGerman ? "Deklinationen üben" : "Practice Declensions"}
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
                    <strong>Strong:</strong>{" "}
                    {isGerman
                      ? "Denke 'stark' = mehr Endungen"
                      : "Think 'strong' = more endings"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Weak:</strong>{" "}
                    {isGerman
                      ? "Denke 'schwach' = weniger Endungen (-e, -en)"
                      : "Think 'weak' = fewer endings (-e, -en)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Mixed:</strong>{" "}
                    {isGerman
                      ? "Kombiniert starke und schwache Muster"
                      : "Combines strong and weak patterns"}
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
                    <strong>-er:</strong>{" "}
                    {isGerman
                      ? "Maskulin Nominativ (stark/gemischt)"
                      : "Masculine nominative (strong/mixed)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>-e:</strong>{" "}
                    {isGerman
                      ? "Feminin Nominativ/Akkusativ"
                      : "Feminine nominative/accusative"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>-es:</strong>{" "}
                    {isGerman
                      ? "Neutrum Nominativ/Akkusativ (stark/gemischt)"
                      : "Neuter nominative/accusative (strong/mixed)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>-en:</strong>{" "}
                    {isGerman
                      ? "Dativ/Genitiv, Plural, schwache Deklination"
                      : "Dative/genitive, plural, weak declension"}
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

export default Declension;
