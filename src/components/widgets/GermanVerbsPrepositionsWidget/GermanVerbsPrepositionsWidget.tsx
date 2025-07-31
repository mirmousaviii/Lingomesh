import React, { useState } from "react";
import { Language } from "../../../hooks/useTranslations";
import Box from "../../ui/Box/Box";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanVerbsPrepositionsWidgetProps {
  language: Language;
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
  category: string;
  englishCategory: string;
}

const GermanVerbsPrepositionsWidget: React.FC<
  GermanVerbsPrepositionsWidgetProps
> = ({ language }) => {
  const [selectedVerb, setSelectedVerb] = useState<string>("warten");
  const [selectedCategory, setSelectedCategory] = useState<string>("Gefühle");

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
      category: "Warten & Hoffen",
      englishCategory: "Waiting & Hoping",
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
      category: "Denken & Erinnern",
      englishCategory: "Thinking & Remembering",
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
      category: "Kommunikation",
      englishCategory: "Communication",
    },
    "sich freuen über": {
      verb: "sich freuen",
      preposition: "über",
      case: "Akkusativ",
      example: "Ich freue mich über das Geschenk.",
      translation: "I'm happy about the gift.",
      pronunciation: "ikh froy-e mikh ue-ber das ge-shenk",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      category: "Gefühle",
      englishCategory: "Emotions",
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
      category: "Interesse",
      englishCategory: "Interest",
    },
    helfen: {
      verb: "helfen",
      preposition: "bei",
      case: "Dativ",
      example: "Ich helfe dir bei den Hausaufgaben.",
      translation: "I'm helping you with the homework.",
      pronunciation: "ikh hel-fe deer bai den hows-owf-ga-ben",
      color: "text-teal-700 dark:text-teal-300",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      category: "Hilfe",
      englishCategory: "Help",
    },
    "sich ärgern": {
      verb: "sich ärgern",
      preposition: "über",
      case: "Akkusativ",
      example: "Ich ärgere mich über den Fehler.",
      translation: "I'm angry about the mistake.",
      pronunciation: "ikh air-ger-e mikh ue-ber den fay-ler",
      color: "text-red-700 dark:text-red-300",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      category: "Gefühle",
      englishCategory: "Emotions",
    },
    "sich freuen auf": {
      verb: "sich freuen",
      preposition: "auf",
      case: "Akkusativ",
      example: "Ich freue mich auf die Ferien.",
      translation: "I'm looking forward to the holidays.",
      pronunciation: "ikh froy-e mikh owf dee fe-ree-en",
      color: "text-indigo-700 dark:text-indigo-300",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      category: "Gefühle",
      englishCategory: "Emotions",
    },
  };

  const categories = [
    { value: "Gefühle", label: language === "de" ? "Gefühle" : "Emotions" },
    {
      value: "Kommunikation",
      label: language === "de" ? "Kommunikation" : "Communication",
    },
    {
      value: "Denken & Erinnern",
      label: language === "de" ? "Denken & Erinnern" : "Thinking & Remembering",
    },
    {
      value: "Warten & Hoffen",
      label: language === "de" ? "Warten & Hoffen" : "Waiting & Hoping",
    },
    { value: "Interesse", label: language === "de" ? "Interesse" : "Interest" },
    { value: "Hilfe", label: language === "de" ? "Hilfe" : "Help" },
  ];

  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getSelectedVerbData = () => {
    return verbs[selectedVerb];
  };

  const getFilteredVerbs = () => {
    return Object.entries(verbs).filter(
      ([_, verbData]) => verbData.category === selectedCategory
    );
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

  const selectedVerbData = getSelectedVerbData();
  const filteredVerbs = getFilteredVerbs();

  return (
    <Box titleKey="verbenPraepositionen"
      language={language}
      headerColor="blue"
      description={
        language === "de"
          ? "Verben mit Präpositionen"
          : "Verbs with prepositions"
      }
    >
      <div className="space-y-4">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {language === "de" ? "Kategorie:" : "Category:"}
          </label>
          <Dropdown
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categories}
          />
        </div>

        {/* Verb Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {language === "de" ? "Verb auswählen:" : "Select verb:"}
          </label>
          <Dropdown
            value={selectedVerb}
            onChange={setSelectedVerb}
            options={filteredVerbs.map(([key, verb]) => ({
              value: key,
              label: verb.verb,
            }))}
          />
        </div>

        {/* Selected Verb Details */}
        {selectedVerbData && (
          <div
            className={`${selectedVerbData.bgColor} ${selectedVerbData.borderColor} border rounded-lg p-4`}
          >
            <div className="space-y-3">
              {/* Verb + Preposition */}
              <div className="flex items-center justify-between">
                <div>
                  <span
                    className={`text-lg font-bold ${selectedVerbData.color}`}
                  >
                    {selectedVerbData.verb} {selectedVerbData.preposition}
                  </span>
                  <span
                    className={`ml-2 text-sm font-medium ${getCaseColor(
                      selectedVerbData.case
                    )}`}
                  >
                    ({selectedVerbData.case})
                  </span>
                </div>
                <AudioButton
                  onClick={() =>
                    speakText(
                      `${selectedVerbData.verb} ${selectedVerbData.preposition}`
                    )
                  }
                  title={language === "de" ? "Anhören" : "Listen"}
                  size="sm"
                />
              </div>

              {/* Example */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-neutral-100">
                      {selectedVerbData.example}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {selectedVerbData.translation}
                    </div>
                  </div>
                  <AudioButton
                    onClick={() => speakText(selectedVerbData.example)}
                    title={language === "de" ? "Anhören" : "Listen"}
                    size="sm"
                  />
                </div>
              </div>

              {/* Pronunciation */}
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {language === "de" ? "Aussprache:" : "Pronunciation:"}{" "}
                {selectedVerbData.pronunciation}
              </div>
            </div>
          </div>
        )}

        {/* All Verbs in Category */}
        <div>
          <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {language === "de"
              ? "Alle Verben in dieser Kategorie:"
              : "All verbs in this category:"}
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {filteredVerbs.map(([key, verb]) => (
              <div
                key={key}
                className={`${verb.bgColor} ${
                  verb.borderColor
                } border rounded-lg p-3 cursor-pointer hover:shadow-md transition-shadow ${
                  selectedVerb === key ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedVerb(key)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`font-semibold ${verb.color}`}>
                      {verb.verb} {verb.preposition}
                    </span>
                    <span
                      className={`ml-2 text-xs font-medium ${getCaseColor(
                        verb.case
                      )}`}
                    >
                      ({verb.case})
                    </span>
                  </div>
                  <AudioButton
                    onClick={() =>
                      speakText(`${verb.verb} ${verb.preposition}`)
                    }
                    title={language === "de" ? "Anhören" : "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default GermanVerbsPrepositionsWidget;
