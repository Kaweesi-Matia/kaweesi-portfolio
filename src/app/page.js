import Skills from "./components/Skills";
import ProjectsPreview from "./components/ProjectsPreview";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-16 md:pt-60 md:pb-30 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl font-bold mb-2">
              Hi, I’m Matia <span>|</span>{" "}
              <span className="text-blue-600">
                Full-Stack Software and AI Developer
              </span>
            </h1>
            <p className="text-lg text-gray-700 mt-2 py-6">
              I’m a full-stack developer experienced in building modern web
              applications using React, JavaScript, Node.js, and Ruby on Rails.
              I build intuitive user experiences, write clean, scalable, and
              maintainable code, and develop AI-powered solutions that solve
              real-world problems.
            </p>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0">
            <img
              src="/images/kaweesi-port.jpg"
              alt="Kaweesi Matia"
              className="w-80 h-auto rounded-full object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <Skills />

      <ProjectsPreview />
    </>
  );
}
