import { useContext } from "react";
import { ThemeCtx } from "../context/ThemeProvider";
import type { ThemeContext } from "../types/Theme";

export const useTheme = () => {
  const ctx = useContext<ThemeContext | null>(ThemeCtx);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { toggle, theme } = ctx;
  return { toggle, theme };
};
