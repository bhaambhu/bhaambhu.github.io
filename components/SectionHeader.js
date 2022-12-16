import React from 'react'

export default function SectionHeader({ title }) {
  return (
    <div className='flex mb-8 md:w-[70%]'>
      <div className='mr-4 p-0 bg-primary-500 w-20 h-[2px] self-center mb-2' />
      <div className='text-dynamicHeader flex font-mono font-bold tracking-widest text-primary-500 mb-2.5 mr-4'>{title}</div>
      <div className='p-0 bg-primary-500 w-full h-[2px] self-center mb-2' />
    </div>
  )
}
