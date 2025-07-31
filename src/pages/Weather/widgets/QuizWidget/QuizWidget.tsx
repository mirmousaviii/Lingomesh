import React from "react";
import { Language } from "../../../../hooks/useTranslations";
import QuizWidget, {
  QuizQuestion,
} from "../../../../components/widgets/QuizWidget/QuizWidget";

interface WeatherQuizWidgetProps {
  language: Language;
  questions: QuizQuestion[];
  subject: string;
}

const WeatherQuizWidget: React.FC<WeatherQuizWidgetProps> = (props) => {
  return <QuizWidget {...props} />;
};

export default WeatherQuizWidget;
