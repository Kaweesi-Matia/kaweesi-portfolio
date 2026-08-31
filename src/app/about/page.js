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
    "Background, experience, and working style of Kaweesi Matia, full-stack software and AI developer.",
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
            Full-Stack Software Engineer Building End-to-End Products
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-slate-600">
            I&apos;m a full-stack software engineer focused on building
            end-to-end web applications and backend systems. I work across
            React frontends and Python or Node.js services, with experience in
            FastAPI, REST APIs, SQL, PostgreSQL, MongoDB, and modern
            application architecture. I also use AI-assisted development and
            automation to improve engineering workflows and product
            capabilities. My experience in mentoring and code review has
            strengthened my approach to architecture, maintainability, and
            technical communication.
          </p>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Product-focused",
            body: "I start from the user workflow — dashboards, orders, jobs, and deliveries — and translate those requirements into maintainable interfaces, APIs, and data models.",
          },
          {
            title: "API-first",
            body: "I design clean, documented REST APIs with authentication, authorization, and well-defined contracts that frontend applications can depend on. Experienced with FastAPI and Express for building maintainable backend services.",
          },
          {
            title: "Collaborative & Remote",
            body: "Experienced working with distributed teams, Git-based development workflows, code review, Agile delivery, and developer mentoring.",
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
          Core Engineering Focus
        </h2>
        <ul className="grid gap-4 text-slate-700 sm:grid-cols-2">
          {[
            "Full-stack web applications with React, Next.js, and Tailwind CSS",
            "Python backend services and REST APIs with FastAPI",
            "Node.js, Express, and MongoDB application backends",
            "Data-driven applications using PostgreSQL, SQLAlchemy, and Pandas",
            "Authentication and authorization with JWT, RBAC, and protected routes",
            "Code review, mentoring, and maintainable Git-based development",
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

      <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">Experience</h2>
          <Experience />
        </div>
        <div>
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Engineering Foundation
          </h2>
          <ul className="space-y-4 text-sm leading-relaxed text-slate-600">
            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              Full-stack MERN development across React interfaces, Node.js
              services, Express APIs, and MongoDB.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              Python backend development with FastAPI, REST APIs, SQL, and
              PostgreSQL.
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-6">
              Telecommunication engineering background with a systems-oriented
              approach to reliability, infrastructure, and technical
              constraints.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 rounded-3xl bg-slate-900 px-8 py-16 text-center text-white sm:px-14 sm:py-20 md:px-20">
        <h2 className="text-2xl font-bold">Open to New Opportunities</h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
          I&apos;m open to remote software engineering opportunities where I
          can contribute across frontend, backend, data, and application
          architecture.
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
