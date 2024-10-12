import React from "react";
import {
  formatDate,
  getBlogPosts,
  getProjects,
  readingTimeInMinutes,
} from "@/utils/utils";
import { baseUrl } from "@/app/sitemap";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/CustomMDX";
import PageContent from "@/components/PageContent";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import TagPill from "@/components/TagPill";

export async function generateStaticParams() {
  let projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  let projects = await getProjects();
  let project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let { title } = project.metadata;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      url: `${baseUrl}/blog/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  let projects = await getProjects();
  let project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }
  // console.log(data);
  console.log(JSON.stringify(project, null, 2));
  const readMinutes = readingTimeInMinutes(project.content);
  const readingTimeString = readMinutes + " min read";
  return (
    <PageContent>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: project.metadata.title,
            // datePublished: post.metadata.date,
            // dateModified: post.metadata.date,
            description: project.metadata.title,
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${project.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className={`text-3xl font-bold my-3 font-heading`}>
        {project.metadata.title}
      </h1>
      <div className="mt-6 text-sb-text flex leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600">
        {/* <span>{formatDate(post.metadata.date)}</span> */}
        <span>{readingTimeString}</span>
      </div>
      <article className="prose mt-4 max-w-none">
        <CustomMDX source={project.content} />
      </article>
      {/* Tags Section */}
      <div className="flex gap-3 mt-4">
        <div>Tags:</div>
        {project.metadata.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
    </PageContent>
  );
}
