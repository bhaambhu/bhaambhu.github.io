import React from 'react'
import Head from 'next/head'
import { SEOProps } from '../config/interfaces'

export default function SEO({ pageTitle = 'Sanjay Bhaambhu', pageDesc = "Sanjay Bhaambhu: software engineer building React Native apps, full-stack products and games.", keywords=[] }: SEOProps) {
  const defaultKeywords = ['sanjay bhaambhu', 'sanjay bhambhu', 'bhambhu', 'bhaambhu', 'kuk', 'cdlu', 'sirsa', 'sarjit']
  if (pageTitle == '') pageTitle = 'Sanjay Bhaambhu'
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
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content="https://www.bhaambhu.com/og-image-2026.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:url" content="https://www.bhaambhu.com/" />

      <link rel="canonical" href="https://www.bhaambhu.com/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
