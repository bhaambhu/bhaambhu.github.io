import PageContent from "@/components/PageContent";
import { formatDate, getBlogPosts } from "@/utils/utils";
import Link from "next/link";
import React from "react";

export default function PostsPage() {
  let allPosts = getBlogPosts();

  return (
    <PageContent>
      <h1 className={`text-3xl font-bold my-3 font-heading`}>Posts</h1>
      <div className="mt-6 pb-2 flex font-body leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600">
        <span>
          Subscribe to <a>Atom feed</a>
        </span>
      </div>
      <article className="mt-4">
        {allPosts
          .sort((a, b) => {
            if (new Date(a.metadata.date) > new Date(b.metadata.date)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col my-4"
              href={`/posts/${post.slug}`}
            >
              <div className="font-body flex gap-6">
                <p className="text-sb-text italic">
                  {formatDate(post.metadata.date)}
                </p>
                <p className="tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </article>
    </PageContent>
  );
}
