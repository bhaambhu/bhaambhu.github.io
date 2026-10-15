import React, { useEffect, useState } from "react";

interface TypewriterProps {
  /** Text that never changes, e.g. "I " */
  prefix?: string;
  /** The phrases typed after it, in order; the first is shown when motion is reduced. */
  phrases: string[];
  className?: string;
}

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 2000;
const GAP_MS = 350;

/**
 * Types each phrase, holds it, deletes it and moves on, with a blinking cursor.
 * Screen readers get the whole set once instead of every keystroke, and anyone
 * who asks for reduced motion sees just the first phrase.
 */
export default function Typewriter({ prefix = "", phrases, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(phrases[0].length);
  const [deleting, setDeleting] = useState(false);
  const [still, setStill] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setStill(reduce);
  }, []);

  useEffect(() => {
    if (still) return;
    const phrase = phrases[index];
    let delay: number;
    let next: () => void;

    if (!deleting && length < phrase.length) {
      delay = TYPE_MS;
      next = () => setLength(length + 1);
    } else if (!deleting) {
      delay = HOLD_MS;
      next = () => setDeleting(true);
    } else if (length > 0) {
      delay = DELETE_MS;
      next = () => setLength(length - 1);
    } else {
      delay = GAP_MS;
      next = () => {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      };
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [still, phrases, index, length, deleting]);

  const shown = still ? phrases[0] : phrases[index].slice(0, length);
  const label = prefix + phrases.map((p) => p.replace(/\.$/, "")).join(", ") + ".";

  return (
    <p className={className} aria-label={label}>
      <span aria-hidden>
        {prefix}
        {shown}
        <span className="typewriter-caret" />
      </span>
    </p>
  );
}
