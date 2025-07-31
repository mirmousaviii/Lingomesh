import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import { useModuleTranslations } from "../../../../hooks/useModuleTranslations";
import { NumbersTranslations } from "../../translations";
import { UITranslations } from "../../../../components/ui/translations";
import Box from "../../../../components/ui/Box/Box";
import AudioButton from "../../../../components/ui/AudioButton/AudioButton";

interface OrdinalNumbersWidgetProps {
  language: Language;
}

const OrdinalNumbersWidget: React.FC<OrdinalNumbersWidgetProps> = ({
  language,
}) => {
  const t = useModuleTranslations<NumbersTranslations>("numbers", language);
  const ui = useModuleTranslations<UITranslations>("ui", language);

  const ordinalNumbers = [
    { number: "0.", german: "nullte" },
    { number: "1.", german: "erste" },
    { number: "2.", german: "zweite" },
    { number: "3.", german: "dritte" },
    { number: "4.", german: "vierte" },
    { number: "5.", german: "fünfte" },
    { number: "6.", german: "sechste" },
    { number: "7.", german: "siebte" },
    { number: "8.", german: "achte" },
    { number: "9.", german: "neunte" },
    { number: "10.", german: "zehnte" },
    { number: "11.", german: "elfte" },
    { number: "12.", german: "zwölfte" },
    { number: "13.", german: "dreizehnte" },
    { number: "14.", german: "vierzehnte" },
    { number: "15.", german: "fünfzehnte" },
    { number: "16.", german: "sechzehnte" },
    { number: "17.", german: "siebzehnte" },
    { number: "18.", german: "achtzehnte" },
    { number: "19.", german: "neunzehnte" },
    { number: "20.", german: "zwanzigste" },
    { number: "21.", german: "einundzwanzigste" },
    { number: "22.", german: "zweiundzwanzigste" },
    { number: "23.", german: "dreiundzwanzigste" },
    { number: "24.", german: "vierundzwanzigste" },
    { number: "25.", german: "fünfundzwanzigste" },
    { number: "26.", german: "sechsundzwanzigste" },
    { number: "27.", german: "siebenundzwanzigste" },
    { number: "28.", german: "achtundzwanzigste" },
    { number: "29.", german: "neunundzwanzigste" },
    { number: "30.", german: "dreißigste" },
    { number: "40.", german: "vierzigste" },
    { number: "50.", german: "fünfzigste" },
    { number: "60.", german: "sechzigste" },
    { number: "70.", german: "siebzigste" },
    { number: "80.", german: "achtzigste" },
    { number: "90.", german: "neunzigste" },
    { number: "100.", german: "hundertste" },
    { number: "1000.", german: "tausendste" },
    { number: "10000.", german: "zehntausendste" },
    { number: "100000.", german: "hunderttausendste" },
    { number: "1000000.", german: "millionste" },
  ];

  const speakGerman = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  return (
    <Box titleKey="ordinalNumbers"
      language={language}
      description={t?.ordinalNumbersSubtitle || "Ordinal numbers in German"}
      headerColor="purple"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {ordinalNumbers.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1">
                {item.number.replace(/\d+/, (match) => {
                  const num = parseInt(match);
                  return num >= 1000 ? num.toLocaleString() : match;
                })}
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                {item.german}
              </div>
              <AudioButton
                onClick={() => speakGerman(item.german)}
                title={ui?.listen || "Listen"}
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default OrdinalNumbersWidget;
