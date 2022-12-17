import React from 'react'

export default function H2Header({title}) {
  title = title.replace(/ /g, '\u00a0');
  return (
    <>
      {/* Top Margin */}
      <div className='w-full h-6' />

      {/* Section Header */}
      <div className='flex mb-4 md:w-[70%]'>
        <div className='text-lg flex font-mono font-bold tracking-widest text-primary-500 mb-2.5 mr-4'>{title}</div>
        <div className='p-0 bg-primary-500 w-full h-[2px] self-center mb-2' />
      </div>
    </>
  )
}
