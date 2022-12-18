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
import Navbar from '../components/Navbar'

export default function Shades() {
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
      <Navbar title='SHADES' links={['features', 'maps', 'note']} />
      <Script src='./navbarScript.js' strategy="lazyOnload" />
      <main className=' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto'>
        <H1Header title='SHADES: Combat' />
        <Paragraph>A top down shooter game I made for the android platform. This game is not open-source yet but I plan to make it.
        </Paragraph>
        <Video autoPlay loop muted src={"/shades/MainMenu.mp4"} />
        <Paragraph>The game was loved by the people, and was an instant hit with over <b>1 Million</b> downloads and an average
          rating of <b>4.5/5 stars</b> and <b>19K</b> reviews on the Google Play Store.
        </Paragraph>
        <ScreenshotContainer>
          <Screenshot src="/shades/playstore-1.jpg" />
          <Screenshot src="/shades/playstore-2.jpg" />
        </ScreenshotContainer>
        <H2Header title="Why I Made This Project" />
        <Paragraph>I just wanted to play this type of game with my friends, but could not find any, so I decided to make one. If you
          are a fan of the good-old shooter games we used to play on computers, you will like this.</Paragraph>
        <H2Header title="Tech" />
        <Paragraph>Unity3D, C#, Blender, GIMP, Google Play Services</Paragraph>

        <section id='features'>
          <H1Header title="Features" />
          <H2Header title="Enemy AI" />
          <Paragraph>For the player the game is top-down, but the AI behave naturally according to if they see or hear something.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/AI-Half-Normal.mp4" />
          <H2Header title="Character Customizer" />
          <Paragraph>Since this is a top down game, the character&apos;s minute details are not much visible during the gameplay, but
            still, character customization was implemented to allow the players to be unique, especially during multiplayer
            sessions.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Character.mp4" />
          <H2Header title="Weapons Market" />
          <Paragraph>A vast range of weapons, with their own sounds and in-game 3D models. The weapons are the only items that could
            be purchased using the in-game currency <b className="GoldText">Black Gold</b>.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/WeaponMarket.mp4" />
          <H2Header title="Multiplayer" />
          <Paragraph>The game supports Online Multiplayer and Local Multiplayer (through WiFi Hotspot) and three multiplayer modes - <b>Deathmatch</b>, <b>Team Deathmatch</b>, and <b>Capture the Flag</b>. </Paragraph>
          <HorizontalScreenshot src="/shades/MultiplayerMenu.png" />
          <Paragraph>Both of these technologies have many differences, for local multiplayer has less latency and packet loss than online mutlplayer.</Paragraph>
          <Paragraph>Following video shows the <b>LAN connectivity</b> and the <b>Map and Time Voting System</b> through which all players can vote for their desired map and match time length.</Paragraph>
          <Video preload="none" loop muted controls src="/shades/LAN.mp4" type="video/mp4" />
          <Paragraph>Deathmatch and Team Deathmatch are very common, below is a demonstration of a 2-player <b>Capture the Flag</b> match. In this game mode, the game divides the players into two teams - <b className="text-blue-500">Team A</b> and <b className="text-red-500">Team B</b>, the map has 3 Flags and the players have to turn each flag into their team&apos;s color and make them stay like that for 30 seconds to win. If round timer runs out before that, the team with majority of flags wins. It is most fun when it turns into pure chaos - when both teams have multiple players.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/LAN-CTF.mp4" />
          <H2Header title="Google Sign In" />
          <Paragraph>User can sign-in through Google Play Games, which further allows the player to <b>save progress on the cloud</b>, play <b>online multiplayer</b> and unlock <b>achievements</b>.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/SignInOut.mp4" />
          <H2Header title="Stats" />
          <Paragraph>The game collects the player&#39;s various stats for display in the Hall of Fame section.</Paragraph>
          <Video autoPlay loop muted src="/shades/Stats.mp4" />
          <Paragraph>Also, the player earns XP points by playing and killing in different styles, which in-turn promote the rank of the player, making the player eligible of acquiring better weapons.</Paragraph>
          <H2Header title="Small Size" />
          <Paragraph>All of this - the 6 lightmapped maps, weapon models, character creation assets, pickup models, enemy models and animations, sound effects, voices, bgm, 2d Assets, libraries and code - comes in a small package of only <strong>71MB</strong>, achieved through various performance adjustments for low-spec mobile phones.
          </Paragraph>
        </section>

        <section id="maps">
          <H1Header title="Maps" />
          <Paragraph>The game had 6 maps, from small to large to very large size. The maps are beautifully lit and carefully crafted for strategic multiplayer spawning, enemy patrol paths, and pickups.</Paragraph>
          <H2Header title="1. Carnage" />
          <Paragraph>Small sized map for intence combat and enough corners. It&apos;s the same map that is shown in the Enemy AI and
            Multiplayer videos above.</Paragraph>
          <H2Header title="2. Villa" />
          <Paragraph>Medium sized map for team combat in an indoor-home setting.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Villa.mp4" />
          <H2Header title="3. Theater" />
          <Paragraph>Medium sized map inspired by the theater map from Rainbow Six Vegas 2.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Theater.mp4" />
          <H2Header title="4. Apocalypse" />
          <Paragraph>Large sized map with an outdoor post-apocalyptic setting.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Apocalypse.mp4" />
          <H2Header title="5. Office" />
          <Paragraph>Medium sized map with a <em>3AM at the office</em> vibe.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Office.mp4" />
          <H2Header title="6. Faller" />
          <Paragraph>Small sized map in which players have to be careful to not fall down.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Faller.mp4" />
        </section>

        <section id='note'>
          <H1Header title="A Thanking Note" />
          <Paragraph>I am endlessly thankful for the love and support this game received, especially the love I received from the people through this game. There have been countless positive and heart-warming reviews, comments, and e-mails by the players, that I love to go back to and read whenever I get a chance. My journey of life has been a <i>little more amazing</i> because of <b className="text-pink-500">YOU</b>.</Paragraph>
          <Paragraph>Currently, this game is disabled on the Google Play Store because it needs an update to include various things. One of these is to show the user a terms and conditions screen for the anonymous data collection done by the Unity Analytics library. Also, the multiplayer technologies that the game uses have become obsolete over the years and need to be changed.</Paragraph>
          <Paragraph>I started making an updated and improved version in 2019 with a different and improved multiplayer technology, but got really busy with my career and have been really busy ever since so it never got released.</Paragraph>
          <Video preload="none" controls loop muted src="/shades/Update.mp4" />
          <Paragraph>You can see the updated and sleek character customizer.</Paragraph>
          <HorizontalScreenshot src="/shades/update-2.png" />
          <Paragraph>Regards,<br /><a href="https://bhaambhu.com"><b className="text-pink-500 ">Sanjay Bhaambhu</b></a>.</Paragraph>
        </section>
      </main>
    </div >
  )
}
