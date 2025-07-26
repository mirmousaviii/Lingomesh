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
  const t = useTranslation(language);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle scroll events to determine if header should be compact
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollDelta = Math.abs(scrollTop - lastScrollTop);

      // Only process scroll events if user is actively scrolling (not automatic adjustments)
      if (scrollDelta > 1) {
        setLastScrollTop(scrollTop);

        // Prevent header changes during transitions to avoid oscillation
        if (!isTransitioning) {
          if (scrollTop > 100 && !isScrolled) {
            setIsTransitioning(true);
            setIsScrolled(true);
            // Allow header changes again after transition completes
            setTimeout(() => setIsTransitioning(false), 300);
          } else if (scrollTop <= 10 && isScrolled) {
            // Only expand header when user scrolls back to the very top
            setIsTransitioning(true);
            setIsScrolled(false);
            // Allow header changes again after transition completes
            setTimeout(() => setIsTransitioning(false), 300);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, lastScrollTop, isTransitioning]);

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
    <header
      className={`bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-xl transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Full Header - Mobile Optimized */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center justify-between sm:space-y-0 transition-all duration-300 relative ${
            isScrolled ? "py-2" : "py-4 sm:py-6"
          }`}
        >
          {/* Left side - Title and Description */}
          <div className="flex-1 min-w-0">
            <div
              className={`space-y-2 sm:space-y-3 transition-all duration-300 ${
                isScrolled ? "space-y-0 sm:space-y-2" : "space-y-2 sm:space-y-3"
              }`}
            >
              <h1
                className={`font-black bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent leading-tight tracking-tight font-space-grotesk transition-all duration-300 ${
                  isScrolled
                    ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                    : "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                }`}
              >
                <span className="text-accent-600 dark:text-accent-400 font-black drop-shadow-sm">
                  M
                </span>
                eine{" "}
                <span className="text-accent-600 dark:text-accent-400 font-black drop-shadow-sm">
                  O
                </span>
                rientierung
              </h1>

              <p
                className={`font-medium text-neutral-800 dark:text-neutral-200 max-w-4xl leading-relaxed tracking-wide font-ibm-plex transition-all duration-300 pb-2 ${
                  isScrolled
                    ? "text-sm sm:text-base md:text-base lg:text-lg opacity-0 max-h-0 overflow-hidden"
                    : "text-sm sm:text-base md:text-lg lg:text-xl opacity-100 max-h-20"
                }`}
              >
                {language === "en"
                  ? "Learn German easily & interactively – with grammar explanations, examples, exercises, quizzes and smart learning tools."
                  : "Deutsch lernen einfach & interaktiv – mit Grammatik-Erklärungen, Beispielen, Übungen, Quizzes und smarten Lern-Tools."}
              </p>
            </div>
          </div>

          {/* Right side - Settings Controls */}
          <div
            className={`flex items-center justify-end space-x-3 sm:ml-6 transition-all duration-300 ${
              isScrolled
                ? "absolute right-0 top-0 bottom-0 flex items-center space-x-2"
                : "space-x-3"
            }`}
          >
            {/* Language Selector */}
            <div className="flex items-center bg-neutral-100/80 dark:bg-neutral-800/80 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-600/60">
              {languageOptions.map((option) => (
                <button
                  key={option.value}
                  className={`px-3 py-2 rounded-md transition-all duration-300 flex items-center justify-center touch-manipulation ${
                    isScrolled
                      ? "w-8 h-6 sm:w-10 sm:h-8"
                      : "w-12 h-10 sm:w-14 sm:h-12"
                  } ${
                    language === option.value
                      ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => setLanguage(option.value)}
                  title={option.label}
                >
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"
                    }`}
                  >
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
                  className={`px-2 py-1 rounded-md transition-all duration-300 flex items-center justify-center touch-manipulation ${
                    isScrolled
                      ? "w-8 h-6 sm:w-10 sm:h-8"
                      : "w-12 h-10 sm:w-14 sm:h-12"
                  } ${
                    themeMode === option.value
                      ? "bg-white dark:bg-neutral-700 text-primary-600 dark:text-primary-400"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                  }`}
                  onClick={() => handleThemeChange(option.value)}
                  title={option.label}
                >
                  <svg
                    className={`fill-current transition-all duration-300 ${
                      isScrolled
                        ? "w-4 h-4 sm:w-5 sm:h-5"
                        : "w-5 h-5 sm:w-6 sm:h-6"
                    }`}
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
