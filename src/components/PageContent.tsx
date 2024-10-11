import React from "react";
import { twMerge } from "tailwind-merge";

export default function PageContent(props: JSX.IntrinsicElements["div"]) {
  return (
    <article className={twMerge(" my-3.5 text-sb-text font-body tracking-wide " + props.className)}>{props.children}</article>
  );
}
