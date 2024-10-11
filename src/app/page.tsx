import PageContent from "@/components/PageContent";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/utils/utils";
import Image from "next/image";

export default function HomePage() {
  let feturedProjects = getFeaturedProjects();

  return (
    <PageContent className="leading-relaxed">
      {/* Page Heading */}
      <h1 className={`text-3xl font-bold my-3 font-heading`}>👋🏼 Hello</h1>
      {/* About Section */}
      <div className="flex font-body leading-relaxed p-2 md:p-0 gap-4 flex-col md:flex-row">
        <div className="flex flex-col gap-4 ">
          <p>
            I’m Sanjay — though you might know me as<code>@bhaambhu</code>
            around the web. I’m a software engineer focused on creating apps and
            websites that solve real-world problems.
          </p>
          <p>
            I’m passionate about building scalable, high-performance software
            and love diving into new technologies. My projects span from
            open-source learning platforms to interactive web experiences.
          </p>
          <p>
            Outside of work, you’ll find me exploring new places, playing
            badminton, or immersing myself in music. I’m always on the lookout
            for new ways to blend tech and creativity.
          </p>
        </div>
        <div className="flex justify-center m-auto ">
          {/* A parent of position: "relative" is needed if you want Next/Image with fill={true} */}
          <div className="relative w-52 h-52 rounded-full overflow-hidden  ">
            <Image src="/close.jpg" fill alt="Portrait of Sanjay" />
          </div>
        </div>
      </div>
      {/* Featured Projects Section */}
      {feturedProjects.length > 0 && (
        <div className="font-body">
          <h2 className={`text-xl font-bold mt-6 font-heading`}>
            ⭐️ Highlighted Projects
          </h2>
          <p className="mt-1">A few standout projects I'm particularly proud of:</p>
          <div className="mt-1.5 flex flex-col gap-3">
            {feturedProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      )}
    </PageContent>
  );
}
