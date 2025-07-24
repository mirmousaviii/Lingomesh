import { useState, useEffect } from "react";
import Widget from "../../ui/Widget/Widget";
import { convertNumberToGerman } from "../../../utils/numberConverter";

interface NumberConverterWidgetProps {
  showTranslations: boolean;
}

const NumberConverterWidget: React.FC<NumberConverterWidgetProps> = ({
  showTranslations,
}) => {
  const [numberInput, setNumberInput] = useState("12");
  const [convertedText, setConvertedText] = useState("");

  useEffect(() => {
    if (numberInput) {
      const numberValue = parseInt(numberInput, 10);
      setConvertedText(convertNumberToGerman(numberValue));
    } else {
      setConvertedText("");
    }
  }, [numberInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberInput(e.target.value);
  };

  // Speech synthesis function
  const speakText = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Widget
      title="Zahlenkonverter"
      englishTitle={showTranslations ? "Number Converter" : undefined}
    >
      <div className="space-y-4">
        <input
          type="number"
          value={numberInput}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-md bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          placeholder="Enter a number"
        />
        <div className="text-center p-4">
          <div className="flex items-center justify-center gap-3">
            <p className="text-xl text-accent-600 dark:text-accent-400 font-medium italic">
              {convertedText}
            </p>
            {convertedText && (
              <button
                onClick={() => speakText(convertedText)}
                className="flex-shrink-0 p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
                title={showTranslations ? "Listen" : "Hören"}
              >
                <svg
                  className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default NumberConverterWidget;
