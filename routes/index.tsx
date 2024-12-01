import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { Header } from "../components/Header.tsx";
import { Menu } from "../components/Menu.tsx";
import fallbackResume from "../utils/fallbackResume.ts";

const Index = async () => {
  const resumeUrl =
    "https://api.github.com/gists/1afda31f1def931881fb8072a187aaec";
  const resumeResponse = await fetch(resumeUrl);
  try {
    if (resumeResponse.status === 200) {
      const resumeJson = await resumeResponse.json();
      const resume: ResumeSchema = JSON.parse(
        resumeJson.files["resume.json"].content,
      );
      return IndexBody(resume);
    }
    // deno-lint-ignore no-explicit-any
  } catch (e: any) {
    console.error(`Error fetching resume at ${resumeUrl}: ${e}`);
  }
  return IndexBody(fallbackResume);
};

const IndexBody = (resume: ResumeSchema) => {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu />
      <Header resume={resume} />
    </div>
  );
};

export default Index;
