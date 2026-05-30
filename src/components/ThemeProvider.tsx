"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type Theme = "dark" | "light";

const STORAGE_KEY = "ai-playground-theme";

const ThemeContext = createContext<{
  theme: Theme;
  resolvedTheme: Theme;
  toggle: () => void;
  themeToggleEnabled: boolean;
}>({
  theme: "dark",
  resolvedTheme: "dark",
  toggle: () => {},
  themeToggleEnabled: true,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isFilmStudio = pathname.startsWith("/film-studio");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  const resolvedTheme: Theme = isFilmStudio ? "dark" : theme;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    if (!isFilmStudio) {
      localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme, isFilmStudio, resolvedTheme]);

  const toggle = () => {
    if (isFilmStudio) return;
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        toggle,
        themeToggleEnabled: !isFilmStudio,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
