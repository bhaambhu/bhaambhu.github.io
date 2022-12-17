import React from 'react'

export default function Quote(props) {
  return (
    <p className='text-slate-700 font-bold text-sm tracking-wider leading-relaxed xsm:text-base'>
      &ldquo;{props.children}&rdquo;
    </p>
  )
}
