import Link from "next/link";
import Image from "next/image";
import Experience from "../components/Experience";

const topTech = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
];

export const metadata = {
  title: "About",
  description:
    "Background, experience, and working style of Kaweesi Matia, full-stack software engineer.",
};

export default function About() {
  return (
    <section className="py-2 sm:py-4">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-stretch lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-0 lg:max-w-none">
          <Image
            src="/images/kaweesi-port.jpg"
            alt="Kaweesi Matia"
            fill
            priority
            sizes="(min-width: 1024px) 280px, 320px"
            className="object-cover object-top"
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Full-stack engineer building end-to-end products
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-600">
            I work across React frontends and Python or Node.js services—FastAPI,
            REST APIs, PostgreSQL, MongoDB, and the data models behind
            dashboards and operations tools. Mentoring and code review at
            Microverse sharpened how I think about architecture,
            maintainability, and technical communication.
          </p>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Start from the workflow",
            body: "Dashboards, stock transfers, job applications, checkout. I translate those paths into interfaces, APIs, and data models people can run.",
          },
          {
            title: "API-first",
            body: "Documented REST contracts with authentication and clear permissions. FastAPI and Express for services the frontend can depend on.",
          },
          {
            title: "Remote by default",
            body: "Distributed US product work, Git-based review, Agile delivery, and mentoring across time zones.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          Core engineering focus
        </h2>
        <ul className="grid gap-4 text-slate-700 sm:grid-cols-2">
          {[
            "Full-stack web applications with React, Next.js, and Tailwind CSS",
            "Python backend services and REST APIs with FastAPI",
            "Node.js, Express, and MongoDB application backends",
            "Data-backed apps with PostgreSQL, SQLAlchemy, and Pandas",
            "Authentication and authorization with JWT and role-based access",
            "Code review, mentoring, and Git-based delivery",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm leading-relaxed"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {topTech.map((item) => (
          <span
            key={item.name}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800"
          >
            <img src={item.icon} alt="" className="h-4 w-4 object-contain" />
            {item.name}
          </span>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">Experience</h2>
        <Experience />
      </div>

      <div className="mt-24">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">Education</h2>
        <ul className="grid gap-4 text-sm leading-relaxed text-slate-600 md:grid-cols-3">
          <li className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="font-semibold text-slate-900">VeroSkills</p>
            <p className="mt-1">Certificate, Front-End Development · 2023 – 2024</p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="font-semibold text-slate-900">Microverse</p>
            <p className="mt-1">
              Certificate, Software Engineering · 2022 – 2024
            </p>
            <p className="mt-2">
              Full-time remote program: algorithms, full-stack development,
              pair programming, and Gitflow with international teams.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="font-semibold text-slate-900">Kyambogo University</p>
            <p className="mt-1">
              Bachelor’s, Telecommunication Engineering · 2014 – 2017
            </p>
            <p className="mt-2">
              Systems background in reliability, infrastructure, and technical
              constraints.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-20 rounded-3xl bg-slate-900 px-8 py-16 text-center text-white sm:px-14 sm:py-20 md:px-20">
        <h2 className="text-2xl font-bold">Open to new opportunities</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
          Remote software engineering roles where I can contribute across
          frontend, backend, data, and application architecture.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/files/kaweesi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold hover:bg-indigo-400"
          >
            View Resume
          </a>
          <Link
            href="/contact"
            className="inline-flex rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
