import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { fetchGistContent } from "./githubClient.ts";
import { EnumDictionary, Lang } from "./types.ts";

const gistsIds: EnumDictionary<Lang, string> = {
  [Lang.EN]: "1afda31f1def931881fb8072a187aaec",
  [Lang.ES]: "1afda31f1def931881fb8072a187aaec",
};

export const fetchResume = async (lang: Lang): Promise<ResumeSchema> => {
  try {
    const gistId = gistsIds[lang];
    const content = await fetchGistContent(gistId);
    return JSON.parse(content);
    // deno-lint-ignore no-explicit-any
  } catch (e: any) {
    console.error(`Error fetching resume: ${e}`);
    return fallbackResume;
  }
};

const fallbackResume: ResumeSchema = {
  basics: {
    name: "Michel Atucha",
    phone: "+593 93 941 9677",
    label: "Software Developer",
    image: "https://avatars.githubusercontent.com/u/6463472?v=4",
    summary:
      "I’m a Software Developer with a decade’s experience in building web and mobile applications. I’m always interested in devising a better problem‐solving method for challenging tasks and learning new technologies and tools.",
    website: "https://sp1ke.dev",
    url: "https://sp1ke.dev",
    email: "zp1ke@outlook.com",
    location: {
      city: "Quito",
      countryCode: "EC",
    },
    profiles: [
      {
        url: "https://github.com/zp1ke",
        username: "zp1ke",
        network: "github",
      },
      {
        "url": "https://www.linkedin.com/in/zp1ke",
        username: "zp1ke",
        network: "linkedin",
      },
      {
        "url": "https://g.dev/zp1ke",
        username: "zp1ke",
        network: "google",
      },
    ],
  },
  skills: [
    {
      keywords: [
        "HTML / JSX",
        "Javascript / Typescript",
        "React",
        "Flutter",
      ],
      level: "Senior",
      name: "Frontend",
    },
    {
      keywords: [
        "Node JS",
        "Java",
        "SpringBoot",
      ],
      level: "Senior",
      name: "Backend",
    },
  ],
};
