import { createTranslations } from "../../../../utils/i18n";

export interface NumberConverterTranslations {
  description: string;
}

export const numberConverterTranslations =
  createTranslations<NumberConverterTranslations>({
    en: {
      description: "Convert numbers to German words",
    },
    de: {
      description: "Konvertieren Sie Zahlen in deutsche Wörter",
    },
    es: {
      description: "Convierte números a palabras alemanas",
    },
    ru: {
      description: "Конвертируйте числа в немецкие слова",
    },
  });
