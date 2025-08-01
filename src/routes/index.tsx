import { createBrowserRouter } from "react-router-dom";
import App from "../components/layout/App/App";
import { Language } from "../hooks/useTranslations";

// Define the available languages
export const SUPPORTED_LANGUAGES: Language[] = ["de", "en", "es", "ru"];

// Define the category and page structure
export const CATEGORY_STRUCTURE = {
  home: {
    id: "home",
    path: "home",
    children: {},
  },
  vocabulary: {
    id: "vocabulary",
    path: "vocabulary",
    children: {
      alphabet: { id: "alphabet", path: "alphabet" },
      number: { id: "number", path: "number" },
      time: { id: "time", path: "time" },
      date: { id: "date", path: "date" },
      weather: { id: "weather", path: "weather" },
      country: { id: "country", path: "country" },
    },
  },
  grammar: {
    id: "grammar",
    path: "grammar",
    children: {
      verb: {
        id: "verb-main",
        path: "verb",
        children: {
          "verb-conjugator": { id: "verb", path: "verb-conjugator" },
          "modal-verb": { id: "modal-verb", path: "modal-verb" },
          "passive-voice": { id: "passive-voice", path: "passive-voice" },
          "reflexive-verb": { id: "reflexive-verb", path: "reflexive-verb" },
        },
      },
      tense: {
        id: "tense",
        path: "tense",
        children: {
          "present-tense": { id: "present-tense", path: "present-tense" },
          "perfect-tense": { id: "perfect-tense", path: "perfect-tense" },
          "past-tense": { id: "past-tense", path: "past-tense" },
          "past-perfect": { id: "past-perfect", path: "past-perfect" },
          "future-tense": { id: "future-tense", path: "future-tense" },
          "future-perfect": { id: "future-perfect", path: "future-perfect" },
          "irregular-verb": { id: "irregular-verb", path: "irregular-verb" },
          "tense-overview": { id: "tense-overview", path: "tense-overview" },
        },
      },
      pronoun: {
        id: "pronoun-main",
        path: "pronoun",
        children: {
          "personal-pronoun": {
            id: "personal-pronoun",
            path: "personal-pronoun",
          },
          possessive: { id: "possessive", path: "possessive" },
          "reflexive-pronoun": {
            id: "reflexive-pronoun",
            path: "reflexive-pronoun",
          },
          "relative-pronoun": {
            id: "relative-pronoun",
            path: "relative-pronoun",
          },
          "interrogative-pronoun": {
            id: "interrogative-pronoun",
            path: "interrogative-pronoun",
          },
          "demonstrative-pronoun": {
            id: "demonstrative-pronoun",
            path: "demonstrative-pronoun",
          },
          "indefinite-pronoun": {
            id: "indefinite-pronoun",
            path: "indefinite-pronoun",
          },
        },
      },
      article: { id: "article", path: "article" },
      adjective: { id: "adjective", path: "adjective" },
      declension: { id: "declension", path: "declension" },
      adverb: { id: "adverb", path: "adverb" },
      preposition: { id: "preposition", path: "preposition" },
      question: { id: "question", path: "question" },
    },
  },
  "useful-phrase": {
    id: "useful-phrase",
    path: "useful-phrase",
    children: {
      "general-phrase": { id: "general-phrase", path: "general-phrase" },
      "classroom-phrase": {
        id: "classroom-phrase",
        path: "classroom-phrase",
      },
      "restaurant-phrase": {
        id: "restaurant-phrase",
        path: "restaurant-phrase",
      },
      "home-phrase": { id: "home-phrase", path: "home-phrase" },
      "friend-phrase": { id: "friend-phrase", path: "friend-phrase" },
      "bank-phrase": { id: "bank-phrase", path: "bank-phrase" },
    },
  },
} as const;

// Flatten the structure to get all available pages
export const AVAILABLE_PAGES = [
  "home",
  "alphabet",
  "number",
  "time",
  "date",
  "weather",
  "country",
  "verb-conjugator",
  "modal-verb",
  "passive-voice",
  "reflexive-verb",
  "present-tense",
  "perfect-tense",
  "past-tense",
  "past-perfect",
  "future-tense",
  "future-perfect",
  "irregular-verb",
  "tense-overview",
  "personal-pronoun",
  "possessive",
  "reflexive-pronoun",
  "relative-pronoun",
  "interrogative-pronoun",
  "demonstrative-pronoun",
  "indefinite-pronoun",
  "article",
  "adjective",
  "declension",
  "adverb",
  "preposition",
  "question",
  "general-phrase",
  "classroom-phrase",
  "restaurant-phrase",
  "home-phrase",
  "friend-phrase",
  "bank-phrase",
  "404", // Special page for 404 errors
] as const;

export type PageType = (typeof AVAILABLE_PAGES)[number];

// Helper function to get category and subcategory from page
export const getPageHierarchy = (page: PageType) => {
  for (const [categoryKey, category] of Object.entries(CATEGORY_STRUCTURE)) {
    if (category.children) {
      for (const [subcategoryKey, subcategory] of Object.entries(
        category.children
      )) {
        if (subcategory.children) {
          for (const [pageKey, pageInfo] of Object.entries(
            subcategory.children
          )) {
            if ((pageInfo as any).path === page) {
              return {
                category: categoryKey,
                subcategory: subcategoryKey,
                page: pageKey,
              };
            }
          }
        } else if ((subcategory as any).path === page) {
          return {
            category: categoryKey,
            subcategory: subcategoryKey,
            page: null,
          };
        }
      }
    } else if ((category as any).path === page) {
      return {
        category: categoryKey,
        subcategory: null,
        page: null,
      };
    }
  }
  return null;
};

// Create routes for each language
const createLanguageRoutes = () => {
  const routes = [];

  for (const language of SUPPORTED_LANGUAGES) {
    // Main language route
    routes.push({
      path: `/${language}`,
      element: <App />,
      children: [
        // Default route for language
        {
          index: true,
          element: <App />,
        },
        // Category routes
        {
          path: "vocabulary",
          element: <App />,
          children: [
            { path: "alphabet", element: <App /> },
            { path: "number", element: <App /> },
            { path: "time", element: <App /> },
            { path: "date", element: <App /> },
            { path: "weather", element: <App /> },
            { path: "country", element: <App /> },
          ],
        },
        {
          path: "grammar",
          element: <App />,
          children: [
            {
              path: "verb",
              element: <App />,
              children: [
                { path: "verb-conjugator", element: <App /> },
                { path: "modal-verb", element: <App /> },
                { path: "passive-voice", element: <App /> },
                { path: "reflexive-verb", element: <App /> },
              ],
            },
            {
              path: "tense",
              element: <App />,
              children: [
                { path: "present-tense", element: <App /> },
                { path: "perfect-tense", element: <App /> },
                { path: "past-tense", element: <App /> },
                { path: "past-perfect", element: <App /> },
                { path: "future-tense", element: <App /> },
                { path: "future-perfect", element: <App /> },
                { path: "irregular-verb", element: <App /> },
                { path: "tense-overview", element: <App /> },
              ],
            },
            {
              path: "pronoun",
              element: <App />,
              children: [
                { path: "personal-pronoun", element: <App /> },
                { path: "possessive", element: <App /> },
                { path: "reflexive-pronoun", element: <App /> },
                { path: "relative-pronoun", element: <App /> },
                { path: "interrogative-pronoun", element: <App /> },
                { path: "demonstrative-pronoun", element: <App /> },
                { path: "indefinite-pronoun", element: <App /> },
              ],
            },
            { path: "article", element: <App /> },
            { path: "adjective", element: <App /> },
            { path: "declension", element: <App /> },
            { path: "adverb", element: <App /> },
            { path: "preposition", element: <App /> },
            { path: "question", element: <App /> },
          ],
        },
        {
          path: "useful-phrase",
          element: <App />,
          children: [
            { path: "general-phrase", element: <App /> },
            { path: "classroom-phrase", element: <App /> },
            { path: "restaurant-phrase", element: <App /> },
            { path: "home-phrase", element: <App /> },
            { path: "friend-phrase", element: <App /> },
            { path: "bank-phrase", element: <App /> },
          ],
        },
        // Individual page routes (for backward compatibility)
        ...AVAILABLE_PAGES.map((page) => ({
          path: page,
          element: <App />,
        })),
      ],
    });
  }

  return routes;
};

// Create the router configuration
export const router = createBrowserRouter([
  // Root route - let App component handle language selection
  {
    path: "/",
    element: <App />,
  },
  // Language-specific routes
  ...createLanguageRoutes(),
  // Catch all route - let the App component handle 404
  {
    path: "*",
    element: <App />,
  },
]);

// Utility functions for URL management
export const isLanguageValid = (pathname: string): boolean => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const language = pathSegments[0] as Language;
  return SUPPORTED_LANGUAGES.includes(language);
};

export const getLanguageFromPath = (pathname: string): Language | null => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const language = pathSegments[0] as Language;

  if (SUPPORTED_LANGUAGES.includes(language)) {
    return language;
  }

  return null; // No language in URL
};

export const getPageFromPath = (pathname: string): PageType => {
  const pathSegments = pathname.split("/").filter(Boolean);

  // Check if language is valid first
  if (pathSegments.length > 0) {
    const language = pathSegments[0] as Language;
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      return "404" as PageType; // Invalid language
    }
  }

  if (pathSegments.length === 1) {
    return "home"; // Only language in path
  }

  // Check for hierarchical structure first
  if (pathSegments.length >= 2) {
    const category = pathSegments[1];
    const subcategory = pathSegments[2];
    const page = pathSegments[3];

    // Map hierarchical paths to page IDs
    if (category === "vocabulary") {
      if (
        subcategory &&
        ["alphabet", "number", "time", "date", "weather", "country"].includes(
          subcategory
        )
      ) {
        return subcategory as PageType;
      }
    } else if (category === "grammar") {
      if (subcategory === "verb" && page) {
        const verbPages: Record<string, PageType> = {
          "verb-conjugator": "verb-conjugator",
          "modal-verb": "modal-verb",
          "passive-voice": "passive-voice",
          "reflexive-verb": "reflexive-verb",
        };
        return verbPages[page] || "verb-conjugator";
      } else if (subcategory === "tense" && page) {
        const tensePages: Record<string, PageType> = {
          "present-tense": "present-tense",
          "perfect-tense": "perfect-tense",
          "past-tense": "past-tense",
          "past-perfect": "past-perfect",
          "future-tense": "future-tense",
          "future-perfect": "future-perfect",
          "irregular-verb": "irregular-verb",
          "tense-overview": "tense-overview",
        };
        return tensePages[page] || "present-tense";
      } else if (subcategory === "pronoun" && page) {
        const pronounPages: Record<string, PageType> = {
          "personal-pronoun": "personal-pronoun",
          possessive: "possessive",
          "reflexive-pronoun": "reflexive-pronoun",
          "relative-pronoun": "relative-pronoun",
          "interrogative-pronoun": "interrogative-pronoun",
          "demonstrative-pronoun": "demonstrative-pronoun",
          "indefinite-pronoun": "indefinite-pronoun",
        };
        return pronounPages[page] || "personal-pronoun";
      } else if (
        [
          "article",
          "adjective",
          "declension",
          "adverb",
          "preposition",
          "question",
        ].includes(subcategory)
      ) {
        return subcategory as PageType;
      }
    } else if (category === "useful-phrase" && subcategory) {
      const phrasePages: Record<string, PageType> = {
        "general-phrase": "general-phrase",
        "classroom-phrase": "classroom-phrase",
        "restaurant-phrase": "restaurant-phrase",
        "home-phrase": "home-phrase",
        "friend-phrase": "friend-phrase",
        "bank-phrase": "bank-phrase",
      };
      return phrasePages[subcategory] || "general-phrase";
    }
  }

  // Fallback to direct page mapping
  const page = pathSegments[1] as PageType;
  if (AVAILABLE_PAGES.includes(page)) {
    return page;
  }

  // Return a special value for invalid pages that will trigger 404
  return "404" as PageType;
};

export const buildUrl = (
  language: Language,
  page: PageType = "home"
): string => {
  const hierarchy = getPageHierarchy(page);

  if (!hierarchy) {
    return `/${language}`;
  }

  if (hierarchy.category === "home") {
    return `/${language}`;
  }

  if (hierarchy.subcategory === null) {
    return `/${language}/${hierarchy.category}`;
  }

  if (hierarchy.page === null) {
    return `/${language}/${hierarchy.category}/${hierarchy.subcategory}`;
  }

  return `/${language}/${hierarchy.category}/${hierarchy.subcategory}/${hierarchy.page}`;
};
