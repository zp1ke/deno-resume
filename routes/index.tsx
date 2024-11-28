import { ResumeHeader } from "../components/Header.tsx";
import { ResumeSchema } from "@kurone-kito/jsonresume-types";

export default async function Home() {
  const resumeUrl =
    "https://gist.githubusercontent.com/zp1ke/1afda31f1def931881fb8072a187aaec/raw/586177ae5899fab3b05c282c5381cee84c33c5ca/resume.json";
  const resumeResponse = await fetch(resumeUrl);
  if (resumeResponse.status === 200) {
    const resumeJson = await resumeResponse.text();
    const resumeData: ResumeSchema = JSON.parse(resumeJson);
    return (
      <main>
        <ResumeHeader resume={resumeData} />
      </main>
    );
  }
  return <h1>Json not found, TODO</h1>;
}
