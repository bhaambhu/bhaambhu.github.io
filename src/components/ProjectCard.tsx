import React, { ReactNode, useState } from "react";
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

export default function ProjectCard(props: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

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
    <article
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      style={{
        // A whole-pixel lift keeps the text sharp.
        transform: hovered ? "translateY(-6px)" : "none",
        // The red border is drawn as a shadow ring, so it is part of this value.
        boxShadow: hovered
          ? "0 0 0 2px #ef4444, 0 18px 30px -14px rgba(15, 23, 42, 0.35)"
          : "0 0 0 2px #ef4444",
      }}
      // The hovered card rises above its neighbours so its shadow isn't covered
      // by the next card.
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
