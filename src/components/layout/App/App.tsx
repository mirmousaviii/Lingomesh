import { useState, useEffect } from "react";
import { WeatherData } from "../../../types/weather";
import { weatherService } from "../../../services/weatherService";
import { GERMAN_CITIES } from "../../../constants/cities";
import { useTheme } from "../../../hooks/useTheme";
import { useTranslations } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";

import Header from "../Header/Header";
import TimeWidget from "../../widgets/TimeWidget/TimeWidget";
import DateWidget from "../../widgets/DateWidget/DateWidget";
import WeatherWidget from "../../widgets/WeatherWidget/WeatherWidget";
import Footer from "../Footer/Footer";
import NumberConverterWidget from "../../widgets/NumberConverterWidget/NumberConverterWidget";
import VerbConjugationWidget from "../../widgets/VerbConjugationWidget/VerbConjugationWidget";
import GermanArticlesWidget from "../../widgets/GermanArticlesWidget/GermanArticlesWidget";
import GermanQuestionsWidget from "../../widgets/GermanQuestionsWidget/GermanQuestionsWidget";
import GermanVerbsPrepositionsWidget from "../../widgets/GermanVerbsPrepositionsWidget/GermanVerbsPrepositionsWidget";
import GermanVerbTensesWidget from "../../widgets/GermanVerbTensesWidget/GermanVerbTensesWidget";
import GermanPersonalPronounsWidget from "../../widgets/GermanPersonalPronounsWidget/GermanPersonalPronounsWidget";
import GermanAdjectiveDeclensionWidget from "../../widgets/GermanAdjectiveDeclensionWidget/GermanAdjectiveDeclensionWidget";

function App() {
  // State management
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  // Custom hooks
  const { language, setLanguage } = useTranslations();
  const { themeMode, handleThemeChange } = useTheme();
  const t = useTranslation(language);

  // Update time every minute
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timeInterval);
  }, []);

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
      setError(t.weather.wetterdatenFehler);
      console.error("Weather fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-16 animate-fade-in">
          {/* Header Section */}
          <Header
            language={language}
            setLanguage={setLanguage}
            themeMode={themeMode}
            handleThemeChange={handleThemeChange}
          />

          {/* Main Content */}
          <main className="space-y-16">
            {/* Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                {/* A1 Level - Beginner */}
                <GermanArticlesWidget language={language} />
                <GermanPersonalPronounsWidget language={language} />
                <VerbConjugationWidget language={language} />

                {/* A2 Level - Elementary */}
                <GermanQuestionsWidget language={language} />

                {/* B1 Level - Intermediate */}
                <GermanVerbsPrepositionsWidget language={language} />
                <GermanVerbTensesWidget language={language} />

                {/* B2+ Level - Upper Intermediate/Advanced */}
                <GermanAdjectiveDeclensionWidget language={language} />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                  <TimeWidget
                    currentTime={currentTime}
                    is24Hour={is24HourFormat}
                    setIs24Hour={setIs24HourFormat}
                    language={language}
                  />
                  <DateWidget currentTime={currentTime} language={language} />
                </div>
                <WeatherWidget
                  weather={weather}
                  loading={isLoading}
                  error={error}
                  selectedCity={selectedCity}
                  setSelectedCity={setSelectedCity}
                  germanCities={GERMAN_CITIES}
                  language={language}
                />
                <NumberConverterWidget language={language} />
              </div>
            </div>
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
