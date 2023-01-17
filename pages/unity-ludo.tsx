import { H1, P, Quote } from '../components/TextComponents'
import { HorizontalScreenshot } from '../components/ImageComponents'
import { VerticalVideo } from '../components/VideoPlayers'
import Page from '../components/Page'
import Section from '../components/Section'

export default function UnityLudo() {
  return (
    <Page title='LUDO' links={['ui', 'options', 'tech']} description='A framework that allows you to easily create a ludo-style game.' seoKeywords={['game', 'unity', 'unity3d', 'mobile game', 'unityproject']}>
      <Section>
        <H1>Unity Ludo Framework</H1>
        <P>A framework that allows you to easily create a ludo-style game.</P>
        <P>This is a Unity project for creating any type of Ludo game. The basic scenes are setup for a mobile-based 2D Ludo game with working AI. This can be easily extended to a 3D game or a completely different Ludo game if needed.</P>
        <VerticalVideo controls loop src="/unity-ludo/gameplay.mp4" />
      </Section>

      <Section id='ui'>
        <H1>User Interface</H1>
        <P>It also features my own menu system which you can use for any game project.</P>
        <P>I needed a menu that is minimal, easy to navigate, has subtle animations and looks slick.</P>
        <VerticalVideo controls loop muted src="/unity-ludo/ui.mp4" />
      </Section>

      <Section id='options'>
        <H1>Options</H1>
        <Quote>Every provided asset is a placeholder - you should use your own images, sounds, etc.</Quote>
        <P>... with that out of the way, the project currently features basic options you can customize from the inspector, and everything else you can customize through the scripts provided.</P>
        <P>The basic gameplay and AI options accessible through the inspector:</P>
        <HorizontalScreenshot src="/unity-ludo/basic.jpeg" />
        <P>The basic graphics and sound options currently accessible through the inspector:</P>
        <HorizontalScreenshot src="/unity-ludo/graphics.jpeg" />
      </Section>

      <Section id='tech'>
        <H1 id='tech'>Tech</H1>
        <P>Unity3D, C#.</P>
      </Section>
    </Page>

  )
}
