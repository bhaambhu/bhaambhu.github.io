import Head from 'next/head'
import Script from 'next/script'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ButtonFilled from '../components/ButtonFilled'
import ButtonOutline from '../components/ButtonOutline'
import H2Header from '../components/H2Header'
import Paragraph from '../components/Paragraph'
import ProjectTile from '../components/ProjectTile'
import Quote from '../components/Quote'
import Screenshot from '../components/Screenshot'
import ScreenshotContainer from '../components/ScreenshotContainer'
import H1Header from '../components/H1Header'
import Video from '../components/Video'
import HorizontalScreenshot from '../components/HorizontalScreenshot'
import VerticalVideo from '../components/VerticalVideo'

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
        <H1Header title='Unity Ludo Framework' />
        <Paragraph>A framework that allows you to easily create a ludo-style game.</Paragraph>
        <Paragraph>This is a Unity project for creating any type of Ludo game. The basic scenes are setup for a mobile-based 2D Ludo game with working AI. This can be easily extended to a 3D game or a completely different Ludo game if needed.</Paragraph>
        <VerticalVideo controls loop src="/unity-ludo/gameplay.mp4" />

        <H1Header title="User Interface" />
        <Paragraph>It also features my own menu system which you can use for any game project.</Paragraph>
        <Paragraph>I needed a menu that is minimal, easy to navigate, has subtle animations and looks slick.</Paragraph>
        <VerticalVideo controls loop muted src="/unity-ludo/ui.mp4" />
        <H1Header title="Options" />
        <Quote>Every provided asset is a placeholder - you should use your own images, sounds, etc.</Quote>
        <Paragraph>... with that out of the way, the project currently features basic options you can customize from the inspector, and everything else you can customize through the scripts provided.</Paragraph>
        <Paragraph>The basic gameplay and AI options accessible through the inspector:</Paragraph>
        <HorizontalScreenshot src="/unity-ludo/basic.jpeg" />
        <Paragraph>The basic graphics and sound options currently accessible through the inspector:</Paragraph>
        <HorizontalScreenshot src="/unity-ludo/graphics.jpeg" />
        <H1Header title="Tech" />
        <Paragraph>Unity3D, C#.</Paragraph>
      </main>
    </div >
  )
}
