import React from 'react'

export default function Paragraph(props) {
  return (
    <p className='text-slate-700 text-sm tracking-wider leading-relaxed xsm:text-base'>
      {props.children}
    </p>
  )
}
