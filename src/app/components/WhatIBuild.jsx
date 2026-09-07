const offerings = [
  {
    title: "Full-stack applications",
    body: "End-to-end web apps with React, Node.js or Python, REST APIs, authentication, and a real data model.",
  },
  {
    title: "Backend & APIs",
    body: "Maintainable APIs with FastAPI or Express, JWT auth, SQLAlchemy or Mongoose, PostgreSQL and MongoDB.",
  },
  {
    title: "Data & dashboards",
    body: "Import paths, SQL models, and React dashboards for sales, inventory, and operational KPIs.",
  },
  {
    title: "Role-based operations",
    body: "RBAC, warehouse and marketplace workflows, and admin vs customer surfaces that do not share one permission set.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="section-y">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        What I build
      </h2>
      <p className="mt-3 mb-8 max-w-2xl text-[15px] leading-7 text-slate-600">
        Complete systems—interfaces, APIs, databases, and the workflows teams
        run every day.
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
