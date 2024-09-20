import React from 'react'
import { WorkCardProps } from '../config/interfaces'

export default function WorkCard(props: WorkCardProps) {

  return (
    <article className='bg-white rounded px-3 py-3 ring-2 ring-primary-500 my-4'>
      {/* <span className='font-mono text-primary-500 font-bold tracking-widest text-sm'>{props.organization}</span> */}
      <h1 className='text-2xl font-bold'>{props.jobTitle} <span className='text-primary-500'>@{props.organization}</span></h1>
      {/* Tags */}
      <div className='font-mono uppercase text-sm tracking-widest font-bold text-primary-500 mt-2'>
        {props.period}
      </div>
      {props.children && <div className='flex gap-2 my-2'>
        {props.children}
      </div>}
    </article>
  )
}
