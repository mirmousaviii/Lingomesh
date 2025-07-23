interface HeaderProps {
  showTranslations: boolean;
}

const Header: React.FC<HeaderProps> = ({ showTranslations }) => {
  return (
    <header className="text-center space-y-6 animate-fade-in-up">
      {/* Main Title */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent text-shadow-lg">
          <span className="text-accent-700 dark:text-accent-300 font-semibold">
            M
          </span>
          eine{" "}
          <span className="text-accent-700 dark:text-accent-300 font-semibold">
            O
          </span>
          rientierung
        </h1>

        {/* Subtitle */}
        <div className="space-y-2">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Um Uhrzeit, Datum und Wetter auf Deutsch zu lernen.
          </p>

          {showTranslations && (
            <p className="text-base text-neutral-600 dark:text-neutral-400 italic max-w-3xl mx-auto">
              To learn time, date and weather in German.
            </p>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-float"></div>
        <div className="w-3 h-3 bg-accent-500 rounded-full animate-bounce-gentle"></div>
        <div
          className="w-16 h-1 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
