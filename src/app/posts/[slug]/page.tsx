import React from "react";
import { formatDate, getBlogPosts, readingTimeInMinutes } from "@/utils/utils";
import { baseUrl } from "@/app/sitemap";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/CustomMDX";
import PageContent from "@/components/PageContent";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, date } = post.metadata;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      date,
      url: `${baseUrl}/blog/${post.slug}`,
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

export default async function PostPage({ params }: Props) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  // console.log(data);
  console.log(JSON.stringify(post, null, 2));
  const readMinutes = readingTimeInMinutes(post.content);
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
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.title,
            // image: post.metadata.image
            //   ? `${baseUrl}${post.metadata.image}`
            //   : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className={`text-3xl font-bold my-3 font-heading `}>
        {post.metadata.title}
      </h1>
      <div className="mt-6 text-sb-text flex leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600">
        <span>{formatDate(post.metadata.date)}</span>
        <span>{readingTimeString}</span>
      </div>
      <article className="prose mt-4">
        <CustomMDX source={post.content} />
      </article>
      {/* Tags Section */}
      <div className="flex gap-3 mt-4">
        <div>Tags:</div>
        {post.metadata.tags.map((tag) => (
          <Link
            href={`/tags/${encodeURIComponent(tag)}`}
            key={tag}
            className="bg-blue-50 text-sb-link px-1 py-0.5 flex items-center rounded outline-1 text-xs uppercase outline tracking-widest"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </PageContent>
  );
}
