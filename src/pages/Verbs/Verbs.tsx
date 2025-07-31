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
import Box from "../../components/ui/Box/Box";

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
    <PageLayout>
      <VerbConjugationWidget language={language} />

      {/* Verb Rules Section */}
      <Box
        title={isGerman ? "Konjugationsregeln" : "Conjugation Rules"}
        description={
          isGerman
            ? "Grundlegende Regeln für deutsche Verben"
            : "Basic rules for German verbs"
        }
        headerColor="green"
      >
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
                      speakGerman(rule.example.split(" → ")[1] || rule.example)
                    }
                    title={t.ui.listen}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Common Verbs Section */}
      <Box
        title={isGerman ? "Häufige Verben" : "Common Verbs"}
        description={
          isGerman
            ? "Die wichtigsten deutschen Verben"
            : "The most important German verbs"
        }
        headerColor="blue"
      >
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
                  <div className="text-xs text-neutral-500 mb-1">er/sie/es</div>
                  <div className="font-mono text-neutral-900 dark:text-neutral-100">
                    {verb.er}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Verb Tenses Section */}
      <Box
        title={isGerman ? "Verb-Zeiten" : "Verb Tenses"}
        description={
          isGerman
            ? "Verschiedene Zeitformen im Deutschen"
            : "Different tenses in German"
        }
        headerColor="purple"
      >
        <div className="space-y-6">
          {/* Present Tense Examples */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              {isGerman ? "Präsens" : "Present Tense"}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  german: "Ich lerne Deutsch.",
                  english: "I learn German.",
                  verb: "lernen",
                  type: "regular",
                },
                {
                  german: "Du sprichst gut.",
                  english: "You speak well.",
                  verb: "sprechen",
                  type: "irregular",
                },
                {
                  german: "Er arbeitet viel.",
                  english: "He works a lot.",
                  verb: "arbeiten",
                  type: "regular",
                },
                {
                  german: "Wir haben Zeit.",
                  english: "We have time.",
                  verb: "haben",
                  type: "irregular",
                },
              ].map((example, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900 dark:text-neutral-100">
                        {example.german}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {example.english}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">
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

          {/* Perfekt Examples */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              {isGerman ? "Perfekt" : "Perfect Tense"}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  german: "Ich habe gelernt.",
                  english: "I have learned.",
                  auxiliary: "haben",
                  type: "regular",
                },
                {
                  german: "Du bist gekommen.",
                  english: "You have come.",
                  auxiliary: "sein",
                  type: "irregular",
                },
                {
                  german: "Er hat gearbeitet.",
                  english: "He has worked.",
                  auxiliary: "haben",
                  type: "regular",
                },
                {
                  german: "Wir sind gegangen.",
                  english: "We have gone.",
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
      </Box>

      {/* Quiz Widget - Last Component */}
      <QuizWidget
        language={language}
        questions={quizQuestions}
        subject="verbs"
      />
    </PageLayout>
  );
};

export default Verbs;
