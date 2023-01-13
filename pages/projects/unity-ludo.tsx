import Navbar from '../../components/Navbar'
import SEO from '../../components/SEO'
import { H1, Paragraph, Quote } from '../../components/TextComponents'
import { HorizontalScreenshot } from '../../components/ImageComponents'
import {VerticalVideo} from '../../components/VideoPlayers'

export default function UnityLudo() {
  return (
    <div className='bg-slate-50'>
      <SEO pageTitle='Unity Ludo Framework' pageDesc='A framework that allows you to easily create a ludo-style game.' keywords={['game', 'unity', 'unity3d', 'mobile game', 'unityproject']}/>
      <Navbar title='LUDO' links={['ui', 'options', 'tech']} />
      <main className=' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto'>
        <H1>Unity Ludo Framework</H1>
        <Paragraph>A framework that allows you to easily create a ludo-style game.</Paragraph>
        <Paragraph>This is a Unity project for creating any type of Ludo game. The basic scenes are setup for a mobile-based 2D Ludo game with working AI. This can be easily extended to a 3D game or a completely different Ludo game if needed.</Paragraph>
        <VerticalVideo controls loop src="/unity-ludo/gameplay.mp4" />

        <section id='ui'>
        <H1>User Interface</H1>
        <Paragraph>It also features my own menu system which you can use for any game project.</Paragraph>
        <Paragraph>I needed a menu that is minimal, easy to navigate, has subtle animations and looks slick.</Paragraph>
        <VerticalVideo controls loop muted src="/unity-ludo/ui.mp4" />
        </section>
        
        <section id='options'>
        <H1>Options</H1>
        <Quote>Every provided asset is a placeholder - you should use your own images, sounds, etc.</Quote>
        <Paragraph>... with that out of the way, the project currently features basic options you can customize from the inspector, and everything else you can customize through the scripts provided.</Paragraph>
        <Paragraph>The basic gameplay and AI options accessible through the inspector:</Paragraph>
        <HorizontalScreenshot src="/unity-ludo/basic.jpeg" />
        <Paragraph>The basic graphics and sound options currently accessible through the inspector:</Paragraph>
        <HorizontalScreenshot src="/unity-ludo/graphics.jpeg" />
        </section>
        
        <section id='tech'>
        <H1 id='tech'>Tech</H1>
        <Paragraph>Unity3D, C#.</Paragraph>
        </section>
      </main>
    </div >
  )
}
