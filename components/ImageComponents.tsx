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
      <div className="flex overflow-scroll gap-3">{props.children}</div>
      <div className="border-2 border-red-500 bg-white absolute -right-5 px-2 top-[50%] rounded-md animate-wiggle">
        <CgScrollH className="text-2xl text-red-500" />
      </div>
    </div>
  );
}

export function ScreenshotGalleryItem({ src }: screenshotProps) {
  return <img src={src} className="w-[200px] rounded-md " />;
}

export function Screenshot({ src }: screenshotProps) {
  return <img src={src} className="w-[48%] border border-gray-500" />;
}

export function HorizontalScreenshot({
  src,
  className = "",
  alt = "",
}: screenshotProps) {
  return (
    <img
      alt=""
      src={src}
      className={twMerge(`block my-5 w-full md:w-[80%] ` + className)}
    />
  );
}
