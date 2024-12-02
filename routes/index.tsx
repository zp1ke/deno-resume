import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";
import Skills from "../components/Skills.tsx";
import { fetchResume } from "../utils/resume.ts";
import { Lang } from "../utils/types.ts";

interface IndexData {
  lang: Lang;
  resume: ResumeSchema;
}

export const handler: Handlers<IndexData> = {
  async GET(_req: Request, ctx: FreshContext) {
    const lang = (ctx.state.lang as Lang) || Lang.EN;
    const resume = await fetchResume(lang);
    return ctx.render({
      lang: lang,
      resume: resume,
    });
  },
};

const Index = (props: PageProps<IndexData>) => {
  const { lang, resume } = props.data;
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu lang={lang} />
      <Header resume={resume} />
      <Skills resume={resume} />
    </div>
  );
};

export default Index;
