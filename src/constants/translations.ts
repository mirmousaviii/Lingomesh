import { Language } from "../hooks/useTranslations";

export interface Translations {
  // App branding
  app: {
    name: string;
    tagline: string;
    taglineDe: string;
    taglineEn: string;
    footer: string;
    developer: string;
    subtitle: string;
  };

  // Navigation menu
  navigation: {
    home: string;
    vocabulary: string;
    number: string;
    alphabet: string;
    time: string;
    date: string;
    weather: string;
    country: string;
    countries: string;
    grammar: string;
    verb: string;
    verbs: string;
    verbConjugator: string;
    modalVerb: string;
    modalVerbs: string;
    passiveVoice: string;
    reflexiveVerb: string;
    reflexiveVerbs: string;
    tense: string;
    tenses: string;
    presentTense: string;
    perfectTense: string;
    pastTense: string;
    pastPerfect: string;
    futureTense: string;
    futurePerfect: string;
    irregularVerb: string;
    irregularVerbs: string;
    tenseOverview: string;
    tensesOverview: string;
    pronoun: string;
    pronouns: string;
    personalPronoun: string;
    personalPronouns: string;
    possessive: string;
    possessives: string;
    reflexivePronoun: string;
    reflexivePronouns: string;
    relativePronoun: string;
    relativePronouns: string;
    interrogativePronoun: string;
    interrogativePronouns: string;
    demonstrativePronoun: string;
    demonstrativePronouns: string;
    indefinitePronoun: string;
    indefinitePronouns: string;
    adjective: string;
    adjectives: string;
    declension: string;
    adverb: string;
    adverbs: string;
    preposition: string;
    prepositions: string;
    article: string;
    articles: string;
    question: string;
    questions: string;
    usefulPhrase: string;
    usefulPhrases: string;
    general: string;
    classroom: string;
    restaurant: string;
    bank: string;
    friend: string;
  };

  // Home
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroSubtitleDe: string;
    heroSubtitleEn: string;
    startLearning: string;
    learnNumber: string;
    learnNumbersDe: string;
    learnNumbersEn: string;
    learnTime: string;
    learnTimeDe: string;
    learnTimeEn: string;
    learnDate: string;
    learnDateDe: string;
    learnDateEn: string;
    learnWeather: string;
    learnWeatherDe: string;
    learnWeatherEn: string;
    learnArticles: string;
    learnArticlesDe: string;
    learnArticlesEn: string;
    learnPronouns: string;
    learnPronounsDe: string;
    learnPronounsEn: string;
    learnVerbs: string;
    learnVerbsDe: string;
    learnVerbsEn: string;
    learnPrepositions: string;
    learnPrepositionsDe: string;
    learnPrepositionsEn: string;
    learnDeclension: string;
    learnDeclensionDe: string;
    learnDeclensionEn: string;
    learnQuestions: string;
    learnQuestionsDe: string;
    learnQuestionsEn: string;
    numbersDescription: string;
    numbersDescriptionDe: string;
    numbersDescriptionEn: string;
    timeDescription: string;
    timeDescriptionDe: string;
    timeDescriptionEn: string;
    dateDescription: string;
    dateDescriptionDe: string;
    dateDescriptionEn: string;
    weatherDescription: string;
    weatherDescriptionDe: string;
    weatherDescriptionEn: string;
    articlesDescription: string;
    articlesDescriptionDe: string;
    articlesDescriptionEn: string;
    pronounsDescription: string;
    pronounsDescriptionDe: string;
    pronounsDescriptionEn: string;
    verbsDescription: string;
    verbsDescriptionDe: string;
    verbsDescriptionEn: string;
    prepositionsDescription: string;
    prepositionsDescriptionDe: string;
    prepositionsDescriptionEn: string;
    declensionDescription: string;
    declensionDescriptionDe: string;
    declensionDescriptionEn: string;
    questionsDescription: string;
    questionsDescriptionDe: string;
    questionsDescriptionEn: string;
    simple: string;
    lingoMeshFeatures: string;
    interactive: string;
    interactiveDescription: string;
    interactiveDescriptionDe: string;
    interactiveDescriptionEn: string;
    multilingual: string;
    multilingualDescription: string;
    multilingualDescriptionDe: string;
    multilingualDescriptionEn: string;
    dynamic: string;
    dynamicDescription: string;
    dynamicDescriptionDe: string;
    dynamicDescriptionEn: string;
    platformSubtitle: string;
    platformSubtitleDe: string;
    platformSubtitleEn: string;
    platformSubtitleEs: string;
    platformSubtitleRu: string;
    withInteractiveExercises: string;
    withInteractiveExercisesDe: string;
    withInteractiveExercisesEn: string;
    bilingual: string;
  };

  // Quiz
  quiz: {
    noQuestionsAvailable: string;
    noQuestionsAvailableDe: string;
    reset: string;
    resetDe: string;
    nextQuestion: string;
    nextQuestionDe: string;
  };

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
    basicNumbers: string;
    ordinalNumbers: string;
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
    numberConverterDescription: string;
    quizDescription: string;
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
    spanish: string;
    russian: string;
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

  // Numbers related
  numbers: {
    basicNumbersTitle: string;
    basicNumbersSubtitle: string;
    numberRulesTitle: string;
    numberRulesSubtitle: string;
    ordinalNumbersTitle: string;
    ordinalNumbersSubtitle: string;
    numberRules: Array<{
      title: string;
      description: string;
      example: string;
    }>;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    app: {
      name: "LingoMesh",
      tagline:
        "Deutsch lernen mit Grammatik, Wortschatz, Satzstruktur und interaktiven Werkzeugen",
      taglineDe:
        "Deutsch lernen mit Grammatik, Wortschatz, Satzstruktur und interaktiven Werkzeugen",
      taglineEn:
        "Learn German with grammar, vocabulary, sentence structure and interactive tools",
      footer: "© {currentYear} LingoMesh.",
      developer: "mirmousavi.com",
      subtitle: "Deutscher Leitfaden",
    },
    navigation: {
      home: "Startseite",
      vocabulary: "Wortschatz",
      number: "Zahl",
      alphabet: "Alphabet",
      time: "Zeit",
      date: "Datum",
      weather: "Wetter",
      country: "Land & Nationalität",
      countries: "Länder & Nationalitäten",
      grammar: "Grammatik",
      verb: "Verb",
      verbs: "Verben",
      verbConjugator: "Verbkonjugator",
      modalVerb: "Modalverb",
      modalVerbs: "Modalverben",
      passiveVoice: "Passiv",
      reflexiveVerb: "Reflexives Verb",
      reflexiveVerbs: "Reflexivverben",
      tense: "Zeit",
      tenses: "Zeiten",
      presentTense: "Präsens",
      perfectTense: "Perfekt",
      pastTense: "Präteritum",
      pastPerfect: "Plusquamperfekt",
      futureTense: "Futur",
      futurePerfect: "Futur II",
      irregularVerb: "Unregelmäßiges Verb",
      irregularVerbs: "Unregelmäßige Verben",
      tenseOverview: "Übersicht der Zeiten",
      tensesOverview: "Übersicht der Zeiten",
      pronoun: "Pronomen",
      pronouns: "Pronomen",
      personalPronoun: "Personalpronomen",
      personalPronouns: "Personalpronomen",
      possessive: "Possessivpronomen",
      possessives: "Possessivpronomen",
      reflexivePronoun: "Reflexivpronomen",
      reflexivePronouns: "Reflexivpronomen",
      relativePronoun: "Relativpronomen",
      relativePronouns: "Relativpronomen",
      interrogativePronoun: "Interrogativpronomen",
      interrogativePronouns: "Interrogativpronomen",
      demonstrativePronoun: "Demonstrativpronomen",
      demonstrativePronouns: "Demonstrativpronomen",
      indefinitePronoun: "Indefinitpronomen",
      indefinitePronouns: "Indefinitpronomen",
      adjective: "Adjektiv",
      adjectives: "Adjektive",
      declension: "Deklination",
      adverb: "Adverb",
      adverbs: "Adverbien",
      preposition: "Präposition",
      prepositions: "Präpositionen",
      article: "Artikel",
      articles: "Artikel",
      question: "Frage",
      questions: "Fragen",
      usefulPhrase: "Nützlicher Satz",
      usefulPhrases: "Nützliche Sätze",
      general: "Allgemein",
      classroom: "Klassenzimmer",
      restaurant: "Restaurant",
      bank: "Bank",
      friend: "Freund",
    },
    home: {
      heroTitle: "Lasst uns Deutsch lernen!",
      heroSubtitle:
        "Entdecken Sie unsere interaktiven Lernmodule für die deutsche Sprache",
      heroSubtitleDe:
        "Entdecken Sie unsere interaktiven Lernmodule für die deutsche Sprache",
      heroSubtitleEn:
        "Discover our interactive learning modules for the German language",
      startLearning: "Jetzt lernen",
      learnNumber: "Zahl",
      learnNumbersDe: "Zahlen",
      learnNumbersEn: "Numbers",
      learnTime: "Zeit",
      learnTimeDe: "Zeit",
      learnTimeEn: "Time",
      learnDate: "Datum",
      learnDateDe: "Datum",
      learnDateEn: "Date",
      learnWeather: "Wetter",
      learnWeatherDe: "Wetter",
      learnWeatherEn: "Weather",
      learnArticles: "Artikel",
      learnArticlesDe: "Artikel",
      learnArticlesEn: "Articles",
      learnPronouns: "Pronomen",
      learnPronounsDe: "Pronomen",
      learnPronounsEn: "Pronouns",
      learnVerbs: "Verben",
      learnVerbsDe: "Verben",
      learnVerbsEn: "Verbs",
      learnPrepositions: "Präpositionen",
      learnPrepositionsDe: "Präpositionen",
      learnPrepositionsEn: "Prepositions",
      learnDeclension: "Deklination",
      learnDeclensionDe: "Deklination",
      learnDeclensionEn: "Declension",
      learnQuestions: "Fragen",
      learnQuestionsDe: "Fragen",
      learnQuestionsEn: "Questions",
      numbersDescription: "Lernen Sie deutsche Zahlen und Zählen",
      numbersDescriptionDe: "Lernen Sie deutsche Zahlen und Zählen",
      numbersDescriptionEn: "Learn German numbers and counting",
      timeDescription: "Lernen Sie die deutsche Zeitangabe",
      timeDescriptionDe: "Lernen Sie die deutsche Zeitangabe",
      timeDescriptionEn: "Learn German time expressions",
      dateDescription: "Lernen Sie deutsche Datumsangaben",
      dateDescriptionDe: "Lernen Sie deutsche Datumsangaben",
      dateDescriptionEn: "Learn German date expressions",
      weatherDescription: "Grundlegende Wetterbegriffe auf Deutsch",
      weatherDescriptionDe: "Grundlegende Wetterbegriffe auf Deutsch",
      weatherDescriptionEn: "Basic weather terms in German",
      articlesDescription: "Lernen Sie die deutschen Artikel (der, die, das)",
      articlesDescriptionDe: "Lernen Sie die deutschen Artikel (der, die, das)",
      articlesDescriptionEn: "Learn German articles (der, die, das)",
      pronounsDescription: "Deutsche Personalpronomen lernen",
      pronounsDescriptionDe: "Deutsche Personalpronomen lernen",
      pronounsDescriptionEn: "Learn German personal pronouns",
      verbsDescription: "Deutsche Verbkonjugation im Präsens",
      verbsDescriptionDe: "Deutsche Verbkonjugation im Präsens",
      verbsDescriptionEn: "German verb conjugation in present tense",
      prepositionsDescription: "Verben mit Präpositionen lernen",
      prepositionsDescriptionDe: "Verben mit Präpositionen lernen",
      prepositionsDescriptionEn: "Learn verbs with prepositions",
      declensionDescription: "Adjektive in allen Fällen deklinieren",
      declensionDescriptionDe: "Adjektive in allen Fällen deklinieren",
      declensionDescriptionEn: "Decline adjectives in all cases",
      questionsDescription: "Deutsche Fragen richtig stellen",
      questionsDescriptionDe: "Deutsche Fragen richtig stellen",
      questionsDescriptionEn: "Ask German questions correctly",
      simple: "Simple",
      lingoMeshFeatures: "LingoMesh Funktionen",
      interactive: "Interaktiv",
      interactiveDescription:
        "Interaktive Übungen und Lernwerkzeuge für ein effektives Lernen",
      interactiveDescriptionDe:
        "Interaktive Übungen und Lernwerkzeuge für ein effektives Lernen",
      interactiveDescriptionEn:
        "Interactive exercises and learning tools for effective learning",
      multilingual: "Mehrsprachig",
      multilingualDescription:
        "Unterstützung für mehrere Sprachen und Übersetzungen",
      multilingualDescriptionDe:
        "Unterstützung für mehrere Sprachen und Übersetzungen",
      multilingualDescriptionEn:
        "Support for multiple languages and translations",
      dynamic: "Dynamisch",
      dynamicDescription: "Anpassbare Inhalte und personalisierte Lernpfade",
      dynamicDescriptionDe: "Anpassbare Inhalte und personalisierte Lernpfade",
      dynamicDescriptionEn:
        "AI-generated questions and personalized learning paths",
      platformSubtitle:
        "Fortgeschrittene KI-gestützte deutsche Lernplattform mit personalisierten Inhalten",
      platformSubtitleDe:
        "Fortgeschrittene KI-gestützte deutsche Lernplattform mit personalisierten Inhalten",
      platformSubtitleEn:
        "Advanced AI-powered German learning platform with personalized content",
      platformSubtitleEs:
        "Plataforma avanzada de aprendizaje de alemán con IA y contenido personalizado",
      platformSubtitleRu:
        "Продвинутая платформа изучения немецкого языка с ИИ и персонализированным контентом",
      withInteractiveExercises: "mit interaktiven Übungen",
      withInteractiveExercisesDe: "mit interaktiven Übungen",
      withInteractiveExercisesEn: "With interactive exercises",
      bilingual: "Zweisprachig",
    },
    quiz: {
      noQuestionsAvailable: "Keine Quiz-Fragen verfügbar",
      noQuestionsAvailableDe: "Keine Quiz-Fragen verfügbar",
      reset: "Zurücksetzen",
      resetDe: "Zurücksetzen",
      nextQuestion: "Nächste Frage",
      nextQuestionDe: "Nächste Frage",
    },
    widgets: {
      zahlenkonverter: "Zahlenkonverter",
      einstellungen: "Einstellungen",
      datum: "Datum",
      datumAufDeutsch: "Datum",
      zeit: "Zeit",
      zeitEinstellen: "Zeit",
      wetter: "Wetter",
      wetterAufDeutsch: "Wetter",
      praesensVerb: "Verbkonjugation",
      artikel: "Deutsche Artikel",
      personalpronomen: "Deutsche Personalpronomen",
      fragen: "Deutsche Fragen",
      verbenPraepositionen: "Deutsche Verben & Präpositionen",
      verbzeiten: "Verbzeiten",
      adjektivdeklination: "Deutsche Adjektivdeklination",
      basicNumbers: "Grundzahlen",
      ordinalNumbers: "Ordinalzahlen",
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
      numberConverterDescription: "Konvertieren Sie Zahlen in deutsche Wörter",
      quizDescription: "Testen Sie Ihr Wissen mit interaktiven Quiz",
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
      spanish: "Spanish",
      russian: "Russian",
      enterNumber: "Zahl eingeben",
      enterVerb: "Verb eingeben",
      formula: "Formel:",
      examples: "Beispiele:",
      settings: "Einstellungen",
      date: "Datum",
      dateToGerman: "Datum",
      time: "Zeit",
      setTime: "Zeit",
      weatherToGerman: "Wetter",
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
      clickToChangeDate: "Datum anpassen (klicken)",
    },
    numbers: {
      basicNumbersTitle: "Grundzahlen",
      basicNumbersSubtitle: "Die wichtigsten Zahlen im Deutschen",
      numberRulesTitle: "Zahlenregeln",
      numberRulesSubtitle: "Wichtige Regeln für deutsche Zahlen",
      ordinalNumbersTitle: "Ordinalzahlen",
      ordinalNumbersSubtitle:
        "Erste, zweite, dritte... Lernen Sie die Ordinalzahlen",
      numberRules: [
        {
          title: "Einer kommen zuerst",
          description:
            "Bei zweistelligen Zahlen wird die Einerstelle vor der Zehnerstelle gesprochen: 21 = einundzwanzig",
          example: "21 → ein-und-zwanzig",
        },
        {
          title: "Dreißig ist anders",
          description: "30 heißt 'dreißig', nicht 'dreizig'",
          example: "30 → dreißig",
        },
        {
          title: "Hundert ohne 'ein'",
          description: "100 heißt einfach 'hundert', nicht 'einhundert'",
          example: "100 → hundert",
        },
        {
          title: "Ordinalzahlen enden auf -te",
          description:
            "Ordinalzahlen enden meist auf -te: erste, zweite, dritte",
          example: "1. → erste, 2. → zweite",
        },
      ],
    },
  },
  en: {
    app: {
      name: "LingoMesh",
      tagline:
        "Learn German with grammar, vocabulary, sentence structure and interactive tools",
      taglineDe:
        "Deutsch lernen mit Grammatik, Wortschatz, Satzstruktur und interaktiven Werkzeugen",
      taglineEn:
        "Learn German with grammar, vocabulary, sentence structure and interactive tools",
      footer: "© {currentYear} LingoMesh.",
      developer: "mirmousavi.com",
      subtitle: "German Guide",
    },
    navigation: {
      home: "Home",
      vocabulary: "Vocabulary",
      number: "Number",
      alphabet: "Alphabet",
      time: "Time",
      date: "Date",
      weather: "Weather",
      country: "Country & Nationality",
      countries: "Countries & Nationalities",
      grammar: "Grammar",
      verb: "Verb",
      verbs: "Verbs",
      verbConjugator: "Verb Conjugator",
      modalVerb: "Modal Verb",
      modalVerbs: "Modal Verbs",
      passiveVoice: "Passive Voice",
      reflexiveVerb: "Reflexive Verb",
      reflexiveVerbs: "Reflexive Verbs",
      tense: "Tense",
      tenses: "Tenses",
      presentTense: "Present Tense",
      perfectTense: "Perfect Tense",
      pastTense: "Past Tense",
      pastPerfect: "Past Perfect",
      futureTense: "Future",
      futurePerfect: "Future Perfect",
      irregularVerb: "Irregular Verb",
      irregularVerbs: "Irregular Verbs",
      tenseOverview: "Overview of the Tenses",
      tensesOverview: "Overview of the Tenses",
      pronoun: "Pronoun",
      pronouns: "Pronouns",
      personalPronoun: "Personal Pronoun",
      personalPronouns: "Personal Pronouns",
      possessive: "Possessive",
      possessives: "Possessives",
      reflexivePronoun: "Reflexive Pronoun",
      reflexivePronouns: "Reflexive Pronouns",
      relativePronoun: "Relative Pronoun",
      relativePronouns: "Relative Pronouns",
      interrogativePronoun: "Interrogative Pronoun",
      interrogativePronouns: "Interrogative Pronouns",
      demonstrativePronoun: "Demonstrative Pronoun",
      demonstrativePronouns: "Demonstrative Pronouns",
      indefinitePronoun: "Indefinite Pronoun",
      indefinitePronouns: "Indefinite Pronouns",
      adjective: "Adjective",
      adjectives: "Adjectives",
      declension: "Declension",
      adverb: "Adverb",
      adverbs: "Adverbs",
      preposition: "Preposition",
      prepositions: "Prepositions",
      article: "Article",
      articles: "Articles",
      question: "Question",
      questions: "Questions",
      usefulPhrase: "Useful Phrase",
      usefulPhrases: "Useful Phrases",
      general: "General",
      classroom: "Classroom",
      restaurant: "Restaurant",
      bank: "Bank",
      friend: "Friend",
    },
    home: {
      heroTitle: "Let's learn German!",
      heroSubtitle:
        "Discover our interactive learning modules for the German language",
      heroSubtitleDe:
        "Entdecken Sie unsere interaktiven Lernmodule für die deutsche Sprache",
      heroSubtitleEn:
        "Discover our interactive learning modules for the German language",
      startLearning: "Start learning",
      learnNumber: "Number",
      learnNumbersDe: "Lernen Sie deutsche Zahlen",
      learnNumbersEn: "Numbers",
      learnTime: "Time",
      learnTimeDe: "Lernen Sie die deutsche Zeit",
      learnTimeEn: "Time",
      learnDate: "Date",
      learnDateDe: "Lernen Sie die deutsche Datumsangabe",
      learnDateEn: "Date",
      learnWeather: "Weather",
      learnWeatherDe: "Grundlegende Wetterbegriffe auf Deutsch",
      learnWeatherEn: "Weather",
      learnArticles: "Articles",
      learnArticlesDe: "Lernen Sie die deutschen Artikel",
      learnArticlesEn: "Articles",
      learnPronouns: "Pronouns",
      learnPronounsDe: "Deutsche Personalpronomen lernen",
      learnPronounsEn: "Pronouns",
      learnVerbs: "Verbs",
      learnVerbsDe: "Deutsche Verbkonjugation im Präsens",
      learnVerbsEn: "Verbs",
      learnPrepositions: "Prepositions",
      learnPrepositionsDe: "Verben mit Präpositionen lernen",
      learnPrepositionsEn: "Prepositions",
      learnDeclension: "Declension",
      learnDeclensionDe: "Adjektive in allen Fällen deklinieren",
      learnDeclensionEn: "Declension",
      learnQuestions: "Questions",
      learnQuestionsDe: "Deutsche Fragen richtig stellen",
      learnQuestionsEn: "Questions",
      numbersDescription: "Learn German numbers and counting",
      numbersDescriptionDe: "Lernen Sie deutsche Zahlen und Zählen",
      numbersDescriptionEn: "Learn German numbers and counting",
      timeDescription: "Learn German time expressions",
      timeDescriptionDe: "Lernen Sie die deutsche Zeitangabe",
      timeDescriptionEn: "Learn German time expressions",
      dateDescription: "Learn German date expressions",
      dateDescriptionDe: "Lernen Sie deutsche Datumsangaben",
      dateDescriptionEn: "Learn German date expressions",
      weatherDescription: "Basic weather terms in German",
      weatherDescriptionDe: "Grundlegende Wetterbegriffe auf Deutsch",
      weatherDescriptionEn: "Basic weather terms in German",
      articlesDescription: "Learn German articles (der, die, das)",
      articlesDescriptionDe: "Lernen Sie die deutschen Artikel (der, die, das)",
      articlesDescriptionEn: "Learn German articles (der, die, das)",
      pronounsDescription: "Learn German personal pronouns",
      pronounsDescriptionDe: "Deutsche Personalpronomen lernen",
      pronounsDescriptionEn: "Learn German personal pronouns",
      verbsDescription: "German verb conjugation in present tense",
      verbsDescriptionDe: "Deutsche Verbkonjugation im Präsens",
      verbsDescriptionEn: "German verb conjugation in present tense",
      prepositionsDescription: "Learn verbs with prepositions",
      prepositionsDescriptionDe: "Verben mit Präpositionen lernen",
      prepositionsDescriptionEn: "Learn verbs with prepositions",
      declensionDescription: "Decline adjectives in all cases",
      declensionDescriptionDe: "Adjektive in allen Fällen deklinieren",
      declensionDescriptionEn: "Decline adjectives in all cases",
      questionsDescription: "Ask German questions correctly",
      questionsDescriptionDe: "Deutsche Fragen richtig stellen",
      questionsDescriptionEn: "Ask German questions correctly",
      simple: "Simple",
      lingoMeshFeatures: "LingoMesh Features",
      interactive: "Interactive",
      interactiveDescription:
        "Interactive exercises and learning tools for effective learning",
      interactiveDescriptionDe:
        "Interaktive Übungen und Lernwerkzeuge für ein effektives Lernen",
      interactiveDescriptionEn:
        "Interactive exercises and learning tools for effective learning",
      multilingual: "Multilingual",
      multilingualDescription:
        "Support for multiple languages and translations",
      multilingualDescriptionDe:
        "Unterstützung für mehrere Sprachen und Übersetzungen",
      multilingualDescriptionEn:
        "Support for multiple languages and translations",
      dynamic: "Dynamic",
      dynamicDescription:
        "AI-generated questions and personalized learning paths",
      dynamicDescriptionDe: "Anpassbare Inhalte und personalisierte Lernpfade",
      dynamicDescriptionEn:
        "AI-generated questions and personalized learning paths",
      platformSubtitle:
        "Advanced AI-powered German learning platform with personalized content",
      platformSubtitleDe:
        "Fortgeschrittene KI-gestützte deutsche Lernplattform mit personalisierten Inhalten",
      platformSubtitleEn:
        "Advanced AI-powered German learning platform with personalized content",
      platformSubtitleEs:
        "Plataforma avanzada de aprendizaje de alemán con IA y contenido personalizado",
      platformSubtitleRu:
        "Продвинутая платформа изучения немецкого языка с ИИ и персонализированным контентом",
      withInteractiveExercises: "With interactive exercises",
      withInteractiveExercisesDe: "mit interaktiven Übungen",
      withInteractiveExercisesEn: "With interactive exercises",
      bilingual: "Bilingual",
    },
    quiz: {
      noQuestionsAvailable: "No quiz questions available",
      noQuestionsAvailableDe: "Keine Quiz-Fragen verfügbar",
      reset: "Reset",
      resetDe: "Zurücksetzen",
      nextQuestion: "Next Question",
      nextQuestionDe: "Nächste Frage",
    },
    widgets: {
      zahlenkonverter: "Number Converter",
      einstellungen: "Settings",
      datum: "Date",
      datumAufDeutsch: "Date",
      zeit: "Time",
      zeitEinstellen: "Time",
      wetter: "Weather",
      wetterAufDeutsch: "Weather",
      praesensVerb: "Verb Conjugation",
      artikel: "Articles",
      personalpronomen: "German Personal Pronouns",
      fragen: "German Questions",
      verbenPraepositionen: "German Verbs & Prepositions",
      verbzeiten: "Verb Tenses",
      adjektivdeklination: "German Adjective Declension",
      basicNumbers: "Basic Numbers",
      ordinalNumbers: "Ordinal Numbers",
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
      numberConverterDescription: "Convert numbers to German words",
      quizDescription: "Test your knowledge with interactive quizzes",
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
      spanish: "Spanish",
      russian: "Russian",
      enterNumber: "Enter a number",
      enterVerb: "Enter a verb",
      formula: "Formula:",
      examples: "Examples:",
      settings: "Settings",
      date: "Date",
      dateToGerman: "Date",
      time: "Time",
      setTime: "Time",
      weatherToGerman: "Weather",
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
    numbers: {
      basicNumbersTitle: "Basic Numbers",
      basicNumbersSubtitle: "The most important numbers in German",
      numberRulesTitle: "Number Rules",
      numberRulesSubtitle: "Important rules for German numbers",
      ordinalNumbersTitle: "Ordinal Numbers",
      ordinalNumbersSubtitle:
        "First, second, third... Learn the ordinal numbers",
      numberRules: [
        {
          title: "Units come first",
          description:
            "In two-digit numbers, the units are spoken before the tens: 21 = einundzwanzig",
          example: "21 → ein-und-zwanzig",
        },
        {
          title: "Thirty is different",
          description: "30 is called 'dreißig', not 'dreizig'",
          example: "30 → dreißig",
        },
        {
          title: "Hundred without 'ein'",
          description: "100 is simply 'hundert', not 'einhundert'",
          example: "100 → hundert",
        },
        {
          title: "Ordinals end in -te",
          description:
            "Ordinal numbers usually end in -te: erste, zweite, dritte",
          example: "1. → erste, 2. → zweite",
        },
      ],
    },
  },
  es: {
    app: {
      name: "LingoMesh",
      tagline:
        "Aprende alemán con gramática, vocabulario, estructura de oraciones y herramientas interactivas",
      taglineDe:
        "Deutsch lernen mit Grammatik, Wortschatz, Satzstruktur und interaktiven Werkzeugen",
      taglineEn:
        "Learn German with grammar, vocabulary, sentence structure and interactive tools",
      footer: "© {currentYear} LingoMesh.\n Desarrollado por",
      developer: "mirmousavi.com",
      subtitle: "Guía Alemana",
    },
    navigation: {
      home: "Inicio",
      vocabulary: "Vocabulario",
      number: "Número",
      alphabet: "Alfabeto",
      time: "Tiempo",
      date: "Fecha",
      weather: "Clima",
      country: "País y Nacionalidad",
      countries: "Países y Nacionalidades",
      grammar: "Gramática",
      verb: "Verbo",
      verbs: "Verbos",
      verbConjugator: "Conjugador de Verbos",
      modalVerb: "Verbo Modal",
      modalVerbs: "Verbos Modales",
      passiveVoice: "Voz Pasiva",
      reflexiveVerb: "Verbo Reflexivo",
      reflexiveVerbs: "Verbos Reflexivos",
      tense: "Tiempo",
      tenses: "Tiempos",
      presentTense: "Presente",
      perfectTense: "Perfecto",
      pastTense: "Pasado",
      pastPerfect: "Pluscuamperfecto",
      futureTense: "Futuro",
      futurePerfect: "Futuro Perfecto",
      irregularVerb: "Verbo Irregular",
      irregularVerbs: "Verbos Irregulares",
      tenseOverview: "Resumen de los Tiempos",
      tensesOverview: "Resumen de los Tiempos",
      pronoun: "Pronombre",
      pronouns: "Pronombres",
      personalPronoun: "Pronombre Personal",
      personalPronouns: "Pronombres Personales",
      possessive: "Posesivo",
      possessives: "Poseivos",
      reflexivePronoun: "Pronombre Reflexivo",
      reflexivePronouns: "Pronombres Reflexivos",
      relativePronoun: "Pronombre Relativo",
      relativePronouns: "Pronombres Relativos",
      interrogativePronoun: "Pronombre Interrogativo",
      interrogativePronouns: "Pronombres Interrogativos",
      demonstrativePronoun: "Pronombre Demostrativo",
      demonstrativePronouns: "Pronombres Demostrativos",
      indefinitePronoun: "Pronombre Indefinido",
      indefinitePronouns: "Pronombres Indefinidos",
      adjective: "Adjetivo",
      adjectives: "Adjetivos",
      declension: "Declinación",
      adverb: "Adverbio",
      adverbs: "Adverbios",
      preposition: "Preposición",
      prepositions: "Preposiciones",
      article: "Artículo",
      articles: "Artículos",
      question: "Pregunta",
      questions: "Preguntas",
      usefulPhrase: "Frase Útil",
      usefulPhrases: "Frases Útiles",
      general: "General",
      classroom: "Aula",
      restaurant: "Restaurante",
      bank: "Banco",
      friend: "Amigo",
    },
    home: {
      heroTitle: "¡Aprendamos alemán!",
      heroSubtitle:
        "Descubre nuestros módulos interactivos de aprendizaje para el idioma alemán",
      heroSubtitleDe:
        "Entdecken Sie unsere interaktiven Lernmodule für die deutsche Sprache",
      heroSubtitleEn:
        "Discover our interactive learning modules for the German language",
      startLearning: "Comenzar a aprender",
      learnNumber: "Número",
      learnNumbersDe: "Lernen Sie deutsche Zahlen",
      learnNumbersEn: "Learn German numbers",
      learnTime: "Tiempo",
      learnTimeDe: "Lernen Sie die deutsche Zeit",
      learnTimeEn: "Learn German time",
      learnDate: "Fecha",
      learnDateDe: "Lernen Sie die deutsche Datumsangabe",
      learnDateEn: "Learn German date",
      learnWeather: "Clima",
      learnWeatherDe: "Grundlegende Wetterbegriffe auf Deutsch",
      learnWeatherEn: "Basic weather terms in German",
      learnArticles: "Artículos",
      learnArticlesDe: "Lernen Sie die deutschen Artikel",
      learnArticlesEn: "Learn German articles",
      learnPronouns: "Pronombres",
      learnPronounsDe: "Deutsche Personalpronomen lernen",
      learnPronounsEn: "Learn German personal pronouns",
      learnVerbs: "Verbos",
      learnVerbsDe: "Deutsche Verbkonjugation im Präsens",
      learnVerbsEn: "German verb conjugation in present tense",
      learnPrepositions: "Preposiciones",
      learnPrepositionsDe: "Verben mit Präpositionen lernen",
      learnPrepositionsEn: "Learn verbs with prepositions",
      learnDeclension: "Declinación",
      learnDeclensionDe: "Adjektive in allen Fällen deklinieren",
      learnDeclensionEn: "Decline adjectives in all cases",
      learnQuestions: "Preguntas",
      learnQuestionsDe: "Deutsche Fragen richtig stellen",
      learnQuestionsEn: "Ask German questions correctly",
      numbersDescription: "Aprende números y conteo en alemán",
      numbersDescriptionDe: "Lernen Sie deutsche Zahlen und Zählen",
      numbersDescriptionEn: "Learn German numbers and counting",
      timeDescription: "Aprende expresiones de tiempo en alemán",
      timeDescriptionDe: "Lernen Sie die deutsche Zeitangabe",
      timeDescriptionEn: "Learn German time expressions",
      dateDescription: "Aprende expresiones de fecha en alemán",
      dateDescriptionDe: "Lernen Sie deutsche Datumsangaben",
      dateDescriptionEn: "Learn German date expressions",
      weatherDescription: "Términos básicos del clima en alemán",
      weatherDescriptionDe: "Grundlegende Wetterbegriffe auf Deutsch",
      weatherDescriptionEn: "Basic weather terms in German",
      articlesDescription: "Aprende artículos alemanes (der, die, das)",
      articlesDescriptionDe: "Lernen Sie die deutschen Artikel (der, die, das)",
      articlesDescriptionEn: "Learn German articles (der, die, das)",
      pronounsDescription: "Aprende pronombres personales alemanes",
      pronounsDescriptionDe: "Deutsche Personalpronomen lernen",
      pronounsDescriptionEn: "Learn German personal pronouns",
      verbsDescription: "Conjugación de verbos alemanes en presente",
      verbsDescriptionDe: "Deutsche Verbkonjugation im Präsens",
      verbsDescriptionEn: "German verb conjugation in present tense",
      prepositionsDescription: "Aprende verbos con preposiciones",
      prepositionsDescriptionDe: "Verben mit Präpositionen lernen",
      prepositionsDescriptionEn: "Learn verbs with prepositions",
      declensionDescription: "Declina adjetivos en todos los casos",
      declensionDescriptionDe: "Adjektive in allen Fällen deklinieren",
      declensionDescriptionEn: "Decline adjectives in all cases",
      questionsDescription: "Haz preguntas en alemán correctamente",
      questionsDescriptionDe: "Deutsche Fragen richtig stellen",
      questionsDescriptionEn: "Ask German questions correctly",
      simple: "Simple",
      lingoMeshFeatures: "Funciones de LingoMesh",
      interactive: "Interactivo",
      interactiveDescription:
        "Ejercicios interactivos y herramientas de aprendizaje para un aprendizaje efectivo",
      interactiveDescriptionDe:
        "Interaktive Übungen und Lernwerkzeuge für ein effektives Lernen",
      interactiveDescriptionEn:
        "Interactive exercises and learning tools for effective learning",
      multilingual: "Multilingüe",
      multilingualDescription: "Soporte para múltiples idiomas y traducciones",
      multilingualDescriptionDe:
        "Unterstützung für mehrere Sprachen und Übersetzungen",
      multilingualDescriptionEn:
        "Support for multiple languages and translations",
      dynamic: "Dinámico",
      dynamicDescription:
        "Contenido adaptable y rutas de aprendizaje personalizadas",
      dynamicDescriptionDe: "Anpassbare Inhalte und personalisierte Lernpfade",
      dynamicDescriptionEn:
        "AI-generated questions and personalized learning paths",
      platformSubtitle:
        "Plataforma avanzada de aprendizaje de alemán con IA y contenido personalizado",
      platformSubtitleDe:
        "Fortgeschrittene KI-gestützte deutsche Lernplattform mit personalisierten Inhalten",
      platformSubtitleEn:
        "Advanced AI-powered German learning platform with personalized content",
      platformSubtitleEs:
        "Plataforma avanzada de aprendizaje de alemán con IA y contenido personalizado",
      platformSubtitleRu:
        "Продвинутая платформа изучения немецкого языка с ИИ и персонализированным контентом",
      withInteractiveExercises: "Con ejercicios interactivos",
      withInteractiveExercisesDe: "mit interaktiven Übungen",
      withInteractiveExercisesEn: "With interactive exercises",
      bilingual: "Bilingüe",
    },
    quiz: {
      noQuestionsAvailable: "No hay preguntas de quiz disponibles",
      noQuestionsAvailableDe: "Keine Quiz-Fragen verfügbar",
      reset: "Reiniciar",
      resetDe: "Zurücksetzen",
      nextQuestion: "Siguiente Pregunta",
      nextQuestionDe: "Nächste Frage",
    },
    widgets: {
      zahlenkonverter: "Convertidor de Números",
      einstellungen: "Configuración",
      datum: "Fecha",
      datumAufDeutsch: "Fecha",
      zeit: "Tiempo",
      zeitEinstellen: "Tiempo",
      wetter: "Clima",
      wetterAufDeutsch: "Clima",
      praesensVerb: "Conjugación de Verbos",
      artikel: "Artículos Alemanes",
      personalpronomen: "Pronombres Personales Alemanes",
      fragen: "Preguntas Alemanas",
      verbenPraepositionen: "Verbos y Preposiciones Alemanes",
      verbzeiten: "Tiempos Verbales",
      adjektivdeklination: "Declinación de Adjetivos Alemanes",
      basicNumbers: "Números Básicos",
      ordinalNumbers: "Números Ordinales",
      quiz: "Quiz",
      quizNumbers: "Quiz de Números",
      quizDate: "Quiz de Fechas",
      quizTime: "Quiz de Tiempo",
      quizWeather: "Quiz de Clima",
      quizVerbs: "Quiz de Verbos",
      quizArticles: "Quiz de Artículos",
      quizPronouns: "Quiz de Pronombres Personales",
      quizQuestions: "Quiz de Preguntas",
      quizPrepositions: "Quiz de Preposiciones",
      quizDeclension: "Quiz de Declinación",
      numberConverterDescription: "Convierte números a palabras alemanas",
      quizDescription: "Prueba tu conocimiento con cuestionarios interactivos",
    },
    ui: {
      listen: "Escuchar",
      hoeren: "Escuchar",
      beispiele: "Ejemplos",
      formel: "Fórmula",
      beispiel: "Ejemplo",
      schnelleTipps: "Consejos Rápidos",
      quickTips: "Consejos Rápidos",
      perfektTipps: "Consejos del Perfecto",
      perfektTips: "Consejos del Perfecto",
      praesensVerwendung: "Uso del Presente",
      praesensUsage: "Uso del Presente",
      verwendeHaben: "Usa 'haben':",
      useHaben: "Usa 'haben':",
      verwendeSein: "Usa 'sein':",
      useSein: "Usa 'sein':",
      meisteVerben: "La mayoría de verbos (aprender, leer, dormir)",
      mostVerbs: "La mayoría de verbos (aprender, leer, dormir)",
      bewegungsverben:
        "Verbos de movimiento (ir, conducir, volar) y cambios de estado (convertirse, morir)",
      movementVerbs:
        "Verbos de movimiento (ir, conducir, volar) y cambios de estado (convertirse, morir)",
      zustaendsaenderungen: "Cambios de estado (convertirse, morir)",
      stateChanges: "Cambios de estado (convertirse, morir)",
      gegenwaertigeHandlungen:
        "Usado para acciones presentes, hábitos y verdades generales.",
      presentActions:
        "Usado para acciones presentes, hábitos y verdades generales.",
      gewohnheiten: "Hábitos",
      habits: "Hábitos",
      allgemeineWahrheiten: "Verdades generales",
      generalTruths: "Verdades generales",
      wFragen: "Preguntas W:",
      jaNeinFragen: "Preguntas Sí/No:",
      formalVsInformal: "Formal vs Informal:",
      wFragenBeschreibung:
        "Comienzan con palabras W (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      wQuestionsDescription:
        "Comienzan con palabras W (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      jaNeinBeschreibung: "El verbo va primero, el sujeto segundo",
      yesNoDescription: "El verbo va primero, el sujeto segundo",
      formalBeschreibung: "Usa 'Sie' para formal, 'du' para informal",
      formalDescription: "Usa 'Sie' para formal, 'du' para informal",
      uebersetzungen: "Traducciones",
      translations: "Traducciones",
      englishTranslationsVisible: "Las traducciones en inglés están visibles",
      englishTranslationsShow: "Mostrar traducciones en inglés",
      light: "Claro",
      dark: "Oscuro",
      german: "Alemán",
      english: "Inglés",
      spanish: "Español",
      russian: "Ruso",
      enterNumber: "Ingresa un número",
      enterVerb: "Ingresa un verbo",
      formula: "Fórmula:",
      examples: "Ejemplos:",
      settings: "Configuración",
      date: "Fecha",
      dateToGerman: "Fecha",
      time: "Tiempo",
      setTime: "Tiempo",
      weatherToGerman: "Clima",
      numberConverter: "Convertidor de Números",
      presentVerb: "Conjugación de Verbos",
      articles: "Artículos Alemanes",
      personalPronouns: "Pronombres Personales Alemanes",
      questions: "Preguntas Alemanas",
      verbsPrepositions: "Verbos y Preposiciones Alemanes",
      verbTenses: "Tiempos Verbales",
      adjectiveDeclension: "Declinación de Adjetivos Alemanes",
      colorLegend: "Codificación de Colores:",
      units: "Unidades",
      tens: "Decenas",
      hundreds: "Centenas",
      thousands: "Miles",
      millions: "Millones",
      connectors: "Conectores",
      numberRangeError: "Por favor ingresa un número entre 0 y 999,999,999",
    },
    weather: {
      wetterdatenFehler: "No se pudieron cargar los datos del clima",
      weatherDataError: "Weather data could not be loaded",
      stadtAuswaehlen: "Seleccionar ciudad",
      stadtWaehlen: "Seleccionar ciudad (obtener clima)",
      selectCity: "Select city",
      selectCityLabel: "Select city (get weather)",
      temperatur: "Temperatura",
      temperature: "Temperature",
      luftfeuchtigkeit: "Humedad",
      humidity: "Humidity",
      windgeschwindigkeit: "Velocidad del Viento",
      windSpeed: "Wind Speed",
      beschreibung: "Descripción",
      description: "Description",
    },
    time: {
      heuteIst: "Hoy es",
      todayIs: "Today is",
      der: "el",
      the: "the",
      format24h: "Formato 24h",
      format12h: "Formato 12h",
      klickenZumAendern: "Ajustar tiempo (clic)",
      clickToChange: "Click to change time",
      datumAendern: "Ajustar fecha (clic)",
      clickToChangeDate: "Ajustar fecha (clic)",
    },
    numbers: {
      basicNumbersTitle: "Números Básicos",
      basicNumbersSubtitle: "Los números más importantes en alemán",
      numberRulesTitle: "Reglas de Números",
      numberRulesSubtitle: "Reglas importantes para números alemanes",
      ordinalNumbersTitle: "Números Ordinales",
      ordinalNumbersSubtitle:
        "Primero, segundo, tercero... Aprende los números ordinales",
      numberRules: [
        {
          title: "Las unidades van primero",
          description:
            "En números de dos dígitos, las unidades se dicen antes que las decenas: 21 = einundzwanzig",
          example: "21 → ein-und-zwanzig",
        },
        {
          title: "Treinta es diferente",
          description: "30 se dice 'dreißig', no 'dreizig'",
          example: "30 → dreißig",
        },
        {
          title: "Cien sin 'ein'",
          description: "100 simplemente es 'hundert', no 'einhundert'",
          example: "100 → hundert",
        },
        {
          title: "Los ordinales terminan en -te",
          description:
            "Los números ordinales generalmente terminan en -te: erste, zweite, dritte",
          example: "1. → erste, 2. → zweite",
        },
      ],
    },
  },
  ru: {
    app: {
      name: "LingoMesh",
      tagline:
        "Изучайте немецкий язык с грамматикой, лексикой, структурой предложений и интерактивными инструментами",
      taglineDe:
        "Deutsch lernen mit Grammatik, Wortschatz, Satzstruktur und interaktiven Werkzeugen",
      taglineEn:
        "Learn German with grammar, vocabulary, sentence structure and interactive tools",
      footer: "© {currentYear} LingoMesh.\n Разработано",
      developer: "mirmousavi.com",
      subtitle: "Немецкое Руководство",
    },
    navigation: {
      home: "Главная",
      vocabulary: "Словарь",
      number: "Число",
      alphabet: "Алфавит",
      time: "Время",
      date: "Дата",
      weather: "Погода",
      country: "Страна и Национальность",
      countries: "Страны и Национальности",
      grammar: "Грамматика",
      verb: "Глагол",
      verbs: "Глаголы",
      verbConjugator: "Спряжение Глаголов",
      modalVerb: "Модальный Глагол",
      modalVerbs: "Модальные Глаголы",
      passiveVoice: "Пассивный Залог",
      reflexiveVerb: "Возвратный Глагол",
      reflexiveVerbs: "Возвратные Глаголы",
      tense: "Время",
      tenses: "Времена",
      presentTense: "Настоящее Время",
      perfectTense: "Перфект",
      pastTense: "Прошедшее Время",
      pastPerfect: "Плюсквамперфект",
      futureTense: "Будущее Время",
      futurePerfect: "Будущее Совершенное",
      irregularVerb: "Неправильный Глагол",
      irregularVerbs: "Неправильные Глаголы",
      tenseOverview: "Обзор Времен",
      tensesOverview: "Обзор Времен",
      pronoun: "Местоимение",
      pronouns: "Местоимения",
      personalPronoun: "Личное Местоимение",
      personalPronouns: "Личные Местоимения",
      possessive: "Притяжательное",
      possessives: "Притяжательные",
      reflexivePronoun: "Возвратное Местоимение",
      reflexivePronouns: "Возвратные Местоимения",
      relativePronoun: "Относительное Местоимение",
      relativePronouns: "Относительные Местоимения",
      interrogativePronoun: "Вопросительное Местоимение",
      interrogativePronouns: "Вопросительные Местоимения",
      demonstrativePronoun: "Указательное Местоимение",
      demonstrativePronouns: "Указательные Местоимения",
      indefinitePronoun: "Неопределенное Местоимение",
      indefinitePronouns: "Неопределенные Местоимения",
      adjective: "Прилагательное",
      adjectives: "Прилагательные",
      declension: "Склонение",
      adverb: "Наречие",
      adverbs: "Наречия",
      preposition: "Предлог",
      prepositions: "Предлоги",
      article: "Артикль",
      articles: "Артикли",
      question: "Вопрос",
      questions: "Вопросы",
      usefulPhrase: "Полезная Фраза",
      usefulPhrases: "Полезные Фразы",
      general: "Общие",
      classroom: "Класс",
      restaurant: "Ресторан",
      bank: "Банк",
      friend: "Друг",
    },
    home: {
      heroTitle: "Давайте изучать немецкий!",
      heroSubtitle:
        "Откройте для себя наши интерактивные модули обучения немецкому языку",
      heroSubtitleDe:
        "Entdecken Sie unsere interaktiven Lernmodule für die deutsche Sprache",
      heroSubtitleEn:
        "Discover our interactive learning modules for the German language",
      startLearning: "Начать обучение",
      learnNumber: "Число",
      learnNumbersDe: "Lernen Sie deutsche Zahlen",
      learnNumbersEn: "Learn German numbers",
      learnTime: "Время",
      learnTimeDe: "Lernen Sie die deutsche Zeit",
      learnTimeEn: "Learn German time",
      learnDate: "Дата",
      learnDateDe: "Lernen Sie die deutsche Datumsangabe",
      learnDateEn: "Learn German date",
      learnWeather: "Погода",
      learnWeatherDe: "Grundlegende Wetterbegriffe auf Deutsch",
      learnWeatherEn: "Basic weather terms in German",
      learnArticles: "Артикли",
      learnArticlesDe: "Lernen Sie die deutschen Artikel",
      learnArticlesEn: "Learn German articles",
      learnPronouns: "Местоимения",
      learnPronounsDe: "Deutsche Personalpronomen lernen",
      learnPronounsEn: "Learn German personal pronouns",
      learnVerbs: "Глаголы",
      learnVerbsDe: "Deutsche Verbkonjugation im Präsens",
      learnVerbsEn: "German verb conjugation in present tense",
      learnPrepositions: "Предлоги",
      learnPrepositionsDe: "Verben mit Präpositionen lernen",
      learnPrepositionsEn: "Learn verbs with prepositions",
      learnDeclension: "Склонение",
      learnDeclensionDe: "Adjektive in allen Fällen deklinieren",
      learnDeclensionEn: "Decline adjectives in all cases",
      learnQuestions: "Вопросы",
      learnQuestionsDe: "Deutsche Fragen richtig stellen",
      learnQuestionsEn: "Ask German questions correctly",
      numbersDescription: "Изучайте немецкие числа и счет",
      numbersDescriptionDe: "Lernen Sie deutsche Zahlen und Zählen",
      numbersDescriptionEn: "Learn German numbers and counting",
      timeDescription: "Изучайте немецкие выражения времени",
      timeDescriptionDe: "Lernen Sie die deutsche Zeitangabe",
      timeDescriptionEn: "Learn German time expressions",
      dateDescription: "Изучайте немецкие выражения дат",
      dateDescriptionDe: "Lernen Sie deutsche Datumsangaben",
      dateDescriptionEn: "Learn German date expressions",
      weatherDescription: "Основные погодные термины на немецком",
      weatherDescriptionDe: "Grundlegende Wetterbegriffe auf Deutsch",
      weatherDescriptionEn: "Basic weather terms in German",
      articlesDescription: "Изучайте немецкие артикли (der, die, das)",
      articlesDescriptionDe: "Lernen Sie die deutschen Artikel (der, die, das)",
      articlesDescriptionEn: "Learn German articles (der, die, das)",
      pronounsDescription: "Изучайте немецкие личные местоимения",
      pronounsDescriptionDe: "Deutsche Personalpronomen lernen",
      pronounsDescriptionEn: "Learn German personal pronouns",
      verbsDescription: "Немецкое спряжение глаголов в настоящем времени",
      verbsDescriptionDe: "Deutsche Verbkonjugation im Präsens",
      verbsDescriptionEn: "German verb conjugation in present tense",
      prepositionsDescription: "Изучайте глаголы с предлогами",
      prepositionsDescriptionDe: "Verben mit Präpositionen lernen",
      prepositionsDescriptionEn: "Learn verbs with prepositions",
      declensionDescription: "Склоняйте прилагательные во всех падежах",
      declensionDescriptionDe: "Adjektive in allen Fällen deklinieren",
      declensionDescriptionEn: "Decline adjectives in all cases",
      questionsDescription: "Задавайте немецкие вопросы правильно",
      questionsDescriptionDe: "Deutsche Fragen richtig stellen",
      questionsDescriptionEn: "Ask German questions correctly",
      simple: "Просто",
      lingoMeshFeatures: "Функции LingoMesh",
      interactive: "Интерактивно",
      interactiveDescription:
        "Интерактивные упражнения и инструменты обучения для эффективного обучения",
      interactiveDescriptionDe:
        "Interaktive Übungen und Lernwerkzeuge für ein effektives Lernen",
      interactiveDescriptionEn:
        "Interactive exercises and learning tools for effective learning",
      multilingual: "Многоязычный",
      multilingualDescription: "Поддержка нескольких языков и переводов",
      multilingualDescriptionDe:
        "Unterstützung für mehrere Sprachen und Übersetzungen",
      multilingualDescriptionEn:
        "Support for multiple languages and translations",
      dynamic: "Динамичный",
      dynamicDescription:
        "Адаптивный контент и персонализированные пути обучения",
      dynamicDescriptionDe: "Anpassbare Inhalte und personalisierte Lernpfade",
      dynamicDescriptionEn:
        "AI-generated questions and personalized learning paths",
      platformSubtitle:
        "Продвинутая платформа изучения немецкого языка с ИИ и персонализированным контентом",
      platformSubtitleDe:
        "Fortgeschrittene KI-gestützte deutsche Lernplattform mit personalisierten Inhalten",
      platformSubtitleEn:
        "Advanced AI-powered German learning platform with personalized content",
      platformSubtitleEs:
        "Plataforma avanzada de aprendizaje de alemán con IA y contenido personalizado",
      platformSubtitleRu:
        "Продвинутая платформа изучения немецкого языка с ИИ и персонализированным контентом",
      withInteractiveExercises: "С интерактивными упражнениями",
      withInteractiveExercisesDe: "mit interaktiven Übungen",
      withInteractiveExercisesEn: "With interactive exercises",
      bilingual: "Двуязычный",
    },
    quiz: {
      noQuestionsAvailable: "Нет доступных вопросов для викторины",
      noQuestionsAvailableDe: "Keine Quiz-Fragen verfügbar",
      reset: "Сбросить",
      resetDe: "Zurücksetzen",
      nextQuestion: "Следующий Вопрос",
      nextQuestionDe: "Nächste Frage",
    },
    widgets: {
      zahlenkonverter: "Конвертер Чисел",
      einstellungen: "Настройки",
      datum: "Дата",
      datumAufDeutsch: "Дата",
      zeit: "Время",
      zeitEinstellen: "Время",
      wetter: "Погода",
      wetterAufDeutsch: "Погода",
      praesensVerb: "Спряжение Глаголов",
      artikel: "Немецкие Артикли",
      personalpronomen: "Немецкие Личные Местоимения",
      fragen: "Немецкие Вопросы",
      verbenPraepositionen: "Немецкие Глаголы и Предлоги",
      verbzeiten: "Времена Глаголов",
      adjektivdeklination: "Немецкое Склонение Прилагательных",
      basicNumbers: "Основные Числа",
      ordinalNumbers: "Порядковые Числа",
      quiz: "Викторина",
      quizNumbers: "Викторина по Числам",
      quizDate: "Викторина по Датам",
      quizTime: "Викторина по Времени",
      quizWeather: "Викторина по Погоде",
      quizVerbs: "Викторина по Глаголам",
      quizArticles: "Викторина по Артиклям",
      quizPronouns: "Викторина по Личным Местоимениям",
      quizQuestions: "Викторина по Вопросам",
      quizPrepositions: "Викторина по Предлогам",
      quizDeclension: "Викторина по Склонению",
      numberConverterDescription: "Конвертируйте числа в немецкие слова",
      quizDescription: "Проверьте свои знания с интерактивными викторинами",
    },
    ui: {
      listen: "Слушать",
      hoeren: "Слушать",
      beispiele: "Примеры",
      formel: "Формула",
      beispiel: "Пример",
      schnelleTipps: "Быстрые Советы",
      quickTips: "Быстрые Советы",
      perfektTipps: "Советы по Перфекту",
      perfektTips: "Советы по Перфекту",
      praesensVerwendung: "Использование Настоящего Времени",
      praesensUsage: "Использование Настоящего Времени",
      verwendeHaben: "Используйте 'haben':",
      useHaben: "Используйте 'haben':",
      verwendeSein: "Используйте 'sein':",
      useSein: "Используйте 'sein':",
      meisteVerben: "Большинство глаголов (учить, читать, спать)",
      mostVerbs: "Большинство глаголов (учить, читать, спать)",
      bewegungsverben:
        "Глаголы движения (идти, ехать, лететь) и изменения состояния (становиться, умирать)",
      movementVerbs:
        "Глаголы движения (идти, ехать, лететь) и изменения состояния (становиться, умирать)",
      zustaendsaenderungen: "Изменения состояния (становиться, умирать)",
      stateChanges: "Изменения состояния (становиться, умирать)",
      gegenwaertigeHandlungen:
        "Используется для настоящих действий, привычек и общих истин.",
      presentActions:
        "Используется для настоящих действий, привычек и общих истин.",
      gewohnheiten: "Привычки",
      habits: "Привычки",
      allgemeineWahrheiten: "Общие истины",
      generalTruths: "Общие истины",
      wFragen: "W-Вопросы:",
      jaNeinFragen: "Да/Нет Вопросы:",
      formalVsInformal: "Формальный vs Неформальный:",
      wFragenBeschreibung:
        "Начинаются с W-слов (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      wQuestionsDescription:
        "Начинаются с W-слов (Was, Wo, Wann, Warum, Wie, Wer, Wen, Wem)",
      jaNeinBeschreibung: "Глагол идет первым, подлежащее вторым",
      yesNoDescription: "Глагол идет первым, подлежащее вторым",
      formalBeschreibung:
        "Используйте 'Sie' для формального, 'du' для неформального",
      formalDescription:
        "Используйте 'Sie' для формального, 'du' для неформального",
      uebersetzungen: "Переводы",
      translations: "Переводы",
      englishTranslationsVisible: "Английские переводы видны",
      englishTranslationsShow: "Показать английские переводы",
      light: "Светлый",
      dark: "Темный",
      german: "Немецкий",
      english: "Английский",
      spanish: "Испанский",
      russian: "Русский",
      enterNumber: "Введите число",
      enterVerb: "Введите глагол",
      formula: "Формула:",
      examples: "Примеры:",
      settings: "Настройки",
      date: "Дата",
      dateToGerman: "Дата",
      time: "Время",
      setTime: "Время",
      weatherToGerman: "Погода",
      numberConverter: "Конвертер Чисел",
      presentVerb: "Спряжение Глаголов",
      articles: "Немецкие Артикли",
      personalPronouns: "Немецкие Личные Местоимения",
      questions: "Немецкие Вопросы",
      verbsPrepositions: "Немецкие Глаголы и Предлоги",
      verbTenses: "Времена Глаголов",
      adjectiveDeclension: "Немецкое Склонение Прилагательных",
      colorLegend: "Цветовое Кодирование:",
      units: "Единицы",
      tens: "Десятки",
      hundreds: "Сотни",
      thousands: "Тысячи",
      millions: "Миллионы",
      connectors: "Соединители",
      numberRangeError: "Пожалуйста, введите число от 0 до 999,999,999",
    },
    weather: {
      wetterdatenFehler: "Данные о погоде не удалось загрузить",
      weatherDataError: "Weather data could not be loaded",
      stadtAuswaehlen: "Выбрать город",
      stadtWaehlen: "Выбрать город (получить погоду)",
      selectCity: "Select city",
      selectCityLabel: "Select city (get weather)",
      temperatur: "Температура",
      temperature: "Temperature",
      luftfeuchtigkeit: "Влажность",
      humidity: "Humidity",
      windgeschwindigkeit: "Скорость Ветра",
      windSpeed: "Wind Speed",
      beschreibung: "Описание",
      description: "Description",
    },
    time: {
      heuteIst: "Сегодня",
      todayIs: "Today is",
      der: "the",
      the: "the",
      format24h: "24ч Формат",
      format12h: "12ч Формат",
      klickenZumAendern: "Настроить время (клик)",
      clickToChange: "Click to change time",
      datumAendern: "Настроить дату (клик)",
      clickToChangeDate: "Настроить дату (клик)",
    },
    numbers: {
      basicNumbersTitle: "Основные Числа",
      basicNumbersSubtitle: "Самые важные числа в немецком языке",
      numberRulesTitle: "Правила Чисел",
      numberRulesSubtitle: "Важные правила для немецких чисел",
      ordinalNumbersTitle: "Порядковые Числа",
      ordinalNumbersSubtitle:
        "Первый, второй, третий... Изучите порядковые числа",
      numberRules: [
        {
          title: "Единицы идут первыми",
          description:
            "В двузначных числах единицы произносятся перед десятками: 21 = einundzwanzig",
          example: "21 → ein-und-zwanzig",
        },
        {
          title: "Тридцать отличается",
          description: "30 называется 'dreißig', а не 'dreizig'",
          example: "30 → dreißig",
        },
        {
          title: "Сто без 'ein'",
          description: "100 просто 'hundert', а не 'einhundert'",
          example: "100 → hundert",
        },
        {
          title: "Порядковые числа оканчиваются на -te",
          description:
            "Порядковые числа обычно оканчиваются на -te: erste, zweite, dritte",
          example: "1. → erste, 2. → zweite",
        },
      ],
    },
  },
};

export const useTranslation = (language: Language) => {
  return translations[language];
};
