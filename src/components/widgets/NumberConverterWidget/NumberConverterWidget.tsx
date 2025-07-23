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
          className="input-field"
          placeholder="Enter a number"
        />
        <div className="text-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <p className="text-xl text-german italic">{convertedText}</p>
        </div>
      </div>
    </Widget>
  );
};

export default NumberConverterWidget;
