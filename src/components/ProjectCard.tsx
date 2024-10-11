import { getProjects, ProjectsMetadata } from "@/utils/utils";
import Link from "next/link";
import React from "react";

interface ProjectCard {
  project: { metadata: ProjectsMetadata; slug: string; content: string };
}

export default function ProjectCard({ project }: ProjectCard) {
  return (
    <div
      className="border-2 border-sb-link p-2 rounded-lg flex flex-col"
      key={project.slug}
    >
      <div className="font-heading text-2xl">{project.metadata.title}</div>
      <div className="flex gap-2 mt-3 flex-wrap">
        {project.metadata.tags.map((tag) => (
          <Link
            href={`/tags/${encodeURIComponent(tag)}`}
            key={tag}
            className="bg-blue-50 text-sb-link px-1 py-0.5 flex items-center rounded outline-1 text-2xs uppercase outline tracking-widest"
          >
            #{tag}
          </Link>
        ))}
      </div>
      <div className="my-1 mt-2 font-body">{project.metadata.summary}</div>
      {/* Links */}
      <div className="font-body flex gap-4">
        {project.metadata.links?.map((link) => (
          <Link href={link.url} key={link.url}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
