import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";
import AudioButton from "../../ui/AudioButton/AudioButton";
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

    return `${t.time.heuteIst} ${dayOfWeek}, ${t.time.der} ${ordinal} ${month} ${yearWords}`;
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
      <div className="space-y-6">
        {/* Display Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {t.ui.date}
          </label>
          <div className="w-full px-4 py-3 text-lg border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
            <p className="text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-2xl font-space-grotesk">
              {formatDisplayDate(currentTime)}
            </p>
            {language === "en" && (
              <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
                {formatEnglishDate(currentTime)}
              </p>
            )}
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed break-words hyphens-auto text-accent-600 dark:text-accent-400 font-medium italic font-ibm-plex">
                  {convertDateToGermanPhonetic(currentTime)}
                </p>
              </div>

              <AudioButton
                onClick={() =>
                  speakText(convertDateToGermanPhonetic(currentTime))
                }
                title={t.ui.listen}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default DateWidget;
