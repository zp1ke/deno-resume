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
  return (
    <button
      class="h-4 w-4 font-bold rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent bg-gray-light dark:bg-gray-dark text-slate-200 dark:text-gray-light hover:border-gray-600"
      type="button"
      onClick={() => {
        const value = nextTheme(props.theme);
        document.cookie = `${themeCookie}=${value}`;
        location.reload();
      }}
    >
      <img
        class="w-full"
        loading="lazy"
        src={`/theme-${props.theme.toLowerCase()}.svg`}
        alt={props.theme}
      />
    </button>
  );
};

export default ThemeMode;
