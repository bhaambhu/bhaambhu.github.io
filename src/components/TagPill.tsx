import Link from "next/link";
import React from "react";

export default function TagPill({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      key={tag}
      className="bg-blue-50 text-sb-link px-1 py-0.5 flex items-center rounded outline-1 text-2xs uppercase outline tracking-widest"
    >
      #{tag}
    </Link>
  );
}
