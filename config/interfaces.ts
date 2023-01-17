import { ComponentProps, ReactNode } from "react";

export interface DivTextProps extends ComponentProps<'div'> {
  children: string;
}

export interface SpanTextProps extends ComponentProps<'span'> {
  children: string;
}

export interface SLinkProps extends ComponentProps<'span'>{
  href?: string;
}

export interface screenshotProps extends ComponentProps<'img'> {
  src: string;
}

export interface ButtonProps extends ComponentProps<'button'> {
  href? : string | null;
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

export interface WorkCardProps {
  period?: string;
  jobTitle?: string;
  organization?: string;
  children?: ReactNode
}

export interface ProjectCardProps {
  tags?: string[];
  title?: string;
  about?: string;
  children?: ReactNode
}

export interface NavbarProps {
  title?: string;
  links?: string[];
  showResumeButton?: boolean;
}

export interface SEOProps {
  pageTitle?: string;
  pageDesc?: string;
  keywords?: string[];
}

export interface PageProps extends ComponentProps<'div'> {
  title?: string;
  links?: string[];
  seoKeywords?: string[];
  description?: string;
  children: ReactNode;
}

export interface SectionProps extends ComponentProps<'div'> {
  navbarGap?: boolean;
}