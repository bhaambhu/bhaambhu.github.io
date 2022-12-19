import React from 'react'
import { FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa';

export default function ButtonOutline({ href = null, children, external = false, download = false, dashed = false }) {
  return (
    <button onClick={() => { if (href) window.location.href = href; }} className={`px-2 py-1 flex bg-white border-2 items-center border-primary-500 rounded font-mono font-bold tracking-widest text-primary-500 ${dashed ? 'border-dashed' : ''}`}>{children}{external && <>&nbsp;<FaExternalLinkAlt className='self-center' /></>}{download && <>&nbsp;<FaFileDownload className='self-center' /></>}</button>
  )
}
