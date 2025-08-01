import { Language } from "../../hooks/useTranslations";
import { useTranslation } from "../../constants/translations";

interface LingoMeshFeaturesProps {
  language: Language;
}

const LingoMeshFeatures: React.FC<LingoMeshFeaturesProps> = ({ language }) => {
  const t = useTranslation(language);

  return (
    <div
      className="mt-12 sm:mt-16 text-center animate-fade-in mb-16"
      style={{ animationDelay: "1s", animationFillMode: "both" }}
    >
      <div className="relative bg-gradient-to-br from-blue-500 via-teal-500 to-green-600 dark:from-blue-600 dark:via-teal-600 dark:to-green-700 rounded-xl p-8 sm:p-12 shadow-2xl border border-blue-300 dark:border-blue-600 overflow-hidden animate-soft-glow">
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
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-white animate-pulse"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.5), 0 0 6px rgba(0,0,0,0.3)",
              }}
            >
              {t.home.lingoMeshFeatures}
            </h2>
            <div className="relative flex justify-center items-center mb-10">
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
                  className="w-96 h-1 bg-gradient-to-r from-cyan-400 via-white to-blue-500 rounded-full shadow-lg relative overflow-hidden"
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
                  className="absolute inset-0 w-96 h-1 bg-gradient-to-r from-cyan-400 via-white to-blue-500 rounded-full blur-sm opacity-50"
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
                  <circle cx="10" cy="10" r="8" className="animate-pulse" />
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
            <p
              className="text-white/80 text-md text-center mb-6 font-medium"
              style={{
                textShadow:
                  "1px 1px 3px rgba(0,0,0,0.6), 0 0 4px rgba(0,0,0,0.4)",
              }}
            >
              {t.home.platformSubtitle}
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
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
            <div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-300/30 shadow-2xl group hover:shadow-3xl hover:border-green-300 transition-all duration-300"
              style={{
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mb-3 mx-auto shadow-lg"
                style={{
                  boxShadow:
                    "0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white drop-shadow-lg"
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
              <p className="text-base text-center mb-2 text-white drop-shadow-lg">
                {t.home.interactive}
              </p>
              <p className="text-gray-300 text-sm text-center leading-relaxed font-medium">
                {t.home.interactiveDescription}
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-300/30 shadow-2xl group hover:shadow-3xl hover:border-blue-300 transition-all duration-300"
              style={{
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg mb-3 mx-auto shadow-lg"
                style={{
                  boxShadow:
                    "0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white drop-shadow-lg"
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
              <p className="text-base text-center mb-2 text-white drop-shadow-lg">
                {t.home.multilingual}
              </p>
              <p className="text-gray-300 text-sm text-center leading-relaxed font-medium">
                {t.home.multilingualDescription}
              </p>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-300/30 shadow-2xl group hover:shadow-3xl hover:border-purple-300 transition-all duration-300"
              style={{
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-3 mx-auto shadow-lg"
                style={{
                  boxShadow:
                    "0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white drop-shadow-lg"
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
              <p className="text-base text-center mb-2 text-white drop-shadow-lg">
                {t.home.dynamic}
              </p>
              <p className="text-gray-300 text-sm text-center leading-relaxed font-medium">
                {t.home.dynamicDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LingoMeshFeatures;
