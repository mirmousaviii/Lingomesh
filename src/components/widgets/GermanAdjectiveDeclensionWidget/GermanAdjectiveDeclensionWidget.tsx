import { Language } from "../../../hooks/useTranslations";
import React, { useState } from "react";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface GermanAdjectiveDeclensionWidgetProps {
  language: Language;
}

interface DeclensionData {
  nominativ: string;
  akkusativ: string;
  dativ: string;
  genitiv: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface AdjectiveExample {
  base: string;
  meaning: string;
  strong: Record<string, string>;
  weak: Record<string, string>;
  mixed: Record<string, string>;
}

const GermanAdjectiveDeclensionWidget: React.FC<
  GermanAdjectiveDeclensionWidgetProps
> = ({ language }) => {
  const [activeDeclension, setActiveDeclension] = useState<
    "strong" | "weak" | "mixed"
  >("strong");
  const [selectedAdjective, setSelectedAdjective] = useState<string>("groß");

  // Strong declension (no article or indefinite article)
  const strongDeclension: Record<string, DeclensionData> = {
    masculine: {
      nominativ: "-er",
      akkusativ: "-en",
      dativ: "-em",
      genitiv: "-en",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-er",
      genitiv: "-er",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "-es",
      akkusativ: "-es",
      dativ: "-em",
      genitiv: "-en",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-er",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  // Weak declension (with definite article)
  const weakDeclension: Record<string, DeclensionData> = {
    masculine: {
      nominativ: "-e",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-en",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-en",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "-en",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  // Mixed declension (with indefinite article)
  const mixedDeclension: Record<string, DeclensionData> = {
    masculine: {
      nominativ: "-er",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    feminine: {
      nominativ: "-e",
      akkusativ: "-e",
      dativ: "-en",
      genitiv: "-en",
      color: "text-pink-700 dark:text-pink-300",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
    neuter: {
      nominativ: "-es",
      akkusativ: "-es",
      dativ: "-en",
      genitiv: "-en",
      color: "text-green-700 dark:text-green-300",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    plural: {
      nominativ: "-en",
      akkusativ: "-en",
      dativ: "-en",
      genitiv: "-en",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
  };

  const adjectives: Record<string, AdjectiveExample> = {
    groß: {
      base: "groß",
      meaning: "big/large",
      strong: {
        masculine: "großer Mann",
        feminine: "große Frau",
        neuter: "großes Haus",
        plural: "große Häuser",
      },
      weak: {
        masculine: "der große Mann",
        feminine: "die große Frau",
        neuter: "das große Haus",
        plural: "die großen Häuser",
      },
      mixed: {
        masculine: "ein großer Mann",
        feminine: "eine große Frau",
        neuter: "ein großes Haus",
        plural: "große Häuser",
      },
    },
    klein: {
      base: "klein",
      meaning: "small",
      strong: {
        masculine: "kleiner Mann",
        feminine: "kleine Frau",
        neuter: "kleines Haus",
        plural: "kleine Häuser",
      },
      weak: {
        masculine: "der kleine Mann",
        feminine: "die kleine Frau",
        neuter: "das kleine Haus",
        plural: "die kleinen Häuser",
      },
      mixed: {
        masculine: "ein kleiner Mann",
        feminine: "eine kleine Frau",
        neuter: "ein kleines Haus",
        plural: "kleine Häuser",
      },
    },
    schön: {
      base: "schön",
      meaning: "beautiful",
      strong: {
        masculine: "schöner Mann",
        feminine: "schöne Frau",
        neuter: "schönes Haus",
        plural: "schöne Häuser",
      },
      weak: {
        masculine: "der schöne Mann",
        feminine: "die schöne Frau",
        neuter: "das schöne Haus",
        plural: "die schönen Häuser",
      },
      mixed: {
        masculine: "ein schöner Mann",
        feminine: "eine schöne Frau",
        neuter: "ein schönes Haus",
        plural: "schöne Häuser",
      },
    },
    alt: {
      base: "alt",
      meaning: "old",
      strong: {
        masculine: "alter Mann",
        feminine: "alte Frau",
        neuter: "altes Haus",
        plural: "alte Häuser",
      },
      weak: {
        masculine: "der alte Mann",
        feminine: "die alte Frau",
        neuter: "das alte Haus",
        plural: "die alten Häuser",
      },
      mixed: {
        masculine: "ein alter Mann",
        feminine: "eine alte Frau",
        neuter: "ein altes Haus",
        plural: "alte Häuser",
      },
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

  const getSelectedAdjectiveData = () => {
    return adjectives[selectedAdjective];
  };

  const getCurrentDeclension = () => {
    switch (activeDeclension) {
      case "strong":
        return strongDeclension;
      case "weak":
        return weakDeclension;
      case "mixed":
        return mixedDeclension;
      default:
        return strongDeclension;
    }
  };

  const declensionOptions = [
    {
      value: "strong",
      label: language === "de" ? "Starke Deklination" : "Strong Declension",
    },
    {
      value: "weak",
      label: language === "de" ? "Schwache Deklination" : "Weak Declension",
    },
    {
      value: "mixed",
      label: language === "de" ? "Gemischte Deklination" : "Mixed Declension",
    },
  ];

  const adjectiveOptions = Object.keys(adjectives).map((key) => ({
    value: key,
    label: `${adjectives[key].base} (${adjectives[key].meaning})`,
  }));

  const selectedAdjectiveData = getSelectedAdjectiveData();
  const currentDeclension = getCurrentDeclension();

  return (
    <Widget
      titleKey="adjektivdeklination"
      language={language}
      headerColor="emerald"
      description={
        language === "de"
          ? "Adjektivdeklination und Endungen"
          : "Adjective declension and endings"
      }
    >
      <div className="space-y-4">
        {/* Declension Type Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {language === "de" ? "Deklinationstyp:" : "Declension type:"}
          </label>
          <Dropdown
            value={activeDeclension}
            onChange={(value) =>
              setActiveDeclension(value as "strong" | "weak" | "mixed")
            }
            options={declensionOptions}
          />
        </div>

        {/* Adjective Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {language === "de" ? "Adjektiv auswählen:" : "Select adjective:"}
          </label>
          <Dropdown
            value={selectedAdjective}
            onChange={setSelectedAdjective}
            options={adjectiveOptions}
          />
        </div>

        {/* Declension Table */}
        {selectedAdjectiveData && (
          <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3">
              <h3 className="text-lg font-bold text-white">
                {selectedAdjectiveData.base} - {selectedAdjectiveData.meaning}
              </h3>
            </div>

            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <th className="text-left py-2 text-neutral-700 dark:text-neutral-300">
                        {language === "de" ? "Fall" : "Case"}
                      </th>
                      <th className="text-left py-2 text-blue-600 dark:text-blue-400">
                        {language === "de" ? "Maskulin" : "Masculine"}
                      </th>
                      <th className="text-left py-2 text-pink-600 dark:text-pink-400">
                        {language === "de" ? "Feminin" : "Feminine"}
                      </th>
                      <th className="text-left py-2 text-green-600 dark:text-green-400">
                        {language === "de" ? "Neutral" : "Neuter"}
                      </th>
                      <th className="text-left py-2 text-purple-600 dark:text-purple-400">
                        {language === "de" ? "Plural" : "Plural"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100 dark:border-neutral-800">
                      <td className="py-2 font-medium">Nominativ</td>
                      <td className="py-2 font-mono">
                        {currentDeclension.masculine.nominativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.feminine.nominativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.neuter.nominativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.plural.nominativ}
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-100 dark:border-neutral-800">
                      <td className="py-2 font-medium">Akkusativ</td>
                      <td className="py-2 font-mono">
                        {currentDeclension.masculine.akkusativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.feminine.akkusativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.neuter.akkusativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.plural.akkusativ}
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-100 dark:border-neutral-800">
                      <td className="py-2 font-medium">Dativ</td>
                      <td className="py-2 font-mono">
                        {currentDeclension.masculine.dativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.feminine.dativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.neuter.dativ}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.plural.dativ}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Genitiv</td>
                      <td className="py-2 font-mono">
                        {currentDeclension.masculine.genitiv}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.feminine.genitiv}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.neuter.genitiv}
                      </td>
                      <td className="py-2 font-mono">
                        {currentDeclension.plural.genitiv}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Examples */}
        {selectedAdjectiveData && (
          <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3">
              <h3 className="text-lg font-bold text-white">
                {language === "de" ? "Beispiele" : "Examples"}
              </h3>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(selectedAdjectiveData[activeDeclension]).map(
                  ([gender, example]) => (
                    <div
                      key={gender}
                      className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-3 border border-neutral-200 dark:border-neutral-600"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                            {example}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                            {language === "de" ? gender : gender}
                          </div>
                        </div>
                        <AudioButton
                          onClick={() => speakText(example)}
                          title={language === "de" ? "Anhören" : "Listen"}
                          size="sm"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Widget>
  );
};

export default GermanAdjectiveDeclensionWidget;
