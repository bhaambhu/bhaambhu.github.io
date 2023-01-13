import React from 'react'
import { FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa';
import { ButtonProps } from '../config/interfaces';

// export function ButtonFilled({ href = "#", children, external = false }) {
//   return (
//     <button
//       onClick={() => { if (href) window.location.href = href; }}
//       className='px-2 py-1 bg-primary-500 rounded flex items-center font-mono text-white font-bold tracking-widest'
//     >
//       {children}
//       {external &&
//         <>
//           &nbsp;<FaExternalLinkAlt className='self-center' />
//         </>
//       }
//     </button>
//   )
// }

export function Button({ href = null, children, iconExternal = false, iconDownload = false, dashed = false, outline = false }: ButtonProps) {
  return (
    <button
      onClick={() => { if (href) window.location.href = href; }}
      className={`
          px-2 py-1 flex items-center 
          ${outline ? 'bg-white text-primary-500' : 'bg-primary-500 text-white' }
          border-2 border-primary-500 rounded 
          font-mono font-bold tracking-widest 
          ${dashed ? 'border-dashed' : ''}
      `}
    >
      {children}
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
    </button>
  )
}