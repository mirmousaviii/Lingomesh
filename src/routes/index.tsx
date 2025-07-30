import { createBrowserRouter, Navigate } from "react-router-dom";
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
      numbers: { id: "numbers", path: "numbers" },
      time: { id: "time", path: "time" },
      date: { id: "date", path: "date" },
      weather: { id: "weather", path: "weather" },
      countries: { id: "countries", path: "countries" },
    },
  },
  grammar: {
    id: "grammar",
    path: "grammar",
    children: {
      verbs: {
        id: "verbs-main",
        path: "verbs",
        children: {
          "verb-conjugator": { id: "verbs", path: "verb-conjugator" },
          "modal-verbs": { id: "modal-verbs", path: "modal-verbs" },
          "passive-voice": { id: "passive-voice", path: "passive-voice" },
          "reflexive-verbs": { id: "reflexive-verbs", path: "reflexive-verbs" },
        },
      },
      tenses: {
        id: "tenses",
        path: "tenses",
        children: {
          "present-tense": { id: "present-tense", path: "present-tense" },
          "perfect-tense": { id: "perfect-tense", path: "perfect-tense" },
          "past-tense": { id: "past-tense", path: "past-tense" },
          "past-perfect": { id: "past-perfect", path: "past-perfect" },
          "future-tense": { id: "future-tense", path: "future-tense" },
          "future-perfect": { id: "future-perfect", path: "future-perfect" },
          "irregular-verbs": { id: "irregular-verbs", path: "irregular-verbs" },
          "tenses-overview": { id: "tenses-overview", path: "tenses-overview" },
        },
      },
      pronouns: {
        id: "pronouns-main",
        path: "pronouns",
        children: {
          "personal-pronouns": { id: "pronouns", path: "personal-pronouns" },
          possessives: { id: "possessives", path: "possessives" },
          "reflexive-pronouns": {
            id: "reflexive-pronouns",
            path: "reflexive-pronouns",
          },
          "relative-pronouns": {
            id: "relative-pronouns",
            path: "relative-pronouns",
          },
          "interrogative-pronouns": {
            id: "interrogative-pronouns",
            path: "interrogative-pronouns",
          },
          "demonstrative-pronouns": {
            id: "demonstrative-pronouns",
            path: "demonstrative-pronouns",
          },
          "indefinite-pronouns": {
            id: "indefinite-pronouns",
            path: "indefinite-pronouns",
          },
        },
      },
      articles: { id: "articles", path: "articles" },
      adjectives: { id: "adjectives", path: "adjectives" },
      declension: { id: "declension", path: "declension" },
      adverbs: { id: "adverbs", path: "adverbs" },
      prepositions: { id: "prepositions", path: "prepositions" },
      questions: { id: "questions", path: "questions" },
    },
  },
  "useful-phrases": {
    id: "useful-phrases",
    path: "useful-phrases",
    children: {
      "general-phrases": { id: "general-phrases", path: "general-phrases" },
      "classroom-phrases": {
        id: "classroom-phrases",
        path: "classroom-phrases",
      },
      "restaurant-phrases": {
        id: "restaurant-phrases",
        path: "restaurant-phrases",
      },
      "home-phrases": { id: "home-phrases", path: "home-phrases" },
      "friends-phrases": { id: "friends-phrases", path: "friends-phrases" },
    },
  },
} as const;

// Flatten the structure to get all available pages
export const AVAILABLE_PAGES = [
  "home",
  "alphabet",
  "numbers",
  "time",
  "date",
  "weather",
  "countries",
  "verb-conjugator",
  "modal-verbs",
  "passive-voice",
  "reflexive-verbs",
  "present-tense",
  "perfect-tense",
  "past-tense",
  "past-perfect",
  "future-tense",
  "future-perfect",
  "irregular-verbs",
  "tenses-overview",
  "personal-pronouns",
  "possessives",
  "reflexive-pronouns",
  "relative-pronouns",
  "interrogative-pronouns",
  "demonstrative-pronouns",
  "indefinite-pronouns",
  "articles",
  "adjectives",
  "declension",
  "adverbs",
  "prepositions",
  "questions",
  "general-phrases",
  "classroom-phrases",
  "restaurant-phrases",
  "home-phrases",
  "friends-phrases",
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
            { path: "numbers", element: <App /> },
            { path: "time", element: <App /> },
            { path: "date", element: <App /> },
            { path: "weather", element: <App /> },
            { path: "countries", element: <App /> },
          ],
        },
        {
          path: "grammar",
          element: <App />,
          children: [
            {
              path: "verbs",
              element: <App />,
              children: [
                { path: "verb-conjugator", element: <App /> },
                { path: "modal-verbs", element: <App /> },
                { path: "passive-voice", element: <App /> },
                { path: "reflexive-verbs", element: <App /> },
              ],
            },
            {
              path: "tenses",
              element: <App />,
              children: [
                { path: "present-tense", element: <App /> },
                { path: "perfect-tense", element: <App /> },
                { path: "past-tense", element: <App /> },
                { path: "past-perfect", element: <App /> },
                { path: "future-tense", element: <App /> },
                { path: "future-perfect", element: <App /> },
                { path: "irregular-verbs", element: <App /> },
                { path: "tenses-overview", element: <App /> },
              ],
            },
            {
              path: "pronouns",
              element: <App />,
              children: [
                { path: "personal-pronouns", element: <App /> },
                { path: "possessives", element: <App /> },
                { path: "reflexive-pronouns", element: <App /> },
                { path: "relative-pronouns", element: <App /> },
                { path: "interrogative-pronouns", element: <App /> },
                { path: "demonstrative-pronouns", element: <App /> },
                { path: "indefinite-pronouns", element: <App /> },
              ],
            },
            { path: "articles", element: <App /> },
            { path: "adjectives", element: <App /> },
            { path: "declension", element: <App /> },
            { path: "adverbs", element: <App /> },
            { path: "prepositions", element: <App /> },
            { path: "questions", element: <App /> },
          ],
        },
        {
          path: "useful-phrases",
          element: <App />,
          children: [
            { path: "general-phrases", element: <App /> },
            { path: "classroom-phrases", element: <App /> },
            { path: "restaurant-phrases", element: <App /> },
            { path: "home-phrases", element: <App /> },
            { path: "friends-phrases", element: <App /> },
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
  // Redirect root to default language
  {
    path: "/",
    element: <Navigate to="/en" replace />,
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

export const getLanguageFromPath = (pathname: string): Language => {
  const pathSegments = pathname.split("/").filter(Boolean);
  const language = pathSegments[0] as Language;

  if (SUPPORTED_LANGUAGES.includes(language)) {
    return language;
  }

  return "en"; // Default to English
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
        [
          "alphabet",
          "numbers",
          "time",
          "date",
          "weather",
          "countries",
        ].includes(subcategory)
      ) {
        return subcategory as PageType;
      }
    } else if (category === "grammar") {
      if (subcategory === "verbs" && page) {
        const verbPages: Record<string, PageType> = {
          "verb-conjugator": "verb-conjugator",
          "modal-verbs": "modal-verbs",
          "passive-voice": "passive-voice",
          "reflexive-verbs": "reflexive-verbs",
        };
        return verbPages[page] || "verb-conjugator";
      } else if (subcategory === "tenses" && page) {
        const tensePages: Record<string, PageType> = {
          "present-tense": "present-tense",
          "perfect-tense": "perfect-tense",
          "past-tense": "past-tense",
          "past-perfect": "past-perfect",
          "future-tense": "future-tense",
          "future-perfect": "future-perfect",
          "irregular-verbs": "irregular-verbs",
          "tenses-overview": "tenses-overview",
        };
        return tensePages[page] || "present-tense";
      } else if (subcategory === "pronouns" && page) {
        const pronounPages: Record<string, PageType> = {
          "personal-pronouns": "personal-pronouns",
          possessives: "possessives",
          "reflexive-pronouns": "reflexive-pronouns",
          "relative-pronouns": "relative-pronouns",
          "interrogative-pronouns": "interrogative-pronouns",
          "demonstrative-pronouns": "demonstrative-pronouns",
          "indefinite-pronouns": "indefinite-pronouns",
        };
        return pronounPages[page] || "personal-pronouns";
      } else if (
        [
          "articles",
          "adjectives",
          "declension",
          "adverbs",
          "prepositions",
          "questions",
        ].includes(subcategory)
      ) {
        return subcategory as PageType;
      }
    } else if (category === "useful-phrases" && subcategory) {
      const phrasePages: Record<string, PageType> = {
        "general-phrases": "general-phrases",
        "classroom-phrases": "classroom-phrases",
        "restaurant-phrases": "restaurant-phrases",
        "home-phrases": "home-phrases",
        "friends-phrases": "friends-phrases",
      };
      return phrasePages[subcategory] || "general-phrases";
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
