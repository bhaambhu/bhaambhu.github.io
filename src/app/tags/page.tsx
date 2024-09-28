import PageContent from "@/components/PageContent";
import { formatDate, getAllTags, getBlogPosts } from "@/utils/utils";
import Link from "next/link";
import React from "react";

export default function TagsPage() {
  let allTags = getAllTags();

  return (
    <PageContent>
      <h1 className={`text-3xl font-bold my-3 font-heading`}>Tags</h1>
      <div className="border-b-[1px] border-dashed border-gray-600"></div>
      <article className="mt-4 flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <Link
            href={`/tags/${encodeURIComponent(tag)}`}
            key={tag}
            className="bg-blue-50 text-sb-link px-1 py-0.5 flex items-center rounded outline-1 text-xs uppercase outline tracking-widest"
          >
            #{tag}
          </Link>
        ))}
      </article>
    </PageContent>
  );
}
