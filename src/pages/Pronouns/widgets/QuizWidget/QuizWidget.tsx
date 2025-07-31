import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface PronounsQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const PronounsQuizWidget: React.FC<PronounsQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default PronounsQuizWidget;
