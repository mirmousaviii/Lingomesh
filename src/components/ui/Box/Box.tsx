import React, { ReactNode } from "react";
import { Language } from "../../../hooks/useTranslations";
import { useTranslation } from "../../../constants/translations";
import { useFullscreen } from "../../../hooks/useFullscreen";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";

interface BoxProps {
  children: ReactNode;
  className?: string;
  language?: Language;
  titleKey?: keyof import("../../../constants/translations").Translations["widgets"];
  title?: string;
  description: string; // Required description
  headerColor?:
    | "blue"
    | "purple"
    | "green"
    | "orange"
    | "pink"
    | "teal"
    | "emerald"
    | "primary"
    | "none";
  padding?: "none" | "small" | "medium" | "large";
  border?: boolean;
  shadow?: "none" | "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large";
  background?: "white" | "transparent" | "neutral" | "primary" | "accent";
  showFullscreenButton?: boolean;
  fullscreenEnabled?: boolean;
}

const Box: React.FC<BoxProps> = ({
  children,
  className = "",
  language,
  titleKey,
  title,
  description,
  headerColor = "primary",
  padding = "medium",
  border = true,
  shadow = "medium",
  rounded = "small",
  background = "white",
  showFullscreenButton = true,
  fullscreenEnabled = true,
}) => {
  const t = useTranslation(language || "en");

  // Use the custom fullscreen hook
  const { isFullscreen, toggleFullscreen } = useFullscreen({
    enabled: fullscreenEnabled,
  });

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
      case "none":
        return "";
      default:
        return "bg-gradient-to-r from-blue-600 to-purple-600";
    }
  };

  // Padding classes
  const getPaddingClass = (padding: string) => {
    switch (padding) {
      case "none":
        return "";
      case "small":
        return "p-3";
      case "medium":
        return "p-6";
      case "large":
        return "p-8";
      default:
        return "p-6";
    }
  };

  // Shadow classes
  const getShadowClass = (shadow: string) => {
    switch (shadow) {
      case "none":
        return "";
      case "small":
        return "shadow-sm";
      case "medium":
        return "shadow-xl";
      case "large":
        return "shadow-2xl";
      default:
        return "shadow-xl";
    }
  };

  // Rounded classes
  const getRoundedClass = (rounded: string) => {
    switch (rounded) {
      case "none":
        return "";
      case "small":
        return "rounded-lg";
      case "medium":
        return "rounded-xl";
      case "large":
        return "rounded-2xl";
      default:
        return "rounded-2xl";
    }
  };

  // Background classes
  const getBackgroundClass = (background: string) => {
    switch (background) {
      case "white":
        return "bg-white dark:bg-neutral-900";
      case "transparent":
        return "bg-transparent";
      case "neutral":
        return "bg-neutral-50 dark:bg-neutral-800";
      case "primary":
        return "bg-primary-50 dark:bg-primary-900/20";
      case "accent":
        return "bg-accent-50 dark:bg-accent-900/20";
      default:
        return "bg-white dark:bg-neutral-900";
    }
  };

  // Border classes
  const getBorderClass = (border: boolean) => {
    return border ? "border border-neutral-200 dark:border-neutral-700" : "";
  };

  const displayTitle = title || (titleKey && t.widgets[titleKey]) || "";

  // Validate that we have a title
  if (!displayTitle) {
    throw new Error("Box component requires either 'title' or 'titleKey' prop");
  }

  // Fullscreen container styles
  const getFullscreenStyles = () => {
    if (!isFullscreen) return "";

    return `
      fixed inset-0 z-[9999] 
      bg-white dark:bg-neutral-900 
      flex flex-col
      transition-all duration-300 ease-in-out
      backdrop-blur-sm
      m-0 p-0 !mt-0 !pt-0
    `;
  };

  // Content container styles for fullscreen
  const getContentStyles = () => {
    if (!isFullscreen) return "";

    return `
      flex-1 overflow-auto
      p-6
      bg-white dark:bg-neutral-900
    `;
  };

  return (
    <div
      className={`
        ${getBackgroundClass(background)}
        ${getRoundedClass(rounded)}
        ${getShadowClass(shadow)}
        ${getBorderClass(border)}
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${getFullscreenStyles()}
        ${className}
      `}
    >
      {/* Header - Always shown */}
      <div
        className={`${getHeaderGradient(
          headerColor
        )} px-6 py-4 relative flex-shrink-0`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{displayTitle}</h3>
            <p className="text-white/80 mt-1 text-sm">{description}</p>
          </div>
          {showFullscreenButton && fullscreenEnabled && (
            <button
              onClick={toggleFullscreen}
              className={`
                ml-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20
                ${
                  isFullscreen
                    ? "p-3 text-white rounded-md shadow-lg hover:shadow-xl transform hover:scale-110 border-2 border-white/20"
                    : "p-2 text-white/80 hover:text-white rounded-md hover:bg-white/10 hover:scale-110"
                }
              `}
              title={
                isFullscreen ? "Exit fullscreen (Esc)" : "Enter fullscreen"
              }
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="w-6 h-6" />
              ) : (
                <ArrowsPointingOutIcon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`${getPaddingClass(padding)} ${getContentStyles()}`}>
        {children}
      </div>
    </div>
  );
};

export default Box;
