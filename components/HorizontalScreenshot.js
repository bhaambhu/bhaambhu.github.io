import React from 'react'

export default function HorizontalScreenshot({src, alt=''}) {
  return (
    <img alt='' src={src} className="block my-5 w-full md:w-[80%]" />
  )
}
