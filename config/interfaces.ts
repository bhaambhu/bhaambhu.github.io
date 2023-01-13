import { ComponentProps, ReactNode } from "react";

export interface Text extends ComponentProps<'div'> {
  children: string;
}

export interface ButtonProps {
  href? : string | null;
  children?: React.ReactNode;
  iconExternal?: boolean;
  iconDownload?: boolean;
  dashed?: boolean;
  outline?: boolean;
}

export interface ProjectCardProps {
  tags?: string[];
  title?: string;
  about?: string;
  children?: ReactNode
}

export interface NavbarProps {
  title?: string;
  links: string[];
}