import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface ArticlesQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const ArticlesQuizWidget: React.FC<ArticlesQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default ArticlesQuizWidget;
