import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ButtonFilled from './ButtonFilled'
import ButtonOutline from './ButtonOutline'
import Paragraph from './Paragraph'

export default function ProjectTile(props) {

  // Convert tags array to elements
  const tags = props.tags.map(oneTag =>
    <div key={oneTag} className='bg-white text-primary-500 px-1 py-0.5 rounded font-mono outline-1 text-xs uppercase outline tracking-widest'>{oneTag}</div>
  )

  return (
    <article className='bg-white rounded px-3 py-1.5 ring-2 ring-primary-500 my-4'>
      <span className='font-mono text-primary-500 font-bold tracking-widest text-sm'>SOLO&nbsp;PROJECT</span>
      <h1 className='text-2xl font-extrabold'>{props.title}</h1>
      {/* Tags */}
      <div className='flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap'>
        {tags}
      </div>

      <p className='text-slate-700 text-sm tracking-wider leading-relaxed xsm:text-base'>
      {props.about}
    </p>

      {/* <p className='text-slate-700 font-mono text-sm mt-2 tracking-widest'>
        {props.about}
      </p> */}

      {/* Buttons */}
      {props.children && <div className='flex gap-2 my-2'>
        {props.children}
      </div>}
    </article>
  )
}
