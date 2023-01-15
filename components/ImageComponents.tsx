import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { screenshotProps } from "../config/interfaces"

export function ScreenshotContainer(props: ComponentProps<'div'>) {
  return (
    <div className='flex justify-between my-5 w-full md:w-[80%]'>{props.children}</div>
  )
}

export function Screenshot({ src }: screenshotProps) {
  return (
    <img src={src} className="w-[48%] border border-gray-500" />
  )
}

export function HorizontalScreenshot({ src, className='', alt = '' }: screenshotProps) {
  return (
    <img alt='' src={src} className={twMerge(`block my-5 w-full md:w-[80%] `+className)} />
  )
}