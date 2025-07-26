import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import VerbConjugationWidget, {
  verbQuizQuestions,
} from "../../components/widgets/VerbConjugationWidget/VerbConjugationWidget";
import {
  QuizWidget,
  type QuizQuestion,
} from "../../components/widgets/QuizWidget";
import PageLayout from "../../components/layout/PageLayout";
import AudioButton from "../../components/ui/AudioButton/AudioButton";

interface VerbsProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Verbs: React.FC<VerbsProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Verb conjugation explanations
  const verbRules = [
    {
      title: isGerman ? "Regelmäßige Verben" : "Regular Verbs",
      description: isGerman
        ? "Regelmäßige Verben folgen einem festen Muster bei der Konjugation."
        : "Regular verbs follow a fixed pattern in conjugation.",
      example: "machen → ich mache, du machst, er macht",
    },
    {
      title: isGerman ? "Unregelmäßige Verben" : "Irregular Verbs",
      description: isGerman
        ? "Unregelmäßige Verben ändern ihren Stamm bei der Konjugation."
        : "Irregular verbs change their stem during conjugation.",
      example: "sein → ich bin, du bist, er ist",
    },
    {
      title: isGerman ? "Starke Verben" : "Strong Verbs",
      description: isGerman
        ? "Starke Verben ändern den Vokal im Stamm (Ablaut)."
        : "Strong verbs change the vowel in the stem (ablaut).",
      example: "fahren → ich fahre, du fährst, er fährt",
    },
  ];

  // Common verbs
  const commonVerbs = [
    { infinitive: "sein", english: "to be", ich: "bin", du: "bist", er: "ist" },
    {
      infinitive: "haben",
      english: "to have",
      ich: "habe",
      du: "hast",
      er: "hat",
    },
    {
      infinitive: "machen",
      english: "to do/make",
      ich: "mache",
      du: "machst",
      er: "macht",
    },
    {
      infinitive: "gehen",
      english: "to go",
      ich: "gehe",
      du: "gehst",
      er: "geht",
    },
    {
      infinitive: "kommen",
      english: "to come",
      ich: "komme",
      du: "kommst",
      er: "kommt",
    },
    {
      infinitive: "sehen",
      english: "to see",
      ich: "sehe",
      du: "siehst",
      er: "sieht",
    },
    {
      infinitive: "wissen",
      english: "to know",
      ich: "weiß",
      du: "weißt",
      er: "weiß",
    },
    {
      infinitive: "sprechen",
      english: "to speak",
      ich: "spreche",
      du: "sprichst",
      er: "spricht",
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

  // Convert verbQuizQuestions to QuizQuestion format
  const quizQuestions: QuizQuestion[] = verbQuizQuestions.map((q) => ({
    question: language === "de" ? q.question : q.questionEn,
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: language === "de" ? q.explanation : q.explanationEn,
  }));

  return (
    <PageLayout
      widget={<VerbConjugationWidget language={language} />}
      quizWidget={
        <QuizWidget
          language={language}
          questions={quizQuestions}
          subject="verbs"
        />
      }
    >
      {/* Verb Rules Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Konjugationsregeln" : "Conjugation Rules"}
          </h2>
          <p className="text-green-100 mt-1 text-sm">
            {isGerman
              ? "Grundlegende Regeln für deutsche Verben"
              : "Basic rules for German verbs"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {verbRules.map((rule, index) => (
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
                      onClick={() =>
                        speakGerman(
                          rule.example.split(" → ")[1] || rule.example
                        )
                      }
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

      {/* Common Verbs Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Häufige Verben" : "Common Verbs"}
          </h2>
          <p className="text-blue-100 mt-1 text-sm">
            {isGerman
              ? "Die wichtigsten deutschen Verben"
              : "The most important German verbs"}
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {commonVerbs.map((verb, index) => (
              <div
                key={index}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {verb.infinitive}
                      </span>
                      <span className="text-xs text-neutral-600 dark:text-neutral-400 ml-2">
                        ({verb.english})
                      </span>
                    </div>
                    <AudioButton
                      onClick={() => speakGerman(verb.infinitive)}
                      title={t.ui.listen}
                      size="sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-neutral-100 dark:bg-neutral-700 rounded p-2 text-center">
                    <div className="text-xs text-neutral-500 mb-1">ich</div>
                    <div className="font-mono text-neutral-900 dark:text-neutral-100">
                      {verb.ich}
                    </div>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700 rounded p-2 text-center">
                    <div className="text-xs text-neutral-500 mb-1">du</div>
                    <div className="font-mono text-neutral-900 dark:text-neutral-100">
                      {verb.du}
                    </div>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-700 rounded p-2 text-center">
                    <div className="text-xs text-neutral-500 mb-1">
                      er/sie/es
                    </div>
                    <div className="font-mono text-neutral-900 dark:text-neutral-100">
                      {verb.er}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Personal Pronouns Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Personalpronomen" : "Personal Pronouns"}
          </h2>
          <p className="text-purple-100 mt-1 text-sm">
            {isGerman
              ? "Pronomen für die Verbkonjugation"
              : "Pronouns for verb conjugation"}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {isGerman ? "Singular" : "Singular"}
              </h3>
              <div className="space-y-2">
                {[
                  { german: "ich", english: "I" },
                  { german: "du", english: "you (informal)" },
                  { german: "er/sie/es", english: "he/she/it" },
                ].map((pronoun, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {pronoun.german}
                        </span>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400 ml-2">
                          ({pronoun.english})
                        </span>
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
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {isGerman ? "Plural" : "Plural"}
              </h3>
              <div className="space-y-2">
                {[
                  { german: "wir", english: "we" },
                  { german: "ihr", english: "you (informal plural)" },
                  { german: "sie/Sie", english: "they/you (formal)" },
                ].map((pronoun, index) => (
                  <div
                    key={index}
                    className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-2 border border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {pronoun.german}
                        </span>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400 ml-2">
                          ({pronoun.english})
                        </span>
                      </div>
                      <AudioButton
                        onClick={() =>
                          speakGerman(pronoun.german.split("/")[0])
                        }
                        title={t.ui.listen}
                        size="sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Verbkonjugationen üben" : "Practice Verb Conjugations"}
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
                    <strong>ich:</strong>{" "}
                    {isGerman ? "Endet immer mit -e" : "Always ends with -e"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>du:</strong>{" "}
                    {isGerman ? "Endet immer mit -st" : "Always ends with -st"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>er/sie/es:</strong>{" "}
                    {isGerman ? "Endet immer mit -t" : "Always ends with -t"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>wir/ihr/sie/Sie:</strong>{" "}
                    {isGerman
                      ? "Verwende Infinitivform oder -t/-en"
                      : "Use infinitive form or -t/-en"}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                {isGerman ? "Perfekt Regeln" : "Perfekt Rules"}
              </h3>
              <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>haben:</strong>{" "}
                    {isGerman
                      ? "Die meisten Verben (lernen, lesen, schlafen)"
                      : "Most verbs (learn, read, sleep)"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>sein:</strong>{" "}
                    {isGerman
                      ? "Bewegungsverben (gehen, fahren, fliegen) und Zustandsänderungen"
                      : "Movement verbs (go, drive, fly) and state changes"}
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    •
                  </span>
                  <div>
                    <strong>Partizip II:</strong>{" "}
                    {isGerman
                      ? "ge- + Verbstamm + -t/-en"
                      : "ge- + verb stem + -t/-en"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
          <h2 className="text-xl font-bold text-white">
            {isGerman ? "Beispiele" : "Examples"}
          </h2>
          <p className="text-green-100 mt-1 text-sm">
            {isGerman
              ? "Verbkonjugation in verschiedenen Zeiten"
              : "Verb conjugation in different tenses"}
          </p>
        </div>
        <div className="p-6">
          <div className="grid gap-8">
            {/* Präsens Examples */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                {isGerman ? "Präsens" : "Present Tense"}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {/* haben conjugation */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                    haben (to have)
                  </h4>
                  <div className="space-y-2">
                    {[
                      { pronoun: "ich", verb: "habe", english: "I have" },
                      { pronoun: "du", verb: "hast", english: "you have" },
                      {
                        pronoun: "er/sie/es",
                        verb: "hat",
                        english: "he/she/it has",
                      },
                      { pronoun: "wir", verb: "haben", english: "we have" },
                      {
                        pronoun: "ihr",
                        verb: "habt",
                        english: "you have (plural)",
                      },
                      {
                        pronoun: "sie/Sie",
                        verb: "haben",
                        english: "they/you have (formal)",
                      },
                    ].map((conj, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-neutral-900 dark:text-neutral-100">
                          <strong>{conj.pronoun}</strong> {conj.verb}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-neutral-600 dark:text-neutral-400 text-xs">
                            {conj.english}
                          </span>
                          <AudioButton
                            onClick={() =>
                              speakGerman(`${conj.pronoun} ${conj.verb}`)
                            }
                            title={isGerman ? "Anhören" : "Listen"}
                            size="sm"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* sein conjugation */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                    sein (to be)
                  </h4>
                  <div className="space-y-2">
                    {[
                      { pronoun: "ich", verb: "bin", english: "I am" },
                      { pronoun: "du", verb: "bist", english: "you are" },
                      {
                        pronoun: "er/sie/es",
                        verb: "ist",
                        english: "he/she/it is",
                      },
                      { pronoun: "wir", verb: "sind", english: "we are" },
                      {
                        pronoun: "ihr",
                        verb: "seid",
                        english: "you are (plural)",
                      },
                      {
                        pronoun: "sie/Sie",
                        verb: "sind",
                        english: "they/you are (formal)",
                      },
                    ].map((conj, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-neutral-900 dark:text-neutral-100">
                          <strong>{conj.pronoun}</strong> {conj.verb}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-neutral-600 dark:text-neutral-400 text-xs">
                            {conj.english}
                          </span>
                          <AudioButton
                            onClick={() =>
                              speakGerman(`${conj.pronoun} ${conj.verb}`)
                            }
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

            {/* Perfekt Examples */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                {isGerman ? "Perfekt" : "Perfect Tense"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    german: "Ich habe Deutsch gelernt.",
                    english: "I have learned German.",
                    auxiliary: "haben",
                    type: "regular",
                  },
                  {
                    german: "Er ist nach Hause gegangen.",
                    english: "He has gone home.",
                    auxiliary: "sein",
                    type: "movement",
                  },
                  {
                    german: "Wir haben ein Auto gekauft.",
                    english: "We have bought a car.",
                    auxiliary: "haben",
                    type: "regular",
                  },
                  {
                    german: "Sie ist in Berlin gewesen.",
                    english: "She has been in Berlin.",
                    auxiliary: "sein",
                    type: "state",
                  },
                ].map((example, index) => (
                  <div
                    key={index}
                    className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {example.german}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {example.english}
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                          {isGerman ? "Hilfsverb:" : "Auxiliary:"}{" "}
                          <strong>{example.auxiliary}</strong>
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

            {/* Präteritum Examples */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                {isGerman ? "Präteritum" : "Past Tense"}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    german: "Ich war zu Hause.",
                    english: "I was at home.",
                    verb: "sein → war",
                    type: "irregular",
                  },
                  {
                    german: "Er lernte Deutsch.",
                    english: "He learned German.",
                    verb: "lernen → lernte",
                    type: "regular",
                  },
                  {
                    german: "Wir hatten Zeit.",
                    english: "We had time.",
                    verb: "haben → hatten",
                    type: "irregular",
                  },
                  {
                    german: "Sie ging nach Hause.",
                    english: "She went home.",
                    verb: "gehen → ging",
                    type: "irregular",
                  },
                ].map((example, index) => (
                  <div
                    key={index}
                    className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {example.german}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {example.english}
                        </div>
                        <div className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                          {example.verb} ({example.type})
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
      </div>
    </PageLayout>
  );
};

export default Verbs;
