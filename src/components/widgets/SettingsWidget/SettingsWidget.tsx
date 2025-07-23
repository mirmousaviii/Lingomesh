import Widget from "../../ui/Widget/Widget";

interface SettingsWidgetProps {
  showTranslations: boolean;
  setShowTranslations: (show: boolean) => void;
  themeMode: string;
  handleThemeChange: (theme: string) => void;
}

const SettingsWidget: React.FC<SettingsWidgetProps> = ({
  showTranslations,
  setShowTranslations,
  themeMode,
  handleThemeChange,
}) => {
  // Handle translation toggle
  const handleTranslationToggle = (checked: boolean) => {
    setShowTranslations(checked);
    localStorage.setItem("showTranslations", JSON.stringify(checked));
  };

  // Theme options
  const themeOptions = [
    { value: "light", label: "Light", icon: "☀️" },
    { value: "dark", label: "Dark", icon: "🌙" },
  ];

  return (
    <Widget
      title="Einstellungen"
      englishTitle={showTranslations ? "Settings" : undefined}
    >
      <div className="space-y-8">
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-white/20 dark:border-neutral-700/20 rounded-md shadow-soft hover:shadow-medium transition-all duration-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Übersetzungen
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {showTranslations
                  ? "English translations are visible"
                  : "Englische Übersetzungen anzeigen"}
              </p>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                id="translations-toggle"
                checked={showTranslations}
                onChange={(e) => handleTranslationToggle(e.target.checked)}
                className="sr-only"
              />
              <label
                htmlFor="translations-toggle"
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-200 cursor-pointer ${
                  showTranslations
                    ? "bg-primary-600"
                    : "bg-neutral-300 dark:bg-neutral-600"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                    showTranslations ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md border border-white/20 dark:border-neutral-700/20 rounded-md shadow-soft hover:shadow-medium transition-all duration-300 p-6">
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
              Theme
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {showTranslations
                ? "Choose your preferred theme"
                : "Wählen Sie Ihr bevorzugtes Theme"}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {themeOptions.map((theme) => (
              <button
                key={theme.value}
                className={`flex flex-col items-center justify-center space-y-2 p-4 rounded-md border-2 transition-all duration-200
                  ${
                    themeMode === theme.value
                      ? "border-primary-500 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200 shadow-soft"
                      : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-primary-400 dark:hover:border-primary-500"
                  }
                `}
                onClick={() => handleThemeChange(theme.value)}
              >
                <span className="text-2xl">{theme.icon}</span>
                <span className="text-sm font-medium">{theme.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default SettingsWidget;
