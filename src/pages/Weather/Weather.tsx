import { useState, useEffect } from "react";
import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import { WeatherData } from "../../types/weather";
import { weatherService } from "../../services/weatherService";
import { GERMAN_CITIES } from "../../constants/cities";
import WeatherWidget from "../../components/widgets/WeatherWidget/WeatherWidget";
import PageLayout from "../../components/layout/PageLayout";
import AudioButton from "../../components/ui/AudioButton/AudioButton";
import { QuizWidget, QuizQuestion } from "../../components/widgets/QuizWidget";
import Box from "../../components/ui/Box/Box";

interface WeatherProps {
  language: Language;
  onPageChange?: (page: string) => void;
}

const Weather: React.FC<WeatherProps> = ({ language }) => {
  const t = useTranslation(language);
  const isGerman = language === "de";

  // Weather widget state
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch weather when city changes
  useEffect(() => {
    fetchWeatherData(selectedCity);
  }, [selectedCity]);

  // Weather fetching function
  const fetchWeatherData = async (city: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const weatherData = await weatherService.fetchWeather(city);
      setWeather(weatherData);
    } catch (err) {
      setError("Weather data error");
      console.error("Weather fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Weather vocabulary
  const weatherVocabulary = [
    { german: "das Wetter", english: "the weather", category: "basic" },
    { german: "die Sonne", english: "the sun", category: "basic" },
    { german: "der Regen", english: "the rain", category: "basic" },
    { german: "der Schnee", english: "the snow", category: "basic" },
    { german: "der Wind", english: "the wind", category: "basic" },
    { german: "die Wolke", english: "the cloud", category: "basic" },
    { german: "der Himmel", english: "the sky", category: "basic" },
    { german: "die Temperatur", english: "the temperature", category: "basic" },
    { german: "sonnig", english: "sunny", category: "adjectives" },
    { german: "regnerisch", english: "rainy", category: "adjectives" },
    { german: "bewölkt", english: "cloudy", category: "adjectives" },
    { german: "neblig", english: "foggy", category: "adjectives" },
    { german: "windig", english: "windy", category: "adjectives" },
    { german: "kalt", english: "cold", category: "adjectives" },
    { german: "warm", english: "warm", category: "adjectives" },
    { german: "heiß", english: "hot", category: "adjectives" },
    { german: "Es regnet.", english: "It's raining.", category: "phrases" },
    { german: "Es schneit.", english: "It's snowing.", category: "phrases" },
    {
      german: "Die Sonne scheint.",
      english: "The sun is shining.",
      category: "phrases",
    },
    {
      german: "Wie ist das Wetter?",
      english: "How's the weather?",
      category: "phrases",
    },
  ];

  // Seasons
  const seasons = [
    {
      german: "der Frühling",
      english: "spring",
      description: isGerman ? "März - Mai" : "March - May",
    },
    {
      german: "der Sommer",
      english: "summer",
      description: isGerman ? "Juni - August" : "June - August",
    },
    {
      german: "der Herbst",
      english: "autumn/fall",
      description: isGerman ? "September - November" : "September - November",
    },
    {
      german: "der Winter",
      english: "winter",
      description: isGerman ? "Dezember - Februar" : "December - February",
    },
  ];

  // Weather phrases
  const weatherPhrases = [
    {
      german: "Heute ist schönes Wetter.",
      english: "Today is beautiful weather.",
      usage: isGerman ? "Positive Wetteraussage" : "Positive weather statement",
    },
    {
      german: "Es ist sehr kalt draußen.",
      english: "It's very cold outside.",
      usage: isGerman ? "Temperaturangabe" : "Temperature description",
    },
    {
      german: "Morgen wird es regnen.",
      english: "Tomorrow it will rain.",
      usage: isGerman ? "Wettervorhersage" : "Weather forecast",
    },
    {
      german: "Im Sommer ist es meist warm.",
      english: "In summer it's usually warm.",
      usage: isGerman ? "Saisonale Aussage" : "Seasonal statement",
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
      case "basic":
        return "text-blue-600 dark:text-blue-400";
      case "adjectives":
        return "text-green-600 dark:text-green-400";
      case "phrases":
        return "text-purple-600 dark:text-purple-400";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  // Quiz questions for weather
  const weatherQuizQuestions: QuizQuestion[] = [
    {
      question:
        language === "de"
          ? "Was bedeutet 'Es regnet'?"
          : "What does 'Es regnet' mean?",
      options: ["It's snowing", "It's raining", "It's sunny", "It's windy"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Es regnet' bedeutet 'It's raining' - eine grundlegende Wetteraussage."
          : "'Es regnet' means 'It's raining' - a basic weather statement.",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man 'sunny' auf Deutsch?"
          : "How do you say 'sunny' in German?",
      options: ["regnerisch", "sonnig", "bewölkt", "windig"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'sunny' heißt auf Deutsch 'sonnig'."
          : "'sunny' in German is 'sonnig'.",
    },
    {
      question:
        language === "de" ? "Was ist 'der Winter'?" : "What is 'der Winter'?",
      options: ["spring", "summer", "autumn", "winter"],
      correctAnswer: 3,
      explanation:
        language === "de"
          ? "'der Winter' ist 'winter' - die kalte Jahreszeit."
          : "'der Winter' is 'winter' - the cold season.",
    },
    {
      question:
        language === "de"
          ? "Wie fragt man nach dem Wetter?"
          : "How do you ask about the weather?",
      options: [
        "Wie geht es?",
        "Wie ist das Wetter?",
        "Was machst du?",
        "Wo bist du?",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'Wie ist das Wetter?' ist die übliche Frage nach dem Wetter."
          : "'Wie ist das Wetter?' is the common way to ask about the weather.",
    },
    {
      question:
        language === "de"
          ? "Was bedeutet 'bewölkt'?"
          : "What does 'bewölkt' mean?",
      options: ["sunny", "cloudy", "rainy", "snowy"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'bewölkt' bedeutet 'cloudy' - wenn viele Wolken am Himmel sind."
          : "'bewölkt' means 'cloudy' - when there are many clouds in the sky.",
    },
    {
      question:
        language === "de"
          ? "Welche Jahreszeit ist 'der Frühling'?"
          : "Which season is 'der Frühling'?",
      options: ["winter", "spring", "summer", "autumn"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'der Frühling' ist 'spring' - die Zeit von März bis Mai."
          : "'der Frühling' is 'spring' - the time from March to May.",
    },
    {
      question:
        language === "de"
          ? "Was ist das deutsche Wort für 'snow'?"
          : "What is the German word for 'snow'?",
      options: ["der Regen", "der Schnee", "der Wind", "die Sonne"],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'snow' heißt auf Deutsch 'der Schnee'."
          : "'snow' in German is 'der Schnee'.",
    },
    {
      question:
        language === "de"
          ? "Wie sagt man 'The sun is shining'?"
          : "How do you say 'The sun is shining' in German?",
      options: [
        "Es regnet.",
        "Die Sonne scheint.",
        "Es schneit.",
        "Es ist windig.",
      ],
      correctAnswer: 1,
      explanation:
        language === "de"
          ? "'The sun is shining' heißt 'Die Sonne scheint.'"
          : "'The sun is shining' in German is 'Die Sonne scheint.'",
    },
  ];

  return (
    <PageLayout>
      {/* Weather Widget */}
      <WeatherWidget
        weather={weather}
        loading={isLoading}
        error={error}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        germanCities={GERMAN_CITIES}
        language={language}
      />

      {/* Quiz Widget */}
      <QuizWidget
        language={language}
        questions={weatherQuizQuestions}
        subject={isGerman ? "Wetter" : "Weather"}
      />
      {/* Weather Vocabulary Section */}
      <Box
        title={isGerman ? "Wetter-Vokabular" : "Weather Vocabulary"}
        description={
          isGerman
            ? "Wichtige Wörter zum Thema Wetter"
            : "Important words related to weather"
        }
        headerColor="blue"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {weatherVocabulary.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div
                    className={`text-sm font-semibold ${getCategoryColor(
                      item.category
                    )} mb-1`}
                  >
                    {item.german}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {item.english}
                  </div>
                </div>
                <AudioButton
                  onClick={() => speakGerman(item.german)}
                  title={t.ui.listen}
                  size="sm"
                />
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Seasons Section */}
      <Box
        title={isGerman ? "Jahreszeiten" : "Seasons"}
        description={
          isGerman
            ? "Die vier Jahreszeiten auf Deutsch"
            : "The four seasons in German"
        }
        headerColor="green"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {seasons.map((season, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {season.german}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {season.english}
                  </div>
                </div>
                <AudioButton
                  onClick={() => speakGerman(season.german)}
                  title={t.ui.listen}
                  size="sm"
                />
              </div>
              <div className="text-xs text-neutral-500">
                {season.description}
              </div>
            </div>
          ))}
        </div>
      </Box>

      {/* Weather Phrases Section */}
      <Box
        title={isGerman ? "Wetter-Phrasen" : "Weather Phrases"}
        description={
          isGerman
            ? "Nützliche Phrasen zum Thema Wetter"
            : "Useful phrases about weather"
        }
        headerColor="pink"
      >
        <div className="space-y-4">
          {weatherPhrases.map((phrase, index) => (
            <div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {phrase.german}
                </span>
                <AudioButton
                  onClick={() => speakGerman(phrase.german)}
                  title={t.ui.listen}
                  size="sm"
                />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                {phrase.english}
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400">
                {phrase.usage}
              </div>
            </div>
          ))}
        </div>
      </Box>
    </PageLayout>
  );
};

export default Weather;
