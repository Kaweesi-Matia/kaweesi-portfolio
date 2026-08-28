import Link from "next/link";
import Image from "next/image";

export default function About() {
 const topTech = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "FastAPI", icon: "/icons/fastapi.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css-3.svg" },
];

  return (
    <section className="max-w-5xl mx-auto py-20 space-y-24">
      {/* 1. Intro / Story */}
      <div className="flex flex-col sm:flex-row md:flex-row items-center gap-10">
        <Image
          src="/images/kaweesi-port.jpg"
          alt="Kaweesi Matia"
          width={384}
          height={576}
          priority
          className="sm:w-56 md:w-56 lg:w-64 h-auto rounded-2xl shadow-md"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-gray-700 leading-relaxed">
           I’m a full-stack software developer with a strong foundation in building modern, scalable web applications. My experience spans frontend and backend development, working with technologies such as React, JavaScript, Python, FastAPI, Node.js, Ruby on Rails, and SQL. I enjoy turning complex requirements into clean, intuitive, and reliable digital solutions. I also build data-driven and AI-powered solutions using technologies such as Python and FastAPI to enhance applications, automate processes, and solve real-world problems. Beyond development, I have experience mentoring and teaching aspiring developers, which has strengthened my ability to communicate technical ideas and collaborate effectively.

          </p>
        </div>
      </div>

      {/* 2. What I Do */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">What I Do</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Build modern, responsive web applications using React, JavaScript,
            and Tailwind CSS
          </li>
          <li>
            Build high-performance backend services and RESTful APIs using
            Python and FastAPI
          </li>
           <li>
    Develop data-driven applications using Python, Pandas, PostgreSQL, and
    SQLAlchemy
  </li>
  <li>
    Design secure APIs with JWT authentication, role-based access control, and
    scalable backend architecture
  </li>
   <li>
    Integrate Python and FastAPI services with modern React frontends to build
    complete full-stack applications
  </li>
  <li>
    Develop and integrate AI-powered features to automate workflows and solve
    real-world problems
  </li>
          <li>
            Develop scalable full-stack applications with Node.js, Express, Ruby
            on Rails, and RESTful APIs
          </li>
          <li>
            Design and work with relational and NoSQL databases including MySQL
            and MongoDB
          </li>
          <li>
            Develop and integrate AI-powered features to automate workflows and
            solve real-world problems
          </li>
          <li>
            Collaborate, mentor, and apply modern development practices to
            deliver clean, maintainable software
          </li>
        </ul>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 mt-10">
          {topTech.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center text-center group"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-16 w-auto max-w-[4rem] object-contain mb-2 transform transition-transform duration-200 group-hover:scale-110"
              />
              <span className="absolute bottom-[-1.5rem] text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. How I Work */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">How I Work</h2>
        <p className="text-gray-700 leading-relaxed">
          My approach to development is practical, collaborative, and focused on
          solving real-world problems. I value clean, maintainable code,
          intuitive user experiences, and efficient development practices. I’m
          comfortable working independently or as part of a team, using tools
          such as Git and GitHub, Agile methodologies, and modern development
          workflows. I also leverage AI technologies to build smarter
          applications, automate processes, and improve the efficiency of
          software solutions.
        </p>
      </div>

      {/* 4. Experience Snapshot */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-bold">Recent Work</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                <strong>Software Engineer · Veroskills (USA, Remote)</strong> —
               Developed React frontends and backend services using Node.js/Express, Python, and FastAPI, while collaborating with cross-functional teams to deliver scalable web applications.

              </li>
              <li>
                <strong>Code Reviewer · Microverse</strong> — Mentored junior
                developers, reviewed production code, and promoted clean code,
                Git workflows, and Test-Driven Development practices.
              </li>
              <li>
                <strong>Front-End Developer · Refactory Uganda</strong> — Built
                responsive React applications, integrated REST APIs, and
                optimized user experiences across client projects.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Earlier Experience</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Full-stack MERN development, from responsive interfaces to
                scalable backend systems
              </li>
              <li>
                Full-stack application development using Python, FastAPI, and React, from modern user interfaces to secure, scalable backend APIs
              </li>
              <li>
                Telecommunication engineering, software development, and modern
                web technologies
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Beyond Code */}
      <div className="bg-gray-50 pt-8 pb-8 pr-3 pl-3 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-6">Beyond Code</h2>
        <p className="text-gray-700 leading-relaxed">
          When I’m not coding, I enjoy reading, researching emerging
          technologies, and exploring new ideas in software development and AI.
          I’m passionate about continuous learning and using technology to solve
          real-world problems.
        </p>
      </div>

      {/* 6. Call to Action */}
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Interested in working together or seeing my full experience?
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="/files/kaweesi-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View CV
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
