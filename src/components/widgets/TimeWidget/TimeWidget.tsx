import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import Widget from "../../ui/Widget/Widget";
import AudioButton from "../../ui/AudioButton/AudioButton";

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
      <div className="space-y-6">
        {/* Display Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {t.ui.time}
          </label>
          <div className="w-full px-4 py-3 text-lg border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
            <p className="text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-clock tracking-wider font-crisp text-center">
              {formatDisplayTime(currentTime)}
            </p>
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-xl p-6 border border-primary-100 dark:border-primary-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed break-words hyphens-auto text-accent-600 dark:text-accent-400 font-medium italic font-ibm-plex">
                  {convertTimeToGermanPhonetic(currentTime)}
                </p>
              </div>

              <AudioButton
                onClick={() =>
                  speakText(convertTimeToGermanPhonetic(currentTime))
                }
                title={t.ui.listen}
                size="lg"
              />
            </div>
          </div>
        </div>

        {/* Format Toggle */}
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
