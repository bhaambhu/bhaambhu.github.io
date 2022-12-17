import React from 'react'

export default function ScreenshotContainer(props) {
  return (
    <div className='flex justify-between my-5 w-full md:w-[80%]'>{props.children}</div>
  )
}
