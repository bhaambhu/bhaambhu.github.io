import React, { ReactNode, useRef, useState } from "react";
import { BrowserScreenshot, PhoneScreenshot, Screenshot, ScreenshotContainer, ScreenshotGalleryItem, ScrollableScreenshotsGallery } from "./ImageComponents";

interface ProjectCardProps {
  tags?: string[];
  title?: string;
  about?: string;
  children?: ReactNode;
  mobileScreenshots?: string[];
  /** A short true anecdote, shown as a muted line under the tags. */
  funFact?: string;
  /** Landscape phone screenshots, e.g. games played sideways. */
  landscapeScreenshots?: string[];
  desktopScreenshots?: string[];
}

// Corners in card coordinates (-1..1 across, -1..1 down). The card never
// rotates (that made its text blurry); the curl is all in the corner shadows.
const CORNERS = [
  { key: "tl", x: -1, y: -1 },
  { key: "tr", x: 1, y: -1 },
  { key: "bl", x: -1, y: 1 },
  { key: "br", x: 1, y: 1 },
];

// How lifted a corner is: flat when the pointer is on it, fully curled once
// it's about half the card away.
function cornerLift(px: number, py: number, cx: number, cy: number) {
  const d = Math.hypot(px - cx, py - cy) / 2;
  return Math.min(1, Math.max(0, (d - 0.08) / 0.5));
}

export default function ProjectCard(props: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const [light, setLight] = useState({ x: 0, y: 0 });

  // People who ask for less motion get the lift and dimming, with a still shadow.
  const reduceMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || reduceMotion() || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    // -1..1 across the card, from its centre.
    const px = ((e.clientX - r.left) / r.width) * 2 - 1;
    const py = ((e.clientY - r.top) / r.height) * 2 - 1;
    setLight({ x: px, y: py });
  };

  // Convert tags array to elements
  const tags = props.tags?.map((oneTag) => (
    <div
      key={oneTag}
      className="bg-white text-primary-500 px-1 py-0.5 rounded font-mono outline-1 text-xs uppercase outline tracking-widest cursor-default"
    >
      {oneTag}
    </div>
  ));

  return (
    <div className="relative my-4">
      {/* Dims the rest of the page while this card is hovered. It sits outside
          the lifted card: a transformed parent would trap a fixed element. */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-20 bg-slate-900/25 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Curled corners on hover, behind the card; the one nearest the
          pointer presses flat. */}
      {CORNERS.map((c) => (
        <div
          key={c.key}
          aria-hidden
          className={`paper-curl paper-curl-${c.key}`}
          // Above the dimming layer (z 20), just under the lifted card (z 30).
          style={{
            opacity: hovered ? cornerLift(light.x, light.y, c.x, c.y) : 0,
            zIndex: hovered ? 25 : 0,
          }}
        />
      ))}
    <article
      ref={cardRef}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => {
        setHovered(false);
        setLight({ x: 0, y: 0 });
      }}
      onPointerMove={onPointerMove}
      style={{
        // A whole-pixel lift keeps the text sharp; the curled corners behind
        // the card do the rest.
        transform: hovered ? "translateY(-6px)" : "none",
        // The red border, drawn as a shadow ring.
        boxShadow: "0 0 0 2px #ef4444",
      }}
      // Only the hovered card rises above the dimming layer; the rest dim with
      // the page.
      // The arrow everywhere on the card, text included (cursor is inherited,
      // so it replaces the text I-beam); links and buttons set their own hand.
      className={`relative cursor-default bg-white rounded px-3 py-1.5 transition-[transform,box-shadow] duration-200 ease-out ${
        hovered ? "z-30" : "z-0"
      }`}
    >
      <span className="font-mono text-primary-500 font-bold tracking-widest text-sm">
        SOLO&nbsp;PROJECT
      </span>
      <h1 className="text-2xl font-extrabold">{props.title}</h1>
      {/* Tags */}
      <div className="flex gap-2 my-2 text-sm whitespace-nowrap flex-wrap">
        {tags}
      </div>
      {props.funFact && (
        <p className="mb-2 font-mono text-xs italic tracking-wide text-slate-500">
          <span className="not-italic text-primary-500">✦ </span>
          {props.funFact}
        </p>
      )}
      {props.landscapeScreenshots && (
        <ScrollableScreenshotsGallery>
          {props.landscapeScreenshots.map((screenshot) => (
            <PhoneScreenshot src={screenshot} key={screenshot} width="360px" />
          ))}
        </ScrollableScreenshotsGallery>
      )}
      {props.mobileScreenshots && (
        <ScrollableScreenshotsGallery>
          {props.mobileScreenshots?.map((screenshot) => (
            <PhoneScreenshot src={screenshot} key={screenshot} />
          ))}
        </ScrollableScreenshotsGallery>
      )}

      <p className="text-slate-700 text-sm tracking-wider leading-relaxed xsm:text-base">
        {props.about}
      </p>
      {props.desktopScreenshots && (
        <ScrollableScreenshotsGallery>
          {props.desktopScreenshots?.map((screenshot) => (
            <BrowserScreenshot src={screenshot} key={screenshot} />
          ))}
        </ScrollableScreenshotsGallery>
      )}
      {props.children && (
        <div className="flex gap-2 my-2 text-slate-700 text-sm tracking-wider leading-relaxed xsm:text-base">{props.children}</div>
      )}
    </article>
    </div>
  );
}
