import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";

interface WidgetProps {
  titleKey: keyof import("../../../constants/translations").Translations["widgets"];
  children: React.ReactNode;
  className?: string;
  language: Language;
}

const Widget: React.FC<WidgetProps> = ({
  titleKey,
  children,
  className = "",
  language,
}) => {
  const t = useTranslation(language);

  return (
    <div
      className={`bg-white/90 dark:bg-neutral-800/90 backdrop-blur-lg border border-white/30 dark:border-neutral-700/30 rounded-md shadow-medium hover:shadow-strong transition-all duration-300 h-full flex flex-col p-6 animate-scale-in ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-space-grotesk">
            {t.widgets[titleKey]}
          </h3>
        </div>
      </div>

      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Widget;
