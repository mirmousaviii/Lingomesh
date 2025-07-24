import React from "react";

interface AudioButtonProps {
  onClick: () => void;
  title?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const AudioButton: React.FC<AudioButtonProps> = ({
  onClick,
  title = "Listen",
  className = "",
  size = "md",
  disabled = false,
}) => {
  const sizeClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex-shrink-0 rounded-sm bg-primary-100 dark:bg-primary-800 
        hover:bg-primary-200 dark:hover:bg-primary-700 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200 shadow-sm hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${sizeClasses[size]}
        ${className}
      `}
      title={title}
      aria-label={title}
    >
      <svg
        className={`${iconSizes[size]} text-primary-600 dark:text-primary-400`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </button>
  );
};

export default AudioButton;
