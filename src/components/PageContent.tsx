import React from "react";
import { twMerge } from "tailwind-merge";

export default function PageContent(props: JSX.IntrinsicElements["div"]) {
  return (
    <div className={twMerge(" my-4 " + props.className)}>{props.children}</div>
  );
}
