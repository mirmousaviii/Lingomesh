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

export interface NumberPart {
  text: string;
  type: "unit" | "tens" | "hundreds" | "thousands" | "millions" | "connector";
}

export const convertNumberToGermanStructured = (num: number): NumberPart[] => {
  if (num === 0) return [{ text: "null", type: "unit" }];
  if (num < 10) return [{ text: units[num], type: "unit" }];

  if (num < 20) {
    if (num === 11) return [{ text: "elf", type: "tens" }];
    if (num === 12) return [{ text: "zwölf", type: "tens" }];
    if (num === 13) return [{ text: "dreizehn", type: "tens" }];
    if (num === 14) return [{ text: "vierzehn", type: "tens" }];
    if (num === 15) return [{ text: "fünfzehn", type: "tens" }];
    if (num === 16) return [{ text: "sechzehn", type: "tens" }];
    if (num === 17) return [{ text: "siebzehn", type: "tens" }];
    if (num === 18) return [{ text: "achtzehn", type: "tens" }];
    if (num === 19) return [{ text: "neunzehn", type: "tens" }];
    return [{ text: units[num - 10] + "zehn", type: "tens" }];
  }

  if (num < 100) {
    const unit = num % 10;
    const ten = Math.floor(num / 10);
    if (unit === 0) return [{ text: tens[ten], type: "tens" }];
    if (unit === 1)
      return [
        { text: "ein", type: "unit" },
        { text: "und", type: "connector" },
        { text: tens[ten], type: "tens" },
      ];
    return [
      { text: units[unit], type: "unit" },
      { text: "und", type: "connector" },
      { text: tens[ten], type: "tens" },
    ];
  }

  if (num < 1000) {
    const hundred = Math.floor(num / 100);
    const remainder = num % 100;
    if (remainder === 0)
      return [{ text: units[hundred] + "hundert", type: "hundreds" }];

    const parts: NumberPart[] = [
      { text: units[hundred] + "hundert", type: "hundreds" },
    ];
    if (remainder > 0) {
      parts.push(...convertNumberToGermanStructured(remainder));
    }
    return parts;
  }

  if (num < 1000000) {
    const thousand = Math.floor(num / 1000);
    const remainder = num % 1000;
    if (remainder === 0) {
      const thousandParts = convertNumberToGermanStructured(thousand);
      return [...thousandParts, { text: "tausend", type: "thousands" }];
    }

    const parts: NumberPart[] = [];
    if (thousand === 1) {
      parts.push({ text: "eintausend", type: "thousands" });
    } else {
      parts.push(...convertNumberToGermanStructured(thousand));
      parts.push({ text: "tausend", type: "thousands" });
    }
    if (remainder > 0) {
      parts.push(...convertNumberToGermanStructured(remainder));
    }
    return parts;
  }

  if (num < 1000000000) {
    const million = Math.floor(num / 1000000);
    const remainder = num % 1000000;
    if (remainder === 0) {
      const millionParts = convertNumberToGermanStructured(million);
      return [...millionParts, { text: "millionen", type: "millions" }];
    }

    const parts: NumberPart[] = [];
    if (million === 1) {
      parts.push({ text: "eine million", type: "millions" });
    } else {
      parts.push(...convertNumberToGermanStructured(million));
      parts.push({ text: "millionen", type: "millions" });
    }
    if (remainder > 0) {
      parts.push(...convertNumberToGermanStructured(remainder));
    }
    return parts;
  }

  return [{ text: num.toString(), type: "unit" }];
};

// Keep the original function for backward compatibility
export const convertNumberToGerman = (num: number): string => {
  const parts = convertNumberToGermanStructured(num);
  return parts.map((part) => part.text).join("");
};
