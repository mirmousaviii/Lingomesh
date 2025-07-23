# German Dashboard - Project Structure

This document describes the improved project structure and organization of the German Dashboard application.

## Directory Structure

```
src/
├── components/           # React components organized by purpose
│   ├── layout/          # Layout components (App, Header, Footer)
│   ├── widgets/         # Feature-specific widget components
│   ├── ui/              # Reusable UI components
│   └── index.ts         # Component exports
├── hooks/               # Custom React hooks
│   ├── useTheme.ts      # Theme management hook
│   ├── useTranslations.ts # Translation preferences hook
│   └── index.ts         # Hook exports
├── services/            # API and external service integrations
│   ├── weatherService.ts # Weather API service
│   └── index.ts         # Service exports
├── types/               # TypeScript type definitions
│   ├── weather.ts       # Weather-related types
│   └── index.ts         # Type exports
├── constants/           # Application constants
│   ├── cities.ts        # German cities data
│   └── index.ts         # Constant exports
├── utils/               # Utility functions (future use)
└── index.tsx           # Application entry point
```

## Component Organization

### Layout Components (`components/layout/`)

- **App**: Main application component with state management
- **Header**: Application header with navigation
- **Footer**: Application footer

### Widget Components (`components/widgets/`)

- **TimeWidget**: Displays current time in German
- **DateWidget**: Displays current date in German
- **WeatherWidget**: Displays weather information for German cities
- **SettingsWidget**: Application settings and preferences

### UI Components (`components/ui/`)

- **Widget**: Reusable widget container component

## Key Improvements

1. **Separation of Concerns**: Business logic separated from UI components
2. **Custom Hooks**: Reusable logic extracted into custom hooks
3. **Service Layer**: API calls centralized in service files
4. **Type Safety**: Proper TypeScript types organized in dedicated files
5. **Constants**: Application data separated from components
6. **Clean Imports**: Index files provide clean import paths

## Usage Examples

```typescript
// Import components
import { App, TimeWidget, WeatherWidget } from "./components";

// Import hooks
import { useTheme, useTranslations } from "./hooks";

// Import services
import { weatherService } from "./services";

// Import types
import { WeatherData } from "./types";

// Import constants
import { GERMAN_CITIES } from "./constants";
```

## Benefits

- **Maintainability**: Easier to find and modify specific functionality
- **Reusability**: Components and hooks can be easily reused
- **Testability**: Isolated logic is easier to test
- **Scalability**: Structure supports future growth and new features
- **Developer Experience**: Clear organization makes development faster
