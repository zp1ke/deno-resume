import { useMemo, useState } from "preact/hooks";
import { themeCookie } from "../routes/_middleware.ts";
import { Theme } from "../utils/types.ts";

const nextTheme = (theme: Theme): Theme => {
  const values = [Theme.LIGHT, Theme.DARK];
  const themeIndex = values.indexOf(theme);
  const nextIndex = (themeIndex + 1) % values.length;
  return values[nextIndex];
};

interface ThemeModeProps {
  theme: Theme;
}

const ThemeMode = (props: ThemeModeProps) => {
  const [theme, setTheme] = useState(
    props.theme === Theme.DARK ? Theme.DARK : Theme.LIGHT,
  );

  const _render = useMemo(
    () => {
      const window = globalThis.window;
      if (props.theme === Theme.SYSTEM && window && window.matchMedia) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          setTheme(Theme.DARK);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
          document.documentElement.classList.remove("dark");
          setTheme(Theme.LIGHT);
        }
      }
    },
    [],
  );

  return (
    <button
      class="h-4 w-4 font-bold rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent bg-gray-light dark:bg-gray-dark text-slate-200 dark:text-gray-light hover:border-gray-600"
      type="button"
      onClick={() => {
        const value = nextTheme(theme);
        document.cookie = `${themeCookie}=${value}`;
        location.reload();
      }}
    >
      <img
        class="w-full"
        loading="lazy"
        src={`/theme-${theme.toLowerCase()}.svg`}
        alt={theme}
      />
    </button>
  );
};

export default ThemeMode;
