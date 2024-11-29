import { ResumeSchema } from "@kurone-kito/jsonresume-types";

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

export default fallbackResume;
