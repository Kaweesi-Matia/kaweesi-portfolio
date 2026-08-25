export default function Skills() {
  const tech = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css-3.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "React Native", icon: "/icons/react-native.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind-css.svg" },
    { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    // Jest, Agile?,
    // { name: "NPM", icon: "/icons/npm.svg" },
    // { name: "Supabase", icon: "/icons/supabase.svg" },
    // { name: "Figma", icon: "/icons/figma.svg" },
    // { name: "Slack", icon: "/icons/slack.svg" },
    // { name: "Lighthouse", icon: "/icons/google-lighthouse.svg" },
    // { name: "Google Maps", icon: "/icons/google-maps.svg" },
    // { name: "Agile", icon: "/icons/Agile.png" },
  ];

  return (
    <section className="py-4 md:py-8 lg:py-16 -mx-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          My Tech Stack and Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-12">
          {tech.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center text-center group"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-20 w-auto max-w-[5rem] object-contain mb-2 transform transition-transform duration-200 group-hover:scale-110"
              />
              <span className="absolute bottom-[-1.5rem] text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
