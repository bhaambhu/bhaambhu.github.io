import PageContent from "@/components/PageContent";
import ProjectCard from "@/components/ProjectCard";
import {
  formatDate,
  getBlogPosts,
  getBlogPostsByTag,
  getProjectsByTag,
} from "@/utils/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { tag: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PostsPage({ params }: Props) {
  // Decode the tag parameter i.e. convert "React%20Native" to "React Native"
  const tag = decodeURIComponent(params.tag);
  let allPostsByTag = getBlogPostsByTag(tag);
  let allProjectsByTag = getProjectsByTag(tag);
  if (allPostsByTag.length === 0 && allProjectsByTag.length === 0) {
    notFound();
  }

  return (
    <PageContent className="flex flex-col gap-12">
      {allPostsByTag.length > 0 && (
        <div>
          <h1 className={`text-3xl font-bold my-3 font-heading`}>Posts</h1>
          <div className="mt-1 flex font-body leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600"></div>
          <article className="mt-4">
            {allPostsByTag
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
                    <p className="tracking-tight">{post.metadata.title}</p>
                  </div>
                </Link>
              ))}
          </article>
        </div>
      )}
      {allProjectsByTag.length > 0 && (
        <div>
          <h1 className={`text-3xl font-bold font-heading`}>Projects</h1>
          <div className="mt-1 pb-2 flex font-body leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600"></div>
          <article className="mt-4 flex flex-col gap-3">
            {allProjectsByTag.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </article>
        </div>
      )}
    </PageContent>
  );
}
