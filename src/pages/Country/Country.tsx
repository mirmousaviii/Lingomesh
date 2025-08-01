import React from "react";
import { Language } from "../../hooks/useTranslations";
import PageLayout from "../../components/layout/PageLayout/PageLayout";
import Box from "../../components/ui/Box/Box";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import QuizWidget, {
  convertMultilingualQuestions,
} from "../../components/widgets/QuizWidget/QuizWidget";
import { countryQuizQuestions } from "../../data/quizData";

interface CountryProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Country: React.FC<CountryProps> = ({ language }) => {
  const isGerman = language === "de";

  const speakGerman = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Country and nationality rules
  const countryRules = [
    {
      title: isGerman ? "Länder mit Artikel" : "Countries with Articles",
      description: isGerman
        ? "Einige Länder haben einen bestimmten Artikel im Deutschen"
        : "Some countries have a definite article in German",
      example:
        "die Schweiz, die Türkei, die USA, das Vereinigte Königreich, der Iran (dem Iran)",
    },
    {
      title: isGerman ? "Nationalitäten" : "Nationalities",
      description: isGerman
        ? "Nationalitäten werden mit -er, -in oder -isch gebildet"
        : "Nationalities are formed with -er, -in or -isch",
      example:
        "Deutscher/Deutsche, Amerikaner/Amerikanerin, Iraner/Iranerin, französisch",
    },
    {
      title: isGerman ? "Sprachen" : "Languages",
      description: isGerman
        ? "Sprachen werden mit -isch oder -isch gebildet"
        : "Languages are formed with -isch or -isch",
      example: "Deutsch, Englisch, Französisch, Spanisch, Persisch",
    },
    {
      title: isGerman ? "Länder ohne Artikel" : "Countries without Articles",
      description: isGerman
        ? "Die meisten Länder haben keinen Artikel im Deutschen"
        : "Most countries don't have articles in German",
      example: "Deutschland, Österreich, Frankreich, Spanien, Italien",
    },
  ];

  // Country vocabulary
  const countryVocabulary = [
    { german: "das Land", english: "country", category: "noun" },
    { german: "die Nationalität", english: "nationality", category: "noun" },
    { german: "die Sprache", english: "language", category: "noun" },
    { german: "der Kontinent", english: "continent", category: "noun" },
    { german: "die Hauptstadt", english: "capital city", category: "noun" },
    { german: "aus ... kommen", english: "to come from", category: "phrase" },
    { german: "in ... leben", english: "to live in", category: "phrase" },
    { german: "nach ... reisen", english: "to travel to", category: "phrase" },
  ];

  // Popular countries and nationalities
  const countriesData = [
    {
      country: { german: "Deutschland", english: "Germany" },
      nationality: { german: "der Deutsche / die Deutsche", english: "German" },
      language: { german: "Deutsch", english: "German" },
      capital: { german: "Berlin", english: "Berlin" },
    },
    {
      country: { german: "Österreich", english: "Austria" },
      nationality: {
        german: "der Österreicher / die Österreicherin",
        english: "Austrian",
      },
      language: { german: "Deutsch", english: "German" },
      capital: { german: "Wien", english: "Vienna" },
    },
    {
      country: { german: "die Schweiz", english: "Switzerland" },
      nationality: {
        german: "der Schweizer / die Schweizerin",
        english: "Swiss",
      },
      language: {
        german: "Deutsch, Französisch, Italienisch",
        english: "German, French, Italian",
      },
      capital: { german: "Bern", english: "Bern" },
    },
    {
      country: { german: "die USA", english: "USA" },
      nationality: {
        german: "der Amerikaner / die Amerikanerin",
        english: "American",
      },
      language: { german: "Englisch", english: "English" },
      capital: { german: "Washington D.C.", english: "Washington D.C." },
    },
    {
      country: { german: "Großbritannien", english: "Great Britain" },
      nationality: { german: "der Brite / die Britin", english: "British" },
      language: { german: "Englisch", english: "English" },
      capital: { german: "London", english: "London" },
    },
    {
      country: { german: "Frankreich", english: "France" },
      nationality: {
        german: "der Franzose / die Französin",
        english: "French",
      },
      language: { german: "Französisch", english: "French" },
      capital: { german: "Paris", english: "Paris" },
    },
    {
      country: { german: "Spanien", english: "Spain" },
      nationality: {
        german: "der Spanier / die Spanierin",
        english: "Spanish",
      },
      language: { german: "Spanisch", english: "Spanish" },
      capital: { german: "Madrid", english: "Madrid" },
    },
    {
      country: { german: "Italien", english: "Italy" },
      nationality: {
        german: "der Italiener / die Italienerin",
        english: "Italian",
      },
      language: { german: "Italienisch", english: "Italian" },
      capital: { german: "Rom", english: "Rome" },
    },
    {
      country: { german: "der Iran", english: "Iran" },
      nationality: {
        german: "der Iraner / die Iranerin",
        english: "Iranian",
      },
      language: { german: "Persisch", english: "Persian" },
      capital: { german: "Teheran", english: "Tehran" },
    },
  ];

  const questions = convertMultilingualQuestions(
    countryQuizQuestions,
    language
  );

  return (
    <PageLayout>
      {/* Countries and Nationalities Section */}
      <Box
        title={
          isGerman ? "Länder und Nationalitäten" : "Countries and Nationalities"
        }
        description={
          isGerman
            ? "Lerne die Namen der Länder und Nationalitäten auf Deutsch"
            : "Learn country names and nationalities in German"
        }
        headerColor="green"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {countriesData.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {item.country.german}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {item.country.english}
                    </p>
                  </div>
                  <AudioButton
                    onClick={() => speakGerman(item.country.german)}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {isGerman ? "Nationalität:" : "Nationality:"}
                    </span>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.nationality.german}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {isGerman ? "Sprache:" : "Language:"}
                    </span>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.language.german}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      {isGerman ? "Hauptstadt:" : "Capital:"}
                    </span>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {item.capital.german}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Country Rules Section */}
      <Box
        title={isGerman ? "Länder-Regeln" : "Country Rules"}
        description={
          isGerman
            ? "Wichtige Regeln für Länder und Nationalitäten im Deutschen"
            : "Important rules for countries and nationalities in German"
        }
        headerColor="purple"
      >
        <div className="space-y-4">
          {countryRules.map((rule, index) => (
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
              <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-3 border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-green-700 dark:text-green-300">
                    {rule.example}
                  </span>
                  <AudioButton
                    onClick={() => speakGerman(rule.example.split(", ")[0])}
                    title={isGerman ? "Hören" : "Listen"}
                    size="sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Country Vocabulary Section */}
      <Box
        title={isGerman ? "Länder-Vokabular" : "Country Vocabulary"}
        description={
          isGerman
            ? "Wichtige Wörter rund um Länder und Nationalitäten"
            : "Important words related to countries and nationalities"
        }
        headerColor="pink"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {countryVocabulary.map((item, index) => (
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
        subject={isGerman ? "Länder" : "Countries"}
      />
    </PageLayout>
  );
};

export default Country;
