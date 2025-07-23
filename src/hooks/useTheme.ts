import { useState, useEffect } from "react";

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState("system");

  useEffect(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    let themeModeToUse = savedThemeMode || "system";

    setThemeMode(themeModeToUse);
    applyTheme(themeModeToUse);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (themeMode === "system") {
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode]);

  const applyTheme = (newThemeMode: string) => {
    let themeToApply = "light";
    if (newThemeMode === "system") {
      themeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      themeToApply = newThemeMode;
    }
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
