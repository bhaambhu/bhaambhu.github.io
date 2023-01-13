import { ComponentProps, ImgHTMLAttributes } from "react"

export function ScreenshotContainer(props: ComponentProps<'div'>) {
  return (
    <div className='flex justify-between my-5 w-full md:w-[80%]'>{props.children}</div>
  )
}

export function Screenshot({ src }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img src={src} className="w-[48%] border border-gray-500" />
  )
}

export function HorizontalScreenshot({ src, alt = '' }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img alt='' src={src} className="block my-5 w-full md:w-[80%]" />
  )
}