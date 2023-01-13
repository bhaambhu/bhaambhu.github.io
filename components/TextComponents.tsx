import { ComponentProps } from "react";
import { Text } from "../config/interfaces";

export function Paragraph(props : ComponentProps<'div'>) {
  return (
    <div className='text-slate-700 my-5 text-sm tracking-wider leading-relaxed xsm:text-base'>
      {props.children}
    </div>
  )
}

export function Quote(props : ComponentProps<'p'>) {
  return (
    <p className='text-slate-700 font-bold text-sm tracking-wider leading-relaxed xsm:text-base'>
      &ldquo;{props.children}&rdquo;
    </p>
  )
}

export function H1(props : Text) {
  return (
    <>
      {/* Margin for Navbar */}
      <div className='w-full h-28' />
      {/* Section Header */}
      <div className='flex mb-8 md:w-[70%]'>
        <div className='mr-4 p-0 bg-primary-500 w-20 h-[2px] self-center mb-2' />
        <div className='text-dynamicHeader flex font-mono font-bold tracking-widest text-primary-500 mb-2.5 mr-4'>{props.children?.replace(/ /g, '\u00a0')}</div>
        <div className='p-0 bg-primary-500 w-full h-[2px] self-center mb-2' />
      </div>
    </>
  )
}

export function H2(props : Text) {
  return (
    <>
      {/* Top Margin */}
      <div className='w-full h-6' />

      {/* Section Header */}
      <div className='flex mb-4 md:w-[70%]'>
        <div className='text-lg flex font-mono font-bold tracking-widest text-primary-500 mb-2.5 mr-4'>{props.children?.replace(/ /g, '\u00a0')}</div>
        <div className='p-0 bg-primary-500 w-full h-[2px] self-center mb-2' />
      </div>
    </>
  )
}