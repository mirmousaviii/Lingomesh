import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";

interface TimeWidgetProps {
  currentTime: Date;
  is24Hour: boolean;
  setIs24Hour: (is24: boolean) => void;
  language: Language;
}

const TimeWidget: React.FC<TimeWidgetProps> = ({
  currentTime,
  is24Hour,
  setIs24Hour,
  language,
}) => {
  const t = useTranslation(language);

  // Format time for display
  const formatDisplayTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !is24Hour,
    });
  };

  // Convert time to German phonetic pronunciation
  const convertTimeToGermanPhonetic = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert to 12-hour format if needed
    if (!is24Hour) {
      if (hours === 0) hours = 12;
      else if (hours > 12) hours = hours - 12;
    }

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

    if (minutes === 0) {
      return `Es ist ${hourWord} Uhr`;
    } else {
      return `Es ist ${hourWord} Uhr ${minuteWord}`;
    }
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
    <Widget titleKey="zeit" language={language}>
      <div className="flex flex-col justify-between h-full space-y-8">
        <div className="text-center space-y-4">
          <p className="text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-clock tracking-wider font-crisp">
            {formatDisplayTime(currentTime)}
          </p>
        </div>

        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <p className="text-xl text-accent-600 dark:text-accent-400 font-medium italic font-ibm-plex">
              {convertTimeToGermanPhonetic(currentTime)}
            </p>
            <button
              onClick={() =>
                speakText(convertTimeToGermanPhonetic(currentTime))
              }
              className="flex-shrink-0 p-2 rounded-md bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-200"
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

        <div className="flex justify-center">
          <div className="flex items-center space-x-4 bg-neutral-100 dark:bg-neutral-700 rounded-lg p-2">
            <button
              onClick={() => setIs24Hour(false)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                !is24Hour
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100 shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              {t.time.format12h}
            </button>
            <button
              onClick={() => setIs24Hour(true)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                is24Hour
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100 shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
            >
              {t.time.format24h}
            </button>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default TimeWidget;
