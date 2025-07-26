import { Language } from "../../hooks/useTranslations";

interface DashboardProps {
  language: Language;
  onPageChange: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ language, onPageChange }) => {
  const isGerman = language === "de";

  const features = [
    {
      id: "numbers",
      title: isGerman ? "Zahlen" : "Numbers",
      description: isGerman
        ? "Lernen Sie deutsche Zahlen"
        : "Learn German numbers",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      id: "time",
      title: isGerman ? "Zeit" : "Time",
      description: isGerman
        ? "Lernen Sie die deutsche Zeit"
        : "Learn German time",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      id: "date",
      title: isGerman ? "Datum" : "Date",
      description: isGerman
        ? "Lernen Sie die deutsche Datumsangabe"
        : "Learn German date",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      id: "weather",
      title: isGerman ? "Wetter" : "Weather",
      description: isGerman
        ? "Grundlegende Wetterbegriffe auf Deutsch"
        : "Basic weather terms in German",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      color: "bg-cyan-500",
    },
    {
      id: "articles",
      title: isGerman ? "Artikel" : "Articles",
      description: isGerman
        ? "Lernen Sie die deutschen Artikel"
        : "Learn German articles",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "bg-orange-500",
    },
    {
      id: "pronouns",
      title: isGerman ? "Personalpronomen" : "Personal Pronouns",
      description: isGerman
        ? "Deutsche Personalpronomen lernen"
        : "Learn German personal pronouns",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: "bg-pink-500",
    },
    {
      id: "verbs",
      title: isGerman ? "Verben" : "Verbs",
      description: isGerman
        ? "Deutsche Verbkonjugation im Präsens"
        : "German verb conjugation in present tense",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "bg-red-500",
    },
    {
      id: "prepositions",
      title: isGerman ? "Präpositionen" : "Prepositions",
      description: isGerman
        ? "Verben mit Präpositionen lernen"
        : "Learn verbs with prepositions",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-indigo-500",
    },
    {
      id: "declension",
      title: isGerman ? "Adjektivdeklination" : "Adjective Declension",
      description: isGerman
        ? "Adjektive in allen Fällen deklinieren"
        : "Decline adjectives in all cases",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-teal-500",
    },
    {
      id: "questions",
      title: isGerman ? "Fragen" : "Questions",
      description: isGerman
        ? "Deutsche Fragen richtig stellen"
        : "Ask German questions correctly",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {isGerman ? "Lasst uns Deutsch lernen!" : "Let's learn German!"}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {isGerman
              ? "Entdecken Sie unsere interaktiven Lernmodule für die deutsche Sprache"
              : "Discover our interactive learning modules for the German language"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => onPageChange(feature.id)}
              className="group bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`${feature.color} text-white p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-left">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">
                  {isGerman ? "Jetzt lernen" : "Start learning"}
                </span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-6 border border-primary-200 dark:border-primary-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {isGerman ? "Simple" : "Simple"}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {isGerman ? "Lernmodule" : "Learning Modules"}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {isGerman ? "Interaktiv" : "Interactive"}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {isGerman
                  ? "mit interaktiven Übungen"
                  : "With interactive exercises"}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                DE/EN
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {isGerman ? "Zweisprachig" : "Bilingual"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
