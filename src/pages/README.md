# LingoMesh Pages Structure

This directory contains all the individual pages for the **LingoMesh** German language learning platform.

## Page Components

### Home (`Home/Home.tsx`)

- Main home page with time, date, weather, and utility widgets
- Contains the right-side widgets from the original layout
- Organized in a responsive grid layout
- Multi-language support for German, English, Spanish, and Russian

### Grammar Pages

Each grammar widget now has its own dedicated page with comprehensive learning content:

- **Articles** (`Articles/Articles.tsx`) - German articles learning with interactive exercises
- **Pronouns** (`Pronouns/Pronouns.tsx`) - Personal pronouns and their usage
- **Verbs** (`Verbs/Verbs.tsx`) - Verb conjugation and tense practice
- **Prepositions** (`Prepositions/Prepositions.tsx`) - Verbs with prepositions
- **Declension** (`Declension/Declension.tsx`) - Adjective declension patterns
- **Questions** (`Questions/Questions.tsx`) - Question formation and W-questions
- **Sentences** (`Sentences/Sentences.tsx`) - Useful German sentences and phrases

### Vocabulary Pages

- **Numbers** (`Numbers/Numbers.tsx`) - German numbers and counting
- **Time** (`Time/Time.tsx`) - Telling time in German
- **Date** (`Date/Date.tsx`) - Date formats and calendar vocabulary
- **Weather** (`Weather/Weather.tsx`) - Weather vocabulary and expressions

## Navigation

The navigation system is implemented in `src/components/layout/Navigation/Navigation.tsx` and provides:

- Horizontal menu bar with icons and labels
- Responsive design with scrollable menu on smaller screens
- Active page highlighting
- Smooth transitions between pages
- Multi-language navigation support

## SEO Features

Each page includes:

- Dynamic meta tags optimized for search engines
- Language-specific content and descriptions
- Proper heading hierarchy for accessibility
- Open Graph and Twitter Card meta tags
- Canonical URLs for each language variant

## Usage

Each page component accepts a `language` prop for internationalization and renders the corresponding widget in full-page format with proper spacing and layout.

The main App component (`src/components/layout/App/App.tsx`) handles page routing and state management.

## URL Structure

Pages follow the hierarchical URL structure:

- `/de` - German home page
- `/en/grammar/verbs` - English verbs page
- `/es/vocabulary/numbers` - Spanish numbers page
- `/ru/grammar/pronouns` - Russian pronouns page

This structure supports 172+ indexed pages for comprehensive SEO coverage.
