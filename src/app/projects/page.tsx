import PageContent from "@/components/PageContent";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/utils/utils";
import React from "react";

export default function ProjectsPage() {
  let allProjects = getProjects();

  return (
    <PageContent>
      <h1 className={`text-3xl font-bold my-3 font-heading`}>Projects</h1>
      <div className=" flex font-body leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600"></div>
      <article className="mt-4 flex flex-col gap-3">
        {allProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </article>
    </PageContent>
  );
}
