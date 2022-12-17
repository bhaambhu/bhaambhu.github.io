import React from 'react'
import { FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa';

export default function ButtonOutline({ href = "#", children, external = false, download=false }) {
  return (
    <button onClick={() => { window.location.href = href; }} className='px-2 py-1 flex bg-white border-2 items-center border-primary-500 rounded font-mono font-bold tracking-widest text-primary-500'>{children}{external && <>&nbsp;<FaExternalLinkAlt className='self-center' /></>}{download && <>&nbsp;<FaFileDownload className='self-center' /></>}</button>
  )
}
