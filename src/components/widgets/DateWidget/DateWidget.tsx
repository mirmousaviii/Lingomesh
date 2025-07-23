import Widget from "../../ui/Widget/Widget";
import { convertNumberToGerman } from "../../../utils/numberConverter";

interface DateWidgetProps {
  currentTime: Date;
  showTranslations: boolean;
}

const DateWidget: React.FC<DateWidgetProps> = ({
  currentTime,
  showTranslations,
}) => {
  // Format date for German display
  const formatGermanDate = (date: Date) => {
    return date.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format date for English display
  const formatEnglishDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert date to German phonetic pronunciation
  const convertDateToGermanPhonetic = (date: Date) => {
    // German day names
    const days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];

    // German month names
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

    // German ordinal numbers
    const ordinals: { [key: number]: string } = {
      1: "erster",
      2: "zweiter",
      3: "dritter",
      4: "vierter",
      5: "fünfter",
      6: "sechster",
      7: "siebter",
      8: "achter",
      9: "neunter",
      10: "zehnter",
      11: "elfter",
      12: "zwölfter",
      13: "dreizehnter",
      14: "vierzehnter",
      15: "fünfzehnter",
      16: "sechzehnter",
      17: "siebzehnter",
      18: "achtzehnter",
      19: "neunzehnter",
      20: "zwanzigster",
      21: "einundzwanzigster",
      22: "zweiundzwanzigster",
      23: "dreiundzwanzigster",
      24: "vierundzwanzigster",
      25: "fünfundzwanzigster",
      26: "sechsundzwanzigster",
      27: "siebenundzwanzigster",
      28: "achtundzwanzigster",
      29: "neunundzwanzigster",
      30: "dreißigster",
      31: "einunddreißigster",
    };

    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const ordinal = ordinals[day] || convertNumberToGerman(day) + "ter";
    const yearWords = convertNumberToGerman(year);

    return `Heute ist ${dayOfWeek}, der ${ordinal} ${month} ${yearWords}`;
  };

  return (
    <Widget title="Datum" englishTitle={showTranslations ? "Date" : undefined}>
      <div className="flex flex-col justify-between h-full space-y-8">
        <div className="text-center space-y-4">
          <p className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
            {formatGermanDate(currentTime)}
          </p>
        </div>

        {showTranslations && (
          <div className="text-center space-y-4">
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {formatEnglishDate(currentTime)}
            </p>
          </div>
        )}

        <div className="text-center space-y-4">
          <p className="text-xl text-accent-600 dark:text-accent-400 font-medium italic">
            {convertDateToGermanPhonetic(currentTime)}
          </p>
        </div>
      </div>
    </Widget>
  );
};

export default DateWidget;
