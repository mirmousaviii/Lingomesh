import React from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";

interface WidgetProps {
  titleKey: keyof import("../../../constants/translations").Translations["widgets"];
  children: React.ReactNode;
  className?: string;
  language: Language;
  headerColor?:
    | "blue"
    | "purple"
    | "green"
    | "orange"
    | "pink"
    | "teal"
    | "emerald"
    | "primary";
  description?: string;
}

const Widget: React.FC<WidgetProps> = ({
  titleKey,
  children,
  className = "",
  language,
  headerColor = "blue",
  description,
}) => {
  const t = useTranslation(language);

  // Color mapping for different header colors
  const getHeaderGradient = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-gradient-to-r from-primary-600 to-accent-600";
      case "blue":
        return "bg-gradient-to-r from-blue-600 to-purple-600";
      case "purple":
        return "bg-gradient-to-r from-purple-600 to-pink-600";
      case "green":
        return "bg-gradient-to-r from-green-600 to-teal-600";
      case "orange":
        return "bg-gradient-to-r from-orange-600 to-red-600";
      case "pink":
        return "bg-gradient-to-r from-pink-600 to-purple-600";
      case "teal":
        return "bg-gradient-to-r from-teal-600 to-blue-600";
      case "emerald":
        return "bg-gradient-to-r from-emerald-600 to-green-600";
      default:
        return "bg-gradient-to-r from-blue-600 to-purple-600";
    }
  };

  return (
    <div
      className={`bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden ${className}`}
    >
      {/* Colored Header */}
      <div className={`${getHeaderGradient(headerColor)} px-6 py-4`}>
        <h3 className="text-xl font-bold text-white">{t.widgets[titleKey]}</h3>
        {description && (
          <p className="text-white/80 mt-1 text-sm">{description}</p>
        )}
      </div>

      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Widget;
