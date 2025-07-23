import { useState, useEffect } from "react";
import { WeatherData } from "../../../types/weather";
import { weatherService } from "../../../services/weatherService";
import { GERMAN_CITIES } from "../../../constants/cities";
import { useTheme } from "../../../hooks/useTheme";
import { useTranslations } from "../../../hooks/useTranslations";

import Header from "../Header/Header";
import TimeWidget from "../../widgets/TimeWidget/TimeWidget";
import DateWidget from "../../widgets/DateWidget/DateWidget";
import WeatherWidget from "../../widgets/WeatherWidget/WeatherWidget";
import SettingsWidget from "../../widgets/SettingsWidget/SettingsWidget";
import Footer from "../Footer/Footer";
import NumberConverterWidget from "../../widgets/NumberConverterWidget/NumberConverterWidget";

function App() {
  // State management
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [is24HourFormat, setIs24HourFormat] = useState(false);

  // Custom hooks
  const { showTranslations, setShowTranslations } = useTranslations();
  const { themeMode, handleThemeChange } = useTheme();

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
      setError("Wetterdaten konnten nicht geladen werden");
      console.error("Weather fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-neutral-100 to-german-100 dark:from-neutral-950 dark:via-primary-950 dark:to-german-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-12 animate-fade-in">
          {/* Header Section */}
          <Header showTranslations={showTranslations} />

          {/* Main Widgets Grid */}
          <main className="space-y-12">
            <div className="grid-auto-fit">
              <TimeWidget
                currentTime={currentTime}
                is24Hour={is24HourFormat}
                setIs24Hour={setIs24HourFormat}
                showTranslations={showTranslations}
              />
              <DateWidget
                currentTime={currentTime}
                showTranslations={showTranslations}
              />
              <WeatherWidget
                weather={weather}
                loading={isLoading}
                error={error}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                germanCities={GERMAN_CITIES}
                showTranslations={showTranslations}
              />
              <NumberConverterWidget showTranslations={showTranslations} />
            </div>

            {/* Settings Section */}
            <SettingsWidget
              showTranslations={showTranslations}
              setShowTranslations={setShowTranslations}
              themeMode={themeMode}
              handleThemeChange={handleThemeChange}
            />
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
