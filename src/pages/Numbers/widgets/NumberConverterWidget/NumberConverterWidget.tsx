import { useState, useEffect } from "react";
import { Language } from "../../../../hooks/useTranslations";
import { useModuleTranslations } from "../../../../hooks/useModuleTranslations";
import { NumberConverterTranslations } from "./translations";
import { UITranslations } from "../../../../components/ui/translations";
import Box from "../../../../components/ui/Box/Box";
import AudioButton from "../../../../components/ui/AudioButton/AudioButton";
import {
  convertNumberToGermanStructured,
  NumberPart,
} from "../../../../utils/numberConverter";

interface NumberConverterWidgetProps {
  language: Language;
}

const NumberConverterWidget: React.FC<NumberConverterWidgetProps> = ({
  language,
}) => {
  const [numberInput, setNumberInput] = useState("321");
  const [convertedParts, setConvertedParts] = useState<NumberPart[]>([]);
  const [inputError, setInputError] = useState(false);
  const t = useModuleTranslations<NumberConverterTranslations>(
    "numberConverter",
    language
  );
  const ui = useModuleTranslations<UITranslations>("ui", language);

  useEffect(() => {
    if (numberInput) {
      const numberValue = parseInt(numberInput, 10);
      setConvertedParts(convertNumberToGermanStructured(numberValue));
    } else {
      setConvertedParts([]);
    }
  }, [numberInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseInt(value, 10);

    // Validate the input
    if (value === "" || (numValue >= 0 && numValue <= 999999999)) {
      setNumberInput(value);
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  // Speech synthesis function
  const speakText = (parts: NumberPart[]) => {
    if ("speechSynthesis" in window) {
      const text = parts.map((part) => part.text).join("");
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Color mapping for different number parts
  const getColorClass = (type: NumberPart["type"]) => {
    switch (type) {
      case "unit":
        return "text-blue-600 dark:text-blue-400";
      case "tens":
        return "text-green-600 dark:text-green-400";
      case "hundreds":
        return "text-purple-600 dark:text-purple-400";
      case "thousands":
        return "text-orange-600 dark:text-orange-400";
      case "millions":
        return "text-red-600 dark:text-red-400";
      case "connector":
        return "text-neutral-500 dark:text-neutral-400";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  return (
    <Box titleKey="zahlenkonverter"
      language={language}
      headerColor="primary"
      description={t?.description || "Convert numbers to German words"}
    >
      <div className="space-y-6">
        {/* Input Section */}
        <div className="space-y-2">
          <input
            type="number"
            value={numberInput}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 text-lg border rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              inputError
                ? "border-red-500 dark:border-red-400 focus:ring-red-500"
                : "border-neutral-300 dark:border-neutral-600"
            }`}
            placeholder="123"
            min="0"
            max="999999999"
          />
          {inputError && (
            <p className="text-sm text-red-600 dark:text-red-400 mt-1">
              {ui?.numberRangeError ||
                "Please enter a number between 0 and 999,999,999"}
            </p>
          )}
        </div>

        {/* Result Section */}
        {convertedParts.length > 0 && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed break-words hyphens-auto">
                    {convertedParts.map((part, index) => (
                      <span
                        key={index}
                        className={`${getColorClass(
                          part.type
                        )} transition-colors duration-200`}
                      >
                        {part.text}
                      </span>
                    ))}
                  </p>
                </div>

                <AudioButton
                  onClick={() => speakText(convertedParts)}
                  title={ui?.listen || "Listen"}
                  size="lg"
                />
              </div>
            </div>

            {/* Color Legend */}
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
              <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                {ui?.colorLegend || "Color Legend"}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {ui?.units || "Units"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {ui?.tens || "Tens"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {ui?.hundreds || "Hundreds"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {ui?.thousands || "Thousands"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {ui?.millions || "Millions"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-500"></div>
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {ui?.connectors || "Connectors"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {convertedParts.length === 0 && numberInput && (
          <div className="text-center py-8">
            <div className="text-neutral-400 dark:text-neutral-500">
              <svg
                className="w-12 h-12 mx-auto mb-3 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-sm">
                Enter a number to see the German translation
              </p>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default NumberConverterWidget;
