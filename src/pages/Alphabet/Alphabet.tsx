import React from "react";
import { Language } from "../../hooks/useTranslations";
import PageLayout from "../../components/layout/PageLayout/PageLayout";
import Box from "../../components/ui/Box/Box";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import QuizWidget, {
  convertMultilingualQuestions,
} from "../../components/widgets/QuizWidget/QuizWidget";
import AlphabetWidget from "../../components/widgets/AlphabetWidget/AlphabetWidget";
import { alphabetQuizQuestions } from "../../data/quizData";

interface AlphabetProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Alphabet: React.FC<AlphabetProps> = ({ language }) => {
  const isGerman = language === "de";

  // Translation object for box titles and descriptions
  const translations = {
    letters: {
      title: {
        de: "Deutsches Alphabet",
        en: "German Alphabet",
        es: "Alfabeto Alemán",
        ru: "Немецкий алфавит",
      },
      description: {
        de: "Das deutsche Alphabet mit Aussprache",
        en: "The German alphabet with pronunciation",
        es: "El alfabeto alemán con pronunciación",
        ru: "Немецкий алфавит с произношением",
      },
    },
    examples: {
      title: {
        de: "Beispiele",
        en: "Examples",
        es: "Ejemplos",
        ru: "Примеры",
      },
      description: {
        de: "Wörter mit jedem Buchstaben des Alphabets",
        en: "Words with each letter of the alphabet",
        es: "Palabras con cada letra del alfabeto",
        ru: "Слова с каждой буквой алфавита",
      },
    },
    specialLetters: {
      title: {
        de: "Besondere Buchstaben",
        en: "Special Letters",
        es: "Letras Especiales",
        ru: "Особые буквы",
      },
      description: {
        de: "Informationen über Umlaute und Eszett",
        en: "Information about umlauts and eszett",
        es: "Información sobre umlauts y eszett",
        ru: "Информация об умлаутах и эсцете",
      },
    },
    rules: {
      title: {
        de: "Alphabet-Regeln",
        en: "Alphabet Rules",
        es: "Reglas del Alfabeto",
        ru: "Правила алфавита",
      },
      description: {
        de: "Wichtige Regeln für die Aussprache im Deutschen",
        en: "Important rules for German pronunciation",
        es: "Reglas importantes para la pronunciación alemana",
        ru: "Важные правила немецкого произношения",
      },
    },
    vocabulary: {
      title: {
        de: "Alphabet-Vokabular",
        en: "Alphabet Vocabulary",
        es: "Vocabulario del Alfabeto",
        ru: "Алфавитный словарь",
      },
      description: {
        de: "Wichtige Wörter rund um das Alphabet",
        en: "Important words related to the alphabet",
        es: "Palabras importantes relacionadas con el alfabeto",
        ru: "Важные слова, связанные с алфавитом",
      },
    },
  };

  const speakGerman = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
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

  // Alphabet pronunciation rules
  const alphabetRules = [
    {
      title: isGerman ? "Umlaute" : "Umlauts",
      description: isGerman
        ? "ä, ö, ü haben Punkte über sich und werden anders ausgesprochen"
        : "ä, ö, ü have dots above them and are pronounced differently",
      example: "ä → ah-umlaut, ö → oh-umlaut, ü → oo-umlaut",
    },
    {
      title: isGerman ? "Eszett (ß)" : "Eszett (ß)",
      description: isGerman
        ? "Wird wie 'ss' ausgesprochen und nur in Kleinbuchstaben verwendet"
        : "Pronounced like 'ss' and only used in lowercase",
      example: "Straße → Strasse",
    },
    {
      title: isGerman ? "Vokale" : "Vowels",
      description: isGerman
        ? "a, e, i, o, u werden klar und deutlich ausgesprochen"
        : "a, e, i, o, u are pronounced clearly and distinctly",
      example: "a → ah, e → eh, i → ee, o → oh, u → oo",
    },
  ];

  // Alphabet vocabulary
  const alphabetVocabulary = [
    { german: "das Alphabet", english: "alphabet", category: "noun" },
    { german: "der Buchstabe", english: "letter", category: "noun" },
    { german: "der Umlaut", english: "umlaut", category: "noun" },
    { german: "die Aussprache", english: "pronunciation", category: "noun" },
    { german: "buchstabieren", english: "to spell", category: "verb" },
    { german: "aussprechen", english: "to pronounce", category: "verb" },
  ];

  const questions = convertMultilingualQuestions(
    alphabetQuizQuestions,
    language
  );

  return (
    <PageLayout>
      {/* Letters Box */}
      <Box
        title={
          translations.letters.title[language] || translations.letters.title.en
        }
        description={
          translations.letters.description[language] ||
          translations.letters.description.en
        }
        headerColor="blue"
      >
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
      </Box>

      {/* Examples Box */}
      <Box
        title={
          translations.examples.title[language] ||
          translations.examples.title.en
        }
        description={
          translations.examples.description[language] ||
          translations.examples.description.en
        }
        headerColor="green"
      >
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
      </Box>

      {/* Special Letters Info */}
      <Box
        title={
          translations.specialLetters.title[language] ||
          translations.specialLetters.title.en
        }
        description={
          translations.specialLetters.description[language] ||
          translations.specialLetters.description.en
        }
        headerColor="purple"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
              {isGerman ? "Umlaute (ä, ö, ü)" : "Umlauts (ä, ö, ü)"}
            </h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              {isGerman
                ? "Diese Buchstaben haben Punkte über sich und werden anders ausgesprochen."
                : "These letters have dots above them and are pronounced differently."}
            </p>
          </div>
          <div>
            <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
              {isGerman ? "Eszett (ß)" : "Eszett (ß)"}
            </h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              {isGerman
                ? "Wird wie 'ss' ausgesprochen und nur in Kleinbuchstaben verwendet."
                : "Pronounced like 'ss' and only used in lowercase."}
            </p>
          </div>
        </div>
      </Box>

      {/* Alphabet Rules Section */}
      <Box
        title={
          translations.rules.title[language] || translations.rules.title.en
        }
        description={
          translations.rules.description[language] ||
          translations.rules.description.en
        }
        headerColor="orange"
      >
        <div className="space-y-4">
          {alphabetRules.map((rule, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {rule.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {rule.description}
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-md p-3 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-indigo-700 dark:text-indigo-300">
                    {rule.example}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(rule.example.split(" → ")[0])}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Alphabet Vocabulary Section */}
      <Box
        title={
          translations.vocabulary.title[language] ||
          translations.vocabulary.title.en
        }
        description={
          translations.vocabulary.description[language] ||
          translations.vocabulary.description.en
        }
        headerColor="pink"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {alphabetVocabulary.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {item.german}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {item.english}
                  </div>
                </div>
                <AudioButton
                  onClick={() => speakGerman(item.german)}
                  title={isGerman ? "Hören" : "Listen"}
                  size="sm"
                />
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Quiz Widget */}
      <QuizWidget
        language={language}
        questions={questions}
        subject={isGerman ? "Alphabet" : "Alphabet"}
      />
    </PageLayout>
  );
};

export default Alphabet;
