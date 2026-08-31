import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function ActionLink({ href, children, external }) {
  const className =
    "inline-flex items-center gap-0.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export default function ProjectCard({
  slug,
  title,
  subtitle,
  description,
  image,
  tech,
  techIcons,
  index,
  liveLink,
  repoLink,
}) {
  const isVideo = image.toLowerCase().endsWith(".mp4");

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
      <Link href={`/portfolio/${slug}`} className="relative block overflow-hidden bg-slate-100">
        {isVideo ? (
          <video
            src={image}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {subtitle && (
          <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
            {subtitle}
          </p>
        )}
        <h3 className="mt-1.5 text-lg font-semibold text-slate-900">
          <Link href={`/portfolio/${slug}`} className="hover:text-indigo-700">
            {typeof index === "number" ? `${index}. ${title}` : title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700"
            >
              {techIcons[t] && (
                <img src={techIcons[t]} alt="" className="h-3.5 w-3.5 object-contain" />
              )}
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
          <ActionLink href={`/portfolio/${slug}`}>View Case Study</ActionLink>
          {repoLink && (
            <>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <ActionLink href={repoLink} external>
                GitHub
              </ActionLink>
            </>
          )}
          {liveLink && (
            <>
              <span className="text-slate-300" aria-hidden>
                ·
              </span>
              <ActionLink href={liveLink} external>
                Live Demo
              </ActionLink>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
