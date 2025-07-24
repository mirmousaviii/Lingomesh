import { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  themeMode: string;
  handleThemeChange: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  themeMode,
  handleThemeChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslation(language);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme options
  const themeOptions = [
    {
      value: "light",
      label: t.ui.light,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      value: "dark",
      label: t.ui.dark,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ),
    },
  ];

  // Language options
  const languageOptions = [
    { value: "de" as Language, label: t.ui.german, text: "DE" },
    { value: "en" as Language, label: t.ui.english, text: "EN" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Settings Controls */}
        <div className="flex items-center justify-end py-3 sm:py-4">
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="flex items-center bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-600/60">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  className={`w-12 h-10 px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                    language === option.value
                      ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => setLanguage(option.value)}
                  title={option.label}
                >
                  <span className="text-sm font-medium">{option.text}</span>
                </button>
              ))}
            </div>

            {/* Theme Selector */}
            <div className="flex items-center bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-600/60">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  className={`w-12 h-10 px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                    themeMode === option.value
                      ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => handleThemeChange(option.value)}
                  title={option.label}
                >
                  {option.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Header Content */}
        <div
          className={`transition-all duration-700 ease-out ${
            isScrolled ? "py-3" : "py-6 sm:py-8"
          }`}
        >
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent leading-tight tracking-tight font-space-grotesk">
              <span className="text-accent-600 dark:text-accent-400 font-black drop-shadow-sm">
                M
              </span>
              eine{" "}
              <span className="text-accent-600 dark:text-accent-400 font-black drop-shadow-sm">
                O
              </span>
              rientierung
            </h1>

            {/* Subtitle - Animated */}
            <div
              className={`transition-all duration-700 ease-out overflow-hidden ${
                isScrolled
                  ? "max-h-0 opacity-0 scale-95"
                  : "max-h-40 opacity-100 scale-100"
              }`}
            >
              <div className="space-y-3 sm:space-y-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold text-neutral-800 dark:text-neutral-200 max-w-5xl mx-auto leading-relaxed px-4 tracking-wide font-ibm-plex">
                  {language === "en"
                    ? "German learning dashboard: grammar, phrases, time, date & weather."
                    : "Deutsch-Lern-Dashboard: Grammatik, Redewendungen, Uhrzeit, Datum und Wetter."}
                </p>

                {/* Translation options removed as per new language system */}
              </div>
            </div>

            {/* Decorative Elements - Animated */}
            <div
              className={`transition-all duration-700 ease-out ${
                isScrolled
                  ? "max-h-0 opacity-0 scale-95"
                  : "max-h-12 opacity-100 scale-100"
              } overflow-hidden`}
            >
              <div className="flex items-center justify-center space-x-3 sm:space-x-6">
                <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-full animate-float shadow-lg"></div>
                <div className="w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full animate-bounce-gentle shadow-lg"></div>
                <div
                  className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-accent-500 via-primary-500 to-accent-600 rounded-full animate-float shadow-lg"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
