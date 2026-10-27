import React, { useEffect, useState } from "react";

/**
 * A nudge at the bottom of the first screen: the hero fills the viewport, so
 * some visitors don't realise the page carries on. It fades once they scroll.
 */
export default function ScrollCue({ href }: { href: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      aria-label="Scroll down to About me"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 font-mono text-xs font-bold tracking-widest text-slate-500 hover:text-primary-500 transition-opacity duration-500 print:hidden ${
        scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      SCROLL
      <svg
        aria-hidden
        className="w-6 h-6 text-primary-500 motion-safe:animate-bounce"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  );
}
