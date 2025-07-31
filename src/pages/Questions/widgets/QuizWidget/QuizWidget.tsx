import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface QuestionsQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const QuestionsQuizWidget: React.FC<QuestionsQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default QuestionsQuizWidget;
