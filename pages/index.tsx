import Head from "next/head";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { Button } from "../components/Buttons";
import { H1, P } from "../components/TextComponents";
import Page from "../components/Page";
import WorkCard from "../components/WorkCard";
import Section from "../components/Section";

export default function Home() {
  return (
    <Page links={["about", "projects", "work", "contact"]}>
      {/* Home Section */}
      <Section
        className="min-h-screen flex flex-col justify-center"
        navbarGap={false}
      >
        <p className="font-mono font-bold tracking-widest text-primary-500 mb-4">
          Hi, my name is
        </p>
        <h1 className="text-dynamic font-bold text-slate-900 mb-3">
          Sanjay Bhaambhu.
        </h1>
        <p className="text-dynamic font-bold text-slate-600">I build things.</p>
        <P>
          I love making websites, apps, and games, studying new technologies,
          and building engaging multi-platform products.
        </P>
      </Section>

      {/* About Section */}
      <Section id="about" className="min-h-screen flex flex-col justify-start">
        <div className="md:w-[60%]">
          <H1>About Me</H1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:max-w-[60%]">
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
                JavaScript
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                React
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Next JS
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Django
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Unity 3D
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                Mongo DB
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                <i>php</i>
              </li>
              <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>
                SQL
              </li>
            </ul>
          </div>
          {/* Profile Picture Container */}
          <div className="max-w-xs mx-12 self-center md:self-start">
            <div className="relative group h-fit">
              <div className="transition ease-in-out duration-250 group-hover:transition group-hover:duration-250 rounded group-hover:translate-x-3 group-hover:translate-y-4 border-primary-500 border-2 absolute w-full h-full top-0 left-0 translate-x-4 translate-y-6" />
              <img
                className="rounded group-hover:grayscale-0 grayscale transition duration-250 z-10"
                alt="Sanjay Himself"
                src={"/close.jpg"}
              />
              <div className="absolute w-full h-full bg-primary-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-250 " />
            </div>
          </div>

          {/* Original Code */}
          {/* <div className='max-w-xs mx-12 self-center md:self-start'>
            <picture className='relative group h-fit'>
              <div className='transition ease-in-out duration-500 group-hover:transition group-hover:duration-500 rounded group-hover:translate-x-3 group-hover:translate-y-4 border-primary-500 border-2 absolute w-full h-full top-0 left-0 translate-x-4 translate-y-6' />
              <img className='rounded group-hover:grayscale-0 grayscale transition duration-500 z-10' alt='Sanjay Himself' src={'/close.jpg'} />
              <div className='absolute w-full h-full bg-primary-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-500 ' />
            </picture>
          </div> */}
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        className="min-h-screen flex flex-col justify-start"
      >
        <H1>Featured Projects</H1>

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
          about="An open-source learning app with Django backend, NextJS front-end for staff, and React Native app for learners. It’s an intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The system is made in such a way that no piece of knowledge needs to repeat. "
        >
          <Button href="/captain">MORE INFO</Button>
          <Button
            newTab
            outline
            href="https://captain-nextjs-bhaambhu.vercel.app"
            iconExternal
          >
            WEBSITE
          </Button>
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
          about="A 3D shooter game for the android platform – 1.5M players, 4.5/5 avg rating from 21K reviews. The biggest learning was real-time concurrency control – managing multiple players that are accessing and manipulating the same resources, in both peer-to-peer (LAN) and client-server (Online Multiplayer) environments."
        >
          <Button href="/shades">MORE INFO</Button>
          <Button outline href="/shades/shades.apk" iconDownload>
            APK
          </Button>
        </ProjectCard>

        {/* Unity Ludo Framework */}
        <ProjectCard
          title="Unity Ludo Framework"
          tags={["UNITY 3D", "C#"]}
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
        <H1>Obsolete Projects</H1>
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
          desktopScreenshots={[
            "/cskuk/dashboard.png",
            "/cskuk/publish-event-page.png",
            "/cskuk/time-table-editor.png",
          ]}
          mobileScreenshots={[
            "/cskuk/mobile-nav-drawer.png",
            "/cskuk/mobile-timetable-page.png",
            "/cskuk/mobile-syllabus-versions.png",
            "/cskuk/mobile-syllabus-view.png",
          ]}
          about="A project I made for KUK DCSE. This contained of a php backend for staff and android app for the students. The most interesting part was the time table component."
        >
          A project I made for KUK DCSE. This contained of a php backend for staff and android app for the students. The most interesting part was the time table component.
          </ProjectCard>

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
          about="This was a brawl style game that included hand-combat AI that would fight and dodge player moves. It also featuprimary local multiplayer. This project was never released and remains incomplete."
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
          about="Part of my early experiments with android development, this live wallpaper featuprimary a 3d model of the popular GMC Hummer that responded to touches."
        />
      </Section>

      <Section id="work">
        <H1>Work</H1>

        <WorkCard
          jobTitle="Software Engineer"
          organization="PPFAS AMC"
          period={"Feb 2023 to Present"}
        >
          <div className="tracking-wide text-sm font-mono mt-1 flex flex-col gap-1">
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Spearheaded the transition to TypeScript for existing
                applications and the development of new ones, significantly
                improving code stability and reducing the likelihood of errors.
                Implemented robust algorithms for enhancing application
                performance and reliability.
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Established comprehensive documentation, guides, and policies
                within a dedicated wiki for developers, testers, and release
                managers. Streamlined development processes, saving valuable
                time and preventing potential issues by providing clear
                guidelines.
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Built and exercised the Development-Preview-Release system,
                enabling robust implementation and safe testing of multiple
                features in parallel. Effectively managed the end-to-end process
                of app releases, significantly enhancing overall product
                quality.
              </div>
            </div>
          </div>
        </WorkCard>
        <WorkCard
          jobTitle="Senior Research Fellow"
          organization="Chaudhary Devi Lal University"
          period={"October 2018 to October 2022"}
        >
          <div className="tracking-wide text-sm font-mono mt-1 flex flex-col gap-1">
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Taught Data Structures, Advanced Algorithms and Compiler Design
                classes to MTech and MCA.
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Published 4 Research Papers in Indexed Journals and Presented 3
                Research Papers in International Conferences.
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="font-mono text-primary-500 font-bold inline-flex">
                &gt;
              </div>
              <div>
                Earned a PhD in Computer Science & Engineering for my work on
                Intelligent Tutoring Systems.
              </div>
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
          onClick={() => (window.location.href = "mailto:bhaambhu@gmail.com")}
          className="px-4 py-2 flex bg-white border-2 self-center border-primary-500 rounded font-mono font-bold tracking-widest text-primary-500"
        >
          SAY&nbsp;HELLO
        </button>

        <p className="text-slate-700 font-mono text-[10px] mt-8 self-center italic">
          Made for you with{" "}
          <span className="text-primary-500 font-bold">love</span>, like all my
          other projects.
        </p>
      </Section>
    </Page>
  );
}
