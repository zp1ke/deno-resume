import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { Header } from "../components/Header.tsx";
import { Menu } from "../components/Menu.tsx";
import fallbackResume from "../utils/fallbackResume.ts";

const Index = async () => {
  const resumeUrl =
    "https://gist.githubusercontent.com/zp1ke/1afda31f1def931881fb8072a187aaec/raw/586177ae5899fab3b05c282c5381cee84c33c5ca/resume.json";
  const resumeResponse = await fetch(resumeUrl);
  try {
    if (resumeResponse.status === 200) {
      const resumeJson = await resumeResponse.text();
      const resume: ResumeSchema = JSON.parse(resumeJson);
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
