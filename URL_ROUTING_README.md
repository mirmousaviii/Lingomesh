# URL-Based Routing System with Categories and Subcategories

This document describes the new hierarchical URL-based routing system implemented for better SEO and user experience.

## Overview

The application now uses React Router DOM to provide SEO-friendly hierarchical URLs that change based on language, categories, and subcategories. This allows search engines to properly index all content and provides users with shareable, bookmarkable URLs with clear content organization.

## URL Structure

The URL structure follows this hierarchical pattern:

```
/{language}/{category}/{subcategory}/{page}
```

### Examples:

- `/de` - German home page
- `/en/vocabulary/numbers` - English numbers page
- `/es/grammar/verbs/verb-conjugator` - Spanish verb conjugator page
- `/ru/grammar/pronouns/personal-pronouns` - Russian personal pronouns page

## Supported Languages

- `de` - German (default)
- `en` - English
- `es` - Spanish
- `ru` - Russian

## Content Categories and Structure

### 1. Vocabulary (`/vocabulary`)

- **Alphabet** (`/alphabet`) - German alphabet and pronunciation
- **Numbers** (`/numbers`) - German numbers and counting
- **Time** (`/time`) - Telling time in German
- **Date** (`/date`) - Date formats and calendar vocabulary
- **Weather** (`/weather`) - Weather vocabulary and expressions
- **Countries** (`/countries`) - Country names and nationalities

### 2. Grammar (`/grammar`)

#### Verbs (`/verbs`)

- **Verb Conjugator** (`/verb-conjugator`) - Interactive verb conjugation
- **Modal Verbs** (`/modal-verbs`) - können, müssen, wollen, etc.
- **Passive Voice** (`/passive-voice`) - Passive voice construction
- **Reflexive Verbs** (`/reflexive-verbs`) - Reflexive verb patterns

#### Tenses (`/tenses`)

- **Present Tense** (`/present-tense`) - Präsens conjugation
- **Perfect Tense** (`/perfect-tense`) - Perfekt construction
- **Past Tense** (`/past-tense`) - Präteritum usage
- **Past Perfect** (`/past-perfect`) - Plusquamperfekt
- **Future Tense** (`/future-tense`) - Futur I construction
- **Future Perfect** (`/future-perfect`) - Futur II
- **Irregular Verbs** (`/irregular-verbs`) - Strong verb patterns
- **Tenses Overview** (`/tenses-overview`) - Complete tense guide

#### Pronouns (`/pronouns`)

- **Personal Pronouns** (`/personal-pronouns`) - ich, du, er, sie, etc.
- **Possessives** (`/possessives`) - mein, dein, sein, etc.
- **Reflexive Pronouns** (`/reflexive-pronouns`) - sich pronouns
- **Relative Pronouns** (`/relative-pronouns`) - der, die, das
- **Interrogative Pronouns** (`/interrogative-pronouns`) - wer, was, wo
- **Demonstrative Pronouns** (`/demonstrative-pronouns`) - dieser, jener
- **Indefinite Pronouns** (`/indefinite-pronouns`) - jeder, manche

#### Other Grammar Topics

- **Articles** (`/articles`) - der, die, das
- **Adjectives** (`/adjectives`) - Descriptive words
- **Declension** (`/declension`) - Adjective declension
- **Adverbs** (`/adverbs`) - Adverb placement
- **Prepositions** (`/prepositions`) - Preposition usage
- **Questions** (`/questions`) - Question formation

### 3. Useful Phrases (`/useful-phrases`)

- **General Phrases** (`/general-phrases`) - Everyday conversation
- **Classroom Phrases** (`/classroom-phrases`) - Education settings
- **Restaurant Phrases** (`/restaurant-phrases`) - Dining out
- **Home Phrases** (`/home-phrases`) - Family and household
- **Friends Phrases** (`/friends-phrases`) - Social situations

## SEO Features

### 1. Hierarchical Sitemap Generation

- Automatically generates `sitemap.xml` with 172 URLs
- Includes all language, category, subcategory, and page combinations
- Proper priority hierarchy (home: 1.0, categories: 0.9, subcategories: 0.8, pages: 0.7)
- Located at `/sitemap.xml`

### 2. Dynamic Meta Tags

- Meta tags based on current page, category, and language
- Open Graph tags for social media sharing
- Twitter Card tags
- Language alternates for international SEO
- Canonical URLs with full hierarchy

### 3. Robots.txt

- Proper robots.txt file for search engine crawling
- References to sitemap location

## Implementation Details

### Routing Configuration

- `src/routes/index.tsx` - Main routing configuration with hierarchy
- `src/hooks/useRouting.ts` - Custom hook for URL management
- Automatic redirects from root to default language

### SEO Components

- `src/components/SEO/MetaTags.tsx` - Dynamic meta tags for all pages
- `src/utils/sitemapGenerator.ts` - Sitemap generation utilities
- `src/pages/NotFound/NotFound.tsx` - 404 error page component

### Build Process

- Sitemap generation is integrated into the build process
- Run `npm run build` to generate sitemap
- Run `npm run generate-sitemap` to generate sitemap separately

## Usage

### Changing Language

```typescript
const { changeLanguage } = useRouting();
changeLanguage("en"); // Navigates to /en/current-category/current-subcategory/current-page
```

### Changing Page

```typescript
const { changePage } = useRouting();
changePage("personal-pronouns"); // Navigates to /current-language/grammar/pronouns/personal-pronouns
```

### Getting Current State

```typescript
const { currentLanguage, currentPage } = useRouting();
```

## URL Examples

### Home Pages

- `/de` - German home
- `/en` - English home
- `/es` - Spanish home
- `/ru` - Russian home

### Category Pages

- `/de/vocabulary` - German vocabulary overview
- `/en/grammar` - English grammar overview
- `/es/useful-phrases` - Spanish phrases overview

### Subcategory Pages

- `/de/grammar/verbs` - German verbs overview
- `/en/grammar/tenses` - English tenses overview
- `/es/grammar/pronouns` - Spanish pronouns overview

### Content Pages

- `/de/vocabulary/numbers` - German numbers
- `/en/grammar/verbs/verb-conjugator` - English verb conjugator
- `/es/grammar/pronouns/personal-pronouns` - Spanish personal pronouns
- `/ru/useful-phrases/restaurant-phrases` - Russian restaurant phrases

## SEO Benefits

1. **Search Engine Indexing**: All 172 pages properly indexed by search engines
2. **Shareable URLs**: Users can share specific language/category/subcategory/page combinations
3. **Bookmarkable**: URLs can be bookmarked for direct access to any content level
4. **Language-Specific SEO**: Each language has its own URL structure
5. **Hierarchical Sitemap**: Comprehensive sitemap with proper priority structure
6. **Dynamic Meta Tags**: Optimized meta tags for each page and language
7. **Content Organization**: Clear URL structure reflects content organization
8. **Breadcrumb Navigation**: URLs support breadcrumb navigation for better UX
9. **404 Error Handling**: Proper 404 pages for non-existent routes with navigation options

## Configuration

### Base URL

Update the base URL in the sitemap generation:

```bash
BASE_URL=https://your-actual-domain.com npm run build
```

### Adding New Categories

1. Add the category to `CATEGORY_STRUCTURE` in `src/routes/index.tsx`
2. Add translations in `src/constants/translations.ts`
3. Update the routing configuration
4. Update meta tags in `src/components/SEO/MetaTags.tsx`

### Adding New Subcategories

1. Add the subcategory to the appropriate category in `CATEGORY_STRUCTURE`
2. Add translations in `src/constants/translations.ts`
3. Update the routing configuration
4. Update meta tags in `src/components/SEO/MetaTags.tsx`

### Adding New Pages

1. Add the page to the appropriate subcategory in `CATEGORY_STRUCTURE`
2. Create the page component in `src/pages/`
3. Add the page to the routing switch in `src/components/layout/App/App.tsx`
4. Update meta tags in `src/components/SEO/MetaTags.tsx`

## Development

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

This will:

1. Compile TypeScript
2. Build the application
3. Generate sitemap.xml with 172 URLs

### Type Checking

```bash
npm run type-check
```

## File Structure

```
src/
├── routes/
│   └── index.tsx              # Routing configuration with hierarchy
├── hooks/
│   └── useRouting.ts          # URL management hook
├── components/
│   ├── layout/
│   │   └── App/
│   │       └── App.tsx        # Main app with routing
│   └── SEO/
│       └── MetaTags.tsx       # SEO meta tags for all pages
├── utils/
│   └── sitemapGenerator.ts    # Sitemap utilities
└── pages/                     # Page components
    └── NotFound/
        └── NotFound.tsx        # 404 error page

scripts/
└── generateSitemap.js         # Sitemap generation script

public/
└── robots.txt                 # Robots file

dist/
└── sitemap.xml               # Generated sitemap (172 URLs)
```

## URL Statistics

- **Total URLs**: 172
- **Languages**: 4 (de, en, es, ru)
- **Categories**: 3 (vocabulary, grammar, useful-phrases)
- **Subcategories**: 8 (alphabet, numbers, time, date, weather, countries, verbs, tenses, pronouns, articles, adjectives, declension, adverbs, prepositions, questions, general-phrases, classroom-phrases, restaurant-phrases, home-phrases, friends-phrases)
- **Individual Pages**: 36 unique content pages
- **Priority Structure**: Home (1.0) → Categories (0.9) → Subcategories (0.8) → Pages (0.7)
