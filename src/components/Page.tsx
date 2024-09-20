import React from 'react'
import { twMerge } from 'tailwind-merge'
import { PageProps } from '../config/interfaces'
import Navbar from './Navbar'
import SEO from './SEO'

export default function Page(pageProps: PageProps) {
  return (
    <div className='bg-slate-50'>
      <SEO pageTitle={pageProps.title} keywords={pageProps.seoKeywords} pageDesc={pageProps.description} />
      <Navbar title={pageProps.title} links={pageProps.links} />
      <main className={twMerge(' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto w-full print:p-0 print:m-0 '+pageProps.className)}>
        {pageProps.children}
      </main>
    </div >
  )
}
