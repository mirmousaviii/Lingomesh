import React from "react";
import Widget from "../../ui/Widget/Widget";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
}

interface WeatherWidgetProps {
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  germanCities: readonly string[];
  showTranslations: boolean;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  weather,
  loading,
  error,
  selectedCity,
  setSelectedCity,
  germanCities,
  showTranslations,
}) => {
  // Convert weather data to German phonetic description
  const convertWeatherToGermanPhonetic = (weatherData: WeatherData) => {
    if (!weatherData) return "";

    const temp = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;

    // German number mappings for temperature
    const germanNumbers: { [key: number]: string } = {
      0: "null",
      1: "eins",
      2: "zwei",
      3: "drei",
      4: "vier",
      5: "fünf",
      6: "sechs",
      7: "sieben",
      8: "acht",
      9: "neun",
      10: "zehn",
      11: "elf",
      12: "zwölf",
      13: "dreizehn",
      14: "vierzehn",
      15: "fünfzehn",
      16: "sechzehn",
      17: "siebzehn",
      18: "achtzehn",
      19: "neunzehn",
      20: "zwanzig",
      21: "einundzwanzig",
      22: "zweiundzwanzig",
      23: "dreiundzwanzig",
      24: "vierundzwanzig",
      25: "fünfundzwanzig",
      26: "sechsundzwanzig",
      27: "siebenundzwanzig",
      28: "achtundzwanzig",
      29: "neunundzwanzig",
      30: "dreißig",
      31: "einunddreißig",
      32: "zweiunddreißig",
      33: "dreiunddreißig",
      34: "vierunddreißig",
      35: "fünfunddreißig",
      36: "sechsunddreißig",
      37: "siebenunddreißig",
      38: "achtunddreißig",
      39: "neununddreißig",
      40: "vierzig",
    };

    const tempWord =
      temp >= 0 && temp <= 40 ? germanNumbers[temp] : temp.toString();
    return `Es ist ${description} bei ${tempWord} Grad Celsius`;
  };

  // Speech synthesis function
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Loading state
  if (loading) {
    return (
      <Widget
        title="Wetter"
        englishTitle={showTranslations ? "Weather" : undefined}
      >
        <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-6">
          <div className="animate-spin rounded-full border-2 border-neutral-300 border-t-primary-600 w-12 h-12"></div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
              Wetter wird geladen...
            </p>
            {showTranslations && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Loading weather...
              </p>
            )}
          </div>
        </div>
      </Widget>
    );
  }

  // Error state
  if (error) {
    return (
      <Widget
        title="Wetter"
        englishTitle={showTranslations ? "Weather" : undefined}
      >
        <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-4">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            {error}
          </p>
          {showTranslations && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Weather data could not be loaded
            </p>
          )}
        </div>
      </Widget>
    );
  }

  // Weather data display
  if (!weather) {
    return (
      <Widget
        title="Wetter"
        englishTitle={showTranslations ? "Weather" : undefined}
      >
        <div className="flex items-center justify-center h-full text-center py-12">
          <p className="text-neutral-600 dark:text-neutral-400">
            {showTranslations
              ? "Select a city to view weather"
              : "Wählen Sie eine Stadt aus"}
          </p>
        </div>
      </Widget>
    );
  }

  return (
    <Widget
      title="Wetter"
      englishTitle={showTranslations ? "Weather" : undefined}
    >
      <div className="flex flex-col justify-between h-full space-y-4 sm:space-y-6">
        <div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right pr-8 sm:pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            }}
          >
            {germanCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="mx-auto w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2">
            <p className="text-sm sm:text-xl text-accent-600 dark:text-accent-400 font-medium italic leading-tight">
              {convertWeatherToGermanPhonetic(weather)}
            </p>
            <button
              onClick={() => speakText(convertWeatherToGermanPhonetic(weather))}
              className="flex-shrink-0 p-2.5 sm:p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200 touch-manipulation"
              title={showTranslations ? "Listen" : "Hören"}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 dark:text-neutral-400"
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

        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
          <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-md p-3 sm:p-4 border border-neutral-200 dark:border-neutral-600 hover:shadow-soft transition-all duration-200">
            <div className="text-lg sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {showTranslations ? "Temperature" : "Temperatur"}
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-md p-3 sm:p-4 border border-neutral-200 dark:border-neutral-600 hover:shadow-soft transition-all duration-200">
            <div className="text-sm sm:text-lg font-semibold text-neutral-800 dark:text-neutral-200 capitalize leading-tight">
              {weather.weather[0].description}
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {showTranslations ? "Condition" : "Wetterlage"}
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-md p-3 sm:p-4 border border-neutral-200 dark:border-neutral-600 hover:shadow-soft transition-all duration-200">
            <div className="text-lg sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {weather.main.humidity}%
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {showTranslations ? "Humidity" : "Luftfeuchtigkeit"}
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 rounded-md p-3 sm:p-4 border border-neutral-200 dark:border-neutral-600 hover:shadow-soft transition-all duration-200">
            <div className="text-lg sm:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {Math.round(weather.wind.speed)} km/h
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {showTranslations ? "Wind" : "Wind"}
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default WeatherWidget;
