import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import { useModuleTranslations } from "../../../../hooks/useModuleTranslations";
import { NumbersTranslations } from "../../translations";
import { UITranslations } from "../../../../components/ui/translations";
import Box from "../../../../components/ui/Box/Box";
import AudioButton from "../../../../components/ui/AudioButton/AudioButton";

interface BasicNumbersWidgetProps {
  language: Language;
}

const BasicNumbersWidget: React.FC<BasicNumbersWidgetProps> = ({
  language,
}) => {
  const t = useModuleTranslations<NumbersTranslations>("numbers", language);
  const ui = useModuleTranslations<UITranslations>("ui", language);

  // Example numbers for learning (removed English translations)
  const basicNumbers = [
    { number: 0, german: "null" },
    { number: 1, german: "eins" },
    { number: 2, german: "zwei" },
    { number: 3, german: "drei" },
    { number: 4, german: "vier" },
    { number: 5, german: "fünf" },
    { number: 6, german: "sechs" },
    { number: 7, german: "sieben" },
    { number: 8, german: "acht" },
    { number: 9, german: "neun" },
    { number: 10, german: "zehn" },
    { number: 11, german: "elf" },
    { number: 12, german: "zwölf" },
    { number: 13, german: "dreizehn" },
    { number: 14, german: "vierzehn" },
    { number: 15, german: "fünfzehn" },
    { number: 16, german: "sechzehn" },
    { number: 17, german: "siebzehn" },
    { number: 18, german: "achtzehn" },
    { number: 19, german: "neunzehn" },
    { number: 20, german: "zwanzig" },
    { number: 21, german: "einundzwanzig" },
    { number: 22, german: "zweiundzwanzig" },
    { number: 23, german: "dreiundzwanzig" },
    { number: 24, german: "vierundzwanzig" },
    { number: 25, german: "fünfundzwanzig" },
    { number: 26, german: "sechsundzwanzig" },
    { number: 27, german: "siebenundzwanzig" },
    { number: 28, german: "achtundzwanzig" },
    { number: 29, german: "neunundzwanzig" },
    { number: 30, german: "dreißig" },
    { number: 40, german: "vierzig" },
    { number: 50, german: "fünfzig" },
    { number: 60, german: "sechzig" },
    { number: 70, german: "siebzig" },
    { number: 80, german: "achtzig" },
    { number: 90, german: "neunzig" },
    { number: 100, german: "hundert" },
    { number: 1000, german: "tausend" },
    { number: 10000, german: "zehntausend" },
    { number: 100000, german: "hunderttausend" },
    { number: 1000000, german: "eine Million" },
  ];

  const speakGerman = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  return (
    <Box titleKey="basicNumbers"
      language={language}
      description={
        t?.basicNumbersSubtitle || "The most important numbers in German"
      }
      headerColor="green"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {basicNumbers.map((item) => (
          <div
            key={item.number}
            className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-lg font-bold text-primary-600 dark:text-primary-400 mb-1">
                {item.number >= 1000
                  ? item.number.toLocaleString()
                  : item.number}
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

export default BasicNumbersWidget;
