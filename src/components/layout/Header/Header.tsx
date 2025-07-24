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
  const t = useTranslation(language);

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
    <header className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Full Header - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-6 space-y-4 sm:space-y-0">
          {/* Left side - Title and Description */}
          <div className="flex-1 min-w-0">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent leading-tight tracking-tight font-space-grotesk">
                <span className="text-accent-600 dark:text-accent-400 font-black drop-shadow-sm">
                  M
                </span>
                eine{" "}
                <span className="text-accent-600 dark:text-accent-400 font-black drop-shadow-sm">
                  O
                </span>
                rientierung
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-neutral-800 dark:text-neutral-200 max-w-4xl leading-relaxed tracking-wide font-ibm-plex">
                {language === "en"
                  ? "German learning dashboard: grammar, phrases, time, date & weather."
                  : "Deutsch-Lern-Dashboard: Grammatik, Redewendungen, Uhrzeit, Datum und Wetter."}
              </p>
            </div>
          </div>

          {/* Right side - Settings Controls */}
          <div className="flex items-center justify-center sm:justify-end space-x-3 sm:ml-6">
            {/* Language Selector */}
            <div className="flex items-center bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-600/60">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  className={`w-12 h-10 sm:w-14 sm:h-12 px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center touch-manipulation ${
                    language === option.value
                      ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => setLanguage(option.value)}
                  title={option.label}
                >
                  <span className="text-sm sm:text-base font-medium">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Theme Selector */}
            <div className="flex items-center bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-600/60">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  className={`w-12 h-10 sm:w-14 sm:h-12 px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center touch-manipulation ${
                    themeMode === option.value
                      ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => handleThemeChange(option.value)}
                  title={option.label}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {option.value === "light" ? (
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    )}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
