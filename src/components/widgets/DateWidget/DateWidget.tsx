import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Box from "../../ui/Box/Box";
import AudioButton from "../../ui/AudioButton/AudioButton";
import { convertNumberToGerman } from "../../../utils/numberConverter";
import { useState, useEffect, useRef } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

interface DateWidgetProps {
  currentTime: Date;
  language: Language;
  setCurrentTime: (date: Date) => void;
}

// Date part interface for colored display
interface DatePart {
  text: string;
  type: "prefix" | "day" | "ordinal" | "month" | "year" | "space" | "comma";
}

const DateWidget: React.FC<DateWidgetProps> = ({
  currentTime,
  language,
  setCurrentTime,
}) => {
  const t = useTranslation(language);

  // State for the date input
  const [dateInputValue, setDateInputValue] = useState(
    currentTime.toISOString().split("T")[0]
  );
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Color mapping for different date parts
  const getColorClass = (type: DatePart["type"]) => {
    switch (type) {
      case "prefix":
        return "text-neutral-600 dark:text-neutral-400";
      case "day":
        return "text-blue-600 dark:text-blue-400";
      case "ordinal":
        return "text-green-600 dark:text-green-400";
      case "month":
        return "text-purple-600 dark:text-purple-400";
      case "year":
        return "text-orange-600 dark:text-orange-400";
      case "comma":
      case "space":
        return "text-neutral-700 dark:text-neutral-300";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  // Sync date input value with currentTime changes
  useEffect(() => {
    setDateInputValue(currentTime.toISOString().split("T")[0]);
  }, [currentTime]);

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

  const convertDateToGermanStructured = (date: Date): DatePart[] => {
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

    const parts: DatePart[] = [
      { text: "Heute ist", type: "prefix" },
      { text: " ", type: "space" },
      { text: dayOfWeek, type: "day" },
      { text: ",", type: "comma" },
      { text: " ", type: "space" },
      { text: ordinal, type: "ordinal" },
      { text: " ", type: "space" },
      { text: month, type: "month" },
      { text: " ", type: "space" },
      { text: yearWords, type: "year" },
    ];

    return parts;
  };

  // Convert DateParts to simple text for speech
  const convertDatePartsToText = (parts: DatePart[]): string => {
    return parts.map((part) => part.text).join("");
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

  const formatSpanishDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("es-ES", options);
  };

  const formatRussianDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  };

  // Handle date change from date input
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      // Preserve the current time while changing the date
      newDate.setHours(currentTime.getHours());
      newDate.setMinutes(currentTime.getMinutes());
      newDate.setSeconds(currentTime.getSeconds());
      newDate.setMilliseconds(currentTime.getMilliseconds());

      setCurrentTime(newDate);
      setDateInputValue(selectedDate);
    }
  };

  // Handle clicking on the formatted date to open date picker
  const handleDateClick = () => {
    if (dateInputRef.current) {
      // Try to use showPicker first (modern browsers)
      if (dateInputRef.current.showPicker) {
        try {
          dateInputRef.current.showPicker();
        } catch (error) {
          // Fallback to focus + click for older browsers
          dateInputRef.current.focus();
          dateInputRef.current.click();
        }
      } else {
        // Fallback for browsers without showPicker support
        dateInputRef.current.focus();
        dateInputRef.current.click();
      }
    }
  };

  // Speech synthesis function
  const speakText = (parts: DatePart[]) => {
    if ("speechSynthesis" in window) {
      const text = convertDatePartsToText(parts);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Box
      titleKey="datum"
      language={language}
      headerColor="primary"
      description={
        language === "de"
          ? "Datum und Datumsangaben auf Deutsch"
          : "Dates and date expressions in German"
      }
    >
      <div className="space-y-6">
        {/* Custom Date Picker Section */}
        <div className="relative">
          {/* Label for date input */}
          <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
            {language === "de" ? t.time.datumAendern : t.time.clickToChangeDate}
          </label>

          {/* Formatted Date Display (Clickable) */}
          <div
            onClick={handleDateClick}
            className="w-full px-4 py-3 text-lg border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors duration-200 group"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-2xl font-space-grotesk">
                {formatDisplayDate(currentTime)}
              </p>
              <CalendarDaysIcon className="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200" />
            </div>
            {language === "en" && (
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
                {formatEnglishDate(currentTime)}
              </p>
            )}
            {language === "es" && (
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
                {formatSpanishDate(currentTime)}
              </p>
            )}
            {language === "ru" && (
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
                {formatRussianDate(currentTime)}
              </p>
            )}
          </div>

          {/* Hidden Date Input */}
          <input
            ref={dateInputRef}
            type="date"
            value={dateInputValue}
            onChange={handleDateChange}
            className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
            style={{
              colorScheme: "light dark",
              zIndex: -1,
            }}
          />
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed break-words hyphens-auto">
                  {convertDateToGermanStructured(currentTime).map(
                    (part, index) => (
                      <span
                        key={index}
                        className={`${getColorClass(
                          part.type
                        )} transition-colors duration-200`}
                      >
                        {part.text}
                      </span>
                    )
                  )}
                </p>
              </div>

              <AudioButton
                onClick={() =>
                  speakText(convertDateToGermanStructured(currentTime))
                }
                title={t.ui.listen}
                size="lg"
              />
            </div>
          </div>

          {/* Color Legend */}
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
            <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
              {t.ui.colorLegend}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Präfix" : "Prefix"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Wochentag" : "Weekday"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Ordinalzahl" : "Ordinal"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Monat" : "Month"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Jahr" : "Year"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default DateWidget;
