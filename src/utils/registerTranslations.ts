import { registerTranslationModule } from "./i18n";
import { numbersTranslations } from "../pages/Numbers/translations";
import { numberConverterTranslations } from "../components/widgets/NumberConverterWidget/translations";
import { quizTranslations } from "../components/widgets/QuizWidget/translations";
import { uiTranslations } from "../components/ui/translations";

// Register all translation modules
export function registerAllTranslations() {
  registerTranslationModule("numbers", numbersTranslations);
  registerTranslationModule("numberConverter", numberConverterTranslations);
  registerTranslationModule("quiz", quizTranslations);
  registerTranslationModule("ui", uiTranslations);
}
