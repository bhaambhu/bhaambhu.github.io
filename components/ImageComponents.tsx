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
      <div className="flex overflow-x-auto gap-3 scrollbar w-full pb-1.5">
        {props.children}
      </div>
      {/* <div className="border-2 border-red-500 bg-white absolute -right-5 px-2 top-[50%] rounded-md animate-wiggle">
        <CgScrollH className="text-2xl text-red-500" />
      </div> */}
    </div>
  );
}

export function ScreenshotGalleryItem({ src, width="200px", ...otherProps }: screenshotProps) {
  return <img src={src} className=" rounded-md " width={width}/>;
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
