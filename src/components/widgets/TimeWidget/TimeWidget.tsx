import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";
import AudioButton from "../../ui/AudioButton/AudioButton";
import { useRef } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

interface TimeWidgetProps {
  currentTime: Date;
  language: Language;
  setCurrentTime: (date: Date) => void;
}

// Time part interface for colored display
interface TimePart {
  text: string;
  type: "prefix" | "hour" | "uhr" | "minute" | "space";
}

const TimeWidget: React.FC<TimeWidgetProps> = ({
  currentTime,
  language,
  setCurrentTime,
}) => {
  const t = useTranslation(language);
  const timeInputRef = useRef<HTMLInputElement>(null);

  const formatForInput = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Format time for display (12-hour format with AM/PM)
  const formatDisplayTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":").map(Number);
    const newTime = new Date(currentTime);
    newTime.setHours(hours);
    newTime.setMinutes(minutes);
    setCurrentTime(newTime);
  };

  // Handle clicking on the formatted time to open time picker
  const handleTimeClick = () => {
    if (timeInputRef.current) {
      // Try to use showPicker first (modern browsers)
      if (timeInputRef.current.showPicker) {
        try {
          timeInputRef.current.showPicker();
        } catch (error) {
          // Fallback to focus + click for older browsers
          timeInputRef.current.focus();
          timeInputRef.current.click();
        }
      } else {
        // Fallback for browsers without showPicker support
        timeInputRef.current.focus();
        timeInputRef.current.click();
      }
    }
  };

  // Convert time to German phonetic pronunciation with color parts
  const convertTimeToGermanStructured = (date: Date): TimePart[] => {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert to 12-hour format
    if (hours === 0) hours = 12;
    else if (hours > 12) hours = hours - 12;

    // German number mappings
    const germanNumbers: { [key: number]: string } = {
      0: "null",
      1: "eins",
      2: "zwei",
      3: "drei",
      4: "vier",
      5: "fünf",
      6: "sechs",
      7: "sieben",
      8: "acht",
      9: "neun",
      10: "zehn",
      11: "elf",
      12: "zwölf",
      13: "dreizehn",
      14: "vierzehn",
      15: "fünfzehn",
      16: "sechzehn",
      17: "siebzehn",
      18: "achtzehn",
      19: "neunzehn",
      20: "zwanzig",
      21: "einundzwanzig",
      22: "zweiundzwanzig",
      23: "dreiundzwanzig",
    };

    const germanMinutes: { [key: number]: string } = {
      0: "",
      1: "eins",
      2: "zwei",
      3: "drei",
      4: "vier",
      5: "fünf",
      6: "sechs",
      7: "sieben",
      8: "acht",
      9: "neun",
      10: "zehn",
      11: "elf",
      12: "zwölf",
      13: "dreizehn",
      14: "vierzehn",
      15: "fünfzehn",
      16: "sechzehn",
      17: "siebzehn",
      18: "achtzehn",
      19: "neunzehn",
      20: "zwanzig",
      21: "einundzwanzig",
      22: "zweiundzwanzig",
      23: "dreiundzwanzig",
      24: "vierundzwanzig",
      25: "fünfundzwanzig",
      26: "sechsundzwanzig",
      27: "siebenundzwanzig",
      28: "achtundzwanzig",
      29: "neunundzwanzig",
      30: "dreißig",
      31: "einunddreißig",
      32: "zweiunddreißig",
      33: "dreiunddreißig",
      34: "vierunddreißig",
      35: "fünfunddreißig",
      36: "sechsunddreißig",
      37: "siebenunddreißig",
      38: "achtunddreißig",
      39: "neununddreißig",
      40: "vierzig",
      41: "einundvierzig",
      42: "zweiundvierzig",
      43: "dreiundvierzig",
      44: "vierundvierzig",
      45: "fünfundvierzig",
      46: "sechsundvierzig",
      47: "siebenundvierzig",
      48: "achtundvierzig",
      49: "neunundvierzig",
      50: "fünfzig",
      51: "einundfünfzig",
      52: "zweiundfünfzig",
      53: "dreiundfünfzig",
      54: "vierundfünfzig",
      55: "fünfundfünfzig",
      56: "sechsundfünfzig",
      57: "siebenundfünfzig",
      58: "achtundfünfzig",
      59: "neunundfünfzig",
    };

    const hourWord = germanNumbers[hours];
    const minuteWord = germanMinutes[minutes];

    const parts: TimePart[] = [
      { text: "Es ist", type: "prefix" },
      { text: " ", type: "space" },
      { text: hourWord, type: "hour" },
      { text: " ", type: "space" },
      { text: "Uhr", type: "uhr" },
    ];

    if (minutes !== 0) {
      parts.push({ text: " ", type: "space" });
      parts.push({ text: minuteWord, type: "minute" });
    }

    return parts;
  };

  // Convert TimeParts to simple text for speech
  const convertTimePartsToText = (parts: TimePart[]): string => {
    return parts.map((part) => part.text).join("");
  };

  // Speech synthesis function
  const speakText = (parts: TimePart[]) => {
    if ("speechSynthesis" in window) {
      const text = convertTimePartsToText(parts);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  // Color mapping for different time parts
  const getColorClass = (type: TimePart["type"]) => {
    switch (type) {
      case "prefix":
        return "text-neutral-600 dark:text-neutral-400";
      case "hour":
        return "text-blue-600 dark:text-blue-400";
      case "uhr":
        return "text-green-600 dark:text-green-400";
      case "minute":
        return "text-purple-600 dark:text-purple-400";
      case "space":
        return "text-neutral-700 dark:text-neutral-300";
      default:
        return "text-neutral-700 dark:text-neutral-300";
    }
  };

  return (
    <Widget titleKey="zeitEinstellen" language={language}>
      <div className="space-y-6">
        {/* Custom Time Picker Section */}
        <div className="relative">
          {/* Label for time input */}
          <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
            {language === "de"
              ? t.time.klickenZumAendern
              : t.time.clickToChange}
          </label>

          {/* Formatted Time Display (Clickable) */}
          <div
            onClick={handleTimeClick}
            className="w-full px-4 py-3 text-lg border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors duration-200 group"
          >
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-clock tracking-wider font-crisp">
                {formatDisplayTime(currentTime)}
              </p>
              <ClockIcon className="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200" />
            </div>
          </div>

          {/* Hidden Time Input */}
          <input
            ref={timeInputRef}
            type="time"
            value={formatForInput(currentTime)}
            onChange={handleTimeChange}
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
                  {convertTimeToGermanStructured(currentTime).map(
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
                  speakText(convertTimeToGermanStructured(currentTime))
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Präfix" : "Prefix"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Stunde" : "Hour"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  Uhr
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "de" ? "Minute" : "Minute"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default TimeWidget;
