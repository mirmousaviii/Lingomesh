import { SUPPORTED_LANGUAGES, AVAILABLE_PAGES, buildUrl } from "../routes";

export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export const generateSitemapUrls = (baseUrl: string): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split("T")[0];

  // Generate URLs for each language and page combination
  for (const language of SUPPORTED_LANGUAGES) {
    for (const page of AVAILABLE_PAGES) {
      const path = buildUrl(language, page);
      urls.push({
        url: `${baseUrl}${path}`,
        lastmod: currentDate,
        changefreq: "weekly",
        priority: page === "home" ? 1.0 : 0.8,
      });
    }
  }

  return urls;
};

export const generateSitemapXml = (baseUrl: string): string => {
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
