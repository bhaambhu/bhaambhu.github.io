import React, { ReactNode, useRef, useState } from "react";

/**
 * Each tap on the portrait reveals the next quip, explaining the trick a bit
 * at a time and ending on a way to get in touch; then it starts over. A quip
 * is a list of lines that appear one after another, each on its own row.
 */
const QUIPS: string[][] = [
  ["It's a depth map!"],
  ["I just added a depth map to this image…", "then a normal map…", "then a shader.", "I got carried away."],
  ["Your cursor is the lamp.", "The shadows are worked out live, from the depth map."],
  ["An AI model estimated the depth from a single photo,", "right on my laptop."],
  ["You like clicking things.", "I like building them.", "We'd get along."],
  ["Seriously,", "the projects are just below ↓"],
  ["Fine, you win:", "sanjay@bhaambhu.com"],
];

// Pause before each next line. Once the last line is in, the quip stays long
// enough to read: at least HOLD_MS, more for longer quips (about 40 ms a
// character, so "It's a depth map!" keeps the minimum).
const LINE_GAP_MS = 900;
const HOLD_MS = 2600;
const MS_PER_CHAR = 40;

const holdFor = (quip: string[]) =>
  Math.max(HOLD_MS, 1800 + quip.join(" ").length * MS_PER_CHAR);

export default function PortraitQuips({ children }: { children: ReactNode }) {
  const [tap, setTap] = useState(-1);
  const [lines, setLines] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const onTap = () => {
    timers.current.forEach(clearTimeout);
    const next = (tap + 1) % QUIPS.length;
    const quip = QUIPS[next];
    setTap(next);
    setLines(1);
    setVisible(true);
    // Reveal the remaining lines one by one, then hide the whole quip.
    timers.current = quip.slice(1).map((_, i) =>
      setTimeout(() => setLines(i + 2), LINE_GAP_MS * (i + 1))
    );
    timers.current.push(
      setTimeout(() => setVisible(false), LINE_GAP_MS * (quip.length - 1) + holdFor(quip))
    );
  };

  const quip = tap >= 0 ? QUIPS[tap] : [];

  return (
    <div className="relative h-full w-full" onClick={onTap}>
      {children}
      {/* Below the portrait, centred on it; the whole quip is announced to
          screen readers at once. */}
      <div
        aria-live="polite"
        aria-label={quip.join(" ")}
        className={`pointer-events-none absolute left-1/2 top-full mt-12 w-[min(320px,85vw)] -translate-x-1/2 text-center font-mono text-sm font-bold tracking-wide text-primary-500 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {quip.slice(0, lines).map((line, i) => (
          <p key={`${tap}-${i}`} aria-hidden className="crumb-in leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
