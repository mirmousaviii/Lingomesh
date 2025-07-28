import { Language } from "../hooks/useTranslations";

export interface Translations {
  // Widget titles
  widgets: {
    zahlenkonverter: string;
    einstellungen: string;
    datum: string;
    datumAufDeutsch: string;
    zeit: string;
    zeitEinstellen: string;
    wetter: string;
    wetterAufDeutsch: string;
    praesensVerb: string;
    artikel: string;
    personalpronomen: string;
    fragen: string;
    verbenPraepositionen: string;
    verbzeiten: string;
    adjektivdeklination: string;
    quiz: string;
    quizNumbers: string;
    quizDate: string;
    quizTime: string;
    quizWeather: string;
    quizVerbs: string;
    quizArticles: string;
    quizPronouns: string;
    quizQuestions: string;
    quizPrepositions: string;
    quizDeclension: string;
  };

  // Common UI elements
  ui: {
    listen: string;
    hoeren: string;
    beispiele: string;
    formel: string;
    beispiel: string;
    schnelleTipps: string;
    quickTips: string;
    perfektTipps: string;
    perfektTips: string;
    praesensVerwendung: string;
    praesensUsage: string;
    verwendeHaben: string;
    useHaben: string;
    verwendeSein: string;
    useSein: string;
    meisteVerben: string;
    mostVerbs: string;
    bewegungsverben: string;
    movementVerbs: string;
    zustaendsaenderungen: string;
    stateChanges: string;
    gegenwaertigeHandlungen: string;
    presentActions: string;
    gewohnheiten: string;
    habits: string;
    allgemeineWahrheiten: string;
    generalTruths: string;
    wFragen: string;
    jaNeinFragen: string;
    formalVsInformal: string;
    wFragenBeschreibung: string;
    wQuestionsDescription: string;
    jaNeinBeschreibung: string;
    yesNoDescription: string;
    formalBeschreibung: string;
    formalDescription: string;
    uebersetzungen: string;
    translations: string;
    englishTranslationsVisible: string;
    englishTranslationsShow: string;
    light: string;
    dark: string;
    german: string;
    english: string;
    enterNumber: string;
    enterVerb: string;
    formula: string;
    examples: string;
    settings: string;
    date: string;
    dateToGerman: string;
    time: string;
    setTime: string;
    weatherToGerman: string;
    numberConverter: string;
    presentVerb: string;
    articles: string;
    personalPronouns: string;
    questions: string;
    verbsPrepositions: string;
    verbTenses: string;
    adjectiveDeclension: string;
    colorLegend: string;
    units: string;
    tens: string;
    hundreds: string;
    thousands: string;
    millions: string;
    connectors: string;
    numberRangeError: string;
  };

  // Weather related
  weather: {
    wetterdatenFehler: string;
    weatherDataError: string;
    stadtAuswaehlen: string;
    stadtWaehlen: string;
    selectCity: string;
    selectCityLabel: string;
    temperatur: string;
    temperature: string;
    luftfeuchtigkeit: string;
    humidity: string;
    windgeschwindigkeit: string;
    windSpeed: string;
    beschreibung: string;
    description: string;
  };

  // Time related
  time: {
    heuteIst: string;
    todayIs: string;
    der: string;
    the: string;
    format24h: string;
    format12h: string;
    klickenZumAendern: string;
    clickToChange: string;
    datumAendern: string;
    clickToChangeDate: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    widgets: {
      zahlenkonverter: "Zahlenkonverter",
      einstellungen: "Einstellungen",
      datum: "Datum",
      datumAufDeutsch: "Datum auf Deutsch",
      zeit: "Zeit",
      zeitEinstellen: "Zeit auf Deutsch",
      wetter: "Wetter",
      wetterAufDeutsch: "Wetter auf Deutsch",
      praesensVerb: "Verbkonjugation",
      artikel: "Deutsche Artikel",
      personalpronomen: "Deutsche Personalpronomen",
      fragen: "Deutsche Fragen",
      verbenPraepositionen: "Deutsche Verben & Präpositionen",
      verbzeiten: "Verbzeiten",
      adjektivdeklination: "Deutsche Adjektivdeklination",
      quiz: "Quiz",
      quizNumbers: "Zahlen Quiz",
      quizDate: "Datum Quiz",
      quizTime: "Zeit Quiz",
      quizWeather: "Wetter Quiz",
      quizVerbs: "Verb Quiz",
      quizArticles: "Artikel Quiz",
      quizPronouns: "Personalpronomen Quiz",
      quizQuestions: "Fragen Quiz",
      quizPrepositions: "Präpositionen Quiz",
      quizDeclension: "Deklination Quiz",
    },
    ui: {
      listen: "Hören",
      hoeren: "Hören",
      beispiele: "Beispiele",
      formel: "Formel",
      beispiel: "Beispiel",
      schnelleTipps: "Schnelle Tipps",
      quickTips: "Quick Tips",
      perfektTipps: "Perfekt Tipps",
      perfektTips: "Perfekt Tips",
      praesensVerwendung: "Präsens Verwendung",
      praesensUsage: "Präsens Usage",
      verwendeHaben: "Verwende 'haben':",
      useHaben: "Use 'haben':",
      verwendeSein: "Verwende 'sein':",
      useSein: "Use 'sein':",
      meisteVerben: "Die meisten Verben (lernen, lesen, schlafen)",
      mostVerbs: "Most verbs (learn, read, sleep)",
      bewegungsverben:
        "Bewegungsverben (gehen, fahren, fliegen) und Zustandsänderungen (werden, sterben)",
      movementVerbs:
        "Movement verbs (go, drive, fly) and state changes (become, die)",
      zustaendsaenderungen: "Zustandsänderungen (werden, sterben)",
      stateChanges: "State changes (become, die)",
      gegenwaertigeHandlungen:
        "Verwendet für gegenwärtige Handlungen, Gewohnheiten und allgemeine Wahrheiten.",
      presentActions: "Used for present actions, habits, and general truths.",
      gewohnheiten: "Gewohnheiten",
      habits: "Habits",
      allgemeineWahrheiten: "Allgemeine Wahrheiten",
      generalTruths: "General truths",
      wFragen: "W-Fragen:",
      jaNeinFragen: "Ja/Nein Fragen:",
      formalVsInformal: "Formal vs Informal:",
      wFragenBeschreibung:
        "Beginnen mit W-Wörtern (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      wQuestionsDescription:
        "Start with W-words (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      jaNeinBeschreibung: "Verb kommt zuerst, Subjekt zweitens",
      yesNoDescription: "Verb comes first, subject second",
      formalBeschreibung: "Verwende 'Sie' für formell, 'du' für informell",
      formalDescription: "Use 'Sie' for formal, 'du' for informal",
      uebersetzungen: "Übersetzungen",
      translations: "Translations",
      englishTranslationsVisible: "English translations are visible",
      englishTranslationsShow: "Englische Übersetzungen anzeigen",
      light: "Light",
      dark: "Dark",
      german: "German",
      english: "English",
      enterNumber: "Zahl eingeben",
      enterVerb: "Verb eingeben",
      formula: "Formel:",
      examples: "Beispiele:",
      settings: "Einstellungen",
      date: "Datum",
      dateToGerman: "Datum auf Deutsch",
      time: "Zeit",
      setTime: "Zeit auf Deutsch",
      weatherToGerman: "Wetter auf Deutsch",
      numberConverter: "Zahlenkonverter",
      presentVerb: "Verbkonjugation",
      articles: "Deutsche Artikel",
      personalPronouns: "Deutsche Personalpronomen",
      questions: "Deutsche Fragen",
      verbsPrepositions: "Deutsche Verben & Präpositionen",
      verbTenses: "Verbzeiten",
      adjectiveDeclension: "Deutsche Adjektivdeklination",
      colorLegend: "Farbkodierung:",
      units: "Einer",
      tens: "Zehner",
      hundreds: "Hunderter",
      thousands: "Tausender",
      millions: "Millionen",
      connectors: "Und",
      numberRangeError:
        "Bitte geben Sie eine Zahl zwischen 0 und 999.999.999 ein",
    },
    weather: {
      wetterdatenFehler: "Wetterdaten konnten nicht geladen werden",
      weatherDataError: "Weather data could not be loaded",
      stadtAuswaehlen: "Stadt auswählen",
      stadtWaehlen: "Stadt wählen (Wetter abrufen)",
      selectCity: "Select city",
      selectCityLabel: "Select city (get weather)",
      temperatur: "Temperatur",
      temperature: "Temperature",
      luftfeuchtigkeit: "Luftfeuchtigkeit",
      humidity: "Humidity",
      windgeschwindigkeit: "Windgeschwindigkeit",
      windSpeed: "Wind Speed",
      beschreibung: "Beschreibung",
      description: "Description",
    },
    time: {
      heuteIst: "Heute ist",
      todayIs: "Today is",
      der: "der",
      the: "the",
      format24h: "24h Format",
      format12h: "12h Format",
      klickenZumAendern: "Zeit anpassen (klicken)",
      clickToChange: "Click to change time",
      datumAendern: "Datum anpassen (klicken)",
      clickToChangeDate: "Click to change date",
    },
  },
  en: {
    widgets: {
      zahlenkonverter: "Number Converter",
      einstellungen: "Settings",
      datum: "Date",
      datumAufDeutsch: "Date to German",
      zeit: "Time",
      zeitEinstellen: "Time to German",
      wetter: "Weather",
      wetterAufDeutsch: "Weather to German",
      praesensVerb: "Verb Conjugation",
      artikel: "Articles",
      personalpronomen: "German Personal Pronouns",
      fragen: "German Questions",
      verbenPraepositionen: "German Verbs & Prepositions",
      verbzeiten: "Verb Tenses",
      adjektivdeklination: "German Adjective Declension",
      quiz: "Quiz",
      quizNumbers: "Number Quiz",
      quizDate: "Date Quiz",
      quizTime: "Time Quiz",
      quizWeather: "Weather Quiz",
      quizVerbs: "Verb Quiz",
      quizArticles: "Article Quiz",
      quizPronouns: "Personal Pronoun Quiz",
      quizQuestions: "Question Quiz",
      quizPrepositions: "Preposition Quiz",
      quizDeclension: "Declension Quiz",
    },
    ui: {
      listen: "Listen",
      hoeren: "Listen",
      beispiele: "Examples",
      formel: "Formula",
      beispiel: "Example",
      schnelleTipps: "Quick Tips",
      quickTips: "Quick Tips",
      perfektTipps: "Perfekt Tips",
      perfektTips: "Perfekt Tips",
      praesensVerwendung: "Präsens Usage",
      praesensUsage: "Präsens Usage",
      verwendeHaben: "Use 'haben':",
      useHaben: "Use 'haben':",
      verwendeSein: "Use 'sein':",
      useSein: "Use 'sein':",
      meisteVerben: "Most verbs (learn, read, sleep)",
      mostVerbs: "Most verbs (learn, read, sleep)",
      bewegungsverben:
        "Movement verbs (go, drive, fly) and state changes (become, die)",
      movementVerbs:
        "Movement verbs (go, drive, fly) and state changes (become, die)",
      zustaendsaenderungen: "State changes (become, die)",
      stateChanges: "State changes (become, die)",
      gegenwaertigeHandlungen:
        "Used for present actions, habits, and general truths.",
      presentActions: "Used for present actions, habits, and general truths.",
      gewohnheiten: "Habits",
      habits: "Habits",
      allgemeineWahrheiten: "General truths",
      generalTruths: "General truths",
      wFragen: "W-Questions:",
      jaNeinFragen: "Yes/No Questions:",
      formalVsInformal: "Formal vs Informal:",
      wFragenBeschreibung:
        "Start with W-words (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      wQuestionsDescription:
        "Start with W-words (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      jaNeinBeschreibung: "Verb comes first, subject second",
      yesNoDescription: "Verb comes first, subject second",
      formalBeschreibung: "Use 'Sie' for formal, 'du' for informal",
      formalDescription: "Use 'Sie' for formal, 'du' for informal",
      uebersetzungen: "Translations",
      translations: "Translations",
      englishTranslationsVisible: "English translations are visible",
      englishTranslationsShow: "Show English translations",
      light: "Light",
      dark: "Dark",
      german: "German",
      english: "English",
      enterNumber: "Enter a number",
      enterVerb: "Enter a verb",
      formula: "Formula:",
      examples: "Examples:",
      settings: "Settings",
      date: "Date",
      dateToGerman: "Date to German",
      time: "Time",
      setTime: "Time to German",
      weatherToGerman: "Weather to German",
      numberConverter: "Number Converter",
      presentVerb: "Verb Conjugation",
      articles: "German Articles",
      personalPronouns: "German Personal Pronouns",
      questions: "German Questions",
      verbsPrepositions: "German Verbs & Prepositions",
      verbTenses: "Verb Tenses",
      adjectiveDeclension: "German Adjective Declension",
      colorLegend: "Color Coding:",
      units: "Units",
      tens: "Tens",
      hundreds: "Hundreds",
      thousands: "Thousands",
      millions: "Millions",
      connectors: "Connectors",
      numberRangeError: "Please enter a number between 0 and 999,999,999",
    },
    weather: {
      wetterdatenFehler: "Weather data could not be loaded",
      weatherDataError: "Weather data could not be loaded",
      stadtAuswaehlen: "Select city",
      stadtWaehlen: "Select city (get weather)",
      selectCity: "Select city",
      selectCityLabel: "Select city (get weather)",
      temperatur: "Temperature",
      temperature: "Temperature",
      luftfeuchtigkeit: "Humidity",
      humidity: "Humidity",
      windgeschwindigkeit: "Wind Speed",
      windSpeed: "Wind Speed",
      beschreibung: "Description",
      description: "Description",
    },
    time: {
      heuteIst: "Today is",
      todayIs: "Today is",
      der: "the",
      the: "the",
      format24h: "24h Format",
      format12h: "12h Format",
      klickenZumAendern: "Adjust time (click)",
      clickToChange: "Click to change time",
      datumAendern: "Adjust date (click)",
      clickToChangeDate: "Click to change date",
    },
  },
};

export const useTranslation = (language: Language) => {
  return translations[language];
};
