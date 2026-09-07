import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import projects from "@/data/projects";
import techIcons from "@/data/techIcons";
import ProjectMediaSlider from "@/app/components/ProjectMediaSlider";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const title = `${project.title} case study`;
  const description = project.shortDesc;
  const path = `/portfolio/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${project.title} | Kaweesi Matia`,
      description,
      url: `${SITE_URL}${path}`,
      images: [{ url: project.mainImage, alt: `${project.title} screenshot` }],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const allMedia = project.gallery?.length
    ? project.gallery
    : [project.mainMedia ?? project.mainImage];

  return (
    <article className="py-2 sm:py-4">
      <Link
        href="/portfolio"
        className="mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900"
      >
        <ArrowLeft className="h-4 w-4" />
        All work
      </Link>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
        {project.subtitle}
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {project.shortDesc}
      </p>
      <p className="mt-4 text-sm text-slate-500">
        {project.role} · {project.year}
      </p>

      <div className="mt-10">
        <ProjectMediaSlider media={allMedia} />
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
        <div>
          {project.problem && (
            <>
              <h2 className="text-xl font-semibold text-slate-900">Problem</h2>
              <p className="mt-4 leading-8 text-slate-600">{project.problem}</p>
              {project.users && (
                <p className="mt-4 leading-8 text-slate-600">
                  <span className="font-medium text-slate-800">Users. </span>
                  {project.users}
                </p>
              )}
            </>
          )}

          {project.decisions?.length > 0 && (
            <>
              <h2 className="mt-12 text-xl font-semibold text-slate-900">
                Engineering decisions
              </h2>
              <ul className="mt-5 space-y-4">
                {project.decisions.map((decision) => (
                  <li
                    key={decision.title}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-4"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {decision.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {decision.body}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}

          {project.result && (
            <>
              <h2 className="mt-12 text-xl font-semibold text-slate-900">
                Result
              </h2>
              <p className="mt-4 leading-8 text-slate-600">{project.result}</p>
            </>
          )}

          {project.highlights?.length > 0 && (
            <>
              <h2 className="mt-12 text-xl font-semibold text-slate-900">
                What I built
              </h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm leading-relaxed text-slate-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700"
              >
                {techIcons[tech] && (
                  <img src={techIcons[tech]} alt="" className="h-3.5 w-3.5" />
                )}
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                className="btn-primary w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                className="btn-secondary w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Source code
              </a>
            )}
          </div>
        </aside>
      </div>
    </article>
  );
}
