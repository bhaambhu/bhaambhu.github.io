import React from 'react'

export default function VerticalVideo({src, ...otherProps}) {
  return (
    <video {...otherProps} className="block my-5 w-full md:w-[40%]">
      {/* <source src="/shades/MainMenu.mp4" type="video/webm"> */}
      <source src={src} type="video/mp4" />
      {/* <img src="/shades/MainMenu-fallback.gif" /> */}
    </video>
  )
}
