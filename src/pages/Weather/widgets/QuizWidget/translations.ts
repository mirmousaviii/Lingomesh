import { createTranslations } from "../../../../utils/i18n";

export interface QuizTranslations {
  description: string;
  noQuestionsAvailable: string;
  score: string;
  reset: string;
}

export const quizTranslations = createTranslations<QuizTranslations>({
  en: {
    description: "Test your knowledge with interactive quizzes",
    noQuestionsAvailable: "No quiz questions available",
    score: "Score:",
    reset: "Reset",
  },
  de: {
    description: "Testen Sie Ihr Wissen mit interaktiven Quiz",
    noQuestionsAvailable: "Keine Quiz-Fragen verfügbar",
    score: "Punkte:",
    reset: "Zurücksetzen",
  },
  es: {
    description: "Prueba tu conocimiento con cuestionarios interactivos",
    noQuestionsAvailable: "No hay preguntas de cuestionario disponibles",
    score: "Puntuación:",
    reset: "Reiniciar",
  },
  ru: {
    description: "Проверьте свои знания с интерактивными викторинами",
    noQuestionsAvailable: "Нет доступных вопросов викторины",
    score: "Счет:",
    reset: "Сбросить",
  },
});
