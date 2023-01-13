import React from 'react'
import Head from 'next/head'
import { SEOProps } from '../config/interfaces'

export default function SEO({ pageTitle = 'Sanjay Bhaambhu', pageDesc = "A guy trying his best.", keywords=[] }: SEOProps) {
  const defaultKeywords = ['sanjay bhaambhu', 'sanjay bhambhu', 'bhambhu', 'bhaambhu', 'kuk', 'cdlu', 'sirsa', 'sarjit']
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="keywords" content={[...keywords, ...defaultKeywords].join(', ')} />
      <meta name="description" content={pageDesc} />
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
