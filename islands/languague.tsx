import { langCookie } from "../routes/_middleware.ts";
import { Lang } from "../utils/types.ts";

const Language = (props: { lang: Lang }) => {
  const lang = props.lang;
  return (
    <button
      class="h-4 w-4 text-gray-light font-bold bg-gray-dark rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent hover:border-gray-light"
      type="button"
      onClick={() => {
        let nextLang = Lang.EN;
        if (lang === nextLang) {
          nextLang = Lang.ES;
        }
        document.cookie = `${langCookie}=${nextLang}`;
        location.reload();
      }}
    >
      {lang.toUpperCase()}
    </button>
  );
};

export default Language;
