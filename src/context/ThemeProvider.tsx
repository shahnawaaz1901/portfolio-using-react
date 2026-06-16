import { createContext, useEffect, useState } from "react";
import type { Theme, ThemeContext } from "../types/Theme";

export const ThemeCtx = createContext<ThemeContext | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme: Theme) => setTheme(newTheme);
  const toggle = () => setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  );
}
