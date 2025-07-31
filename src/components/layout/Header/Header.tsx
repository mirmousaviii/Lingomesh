import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import HeaderDropdown from "../../ui/Dropdown/HeaderDropdown";
import ThemeToggle from "../../ui/ThemeToggle";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  themeMode: string;
  handleThemeChange: (theme: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  themeMode,
  handleThemeChange,
  isSidebarOpen,
  setIsSidebarOpen,
  openModal,
}) => {
  const t = useTranslation(language);

  // Language display options
  const languageOptions = [
    {
      value: language,
      label: language.toUpperCase(),
      text: language.toUpperCase(),
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 shadow-xl h-16 theme-transition">
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
                <h1 className="font-black bg-gradient-to-r from-primary-600 via-accent-600 to-accent-800 bg-clip-text text-transparent tracking-tight font-inter font-smooth text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl">
                  <a href={`/${language}`}>{t.app.name}</a>
                </h1>
                <span className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-tight text-neutral-600 dark:text-neutral-400 font-medium lg:pl-4">
                  {t.app.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Settings Controls */}
          <div className="flex items-center justify-end space-x-3 sm:space-x-4 ml-1 mr-0 md:mr-4 lg:mr-5 xl:mr-6">
            {/* Language Selector */}
            <HeaderDropdown
              value={language}
              onChange={(value) => setLanguage(value as Language)}
              options={languageOptions}
              type="language"
              onClick={openModal}
            />

            {/* Theme Toggle */}
            <ThemeToggle
              themeMode={themeMode}
              handleThemeChange={handleThemeChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
