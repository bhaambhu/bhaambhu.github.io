import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ButtonFilled({href="#", children, external=false}) {
  return (
    <button onClick={()=>{window.location.href = href;}} className='px-2 py-1 bg-primary-500 rounded flex items-center font-mono text-white font-bold tracking-widest'>{children}{external && <>&nbsp;<FaExternalLinkAlt className='self-center' /></>}</button>
  )
}
