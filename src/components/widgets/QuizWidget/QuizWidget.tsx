import React, { useState, useEffect } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useModuleTranslations } from "../../../hooks/useModuleTranslations";
import { QuizTranslations } from "./translations";
import Box from "../../ui/Box/Box";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

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

    if (subjectLower.includes("number") || subjectLower.includes("zahlen")) {
      return "quizNumbers";
    }
    if (subjectLower.includes("date") || subjectLower.includes("datum")) {
      return "quizDate";
    }
    if (subjectLower.includes("time") || subjectLower.includes("zeit")) {
      return "quizTime";
    }
    if (subjectLower.includes("weather") || subjectLower.includes("wetter")) {
      return "quizWeather";
    }
    if (subjectLower.includes("verb")) {
      return "quizVerbs";
    }
    if (subjectLower.includes("article") || subjectLower.includes("artikel")) {
      return "quizArticles";
    }
    if (
      subjectLower.includes("pronoun") ||
      subjectLower.includes("personalpronomen")
    ) {
      return "quizPronouns";
    }
    if (subjectLower.includes("question") || subjectLower.includes("fragen")) {
      return "quizQuestions";
    }
    if (
      subjectLower.includes("preposition") ||
      subjectLower.includes("praeposition")
    ) {
      return "quizPrepositions";
    }
    if (
      subjectLower.includes("declension") ||
      subjectLower.includes("deklination")
    ) {
      return "quizDeclension";
    }

    // Default fallback
    return "quiz";
  };

  const titleKey = getQuizTitleKey(subject);

  const startNewQuestion = () => {
    if (questions.length === 0) return;

    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

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
  }, [questions]);

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
        <div className="text-center py-8">
          <p className="text-neutral-600 dark:text-neutral-400">
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
      <div className="space-y-4">
        {/* Score Display */}
        {totalAnswered > 0 && (
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-md p-4">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">
                  {language === "en" ? "Score:" : "Punkte:"}
                </span>
                <span className="ml-2 font-semibold text-green-600 dark:text-green-400">
                  {score}/{totalAnswered}
                </span>
                <span className="ml-2 text-neutral-500">
                  ({Math.round((score / totalAnswered) * 100)}%)
                </span>
              </div>
              <button
                onClick={resetQuiz}
                className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                {language === "en" ? "Reset" : "Zurücksetzen"}
              </button>
            </div>
          </div>
        )}

        {currentQuestion && (
          <div className="space-y-4">
            {/* Question */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-4">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && checkAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-3 rounded-md border transition-all duration-200 ${
                    showResult
                      ? index === currentQuestion.correctAnswer
                        ? "bg-green-100 dark:bg-green-900/30 border-green-500 dark:border-green-400 text-green-800 dark:text-green-200"
                        : index === selectedAnswer
                        ? "bg-red-100 dark:bg-red-900/30 border-red-500 dark:border-red-400 text-red-800 dark:text-red-200"
                        : "bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-400"
                      : "bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showResult && index === currentQuestion.correctAnswer && (
                      <span className="ml-auto text-green-600 dark:text-green-400">
                        ✓
                      </span>
                    )}
                    {showResult &&
                      index === selectedAnswer &&
                      index !== currentQuestion.correctAnswer && (
                        <span className="ml-auto text-red-600 dark:text-red-400">
                          ✗
                        </span>
                      )}
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600 dark:text-yellow-400 mt-0.5">
                    💡
                  </span>
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                      {language === "en" ? "Explanation:" : "Erklärung:"}
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Next Question Button */}
            {showResult && (
              <button
                onClick={startNewQuestion}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors font-medium"
              >
                {language === "en" ? "Next Question" : "Nächste Frage"}
              </button>
            )}
          </div>
        )}
      </div>
    </Box>
  );
};

export default QuizWidget;
