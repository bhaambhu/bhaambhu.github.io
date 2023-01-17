import React, { ComponentProps } from 'react'
import { SectionProps } from '../config/interfaces'

export default function Section({ navbarGap = true, ...props }: SectionProps) {
  return (
    <div className={props.className} id={props.id}>
      {navbarGap && <div className='w-full h-28 print:hidden' />}
      {props.children}
    </div>
  )
}

export function NavbarGap() {
  return (<div className='w-full h-28 print:hidden' />)
} 
