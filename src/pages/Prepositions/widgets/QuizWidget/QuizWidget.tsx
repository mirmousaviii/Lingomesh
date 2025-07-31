import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface PrepositionsQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const PrepositionsQuizWidget: React.FC<PrepositionsQuizWidgetProps> = (
  props
) => {
  return <QuizWidget {...props} />;
};

export default PrepositionsQuizWidget;
