import { Language } from "../../hooks/useTranslations";

interface NotFoundProps {
  language: Language;
  onPageChange: (page: string) => void;
}

const NotFound: React.FC<NotFoundProps> = ({ language, onPageChange }) => {
  return (
    <div className="flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 pt-12">
      <div className="text-center px-4">
        {/* 404 Icon */}
        <div className="mb-8">
          <svg
            className="mx-auto h-32 w-32 text-neutral-400 dark:text-neutral-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 9a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
          {language === "de" && "Seite nicht gefunden"}
          {language === "en" && "Page Not Found"}
          {language === "es" && "Página no encontrada"}
          {language === "ru" && "Страница не найдена"}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          {language === "de" &&
            "Die gesuchte Seite existiert nicht oder wurde verschoben."}
          {language === "en" &&
            "The page you're looking for doesn't exist or has been moved."}
          {language === "es" &&
            "La página que buscas no existe o ha sido movida."}
          {language === "ru" &&
            "Страница, которую вы ищете, не существует или была перемещена."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onPageChange("home")}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            {language === "de" && "Zur Startseite"}
            {language === "en" && "Go to Home"}
            {language === "es" && "Ir al Inicio"}
            {language === "ru" && "На главную"}
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-900 dark:text-neutral-100 font-medium rounded-lg transition-colors duration-200"
          >
            {language === "de" && "Zurück"}
            {language === "en" && "Go Back"}
            {language === "es" && "Volver"}
            {language === "ru" && "Назад"}
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-sm text-neutral-500 dark:text-neutral-500">
          <p>
            {language === "de" &&
              "Versuchen Sie, die URL zu überprüfen oder verwenden Sie das Menü zur Navigation."}
            {language === "en" &&
              "Try checking the URL or use the menu to navigate."}
            {language === "es" &&
              "Intenta verificar la URL o usa el menú para navegar."}
            {language === "ru" &&
              "Попробуйте проверить URL или используйте меню для навигации."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
