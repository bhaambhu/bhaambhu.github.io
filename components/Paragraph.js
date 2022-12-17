import React from 'react'

export default function Paragraph(props) {
  return (
    <div className='text-slate-700 my-5 text-sm tracking-wider leading-relaxed xsm:text-base'>
      {props.children}
    </div>
  )
}
