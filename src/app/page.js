import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Skills from "./components/Skills";
import ProjectsPreview from "./components/ProjectsPreview";
import Experience from "./components/Experience";
import SectionHeading from "./components/SectionHeading";
import WhatIBuild from "./components/WhatIBuild";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[560px] w-full items-center overflow-hidden rounded-[22px] border border-slate-200 bg-white px-6 py-10 sm:px-8 sm:py-11 md:px-10 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="relative grid w-full items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div className="lg:translate-y-5">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Kaweesi Matia
              <span className="mt-3 block text-2xl font-semibold text-indigo-600 sm:text-3xl">
                Full-Stack &amp; AI Software Engineer
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
              I build real-world applications, data systems, and AI-ready
              products using React, Node.js, Python, and FastAPI—from
              interfaces and APIs to data-driven tools teams can operate.
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              Uganda · Open to Worldwide Remote Opportunities
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className="btn-primary">
                View engineering work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/files/kaweesi-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download resume
              </a>
            </div>
            <dl className="mt-8 grid w-full max-w-xl grid-cols-3 gap-x-4 gap-y-6 border-t border-slate-200 pt-6">
              {[
                { value: "6+", label: "Shipped Projects" },
                { value: "Full-Stack", label: "React + APIs" },
                { value: "Python + Node.js", label: "Backend Engineering" },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-lg font-bold leading-tight text-slate-900 sm:text-xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mx-auto w-full max-w-[350px] rounded-[22px] border border-[#E0E7FF] bg-[#EEF2FF] p-2 lg:justify-self-end">
            <img
              src="/images/kaweesi-port.jpg"
              alt="Kaweesi Matia, full-stack software engineer"
              width={350}
              height={420}
              className="h-auto w-full rounded-[20px] object-cover object-top"
              style={{ aspectRatio: "350 / 420" }}
            />
          </div>
        </div>
      </section>

      <WhatIBuild />

      <ProjectsPreview />

      <Skills />

      <section className="section-y">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <SectionHeading
            eyebrow="Experience"
            title="Building full-stack and AI-powered solutions"
            description="Remote delivery with product teams—React and API work, code review, and software that holds up beyond a demo."
          />
          <Experience />
        </div>
        <div className="mt-8">
          <Link href="/about" className="text-sm font-semibold text-indigo-600">
            Full background →
          </Link>
        </div>
      </section>

      <section className="mb-4 rounded-3xl border border-indigo-100 bg-indigo-50/70 px-8 py-12 text-center sm:px-12 sm:py-14 md:px-16">
        <h2 className="text-2xl font-bold text-slate-900">
          Available for full-stack engineering roles
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-600">
          Open to roles building end-to-end systems, data platforms, and
          AI-ready tools—with clean APIs, solid data models, and interfaces
          teams can ship.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
          <a
            href="https://github.com/Kaweesi-Matia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
