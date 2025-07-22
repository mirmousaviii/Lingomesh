import React, { useState, useEffect } from "react";
import axios from "axios";
import { WEATHER_API_KEY } from "./config";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [is24Hour, setIs24Hour] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState("light");
  const [themeMode, setThemeMode] = useState("system"); // 'light', 'dark', 'system'

  // Popular German cities
  const germanCities = [
    "Berlin",
    "Hamburg",
    "München",
    "Köln",
    "Frankfurt",
    "Stuttgart",
    "Düsseldorf",
    "Dortmund",
    "Essen",
    "Leipzig",
    "Bremen",
    "Dresden",
    "Hannover",
    "Nürnberg",
    "Duisburg",
    "Bochum",
    "Wuppertal",
    "Bielefeld",
    "Bonn",
    "Mannheim",
    "Karlsruhe",
    "Wiesbaden",
    "Münster",
    "Gelsenkirchen",
    "Aachen",
    "Braunschweig",
    "Chemnitz",
    "Kiel",
    "Halle",
    "Magdeburg",
  ];

  // Theme management
  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    let themeModeToUse = savedThemeMode || "system";

    setThemeMode(themeModeToUse);

    if (themeModeToUse === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      setTheme(themeModeToUse);
      document.documentElement.setAttribute("data-theme", themeModeToUse);
    }
  }, []);

  // Translation management
  useEffect(() => {
    const savedTranslations = localStorage.getItem("showTranslations");
    if (savedTranslations !== null) {
      setShowTranslations(JSON.parse(savedTranslations));
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (themeMode === "system") {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode]);

  const handleThemeChange = (newThemeMode) => {
    setThemeMode(newThemeMode);
    localStorage.setItem("themeMode", newThemeMode);

    if (newThemeMode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      setTheme(newThemeMode);
      document.documentElement.setAttribute("data-theme", newThemeMode);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute since we removed seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},DE&appid=${WEATHER_API_KEY}&units=metric&lang=de`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Wetterdaten konnten nicht geladen werden");
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to convert time to German words
  const timeToGerman = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // For 24-hour mode, keep 24-hour format in German text
    // For 12-hour mode, convert to 12-hour format for German text
    if (!is24Hour) {
      if (hours === 0) hours = 12;
      else if (hours > 12) hours = hours - 12;
    }

    const germanNumbers = {
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
    };

    const germanMinutes = {
      0: "",
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
      41: "einundvierzig",
      42: "zweiundvierzig",
      43: "dreiundvierzig",
      44: "vierundvierzig",
      45: "fünfundvierzig",
      46: "sechsundvierzig",
      47: "siebenundvierzig",
      48: "achtundvierzig",
      49: "neunundvierzig",
      50: "fünfzig",
      51: "einundfünfzig",
      52: "zweiundfünfzig",
      53: "dreiundfünfzig",
      54: "vierundfünfzig",
      55: "fünfundfünfzig",
      56: "sechsundfünfzig",
      57: "siebenundfünfzig",
      58: "achtundfünfzig",
      59: "neunundfünfzig",
    };

    let germanTime = "";

    if (minutes === 0) {
      germanTime = `${germanNumbers[hours]} Uhr`;
    } else if (minutes <= 30) {
      germanTime = `${germanMinutes[minutes]} nach ${germanNumbers[hours]}`;
    } else {
      const remainingMinutes = 60 - minutes;
      let nextHour = hours + 1;

      // Handle hour overflow based on time format
      if (!is24Hour) {
        if (nextHour > 12) {
          nextHour = nextHour - 12;
        }
        if (nextHour === 0) {
          nextHour = 12;
        }
      } else {
        if (nextHour > 23) {
          nextHour = 0;
        }
      }

      germanTime = `${germanMinutes[remainingMinutes]} vor ${germanNumbers[nextHour]}`;
    }

    return germanTime;
  };

  // Function to convert time to English words
  const timeToEnglish = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // For 24-hour mode, keep 24-hour format in English text
    // For 12-hour mode, convert to 12-hour format for English text
    if (!is24Hour) {
      if (hours === 0) hours = 12;
      else if (hours > 12) hours = hours - 12;
    }

    const englishNumbers = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      21: "twenty-one",
      22: "twenty-two",
      23: "twenty-three",
    };

    const englishMinutes = {
      0: "",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      21: "twenty-one",
      22: "twenty-two",
      23: "twenty-three",
      24: "twenty-four",
      25: "twenty-five",
      26: "twenty-six",
      27: "twenty-seven",
      28: "twenty-eight",
      29: "twenty-nine",
      30: "thirty",
      31: "thirty-one",
      32: "thirty-two",
      33: "thirty-three",
      34: "thirty-four",
      35: "thirty-five",
      36: "thirty-six",
      37: "thirty-seven",
      38: "thirty-eight",
      39: "thirty-nine",
      40: "forty",
      41: "forty-one",
      42: "forty-two",
      43: "forty-three",
      44: "forty-four",
      45: "forty-five",
      46: "forty-six",
      47: "forty-seven",
      48: "forty-eight",
      49: "forty-nine",
      50: "fifty",
      51: "fifty-one",
      52: "fifty-two",
      53: "fifty-three",
      54: "fifty-four",
      55: "fifty-five",
      56: "fifty-six",
      57: "fifty-seven",
      58: "fifty-eight",
      59: "fifty-nine",
    };

    let englishTime = "";

    if (minutes === 0) {
      englishTime = `${englishNumbers[hours]} o'clock`;
    } else if (minutes <= 30) {
      englishTime = `${englishMinutes[minutes]} past ${englishNumbers[hours]}`;
    } else {
      const remainingMinutes = 60 - minutes;
      let nextHour = hours + 1;

      // Handle hour overflow based on time format
      if (!is24Hour) {
        if (nextHour > 12) {
          nextHour = nextHour - 12;
        }
        if (nextHour === 0) {
          nextHour = 12;
        }
      } else {
        if (nextHour > 23) {
          nextHour = 0;
        }
      }

      englishTime = `${englishMinutes[remainingMinutes]} to ${englishNumbers[nextHour]}`;
    }

    return englishTime;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !is24Hour,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateEnglish = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getWeatherDescription = (weatherData) => {
    if (!weatherData) return "";

    const temp = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;

    return `Es ist ${description} bei ${temp}°C`;
  };

  const getWeatherDescriptionEnglish = (weatherData) => {
    if (!weatherData) return "";

    const temp = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;

    // Convert German weather descriptions to English
    const weatherTranslations = {
      klar: "clear",
      bewölkt: "cloudy",
      "leicht bewölkt": "partly cloudy",
      "stark bewölkt": "very cloudy",
      Nebel: "foggy",
      Nebelschwaden: "misty",
      "leichter Regen": "light rain",
      Regen: "rain",
      "starker Regen": "heavy rain",
      Schneeregen: "sleet",
      Schnee: "snow",
      "leichter Schneefall": "light snow",
      Gewitter: "thunderstorm",
      "Gewitter mit Regen": "thunderstorm with rain",
      "leichter Schneefall": "light snow",
      "starker Schneefall": "heavy snow",
      Hagel: "hail",
      Sprühregen: "drizzle",
      "leichter Sprühregen": "light drizzle",
      "starker Sprühregen": "heavy drizzle",
    };

    const englishDescription = weatherTranslations[description] || description;

    return `It is ${englishDescription} at ${temp}°C`;
  };

  function dateToGermanPhonetic(date) {
    // Example: Freitag, 7. Juni 2024 => Freitag, siebter Juni zweitausendvierundzwanzig
    const days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    const months = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    // Convert day to ordinal (e.g., siebter for 7)
    const ordinals = {
      1: "erster",
      2: "zweiter",
      3: "dritter",
      4: "vierter",
      5: "fünfter",
      6: "sechster",
      7: "siebter",
      8: "achter",
      9: "neunter",
      10: "zehnter",
      11: "elfter",
      12: "zwölfter",
      13: "dreizehnter",
      14: "vierzehnter",
      15: "fünfzehnter",
      16: "sechzehnter",
      17: "siebzehnter",
      18: "achtzehnter",
      19: "neunzehnter",
      20: "zwanzigster",
      21: "einundzwanzigster",
      22: "zweiundzwanzigster",
      23: "dreiundzwanzigster",
      24: "vierundzwanzigster",
      25: "fünfundzwanzigster",
      26: "sechsundzwanzigster",
      27: "siebenundzwanzigster",
      28: "achtundzwanzigster",
      29: "neunundzwanzigster",
      30: "dreißigster",
      31: "einunddreißigster",
    };
    // Year to words (improved version)
    function yearToGermanWords(y) {
      const units = [
        "",
        "eins",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
      ];
      const teens = [
        "zehn",
        "elf",
        "zwölf",
        "dreizehn",
        "vierzehn",
        "fünfzehn",
        "sechzehn",
        "siebzehn",
        "achtzehn",
        "neunzehn",
      ];
      const tens = [
        "",
        "zehn",
        "zwanzig",
        "dreißig",
        "vierzig",
        "fünfzig",
        "sechzig",
        "siebzig",
        "achtzig",
        "neunzig",
      ];
      function numberToGerman(n) {
        if (n === 0) return "null";
        if (n < 10) return units[n];
        if (n < 20) return teens[n - 10];
        if (n % 10 === 0) return tens[Math.floor(n / 10)];
        return units[n % 10] + "und" + tens[Math.floor(n / 10)];
      }
      if (y >= 2000 && y < 2100) {
        // 2000-2099: zweitausend...
        if (y === 2000) return "zweitausend";
        return "zweitausend" + (y % 100 === 0 ? "" : numberToGerman(y % 100));
      } else if (y >= 1900 && y < 2000) {
        // 1900-1999: neunzehnhundert...
        if (y === 1900) return "neunzehnhundert";
        return (
          "neunzehnhundert" + (y % 100 === 0 ? "" : numberToGerman(y % 100))
        );
      } else if (y >= 1800 && y < 1900) {
        if (y === 1800) return "achtzehnhundert";
        return (
          "achtzehnhundert" + (y % 100 === 0 ? "" : numberToGerman(y % 100))
        );
      } else if (y >= 2100 && y < 2200) {
        if (y === 2100) return "einundzwanzighundert";
        return (
          "einundzwanzighundert" +
          (y % 100 === 0 ? "" : numberToGerman(y % 100))
        );
      } else {
        // fallback: just return the number
        return y;
      }
    }
    return `${dayOfWeek}, ${ordinals[day]} ${month} ${yearToGermanWords(year)}`;
  }

  function weatherToGermanPhonetic(weatherData) {
    if (!weatherData) return "";
    // Example: Es ist leicht bewölkt bei 18°C => Es ist leicht bewölkt bei achtzehn Grad Celsius
    const temp = Math.round(weatherData.main.temp);
    const description = weatherData.weather[0].description;
    // Numbers in German (0-40)
    const numbers = [
      "null",
      "eins",
      "zwei",
      "drei",
      "vier",
      "fünf",
      "sechs",
      "sieben",
      "acht",
      "neun",
      "zehn",
      "elf",
      "zwölf",
      "dreizehn",
      "vierzehn",
      "fünfzehn",
      "sechzehn",
      "siebzehn",
      "achtzehn",
      "neunzehn",
      "zwanzig",
      "einundzwanzig",
      "zweiundzwanzig",
      "dreiundzwanzig",
      "vierundzwanzig",
      "fünfundzwanzig",
      "sechsundzwanzig",
      "siebenundzwanzig",
      "achtundzwanzig",
      "neunundzwanzig",
      "dreißig",
      "einunddreißig",
      "zweiunddreißig",
      "dreiunddreißig",
      "vierunddreißig",
      "fünfunddreißig",
      "sechsunddreißig",
      "siebenunddreißig",
      "achtunddreißig",
      "neununddreißig",
      "vierzig",
    ];
    let tempWord = temp >= 0 && temp <= 40 ? numbers[temp] : temp;
    return `Es ist ${description} bei ${tempWord} Grad Celsius`;
  }

  return (
    <div className="App">
      <div className="unified-container">
        <div className="header">
          <div className="app-title">
            <span className="mo-highlight">M</span>eine{" "}
            <span className="mo-highlight">O</span>rientierung
          </div>
          <div className="app-subtitle">
            Um Uhrzeit, Datum und Wetter auf Deutsch zu lernen.
          </div>
          {showTranslations && (
            <div className="app-subtitle-english">
              To learn time, date and weather in German.
            </div>
          )}
        </div>

        <div className="widgets-container">
          {/* Time Widget */}
          <div className="widget time-widget">
            <div className="widget-header">
              <h3>Zeit</h3>
              {showTranslations && (
                <div className="widget-header-english">Time</div>
              )}
            </div>
            <div className="widget-content">
              <div className="digital-time">{formatTime(currentTime)}</div>
              <div className="german-phonetic">{timeToGerman(currentTime)}</div>
              <div className="time-format-controls">
                <div className="format-buttons">
                  <button
                    className={`format-btn ${!is24Hour ? "active" : ""}`}
                    onClick={() => setIs24Hour(false)}
                  >
                    12h
                  </button>
                  <button
                    className={`format-btn ${is24Hour ? "active" : ""}`}
                    onClick={() => setIs24Hour(true)}
                  >
                    24h
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Date Widget */}
          <div className="widget date-widget">
            <div className="widget-header">
              <h3>Datum</h3>
              {showTranslations && (
                <div className="widget-header-english">Date</div>
              )}
            </div>
            <div className="widget-content">
              {showTranslations ? (
                <div className="date-row">
                  <div className="date">{formatDate(currentTime)}</div>
                  <div className="date-english">
                    {formatDateEnglish(currentTime)}
                  </div>
                </div>
              ) : (
                <div className="date">{formatDate(currentTime)}</div>
              )}
              <div className="german-phonetic">
                {dateToGermanPhonetic(currentTime)}
              </div>
            </div>
          </div>

          {/* Weather Widget */}
          <div className="widget weather-widget">
            <div className="widget-header">
              <h3>Wetter</h3>
              {showTranslations && (
                <div className="widget-header-english">Weather</div>
              )}
            </div>
            <div className="widget-content">
              {loading ? (
                <div className="weather-loading">
                  Wetter wird geladen...
                  {showTranslations && (
                    <div className="weather-loading-english">
                      Loading weather...
                    </div>
                  )}
                </div>
              ) : error ? (
                <div className="weather-error">
                  {error}
                  {showTranslations && (
                    <div className="weather-error-english">
                      Weather data could not be loaded
                    </div>
                  )}
                </div>
              ) : (
                weather && (
                  <div className="stats-grid">
                    <div className="stat-widget">
                      <div className="city-label-container">
                        <label className="city-label">Stadt</label>
                        {showTranslations && (
                          <label className="city-label-english">City</label>
                        )}
                      </div>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="city-select"
                      >
                        {germanCities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="stat-widget german-phonetic">
                      {weatherToGermanPhonetic(weather)}
                    </div>
                    <div className="stat-widget">
                      <div className="stat-icon">🌡️</div>
                      <div className="stat-info">
                        <span className="stat-value">
                          {Math.round(weather.main.temp)}°C
                        </span>
                        <span className="stat-label">Temperatur</span>
                        {showTranslations && (
                          <span className="stat-english">Temperature</span>
                        )}
                      </div>
                    </div>
                    <div className="stat-widget">
                      <div className="stat-icon">🌤️</div>
                      <div className="stat-info">
                        <span className="stat-value">
                          {weather.weather[0].description}
                        </span>
                        <span className="stat-label">Wetterlage</span>
                        {showTranslations && (
                          <span className="stat-english">
                            Weather Condition
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="stat-widget">
                      <div className="stat-icon">💧</div>
                      <div className="stat-info">
                        <span className="stat-value">
                          {weather.main.humidity}%
                        </span>
                        <span className="stat-label">Luftfeuchtigkeit</span>
                        {showTranslations && (
                          <span className="stat-english">Humidity</span>
                        )}
                      </div>
                    </div>
                    <div className="stat-widget">
                      <div className="stat-icon">💨</div>
                      <div className="stat-info">
                        <span className="stat-value">
                          {Math.round(weather.wind.speed)} km/h
                        </span>
                        <span className="stat-label">Wind</span>
                        {showTranslations && (
                          <span className="stat-english">Wind Speed</span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="widget settings-widget">
          <div className="widget-header">
            <h3>Einstellungen</h3>
            {showTranslations && (
              <div className="widget-header-english">Settings</div>
            )}
          </div>
          <div className="widget-content">
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-icon">🌐</div>
                  <div className="setting-details">
                    <label className="setting-label">
                      Englische Übersetzungen anzeigen
                    </label>
                    {showTranslations && (
                      <span className="setting-description-english">
                        Show English translations
                      </span>
                    )}
                  </div>
                </div>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    id="translations-toggle"
                    checked={showTranslations}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      setShowTranslations(newValue);
                      localStorage.setItem(
                        "showTranslations",
                        JSON.stringify(newValue)
                      );
                    }}
                  />
                  <label
                    htmlFor="translations-toggle"
                    className="toggle-slider"
                  ></label>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-icon">🎨</div>
                  <div className="setting-details">
                    <label className="setting-label">Theme</label>
                    {showTranslations && (
                      <span className="setting-description-english">Theme</span>
                    )}
                  </div>
                </div>
                <div className="theme-selector">
                  <button
                    className={`theme-btn ${
                      themeMode === "light" ? "active" : ""
                    }`}
                    onClick={() => handleThemeChange("light")}
                  >
                    <span className="theme-icon">☀️</span>
                    Light
                  </button>
                  <button
                    className={`theme-btn ${
                      themeMode === "dark" ? "active" : ""
                    }`}
                    onClick={() => handleThemeChange("dark")}
                  >
                    <span className="theme-icon">🌙</span>
                    Dark
                  </button>
                  <button
                    className={`theme-btn ${
                      themeMode === "system" ? "active" : ""
                    }`}
                    onClick={() => handleThemeChange("system")}
                  >
                    <span className="theme-icon">⚙️</span>
                    System
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p className="copyright">
            © {new Date().getFullYear()} Meine Orientierung. Developed by{" "}
            <a
              href="https://mirmousavi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              mirmousavi.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
