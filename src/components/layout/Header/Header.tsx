interface HeaderProps {
  showTranslations: boolean;
}

const Header: React.FC<HeaderProps> = ({ showTranslations }) => {
  return (
    <header className="text-center space-y-6 animate-fade-in-up">
      {/* Main Title */}
      <div className="space-y-4">
        <h1 className="text-responsive-xl font-bold text-gradient text-shadow-lg">
          <span className="text-german-bold">M</span>eine{" "}
          <span className="text-german-bold">O</span>rientierung
        </h1>

        {/* Subtitle */}
        <div className="space-y-2">
          <p className="text-responsive font-medium text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Um Uhrzeit, Datum und Wetter auf Deutsch zu lernen.
          </p>

          {showTranslations && (
            <p className="text-base text-muted italic max-w-3xl mx-auto">
              To learn time, date and weather in German.
            </p>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-german-500 rounded-full animate-float"></div>
        <div className="w-3 h-3 bg-german-500 rounded-full animate-bounce-gentle"></div>
        <div
          className="w-16 h-1 bg-gradient-to-r from-german-500 to-primary-500 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
