import Link from "next/link";
import projects from "@/data/projects";
import techIcons from "@/data/techIcons";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

function ProjectGrid({ items, featuredOnly }) {
  return (
    <div
      className={`grid gap-7 lg:gap-8 ${
        featuredOnly
          ? "sm:grid-cols-2 xl:grid-cols-3"
          : "sm:grid-cols-2"
      }`}
    >
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

export default function ProjectsPreview({
  showIntro = true,
  showAllLink = false,
  featuredOnly = false,
}) {
  const items = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <section className={showIntro ? "section-y" : "pt-8 pb-4 sm:pt-10"}>
      {showIntro && (
        <SectionHeading
          title="Selected engineering work"
          description="Two data-backed systems and one marketplace. The rest of the work is on the Work page."
        />
      )}

      <ProjectGrid items={items} featuredOnly={featuredOnly} />

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
