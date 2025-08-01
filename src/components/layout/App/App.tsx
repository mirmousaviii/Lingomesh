import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { useRouting } from "../../../hooks/useRouting";
import { useLanguageSelection } from "../../../hooks/useLanguageSelection";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { MetaTags } from "../../SEO/MetaTags";
import LanguageSelectionModal from "../../ui/LanguageSelectionModal";
import RootHandler from "../RootHandler";
import ScrollToTop from "../ScrollToTop";

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
  ComingSoon,
  NotFound,
} from "../../../pages";

function App() {
  // State management
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
  const { showLanguageModal, handleLanguageSelect, openModal } =
    useLanguageSelection();

  // Page rendering function
  const renderCurrentPage = () => {
    const pageProps = {
      language: currentLanguage,
      onPageChange: changePage,
    };

    // Special handling for root path
    if (window.location.pathname === "/") {
      return <Home {...pageProps} />;
    }

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
        return <ComingSoon {...pageProps} />;
      case "adverbs":
        return <ComingSoon {...pageProps} />;
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
        return <ComingSoon {...pageProps} />;
      case "countries":
        return <ComingSoon {...pageProps} />;
      // Verb-related pages
      case "verb-conjugator":
        return <Verbs {...pageProps} />;
      case "modal-verbs":
        return <ComingSoon {...pageProps} />;
      case "passive-voice":
        return <ComingSoon {...pageProps} />;
      case "reflexive-verbs":
        return <ComingSoon {...pageProps} />;
      // Tense-related pages
      case "present-tense":
        return <ComingSoon {...pageProps} />;
      case "perfect-tense":
        return <ComingSoon {...pageProps} />;
      case "past-tense":
        return <ComingSoon {...pageProps} />;
      case "past-perfect":
        return <ComingSoon {...pageProps} />;
      case "future-tense":
        return <ComingSoon {...pageProps} />;
      case "future-perfect":
        return <ComingSoon {...pageProps} />;
      case "irregular-verbs":
        return <ComingSoon {...pageProps} />;
      case "tenses-overview":
        return <ComingSoon {...pageProps} />;
      // Pronoun-related pages
      case "personal-pronouns":
        return <Pronouns {...pageProps} />;
      case "possessives":
        return <ComingSoon {...pageProps} />;
      case "reflexive-pronouns":
        return <ComingSoon {...pageProps} />;
      case "relative-pronouns":
        return <ComingSoon {...pageProps} />;
      case "interrogative-pronouns":
        return <ComingSoon {...pageProps} />;
      case "demonstrative-pronouns":
        return <ComingSoon {...pageProps} />;
      case "indefinite-pronouns":
        return <ComingSoon {...pageProps} />;
      // Useful phrases pages
      case "general-phrases":
        return <ComingSoon {...pageProps} />;
      case "classroom-phrases":
        return <ComingSoon {...pageProps} />;
      case "restaurant-phrases":
        return <ComingSoon {...pageProps} />;
      case "home-phrases":
        return <ComingSoon {...pageProps} />;
      case "friends-phrases":
        return <ComingSoon {...pageProps} />;
      // 404 page
      case "404":
        return <NotFound {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <RootHandler>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 theme-transition">
        {/* SEO Meta Tags */}
        <MetaTags
          language={currentLanguage}
          page={currentPage}
          is404={!isPageValid}
        />

        {/* Language Selection Modal */}
        <LanguageSelectionModal
          isOpen={showLanguageModal}
          onLanguageSelect={handleLanguageSelect}
        />

        {/* Header */}
        <Header
          language={currentLanguage}
          setLanguage={changeLanguage}
          themeMode={themeMode}
          handleThemeChange={handleThemeChange}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          openModal={openModal}
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
          <div className="flex-1 flex flex-col overflow-hidden theme-transition">
            {/* Content Area */}
            <main className="flex-1 overflow-y-auto theme-transition">
              {renderCurrentPage()}
            </main>
          </div>
        </div>
      </div>
    </RootHandler>
  );
}

export default App;
