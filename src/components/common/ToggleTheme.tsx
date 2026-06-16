import { useTheme } from "@/hooks/useTheme";
import { Button } from "./Button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, toggle } = useTheme();
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        aria-label="Toggle theme"
        className="rounded-full"
      >
        {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </Button>
    </>
  );
};
