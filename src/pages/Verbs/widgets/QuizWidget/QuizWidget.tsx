import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface VerbsQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const VerbsQuizWidget: React.FC<VerbsQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default VerbsQuizWidget;
