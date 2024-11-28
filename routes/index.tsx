import { Header } from "../components/Header.tsx";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { Menu } from "../components/Menu.tsx";

const Index = async () => {
  const resumeUrl =
    "https://gist.githubusercontent.com/zp1ke/1afda31f1def931881fb8072a187aaec/raw/586177ae5899fab3b05c282c5381cee84c33c5ca/resume.json";
  const resumeResponse = await fetch(resumeUrl);
  if (resumeResponse.status === 200) {
    const resumeJson = await resumeResponse.text();
    const resumeData: ResumeSchema = JSON.parse(resumeJson);
    return (
      <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
        <Menu />
        <Header resume={resumeData} />
      </div>
    );
  }
  return new Response("", {
    status: 307,
    headers: { Location: "/about" },
  });
};

export default Index;
