import React, { useState, useEffect, useCallback } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useModuleTranslations } from "../../../hooks/useModuleTranslations";
import { QuizTranslations } from "./translations";
import Box from "../../ui/Box/Box";

export interface MultilingualQuizQuestion {
  question: {
    en: string;
    de: string;
    es: string;
    ru: string;
  };
  options: {
    en: string[];
    de: string[];
    es: string[];
    ru: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string;
    de: string;
    es: string;
    ru: string;
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Utility function to convert multilingual questions to language-specific format
export const convertMultilingualQuestions = (
  multilingualQuestions: MultilingualQuizQuestion[],
  language: Language
): QuizQuestion[] => {
  return multilingualQuestions.map((mq) => ({
    question: mq.question[language],
    options: mq.options[language],
    correctAnswer: mq.correctAnswer,
    explanation: mq.explanation[language],
  }));
};

interface QuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const QuizWidget: React.FC<QuizWidgetProps> = ({
  language,
  questions,
  subject,
}) => {
  const t = useModuleTranslations<QuizTranslations>("quiz", language);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(
    null
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Get specific quiz title based on subject
  const getQuizTitleKey = (
    subject: string
  ): keyof import("../../../constants/translations").Translations["widgets"] => {
    const subjectLower = subject.toLowerCase();

    const titleMap: Record<
      string,
      keyof import("../../../constants/translations").Translations["widgets"]
    > = {
      number: "quizNumbers",
      zahlen: "quizNumbers",
      date: "quizDate",
      datum: "quizDate",
      time: "quizTime",
      zeit: "quizTime",
      weather: "quizWeather",
      wetter: "quizWeather",
      verb: "quizVerbs",
      article: "quizArticles",
      artikel: "quizArticles",
      pronoun: "quizPronouns",
      personalpronomen: "quizPronouns",
      question: "quizQuestions",
      fragen: "quizQuestions",
      preposition: "quizPrepositions",
      praeposition: "quizPrepositions",
      declension: "quizDeclension",
      deklination: "quizDeclension",
    };

    for (const [key, value] of Object.entries(titleMap)) {
      if (subjectLower.includes(key)) {
        return value;
      }
    }

    return "quiz";
  };

  const titleKey = getQuizTitleKey(subject);

  const startNewQuestion = useCallback(() => {
    if (questions.length === 0) return;

    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [questions]);

  const checkAnswer = (answerIndex: number) => {
    if (!currentQuestion) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setTotalAnswered((prev) => prev + 1);

    if (answerIndex === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setTotalAnswered(0);
    startNewQuestion();
  };

  useEffect(() => {
    startNewQuestion();
  }, [startNewQuestion]);

  if (questions.length === 0) {
    return (
      <Box
        titleKey={titleKey}
        language={language}
        headerColor="purple"
        description={
          t?.description || "Test your knowledge with interactive quizzes"
        }
      >
        <div className="text-center py-8 px-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            {t?.noQuestionsAvailable || "No quiz questions available"}
          </p>
        </div>
      </Box>
    );
  }

  return (
    <Box
      titleKey={titleKey}
      language={language}
      headerColor="purple"
      description={
        t?.description || "Test your knowledge with interactive quizzes"
      }
    >
      <div className="space-y-4 px-2 sm:px-0">
        {/* Score Display */}
        <div className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
            <div className="text-sm">
              <span className="text-neutral-600 dark:text-neutral-400">
                {t?.score || "Score:"}
              </span>
              <span className="ml-2 font-semibold text-green-600 dark:text-green-400">
                {totalAnswered > 0 ? `${score}/${totalAnswered}` : "0/0"}
              </span>
              <span className="ml-2 text-neutral-500">
                {totalAnswered > 0
                  ? `(${Math.round((score / totalAnswered) * 100)}%)`
                  : "(0%)"}
              </span>
            </div>
            <button
              onClick={resetQuiz}
              className="text-sm px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors w-full sm:w-auto"
            >
              {t?.reset || "Reset"}
            </button>
          </div>
        </div>

        {currentQuestion && (
          <div className="space-y-4">
            {/* Question */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-medium text-blue-900 dark:text-blue-100 mb-2 leading-relaxed">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options - Responsive Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && checkAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-3 sm:p-4 rounded-md border transition-all duration-200 ${
                    showResult
                      ? index === currentQuestion.correctAnswer
                        ? "bg-green-100 dark:bg-green-900/30 border-green-500 dark:border-green-400 text-green-800 dark:text-green-200"
                        : index === selectedAnswer
                        ? "bg-red-100 dark:bg-red-900/30 border-red-500 dark:border-red-400 text-red-800 dark:text-red-200"
                        : "bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400"
                      : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-medium mt-0.5">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-sm sm:text-base leading-relaxed">
                      {option}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {showResult &&
                        index === currentQuestion.correctAnswer && (
                          <span className="text-green-600 dark:text-green-400 text-lg">
                            ✓
                          </span>
                        )}
                      {showResult &&
                        index === selectedAnswer &&
                        index !== currentQuestion.correctAnswer && (
                          <span className="text-red-600 dark:text-red-400 text-lg">
                            ✗
                          </span>
                        )}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 sm:p-4">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0">
                  💡
                </span>
                <div className="flex-1">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1 text-sm sm:text-base">
                    {t?.explanation || "Explanation:"}
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
                    {showResult
                      ? currentQuestion.explanation
                      : "Select an answer to see the explanation"}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Question Button */}
            <button
              onClick={startNewQuestion}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium text-sm sm:text-base"
            >
              {t?.nextQuestion || "Next Question"}
            </button>
          </div>
        )}
      </div>
    </Box>
  );
};

export default QuizWidget;
