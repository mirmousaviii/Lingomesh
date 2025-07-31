import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface NumbersQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const NumbersQuizWidget: React.FC<NumbersQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default NumbersQuizWidget;
