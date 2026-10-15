import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { DivTextProps, SLinkProps, SpanTextProps } from "../config/interfaces";

export function P(props: ComponentProps<'div'>) {
  return (
    <div className={twMerge('text-slate-700 my-5 print:m-0 text-sm tracking-wider leading-relaxed xsm:text-base text-justify '+props.className)}>
      {props.children}
    </div>
  )
}

export function Quote(props: ComponentProps<'span'>) {
  return (
    <span className='text-slate-700 font-bold text-sm tracking-wider leading-relaxed xsm:text-base'>
      &ldquo;{props.children}&rdquo;
    </span>
  )
}

export function SLink({ href = '#', ...otherProps }: SLinkProps) {
  return (
    <span
      onClick={() => {
        window.location.href = href;
      }}
      className='text-purple-500 font-bold cursor-pointer'
    >
      {otherProps.children}
    </span>
  )
}

export function EM(props: SpanTextProps) {
  return (
    <span className="text-primary-500 font-bold">{props.children}</span>
  )
}

/**
 * Text whose letters each turn dark under the pointer. The change is instant
 * on the way in and fades out slowly, so a sweep across the word leaves a
 * short trail. The whole string stays one label for screen readers.
 */
export function HoverLetters({ text }: { text: string }) {
  return (
    <span aria-label={text}>
      {Array.from(text).map((letter, i) => (
        <span
          key={i}
          aria-hidden
          className='transition-colors duration-700 hover:text-slate-900 hover:duration-0'
        >
          {letter === ' ' ? '\u00a0' : letter}
        </span>
      ))}
    </span>
  )
}

export function H1(props: DivTextProps) {
  return (
    <>
      {/* Margin for Navbar */}
      {/* <div className='w-full h-28' /> */}
      {/* Section Header */}
      <div className='flex mb-8 md:w-[70%] print:hidden'>
        <div className='mr-4 p-0 bg-primary-500 w-20 h-[2px] self-center mb-2' />
        <div className='text-dynamicHeader flex font-mono font-bold tracking-widest text-primary-500 mb-2.5 mr-4'><HoverLetters text={props.children ?? ''} /></div>
        <div className='p-0 bg-primary-500 w-full h-[2px] self-center mb-2' />
      </div>
    </>
  )
}

export function H2(props: DivTextProps) {
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