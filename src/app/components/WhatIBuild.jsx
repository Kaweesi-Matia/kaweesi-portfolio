const offerings = [
  {
    title: "Full-Stack Applications",
    body: "End-to-end web applications using React, Node.js, Python, REST APIs, authentication, and modern databases.",
  },
  {
    title: "Backend & APIs",
    body: "Secure, maintainable APIs using FastAPI, Express, SQLAlchemy, MongoDB, and PostgreSQL.",
  },
  {
    title: "Data & Business Intelligence",
    body: "Data-driven applications and analytics platforms using Python, Pandas, SQL, and interactive dashboards.",
  },
  {
    title: "AI-Ready Software",
    body: "Backend and data systems designed to integrate AI features, automation, intelligent workflows, and data processing.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="section-y">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        What I build
      </h2>
      <p className="mt-3 mb-8 max-w-2xl text-[15px] leading-7 text-slate-600">
        I build complete software systems—from responsive interfaces and APIs
        to databases, analytics, and AI-ready backend services.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {offerings.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
