import { ResumeSchema } from "@kurone-kito/jsonresume-types";

interface SkillProps {
  resume: ResumeSchema;
}

const Section = (
  props: { name?: string; level?: string; keywords?: string[] },
) => (
  <>
    <h4>{props.name}</h4>
    <div class="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
      {(props.keywords ?? []).map((keyword) => (
        <p key={`skill-${props.name}-${props.level}-${keyword}`}>{keyword}</p>
      ))}
    </div>
  </>
);

const Skills = (props: SkillProps) => (
  <>
    <h3>Skills</h3>
    <div class="space-y-3">
      {props.resume.skills?.map((skills) => (
        <Section key={`skill-${skills.name}-${skills.level}`} {...skills} />
      ))}
    </div>
  </>
);

export default Skills;
