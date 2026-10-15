import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { screenshotProps } from "../config/interfaces";
import { CgScrollH } from "react-icons/cg";

export function ScreenshotContainer(props: ComponentProps<"div">) {
  return (
    <div className="flex justify-between my-5 w-full md:w-[80%]">
      {props.children}
    </div>
  );
}

export function ScrollableScreenshotsGallery(props: ComponentProps<"div">) {
  return (
    <div className="flex justify-between my-5 w-full relative">
      {/* Vertical padding leaves room for the phone frames' shadow, which
          the horizontal scroller would otherwise clip. */}
      <div className="flex overflow-x-auto gap-3 scrollbar w-full pt-1 pb-3 px-1">
        {props.children}
      </div>
      {/* <div className="border-2 border-red-500 bg-white absolute -right-5 px-2 top-[50%] rounded-md animate-wiggle">
        <CgScrollH className="text-2xl text-red-500" />
      </div> */}
    </div>
  );
}

export function ScreenshotGalleryItem({ src, width="200px", alt = "Screenshot" }: screenshotProps) {
  return <img src={src} alt={alt} loading="lazy" className=" rounded-md " width={width}/>;
}

/**
 * A phone screenshot in a slim black bezel. Just enough to read as a phone at
 * card size; a full device mockup turns to noise at 200px.
 */
export function PhoneScreenshot({ src, width = "200px", alt = "Screenshot" }: screenshotProps) {
  return (
    <div
      className="shrink-0 rounded-[22px] bg-slate-900 p-[5px] shadow-md ring-1 ring-slate-700/60"
      style={{ width }}
    >
      <img src={src} alt={alt} loading="lazy" className="block w-full rounded-[17px]" />
    </div>
  );
}

/**
 * A desktop screenshot in a slim browser window, the web counterpart of
 * PhoneScreenshot: a dark title bar with the three window dots.
 */
export function BrowserScreenshot({ src, width = "600px", alt = "Screenshot" }: screenshotProps) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-[10px] bg-slate-900 shadow-md ring-1 ring-slate-700/60"
      style={{ width }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

export function Screenshot({ src, alt = "Screenshot" }: screenshotProps) {
  return <img src={src} alt={alt} loading="lazy" className="w-[48%] border border-gray-500" />;
}

export function HorizontalScreenshot({
  src,
  className = "",
  alt = "",
}: screenshotProps) {
  return (
    <img
      alt={alt}
      loading="lazy"
      src={src}
      className={twMerge(`block my-5 w-full md:w-[80%] ` + className)}
    />
  );
}
