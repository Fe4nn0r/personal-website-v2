import { useEffect, useState } from "react";

type IColor = "light" | "dark";

function useDarkMode() {
  let defaultTheme: IColor = "dark";
  const HAS_WINDOW =
    typeof window !== "undefined" && typeof localStorage !== "undefined";

  if (HAS_WINDOW && localStorage.theme) {
    const fromLocalStorage = localStorage.getItem("theme");
    if (fromLocalStorage === "light" || fromLocalStorage === "dark") {
      defaultTheme = fromLocalStorage;
    }
  } else if (
    HAS_WINDOW &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    defaultTheme = "dark";
  }

  const [theme, setTheme] = useState<IColor>(defaultTheme);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    if (!HAS_WINDOW) {
      return;
    }
    function onChange(event: MediaQueryListEvent) {
      const newColorScheme = event.matches ? "dark" : "light";
      setTheme(newColorScheme);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", onChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("dark");
    root.classList.remove("light");
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
