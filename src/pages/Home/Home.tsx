import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";

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

          {/* Additional Info Section */}
          <div
            className="mt-8 sm:mt-12 text-center animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
            <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 dark:from-purple-600 dark:via-pink-600 dark:to-indigo-700 rounded-lg p-6 sm:p-8 shadow-2xl border border-purple-300 dark:border-purple-600 overflow-hidden animate-soft-glow">
              {/* Shimmer effect overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"
                style={{
                  pointerEvents: "none",
                  animationDuration: "10s",
                }}
              ></div>
              {/* Sparkle effects */}
              <div className="absolute top-3 right-6 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"></div>
              <div
                className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-sparkle"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-sparkle"
                style={{ animationDelay: "1s" }}
              ></div>
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg mb-3 border border-white/30 animate-glow">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x animate-pulse">
                    {t.home.lingoMeshFeatures}
                  </h2>
                  <div className="relative flex justify-center items-center my-4">
                    {/* Magical sparkle animation */}
                    <div className="absolute left-1/4 -top-2 w-3 h-3 bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-400 rounded-full blur-sm animate-pulse-sparkle animate-bounce"></div>
                    <div
                      className="absolute right-1/4 -bottom-2 w-2 h-2 bg-gradient-to-br from-cyan-300 to-purple-400 rounded-full blur-sm animate-pulse-sparkle animate-bounce"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                    <div
                      className="absolute left-1/2 top-0 w-1.5 h-1.5 bg-gradient-to-br from-white to-blue-300 rounded-full blur-sm animate-pulse-sparkle animate-bounce"
                      style={{ animationDelay: "1.2s" }}
                    ></div>
                    {/* Magical glowing line with animated width and shimmer */}
                    <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-white to-blue-500 rounded-full shadow-lg animate-magical-glow relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
                    </div>
                    {/* New: Animated floating icons */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-float-x">
                      <svg
                        className="w-4 h-4 text-yellow-200 opacity-80"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle cx="10" cy="10" r="8" />
                      </svg>
                    </div>
                    <div className="absolute -right-8 top-1/3 animate-float-y">
                      <svg
                        className="w-3 h-3 text-pink-200 opacity-70"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <rect x="4" y="4" width="12" height="12" rx="3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Feature highlights */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-2 mx-auto">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/80 text-xs font-medium text-center mb-1">
                      {t.home.interactive}
                    </p>
                    <p className="text-white/60 text-xs text-center leading-tight">
                      {t.home.interactiveDescription}
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-2 mx-auto">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5h18M7 5v1a1 1 0 01-1 1H6a1 1 0 01-1-1V5a2 2 0 012-2h6a2 2 0 012 2v1a1 1 0 01-1 1H8a1 1 0 01-1-1V5a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/80 text-xs font-medium text-center mb-1">
                      {t.home.multilingual}
                    </p>
                    <p className="text-white/60 text-xs text-center leading-tight">
                      {t.home.multilingualDescription}
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 group">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-2 mx-auto">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                    <p className="text-white/80 text-xs font-medium text-center mb-1">
                      {t.home.dynamic}
                    </p>
                    <p className="text-white/60 text-xs text-center leading-tight">
                      {t.home.dynamicDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
