import { useState, useEffect } from "react";

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    let themeModeToUse = savedThemeMode || "system";

    // If no saved theme or system theme, use system preference as default
    if (!savedThemeMode || savedThemeMode === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      themeModeToUse = systemTheme;
      // Save the resolved system theme
      localStorage.setItem("themeMode", systemTheme);
    }

    setThemeMode(themeModeToUse);
    applyTheme(themeModeToUse);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Only apply system changes if no explicit theme is set
      const savedTheme = localStorage.getItem("themeMode");
      if (!savedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setThemeMode(newTheme);
        localStorage.setItem("themeMode", newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const applyTheme = (newThemeMode: string) => {
    const themeToApply = newThemeMode;
    document.documentElement.setAttribute("data-theme", themeToApply);
    if (themeToApply === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleThemeChange = (newThemeMode: string) => {
    setThemeMode(newThemeMode);
    localStorage.setItem("themeMode", newThemeMode);
    applyTheme(newThemeMode);
  };

  return { themeMode, handleThemeChange };
};
