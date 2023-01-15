import React from 'react'
import { FaExternalLinkAlt, FaFileDownload, FaGithub, FaGithubSquare } from 'react-icons/fa';
import { ButtonProps } from '../config/interfaces';

export function Button({ href = null, children, iconExternal = false, iconDownload = false, iconGitHub = false, dashed = false, outline = false, disabled = false, newTab = false }: ButtonProps) {
  return (
    <button
      onClick={() => { if (href && !disabled) { if (newTab) window.open(href); else window.location.href = href } }}
      // onClick={() => { if (href && !disabled) window.location.href = href; }}
      className={`
          px-2 py-1 flex items-center 
          ${outline ? 'bg-white text-primary-500' : 'bg-primary-500 text-white'}
          border-2 border-primary-500 rounded 
          font-mono font-bold tracking-widest 
          ${dashed ? 'border-dashed' : ''}
          ${disabled ? 'bg-slate-400 border-slate-400 text-slate-300 cursor-not-allowed' : ''}
      `}
    >
      <span className='mt-0.5'>{children}</span>
      {iconExternal &&
        <>
          &nbsp;<FaExternalLinkAlt className='self-center' />
        </>
      }
      {iconDownload &&
        <>
          &nbsp;<FaFileDownload className='self-center' />
        </>
      }
      {iconGitHub &&
        <>
          &nbsp;<FaGithub className='self-center text-xl' />
        </>
      }
    </button>
  )
}