# Pages Structure

This directory contains all the individual pages for the Lingomesh.

## Page Components

### Home (`Home/Home.tsx`)

- Main home page with time, date, weather, and utility widgets
- Contains the right-side widgets from the original layout
- Organized in a responsive grid layout

### Grammar Pages

Each grammar widget now has its own dedicated page:

- **Articles** (`Articles/Articles.tsx`) - German articles learning
- **Pronouns** (`Pronouns/Pronouns.tsx`) - Personal pronouns
- **Verbs** (`Verbs/Verbs.tsx`) - Verb conjugation
- **Prepositions** (`Prepositions/Prepositions.tsx`) - Verbs with prepositions
- **Declension** (`Declension/Declension.tsx`) - Adjective declension
- **Questions** (`Questions/Questions.tsx`) - Question formation
- **Sentences** (`Sentences/Sentences.tsx`) - Useful German sentences

## Navigation

The navigation system is implemented in `src/components/layout/Navigation/Navigation.tsx` and provides:

- Horizontal menu bar with icons and labels
- Responsive design with scrollable menu on smaller screens
- Active page highlighting
- Smooth transitions between pages

## Usage

Each page component accepts a `language` prop for internationalization and renders the corresponding widget in full-page format with proper spacing and layout.

The main App component (`src/components/layout/App/App.tsx`) handles page routing and state management.
