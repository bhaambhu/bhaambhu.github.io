import React from 'react'

export default function HorizontalScreenshot({src}) {
  return (
    <img src={src} className="block my-5 w-full md:w-[80%]" />
  )
}
