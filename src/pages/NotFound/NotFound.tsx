import { Language } from "../../hooks/useTranslations";

interface NotFoundProps {
  language: Language;
  onPageChange: (page: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ language, onPageChange }) => {
  // Translations object for cleaner code
  const translations = {
    de: {
      title: "404",
      subtitle: "Seite nicht gefunden",
      description: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
      homeButton: "Zur Startseite",
      backButton: "Zurück",
      helpText:
        "Versuchen Sie, die URL zu überprüfen oder verwenden Sie das Menü zur Navigation.",
    },
    en: {
      title: "404",
      subtitle: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      homeButton: "Go to Home",
      backButton: "Go Back",
      helpText: "Try checking the URL or use the menu to navigate.",
    },
    es: {
      title: "404",
      subtitle: "Página no encontrada",
      description: "La página que buscas no existe o ha sido movida.",
      homeButton: "Ir al Inicio",
      backButton: "Volver",
      helpText: "Intenta verificar la URL o usa el menú para navegar.",
    },
    ru: {
      title: "404",
      subtitle: "Страница не найдена",
      description:
        "Страница, которую вы ищете, не существует или была перемещена.",
      homeButton: "На главную",
      backButton: "Назад",
      helpText: "Попробуйте проверить URL или используйте меню для навигации.",
    },
  };

  // Get translations with fallback to English
  const t = translations[language] ?? translations.en;

  return (
    <div className="min-h-full bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center w-full">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            {/* Animated dots */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full animate-pulse"></div>
            <div
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-black bg-gradient-to-r from-primary-600 via-accent-600 to-accent-800 bg-clip-text text-transparent tracking-tight font-inter font-smooth mb-6">
          {t.title}
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
          {t.subtitle}
        </h2>

        {/* Description */}
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-md p-8 shadow-xl border border-neutral-200/60 dark:border-neutral-600/60 mb-8">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            {t.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange("home")}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200 transform "
            >
              {t.homeButton}
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100 font-medium rounded-md transition-all duration-200 transform "
            >
              {t.backButton}
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <p className="max-w-md mx-auto">{t.helpText}</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
