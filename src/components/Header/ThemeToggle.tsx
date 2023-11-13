"use client";

import { Switch } from "@/components/ui";
import { useTheme } from "@/providers";
import { Moon, Sun } from "lucide-react";

const iconClasses =
  "absolute left-1/2 top-1/2 h-4 w-4 translate-x-[-50%] translate-y-[-50%]";

export default function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Switch checked={theme === "dark"} onCheckedChange={toggleTheme}>
      {theme === "dark" ? (
        <Moon className={iconClasses} />
      ) : (
        <Sun className={iconClasses} />
      )}
    </Switch>
  );
}
