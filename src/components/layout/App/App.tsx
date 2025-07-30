import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { useRouting } from "../../../hooks/useRouting";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { MetaTags } from "../../SEO/MetaTags";

// Import all pages
import {
  Home,
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
  NotFound,
} from "../../../pages";

function App() {
  // State management
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Custom hooks
  const {
    currentLanguage,
    currentPage,
    isPageValid,
    changeLanguage,
    changePage,
  } = useRouting();
  const { themeMode, handleThemeChange } = useTheme();

  // Page rendering function
  const renderCurrentPage = () => {
    const pageProps = {
      language: currentLanguage,
      onPageChange: changePage,
    };

    // Show 404 page if the current page is not valid
    if (!isPageValid) {
      return <NotFound {...pageProps} />;
    }

    switch (currentPage) {
      case "home":
        return <Home {...pageProps} />;
      case "articles":
        return <Articles {...pageProps} />;
      case "adjectives":
        return <Articles {...pageProps} />; // Placeholder - create Adjectives component
      case "adverbs":
        return <Articles {...pageProps} />; // Placeholder - create Adverbs component
      case "declension":
        return <Declension {...pageProps} />;
      case "prepositions":
        return <Prepositions {...pageProps} />;
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
      case "alphabet":
        return <Articles {...pageProps} />; // Placeholder - create Alphabet component
      case "countries":
        return <Articles {...pageProps} />; // Placeholder - create Countries component
      // Verb-related pages
      case "verb-conjugator":
        return <Verbs {...pageProps} />;
      case "modal-verbs":
        return <Verbs {...pageProps} />;
      case "passive-voice":
        return <Verbs {...pageProps} />;
      case "reflexive-verbs":
        return <Verbs {...pageProps} />;
      // Tense-related pages
      case "present-tense":
        return <Verbs {...pageProps} />;
      case "perfect-tense":
        return <Verbs {...pageProps} />;
      case "past-tense":
        return <Verbs {...pageProps} />;
      case "past-perfect":
        return <Verbs {...pageProps} />;
      case "future-tense":
        return <Verbs {...pageProps} />;
      case "future-perfect":
        return <Verbs {...pageProps} />;
      case "irregular-verbs":
        return <Verbs {...pageProps} />;
      case "tenses-overview":
        return <Verbs {...pageProps} />;
      // Pronoun-related pages
      case "personal-pronouns":
        return <Pronouns {...pageProps} />;
      case "possessives":
        return <Pronouns {...pageProps} />;
      case "reflexive-pronouns":
        return <Pronouns {...pageProps} />;
      case "relative-pronouns":
        return <Pronouns {...pageProps} />;
      case "interrogative-pronouns":
        return <Pronouns {...pageProps} />;
      case "demonstrative-pronouns":
        return <Pronouns {...pageProps} />;
      case "indefinite-pronouns":
        return <Pronouns {...pageProps} />;
      // Useful phrases pages
      case "general-phrases":
        return <Articles {...pageProps} />; // Placeholder - create Phrases component
      case "classroom-phrases":
        return <Articles {...pageProps} />; // Placeholder - create Phrases component
      case "restaurant-phrases":
        return <Articles {...pageProps} />; // Placeholder - create Phrases component
      case "home-phrases":
        return <Articles {...pageProps} />; // Placeholder - create Phrases component
      case "friends-phrases":
        return <Articles {...pageProps} />; // Placeholder - create Phrases component
      // 404 page
      case "404":
        return <NotFound {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-500">
      {/* SEO Meta Tags */}
      <MetaTags
        language={currentLanguage}
        page={currentPage}
        is404={!isPageValid}
      />

      {/* Header */}
      <Header
        language={currentLanguage}
        setLanguage={changeLanguage}
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
          onPageChange={changePage}
          language={currentLanguage}
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
