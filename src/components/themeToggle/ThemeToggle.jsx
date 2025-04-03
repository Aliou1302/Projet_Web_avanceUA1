"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Vérifie si le thème est déjà défini dans le localStorage
  if (theme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>
    );
  }

  // Si le thème est "light", on affiche l'icône de lune
  if (theme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>
    );
  }
};

export default ThemeToggle;
