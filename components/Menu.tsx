import Language from "../islands/languague.tsx";
import { Lang } from "../utils/types.ts";

const Menu = (props: { lang: Lang }) => (
  <div class="flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:-mb-4 md:gap-1 md:mt-0">
    <Language lang={props.lang} />
  </div>
);

export default Menu;
