import { Language } from "../hooks/useTranslations";

export interface Translations {
  // Widget titles
  widgets: {
    zahlenkonverter: string;
    einstellungen: string;
    datum: string;
    zeit: string;
    wetter: string;
    praesensVerb: string;
    artikel: string;
    personalpronomen: string;
    fragen: string;
    verbenPraepositionen: string;
    verbzeiten: string;
    adjektivdeklination: string;
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
    time: string;
    numberConverter: string;
    presentVerb: string;
    articles: string;
    personalPronouns: string;
    questions: string;
    verbsPrepositions: string;
    verbTenses: string;
    adjectiveDeclension: string;
  };

  // Weather related
  weather: {
    wetterdatenFehler: string;
    weatherDataError: string;
    stadtAuswaehlen: string;
    selectCity: string;
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
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    widgets: {
      zahlenkonverter: "Zahlenkonverter",
      einstellungen: "Einstellungen",
      datum: "Datum",
      zeit: "Zeit",
      wetter: "Wetter",
      praesensVerb: "Präsens-Verb",
      artikel: "Artikel",
      personalpronomen: "Personalpronomen",
      fragen: "Fragen",
      verbenPraepositionen: "Verben & Präpositionen",
      verbzeiten: "Verbzeiten",
      adjektivdeklination: "Adjektivdeklination",
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
      time: "Zeit",
      numberConverter: "Zahlenkonverter",
      presentVerb: "Präsens-Verb",
      articles: "Artikel",
      personalPronouns: "Personalpronomen",
      questions: "Fragen",
      verbsPrepositions: "Verben & Präpositionen",
      verbTenses: "Verbzeiten",
      adjectiveDeclension: "Adjektivdeklination",
    },
    weather: {
      wetterdatenFehler: "Wetterdaten konnten nicht geladen werden",
      weatherDataError: "Weather data could not be loaded",
      stadtAuswaehlen: "Stadt auswählen",
      selectCity: "Select city",
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
    },
  },
  en: {
    widgets: {
      zahlenkonverter: "Number Converter",
      einstellungen: "Settings",
      datum: "Date",
      zeit: "Time",
      wetter: "Weather",
      praesensVerb: "Present Verb",
      artikel: "Articles",
      personalpronomen: "Personal Pronouns",
      fragen: "Questions",
      verbenPraepositionen: "Verbs & Prepositions",
      verbzeiten: "Verb Tenses",
      adjektivdeklination: "Adjective Declension",
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
      time: "Time",
      numberConverter: "Number Converter",
      presentVerb: "Present Verb",
      articles: "Articles",
      personalPronouns: "Personal Pronouns",
      questions: "Questions",
      verbsPrepositions: "Verbs & Prepositions",
      verbTenses: "Verb Tenses",
      adjectiveDeclension: "Adjective Declension",
    },
    weather: {
      wetterdatenFehler: "Weather data could not be loaded",
      weatherDataError: "Weather data could not be loaded",
      stadtAuswaehlen: "Select city",
      selectCity: "Select city",
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
    },
  },
};

export const useTranslation = (language: Language) => {
  return translations[language];
};
