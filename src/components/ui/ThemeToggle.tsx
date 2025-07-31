import React from "react";

interface ThemeToggleProps {
  themeMode: string;
  handleThemeChange: (theme: string) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  themeMode,
  handleThemeChange,
}) => {
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    handleThemeChange(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center transition-all duration-300 ease-in-out touch-manipulation bg-neutral-100/80 dark:bg-neutral-800/80 rounded-md p-1 border border-neutral-200/60 dark:border-neutral-600/60 w-10 h-10 sm:w-12 sm:h-10 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 hover:scale-105 active:scale-95"
      title={
        themeMode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    >
      <svg
        className="fill-current transition-all duration-1000 ease-in-out w-4 h-4 sm:w-5 sm:h-5 transform theme-toggle-icon"
        viewBox="0 0 20 20"
        style={{
          transform: themeMode === "light" ? "rotate(0deg)" : "rotate(180deg)",
        }}
      >
        {themeMode === "light" ? (
          <path
            className="transition-all duration-1000 ease-in-out"
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
        ) : (
          <path
            className="transition-all duration-1000 ease-in-out"
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
