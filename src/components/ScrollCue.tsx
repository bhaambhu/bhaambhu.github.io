import React, { useEffect, useRef, useState } from "react";

/**
 * A nudge at the bottom of a screen-filling section: on a large screen the
 * section fits the viewport exactly, so some visitors don't realise the page
 * carries on. It sits at the bottom of its parent (which must be positioned)
 * and fades once the visitor scrolls into that section.
 */
export default function ScrollCue({ href, label }: { href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const section = ref.current?.parentElement;
    if (!section) return;
    // Hidden once the section's top has scrolled past the top of the screen.
    const onScroll = () => setScrolled(section.getBoundingClientRect().top < -40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      ref={ref}
      href={href}
      aria-label={label}
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
