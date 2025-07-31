import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  convertMultilingualQuestions,
} from "../../../../components/widgets/QuizWidget/QuizWidget";
import { questionsQuizQuestions } from "../../../../data/quizData";

interface GermanQuestionsWidgetProps {
  language: Language;
}

const GermanQuestionsWidget: React.FC<GermanQuestionsWidgetProps> = ({
  language,
}) => {
  const questions = convertMultilingualQuestions(
    questionsQuizQuestions,
    language
  );

  return (
    <QuizWidget
      language={language}
      questions={questions}
      subject={language === "de" ? "Fragen" : "Questions"}
    />
  );
};

export default GermanQuestionsWidget;
