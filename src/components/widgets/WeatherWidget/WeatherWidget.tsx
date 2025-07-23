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

  // Loading state
  if (loading) {
    return (
      <Widget
        title="Wetter"
        englishTitle={showTranslations ? "Weather" : undefined}
      >
        <div className="flex flex-col items-center justify-center h-full text-center py-12 space-y-6">
          <div className="loading-spinner w-12 h-12"></div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
              Wetter wird geladen...
            </p>
            {showTranslations && (
              <p className="text-sm text-muted">Loading weather...</p>
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
            <p className="text-sm text-muted">
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
          <p className="text-muted">
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
      <div className="flex flex-col justify-between h-full space-y-6">
        <div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="select-field w-full"
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
            className="mx-auto"
          />
          <p className="text-xl text-german italic">
            {convertWeatherToGermanPhonetic(weather)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="stat-card">
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="text-sm font-medium text-muted">
              {showTranslations ? "Temperature" : "Temperatur"}
            </div>
          </div>
          <div className="stat-card">
            <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 capitalize">
              {weather.weather[0].description}
            </div>
            <div className="text-sm font-medium text-muted">
              {showTranslations ? "Condition" : "Wetterlage"}
            </div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {weather.main.humidity}%
            </div>
            <div className="text-sm font-medium text-muted">
              {showTranslations ? "Humidity" : "Luftfeuchtigkeit"}
            </div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">
              {Math.round(weather.wind.speed)} km/h
            </div>
            <div className="text-sm font-medium text-muted">
              {showTranslations ? "Wind" : "Wind"}
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default WeatherWidget;
