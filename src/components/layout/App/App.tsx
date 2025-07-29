import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { useTranslations } from "../../../hooks/useTranslations";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500">
      {/* Header */}
      <Header
        language={language}
        setLanguage={setLanguage}
        themeMode={themeMode}
        handleThemeChange={handleThemeChange}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <Sidebar
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          language={language}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {renderCurrentPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
