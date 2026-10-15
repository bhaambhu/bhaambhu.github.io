import React, { ReactNode, useRef, useState } from "react";

/**
 * Each tap on the portrait reveals the next line, explaining the trick a bit
 * at a time and ending on a way to get in touch; then it starts over.
 */
const QUIPS = [
  "It's a depth map!",
  "I just added a depth map to this image… then a normal map… then a shader. I got carried away.",
  "Your cursor is the light. Only what faces it gets its colour back.",
  "An AI model estimated the depth from a single photo, right on my laptop.",
  "You like clicking things. I like building them. We'd get along.",
  "Seriously, the projects are just below ↓",
  "Fine, you win: sanjay@bhaambhu.com",
];

const SHOW_MS = 3600;

export default function PortraitQuips({ children }: { children: ReactNode }) {
  const [tap, setTap] = useState(-1);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const onTap = () => {
    setTap((t) => (t + 1) % QUIPS.length);
    setVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), SHOW_MS);
  };

  return (
    <div className="relative h-full w-full" onClick={onTap}>
      {children}
      {/* Below the portrait, centred on it; announced to screen readers. */}
      <p
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 top-full mt-12 w-[min(320px,85vw)] -translate-x-1/2 text-center font-mono text-sm font-bold tracking-wide text-primary-500 transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        {tap >= 0 ? QUIPS[tap] : ""}
      </p>
    </div>
  );
}
