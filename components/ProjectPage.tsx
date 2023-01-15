import React, { ComponentProps, ReactNode } from 'react'
import { ProjectPageProps } from '../config/interfaces'
import Navbar from './Navbar'
import SEO from './SEO'

export default function ProjectPage({title='Sanjay Bhaambhu', links = [], seoKeywords = [], description='', children} : ProjectPageProps) {
  return (
    <div className='bg-slate-50'>
      <SEO pageTitle={title} keywords={seoKeywords} pageDesc={description}/>
      <Navbar title={title} links={links} />
      <main className=' p-5 xsm:px-12 md:px-24 lg:px-44 max-w-7xl m-auto'>
        {children}
      </main>
    </div >
  )
}
