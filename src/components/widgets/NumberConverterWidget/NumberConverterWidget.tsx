import { useState, useEffect } from "react";
import Widget from "../../ui/Widget/Widget";
import { convertNumberToGerman } from "../../../utils/numberConverter";

interface NumberConverterWidgetProps {
  showTranslations: boolean;
}

const NumberConverterWidget: React.FC<NumberConverterWidgetProps> = ({
  showTranslations,
}) => {
  const [numberInput, setNumberInput] = useState("1");
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
          <p className="text-xl text-accent-600 dark:text-accent-400 font-medium italic">
            {convertedText}
          </p>
        </div>
      </div>
    </Widget>
  );
};

export default NumberConverterWidget;
