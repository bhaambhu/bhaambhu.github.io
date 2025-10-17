import React, { ComponentProps } from "react";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Section, { NavbarGap } from "../components/Section";
import { H1, P } from "../components/TextComponents";
import { GoMail } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { Button } from "../components/Buttons";
import { twMerge } from "tailwind-merge";
import jsPDF from "jspdf";

const resumeData: ResumeData = {
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
      jobTitle: "Senior Engineer",
      organization: "Parag Parikh AMC",
      period: "February 2023 - Present",
      keyPoints: [
        "Built new projects in React-Native/expo; migrated legacy apps from JS to TypeScript; context API to Redux; refactored codebases.",
        "Defined documentation, testing, and release standards; streamlined CI/CD processes; enforced clean-code and security practices.",
        "Owned full mobile release cycle: App Store & Play Store submissions, OTA updates, release announcements.",
        "Implemented security enhancements (root detection, mock location prevention, debug protection, etc.) and various measures for fintech apps.",
        "Initiated regularly measuring and optimizing various app performance factors – TTI, FPS, resource load times, memory usage, etc.",
        "Built and deployed a custom helpdesk solution, replacing Salesforce and saving the company significant costs (solo project in company).",
        "Built the corporate investor portal app, boosting enterprise client management (solo project).",
        "Interpreted SEBI circulars into dev timelines; currently leading WCAG-compliant accessibility upgrades.",
      ],
    },
    {
      jobTitle: "Web Developer",
      organization: "OOPS InfoSolutions",
      period: "September 2016 - October 2018",
      keyPoints: [
        "Developed full-stack applications with Java, PostgreSQL, PHP, and MySQL.",
        "Designed application architectures and lead client-facing prototyping/demos.",
      ],
    },
  ],
  education: [
    {
      years: "2018 - 2022",
      title: "PhD (AI & Intelligent Systems)",
      university: "CDLU",
      highlight: "UGC SRF",
    },
    {
      years: "2014 - 2017",
      title: "M.C.A.",
      university: "Kurukshetra University ",
      highlight: "70.71%",
    },
    {
      years: "2011 - 2014",
      title: "B.Sc. Computer Science",
      university: "CDLU",
      highlight: "80.72%",
    },
  ],
  skills: [
    {
      content:
        "React Native, Expo, EAS, TypeScript, Redux, Redux-Saga, MMKV, quick-crypto, FlashList.",
    },
    {
      content:
        "Mobile release pipelines (App Store, Play Store, OTA updates), building native plugins.",
    },
    {
      content:
        "Debugging & monitoring tools (BugSnag, Flipper, Firebase, Sentry), Jest, Appium.",
    },
    {
      content:
        "Cross-platform app design, Figma, REST APIs, Unit Testing, Git, Trello, etc.",
    },
  ],
  projects: [
    {
      title: "InnerNote",
      linkText: "WIP",
      tech: "React Native, SQLite, Expo, Zustand, On-Device AI",
      about:
        "A privacy-focused offline journaling app for emotion tracking and self-reflection, live queries, and an on-device AI engine for contextual insights – showcasing local-first architecture and seamless offline experience.",
    },
    {
      title: "PPFAS SelfInvest ",
      link: "https://amc.ppfas.com/app",
      linkText: "amc.ppfas.com/app",
      tech: "Fintech, React Native, TypeScript, Redux, Root Detection",
      about:
        "A high-security fintech app enabling investors to buy, redeem, and manage mutual fund investments. Built with strong emphasis on compliance, performance, and data protection — featuring root/debug detection, encrypted local storage, and optimized API communication. Serves 300,000+ investors across Android and iOS for seamless transactions and real-time portfolio tracking.",
    },
    {
      title: "SHADES: Combat",
      tech: "Unity3D, Realtime Multiplayer, Enemy AI, In-App-Purchases, Ads",
      about:
        "A 3D top-down shooter game for the android platform – 1.5 million players, 4.5-star rating from 21K reviews. The biggest learning was real-time concurrency control – managing multiple players that are accessing and manipulating the same resources, in both peer-to-peer (LAN) and client-server (Online Multiplayer) environments.",
      link: "https://bhaambhu.com/shades",
      linkText: "bhaambhu.com/shades",
    },
    {
      title: "NativePing",
      tech: "React Native, Push Notifications, Node.js, Vite, Laravel",
      about:
        "A push notification service for React Native apps, offering a simple npm plugin for one-line mobile integration, and a web interface for filtering users and send targeted push notifications.",
      link: "https://nativeping.com",
      linkText: "nativeping.com",
    },
    {
      title: "CAPTAIN",
      tech: "Full Stack, Django, Next.js, React Native, PostgreSQL",
      about:
        "An open-source learning app with a Django backend, NextJS front-end for staff, and a React Native app for learners. It’s an intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The system is made in such a way that no piece of knowledge needs to repeat.",
      link: "https://bhaambhu.com/captain",
      linkText: "bhaambhu.com/captain",
    },
    {
      title: "Unity Ludo Framework",
      tech: "Unity3D, C#, AI",
      about:
        "An open-source Unity3D project for creating any type of Ludo game. Currently setup as a mobile-based 2D Ludo game with working AI. Can be easily extended to a 3D game or a completely different Ludo game if needed.",
      link: "https://bhaambhu.com/unity-ludo",
      linkText: "bhaambhu.com/unity-ludo",
    },
    {
      title: "Portfolio",
      tech: "Three.js, React, Next, TypeScript, Tailwind",
      about:
        "My personal website/portfolio project. It is a Next JS project that utilizes TypeScript, Tailwind CSS and static export. It has a responsive design. Feel free to use it and make your own portfolio with it.",
      link: "https://bhaambhu.com",
      linkText: "bhaambhu.com",
    },
  ],
  aboutMe: {
    points: [
      "I’m a passionate software engineer with 12+ years of experience building secure, scalable apps.",
      "Known for paying good attention to UI/UX and app smoothness, and writing clean scalable code.",
    ],
  },
};

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
    w-[21cm] h-0 min-h-[30cm] 
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
          <div className="flex font-bold font-mono tracking-wider text-xs gap-8 text-gray-900 mt-4">
            {/* E-Mail */}
            <div className="flex gap-1.5 items-center">
              <GoMail className="text-xl" />
              <a href="mailto:bhaambhu@gmail.com" target="_blank">{data.contactLinks.email}</a>
            </div>
            {/* Phone */}
            <div className="flex gap-1.5 items-center">
              <BiPhoneCall className="text-xl" />
              <a href="tel:+918929299992" target="_blank">{data.contactLinks.phone}</a>
            </div>
            {/* Website */}
            <div className="flex gap-1.5 items-center">
              <AiOutlineHome className="text-xl" />
              <a href="https://bhaambhu.com" target="_blank">{data.contactLinks.website}</a>
            </div>
            {/* Github */}
            <div className="flex gap-1.5 items-center">
              <VscGithubAlt className="text-xl" />
              <a href="https://github.com/bhaambhu" target="_blank">{data.contactLinks.github}</a>
            </div>
          </div>
        </div>
        {/* Body Section */}
        <div className="flex mt-3">
          {/* Left Column */}
          <div className="pr-6 w-[60%]">
            <SectionHeader title="Solo Projects" punchline="A Select Few" />
            {data.projects.map((item, i) => (
              <ProjectCard key={i} {...item} />
            ))}

            <SectionHeader
              className="mt-2"
              title="Education"
              punchline="For Learning How To Do Stuff Properly"
            />
            {data.education.map((item, i) => (
              <OneEducation key={i} {...item} />
            ))}
          </div>
          {/* Right Column */}
          <div className="w-[44%] flex flex-col">
            <SectionHeader
              className="mt-1"
              title="Work Experience"
              punchline="Corporate"
            />
            {data.workExperiences.map((item, i) => (
              <ExperienceItem key={i} {...item} />
            ))}
            <SectionHeader
              className="mt-4 mb-1"
              title="Skills"
              punchline="Relevant Ones"
            />
            {data.skills.map((item, i) => (
              <OneSkill key={i} {...item} />
            ))}
            <SectionHeader
              className="mt-4 mb-1"
              title="About Me"
              punchline="Very Briefly"
            />
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
                  "https://github.com/bhaambhu/bhaambhu.github.io/blob/main/src/pages/resume.tsx"
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
    <div className="mt-0">
      <div className="flex flex-col gap-1">
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

function ProjectCard({ ...props }: ProjectInfo) {
  return (
    <div className="my-0">
      <BaseHeading>
        {props.title} <InlineLink to={props.link}>{props.linkText}</InlineLink>
      </BaseHeading>
      <BaseSubHeading className="font-bold">{props.tech}</BaseSubHeading>
      <BaseText>{props.about}</BaseText>
    </div>
  );
}

function OneEducation({ ...props }: EducationInfo) {
  return (
    <div className="my-2 leading-none text-xs flex gap-1 whitespace-nowrap">
      <span className="font-mono tracking-tighter font-bold ">
        [{props.years}]
      </span>
      <span>{props.title}</span>–
      <span className="italic">{props.university}</span>–
      <span className="font-bold">{props.highlight}</span>
    </div>
  );
}

function OneSkill({ ...props }: SkillInfo) {
  return (
    <div className="mt-1">
      <BaseHeading>{props.heading}</BaseHeading>
      <div className="mt-0 flex gap-1.5">
        <div className="mt-[1px]">
          <ArrowPoint />
        </div>
        <BaseText>{props.content}</BaseText>
      </div>
    </div>
  );
}

function ExperienceItem({ ...props }: WorkInfo) {
  return (
    <div className="mb-2">
      <BaseHeading>
        {props.jobTitle}{" "}
        <span className="text-gray-700">@{props.organization}</span>
      </BaseHeading>
      <BaseSubHeading>{props.period}</BaseSubHeading>
      <div className=" mt-1 flex flex-col gap-1.5">
        {props.keyPoints.map((item, i) => {
          return (
            <div key={i} className="flex gap-1.5 items-start">
              <div className="mt-[1px]">
                <ArrowPoint />
              </div>
              <BaseText>{item}</BaseText>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionHeader({ title = "", className = "", punchline = "" }) {
  return (
    <div
      className={twMerge(
        "font-serif text-blue-600 font-semibold text-xl " + className
      )}
    >
      {title}{" "}
      {punchline && (
        <span className="font-mono text-[10px] leading-[10px] text-gray-900">
          [{punchline}]
        </span>
      )}
    </div>
  );
}

function BaseHeading({ children }: ComponentProps<"div">) {
  return <div className="font-bold text-base mt-1">{children}</div>;
}

function BaseMonoHeading({ children }: ComponentProps<"div">) {
  return <div className="font-mono font-bold text-xs my-1">{children}</div>;
}

function BaseSubHeading({ children, className }: ComponentProps<"div">) {
  return (
    <div className={twMerge("font-mono text-[10px] mb-0 ", className)}>
      {children}
    </div>
  );
}
interface InlineLinkProps extends ComponentProps<"span"> {
  to: string | undefined;
}
function InlineLink({ children, to }: InlineLinkProps) {
  return (
    <span
      className={twMerge(
        "font-mono text-[10px] leading-[10px]",
        to ? "text-blue-600" : "text-gray-600"
      )}
    >
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
        `tracking-wide text-xs font-medium text-gray-800 prose ` + className
      )}
      dangerouslySetInnerHTML={{ __html: String(children) }}
    />
  );
}

function ArrowPoint() {
  return (
    <div className="relative -top-2 font-mono text-gray-900 text-[18px]">▸</div>
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
  years?: string;
  title?: string;
  university?: string;
  highlight?: string;
}
interface SkillInfo {
  heading?: string;
  content: string;
}
