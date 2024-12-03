import { langCookie } from "../routes/_middleware.ts";
import { Lang } from "../utils/types.ts";

export const nextLang = (lang: Lang): Lang => {
  const values = [Lang.EN, Lang.ES];
  const langIndex = values.indexOf(lang);
  const nextIndex = (langIndex + 1) % values.length;
  return values[nextIndex];
};

const Language = (props: { lang: Lang }) => {
  const lang = props.lang;
  return (
    <button
      class="h-4 w-4 font-bold rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent bg-gray-light dark:bg-gray-dark text-slate-200 dark:text-gray-light hover:border-gray-600"
      type="button"
      onClick={() => {
        const value = nextLang(lang);
        document.cookie = `${langCookie}=${value}`;
        location.reload();
      }}
    >
      {lang.toUpperCase()}
    </button>
  );
};

export default Language;
