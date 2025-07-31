# Quiz Multilingual System Guide

## Overview

This guide explains the multilingual quiz system implementation where **all questions and answer options are displayed in German only**, while explanations remain in the user's selected language for better understanding.

## Key Principles

### German-Only Questions & Options

- **Questions**: All quiz questions are displayed in German
- **Options**: All answer choices are in German
- **Explanations**: Multilingual (user's selected language)
- **UI Elements**: Properly translated for all languages

### Benefits

1. **Maximum German Exposure**: Users see authentic German language
2. **Learning Efficiency**: Direct immersion in target language
3. **Consistency**: Same experience across all language settings
4. **Accessibility**: Explanations in native language for understanding

## Data Structure

### MultilingualQuizQuestion Interface

```typescript
export interface MultilingualQuizQuestion {
  question: {
    en: string; // German question for all languages
    de: string;
    es: string;
    ru: string;
  };
  options: {
    en: string[]; // German options for all languages
    de: string[];
    es: string[];
    ru: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string; // Explanation in user's language
    de: string;
    es: string;
    ru: string;
  };
}
```

### QuizQuestion Interface

```typescript
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
```

## Implementation

### 1. QuizWidget Component

**Location**: `src/components/widgets/QuizWidget/QuizWidget.tsx`

**Key Features**:

- Displays German questions and options
- Shows multilingual explanations
- Handles user interaction and scoring
- Responsive design

**Usage**:

```typescript
import QuizWidget, {
  convertMultilingualQuestions,
} from "../../components/widgets/QuizWidget/QuizWidget";

const questions = convertMultilingualQuestions(multilingualQuestions, language);

<QuizWidget language={language} questions={questions} subject="Time" />;
```

### 2. Data Conversion Utility

**Function**: `convertMultilingualQuestions`

**Purpose**: Converts `MultilingualQuizQuestion[]` to `QuizQuestion[]` for a specific language

**Implementation**:

```typescript
export const convertMultilingualQuestions = (
  multilingualQuestions: MultilingualQuizQuestion[],
  language: Language
): QuizQuestion[] => {
  return multilingualQuestions.map((mq) => ({
    question: mq.question[language], // German question for all languages
    options: mq.options[language], // German options for all languages
    correctAnswer: mq.correctAnswer,
    explanation: mq.explanation[language], // User's language
  }));
};
```

### 3. Centralized Quiz Data

**Location**: `src/data/quizData.ts`

**Structure**:

```typescript
export const timeQuizQuestions: MultilingualQuizQuestion[] = [
  {
    question: {
      en: "Was bedeutet 'halb zwei'?", // German for all
      de: "Was bedeutet 'halb zwei'?",
      es: "Was bedeutet 'halb zwei'?",
      ru: "Was bedeutet 'halb zwei'?",
    },
    options: {
      en: ["2:30", "1:30", "2:15", "1:15"], // German for all
      de: ["2:30", "1:30", "2:15", "1:15"],
      es: ["2:30", "1:30", "2:15", "1:15"],
      ru: ["2:30", "1:30", "2:15", "1:15"],
    },
    correctAnswer: 1,
    explanation: {
      en: "'halb zwei' means 1:30. 'halb' refers to the coming hour.",
      de: "'halb zwei' bedeutet 1:30. 'halb' bezieht sich auf die kommende Stunde.",
      es: "'halb zwei' significa 1:30. 'halb' se refiere a la hora que viene.",
      ru: "'halb zwei' означает 1:30. 'halb' относится к следующему часу.",
    },
  },
  // ... more questions
];
```

## Available Quiz Categories

### 1. Time Quiz

- **Data**: `timeQuizQuestions`
- **Topics**: Time expressions, formal vs informal time
- **Questions**: 5 comprehensive questions
- **All questions and options in German**

### 2. Questions Quiz

- **Data**: `questionsQuizQuestions`
- **Topics**: Question words, W-questions, Yes/No questions
- **Questions**: 5 comprehensive questions
- **All questions and options in German**

### 3. Articles Quiz

- **Data**: `articlesQuizQuestions`
- **Topics**: German articles, cases
- **Questions**: 3 comprehensive questions
- **All questions and options in German**

### 4. Numbers Quiz

- **Data**: `numbersQuizQuestions`
- **Topics**: German numbers, counting
- **Questions**: 2 comprehensive questions
- **All questions and options in German**

### 5. Weather Quiz

- **Data**: `weatherQuizQuestions`
- **Topics**: Weather vocabulary, expressions
- **Questions**: 2 comprehensive questions
- **All questions and options in German**

## Translation System

### UI Translations

**Location**: `src/components/widgets/QuizWidget/translations.ts`

**Available Keys**:

- `description`: Quiz description
- `noQuestionsAvailable`: No questions message
- `score`: Score display label
- `reset`: Reset button text
- `nextQuestion`: Next question button
- `explanation`: Explanation label
- `correct`: Correct answer indicator
- `incorrect`: Incorrect answer indicator

### Translation Hook

**Hook**: `useModuleTranslations`

**Usage**:

```typescript
const t = useModuleTranslations<QuizTranslations>("quiz", language);
```

## Best Practices

### 1. Question Structure

- **Questions**: Always in German
- **Options**: Always in German
- **Explanations**: In user's language
- **Authenticity**: Use real German expressions

### 2. Content Quality

- Use authentic German vocabulary
- Include common phrases and idioms
- Ensure grammatical correctness
- Vary difficulty appropriately

### 3. Translation Quality

- Accurate explanations in all languages
- Consider cultural context
- Maintain consistent terminology
- Test with native speakers

### 4. Code Organization

- Centralize quiz data in `quizData.ts`
- Use TypeScript interfaces
- Keep components clean
- Follow naming conventions

## Implementation Examples

### Creating a New Quiz Category

1. **Add data to `quizData.ts`**:

```typescript
export const newQuizQuestions: MultilingualQuizQuestion[] = [
  {
    question: {
      en: "German question here",
      de: "German question here",
      es: "German question here",
      ru: "German question here",
    },
    options: {
      en: ["German", "options", "here"],
      de: ["German", "options", "here"],
      es: ["German", "options", "here"],
      ru: ["German", "options", "here"],
    },
    correctAnswer: 0,
    explanation: {
      en: "Explanation in English",
      de: "Explanation in German",
      es: "Explanation in Spanish",
      ru: "Explanation in Russian",
    },
  },
];
```

2. **Use in component**:

```typescript
import { newQuizQuestions } from "../../data/quizData";

const questions = convertMultilingualQuestions(newQuizQuestions, language);

<QuizWidget language={language} questions={questions} subject="New Category" />;
```

## File Structure

```
src/
├── components/widgets/QuizWidget/
│   ├── QuizWidget.tsx          # Main quiz component
│   └── translations.ts         # UI translations
├── data/
│   └── quizData.ts            # Centralized quiz data
├── pages/
│   ├── Time/Time.tsx          # Time page with quiz
│   └── Questions/widgets/
│       └── GermanQuestionsWidget/
│           └── GermanQuestionsWidget.tsx
└── hooks/
    └── useTranslations.ts     # Translation hook
```

## Benefits of German-Only Approach

1. **Immersion**: Maximum exposure to German language
2. **Authenticity**: Real German expressions and vocabulary
3. **Learning Efficiency**: Direct exposure to target language
4. **Consistency**: Same experience for all users
5. **Accessibility**: Explanations in native language
6. **Educational Value**: Detailed explanations for understanding

## Future Enhancements

- Add difficulty levels
- Include audio pronunciation
- Add progress tracking
- Implement spaced repetition
- Add question categories and filtering
- Include cultural context explanations
- Add German grammar explanations
- Support for more quiz categories

## Support

For questions or issues:

- Check `src/data/quizData.ts` for quiz data structure
- Review `src/components/widgets/QuizWidget/QuizWidget.tsx` for component implementation
- Refer to this guide for best practices
