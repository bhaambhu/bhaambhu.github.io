import React, { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface WebGLGameProps {
  /** Path to the Unity WebGL build's index.html, e.g. /unity-ludo/webgl/index.html */
  src: string
  title: string
  /** Optional still image shown before the game loads */
  poster?: string
  /** CSS aspect ratio of the game, e.g. '9 / 16' for a portrait mobile game */
  aspectRatio?: string
  className?: string
}

/**
 * Click-to-play embed for a Unity WebGL build. The build (often 10+ MB) only
 * downloads once the visitor presses Play, so it doesn't slow the page down.
 */
export default function WebGLGame({ src, title, poster, aspectRatio = '16 / 9', className }: WebGLGameProps) {
  const [playing, setPlaying] = useState(false)
  const frameRef = useRef<HTMLIFrameElement>(null)

  return (
    <div className={twMerge('my-5 w-full max-w-sm', className)}>
      <div
        className='relative overflow-hidden rounded-lg border-2 border-primary-500 bg-slate-900'
        style={{ aspectRatio }}
      >
        {playing ? (
          <iframe
            ref={frameRef}
            src={src}
            title={title}
            className='absolute inset-0 h-full w-full'
            allow='fullscreen; autoplay'
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className='group absolute inset-0 flex flex-col items-center justify-center gap-3 text-white'
            style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
          >
            <span className='absolute inset-0 bg-slate-900/60 transition group-hover:bg-slate-900/40' />
            <span className='relative flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 shadow-lg transition group-hover:scale-110'>
              <svg viewBox='0 0 24 24' className='ml-1 h-7 w-7 fill-white' aria-hidden>
                <path d='M8 5v14l11-7z' />
              </svg>
            </span>
            <span className='relative font-mono text-sm font-bold tracking-widest'>PLAY IN BROWSER</span>
          </button>
        )}
      </div>
      {playing && (
        <button
          onClick={() => frameRef.current?.requestFullscreen?.()}
          className='mt-2 font-mono text-xs font-bold tracking-widest text-primary-500 hover:underline'
        >
          FULLSCREEN
        </button>
      )}
    </div>
  )
}
