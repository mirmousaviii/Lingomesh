import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import HeaderDropdown from "../../ui/Dropdown/HeaderDropdown";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  themeMode: string;
  handleThemeChange: (theme: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  themeMode,
  handleThemeChange,
  isSidebarOpen,
  setIsSidebarOpen,
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

  // Language options - Always in English regardless of selected language
  const languageOptions = [
    { value: "de" as Language, label: "German", text: "DE" },
    { value: "en" as Language, label: "English", text: "EN" },
    { value: "es" as Language, label: "Spanish", text: "ES" },
    { value: "ru" as Language, label: "Russian", text: "RU" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-xl h-16">
      <div className="px-3 sm:px-4 md:px-6 lg:px-2 h-full">
        {/* Full Header - Mobile Optimized */}
        <div className="flex items-center justify-between h-full">
          {/* Left side - Title and Description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3">
              {/* Sidebar Toggle Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <div className="flex items-center space-x-3">
                <h1 className="font-black bg-gradient-to-r from-primary-600 via-accent-600 to-accent-800 bg-clip-text text-transparent tracking-tight font-inter font-smooth text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  {t.app.name}
                </h1>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-400 font-medium lg:pl-4">
                  German Guide
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Settings Controls */}
          <div className="flex items-center justify-end space-x-3 ml-6 mr-4">
            {/* Language Selector */}
            <HeaderDropdown
              value={language}
              onChange={(value) => setLanguage(value as Language)}
              options={languageOptions}
              isScrolled={false}
              type="language"
            />

            {/* Theme Selector */}
            <HeaderDropdown
              value={themeMode}
              onChange={handleThemeChange}
              options={themeOptions}
              isScrolled={false}
              type="theme"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
