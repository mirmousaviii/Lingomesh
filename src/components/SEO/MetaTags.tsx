import { Helmet } from "react-helmet-async";
import { Language } from "../../hooks/useTranslations";
import { PageType } from "../../routes";
import { useTranslation } from "../../constants/translations";

interface MetaTagsProps {
  language: Language;
  page: PageType;
  title?: string;
  description?: string;
  keywords?: string;
  is404?: boolean;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  language,
  page,
  title,
  description,
  keywords,
  is404 = false,
}) => {
  const t = useTranslation(language);

  // Generate page-specific content
  const getPageContent = () => {
    const pageContent = {
      home: {
        title: t.app.name,
        description: t.app.tagline,
        keywords: "German, language learning, grammar, vocabulary, interactive",
      },
      // 404 page
      "404": {
        title: `404 - ${t.app.name}`,
        description: "Page not found. The requested page does not exist.",
        keywords: "404, page not found, error",
      },
      // Vocabulary pages
      alphabet: {
        title: `${t.navigation.alphabet} - ${t.app.name}`,
        description:
          "Learn the German alphabet with pronunciation and examples.",
        keywords: "German alphabet, pronunciation, German letters, vocabulary",
      },
      numbers: {
        title: `${t.navigation.numbers} - ${t.app.name}`,
        description:
          "Learn German numbers and counting with interactive tools.",
        keywords: "German numbers, counting, German vocabulary, numbers",
      },
      time: {
        title: `${t.navigation.time} - ${t.app.name}`,
        description:
          "Learn to tell time in German with interactive clock and examples.",
        keywords: "German time, clock, telling time, German vocabulary",
      },
      date: {
        title: `${t.navigation.date} - ${t.app.name}`,
        description: "Learn German date formats and calendar vocabulary.",
        keywords: "German date, calendar, date format, German vocabulary",
      },
      weather: {
        title: `${t.navigation.weather} - ${t.app.name}`,
        description: "Learn German weather vocabulary and expressions.",
        keywords: "German weather, weather vocabulary, German expressions",
      },
      countries: {
        title: `${t.navigation.countries} - ${t.app.name}`,
        description: "Learn German country names and nationalities.",
        keywords: "German countries, nationalities, geography, vocabulary",
      },
      // Grammar pages
      articles: {
        title: `${t.navigation.articles} - ${t.app.name}`,
        description:
          "Learn German articles (der, die, das) with interactive exercises and examples.",
        keywords:
          "German articles, der die das, German grammar, definite articles",
      },
      adjectives: {
        title: `${t.navigation.adjectives} - ${t.app.name}`,
        description: "Learn German adjectives and their usage in sentences.",
        keywords: "German adjectives, descriptive words, German grammar",
      },
      declension: {
        title: `${t.navigation.declension} - ${t.app.name}`,
        description:
          "Learn German adjective declension with comprehensive examples.",
        keywords: "German declension, adjective declension, German grammar",
      },
      adverbs: {
        title: `${t.navigation.adverbs} - ${t.app.name}`,
        description: "Learn German adverbs and their placement in sentences.",
        keywords: "German adverbs, word order, German grammar",
      },
      prepositions: {
        title: `${t.navigation.prepositions} - ${t.app.name}`,
        description:
          "Master German prepositions with examples and practice exercises.",
        keywords: "German prepositions, grammar, prepositions",
      },
      questions: {
        title: `${t.navigation.questions} - ${t.app.name}`,
        description:
          "Learn to ask questions in German with proper grammar and examples.",
        keywords:
          "German questions, W-questions, yes-no questions, German grammar",
      },
      // Verb pages
      "verb-conjugator": {
        title: `${t.navigation.verbConjugator} - ${t.app.name}`,
        description:
          "Learn German verb conjugation with interactive tools and examples.",
        keywords: "German verb conjugation, verb forms, German grammar",
      },
      "modal-verbs": {
        title: `${t.navigation.modalVerbs} - ${t.app.name}`,
        description: "Learn German modal verbs and their usage patterns.",
        keywords: "German modal verbs, können, müssen, wollen, German grammar",
      },
      "passive-voice": {
        title: `${t.navigation.passiveVoice} - ${t.app.name}`,
        description: "Learn German passive voice construction and usage.",
        keywords: "German passive voice, werden, German grammar",
      },
      "reflexive-verbs": {
        title: `${t.navigation.reflexiveVerbs} - ${t.app.name}`,
        description: "Learn German reflexive verbs and their patterns.",
        keywords: "German reflexive verbs, sich, German grammar",
      },
      // Tense pages
      "present-tense": {
        title: `${t.navigation.presentTense} - ${t.app.name}`,
        description: "Learn German present tense conjugation and usage.",
        keywords: "German present tense, Präsens, German grammar",
      },
      "perfect-tense": {
        title: `${t.navigation.perfectTense} - ${t.app.name}`,
        description: "Learn German perfect tense (Perfekt) construction.",
        keywords: "German perfect tense, Perfekt, haben, sein, German grammar",
      },
      "past-tense": {
        title: `${t.navigation.pastTense} - ${t.app.name}`,
        description: "Learn German past tense (Präteritum) usage.",
        keywords: "German past tense, Präteritum, German grammar",
      },
      "past-perfect": {
        title: `${t.navigation.pastPerfect} - ${t.app.name}`,
        description: "Learn German past perfect tense (Plusquamperfekt).",
        keywords: "German past perfect, Plusquamperfekt, German grammar",
      },
      "future-tense": {
        title: `${t.navigation.futureTense} - ${t.app.name}`,
        description: "Learn German future tense construction and usage.",
        keywords: "German future tense, Futur I, werden, German grammar",
      },
      "future-perfect": {
        title: `${t.navigation.futurePerfect} - ${t.app.name}`,
        description: "Learn German future perfect tense (Futur II).",
        keywords: "German future perfect, Futur II, German grammar",
      },
      "irregular-verbs": {
        title: `${t.navigation.irregularVerbs} - ${t.app.name}`,
        description:
          "Learn German irregular verbs and their conjugation patterns.",
        keywords: "German irregular verbs, strong verbs, German grammar",
      },
      "tenses-overview": {
        title: `${t.navigation.tensesOverview} - ${t.app.name}`,
        description: "Overview of all German verb tenses and their usage.",
        keywords: "German tenses overview, verb conjugation, German grammar",
      },
      // Pronoun pages
      "personal-pronouns": {
        title: `${t.navigation.personalPronouns} - ${t.app.name}`,
        description:
          "Learn German personal pronouns with examples and practice.",
        keywords: "German personal pronouns, ich, du, er, sie, German grammar",
      },
      possessives: {
        title: `${t.navigation.possessives} - ${t.app.name}`,
        description: "Learn German possessive pronouns and adjectives.",
        keywords:
          "German possessive pronouns, mein, dein, sein, German grammar",
      },
      "reflexive-pronouns": {
        title: `${t.navigation.reflexivePronouns} - ${t.app.name}`,
        description: "Learn German reflexive pronouns and their usage.",
        keywords: "German reflexive pronouns, sich, German grammar",
      },
      "relative-pronouns": {
        title: `${t.navigation.relativePronouns} - ${t.app.name}`,
        description: "Learn German relative pronouns and relative clauses.",
        keywords: "German relative pronouns, der, die, das, German grammar",
      },
      "interrogative-pronouns": {
        title: `${t.navigation.interrogativePronouns} - ${t.app.name}`,
        description: "Learn German interrogative pronouns and question words.",
        keywords: "German interrogative pronouns, wer, was, wo, German grammar",
      },
      "demonstrative-pronouns": {
        title: `${t.navigation.demonstrativePronouns} - ${t.app.name}`,
        description: "Learn German demonstrative pronouns and their usage.",
        keywords:
          "German demonstrative pronouns, dieser, jener, German grammar",
      },
      "indefinite-pronouns": {
        title: `${t.navigation.indefinitePronouns} - ${t.app.name}`,
        description: "Learn German indefinite pronouns and their meanings.",
        keywords: "German indefinite pronouns, jeder, manche, German grammar",
      },
      // Useful phrases pages
      "general-phrases": {
        title: `${t.navigation.general} - ${t.app.name}`,
        description:
          "Learn useful general German phrases for everyday conversation.",
        keywords: "German phrases, everyday German, conversation, vocabulary",
      },
      "classroom-phrases": {
        title: `${t.navigation.classroom} - ${t.app.name}`,
        description:
          "Learn German phrases commonly used in classroom settings.",
        keywords: "German classroom phrases, education, school, vocabulary",
      },
      "restaurant-phrases": {
        title: `${t.navigation.restaurant} - ${t.app.name}`,
        description:
          "Learn German phrases for dining out and restaurant situations.",
        keywords: "German restaurant phrases, dining, food, vocabulary",
      },
      "home-phrases": {
        title: `${t.navigation.homePhrases} - ${t.app.name}`,
        description:
          "Learn German phrases for everyday home and family situations.",
        keywords: "German home phrases, family, household, vocabulary",
      },
      "friends-phrases": {
        title: `${t.navigation.friends} - ${t.app.name}`,
        description: "Learn German phrases for social situations with friends.",
        keywords: "German friend phrases, social, casual, vocabulary",
      },
    };

    return pageContent[page] || pageContent.home;
  };

  const pageContent = getPageContent();

  // Handle 404 case
  // Use the is404 prop instead of calculating it here

  const finalTitle =
    title || (is404 ? "404 - Page Not Found" : pageContent.title);
  const finalDescription =
    description ||
    (is404
      ? "Page not found. The requested page does not exist."
      : pageContent.description);
  const finalKeywords =
    keywords || (is404 ? "404, page not found, error" : pageContent.keywords);

  // Language-specific meta tags
  const langMap = {
    de: "de-DE",
    en: "en-US",
    es: "es-ES",
    ru: "ru-RU",
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="language" content={langMap[language]} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={langMap[language]} />
      <meta property="og:site_name" content={t.app.name} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />

      {/* Language Alternates for SEO */}
      <link
        rel="alternate"
        hrefLang="de"
        href={`https://your-domain.com/de${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://your-domain.com/en${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="es"
        href={`https://your-domain.com/es${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href={`https://your-domain.com/ru${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://your-domain.com/de${page === "home" ? "" : `/${page}`}`}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={`https://your-domain.com/${language}${
          page === "home" ? "" : `/${page}`
        }`}
      />
    </Helmet>
  );
};
