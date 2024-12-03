import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";
import Skills from "../components/Skills.tsx";
import { fetchResume } from "../utils/resume.ts";
import { Lang, Theme } from "../utils/types.ts";

interface IndexData {
  lang: Lang;
  theme: Theme;
  resume: ResumeSchema;
}

export const handler: Handlers<IndexData> = {
  async GET(_req: Request, ctx: FreshContext) {
    const lang = (ctx.state.lang as Lang) || Lang.EN;
    const theme = (ctx.state.theme as Theme) || Theme.LIGHT;
    const resume = await fetchResume(lang);
    const indexData: IndexData = {
      lang: lang,
      theme: theme,
      resume: resume,
    };
    return ctx.render(indexData);
  },
};

const Index = (props: PageProps<IndexData>) => {
  const { lang, theme, resume } = props.data;
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu lang={lang} theme={theme} />
      <Header lang={lang} resume={resume} />
      <Skills lang={lang} resume={resume} />
      <Footer lang={lang} theme={theme} />
    </div>
  );
};

export default Index;
