import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <>
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
      {/* <Script src='./navbarScript.js' strategy="lazyOnload" /> */}
      <main>
        {/* Home Section */}
        <section className='min-h-screen p-5 flex flex-col justify-center'>
          <p className='font-mono tracking-wide text-red-500 mb-2.5'>Hi, my name is</p>
          <h1 className='text-dynamic leading-10 sm:leading-none font-extrabold text-slate-900 mb-2.5'>Sanjay Bhaambhu.</h1>
          <p className='text-4xl font-extrabold text-slate-600 mb-3'>I build things on computers.</p>
          <p className='text-slate-700 font-mono text-xs'>I like making websites, apps, and games. I love studying algorithms, concurrent programming (realtime multiplayer environments), and building multi-platform products.</p>
        </section>

        {/* About Section */}
        <section id='about' className='min-h-screen p-5 flex flex-col justify-start'>
          {/* Margin for Navbar */}
          <div className='w-full h-20' />
          <div className='flex'><div className='text-xl flex font-mono font-bold tracking-widest text-red-500 mb-2.5 mr-2'>About&nbsp;Me</div><div className='p-0 bg-red-500 w-full h-[1px] self-center mb-2' /></div>
          <p className='text-slate-700 font-mono text-xs mt-4'>Hello! My creative journey started in 2009, when I 3d modeled our house and made mods for counter-strike. That transitioned to mobile app development as Android phones were getting introduced. My passion for video-games and 3D graphics led me toward making multi-player mobile games and university education got me into making web-projects. I also have an eye for good design and I try to align the design of my products to industry standards.</p>
          <br />
          <p className='text-slate-700 text-xs font-mono text-justify'>Here are a few technologies I&apos;ve worked with recently:</p>
          <ul className='text-slate-700 text-xs text-justify font-mono grid grid-cols-2 gap-y-2 mt-4 gap-x-2'>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>JavaScript</li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>React</li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>Next JS</li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>Django</li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>Unity 3D</li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>Mongo DB</li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'><i>php</i></li>
            <li className='before:content-["▹"] before:text-red-500 before:font-sans before:pr-2'>SQL</li>
          </ul>
          {/* Profile Picture Container */}
          <div className='mt-8 flex justify-center pb-6'>
            <picture className='relative group'>
              <img className='rounded group-hover:grayscale-0 grayscale transition duration-500' alt='Sanjay Himself' src={'/close.jpg'} width={200} height={200} />
              <div className='absolute w-full h-full bg-red-500 top-0 left-0 opacity-30 group-hover:opacity-0 rounded transition duration-500 ' />
              <div className='transition ease-in-out duration-500 group-hover:transition group-hover:duration-500 rounded group-hover:translate-x-3 group-hover:translate-y-3 border-red-500 border-2 absolute w-full h-full top-0 left-0 translate-x-4 translate-y-4 -z-10' />
            </picture>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='min-h-screen p-5 flex flex-col justify-start'>
          {/* Margin for Navbar */}
          <div className='w-full h-20' />
          <div className='flex'>
            <div className='text-xl flex font-mono font-bold tracking-widest text-red-500 mb-2.5 mr-2'>Some&nbsp;Of&nbsp;My&nbsp;Work</div>
            <div className='p-0 bg-red-500 w-full h-[1px] self-center mb-2' />
          </div>

          {/* CAPTAIN Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>CAPTAIN</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>NEXT JS</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>REACT JS</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>POSTGRESQL</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>REACT NATIVE</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>EXPO</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              An intelligent tutoring system that can be used to teach any subject while adapting the course to the learner. The architecture is made in such a way that no piece of knowledge needs to repeat more than once.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>WEBSITE&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>
          
          {/* SHADES Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>SHADES : Combat&nbsp;Militia</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>UNITY 3D</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>C#</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>ENEMY AI</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>REALTIME MULTIPLAYER</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>IN-APP PURCHASES</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>GOOGLE PLAY SERVICES</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              A top down shooter game I made for the android platform. The game was an instant hit with over 1 million downloads and an average rating of 4.5/5 stars.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>

          {/* SANWIKI Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>SanWiki</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>PHP</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>MYSQL</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              A framework through with anyone can create a hierarchical wiki - create pages on the fly that are inserted into a giant tree.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>

          {/* KUK Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>KUK&nbsp;Student Notification & Information System</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>PHP</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>MYSQL</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>ANDROID</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>JAVA</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>SQLITE</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>PUSH NOTIFICATIONS</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>MATERIAL DESIGN</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              A project I made for KUK DCSE. This contained of a php backend for staff and android app for the students. The most interesting part was the time table component.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>

          {/* Rough Fight Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>Rough Fight</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>UNITY 3D</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>C#</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              This was a brawl style game that included hand-combat AI that would fight and dodge player moves. It also featured local multiplayer. This project was never released and remains incomplete.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>

          {/* Cheatify Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>Cheatify</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>ANDROID</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>JAVA</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>SQLITE</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>GOOGLE SHEETS</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              This was a beautifully designed Android adaptation of the Cheatbook encyclopedia of video game cheats - made with permission taken from creator of the original cheatbook. Upon installation, my app downloaded a database of video game cheats and guides to the phone for offline viewing and also used google sheets as a free online database - for back in the days when internet was expensive.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>

          {/* Clock Widget Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>Minimal Clock Widget</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>ANDROID</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>JAVA</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              In the early days of android every provider like HTC, Samsung, etc. had their own different looking user interfaces and clock widget. With this widget I tried to provide users with a simple, minimal and elegant time viewing experience on their homescreens.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>

          {/* Hummer Project Tile */}
          <article className='rounded px-3 py-1.5 ring-2 ring-red-500 my-4'>
            <span className='font-mono text-red-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
            <h1 className='text-2xl font-extrabold'>Hummer 3D Live Wallpaper</h1>

            {/* Tags */}
            <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>ANDROID</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>UNITY 3D</div>
              <div className='bg-white text-red-500 px-2 py-1 rounded font-mono outline-dashed tracking-widest'>UNITYSCRIPT</div>
            </div>

            <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
              Part of my early experiments with android development, this live wallpaper featured a 3d model of the popular GMC Hummer that responded to touches.
            </p>

            {/* Buttons */}
            {/* <div className='flex gap-2 my-2'>
              <button className='px-2 py-1 bg-red-500 rounded font-mono text-white font-bold tracking-widest'>DETAILS</button>
              <button className='px-2 py-1 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>GAMEPLAY&nbsp;<FaExternalLinkAlt className='self-center' /></button>
            </div> */}
          </article>
        </section>

        {/* Contact Section */}
        <section id='contact' className='p-5 flex flex-col justify-start'>
          {/* Margin for Navbar */}
          <div className='w-full h-20' />
          <div className='flex'><div className='text-xl flex font-mono font-bold tracking-widest text-red-500 mb-2.5 mr-2'>Contact&nbsp;Me</div><div className='p-0 bg-red-500 w-full h-[1px] self-center mb-2' /></div>
          <p className='text-slate-700 font-mono text-xs mt-4'>Whether you have any work opportunity, a question, or just want to say hi, I&apos;ll try my best to get back to you!</p>
          <br />
          <button className='px-4 py-2 flex bg-white border-2 self-center border-red-500 rounded font-mono font-bold tracking-widest text-red-500'>SAY&nbsp;HELLO</button>

          <p className='text-slate-700 font-mono text-xs mt-8 self-center'>Designed & Built by Sanjay Bhaambhu</p>
        </section>
      </main>
    </>
  )
}
