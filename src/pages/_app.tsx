import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Splash from '../components/Splash'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Splash />
    <Component {...pageProps} />
  </>
}

export default MyApp
