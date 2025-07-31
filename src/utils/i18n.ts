import { Language } from "../hooks/useTranslations";

// Type for translation modules
export interface TranslationModule {
  [key: string]: any;
}

// Registry for translation modules
const translationModules: Record<string, TranslationModule> = {};

// Register a translation module
export function registerTranslationModule(
  moduleName: string,
  translations: Record<Language, TranslationModule>
) {
  translationModules[moduleName] = translations;
}

// Get all translations for a specific language
export function getTranslations(language: Language): Record<string, any> {
  const result: Record<string, any> = {};

  for (const [moduleName, moduleTranslations] of Object.entries(
    translationModules
  )) {
    if (moduleTranslations[language]) {
      result[moduleName] = moduleTranslations[language];
    }
  }

  return result;
}

// Get specific module translations
export function getModuleTranslations(
  moduleName: string,
  language: Language
): TranslationModule | null {
  const module = translationModules[moduleName];
  return module?.[language] || null;
}

// Helper function to create translation objects
export function createTranslations<T extends Record<string, any>>(
  translations: Record<Language, T>
): Record<Language, T> {
  return translations;
}
