import React, { useEffect, useState } from 'react'

export const SPLASH_SEEN_KEY = 'bhaambhu-splash-seen'

/**
 * Brief branded intro: the logo over drifting red blobs with a light sweep, then
 * the page fades in. Rendered into the static HTML so there is no flash of content;
 * the inline script in _document hides it on repeat visits within a session.
 * All animation lives in globals.css (.splash-*).
 */
export default function Splash() {
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (document.documentElement.classList.contains('splash-seen')) {
      setMounted(false)
      return
    }
    try {
      sessionStorage.setItem(SPLASH_SEEN_KEY, '1')
    } catch {
      // Storage unavailable (private mode); the splash may show again
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className='splash print:hidden'
      aria-hidden
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) setMounted(false)
      }}
    >
      <div className='splash-blob splash-blob-a' />
      <div className='splash-blob splash-blob-b' />
      <div className='splash-logo'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/logo.png' alt='' width={160} height={160} />
        <div className='splash-shine' />
      </div>
    </div>
  )
}
