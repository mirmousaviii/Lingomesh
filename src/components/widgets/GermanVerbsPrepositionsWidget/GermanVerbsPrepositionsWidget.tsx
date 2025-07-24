import React, { useState } from "react";
import Widget from "../../ui/Widget/Widget";

interface GermanVerbsPrepositionsWidgetProps {
  showTranslations: boolean;
}

interface VerbData {
  verb: string;
  preposition: string;
  case: string;
  example: string;
  translation: string;
  pronunciation: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const GermanVerbsPrepositionsWidget: React.FC<
  GermanVerbsPrepositionsWidgetProps
> = ({ showTranslations }) => {
  const [selectedVerb, setSelectedVerb] = useState("warten");

  const verbs: Record<string, VerbData> = {
    warten: {
      verb: "warten",
      preposition: "auf",
      case: "Akkusativ",
      example: "Ich warte auf den Bus.",
      translation: "I'm waiting for the bus.",
      pronunciation: "ikh var-te owf den boos",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    denken: {
      verb: "denken",
      preposition: "an",
      case: "Akkusativ",
      example: "Ich denke an dich.",
      translation: "I'm thinking of you.",
      pronunciation: "ikh den-ke an dikh",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    sprechen: {
      verb: "sprechen",
      preposition: "mit",
      case: "Dativ",
      example: "Ich spreche mit meiner Freundin.",
      translation: "I'm speaking with my friend.",
      pronunciation: "ikh shpre-khe mit mai-ner froy-nin",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    "sich freuen": {
      verb: "sich freuen",
      preposition: "über",
      case: "Akkusativ",
      example: "Ich freue mich über das Geschenk.",
      translation: "I'm happy about the gift.",
      pronunciation: "ikh froy-e mikh ue-ber das ge-shenk",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    "sich interessieren": {
      verb: "sich interessieren",
      preposition: "für",
      case: "Akkusativ",
      example: "Ich interessiere mich für Musik.",
      translation: "I'm interested in music.",
      pronunciation: "ikh in-te-re-see-re mikh fuer moo-zeek",
      color: "text-orange-700 dark:text-orange-300",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    "sich beschweren": {
      verb: "sich beschweren",
      preposition: "über",
      case: "Akkusativ",
      example: "Er beschwert sich über das Wetter.",
      translation: "He's complaining about the weather.",
      pronunciation: "er be-shvayrt zikh ue-ber das vet-ter",
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    "sich kümmern": {
      verb: "sich kümmern",
      preposition: "um",
      case: "Akkusativ",
      example: "Sie kümmert sich um ihre Kinder.",
      translation: "She takes care of her children.",
      pronunciation: "zee kue-mer zikh oom ee-re kin-der",
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    "sich erinnern": {
      verb: "sich erinnern",
      preposition: "an",
      case: "Akkusativ",
      example: "Ich erinnere mich an den Urlaub.",
      translation: "I remember the vacation.",
      pronunciation: "ikh er-in-ner mikh an den oor-loup",
      color: "text-teal-700 dark:text-teal-300",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
    },
    "sich verlieben": {
      verb: "sich verlieben",
      preposition: "in",
      case: "Akkusativ",
      example: "Er verliebt sich in sie.",
      translation: "He falls in love with her.",
      pronunciation: "er fer-leept zikh in zee",
      color: "text-rose-700 dark:text-rose-300",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      borderColor: "border-rose-200 dark:border-rose-800",
    },
    "sich ärgern": {
      verb: "sich ärgern",
      preposition: "über",
      case: "Akkusativ",
      example: "Ich ärgere mich über den Lärm.",
      translation: "I'm annoyed about the noise.",
      pronunciation: "ikh er-ger mikh ue-ber den lerm",
      color: "text-amber-700 dark:text-amber-300",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    helfen: {
      verb: "helfen",
      preposition: "bei",
      case: "Dativ",
      example: "Ich helfe dir bei der Arbeit.",
      translation: "I'm helping you with the work.",
      pronunciation: "ikh hel-fe deer bai der ar-bait",
      color: "text-emerald-700 dark:text-emerald-300",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
    },
    danken: {
      verb: "danken",
      preposition: "für",
      case: "Dativ",
      example: "Ich danke dir für das Geschenk.",
      translation: "I thank you for the gift.",
      pronunciation: "ikh dan-ke deer fuer das ge-shenk",
      color: "text-cyan-700 dark:text-cyan-300",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
      borderColor: "border-cyan-200 dark:border-cyan-800",
    },
    glauben: {
      verb: "glauben",
      preposition: "an",
      case: "Dativ",
      example: "Ich glaube an dich.",
      translation: "I believe in you.",
      pronunciation: "ikh glau-be an dikh",
      color: "text-violet-700 dark:text-violet-300",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      borderColor: "border-violet-200 dark:border-violet-800",
    },
    antworten: {
      verb: "antworten",
      preposition: "auf",
      case: "Dativ",
      example: "Ich antworte auf deine Frage.",
      translation: "I'm answering your question.",
      pronunciation: "ikh ant-vor-te owf dai-ne fra-ge",
      color: "text-lime-700 dark:text-lime-300",
      bgColor: "bg-lime-50 dark:bg-lime-900/20",
      borderColor: "border-lime-200 dark:border-lime-800",
    },
    gehören: {
      verb: "gehören",
      preposition: "zu",
      case: "Dativ",
      example: "Das gehört zu mir.",
      translation: "That belongs to me.",
      pronunciation: "das ge-hert tsoo meer",
      color: "text-sky-700 dark:text-sky-300",
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
      borderColor: "border-sky-200 dark:border-sky-800",
    },
  };

  const currentVerb = verbs[selectedVerb];

  const caseColors = {
    Akkusativ: {
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    Dativ: {
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
  };

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Widget
      title="Verben mit Präpositionen"
      englishTitle={showTranslations ? "Verbs with Prepositions" : undefined}
    >
      <div className="space-y-4">
        {/* Verb Selector */}
        <div className="mb-4">
          <select
            value={selectedVerb}
            onChange={(e) => setSelectedVerb(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            }}
          >
            {Object.entries(verbs).map(([key, verb]) => (
              <option key={key} value={key}>
                {verb.verb} + {verb.preposition} ({verb.case})
              </option>
            ))}
          </select>
        </div>

        {/* Selected Verb Details */}
        <div
          className={`p-4 rounded-md border ${currentVerb.borderColor} ${currentVerb.bgColor}`}
        >
          {/* Verb and Preposition Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className={`text-xl font-bold ${currentVerb.color}`}>
                {currentVerb.verb}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 text-lg">
                +
              </span>
              <span className={`text-xl font-bold ${currentVerb.color}`}>
                {currentVerb.preposition}
              </span>
            </div>
            <div
              className={`px-3 py-1 rounded text-sm font-medium ${
                caseColors[currentVerb.case as keyof typeof caseColors].bgColor
              } ${
                caseColors[currentVerb.case as keyof typeof caseColors].color
              }`}
            >
              {currentVerb.case}
            </div>
          </div>

          {/* Example Sentence with Speech */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 space-y-2">
              <div className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                {currentVerb.example}
              </div>
              {showTranslations && (
                <div className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                  {currentVerb.translation}
                </div>
              )}
              <div className="text-sm text-neutral-500 dark:text-neutral-500 italic">
                [{currentVerb.pronunciation}]
              </div>
            </div>
            <button
              onClick={() => speakText(currentVerb.example)}
              className="flex-shrink-0 p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
              title={showTranslations ? "Listen" : "Hören"}
            >
              <svg
                className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Case Guide */}
        <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-md border border-neutral-200 dark:border-neutral-600">
          <h5 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            {showTranslations ? "Case Guide:" : "Fall-Leitfaden:"}
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div
              className={`p-1.5 rounded text-xs font-medium ${caseColors.Akkusativ.bgColor} ${caseColors.Akkusativ.color}`}
            >
              <strong>Akkusativ:</strong>{" "}
              {showTranslations ? "Direct object" : "Direktes Objekt"}
            </div>
            <div
              className={`p-1.5 rounded text-xs font-medium ${caseColors.Dativ.bgColor} ${caseColors.Dativ.color}`}
            >
              <strong>Dativ:</strong>{" "}
              {showTranslations ? "Indirect object" : "Indirektes Objekt"}
            </div>
          </div>
        </div>

        {/* Usage Tips */}
        <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
          <h6 className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">
            💡 {showTranslations ? "Tip:" : "Tipp:"}
          </h6>
          <div className="text-xs text-blue-600 dark:text-blue-400">
            {showTranslations
              ? "These verb-preposition combinations must be memorized as they don't follow strict rules."
              : "Diese Verb-Präpositions-Kombinationen müssen auswendig gelernt werden, da sie keinen strengen Regeln folgen."}
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default GermanVerbsPrepositionsWidget;
