import PageContent from "@/components/PageContent";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/utils/utils";
import React from "react";

export default function ProjectsPage() {
  let allProjects = getProjects();

  return (
    <PageContent>
      <h1 className={`text-3xl font-bold my-3 font-heading`}>Contact Me</h1>
      <div className=" flex font-body leading-relaxed text-sm justify-between italic border-b-[1px] border-dashed border-gray-600"></div>
      <div className="flex flex-col mt-4 gap-4 font-body leading-relaxed p-2 md:p-0">
        <ul className="list-disc ml-5">
          <li key="email">E-Mail: bhaambhu [at] gmail.com</li>
          <li key="linkedin">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/bhaambhu/">@bhaambhu</a>
          </li>
          <li key="linkedin">
            GitHub: <a href="https://github.com/bhaambhu">@bhaambhu</a>
          </li>
        </ul>
      </div>
    </PageContent>
  );
}
