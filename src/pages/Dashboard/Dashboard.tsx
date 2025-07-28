import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";

interface DashboardProps {
  language: Language;
  onPageChange: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ language, onPageChange }) => {
  const t = useTranslation(language);

  const features = [
    {
      id: "numbers",
      title: t.dashboard.learnNumbers,
      description: t.dashboard.learnNumbers,
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
      title: t.dashboard.learnTime,
      description: t.dashboard.learnTime,
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
      title: t.dashboard.learnDate,
      description: t.dashboard.learnDate,
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
      title: t.dashboard.learnWeather,
      description: t.dashboard.learnWeather,
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
      title: t.dashboard.learnArticles,
      description: t.dashboard.learnArticles,
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
      title: t.dashboard.learnPronouns,
      description: t.dashboard.learnPronouns,
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
      title: t.dashboard.learnVerbs,
      description: t.dashboard.learnVerbs,
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
      title: t.dashboard.learnPrepositions,
      description: t.dashboard.learnPrepositions,
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
      title: t.dashboard.learnDeclension,
      description: t.dashboard.learnDeclension,
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
      title: t.dashboard.learnQuestions,
      description: t.dashboard.learnQuestions,
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
            {t.dashboard.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t.dashboard.heroSubtitle}
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
                  {t.dashboard.startLearning}
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
      </div>
    </div>
  );
};

export default Dashboard;
