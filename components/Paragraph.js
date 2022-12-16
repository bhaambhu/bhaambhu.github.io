import React from 'react'

export default function Paragraph(props) {
  return (
    <p className='text-slate-700 text-base tracking-wider leading-normal'>{props.children}</p>
  )
}
