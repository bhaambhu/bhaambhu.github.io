import React from 'react'

export default function SectionHeader({title}) {
  return (
    <div className='flex'>
            <div className='text-xl flex font-mono font-bold tracking-widest text-primary-500 mb-2.5 mr-2'>{title}</div>
            <div className='p-0 bg-primary-500 w-full h-[1px] self-center mb-2' />
          </div>
  )
}
