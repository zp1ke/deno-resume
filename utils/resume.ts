import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { fetchGistContent } from "./githubClient.ts";
import { EnumDictionary, Lang } from "./types.ts";

const gistId = "1afda31f1def931881fb8072a187aaec";
const gistNames: EnumDictionary<Lang, string> = {
  [Lang.EN]: "resume-en.json",
  [Lang.ES]: "resume-es.json",
};

const fallbackResumeEn: ResumeSchema = {
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
        url: "https://www.linkedin.com/in/zp1ke",
        username: "zp1ke",
        network: "linkedin",
      },
      {
        url: "https://g.dev/zp1ke",
        username: "zp1ke",
        network: "google",
      },
      {
        url: "https://leetcode.com/u/zp1ke",
        username: "zp1ke",
        network: "leetcode",
      },
    ],
  },
  skills: [
    {
      keywords: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Dart",
      ],
      level: "Senior",
      name: "Programming languages",
    },
    {
      keywords: [
        "Kotlin",
        "PHP",
        "HTML-CSS",
      ],
      level: "Avanzado",
      name: "Programming languages",
    },
    {
      keywords: [
        "Flutter",
        "Spring Boot",
        "React",
      ],
      level: "Senior",
      name: "Frameworks",
    },
    {
      keywords: [
        "Linux",
        "Docker",
        "Git",
        "SQL-NoSQL",
      ],
      level: "Senior",
      name: "Further knowledge",
    },
  ],
};

const fallbackResumeEs: ResumeSchema = {
  basics: {
    name: "Michel Atucha",
    phone: "+593 93 941 9677",
    label: "Desarrollador de Software",
    image: "https://avatars.githubusercontent.com/u/6463472?v=4",
    summary:
      "Soy un desarrollador de software con una década de experiencia en la creación de aplicaciones web y móviles. Siempre estoy interesado en idear un mejor método de resolución de problemas para tareas desafiantes y aprender nuevas tecnologías y herramientas.",
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
        url: "https://www.linkedin.com/in/zp1ke",
        username: "zp1ke",
        network: "linkedin",
      },
      {
        url: "https://g.dev/zp1ke",
        username: "zp1ke",
        network: "google",
      },
      {
        url: "https://leetcode.com/u/zp1ke",
        username: "zp1ke",
        network: "leetcode",
      },
    ],
  },
  skills: [
    {
      keywords: [
        "Java",
        "JavaScript",
        "TypeScript",
        "Dart",
      ],
      level: "Senior",
      name: "Lenguajes de Programación",
    },
    {
      keywords: [
        "Kotlin",
        "PHP",
        "HTML-CSS",
      ],
      level: "Avanzado",
      name: "Lenguajes de Programación",
    },
    {
      keywords: [
        "Flutter",
        "Spring Boot",
        "React",
      ],
      level: "Senior",
      name: "Frameworks",
    },
    {
      keywords: [
        "Linux",
        "Docker",
        "Git",
        "SQL-NoSQL",
      ],
      level: "Senior",
      name: "Más conocimientos",
    },
  ],
};

const fallbackResumes: EnumDictionary<Lang, ResumeSchema> = {
  [Lang.EN]: fallbackResumeEn,
  [Lang.ES]: fallbackResumeEs,
};

export const fetchResume = async (lang: Lang): Promise<ResumeSchema> => {
  try {
    const content = await fetchGistContent(gistId, gistNames[lang]);
    return JSON.parse(content) as ResumeSchema;
    // deno-lint-ignore no-explicit-any
  } catch (e: any) {
    console.error(`Error fetching resume: ${e}`);
    return fallbackResumes[lang];
  }
};
