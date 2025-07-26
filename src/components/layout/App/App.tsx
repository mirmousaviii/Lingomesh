import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { useTranslations } from "../../../hooks/useTranslations";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

// Import all pages
import {
  Dashboard,
  Articles,
  Pronouns,
  Verbs,
  Prepositions,
  Declension,
  Questions,
  Numbers,
  Time,
  Date,
  Weather,
} from "../../../pages";

function App() {
  // State management
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Custom hooks
  const { language, setLanguage } = useTranslations();
  const { themeMode, handleThemeChange } = useTheme();

  // Page rendering function
  const renderCurrentPage = () => {
    const pageProps = { language, onPageChange: setCurrentPage };

    switch (currentPage) {
      case "dashboard":
        return <Dashboard {...pageProps} />;
      case "articles":
        return <Articles {...pageProps} />;
      case "pronouns":
        return <Pronouns {...pageProps} />;
      case "verbs":
        return <Verbs {...pageProps} />;
      case "prepositions":
        return <Prepositions {...pageProps} />;
      case "declension":
        return <Declension {...pageProps} />;
      case "questions":
        return <Questions {...pageProps} />;
      case "numbers":
        return <Numbers {...pageProps} />;
      case "time":
        return <Time {...pageProps} />;
      case "date":
        return <Date {...pageProps} />;
      case "weather":
        return <Weather {...pageProps} />;
      default:
        return <Dashboard {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      {/* Sticky Header and Navigation Container */}
      <div className="sticky top-0 z-header">
        {/* Header Section */}
        <Header
          language={language}
          setLanguage={setLanguage}
          themeMode={themeMode}
          handleThemeChange={handleThemeChange}
        />

        {/* Navigation Section */}
        <Navigation
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          language={language}
        />
      </div>

      {/* Main Content */}
      <div className="min-h-screen">{renderCurrentPage()}</div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
