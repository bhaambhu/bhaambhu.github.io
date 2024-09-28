import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React, { FC, ReactNode, Suspense } from "react";

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

const Table: FC<TableProps> = ({ data }) => {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

const CustomLink: FC<CustomLinkProps> = (props) => {
  let { href, children, ...rest } = props;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...rest}>{children}</a>;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

interface RoundedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
}

const RoundedImage: FC<RoundedImageProps> = (props) => {
  let { alt, className, ...rest } = props;
  return (
    <Image alt={props.alt} className={`rounded-lg ${className}`} {...rest} />
  );
};

interface CodeProps {
  children: string;
}

const Code: FC<CodeProps> = ({ children, ...props }) => {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number): FC<{ children: ReactNode }> {
  const Heading: FC<{ children: ReactNode }> = ({ children }) => {
    let slug = slugify(children?.toString() || "");
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
};

// CustomMDX now returns JSX instead of using MDXRemote directly.
export const CustomMDX = (props: MDXRemoteProps) => {
  return (
    <Suspense fallback={<div>Loading content...</div>}>
      {/* 
        Using async/await pattern in a React component. We need to handle the promise from MDXRemote properly. 
      */}
      {/* @ts-expect-error */}
      <AsyncMDX {...props} />
    </Suspense>
  );
};

// New async function to handle MDXRemote
const AsyncMDX = async (props: MDXRemoteProps) => {
  const MDXContent = await MDXRemote({
    ...props,
  });
  return MDXContent;
};
