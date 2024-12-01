import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";
import Skills from "../components/Skills.tsx";
import { fetchResume } from "../utils/resume.ts";

const Index = async () => {
  const resume = await fetchResume();
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu />
      <Header resume={resume} />
      <Skills resume={resume} />
    </div>
  );
};

export default Index;
