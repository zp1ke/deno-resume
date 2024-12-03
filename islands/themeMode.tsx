import { Theme } from "../utils/types.ts";

const getMode = (): Theme => {
  if (localStorage.theme) {
    return localStorage.theme as Theme;
  }
  const window = globalThis.window;
  if (window) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return Theme.DARK;
    }
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return Theme.LIGHT;
    }
  }
  return Theme.SYSTEM;
};

const updateTheme = () => {
  const theme = getMode();
  if (theme === Theme.DARK) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const nextTheme = (theme: Theme): Theme => {
  const values = [Theme.SYSTEM, Theme.LIGHT, Theme.DARK];
  const themeIndex = values.indexOf(theme);
  const nextIndex = (themeIndex + 1) % values.length;
  return values[nextIndex];
};

const toggleTheme = () => {
  const theme = nextTheme(getMode());
  if (theme === Theme.SYSTEM) {
    delete localStorage.theme;
  } else {
    localStorage.theme = theme;
  }
  updateTheme();
};

const ThemeMode = () => {
  return (
    <button
      class="h-4 w-4 font-bold rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent bg-gray-light dark:bg-gray-dark text-slate-200 dark:text-gray-light hover:border-gray-600"
      type="button"
      onClick={toggleTheme}
    >
      {getMode().toUpperCase()}
    </button>
  );
};

export default ThemeMode;
