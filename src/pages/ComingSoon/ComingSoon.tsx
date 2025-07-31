import React from "react";
import { Language } from "../../hooks/useTranslations";

interface ComingSoonProps {
  language: Language;
  onPageChange: (page: string) => void;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ language, onPageChange }) => {
  // Generate random progress between 50% and 80%
  const randomProgress = Math.floor(Math.random() * (80 - 50 + 1)) + 50;

  // Translations map for cleaner code
  const translations = {
    de: {
      title: "Bald verfügbar",
      subtitle: "Diese Seite wird bald verfügbar sein.",
      description:
        "Wir entwickeln kontinuierlich neue Lernmodule und Funktionen. Diese Seite wird bald mit interaktiven Übungen, Beispielen und Lernmaterialien gefüllt sein.",
      features: {
        interactive: "Interaktive Übungen",
        audio: "Audio-Beispiele",
        explanations: "Detaillierte Erklärungen",
        quizzes: "Quiz und Tests",
      },
      development: "Entwicklung",
      backButton: "Zurück",
      availablePages: "Einige verfügbare Seiten",
      numbers: "Zahlen",
      time: "Zeit",
      date: "Datum",
      weather: "Wetter",
    },
    en: {
      title: "Coming Soon",
      subtitle: "This page will be available soon.",
      description:
        "We are continuously developing new learning modules and features. This page will soon be filled with interactive exercises, examples, and learning materials.",
      features: {
        interactive: "Interactive Exercises",
        audio: "Audio Examples",
        explanations: "Detailed Explanations",
        quizzes: "Quizzes & Tests",
      },
      development: "Development",
      backButton: "Go Back",
      availablePages: "Some Available Pages",
      numbers: "Numbers",
      time: "Time",
      date: "Date",
      weather: "Weather",
    },
    es: {
      title: "Próximamente",
      subtitle: "Esta página estará disponible pronto.",
      description:
        "Estamos desarrollando continuamente nuevos módulos de aprendizaje y funciones. Esta página pronto estará llena de ejercicios interactivos, ejemplos y materiales de aprendizaje.",
      features: {
        interactive: "Ejercicios Interactivos",
        audio: "Ejemplos de Audio",
        explanations: "Explicaciones Detalladas",
        quizzes: "Cuestionarios y Pruebas",
      },
      development: "Desarrollo",
      backButton: "Volver",
      availablePages: "Algunas Páginas Disponibles",
      numbers: "Números",
      time: "Tiempo",
      date: "Fecha",
      weather: "Clima",
    },
    ru: {
      title: "Скоро",
      subtitle: "Эта страница скоро будет доступна.",
      description:
        "Мы постоянно разрабатываем новые учебные модули и функции. Эта страница скоро будет наполнена интерактивными упражнениями, примерами и учебными материалами.",
      features: {
        interactive: "Интерактивные упражнения",
        audio: "Аудио примеры",
        explanations: "Подробные объяснения",
        quizzes: "Викторины и тесты",
      },
      development: "Разработка",
      backButton: "Назад",
      availablePages: "Некоторые доступные страницы",
      numbers: "Числа",
      time: "Время",
      date: "Дата",
      weather: "Погода",
    },
  };

  // Get translations with fallback to English
  const t = translations[language] ?? translations.en;

  return (
    <div className="min-h-full bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center w-full">
        {/* Icon */}
        <div className="mb-8">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-accent-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            {/* Animated dots */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full animate-pulse"></div>
            <div
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-600 via-accent-600 to-accent-800 bg-clip-text text-transparent tracking-tight font-inter font-smooth mb-6">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 font-medium">
          {t.subtitle}
        </p>

        {/* Description */}
        <div className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-md p-8 shadow-xl border border-neutral-200/60 dark:border-neutral-600/60 mb-8">
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            <span>{t.development}</span>
            <span>{randomProgress}%</span>
          </div>
          <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-600 h-3 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${randomProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Available Pages Links */}
        <div className="bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-md p-6 shadow-lg border border-neutral-200/40 dark:border-neutral-600/40">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-primary-600 via-accent-600 to-accent-800 bg-clip-text text-transparent mb-4">
            {t.availablePages}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => onPageChange("numbers")}
              className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 rounded-md
               transition-all duration-200 transform  border border-blue-200/50 dark:border-blue-700/50"
            >
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium text-blue-700 dark:text-blue-300">
                {t.numbers}
              </span>
            </button>

            <button
              onClick={() => onPageChange("time")}
              className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 hover:from-green-100 hover:to-green-200 dark:hover:from-green-800/30 dark:hover:to-green-700/30 rounded-md
               transition-all duration-200 transform  border border-green-200/50 dark:border-green-700/50"
            >
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium text-green-700 dark:text-green-300">
                {t.time}
              </span>
            </button>

            <button
              onClick={() => onPageChange("date")}
              className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/30 dark:hover:to-purple-700/30 rounded-md transition-all duration-200 transform  border border-purple-200/50 dark:border-purple-700/50"
            >
              <svg
                className="w-5 h-5 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium text-purple-700 dark:text-purple-300">
                {t.date}
              </span>
            </button>

            <button
              onClick={() => onPageChange("weather")}
              className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 hover:from-cyan-100 hover:to-cyan-200 dark:hover:from-cyan-800/30 dark:hover:to-cyan-700/30 rounded-md transition-all duration-200 transform border border-cyan-200/50 dark:border-cyan-700/50"
            >
              <svg
                className="w-5 h-5 text-cyan-600 dark:text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <span className="font-medium text-cyan-700 dark:text-cyan-300">
                {t.weather}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
