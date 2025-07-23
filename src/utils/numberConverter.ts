const units = [
  "",
  "eins",
  "zwei",
  "drei",
  "vier",
  "fünf",
  "sechs",
  "sieben",
  "acht",
  "neun",
];

const tens = [
  "",
  "zehn",
  "zwanzig",
  "dreißig",
  "vierzig",
  "fünfzig",
  "sechzig",
  "siebzig",
  "achtzig",
  "neunzig",
];

export const convertNumberToGerman = (num: number): string => {
  if (num === 0) return "null";
  if (num < 10) return units[num];
  if (num < 20) {
    if (num === 11) return "elf";
    if (num === 12) return "zwölf";
    if (num === 13) return "dreizehn";
    if (num === 14) return "vierzehn";
    if (num === 15) return "fünfzehn";
    if (num === 16) return "sechzehn";
    if (num === 17) return "siebzehn";
    if (num === 18) return "achtzehn";
    if (num === 19) return "neunzehn";
    return units[num - 10] + "zehn";
  }
  if (num < 100) {
    const unit = num % 10;
    const ten = Math.floor(num / 10);
    if (unit === 0) return tens[ten];
    if (unit === 1) return "einund" + tens[ten];
    return units[unit] + "und" + tens[ten];
  }
  if (num < 1000) {
    const hundred = Math.floor(num / 100);
    const remainder = num % 100;
    if (remainder === 0) return units[hundred] + "hundert";
    return units[hundred] + "hundert" + convertNumberToGerman(remainder);
  }
  if (num < 1000000) {
    const thousand = Math.floor(num / 1000);
    const remainder = num % 1000;
    if (remainder === 0) return convertNumberToGerman(thousand) + "tausend";
    return (
      convertNumberToGerman(thousand) +
      "tausend" +
      convertNumberToGerman(remainder)
    );
  }
  return num.toString();
};
