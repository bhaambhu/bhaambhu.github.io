import Head from 'next/head'
import Script from 'next/script'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ButtonFilled from '../components/ButtonFilled'
import ButtonOutline from '../components/ButtonOutline'
import Paragraph from '../components/Paragraph'
import ProjectTile from '../components/ProjectTile'
import H1Header from '../components/H1Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <Head>
        <title>Sanjay Bhaambhu</title>
        <meta name="keywords" content="sanjay bhaambhu, sanjay bhambhu, bhambhu, shades, shades combat, shades combat militia, kuk, cdlu, sanjay shades, sanjay bhambhu shades, shades android, shades iphone, sirsa, sarjit, shades game, shades combat game" />
        <meta name="description" content="A guy trying his best." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name="author" content="Sanjay Bhaambhu" />
        {/* OpenGraph properties */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sanjay Bhaambhu" />
        <meta property="og:title" content="Sanjay Bhaambhu" />
        <meta property="og:url" content="https://www.bhaambhu.com/" />

        <link rel="canonical" href="https://www.bhaambhu.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar links={['about', 'projects', 'contact']} />
      <Script src='./navbarScript.js' strategy="lazyOnload" />
      <main className=' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto'>
        {/* Home Section */}
        <section className='min-h-screen flex flex-col justify-center'>
          <p className='font-mono font-bold tracking-widest text-primary-500 mb-4'>Hi, my name is</p>
          <h1 className='text-dynamic font-bold text-slate-900 mb-3'>Sanjay Bhaambhu.</h1>
          <p className='text-dynamic font-bold text-slate-600'>I build things.</p>
          <Paragraph>I love making websites, apps, and games, studying new technologies, and building engaging multi-platform products.</Paragraph>
        </section>

        {/* About Section */}
        <section id='about' className='min-h-screen flex flex-col justify-start'>

          <div className='md:w-[60%]'>
            <H1Header title='About Me' />
          </div>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='md:max-w-[60%]'>
              <Paragraph>Hello! My creative journey started in 2009, when I 3D-modeled our house and made mods for counter-strike. That transitioned to mobile app development as Android phones were getting introduced. My passion for video-games and 3D graphics led me toward making multi-player mobile games and university education got me into making web-projects. I also have an eye for good design and I try to align the design of my products to industry standards.
              </Paragraph>
              <Paragraph>
                Here are a few technologies I&apos;ve worked with recently:
              </Paragraph>
              <ul className='text-slate-700 text-xs text-justify font-mono grid grid-cols-2 gap-y-2 mt-4 mb-10 gap-x-2'>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>JavaScript</li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>React</li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>Next JS</li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>Django</li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>Unity 3D</li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>Mongo DB</li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'><i>php</i></li>
                <li className='before:content-["▹"] before:text-primary-500 before:font-sans before:pr-2'>SQL</li>
              </ul>
            </div>
            {/* Profile Picture Container */}
            <div className='max-w-xs mx-12 self-center md:self-start'>
              <picture className='relative group h-fit'>
                <div className='transition ease-in-out duration-500 group-hover:transition group-hover:duration-500 rounded group-hover:translate-x-3 group-hover:translate-y-4 border-primary-500 border-2 absolute w-full h-full top-0 left-0 translate-x-4 translate-y-6' />
                <img className='rounded group-hover:grayscale-0 grayscale transition duration-500 z-10' alt='Sanjay Himself' src={'/close.jpg'} />
                <div className='absolute w-full h-full bg-primary-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-500 ' />
              </picture>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='min-h-screen flex flex-col justify-start'>
          <H1Header title='Featured Projects' />

          {/* CAPTAIN Project Tile */}
          <ProjectTile
            title='CAPTAIN'
            tags={['Next JS', 'React JS', 'PostgreSQL', 'React Native', 'EXPO']}
            about='An intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The architecture is made in such a way that no piece of knowledge needs to repeat more than once.'
          ><ButtonFilled href="/captain">DETAILS</ButtonFilled>
          </ProjectTile>

          {/* SHADES Project Tile */}
          <ProjectTile
            title='SHADES: Combat'
            tags={['UNITY 3D', 'C#', 'Enemy AI', 'Realtime Multiplayer', 'In-App-Purchases', 'Google Play Services']}
            about='A top down shooter game I made for the android platform. The game was an instant hit with over 1 million downloads and an average rating of 4.5/5 stars.'
          ><ButtonFilled href="/shades">DETAILS</ButtonFilled>
            <ButtonOutline href='/shades/shades.apk' download>APK</ButtonOutline></ProjectTile>

          {/* Unity Ludo Framework */}
          <ProjectTile
            title='Unity Ludo Framework'
            tags={['UNITY 3D', 'C#']}
            about='A working Unity project for creating any type of Ludo game. Currently setup as a mobile-based 2D Ludo game with working AI. Can be easily extended to a 3D game or a completely different Ludo game if needed.'
          ><ButtonFilled href="/unity-ludo">DETAILS</ButtonFilled>
            <ButtonOutline href='https://github.com/bhaambhu/Unity-Ludo-Framework' external>GITHUB</ButtonOutline></ProjectTile>

          {/* SANWIKI Project Tile */}
          <ProjectTile
            title='phpWikiCMS'
            tags={['PHP', 'MySQL']}
            about='A framework that allows you to easily create a wiki style page management system, supports tree-style relationships and their management and viewing.'
          ><ButtonFilled href="/phpWikiCMS">DETAILS</ButtonFilled>
            <ButtonOutline href='https://github.com/bhaambhu/phpWikiCMS' external>GITHUB</ButtonOutline></ProjectTile>



          <H1Header title='More Projects' />
          {/* KUK Project Tile */}
          <ProjectTile
            title='KUK&nbsp;Student Notification & Information System'
            tags={['PHP', 'MySQL', 'Android', 'Java', 'SQLite', 'Push Notifications', 'Material Design']}
            about='A project I made for KUK DCSE. This contained of a php backend for staff and android app for the students. The most interesting part was the time table component.'
          />

          {/* Cheatify Project Tile */}
          <ProjectTile
            title='Cheatify'
            tags={['Android', 'Java', 'SQLite', 'Google Sheets']}
            about='This was a beautifully designed Android adaptation of the Cheatbook encyclopedia of video game cheats - made with permission taken from creator of the original cheatbook. Upon installation, my app downloaded a database of video game cheats and guides to the phone for offline viewing and also used google sheets as a free online database - for back in the days when internet was expensive.'
          />

          {/* Rough Fight Project Tile */}
          <ProjectTile
            title='Rough Fight'
            tags={['Unity 3D', 'C#']}
            about='This was a brawl style game that included hand-combat AI that would fight and dodge player moves. It also featuprimary local multiplayer. This project was never released and remains incomplete.'
          />
          {/* Clock Widget Project Tile */}
          <ProjectTile
            title='Minimal Clock Widget'
            tags={['Android', 'Java']}
            about='In the early days of android every provider like HTC, Samsung, etc. had their own different looking user interfaces and clock widget. With this widget I tried to provide users with a simple, minimal and elegant time viewing experience on their homescreens.'
          />
          {/* Hummer Project Tile */}
          <ProjectTile
            title='Hummer&nbsp;3D&nbsp;Live&nbsp;Wallpaper'
            tags={['Android', 'Unity 3D', 'UnityScript']}
            about='Part of my early experiments with android development, this live wallpaper featuprimary a 3d model of the popular GMC Hummer that responded to touches.'
          />
        </section>

        {/* Contact Section */}
        <section id='contact' className='flex flex-col justify-start'>
          <H1Header title='Get In Touch' />

          <Paragraph>Whether you have any work opportunity, a question, or just want to say hi, I&apos;ll try my best to get back to you!</Paragraph>
          <br />
          <button onClick={() => window.location.href = 'mailto:bhaambhu@gmail.com'} className='px-4 py-2 flex bg-white border-2 self-center border-primary-500 rounded font-mono font-bold tracking-widest text-primary-500'>SAY&nbsp;HELLO</button>

          <p className='text-slate-700 font-mono text-xs mt-8 self-center'>Built by Sanjay Bhaambhu</p>
        </section>
      </main>
    </div>
  )
}
