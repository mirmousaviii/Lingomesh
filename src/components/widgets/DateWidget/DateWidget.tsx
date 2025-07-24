import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";
import { convertNumberToGerman } from "../../../utils/numberConverter";

interface DateWidgetProps {
  currentTime: Date;
  language: Language;
}

const DateWidget: React.FC<DateWidgetProps> = ({ currentTime, language }) => {
  const t = useTranslation(language);

  const days = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  const convertDateToGermanPhonetic = (date: Date) => {
    const ordinals: Record<number, string> = {
      1: "erste",
      2: "zweite",
      3: "dritte",
      4: "vierte",
      5: "fünfte",
      6: "sechste",
      7: "siebte",
      8: "achte",
      9: "neunte",
      10: "zehnte",
      11: "elfte",
      12: "zwölfte",
      13: "dreizehnte",
      14: "vierzehnte",
      15: "fünfzehnte",
      16: "sechzehnte",
      17: "siebzehnte",
      18: "achtzehnte",
      19: "neunzehnte",
      20: "zwanzigste",
      21: "einundzwanzigste",
      22: "zweiundzwanzigste",
      23: "dreiundzwanzigste",
      24: "vierundzwanzigste",
      25: "fünfundzwanzigste",
      26: "sechsundzwanzigste",
      27: "siebenundzwanzigste",
      28: "achtundzwanzigste",
      29: "neunundzwanzigste",
      30: "dreißigste",
      31: "einunddreißigste",
    };

    const dayOfWeek = days[(date.getDay() + 6) % 7];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const ordinal = ordinals[day] || convertNumberToGerman(day) + "ter";
    const yearWords = convertNumberToGerman(year);

    return `Heute ist ${dayOfWeek}, der ${ordinal} ${month} ${yearWords}`;
  };

  const formatDisplayDate = (date: Date) => {
    const dayOfWeek = days[(date.getDay() + 6) % 7];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek}, ${day}. ${month} ${year}`;
  };

  const formatEnglishDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
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
    <Widget titleKey="datum" language={language}>
      <div className="flex flex-col justify-between h-full space-y-8">
        <div className="text-center space-y-4">
          <p className="text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-2xl font-space-grotesk">
            {formatDisplayDate(currentTime)}
          </p>
          {language === "en" && (
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
              {formatEnglishDate(currentTime)}
            </p>
          )}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3">
            <p className="text-xl text-accent-600 dark:text-accent-400 font-medium italic font-ibm-plex">
              {convertDateToGermanPhonetic(currentTime)}
            </p>
            <button
              onClick={() =>
                speakText(convertDateToGermanPhonetic(currentTime))
              }
              className="flex-shrink-0 rounded-md bg-neutral-100 p-2 transition-colors duration-200 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600"
              title={t.ui.listen}
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
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default DateWidget;
