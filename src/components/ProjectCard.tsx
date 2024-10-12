import { getProjects, ProjectsMetadata } from "@/utils/utils";
import Link from "next/link";
import React from "react";
import TagPill from "./TagPill";

interface ProjectCard {
  project: { metadata: ProjectsMetadata; slug: string; content: string };
}

export default function ProjectCard({ project }: ProjectCard) {
  return (
    <article
      className="border-2 border-sb-link p-2 rounded-lg flex flex-col"
      key={project.slug}
    >
      <div className="flex justify-between flex-wrap">
        <div className="font-heading text-xl">{project.metadata.title}</div>
        {/* Links */}
        <div className="font-body flex gap-4">
          {project.metadata.links?.map((link) => (
            <Link href={link.url} key={link.url}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="my-1 mt-2 font-body text-base">
        {project.metadata.description}
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {project.metadata.tags.map((tag) => (
          <TagPill key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
