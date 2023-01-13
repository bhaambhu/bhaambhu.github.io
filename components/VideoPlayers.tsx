import { MediaHTMLAttributes } from "react"

export function Video({ src, ...otherProps }: MediaHTMLAttributes<HTMLVideoElement>) {
  return (
    <video {...otherProps} className="block my-5 w-full md:w-[80%]">
      {/* <source src="/shades/MainMenu.mp4" type="video/webm"> */}
      <source src={src} type="video/mp4" />
      {/* <img src="/shades/MainMenu-fallback.gif" /> */}
    </video>
  )
}

export function VerticalVideo({ src, ...otherProps }: MediaHTMLAttributes<HTMLVideoElement>) {
  return (
    <video {...otherProps} className="block my-5 w-full md:w-[40%]">
      {/* <source src="/shades/MainMenu.mp4" type="video/webm"> */}
      <source src={src} type="video/mp4" />
      {/* <img src="/shades/MainMenu-fallback.gif" /> */}
    </video>
  )
}