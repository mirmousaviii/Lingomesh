import { createTranslations } from "../../../utils/i18n";

export interface QuizTranslations {
  description: string;
  noQuestionsAvailable: string;
  score: string;
  reset: string;
  nextQuestion: string;
  explanation: string;
  correct: string;
  incorrect: string;
}

export const quizTranslations = createTranslations<QuizTranslations>({
  en: {
    description: "Test your knowledge with interactive quizzes",
    noQuestionsAvailable: "No quiz questions available",
    score: "Score:",
    reset: "Reset",
    nextQuestion: "Next Question",
    explanation: "Explanation:",
    correct: "Correct!",
    incorrect: "Incorrect!",
  },
  de: {
    description: "Testen Sie Ihr Wissen mit interaktiven Quiz",
    noQuestionsAvailable: "Keine Quiz-Fragen verfügbar",
    score: "Punkte:",
    reset: "Zurücksetzen",
    nextQuestion: "Nächste Frage",
    explanation: "Erklärung:",
    correct: "Richtig!",
    incorrect: "Falsch!",
  },
  es: {
    description: "Prueba tu conocimiento con cuestionarios interactivos",
    noQuestionsAvailable: "No hay preguntas de cuestionario disponibles",
    score: "Puntuación:",
    reset: "Reiniciar",
    nextQuestion: "Siguiente Pregunta",
    explanation: "Explicación:",
    correct: "¡Correcto!",
    incorrect: "¡Incorrecto!",
  },
  ru: {
    description: "Проверьте свои знания с интерактивными викторинами",
    noQuestionsAvailable: "Нет доступных вопросов викторины",
    score: "Счет:",
    reset: "Сбросить",
    nextQuestion: "Следующий Вопрос",
    explanation: "Объяснение:",
    correct: "Правильно!",
    incorrect: "Неправильно!",
  },
});
