import React, { ComponentProps } from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Section, { NavbarGap } from "../../components/Section";
import { H1, P } from "../../components/TextComponents";
import { GoMail } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { Button } from "../../components/Buttons";
import { twMerge } from "tailwind-merge";
import jsPDF from "jspdf";

const resumeData = {
  name: "Sanjay Bhaambhu",
  tagline: "Software Engineer",
  contactLinks: {
    email: "bhaambhu@gmail.com",
    phone: "+91-89292-99992",
    website: "bhaambhu.com",
    github: "github.com/bhaambhu",
  },
  workExperiences: [
    {
      jobTitle: "Software Engineer",
      organization: "PPFAS AMC",
      period: "February 2023 - Present",
      keyPoints: [
        "Upgraded existing APIs, optimized response structure, nomenclature and performance of various tasks, added support for multiple clients.",
        "Moved existing apps to TypeScript, lead a team of developers building new projects in React-Native, Remix.js, Next.js, etc., ensuring clean-code and robust systems.",
        "Established documentation standards and streamlined processes for development, testing and releasing products.",
      ],
    },
    {
      jobTitle: "Senior Research Fellow",
      organization: "CDLU",
      period: "October 2018 - October 2022",
      keyPoints: [
        "Researched on AI and Intelligent Tutoring Systems, built various advanced algorithms involving graphs & trees, curated datasets, trained ML models.",
        "Taught Data Structures, Advanced Algorithms and Compiler Design to classes of MTech and MCA.",
        "Published 4 Research Papers in Indexed Journals and Presented 3 Research Papers in International Conferences, earning a PhD.",
      ],
    },
    {
      jobTitle: "Web Developer",
      organization: "OOPS InfoSolutions",
      period: "September 2016 - October 2018",
      keyPoints: [
        "Building full-stack web projects using php & MySQL, and android apps using Java and SQLite.",
        "Meeting clients, understanding business needs, planning, prototyping and designing architectures of applications, and illustrations for clients.",
      ],
    },
  ],
  researchExperiences: [
    {
      jobTitle: "Senior Research Fellow",
      organization: "Chaudhary Devi Lal University",
      period: "October 2018 - October 2022",
      keyPoints: [
        "Taught DSA, Advanced Algorithms and Compiler Design classes to MTech and MCA.",
        "Published 7 Research Papers and earned a PhD in CS&E for my work on Intelligent Tutoring Systems.",
      ],
    },
  ],
  education: [
    {
      about:
        "Qualified GATE, UGC NET, JRF, JEST, HTET, 6 International Publications, 3 International Conferences.",
    },
    {
      heading: "2018 - 2022",
      about:
        "Doctor of Philosophy (PhD) under UGC Fellowship in Computer Science and Engineering – CDLU.",
    },
    {
      heading: "2014 - 2017",
      about: "M.C.A. - Kurukshetra University – <b>70.71%</b>",
    },
    {
      heading: "2011 - 2014",
      about: "B.Sc. Computer Science – <b>80.72%</b>",
    },
  ],
  skills: [
    {
      heading: "Back End",
      content:
        "Java, Python, php, NodeJS (NextJS, RemixJS, Express), Django, Spring Boot, Kafka, REST APIs, PostgreSQL, MongoDB, Hibernate, Supabase, Prisma, Heroku, Vercel, Railway, Jekyll, Expo, AWS.",
    },
    {
      heading: "Front End",
      content:
        "HTML, CSS, JavaScript, TypeScript, React Based Frameworks, React Native, TailwindCSS.",
    },
    {
      heading: "Tools & Concepts",
      content:
        "Object Oriented Design, MVC, git, Docker, Linux, Unity3D, Android Studio, Figma.",
    },
  ],
  projects: [
    {
      title: "ScaleVote",
      tech: "Java Spring Boot, Kafka, PostgreSQL, Hibernate",
      about:
        "An election conducting system inspired by the recent Indian General Elections put up for experimenting with scalability and real-time processing capabilities of <b>Spring Boot</b> & <b>Kafka</b>.",
      link: "https://bhaambhu.com/scalevote",
      linkText: "bhaambhu.com/scalevote",
    },
    {
      title: "CAPTAIN",
      tech: "Django (python), PostgreSQL, NextJS, React Native",
      about:
        "An <b>open-source</b> learning app with a <b>Django</b> backend, <b>NextJS</b> front-end for staff, and a <b>React Native</b> app for learners. It’s an intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The system is made in such a way that no piece of knowledge needs to repeat.",
      link: "https://bhaambhu.com/captain",
      linkText: "bhaambhu.com/captain",
    },
    {
      title: "SHADES: Combat",
      tech: "C#, Unity3D, Realtime Multiplayer (Concurrent), Enemy AI, Google Play Services, In-App-Purchases, Ads",
      about:
        "A 3D top-down shooter game for the android platform – <b>1.5 million players</b>, <b>4.5-star rating</b> from <b>21K reviews</b>. The biggest learning was <b>real-time concurrency control</b> – managing multiple players that are accessing and manipulating the same resources, in both <b>peer-to-peer</b> (LAN) and <b>client-server</b> (Online Multiplayer) environments.",
      link: "https://bhaambhu.com/shades",
      linkText: "bhaambhu.com/shades",
    },
    {
      title: "phpWikiCMS",
      tech: "FullStack, PHP, MySQL",
      about:
        "An <b>open-source</b> framework that helps create a <b>wiki style page management system</b>, supports <b>tree-style relationships</b> and their management and viewing.",
      link: "https://bhaambhu.com/phpWikiCMS",
      linkText: "bhaambhu.com/phpWikiCMS",
    },
    {
      title: "Unity Ludo Framework",
      tech: "Unity3D, C#",
      about:
        "An open-source <b>Unity3D</b> project for creating any type of Ludo game. Currently setup as a mobile-based 2D Ludo game with <b>working AI</b>. Can be easily extended to a 3D game or a completely different Ludo game if needed.",
      link: "https://bhaambhu.com/unity-ludo",
      linkText: "bhaambhu.com/unity-ludo",
    },
    {
      title: "Portfolio",
      tech: "React, Next, TypeScript, Tailwind",
      about:
        "My personal website/portfolio project. It is a <b>Next JS</b> project that utilizes <b>TypeScript</b>, <b>Tailwind CSS</b> and static export. It has a <b>responsive design</b>. Feel free to use it and make your own portfolio with it.",
      link: "https://bhaambhu.com",
      linkText: "bhaambhu.com",
    },
  ],
  aboutMe: {
    points: [
      "I discovered my passion for software development in 2011 while building Android apps using Java.",
      "Being a passionate software engineer with a PhD, I am always interested in writing high-performance clean-code that is easy to test and debug, and adapts well to scale.",
      "I am known among my peers for my attention to detail, and building user-centric software.",
    ],
  },
};
//
// relative
// -top-[90vw]
// -ml-[63vw]

function ResumePage({ data }: ResumePageProps) {
  return (
    <div
      id="resumePage"
      className="
    bg-white 
    drop-shadow-2xl shadow-2xl 
    border-2 
    overflow-hidden
    print:scale-100
    w-[21cm] h-0 min-h-[29.5cm] 
    print:w-[21cm] print:h-0 print:min-h-[29.5cm] 
    print:drop-shadow-none print:shadow-none 
    print:border-none
    "
    >
      {/* Page Content */}
      <div className="py-6 px-9">
        {/* Header Section */}
        <div className="flex flex-col">
          {/* My Name */}
          <div className="text-5xl mt-3 font-serif font-bold text-blue-600">
            {data.name}
          </div>
          {/* Tagline */}
          {/* <div className='font-mono mt-3 tracking-wider text-slate-700'>{data.tagline}</div> */}
          {/* Contact Links */}
          <div className="flex font-mono tracking-wider text-xs gap-8 text-gray-900 mt-4">
            {/* E-Mail */}
            <div className="flex gap-1.5 items-center">
              <GoMail className="text-xl" />
              {data.contactLinks.email}
            </div>
            {/* Phone */}
            <div className="flex gap-1.5 items-center">
              <BiPhoneCall className="text-xl" />
              {data.contactLinks.phone}
            </div>
            {/* Website */}
            <div className="flex gap-1.5 items-center">
              <AiOutlineHome className="text-xl" />
              <a href="https://bhaambhu.com">{data.contactLinks.website}</a>
            </div>
            {/* Github */}
            <div className="flex gap-1.5 items-center">
              <VscGithubAlt className="text-xl" />
              {data.contactLinks.github}
            </div>
          </div>
        </div>
        {/* Body Section */}
        <div className="flex mt-3">
          {/* Left Column */}
          <div className="pr-6">
            <SectionHeader title="Solo Projects" />
            {data.projects.map((item, i) => (
              <OneProject key={i} {...item} />
            ))}

            <SectionHeader className="mt-2" title="Education" />
            {data.education.map((item, i) => (
              <OneEducation key={i} {...item} />
            ))}
            {/* <SectionHeader className="mt-0" title="Research Experience" />
            {data.researchExperiences.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))} */}
          </div>
          {/* Right Column */}
          <div className="">
            <SectionHeader className="mt-1" title="Work Experience" />
            {data.workExperiences.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
            <SectionHeader className="mt-2" title="Skills" />
            {data.skills.map((item, i) => (
              <OneSkill key={i} {...item} />
            ))}
            <SectionHeader title="About Me" />
            <AboutMeSection {...data.aboutMe} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    // print:p-0 print:m-0 p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto
    <div className="">
      <Navbar title="Resume" showResumeButton={false} />
      <div className="px-6 print:p-0 mx-auto w-full md:w-fit">
        <Section>
          <H1>Resume</H1>
          <P className="print:hidden">
            This resume is being generated using TypeScript. You can use its
            source code to make your own.
            <div className="flex flex-wrap gap-3 mt-2 print:hidden ">
              <Button iconDownload outline href={"/resume.pdf"} newTab>
                DOWNLOAD LATEST RESUME
              </Button>
              <Button
                iconPrint
                outline
                onClick={() => {
                  window.print();
                }}
              >
                PRINT
              </Button>
              <Button
                iconGitHub
                outline
                href={
                  "https://github.com/bhaambhu/bhaambhu.github.io/blob/main/pages/resume.tsx"
                }
                newTab
              >
                VIEW SOURCE
              </Button>
            </div>
          </P>
        </Section>
        <div className="overflow-scroll no-scrollbar md:overflow-visible">
          <ResumePage data={resumeData} />
        </div>
      </div>
    </div>
  );
}

function AboutMeSection({ ...props }: AboutInfo) {
  return (
    <div className="mt-2">
      <div className="flex flex-col gap-2">
        {props.points.map((item, i) => {
          return (
            <div key={i} className="flex gap-1">
              <BaseText>{item}</BaseText>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OneProject({ ...props }: ProjectInfo) {
  return (
    <div className="my-0">
      <BaseHeading>
        {props.title} <InlineLink to={props.link}>{props.linkText}</InlineLink>
      </BaseHeading>
      <BaseSubHeading>{props.tech}</BaseSubHeading>
      <BaseText>{props.about}</BaseText>
    </div>
  );
}

function OneEducation({ ...props }: EducationInfo) {
  return (
    <div className="my-2">
      <BaseMonoHeading>{props.heading}</BaseMonoHeading>
      <BaseText>{props.about}</BaseText>
    </div>
  );
}

function OneSkill({ ...props }: SkillInfo) {
  return (
    <div className="my-1">
      <BaseHeading>{props.heading}</BaseHeading>
      <div className="mt-0">
        <BaseText>{props.content}</BaseText>
      </div>
    </div>
  );
}

function ExperienceItem({ ...props }: WorkInfo) {
  return (
    <div className="my-0">
      <BaseHeading>
        {props.jobTitle}{" "}
        <span className="text-gray-700">@{props.organization}</span>
      </BaseHeading>
      <BaseSubHeading>{props.period}</BaseSubHeading>
      <div className=" mt-1 flex flex-col gap-1">
        {props.keyPoints.map((item, i) => {
          return (
            <div key={i} className="flex gap-1">
              <ArrowPoint />
              <BaseText className="text-[11px] leading-[14px]">{item}</BaseText>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionHeader({ title = "", className = "" }) {
  return (
    <div
      className={twMerge(
        "font-serif text-blue-600 font-semibold text-xl " + className
      )}
    >
      {title}
    </div>
  );
}

function BaseHeading({ children }: ComponentProps<"div">) {
  return <div className="font-bold text-base mt-1">{children}</div>;
}

function BaseMonoHeading({ children }: ComponentProps<"div">) {
  return <div className="font-mono font-bold text-xs my-1">{children}</div>;
}

function BaseSubHeading({ children }: ComponentProps<"div">) {
  return <div className="font-mono text-[10px] mb-0">{children}</div>;
}
interface InlineLinkProps extends ComponentProps<"span"> {
  to: string | undefined;
}
function InlineLink({ children, to }: InlineLinkProps) {
  return (
    <span className="font-mono text-xs text-blue-600">
      <a href={to} target="_blank" rel="noreferrer">
        [{children}]
      </a>
    </span>
  );
}

function BaseText({ children, className }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        `tracking-wide text-xs text-gray-800 prose ` + className
      )}
      dangerouslySetInnerHTML={{ __html: String(children) }}
    />
  );
}

function ArrowPoint() {
  return (
    <div className="relative -top-2 font-mono text-gray-500 text-[18px]">▹</div>
  );
}

// Types
interface ResumePageProps {
  data: ResumeData;
}
interface ResumeData {
  name: string;
  tagline: string;
  contactLinks: {
    email: string;
    phone: string;
    website: string;
    github: string;
  };
  workExperiences: WorkInfo[];
  researchExperiences: WorkInfo[];
  education: EducationInfo[];
  skills: SkillInfo[];
  projects: ProjectInfo[];
  aboutMe: AboutInfo;
}
interface AboutInfo {
  points: string[];
}
interface ProjectInfo {
  title: string;
  tech: string;
  about: string;
  link?: string;
  linkText?: string;
}
interface WorkInfo {
  jobTitle: string;
  organization: string;
  period: string;
  keyPoints: string[];
}
interface EducationInfo {
  heading?: string;
  about?: string;
}
interface SkillInfo {
  heading: string;
  content: string;
}
