import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the supported languages and pages directly in the script
const SUPPORTED_LANGUAGES = ["de", "en", "es", "ru"];

// Define the category structure
const CATEGORY_STRUCTURE = {
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
};

// Helper function to get category and subcategory from page
const getPageHierarchy = (page) => {
  for (const [categoryKey, category] of Object.entries(CATEGORY_STRUCTURE)) {
    if (category.children) {
      for (const [subcategoryKey, subcategory] of Object.entries(
        category.children
      )) {
        if (subcategory.children) {
          for (const [pageKey, pageInfo] of Object.entries(
            subcategory.children
          )) {
            if (pageInfo.path === page) {
              return {
                category: categoryKey,
                subcategory: subcategoryKey,
                page: pageKey,
              };
            }
          }
        } else if (subcategory.path === page) {
          return {
            category: categoryKey,
            subcategory: subcategoryKey,
            page: null,
          };
        }
      }
    } else if (category.path === page) {
      return {
        category: categoryKey,
        subcategory: null,
        page: null,
      };
    }
  }
  return null;
};

// Build URL function with hierarchy support
const buildUrl = (language, page = "home") => {
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

// Generate sitemap URLs
const generateSitemapUrls = (baseUrl) => {
  const urls = [];
  const currentDate = new Date().toISOString().split("T")[0];

  // Generate URLs for each language and page combination
  for (const language of SUPPORTED_LANGUAGES) {
    // Add home page
    urls.push({
      url: `${baseUrl}/${language}`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: 1.0,
    });

    // Add category pages
    for (const [categoryKey, category] of Object.entries(CATEGORY_STRUCTURE)) {
      if (categoryKey === "home") continue;

      // Add category level URLs
      urls.push({
        url: `${baseUrl}/${language}/${categoryKey}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: 0.9,
      });

      if (category.children) {
        for (const [subcategoryKey, subcategory] of Object.entries(
          category.children
        )) {
          // Add subcategory level URLs
          urls.push({
            url: `${baseUrl}/${language}/${categoryKey}/${subcategoryKey}`,
            lastmod: currentDate,
            changefreq: "weekly",
            priority: 0.8,
          });

          if (subcategory.children) {
            for (const [pageKey, pageInfo] of Object.entries(
              subcategory.children
            )) {
              // Add page level URLs
              urls.push({
                url: `${baseUrl}/${language}/${categoryKey}/${subcategoryKey}/${pageKey}`,
                lastmod: currentDate,
                changefreq: "weekly",
                priority: 0.7,
              });
            }
          }
        }
      }
    }
  }

  return urls;
};

// Generate sitemap XML
const generateSitemapXml = (baseUrl) => {
  const urls = generateSitemapUrls(baseUrl);

  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetStart =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetEnd = "</urlset>";

  const urlElements = urls
    .map((url) => {
      const lastmod = url.lastmod
        ? `\n    <lastmod>${url.lastmod}</lastmod>`
        : "";
      const changefreq = url.changefreq
        ? `\n    <changefreq>${url.changefreq}</changefreq>`
        : "";
      const priority = url.priority
        ? `\n    <priority>${url.priority}</priority>`
        : "";

      return `  <url>
    <loc>${url.url}</loc>${lastmod}${changefreq}${priority}
  </url>`;
    })
    .join("\n");

  return `${xmlHeader}
${urlsetStart}
${urlElements}
${urlsetEnd}`;
};

// Get the base URL from environment or use default
const baseUrl = process.env.BASE_URL || "https://lingomesh.com";

// Generate the sitemap
const sitemapXml = generateSitemapXml(baseUrl);

// Write the sitemap to the public directory
const publicDir = path.join(__dirname, "../dist");
const sitemapPath = path.join(publicDir, "sitemap.xml");

// Ensure the dist directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the sitemap file
fs.writeFileSync(sitemapPath, sitemapXml);

console.log(`Sitemap generated at: ${sitemapPath}`);
console.log(`Base URL: ${baseUrl}`);
console.log(`Generated ${generateSitemapUrls(baseUrl).length} URLs`);
