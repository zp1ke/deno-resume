import { ResumeSchema } from "@kurone-kito/jsonresume-types";
import { i18n, Message } from "../utils/i18n.ts";
import { Lang } from "../utils/types.ts";

interface SkillsProps {
  lang: Lang;
  resume: ResumeSchema;
}

interface SkillProps {
  name?: string;
  level?: string;
  keywords?: string[];
}

const Section = (props: SkillProps) => (
  <>
    <h4>
      {props.name}&nbsp;<small class="text-gray-600">({props.level})</small>
    </h4>
    <div class="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
      {(props.keywords ?? []).map((keyword) => (
        <p key={`skill-${props.name}-${props.level}-${keyword}`}>{keyword}</p>
      ))}
    </div>
  </>
);

const Skills = (props: SkillsProps) => (
  <>
    <h3>{i18n(props.lang, Message.Skills)}</h3>
    <div class="space-y-3">
      {props.resume.skills?.map((skills) => (
        <Section
          key={`skill-${skills.name}-${skills.level}`}
          {...skills}
        />
      ))}
    </div>
  </>
);

export default Skills;
