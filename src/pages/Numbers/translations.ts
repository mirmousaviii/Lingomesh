import { createTranslations } from "../../utils/i18n";

export interface NumbersTranslations {
  basicNumbersTitle: string;
  basicNumbersSubtitle: string;
  numberRulesTitle: string;
  numberRulesSubtitle: string;
  decimalNumbersTitle: string;
  decimalNumbersSubtitle: string;
  mathOperatorsTitle: string;
  mathOperatorsSubtitle: string;
  ordinalNumbersTitle: string;
  ordinalNumbersSubtitle: string;
  numberRules: Array<{
    title: string;
    description: string;
    example: string;
  }>;
  decimalRules: Array<{
    title: string;
    description: string;
    example: string;
  }>;
  mathOperators: Array<{
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
    decimalNumbersTitle: "Decimal Numbers",
    decimalNumbersSubtitle: "How to read and write decimal numbers in German",
    mathOperatorsTitle: "Mathematical Operators",
    mathOperatorsSubtitle: "Basic mathematical operations in German",
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
    decimalRules: [
      {
        title: "Comma as decimal separator",
        description:
          "In German, use comma (,) instead of dot (.) for decimal numbers",
        example: "3,14 → drei komma eins vier",
      },
      {
        title: "Reading decimal numbers",
        description: "Each digit after the comma is read individually",
        example: "2,5 → zwei komma fünf",
      },
      {
        title: "Zero in decimals",
        description: "Zeros in decimal places are read as 'null'",
        example: "1,05 → eins komma null fünf",
      },
      {
        title: "Currency format",
        description: "Prices often use comma: €2,50 = zwei Euro fünfzig",
        example: "€2,50 → zwei Euro fünfzig",
      },
    ],
    mathOperators: [
      {
        title: "Addition (+)",
        description: "Plus = 'plus' or 'und'",
        example: "5 + 3 = 8 → fünf plus drei ist acht",
      },
      {
        title: "Subtraction (-)",
        description: "Minus = 'minus'",
        example: "10 - 4 = 6 → zehn minus vier ist sechs",
      },
      {
        title: "Multiplication (×)",
        description: "Times = 'mal'",
        example: "6 × 7 = 42 → sechs mal sieben ist zweiundvierzig",
      },
      {
        title: "Division (÷)",
        description: "Divided by = 'geteilt durch'",
        example: "15 ÷ 3 = 5 → fünfzehn geteilt durch drei ist fünf",
      },
      {
        title: "Equals (=)",
        description: "Equals = 'ist' or 'gleich'",
        example: "2 + 2 = 4 → zwei plus zwei ist vier",
      },
    ],
  },
  de: {
    basicNumbersTitle: "Grundzahlen",
    basicNumbersSubtitle: "Die wichtigsten Zahlen im Deutschen",
    numberRulesTitle: "Zahlenregeln",
    numberRulesSubtitle: "Wichtige Regeln für deutsche Zahlen",
    decimalNumbersTitle: "Dezimalzahlen",
    decimalNumbersSubtitle:
      "Wie man Dezimalzahlen auf Deutsch liest und schreibt",
    mathOperatorsTitle: "Mathematische Operatoren",
    mathOperatorsSubtitle: "Grundlegende mathematische Operationen auf Deutsch",
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
    decimalRules: [
      {
        title: "Komma als Dezimaltrennzeichen",
        description:
          "Im Deutschen verwendet man Komma (,) statt Punkt (.) für Dezimalzahlen",
        example: "3,14 → drei komma eins vier",
      },
      {
        title: "Dezimalzahlen lesen",
        description: "Jede Ziffer nach dem Komma wird einzeln gelesen",
        example: "2,5 → zwei komma fünf",
      },
      {
        title: "Null in Dezimalstellen",
        description: "Nullen in Dezimalstellen werden als 'null' gelesen",
        example: "1,05 → eins komma null fünf",
      },
      {
        title: "Währungsformat",
        description: "Preise verwenden oft Komma: €2,50 = zwei Euro fünfzig",
        example: "€2,50 → zwei Euro fünfzig",
      },
    ],
    mathOperators: [
      {
        title: "Addition (+)",
        description: "Plus = 'plus' oder 'und'",
        example: "5 + 3 = 8 → fünf plus drei ist acht",
      },
      {
        title: "Subtraktion (-)",
        description: "Minus = 'minus'",
        example: "10 - 4 = 6 → zehn minus vier ist sechs",
      },
      {
        title: "Multiplikation (×)",
        description: "Mal = 'mal'",
        example: "6 × 7 = 42 → sechs mal sieben ist zweiundvierzig",
      },
      {
        title: "Division (÷)",
        description: "Geteilt durch = 'geteilt durch'",
        example: "15 ÷ 3 = 5 → fünfzehn geteilt durch drei ist fünf",
      },
      {
        title: "Gleich (=)",
        description: "Gleich = 'ist' oder 'gleich'",
        example: "2 + 2 = 4 → zwei plus zwei ist vier",
      },
    ],
  },
  es: {
    basicNumbersTitle: "Números Básicos",
    basicNumbersSubtitle: "Los números más importantes en alemán",
    numberRulesTitle: "Reglas de Números",
    numberRulesSubtitle: "Reglas importantes para números alemanes",
    decimalNumbersTitle: "Números Decimales",
    decimalNumbersSubtitle: "Cómo leer y escribir números decimales en alemán",
    mathOperatorsTitle: "Operadores Matemáticos",
    mathOperatorsSubtitle: "Operaciones matemáticas básicas en alemán",
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
    decimalRules: [
      {
        title: "Coma como separador decimal",
        description:
          "En alemán, usa coma (,) en lugar de punto (.) para números decimales",
        example: "3,14 → drei komma eins vier",
      },
      {
        title: "Leer números decimales",
        description: "Cada dígito después de la coma se lee individualmente",
        example: "2,5 → zwei komma fünf",
      },
      {
        title: "Cero en decimales",
        description: "Los ceros en lugares decimales se leen como 'null'",
        example: "1,05 → eins komma null fünf",
      },
      {
        title: "Formato de moneda",
        description: "Los precios suelen usar coma: €2,50 = zwei Euro fünfzig",
        example: "€2,50 → zwei Euro fünfzig",
      },
    ],
    mathOperators: [
      {
        title: "Suma (+)",
        description: "Más = 'plus' o 'und'",
        example: "5 + 3 = 8 → fünf plus drei ist acht",
      },
      {
        title: "Resta (-)",
        description: "Menos = 'minus'",
        example: "10 - 4 = 6 → zehn minus vier ist sechs",
      },
      {
        title: "Multiplicación (×)",
        description: "Por = 'mal'",
        example: "6 × 7 = 42 → sechs mal sieben ist zweiundvierzig",
      },
      {
        title: "División (÷)",
        description: "Dividido por = 'geteilt durch'",
        example: "15 ÷ 3 = 5 → fünfzehn geteilt durch drei ist fünf",
      },
      {
        title: "Igual (=)",
        description: "Igual = 'ist' o 'gleich'",
        example: "2 + 2 = 4 → zwei plus zwei ist vier",
      },
    ],
  },
  ru: {
    basicNumbersTitle: "Основные Числа",
    basicNumbersSubtitle: "Самые важные числа в немецком языке",
    numberRulesTitle: "Правила Чисел",
    numberRulesSubtitle: "Важные правила для немецких чисел",
    decimalNumbersTitle: "Десятичные Числа",
    decimalNumbersSubtitle: "Как читать и писать десятичные числа на немецком",
    mathOperatorsTitle: "Математические Операторы",
    mathOperatorsSubtitle: "Основные математические операции на немецком",
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
    decimalRules: [
      {
        title: "Запятая как десятичный разделитель",
        description:
          "В немецком используют запятую (,) вместо точки (.) для десятичных чисел",
        example: "3,14 → drei komma eins vier",
      },
      {
        title: "Чтение десятичных чисел",
        description: "Каждая цифра после запятой читается отдельно",
        example: "2,5 → zwei komma fünf",
      },
      {
        title: "Ноль в десятичных",
        description: "Нули в десятичных разрядах читаются как 'null'",
        example: "1,05 → eins komma null fünf",
      },
      {
        title: "Формат валюты",
        description: "Цены часто используют запятую: €2,50 = zwei Euro fünfzig",
        example: "€2,50 → zwei Euro fünfzig",
      },
    ],
    mathOperators: [
      {
        title: "Сложение (+)",
        description: "Плюс = 'plus' или 'und'",
        example: "5 + 3 = 8 → fünf plus drei ist acht",
      },
      {
        title: "Вычитание (-)",
        description: "Минус = 'minus'",
        example: "10 - 4 = 6 → zehn minus vier ist sechs",
      },
      {
        title: "Умножение (×)",
        description: "Умножить на = 'mal'",
        example: "6 × 7 = 42 → sechs mal sieben ist zweiundvierzig",
      },
      {
        title: "Деление (÷)",
        description: "Разделить на = 'geteilt durch'",
        example: "15 ÷ 3 = 5 → fünfzehn geteilt durch drei ist fünf",
      },
      {
        title: "Равно (=)",
        description: "Равно = 'ist' или 'gleich'",
        example: "2 + 2 = 4 → zwei plus zwei ist vier",
      },
    ],
  },
});
