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
            <div className="relative bg-gradient-to-br from-blue-500 via-teal-500 to-green-600 dark:from-blue-600 dark:via-teal-600 dark:to-green-700 rounded-lg p-6 sm:p-8 shadow-2xl border border-blue-300 dark:border-blue-600 overflow-hidden animate-soft-glow">
              {/* Shimmer effect overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer"
                style={{
                  pointerEvents: "none",
                  animationDuration: "10s",
                }}
              ></div>

              {/* Enhanced Background Animated Objects */}

              {/* Floating geometric shapes */}
              <div
                className="absolute top-4 left-20 w-2 h-2 border-2 border-white/20 rounded-lg animate-float-x animate-pulse"
                style={{ animationDuration: "15s" }}
              ></div>
              <div
                className="absolute top-10 left-20 w-4 h-4 rounded-full bg-white/10 animate-float-y animate-pulse"
                style={{ animationDuration: "10s", animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-6 right-6 w-4 h-4 border border-white/30 rounded-full animate-float-y"
                style={{ animationDuration: "12s", animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-2 w-3 h-3 bg-white/10 rounded-full animate-pulse"
                style={{ animationDelay: "2s", animationDuration: "4s" }}
              ></div>

              {/* Animated particles */}
              <div
                className="absolute top-1/4 left-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-ping"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-cyan-200 rounded-full animate-ping"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              ></div>
              <div
                className="absolute top-3/4 left-1/2 w-1 h-1 bg-pink-200 rounded-full animate-ping"
                style={{ animationDelay: "3s", animationDuration: "3s" }}
              ></div>
              <div
                className="absolute bottom-1/2 left-1/4 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping"
                style={{ animationDelay: "4.5s", animationDuration: "3s" }}
              ></div>

              {/* Rotating elements */}
              <div
                className="absolute top-2 right-1/4 w-4 h-4 border border-white/40 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>

              {/* Glowing orbs */}
              <div className="absolute top-1/3 right-2 w-2 h-2 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse blur-sm"></div>
              <div
                className="absolute bottom-1/3 left-2 w-2.5 h-2.5 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full animate-pulse blur-sm"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-pulse blur-sm"
                style={{ animationDelay: "4s" }}
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
                <div className="py-4">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6 drop-shadow-lg text-white animate-pulse">
                    {t.home.lingoMeshFeatures}
                  </h2>
                  <div className="relative flex justify-center items-center mb-8">
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
                    {/* Enhanced animated line with multiple effects */}
                    <div className="relative">
                      {/* Main animated line */}
                      <div
                        className="w-64 h-1 bg-gradient-to-r from-cyan-400 via-white to-blue-500 rounded-full shadow-lg relative overflow-hidden"
                        style={{ animation: "pulse 3s ease-in-out infinite" }}
                      >
                        {/* Shimmer effect */}
                        <div
                          className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                          style={{
                            animation: "shimmer 4s ease-in-out infinite",
                          }}
                        ></div>
                        {/* Moving dots */}
                        <div
                          className="absolute top-0 left-0 w-2 h-2 bg-yellow-300 rounded-full"
                          style={{
                            animation: "bounce 2s ease-in-out infinite",
                            animationDelay: "0s",
                          }}
                        ></div>
                        <div
                          className="absolute top-0 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full"
                          style={{
                            animation: "bounce 2s ease-in-out infinite",
                            animationDelay: "1s",
                          }}
                        ></div>
                        <div
                          className="absolute top-0 right-0 w-2 h-2 bg-cyan-300 rounded-full"
                          style={{
                            animation: "bounce 2s ease-in-out infinite",
                            animationDelay: "2s",
                          }}
                        ></div>
                      </div>

                      {/* Glow effect */}
                      <div
                        className="absolute inset-0 w-64 h-1 bg-gradient-to-r from-cyan-400 via-white to-blue-500 rounded-full blur-sm opacity-50"
                        style={{ animation: "pulse 3s ease-in-out infinite" }}
                      ></div>

                      {/* Floating particles around the line */}
                      <div
                        className="absolute -top-2 left-1/4 w-1 h-1 bg-yellow-200 rounded-full"
                        style={{ animation: "ping 3s ease-in-out infinite" }}
                      ></div>
                      <div
                        className="absolute -bottom-2 right-1/4 w-1 h-1 bg-pink-200 rounded-full"
                        style={{
                          animation: "ping 3s ease-in-out infinite",
                          animationDelay: "1.5s",
                        }}
                      ></div>
                      <div
                        className="absolute -top-1 left-3/4 w-0.5 h-0.5 bg-cyan-200 rounded-full"
                        style={{
                          animation: "ping 3s ease-in-out infinite",
                          animationDelay: "3s",
                        }}
                      ></div>
                    </div>
                    {/* Enhanced Animated floating icons and shapes */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 animate-float-x">
                      <svg
                        className="w-4 h-4 text-yellow-200 opacity-80"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="8"
                          className="animate-pulse"
                        />
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

                    {/* Additional floating elements around the line */}
                    <div
                      className="absolute -left-12 top-1/4 w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full animate-float-y blur-sm"
                      style={{ animationDuration: "10s" }}
                    ></div>
                    <div
                      className="absolute -right-12 bottom-1/4 w-1.5 h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-float-x blur-sm"
                      style={{ animationDuration: "14s", animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute -left-16 bottom-1/3 w-3 h-3 border border-white/40 rounded-full animate-spin"
                      style={{ animationDuration: "20s" }}
                    ></div>

                    {/* Floating particles above and below the line */}
                    <div
                      className="absolute -top-6 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"
                      style={{ animationDelay: "0s", animationDuration: "4s" }}
                    ></div>
                    <div
                      className="absolute -bottom-6 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"
                      style={{ animationDelay: "2s", animationDuration: "4s" }}
                    ></div>
                    <div
                      className="absolute -top-4 right-1/3 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-ping"
                      style={{ animationDelay: "4s", animationDuration: "4s" }}
                    ></div>
                    <div
                      className="absolute -bottom-4 left-1/3 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-ping"
                      style={{ animationDelay: "6s", animationDuration: "4s" }}
                    ></div>
                  </div>

                  {/* Subtitle text below the line */}
                  <p className="text-white/70 text-sm text-center mb-6 font-medium">
                    {t.home.platformSubtitle}
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
                  {/* Background animated elements for feature boxes */}
                  <div className="absolute -top-2 left-1/4 w-3 h-3 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full animate-pulse blur-sm opacity-60"></div>
                  <div
                    className="absolute -bottom-2 right-1/4 w-2 h-2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse blur-sm opacity-60"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 -left-2 w-2.5 h-2.5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full animate-pulse blur-sm opacity-60"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 -right-2 w-2 h-2 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-pulse blur-sm opacity-60"
                    style={{ animationDelay: "3s" }}
                  ></div>

                  {/* Floating geometric shapes around feature boxes */}
                  <div
                    className="absolute top-1/2 -left-4 w-2 h-2 border border-white/30 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  ></div>
                  <div
                    className="absolute top-1/2 -right-4 w-2.5 h-2.5 border border-white/25 rounded-full animate-spin"
                    style={{
                      animationDuration: "24s",
                      animationDirection: "reverse",
                    }}
                  ></div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-green-300/30 shadow-2xl group">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-3 mx-auto">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-medium text-center mb-2">
                      {t.home.interactive}
                    </p>
                    <p className="text-white/60 text-xs text-center leading-relaxed">
                      {t.home.interactiveDescription}
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-blue-300/30 shadow-2xl group">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-3 mx-auto">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-medium text-center mb-2">
                      {t.home.multilingual}
                    </p>
                    <p className="text-white/60 text-xs text-center leading-relaxed">
                      {t.home.multilingualDescription}
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-purple-300/30 shadow-2xl group">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 mx-auto">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-medium text-center mb-2">
                      {t.home.dynamic}
                    </p>
                    <p className="text-white/60 text-xs text-center leading-relaxed">
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
