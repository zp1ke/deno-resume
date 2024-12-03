import Language from "../islands/languague.tsx";
import ThemeMode from "../islands/themeMode.tsx";
import { Lang, Theme } from "../utils/types.ts";

interface MenuProps {
  lang: Lang;
  theme: Theme;
}

const Menu = (props: MenuProps) => (
  <div class="flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:-mb-4 md:gap-1 md:mt-0">
    <Language lang={props.lang} />
    <ThemeMode theme={props.theme} />
  </div>
);

export default Menu;
