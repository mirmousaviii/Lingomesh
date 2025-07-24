import React from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";
import Dropdown from "../../ui/Dropdown/Dropdown";
import AudioButton from "../../ui/AudioButton/AudioButton";

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
        {/* City Selector Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {t.weather.stadtAuswaehlen}
          </label>
          <Dropdown
            value={selectedCity}
            onChange={setSelectedCity}
            options={germanCities.map((city) => ({
              value: city,
              label: city,
            }))}
          />
        </div>

        {/* Weather Display Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {t.widgets.wetter}
          </label>
          <div className="w-full px-4 py-3 text-lg border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
            <div className="flex items-center justify-center gap-4">
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
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed break-words hyphens-auto text-accent-600 dark:text-accent-400 font-medium italic font-ibm-plex">
                  {convertWeatherToGermanPhonetic(weather)}
                </p>
              </div>

              <AudioButton
                onClick={() =>
                  speakText(convertWeatherToGermanPhonetic(weather))
                }
                title={t.ui.listen}
                size="lg"
              />
            </div>
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
