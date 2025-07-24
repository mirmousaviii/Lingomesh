import React from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
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
  language: Language;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  weather,
  loading,
  error,
  selectedCity,
  setSelectedCity,
  germanCities,
  language,
}) => {
  const t = useTranslation(language);

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

    // Weather description mappings
    const weatherDescriptions: { [key: string]: string } = {
      "clear sky": "klarer Himmel",
      "few clouds": "wenige Wolken",
      "scattered clouds": "verstreute Wolken",
      "broken clouds": "bewölkt",
      "overcast clouds": "bedeckt",
      "light rain": "leichter Regen",
      "moderate rain": "mäßiger Regen",
      "heavy rain": "starker Regen",
      "light snow": "leichter Schnee",
      "moderate snow": "mäßiger Schnee",
      "heavy snow": "starker Schnee",
      mist: "Nebel",
      fog: "Nebel",
      haze: "Dunst",
      smoke: "Rauch",
      dust: "Staub",
      sand: "Sand",
      ash: "Asche",
      squall: "Böen",
      tornado: "Tornado",
      thunderstorm: "Gewitter",
      drizzle: "Nieselregen",
      rain: "Regen",
      snow: "Schnee",
      sleet: "Schneeregen",
      "freezing rain": "gefrierender Regen",
      "shower rain": "Regenschauer",
      "thunderstorm with light rain": "Gewitter mit leichtem Regen",
      "thunderstorm with rain": "Gewitter mit Regen",
      "thunderstorm with heavy rain": "Gewitter mit starkem Regen",
    };

    const weatherWord =
      weatherDescriptions[description.toLowerCase()] || description;

    return `In ${selectedCity} ist es ${tempWord} Grad Celsius mit ${weatherWord}`;
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

  if (loading) {
    return (
      <Widget titleKey="wetter" language={language}>
        <div className="flex items-center justify-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      </Widget>
    );
  }

  if (error) {
    return (
      <Widget titleKey="wetter" language={language}>
        <div className="text-center text-red-600 dark:text-red-400">
          {error}
        </div>
      </Widget>
    );
  }

  if (!weather) {
    return (
      <Widget titleKey="wetter" language={language}>
        <div className="text-center text-neutral-600 dark:text-neutral-400">
          {t.weather.stadtAuswaehlen}
        </div>
      </Widget>
    );
  }

  return (
    <Widget titleKey="wetter" language={language}>
      <div className="space-y-6">
        {/* City Selector */}
        <div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10"
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

        {/* Weather Display */}
        <div className="text-center space-y-4">
          {/* Weather Icon and Temperature */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex flex-col items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="w-16 h-16"
              />
              <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 font-space-grotesk">
                {Math.round(weather.main.temp)}°C
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <p className="text-xl text-accent-600 dark:text-accent-400 font-medium italic font-ibm-plex">
              {convertWeatherToGermanPhonetic(weather)}
            </p>
            <button
              onClick={() => speakText(convertWeatherToGermanPhonetic(weather))}
              className="flex-shrink-0 p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
              title={t.ui.listen}
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

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-md p-3 border border-neutral-200 dark:border-neutral-600">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-ibm-plex">
              {t.weather.temperatur}
            </div>
            <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 font-space-grotesk">
              {Math.round(weather.main.temp)}°C
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-md p-3 border border-neutral-200 dark:border-neutral-600">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-ibm-plex">
              {t.weather.luftfeuchtigkeit}
            </div>
            <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 font-space-grotesk">
              {weather.main.humidity}%
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-md p-3 border border-neutral-200 dark:border-neutral-600">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-ibm-plex">
              {t.weather.windgeschwindigkeit}
            </div>
            <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 font-space-grotesk">
              {Math.round(weather.wind.speed)} m/s
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-700/50 rounded-md p-3 border border-neutral-200 dark:border-neutral-600">
            <div className="text-sm text-neutral-600 dark:text-neutral-400 font-ibm-plex">
              {t.weather.beschreibung}
            </div>
            <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 capitalize font-space-grotesk">
              {weather.weather[0].description}
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default WeatherWidget;
