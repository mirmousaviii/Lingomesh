import { createTranslations } from "../../utils/i18n";

export interface UITranslations {
  listen: string;
  colorLegend: string;
  units: string;
  tens: string;
  hundreds: string;
  thousands: string;
  millions: string;
  decimals: string;
  connectors: string;
  numberRangeError: string;
}

export const uiTranslations = createTranslations<UITranslations>({
  en: {
    listen: "Listen",
    colorLegend: "Color Legend",
    units: "Units",
    tens: "Tens",
    hundreds: "Hundreds",
    thousands: "Thousands",
    millions: "Millions",
    decimals: "Decimals",
    connectors: "Connectors",
    numberRangeError: "Please enter a number between 0 and 999,999,999.999",
  },
  de: {
    listen: "Anhören",
    colorLegend: "Farben-Legende",
    units: "Einer",
    tens: "Zehner",
    hundreds: "Hunderter",
    thousands: "Tausender",
    millions: "Millionen",
    decimals: "Dezimalstellen",
    connectors: "Verbindungen",
    numberRangeError:
      "Bitte geben Sie eine Zahl zwischen 0 und 999.999.999,999 ein",
  },
  es: {
    listen: "Escuchar",
    colorLegend: "Leyenda de Colores",
    units: "Unidades",
    tens: "Decenas",
    hundreds: "Centenas",
    thousands: "Miles",
    millions: "Millones",
    decimals: "Decimales",
    connectors: "Conectores",
    numberRangeError: "Por favor ingrese un número entre 0 y 999,999,999.999",
  },
  ru: {
    listen: "Слушать",
    colorLegend: "Легенда цветов",
    units: "Единицы",
    tens: "Десятки",
    hundreds: "Сотни",
    thousands: "Тысячи",
    millions: "Миллионы",
    decimals: "Десятичные",
    connectors: "Соединители",
    numberRangeError: "Пожалуйста, введите число от 0 до 999,999,999.999",
  },
});
