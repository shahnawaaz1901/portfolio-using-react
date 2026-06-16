export type Theme = "dark" | "light";

export interface ThemeContext {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
  toggle: () => void;
}

