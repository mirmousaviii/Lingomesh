import Widget from "../../ui/Widget/Widget";

interface TimeWidgetProps {
  currentTime: Date;
  is24Hour: boolean;
  setIs24Hour: (is24: boolean) => void;
  showTranslations: boolean;
}

const TimeWidget: React.FC<TimeWidgetProps> = ({
  currentTime,
  is24Hour,
  setIs24Hour,
  showTranslations,
}) => {
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
    };

    const hourWord = germanNumbers[hours] || hours.toString();
    const minuteWord =
      minutes > 0 ? germanMinutes[minutes] || minutes.toString() : "";

    // Construct German time phrase
    if (minutes === 0) {
      return `Es ist ${hourWord} Uhr`;
    } else if (minutes <= 30) {
      return `Es ist ${minuteWord} nach ${hourWord}`;
    } else {
      const nextHour = hours === 23 ? 0 : hours + 1;
      const nextHourWord = germanNumbers[nextHour] || nextHour.toString();
      const remainingMinutes = 60 - minutes;
      const remainingWord =
        germanMinutes[remainingMinutes] || remainingMinutes.toString();
      return `Es ist ${remainingWord} vor ${nextHourWord}`;
    }
  };

  return (
    <Widget
      title="Uhrzeit"
      englishTitle={showTranslations ? "Time" : undefined}
    >
      <div className="flex flex-col justify-between h-full space-y-8">
        <div className="text-center space-y-4">
          <p className="text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-mono tracking-tight">
            {formatDisplayTime(currentTime)}
          </p>
        </div>

        <div className="text-center space-y-4">
          <p className="text-2xl text-german italic">
            {convertTimeToGermanPhonetic(currentTime)}
          </p>
        </div>

        <div className="flex items-center justify-center pt-6">
          <div className="flex bg-neutral-200 dark:bg-neutral-700 rounded-sm p-1">
            <button
              onClick={() => setIs24Hour(false)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                !is24Hour
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100 shadow-soft"
                  : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              12h
            </button>
            <button
              onClick={() => setIs24Hour(true)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200 ${
                is24Hour
                  ? "bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100 shadow-soft"
                  : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              24h
            </button>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default TimeWidget;
