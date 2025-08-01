import React, { useRef } from "react";
import { Language } from "../../../hooks/useTranslations";
import AudioButton from "../../ui/AudioButton/AudioButton";

interface AlphabetWidgetProps {
  language: Language;
}

const AlphabetWidget: React.FC<AlphabetWidgetProps> = ({ language }) => {
  const isGerman = language === "de";
  const currentUtterance = useRef<SpeechSynthesisUtterance | null>(null);

  const speakGerman = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;

      // Store the utterance reference
      currentUtterance.current = utterance;

      // Add event listeners to clean up the reference
      utterance.onend = () => {
        currentUtterance.current = null;
      };

      utterance.onerror = () => {
        currentUtterance.current = null;
      };

      speechSynthesis.speak(utterance);
    }
  };

  // German alphabet data with multilingual translations
  const alphabetData = [
    {
      letter: "A",
      pronunciation: "ah",
      example: "Apfel",
      translations: {
        en: "apple",
        de: "Apfel",
        es: "manzana",
        ru: "яблоко",
      },
    },
    {
      letter: "B",
      pronunciation: "beh",
      example: "Buch",
      translations: {
        en: "book",
        de: "Buch",
        es: "libro",
        ru: "книга",
      },
    },
    {
      letter: "C",
      pronunciation: "tseh",
      example: "Computer",
      translations: {
        en: "computer",
        de: "Computer",
        es: "computadora",
        ru: "компьютер",
      },
    },
    {
      letter: "D",
      pronunciation: "deh",
      example: "Dach",
      translations: {
        en: "roof",
        de: "Dach",
        es: "techo",
        ru: "крыша",
      },
    },
    {
      letter: "E",
      pronunciation: "eh",
      example: "Eis",
      translations: {
        en: "ice",
        de: "Eis",
        es: "hielo",
        ru: "лёд",
      },
    },
    {
      letter: "F",
      pronunciation: "eff",
      example: "Fenster",
      translations: {
        en: "window",
        de: "Fenster",
        es: "ventana",
        ru: "окно",
      },
    },
    {
      letter: "G",
      pronunciation: "geh",
      example: "Garten",
      translations: {
        en: "garden",
        de: "Garten",
        es: "jardín",
        ru: "сад",
      },
    },
    {
      letter: "H",
      pronunciation: "hah",
      example: "Haus",
      translations: {
        en: "house",
        de: "Haus",
        es: "casa",
        ru: "дом",
      },
    },
    {
      letter: "I",
      pronunciation: "ee",
      example: "Insel",
      translations: {
        en: "island",
        de: "Insel",
        es: "isla",
        ru: "остров",
      },
    },
    {
      letter: "J",
      pronunciation: "yot",
      example: "Jahr",
      translations: {
        en: "year",
        de: "Jahr",
        es: "año",
        ru: "год",
      },
    },
    {
      letter: "K",
      pronunciation: "kah",
      example: "Kaffee",
      translations: {
        en: "coffee",
        de: "Kaffee",
        es: "café",
        ru: "кофе",
      },
    },
    {
      letter: "L",
      pronunciation: "ell",
      example: "Lampe",
      translations: {
        en: "lamp",
        de: "Lampe",
        es: "lámpara",
        ru: "лампа",
      },
    },
    {
      letter: "M",
      pronunciation: "emm",
      example: "Mann",
      translations: {
        en: "man",
        de: "Mann",
        es: "hombre",
        ru: "мужчина",
      },
    },
    {
      letter: "N",
      pronunciation: "enn",
      example: "Name",
      translations: {
        en: "name",
        de: "Name",
        es: "nombre",
        ru: "имя",
      },
    },
    {
      letter: "O",
      pronunciation: "oh",
      example: "Ohr",
      translations: {
        en: "ear",
        de: "Ohr",
        es: "oreja",
        ru: "ухо",
      },
    },
    {
      letter: "P",
      pronunciation: "peh",
      example: "Pferd",
      translations: {
        en: "horse",
        de: "Pferd",
        es: "caballo",
        ru: "лошадь",
      },
    },
    {
      letter: "Q",
      pronunciation: "kuh",
      example: "Quelle",
      translations: {
        en: "source",
        de: "Quelle",
        es: "fuente",
        ru: "источник",
      },
    },
    {
      letter: "R",
      pronunciation: "err",
      example: "Regen",
      translations: {
        en: "rain",
        de: "Regen",
        es: "lluvia",
        ru: "дождь",
      },
    },
    {
      letter: "S",
      pronunciation: "ess",
      example: "Sonne",
      translations: {
        en: "sun",
        de: "Sonne",
        es: "sol",
        ru: "солнце",
      },
    },
    {
      letter: "T",
      pronunciation: "teh",
      example: "Tisch",
      translations: {
        en: "table",
        de: "Tisch",
        es: "mesa",
        ru: "стол",
      },
    },
    {
      letter: "U",
      pronunciation: "oo",
      example: "Uhr",
      translations: {
        en: "clock",
        de: "Uhr",
        es: "reloj",
        ru: "часы",
      },
    },
    {
      letter: "V",
      pronunciation: "fau",
      example: "Vogel",
      translations: {
        en: "bird",
        de: "Vogel",
        es: "pájaro",
        ru: "птица",
      },
    },
    {
      letter: "W",
      pronunciation: "veh",
      example: "Wasser",
      translations: {
        en: "water",
        de: "Wasser",
        es: "agua",
        ru: "вода",
      },
    },
    {
      letter: "X",
      pronunciation: "iks",
      example: "Xylophon",
      translations: {
        en: "xylophone",
        de: "Xylophon",
        es: "xilófono",
        ru: "ксилофон",
      },
    },
    {
      letter: "Y",
      pronunciation: "üpsilon",
      example: "Yacht",
      translations: {
        en: "yacht",
        de: "Yacht",
        es: "yate",
        ru: "яхта",
      },
    },
    {
      letter: "Z",
      pronunciation: "zett",
      example: "Zimmer",
      translations: {
        en: "room",
        de: "Zimmer",
        es: "habitación",
        ru: "комната",
      },
    },
    {
      letter: "Ä",
      pronunciation: "ah-umlaut",
      example: "Äpfel",
      translations: {
        en: "apples",
        de: "Äpfel",
        es: "manzanas",
        ru: "яблоки",
      },
    },
    {
      letter: "Ö",
      pronunciation: "oh-umlaut",
      example: "Öl",
      translations: {
        en: "oil",
        de: "Öl",
        es: "aceite",
        ru: "масло",
      },
    },
    {
      letter: "Ü",
      pronunciation: "oo-umlaut",
      example: "Übung",
      translations: {
        en: "exercise",
        de: "Übung",
        es: "ejercicio",
        ru: "упражнение",
      },
    },
    {
      letter: "ß",
      pronunciation: "eszett",
      example: "Straße",
      translations: {
        en: "street",
        de: "Straße",
        es: "calle",
        ru: "улица",
      },
    },
  ];

  const getCategoryColor = (letter: string) => {
    if (["Ä", "Ö", "Ü", "ß"].includes(letter)) {
      return "text-purple-600 dark:text-purple-400";
    }
    return "text-neutral-600 dark:text-neutral-400";
  };

  return (
    <div className="space-y-8">
      {/* Letters Section */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          {isGerman ? "Buchstaben" : "Letters"}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {alphabetData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200 relative"
            >
              <div className="absolute top-2 right-2">
                <AudioButton
                  onClick={() => speakGerman(item.letter)}
                  title={isGerman ? "Hören" : "Listen"}
                  size="sm"
                  utteranceRef={currentUtterance}
                />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  {item.letter}
                </div>
                <div
                  className={`text-sm font-medium ${getCategoryColor(
                    item.letter
                  )}`}
                >
                  {item.pronunciation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Examples Section */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          {isGerman ? "Beispiele" : "Examples"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {alphabetData.map((item, index) => {
            // Find the position of the letter in the example word
            const letterIndex = item.example
              .toLowerCase()
              .indexOf(item.letter.toLowerCase());
            const beforeLetter = item.example.substring(0, letterIndex);
            const afterLetter = item.example.substring(
              letterIndex + item.letter.length
            );

            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {item.letter}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(item.example)}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                    utteranceRef={currentUtterance}
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-neutral-900 dark:text-neutral-100">
                      {letterIndex >= 0 ? (
                        <>
                          {beforeLetter}
                          <span className="text-blue-600 dark:text-blue-400 font-bold">
                            {item.example.substring(
                              letterIndex,
                              letterIndex + item.letter.length
                            )}
                          </span>
                          {afterLetter}
                        </>
                      ) : (
                        item.example
                      )}
                    </div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-500 ml-2">
                      {item.translations[language]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Special Letters Info */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          {isGerman ? "Besondere Buchstaben" : "Special Letters"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              {isGerman ? "Umlaute (ä, ö, ü)" : "Umlauts (ä, ö, ü)"}
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {isGerman
                ? "Diese Buchstaben haben Punkte über sich und werden anders ausgesprochen."
                : "These letters have dots above them and are pronounced differently."}
            </p>
          </div>
          <div>
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              {isGerman ? "Eszett (ß)" : "Eszett (ß)"}
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {isGerman
                ? "Wird wie 'ss' ausgesprochen und nur in Kleinbuchstaben verwendet."
                : "Pronounced like 'ss' and only used in lowercase."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphabetWidget;
