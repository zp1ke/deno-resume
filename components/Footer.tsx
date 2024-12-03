import { i18n, Message } from "../utils/i18n.ts";
import { Lang, Theme } from "../utils/types.ts";

interface FooterProps {
  lang: Lang;
  theme: Theme;
}

const Footer = (props: FooterProps) => {
  const svgSuffix = props.theme === Theme.DARK ? "-dark" : "";
  return (
    <div class="col-span-2 lg:col-span-1 flex gap-1 items-end mt-6 justify-between">
      <div class="flex flex-col items-center gap-2">
        <a href="https://fresh.deno.dev" class="w-15">
          <img
            loading="lazy"
            width="197"
            height="37"
            src={`https://fresh.deno.dev/fresh-badge${svgSuffix}.svg`}
            alt={i18n(props.lang, Message.MadeWithFresh)}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
