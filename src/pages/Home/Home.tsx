import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";
import LingoMeshFeatures from "../../components/LingoMeshFeatures";

interface HomeProps {
  language: Language;
  onPageChange: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ language, onPageChange }) => {
  const t = useTranslation(language);

  const features = [
    {
      id: "numbers",
      title: t.home.learnNumbers,
      description: t.home.numbersDescription,
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
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
    },
    {
      id: "time",
      title: t.home.learnTime,
      description: t.home.timeDescription,
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
      color: "bg-gradient-to-br from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
    },
    {
      id: "date",
      title: t.home.learnDate,
      description: t.home.dateDescription,
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
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
    },
    {
      id: "weather",
      title: t.home.learnWeather,
      description: t.home.weatherDescription,
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
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      hoverColor: "hover:from-cyan-600 hover:to-cyan-700",
    },
    {
      id: "articles",
      title: t.home.learnArticles,
      description: t.home.articlesDescription,
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
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
    },
    {
      id: "personal-pronouns",
      title: t.home.learnPronouns,
      description: t.home.pronounsDescription,
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
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-600 hover:to-pink-700",
    },
    {
      id: "verb-conjugator",
      title: t.home.learnVerbs,
      description: t.home.verbsDescription,
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
      color: "bg-gradient-to-br from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
    },
    {
      id: "prepositions",
      title: t.home.learnPrepositions,
      description: t.home.prepositionsDescription,
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
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700",
    },
    {
      id: "declension",
      title: t.home.learnDeclension,
      description: t.home.declensionDescription,
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
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      hoverColor: "hover:from-teal-600 hover:to-teal-700",
    },
    {
      id: "questions",
      title: t.home.learnQuestions,
      description: t.home.questionsDescription,
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
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      hoverColor: "hover:from-yellow-600 hover:to-yellow-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16">
        <div className="animate-fade-in max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent mb-4 sm:mb-6 animate-fade-in">
                {t.home.heroTitle}
              </h2>
              <p
                className="text-lg sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                {t.app.tagline}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => onPageChange(feature.id)}
                className="group relative bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105 hover:-translate-y-1 overflow-hidden animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div
                      className={`${feature.color} ${feature.hoverColor} text-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 text-left mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* LingoMesh Features Section */}
          <LingoMeshFeatures language={language} />
        </div>
      </div>
    </div>
  );
};

export default Home;
