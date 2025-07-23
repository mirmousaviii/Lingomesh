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
    { value: "system", label: "System", icon: "⚙️" },
  ];

  return (
    <Widget
      title="Einstellungen"
      englishTitle={showTranslations ? "Settings" : undefined}
    >
      <div className="space-y-8">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Übersetzungen
              </h4>
              <p className="text-sm text-muted mt-1">
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
                className={`toggle-switch ${
                  showTranslations ? "toggle-switch-on" : "toggle-switch-off"
                }`}
              >
                <span
                  className={`toggle-switch-thumb ${
                    showTranslations
                      ? "toggle-switch-thumb-on"
                      : "toggle-switch-thumb-off"
                  }`}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
              Theme
            </h4>
            <p className="text-sm text-muted mt-1">
              {showTranslations
                ? "Choose your preferred theme"
                : "Wählen Sie Ihr bevorzugtes Theme"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {themeOptions.map((theme) => (
              <button
                key={theme.value}
                className={`flex flex-col items-center justify-center space-y-2 p-4 rounded-xl border-2 transition-all duration-200
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
