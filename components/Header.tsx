import { ResumeSchema } from "@kurone-kito/jsonresume-types";

interface ResumeHeaderProps {
    resume: ResumeSchema;
}

export function ResumeHeader(props: ResumeHeaderProps) {
    return (
        <section class="text-gray-400 body-font">
            <div class="container px-5 pt-12 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div class="flex flex-col sm:flex-row mt-10  bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 py-4 rounded-l-2xl sm:bg-[#b4b4b433]">
                            <div class="w-28 h-28 rounded-full inline-flex items-center justify-center  ">
                                <img
                                    alt="content"
                                    class="object-cover object-center rounded-full w-28 h-28"
                                    src="pixel-portrait.png"
                                />
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                                <h2 class="font-bold title-font mt-4 text-3xl text-white">
                                    {props.resume.basics?.name}
                                </h2>
                                <div class="w-12 h-1 rounded mt-2 mb-4 anim">
                                </div>
                                <p class="text-base text-gray-300">
                                    {props.resume.basics?.label}
                                </p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:px-8 px-4 sm:py-8 py-4 sm:border-l border-solid border-white border-opacity-20  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-normal mt-3 mb-4 text-justify">
                                {props.resume.basics?.summary}
                            </p>
                            <a
                                class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mr-3 p-2 border-0 focus:outline-none transition-colors duration-500"
                                href="resume.pdf"
                                download
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 mr-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                                    />
                                </svg>

                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
