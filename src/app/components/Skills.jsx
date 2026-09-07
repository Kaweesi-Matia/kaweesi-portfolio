const groups = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css-3.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "FastAPI", icon: "/icons/fastapi.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" },
      { name: "SQLAlchemy", icon: "/icons/sqlalchemy.svg" },
      { name: "JWT", icon: "/icons/jsonwebtokens.svg" },
    ],
  },
  {
    title: "Data & infra",
    items: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Pandas", icon: "/icons/pandas.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section-y">
      <div className="mb-10 text-center md:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
          Capabilities
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Tech stack
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600">
          JavaScript and Python—from React interfaces to FastAPI and Node
          services, then PostgreSQL or MongoDB.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {group.title}
            </h3>
            <ul className="grid grid-cols-2 gap-3.5">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-3.5 py-3 text-sm font-medium text-slate-800"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
