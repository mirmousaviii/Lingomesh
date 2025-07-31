import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface TimeQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const TimeQuizWidget: React.FC<TimeQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default TimeQuizWidget;
