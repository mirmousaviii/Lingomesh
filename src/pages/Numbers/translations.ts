import { createTranslations } from "../../utils/i18n";

export interface NumbersTranslations {
  basicNumbersTitle: string;
  basicNumbersSubtitle: string;
  numberRulesTitle: string;
  numberRulesSubtitle: string;
  ordinalNumbersTitle: string;
  ordinalNumbersSubtitle: string;
  numberRules: Array<{
    title: string;
    description: string;
    example: string;
  }>;
}

export const numbersTranslations = createTranslations<NumbersTranslations>({
  en: {
    basicNumbersTitle: "Basic Numbers",
    basicNumbersSubtitle: "The most important numbers in German",
    numberRulesTitle: "Number Rules",
    numberRulesSubtitle: "Important rules for German numbers",
    ordinalNumbersTitle: "Ordinal Numbers",
    ordinalNumbersSubtitle: "First, second, third... Learn the ordinal numbers",
    numberRules: [
      {
        title: "Units come first",
        description:
          "In two-digit numbers, the units are spoken before the tens: 21 = einundzwanzig",
        example: "21 → ein-und-zwanzig",
      },
      {
        title: "Thirty is different",
        description: "30 is called 'dreißig', not 'dreizig'",
        example: "30 → dreißig",
      },
      {
        title: "Hundred without 'ein'",
        description: "100 is simply 'hundert', not 'einhundert'",
        example: "100 → hundert",
      },
      {
        title: "Ordinals end in -te",
        description:
          "Ordinal numbers usually end in -te: erste, zweite, dritte",
        example: "1. → erste, 2. → zweite",
      },
    ],
  },
  de: {
    basicNumbersTitle: "Grundzahlen",
    basicNumbersSubtitle: "Die wichtigsten Zahlen im Deutschen",
    numberRulesTitle: "Zahlenregeln",
    numberRulesSubtitle: "Wichtige Regeln für deutsche Zahlen",
    ordinalNumbersTitle: "Ordinalzahlen",
    ordinalNumbersSubtitle:
      "Erste, zweite, dritte... Lernen Sie die Ordinalzahlen",
    numberRules: [
      {
        title: "Einer kommen zuerst",
        description:
          "Bei zweistelligen Zahlen wird die Einerstelle vor der Zehnerstelle gesprochen: 21 = einundzwanzig",
        example: "21 → ein-und-zwanzig",
      },
      {
        title: "Dreißig ist anders",
        description: "30 heißt 'dreißig', nicht 'dreizig'",
        example: "30 → dreißig",
      },
      {
        title: "Hundert ohne 'ein'",
        description: "100 heißt einfach 'hundert', nicht 'einhundert'",
        example: "100 → hundert",
      },
      {
        title: "Ordinalzahlen enden auf -te",
        description: "Ordinalzahlen enden meist auf -te: erste, zweite, dritte",
        example: "1. → erste, 2. → zweite",
      },
    ],
  },
  es: {
    basicNumbersTitle: "Números Básicos",
    basicNumbersSubtitle: "Los números más importantes en alemán",
    numberRulesTitle: "Reglas de Números",
    numberRulesSubtitle: "Reglas importantes para números alemanes",
    ordinalNumbersTitle: "Números Ordinales",
    ordinalNumbersSubtitle:
      "Primero, segundo, tercero... Aprende los números ordinales",
    numberRules: [
      {
        title: "Las unidades van primero",
        description:
          "En números de dos dígitos, las unidades se dicen antes que las decenas: 21 = einundzwanzig",
        example: "21 → ein-und-zwanzig",
      },
      {
        title: "Treinta es diferente",
        description: "30 se dice 'dreißig', no 'dreizig'",
        example: "30 → dreißig",
      },
      {
        title: "Cien sin 'ein'",
        description: "100 simplemente es 'hundert', no 'einhundert'",
        example: "100 → hundert",
      },
      {
        title: "Los ordinales terminan en -te",
        description:
          "Los números ordinales generalmente terminan en -te: erste, zweite, dritte",
        example: "1. → erste, 2. → zweite",
      },
    ],
  },
  ru: {
    basicNumbersTitle: "Основные Числа",
    basicNumbersSubtitle: "Самые важные числа в немецком языке",
    numberRulesTitle: "Правила Чисел",
    numberRulesSubtitle: "Важные правила для немецких чисел",
    ordinalNumbersTitle: "Порядковые Числа",
    ordinalNumbersSubtitle:
      "Первый, второй, третий... Изучите порядковые числа",
    numberRules: [
      {
        title: "Единицы идут первыми",
        description:
          "В двузначных числах единицы произносятся перед десятками: 21 = einundzwanzig",
        example: "21 → ein-und-zwanzig",
      },
      {
        title: "Тридцать отличается",
        description: "30 называется 'dreißig', а не 'dreizig'",
        example: "30 → dreißig",
      },
      {
        title: "Сто без 'ein'",
        description: "100 просто 'hundert', а не 'einhundert'",
        example: "100 → hundert",
      },
      {
        title: "Порядковые числа оканчиваются на -te",
        description:
          "Порядковые числа обычно оканчиваются на -te: erste, zweite, dritte",
        example: "1. → erste, 2. → zweite",
      },
    ],
  },
});
