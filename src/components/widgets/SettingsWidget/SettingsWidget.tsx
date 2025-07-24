import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";

interface SettingsWidgetProps {
  language: Language;
  setLanguage: (language: Language) => void;
  themeMode: string;
  handleThemeChange: (theme: string) => void;
}

const SettingsWidget: React.FC<SettingsWidgetProps> = ({
  language,
  setLanguage,
  themeMode,
  handleThemeChange,
}) => {
  const t = useTranslation(language);

  // Theme options
  const themeOptions = [
    { value: "light", label: t.ui.light, icon: "☀️" },
    { value: "dark", label: t.ui.dark, icon: "🌙" },
  ];

  return (
    <Widget titleKey="einstellungen" language={language}>
      <div className="space-y-8">
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-white/20 dark:border-neutral-700/20 rounded-md shadow-soft hover:shadow-medium transition-all duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                {t.ui.uebersetzungen}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {language === "en"
                  ? t.ui.englishTranslationsVisible
                  : t.ui.englishTranslationsShow}
              </p>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                id="language-toggle"
                checked={language === "en"}
                onChange={(e) => setLanguage(e.target.checked ? "en" : "de")}
                className="sr-only"
              />
              <label
                htmlFor="language-toggle"
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-200 cursor-pointer ${
                  language === "en"
                    ? "bg-primary-600"
                    : "bg-neutral-300 dark:bg-neutral-600"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                    language === "en" ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-white/20 dark:border-neutral-700/20 rounded-md shadow-soft hover:shadow-medium transition-all duration-300 p-6">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            {t.ui.dark}
          </h4>
          <div className="flex items-center space-x-4">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleThemeChange(option.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  themeMode === option.value
                    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                <span className="text-lg">{option.icon}</span>
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default SettingsWidget;
