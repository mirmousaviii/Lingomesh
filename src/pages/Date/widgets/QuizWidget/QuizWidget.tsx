import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface DateQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const DateQuizWidget: React.FC<DateQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default DateQuizWidget;
