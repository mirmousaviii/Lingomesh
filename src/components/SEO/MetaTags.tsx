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
        title: `${t.app.name} - German Language Learning Platform`,
        description: `${t.app.name} - Your comprehensive German language learning platform. ${t.app.tagline} Visit lingomesh.com for the best German learning experience.`,
        keywords:
          "German learning, German grammar, German vocabulary, LingoMesh, lingomesh.com, German interactive tools, German pronunciation, German exercises",
      },
      // 404 page
      "404": {
        title: `404 - ${t.app.name}`,
        description:
          "Page not found. The requested page does not exist on LingoMesh.",
        keywords: "404, page not found, error, LingoMesh",
      },
      // Vocabulary pages
      alphabet: {
        title: `${t.navigation.alphabet} - ${t.app.name}`,
        description: `Learn the German alphabet with pronunciation and examples on ${t.app.name}. Master German letters and sounds with interactive tools.`,
        keywords:
          "German alphabet, pronunciation, German letters, vocabulary, LingoMesh, lingomesh.com",
      },
      number: {
        title: `${t.navigation.number} - ${t.app.name}`,
        description: `Learn German numbers and counting with interactive tools on ${t.app.name}. Practice German number pronunciation and usage.`,
        keywords:
          "German numbers, counting, German vocabulary, numbers, LingoMesh, lingomesh.com",
      },
      time: {
        title: `${t.navigation.time} - ${t.app.name}`,
        description: `Learn to tell time in German with interactive clock and examples on ${t.app.name}. Master German time expressions and clock reading.`,
        keywords:
          "German time, clock, telling time, German vocabulary, LingoMesh, lingomesh.com",
      },
      date: {
        title: `${t.navigation.date} - ${t.app.name}`,
        description: `Learn German date formats and calendar vocabulary on ${t.app.name}. Master German date expressions and calendar terms.`,
        keywords:
          "German date, calendar, date format, German vocabulary, LingoMesh, lingomesh.com",
      },
      weather: {
        title: `${t.navigation.weather} - ${t.app.name}`,
        description: `Learn German weather vocabulary and expressions on ${t.app.name}. Master weather-related German phrases and vocabulary.`,
        keywords:
          "German weather, weather vocabulary, German expressions, LingoMesh, lingomesh.com",
      },
      country: {
        title: `${t.navigation.country} - ${t.app.name}`,
        description: `Learn German country names and nationalities on ${t.app.name}. Master geographical vocabulary in German.`,
        keywords:
          "German countries, nationalities, geography, vocabulary, LingoMesh, lingomesh.com",
      },
      // Grammar pages
      article: {
        title: `${t.navigation.article} - ${t.app.name}`,
        description: `Learn German articles (der, die, das) with interactive exercises and examples on ${t.app.name}. Master German definite and indefinite articles.`,
        keywords:
          "German articles, der die das, German grammar, definite articles, LingoMesh, lingomesh.com",
      },
      adjective: {
        title: `${t.navigation.adjective} - ${t.app.name}`,
        description: `Learn German adjectives and their usage in sentences on ${t.app.name}. Master German descriptive words and adjective placement.`,
        keywords:
          "German adjectives, descriptive words, German grammar, LingoMesh, lingomesh.com",
      },
      declension: {
        title: `${t.navigation.declension} - ${t.app.name}`,
        description: `Learn German adjective declension with comprehensive examples on ${t.app.name}. Master German adjective endings and declension patterns.`,
        keywords:
          "German declension, adjective declension, German grammar, LingoMesh, lingomesh.com",
      },
      adverb: {
        title: `${t.navigation.adverb} - ${t.app.name}`,
        description: `Learn German adverbs and their placement in sentences on ${t.app.name}. Master German adverb usage and word order.`,
        keywords:
          "German adverbs, word order, German grammar, LingoMesh, lingomesh.com",
      },
      preposition: {
        title: `${t.navigation.preposition} - ${t.app.name}`,
        description: `Master German prepositions with examples and practice exercises on ${t.app.name}. Learn German preposition usage and case requirements.`,
        keywords:
          "German prepositions, grammar, prepositions, LingoMesh, lingomesh.com",
      },
      question: {
        title: `${t.navigation.question} - ${t.app.name}`,
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
      "modal-verb": {
        title: `${t.navigation.modalVerb} - ${t.app.name}`,
        description: "Learn German modal verbs and their usage patterns.",
        keywords: "German modal verbs, können, müssen, wollen, German grammar",
      },
      "passive-voice": {
        title: `${t.navigation.passiveVoice} - ${t.app.name}`,
        description: "Learn German passive voice construction and usage.",
        keywords: "German passive voice, werden, German grammar",
      },
      "reflexive-verb": {
        title: `${t.navigation.reflexiveVerb} - ${t.app.name}`,
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
      "irregular-verb": {
        title: `${t.navigation.irregularVerb} - ${t.app.name}`,
        description:
          "Learn German irregular verbs and their conjugation patterns.",
        keywords: "German irregular verbs, strong verbs, German grammar",
      },
      "tense-overview": {
        title: `${t.navigation.tenseOverview} - ${t.app.name}`,
        description: "Overview of all German verb tenses and their usage.",
        keywords: "German tenses overview, verb conjugation, German grammar",
      },
      // Pronoun pages
      "personal-pronoun": {
        title: `${t.navigation.personalPronoun} - ${t.app.name}`,
        description:
          "Learn German personal pronouns with examples and practice.",
        keywords: "German personal pronouns, ich, du, er, sie, German grammar",
      },
      possessive: {
        title: `${t.navigation.possessive} - ${t.app.name}`,
        description: "Learn German possessive pronouns and adjectives.",
        keywords:
          "German possessive pronouns, mein, dein, sein, German grammar",
      },
      "reflexive-pronoun": {
        title: `${t.navigation.reflexivePronouns} - ${t.app.name}`,
        description: "Learn German reflexive pronouns and their usage.",
        keywords: "German reflexive pronouns, sich, German grammar",
      },
      "relative-pronoun": {
        title: `${t.navigation.relativePronouns} - ${t.app.name}`,
        description: "Learn German relative pronouns and relative clauses.",
        keywords: "German relative pronouns, der, die, das, German grammar",
      },
      "interrogative-pronoun": {
        title: `${t.navigation.interrogativePronouns} - ${t.app.name}`,
        description: "Learn German interrogative pronouns and question words.",
        keywords: "German interrogative pronouns, wer, was, wo, German grammar",
      },
      "demonstrative-pronoun": {
        title: `${t.navigation.demonstrativePronouns} - ${t.app.name}`,
        description: "Learn German demonstrative pronouns and their usage.",
        keywords:
          "German demonstrative pronouns, dieser, jener, German grammar",
      },
      "indefinite-pronoun": {
        title: `${t.navigation.indefinitePronouns} - ${t.app.name}`,
        description: "Learn German indefinite pronouns and their meanings.",
        keywords: "German indefinite pronouns, jeder, manche, German grammar",
      },
      // Useful phrases pages
      "general-phrase": {
        title: `${t.navigation.general} - ${t.app.name}`,
        description:
          "Learn useful general German phrases for everyday conversation.",
        keywords: "German phrases, everyday German, conversation, vocabulary",
      },
      "classroom-phrase": {
        title: `${t.navigation.classroom} - ${t.app.name}`,
        description:
          "Learn German phrases commonly used in classroom settings.",
        keywords: "German classroom phrases, education, school, vocabulary",
      },
      "restaurant-phrase": {
        title: `${t.navigation.restaurant} - ${t.app.name}`,
        description:
          "Learn German phrases for dining out and restaurant situations.",
        keywords: "German restaurant phrases, dining, food, vocabulary",
      },
      "home-phrase": {
        title: `${t.navigation.home} - ${t.app.name}`,
        description: `Learn German phrases for everyday home and family situations on ${t.app.name}. Master German household and family vocabulary.`,
        keywords:
          "German home phrases, family, household, vocabulary, LingoMesh, lingomesh.com",
      },
      "friend-phrase": {
        title: `${t.navigation.friend} - ${t.app.name}`,
        description: `Learn German phrases for social situations with friends on ${t.app.name}. Master casual German conversation and social vocabulary.`,
        keywords:
          "German friend phrases, social, casual, vocabulary, LingoMesh, lingomesh.com",
      },
      "bank-phrase": {
        title: `${t.navigation.bank} - ${t.app.name}`,
        description: `Learn German phrases for banking and financial situations on ${t.app.name}. Master German banking vocabulary and expressions.`,
        keywords:
          "German bank phrases, banking, finance, vocabulary, LingoMesh, lingomesh.com",
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
      ? "Page not found. The requested page does not exist on LingoMesh."
      : pageContent.description);
  const finalKeywords =
    keywords ||
    (is404 ? "404, page not found, error, LingoMesh" : pageContent.keywords);

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
      <meta
        property="og:url"
        content={`https://lingomesh.com/${language}${
          page === "home" ? "" : `/${page}`
        }`}
      />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />

      {/* Language Alternates for SEO */}
      <link
        rel="alternate"
        hrefLang="de"
        href={`https://lingomesh.com/de${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`https://lingomesh.com/en${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="es"
        href={`https://lingomesh.com/es${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="ru"
        href={`https://lingomesh.com/ru${page === "home" ? "" : `/${page}`}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://lingomesh.com/de${page === "home" ? "" : `/${page}`}`}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={`https://lingomesh.com/${language}${
          page === "home" ? "" : `/${page}`
        }`}
      />
    </Helmet>
  );
};
