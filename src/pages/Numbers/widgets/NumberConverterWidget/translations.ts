import { createTranslations } from "../../../../utils/i18n";

export interface NumberConverterTranslations {
  description: string;
}

export const numberConverterTranslations =
  createTranslations<NumberConverterTranslations>({
    en: {
      description:
        "Convert numbers (including decimals) to German words. Use comma or dot as decimal separator.",
    },
    de: {
      description:
        "Konvertieren Sie Zahlen (einschließlich Dezimalzahlen) in deutsche Wörter. Verwenden Sie Komma oder Punkt als Dezimaltrennzeichen.",
    },
    es: {
      description:
        "Convierte números (incluyendo decimales) a palabras alemanas. Usa coma o punto como separador decimal.",
    },
    ru: {
      description:
        "Конвертируйте числа (включая десятичные) в немецкие слова. Используйте запятую или точку как десятичный разделитель.",
    },
  });
