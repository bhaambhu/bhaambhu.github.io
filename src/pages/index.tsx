import Head from "next/head";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { Button } from "../components/Buttons";
import { H1, P } from "../components/TextComponents";
import Page from "../components/Page";
import WorkCard from "../components/WorkCard";
import Section from "../components/Section";
import ThreeJSPicture from "../components/ThreeJSPicture";
import Typewriter from "../components/Typewriter";
import PortraitQuips from "../components/PortraitQuips";
import EmailCopy from "../components/EmailCopy";
import ScrollCue from "../components/ScrollCue";

export default function Home() {
  return (
    <Page links={["about", "projects", "work", "contact"]}>
      {/* Home Section */}
      <Section
        className="relative min-h-screen flex flex-col justify-center"
        navbarGap={false}
      >
        <p className="font-mono font-bold tracking-widest text-primary-500 mb-4">
          Hi, my name is
        </p>
        <h1 className="text-dynamic font-bold text-slate-900 mb-3">
          Sanjay Bhaambhu.
        </h1>
        {/* Each phrase is a strength from the résumé; "build things" stays the anchor. */}
        <Typewriter
          // Shrinks a little more than the name on small phones, so the longest
          // phrase never wraps mid-typing and makes the page jump.
          className="text-dynamic text-[clamp(32px,8vw,80px)] whitespace-nowrap font-bold text-slate-600"
          prefix="I "
          phrases={[
            "build things.",
            "ship apps.",
            "design interfaces.",
            "lead teams.",
            "make games.",
            "teach machines.",
          ]}
        />
        <P>
          Senior software engineer: React Native, React and TypeScript, and
          Laravel. I taught myself to code in 2009 and haven&apos;t stopped
          building since: apps, games and platforms.
          Today I own the mobile apps at Parag Parikh Mutual Fund, whose
          investor app serves 300,000+ people. Open to roles in Europe or
          remote.
        </P>
        <ScrollCue href="#about" label="Scroll down to About me" />
      </Section>

      {/* About Section */}
      {/* Centred on large screens, where it is shorter than the viewport; the
          bottom padding keeps the scroll cue clear of the content. */}
      <Section
        id="about"
        className="relative min-h-screen flex flex-col justify-start lg:justify-center lg:pb-24"
      >
        <div className="md:w-[60%]">
          <H1>About Me</H1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:max-w-[60%]">
            <P>
              Hello! My creative journey started in 2009, when I 3D-modeled our
              house and made mods for counter-strike. That transitioned to
              mobile app development as Android phones were getting introduced.
              My passion for video-games and 3D graphics led me toward making
              multi-player mobile games and university education got me into
              making web-projects. I also have an eye for good design and I try
              to align the design of my products to industry standards.
            </P>
            <P>Here are a few technologies I&apos;ve worked with recently:</P>
            <ul className="text-slate-700 text-xs text-justify font-mono grid grid-cols-2 gap-y-2 mt-4 mb-10 gap-x-2">
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                React Native &amp; Expo
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                PHP (Laravel)
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                React &amp; Next.js
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                PostgreSQL
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Python (Django)
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Firebase &amp; EAS
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Godot, Unity 3D, C#
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Java (Spring Boot)
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                TypeScript
              </li>
            </ul>
          </div>

          {/* New ThreeJS Picture Container */}
          <div className="w-[300px] h-[300px] mx-12 self-center lg:self-start">
            <div className="relative group h-full w-full">
              {/* Tapping the portrait reveals a line at a time about how it works. */}
              <PortraitQuips>
                <div className="relative rounded-full overflow-hidden z-10 border-2 border-primary-500 h-full w-full">
                  <ThreeJSPicture />
                </div>
              </PortraitQuips>
              {/* <div className="absolute w-full h-full bg-primary-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-250 " /> */}
            </div>
          </div>

          {/* Original Code V2 */}
          {/* <div className="max-w-xs mx-12 self-center md:self-start">
            <div className="relative group h-fit">
              <div className="transition ease-in-out duration-250 group-hover:transition group-hover:duration-250 rounded group-hover:translate-x-3 group-hover:translate-y-4 border-primary-500 border-2 absolute w-full h-full top-0 left-0 translate-x-4 translate-y-6" />
              <img
                className="rounded group-hover:grayscale-0 grayscale transition duration-250 z-10"
                alt="Sanjay Himself"
                src={"/close.jpg"}
              />
              <div className="absolute w-full h-full bg-primary-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-250 " />
            </div>
          </div> */}

          {/* Original Code */}
          {/* <div className='max-w-xs mx-12 self-center md:self-start'>
            <picture className='relative group h-fit'>
              <div className='transition ease-in-out duration-500 group-hover:transition group-hover:duration-500 rounded group-hover:translate-x-3 group-hover:translate-y-4 border-primary-500 border-2 absolute w-full h-full top-0 left-0 translate-x-4 translate-y-6' />
              <img className='rounded group-hover:grayscale-0 grayscale transition duration-500 z-10' alt='Sanjay Himself' src={'/close.jpg'} />
              <div className='absolute w-full h-full bg-primary-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-500 ' />
            </picture>
          </div> */}
        </div>
        <ScrollCue href="#projects" label="Scroll down to Projects" />
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        className="min-h-screen flex flex-col justify-start"
      >
        <H1>Featured Projects</H1>

        {/* Sarkari Academy Project Tile */}
        <ProjectCard
          title="Sarkari Academy"
          tags={[
            "Full Stack",
            "Laravel",
            "PostgreSQL",
            "React",
            "TypeScript",
            "Expo",
            "React Native",
          ]}
          mobileScreenshots={[
            "/sarkari-academy/app-browse.jpg",
            "/sarkari-academy/app-for-you.jpg",
          ]}
          about="A government job platform for India, live since September 2026. Every recruitment is followed from notification to result in one place, with its syllabus and previous papers. Candidates build a profile once and get a dashboard of the jobs they're actually eligible for, with alerts by email and push before every deadline. One Laravel service layer serves the website, the staff tools and an Expo Android app (now in Play testing) with OTA release channels and a server-controlled forced-update gate."
        >
          <Button href="/sarkari-academy">MORE INFO</Button>
          <Button newTab outline href="https://sarkariacademy.com" iconExternal>
            WEBSITE
          </Button>
        </ProjectCard>

        {/* NativePing Project Tile */}
        <ProjectCard
          title="NativePing"
          tags={[
            "Full Stack",
            "React Native",
            "Expo",
            "Laravel",
            "PostgreSQL",
            "React",
            "TypeScript",
            "npm package",
          ]}
          desktopScreenshots={[
            "/nativeping/home.jpg",
          ]}
          about="A push notification platform for React Native apps. Developers add one hook from my native-ping npm package to register devices, then segment users by custom attributes and send targeted notifications from a web dashboard. Delivery runs as queued, batched jobs through the Expo Push API with live progress and per-device delivery tracking."
        >
          <Button newTab href="https://nativeping.com" iconExternal>
            WEBSITE
          </Button>
          <Button
            newTab
            outline
            href="https://www.npmjs.com/package/native-ping"
            iconExternal
          >
            NPM PACKAGE
          </Button>
        </ProjectCard>

        {/* SHADES Project Tile */}
        <ProjectCard
          title="SHADES: Combat"
          tags={[
            "UNITY 3D",
            "C#",
            "Enemy AI",
            "Realtime Multiplayer",
            "In-App-Purchases",
            "Google Play Services",
          ]}
          landscapeScreenshots={[
            "/shades/card-menu.jpg",
            "/shades/card-gameplay.jpg",
          ]}
          about="A 3D top-down shooter for Android that I built alone in 2017, with online and local multiplayer and single-player against AI: 1.5M downloads and a 4.5/5 rating from 21K reviews. The biggest learning was real-time concurrency control – managing multiple players that are accessing and manipulating the same resources, in both peer-to-peer (LAN) and client-server (Online Multiplayer) environments."
        >
          <Button href="/shades">MORE INFO</Button>
          <Button outline href="/shades/shades.apk" iconDownload>
            APK
          </Button>
        </ProjectCard>

        {/* CAPTAIN Project Tile */}
        <ProjectCard
          title="CAPTAIN"
          tags={[
            "Full Stack",
            "django",
            "React JS",
            "PostgreSQL",
            "Next JS",
            "React Native",
            "EXPO",
            "Python",
            "JavaScript",
            "Tailwind CSS",
          ]}
          desktopScreenshots={[
            "/captain/path-editor.png",
          ]}
          about="An open-source learning app with Django backend, NextJS front-end for staff, and React Native app for learners. It’s an intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The system is made in such a way that no piece of knowledge needs to repeat. "
        >
          <Button href="/captain">MORE INFO</Button>
          <Button
            newTab
            outline
            href="https://github.com/bhaambhu/captain-django"
            iconGitHub
          >
            SOURCE CODE
          </Button>
        </ProjectCard>

        <H1>More Projects</H1>

        {/* Portfolio Project Tile */}
        <ProjectCard
          title="ScaleVote"
          tags={["Java Spring Boot", "Kafka", "PostgreSQL"]}
          about="A minimal election conducting system I put up for learning Spring Boot and experimenting with scalability and real-time processing capabilities of Apache Kafka."
        >
          <Button href="/scalevote">MORE INFO</Button>
        </ProjectCard>

        {/* Portfolio Project Tile */}
        <ProjectCard
          title="This Portfolio"
          tags={[
            "React JS",
            "Next JS",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
          ]}
          about="My personal website/portfolio project. It is a Next JS project that utilizes TypeScript, Tailwind CSS and static export. It has responsive design. Feel free to use it and make your own portfolio with it."
        >
          <Button
            newTab
            href="https://github.com/bhaambhu/bhaambhu.github.io"
            iconGitHub
          >
            SOURCE CODE
          </Button>
        </ProjectCard>

        {/* Unity Ludo Framework */}
        <ProjectCard
          title="Unity Ludo Framework"
          tags={["UNITY 3D", "C#"]}
          mobileScreenshots={[
            "/unity-ludo/gameplay-30.jpg",
            "/unity-ludo/gameplay-80.jpg",
          ]}
          about="An open-source Unity3D project for creating any type of Ludo game. Currently setup as a mobile-based 2D Ludo game with working AI. Can be easily extended to a 3D game or a completely different Ludo game if needed."
        >
          <Button href="/unity-ludo">MORE INFO</Button>
          <Button
            newTab
            outline
            href="https://github.com/bhaambhu/Unity-Ludo-Framework"
            iconGitHub
          >
            SOURCE CODE
          </Button>
        </ProjectCard>

        {/* SANWIKI Project Tile */}
        <ProjectCard
          title="phpWikiCMS"
          tags={["Full Stack", "PHP", "MySQL"]}
          about="An open-source framework that helps create a wiki style page management system, supports tree-style relationships and their management and viewing."
        >
          <Button href="/phpWikiCMS">MORE INFO</Button>
          <Button
            newTab
            outline
            href="https://github.com/bhaambhu/phpWikiCMS"
            iconGitHub
          >
            SOURCE CODE
          </Button>
        </ProjectCard>
        <H1>Early Work</H1>
        {/* KUK Project Tile */}
        <ProjectCard
          title="KUK&nbsp;Student Notification & Information System"
          tags={[
            "PHP",
            "MySQL",
            "Android",
            "Java",
            "SQLite",
            "Push Notifications",
            "Material Design",
          ]}
          mobileScreenshots={[
            "/cskuk/mobile-nav-drawer.png",
            "/cskuk/mobile-timetable-page.png",
            "/cskuk/mobile-syllabus-versions.png",
            "/cskuk/mobile-syllabus-view.png",
            "/cskuk/mobile-setup-screen.png",
          ]}
          desktopScreenshots={[
            "/cskuk/dashboard.png",
            "/cskuk/notification-page.png",
            "/cskuk/time-table-editor.png",
            "/cskuk/add-syllabus-page.png",
            "/cskuk/syllabus-page-2.png",
          ]}
          about="A project I made for KUK DCSE. This contained of a php backend for staff and android app for the students. The most interesting part was the time table component."
        />

        {/* Cheatify Project Tile */}
        <ProjectCard
          title="Cheatify"
          tags={["Android", "Java", "SQLite", "Google Sheets"]}
          about="This was a beautifully designed Android adaptation of the Cheatbook encyclopedia of video game cheats - made with permission taken from creator of the original cheatbook. Upon installation, my app downloaded a database of video game cheats and guides to the phone for offline viewing and also used google sheets as a free online database - for back in the days when internet was expensive."
          mobileScreenshots={[
            "/cheatify/1.png",
            "/cheatify/2.png",
            "/cheatify/3.png",
            "/cheatify/4.png",
            "/cheatify/5.png",
            "/cheatify/6.png",
          ]}
        />

        {/* Rough Fight Project Tile */}
        <ProjectCard
          title="Rough Fight"
          tags={["Unity 3D", "C#"]}
          about="This was a brawl style game that included hand-combat AI that would fight and dodge player moves. It also featured local multiplayer. This project was never released and remains incomplete."
        />
        {/* Clock Widget Project Tile */}
        <ProjectCard
          title="Minimal Clock Widget"
          tags={["Android", "Java"]}
          about="In the early days of android every provider like HTC, Samsung, etc. had their own different looking user interfaces and clock widget. With this widget I tried to provide users with a minimal and elegant time viewing experience on their homescreens."
          mobileScreenshots={[
            "/clockwidget/unnamed.webp",
            "/clockwidget/unnamed (3).webp",
            "/clockwidget/unnamed (2).webp",
            "/clockwidget/unnamed (1).webp",
            "/clockwidget/unnamed (4).webp",
          ]}
        />
        {/* Hummer Project Tile */}
        <ProjectCard
          title="Hummer&nbsp;3D&nbsp;Live&nbsp;Wallpaper"
          tags={["Android", "Unity 3D", "UnityScript"]}
          about="Part of my early experiments with android development, this live wallpaper featured a 3d model of the popular GMC Hummer that responded to touches."
        />
      </Section>

      <Section id="work">
        <H1>Work</H1>

        <WorkCard
          jobTitle="Senior Manager – Software Developer"
          organization="PPFAS Asset Management (Parag Parikh Mutual Fund)"
          period={"February 2023 to Present"}
        >
          <div className="tracking-wide text-sm font-mono mt-1 flex flex-col gap-1">
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Own all of PPFAS&apos;s mobile apps end to end in React Native (Expo): I set the architecture and standards, review code, and mentor a junior developer and our QA tester.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Co-developed SelfInvest with our CEO, led its App Store and Google Play launch, and have owned it since: the React Native app 300,000+ investors use to buy, redeem and track mutual fund investments.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Built a self-hosted helpdesk that is now replacing our Salesforce helpdesk (a licence of about ₹90 lakh a year), and built and shipped the corporate investor portal app (Remix), both on my own.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Own the release cycle: App Store and Play submissions, OTA updates and release notes.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Hardened the fintech apps (root and debugger detection, mock-location blocking, encrypted storage) and introduced regular performance measurement.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Defined the team&apos;s documentation, testing and release standards; translate regulatory circulars into delivery plans.</div>
            </div>
          </div>
        </WorkCard>
        <WorkCard
          jobTitle="Junior → Senior Research Fellow"
          organization="Chaudhary Devi Lal University"
          period={"October 2018 to October 2022"}
        >
          <div className="tracking-wide text-sm font-mono mt-1 flex flex-col gap-1">
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Designed and built CAPTAIN, an adaptive learning platform (Django, Next.js, React Native), as part of my PhD on intelligent tutoring systems.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Published 4 papers in indexed journals and presented 3 at international conferences.</div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>Taught Data Structures, Advanced Algorithms and Compiler Design to MTech and MCA students.</div>
            </div>
          </div>
        </WorkCard>

        <WorkCard
          jobTitle="Web Developer"
          organization="OOPS InfoSolutions"
          period="September 2016 to October 2018"
        >
          <div className="tracking-wide text-sm font-mono mt-1 flex flex-col gap-1">
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Designed responsive websites and worked in php, MySQL,
                JavaScript, CSS, JQuery etc.
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Planning, prototyping and designing architectures of
                applications, and illustrations for clients.
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Meeting clients, understanding business needs and
                conceptualizing solutions.
              </div>
            </div>
          </div>
        </WorkCard>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="flex flex-col justify-start">
        <H1>Get In Touch</H1>

        <P>
          Whether you have any work opportunity, a question, or just want to say
          hi, I&apos;ll try my best to get back to you!
        </P>
        <br />
        <button
          onClick={() => (window.location.href = "mailto:sanjay@bhaambhu.com")}
          className="px-4 py-2 flex bg-white border-2 self-center border-primary-500 rounded font-mono font-bold tracking-widest text-primary-500"
        >
          SAY&nbsp;HELLO
        </button>
        <EmailCopy email="sanjay@bhaambhu.com" />

        <p className="text-slate-700 font-mono text-[10px] mt-8 self-center italic">
          Made for you with{" "}
          <span className="text-primary-500 font-bold">love</span>, like all my
          other projects.
        </p>
      </Section>
    </Page>
  );
}
