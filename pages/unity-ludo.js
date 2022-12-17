import Head from 'next/head'
import Script from 'next/script'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ButtonFilled from '../components/ButtonFilled'
import ButtonOutline from '../components/ButtonOutline'
import Paragraph from '../components/Paragraph'
import ProjectTile from '../components/ProjectTile'
import Quote from '../components/Quote'
import H1Header from '../components/H1Header'

export default function UnityLudo() {
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
      <Script src='./navbarScript.js' strategy="lazyOnload" />
      <main className=' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto'>
        adad
        asd
        asd
        asd
        asda
        asdasd<br/>
        asdasd<br/>
        asdasd<br/>
        asdasd<br/>
        asdasd<br/>
        asdasd
        {/* Projects Section */}
        <section id='projects' className='min-h-screen flex flex-col justify-start'>
          <H1Header title='Unity&nbsp;Ludo&nbsp;Framework' />
          <Paragraph>A framework that allows you to easily create a ludo-style game.</Paragraph>
          <br />
          <Paragraph>This is a Unity project for creating any type of Ludo game. The basic scenes are setup for a mobile-based 2D Ludo game with working AI. This can be easily extended to a 3D game or a completely different Ludo game if needed.</Paragraph>

          <H1Header title='User&nbsp;Interface' />
          <Paragraph>It also features my own menu system which you can use for any game project.
          </Paragraph>
          <br />
          <Paragraph>I needed a menu that is minimal, easy to navigate, has subtle animations and looks slick.
          </Paragraph>

          <H1Header title='Options' />
          <Quote>Every provided asset is a placeholder - you should use your own images, sounds, etc.
          </Quote>

          <H1Header title='Tech' />

          {/* CAPTAIN Project Tile */}
          <ProjectTile
            title='CAPTAIN'
            tags={['Next JS', 'React JS', 'PostgreSQL', 'React Native', 'EXPO']}
            about='An intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The architecture is made in such a way that no piece of knowledge needs to repeat more than once.'
          >
          </ProjectTile>

          {/* SHADES Project Tile */}
          <ProjectTile
            title='SHADES: Combat Militia'
            tags={['UNITY 3D', 'C#', 'Enemy AI', 'Realtime Multiplayer', 'In-App-Purchases', 'Google Play Services']}
            about='A top down shooter game I made for the android platform. The game was an instant hit with over 1 million downloads and an average rating of 4.5/5 stars.'
          ><ButtonFilled href="https://bhaambhu.com/SHADES/" external>DETAILS</ButtonFilled>
            <ButtonOutline download>APK</ButtonOutline></ProjectTile>

          {/* SANWIKI Project Tile */}
          <ProjectTile
            title='SANWiki'
            tags={['PHP', 'MySQL']}
            about='A framework through with anyone can create a hierarchical wiki - create pages on the fly that are inserted into a giant tree.'
          />

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

          <H1Header title='Some&nbsp;Experiments' />
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
          <H1Header title='Get&nbsp;In&nbsp;Touch' />

          <Paragraph>Whether you have any work opportunity, a question, or just want to say hi, I&apos;ll try my best to get back to you!</Paragraph>
          <br />
          <button onClick={() => window.location.href = 'mailto:bhaambhu@gmail.com'} className='px-4 py-2 flex bg-white border-2 self-center border-primary-500 rounded font-mono font-bold tracking-widest text-primary-500'>SAY&nbsp;HELLO</button>

          <p className='text-slate-700 font-mono text-xs mt-8 self-center'>Built by Sanjay Bhaambhu</p>
        </section>
      </main>
    </div>
  )
}
