import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface DeclensionQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const DeclensionQuizWidget: React.FC<DeclensionQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default DeclensionQuizWidget;
