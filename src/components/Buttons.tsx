import React, { ComponentProps } from "react";
import {
  FaExternalLinkAlt,
  FaFileDownload,
  FaGithub,
  FaGithubSquare,
  FaPrint,
} from "react-icons/fa";

interface ButtonProps extends ComponentProps<"button"> {
  href?: string | null;
  children?: React.ReactNode;
  iconExternal?: boolean;
  iconDownload?: boolean;
  iconPrint?: boolean;
  iconGitHub?: boolean;
  dashed?: boolean;
  outline?: boolean;
  disabled?: boolean;
  newTab?: boolean;
}

export function Button({
  href = null,
  children,
  iconExternal = false,
  iconDownload = false,
  iconPrint = false,
  iconGitHub = false,
  dashed = false,
  outline = false,
  disabled = false,
  newTab = false,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      onClick={
        otherProps.onClick
          ? otherProps.onClick
          : () => {
              if (href && !disabled) {
                if (newTab) window.open(href);
                else window.location.href = href;
              }
            }
      }
      // onClick={() => { if (href && !disabled) window.location.href = href; }}
      // A subtle hover: filled buttons lighten a shade, hollow ones take a faint tint.
      className={`
          px-2 py-1 flex items-center
          border-2 rounded transition-colors duration-150
          font-mono font-bold tracking-widest
          ${dashed ? "border-dashed" : ""}
          ${
            disabled
              ? "bg-slate-400 border-slate-400 text-slate-300 cursor-not-allowed"
              : `cursor-pointer border-primary-500 ${
                  outline
                    ? "bg-white text-primary-500 hover:bg-primary-50"
                    : "bg-primary-500 text-white hover:bg-primary-400 hover:border-primary-400"
                }`
          }
      `}
    >
      <span className="mt-0.5">{children}</span>
      {iconExternal && (
        <>
          &nbsp;
          <FaExternalLinkAlt className="self-center" />
        </>
      )}
      {iconDownload && (
        <>
          &nbsp;
          <FaFileDownload className="self-center" />
        </>
      )}
      {iconGitHub && (
        <>
          &nbsp;
          <FaGithub className="self-center text-xl" />
        </>
      )}
      {iconPrint && (
        <>
          &nbsp;
          <FaPrint className="self-center text-xl" />
        </>
      )}
    </button>
  );
}
