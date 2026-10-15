import { Html, Head, Main, NextScript } from 'next/document'
import { SPLASH_SEEN_KEY } from '../components/Splash'

// Runs before first paint: skip the intro splash if it already played this session
const splashSeenScript = `try{if(sessionStorage.getItem('${SPLASH_SEEN_KEY}')){document.documentElement.classList.add('splash-seen')}}catch(e){}`

export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <link rel='preload' as='image' href='/logo.png' />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: splashSeenScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
