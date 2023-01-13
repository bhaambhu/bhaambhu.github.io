import React from 'react'
import Head from 'next/head'

export default function HeadMeta() {
  return (
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
  )
}
