import { ResumeSchema } from "@kurone-kito/jsonresume-types";

interface HeaderProps {
  resume: ResumeSchema;
}

const ProfileLink = (props: { network?: string; url?: string }) => (
  <div class="mr-2 w-3">
    <a
      width="12"
      height="12"
      href={props.url}
      rel="noreferrer noopener"
      target="_blank"
    >
      <img
        class="w-full"
        loading="lazy"
        src={`/${props.network}.svg`}
        alt={props.network}
      />
    </a>
  </div>
);

const ResumeLink = () => (
  <>
    <a
      class="inline-flex items-center pt-2 border-0"
      href="resume.pdf"
      download
    >
      <img
        class="mr-2"
        src="/download-dark.svg"
        width="40"
        height="40"
        alt=""
      />
      Download Resume
    </a>
  </>
);

const Header = (props: HeaderProps) => {
  return (
    <div class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
      <div class="md:order-2">
        <h1>{props.resume.basics?.name}</h1>
        <h2 class="my-1">{props.resume.basics?.label}</h2>
        <p class="whitespace-pre-wrap">
          {props.resume.basics?.summary}
        </p>
        <div class="col-span-2 lg:col-span-1 flex gap-1 items-center mt-2">
          {props.resume.basics?.profiles?.map((profile) => (
            <ProfileLink key={`profile-link-${profile.network}`} {...profile} />
          ))}
        </div>
        <ResumeLink />
      </div>
      <img
        class="flex-shrink-0 md:order-1 md:w-8 rounded-xl"
        src="/pixel-portrait.png"
        height="150"
        width="150"
        alt=""
      />
    </div>
  );
};

export default Header;
