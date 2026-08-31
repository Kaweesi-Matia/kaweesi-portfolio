import Link from "next/link";
import projects from "@/data/projects";
import techIcons from "@/data/techIcons";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

function ProjectGrid({ items }) {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:gap-8">
      {items.map((project) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          description={project.shortDesc}
          image={project.mainImage}
          tech={project.tech}
          techIcons={techIcons}
          liveLink={project.liveLink}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
}

export default function ProjectsPreview({ showIntro = true, showAllLink = false }) {
  return (
    <section className={showIntro ? "section-y" : "pt-8 pb-4 sm:pt-10"}>
      {showIntro && (
        <SectionHeading
          title="Selected engineering work"
          description="A selection of end-to-end software solutions spanning modern frontend and backend technologies, data systems, APIs, and cloud deployment."
        />
      )}

      <ProjectGrid items={projects} />

      {showAllLink && (
        <div className="mt-12 text-center">
          <Link href="/portfolio" className="btn-secondary">
            View all projects
          </Link>
        </div>
      )}
    </section>
  );
}
