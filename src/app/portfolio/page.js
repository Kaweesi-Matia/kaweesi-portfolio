import ProjectsPreview from "../components/ProjectsPreview";

export const metadata = {
  title: "Work",
  description:
    "Selected full-stack projects by Kaweesi Matia — analytics, inventory, logistics, hiring, real estate, learning, and commerce.",
};

export default function Projects() {
  return (
    <section className="py-2 sm:py-4">
      <div className="mb-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Selected engineering work
        </h1>
        <p className="mt-4 text-[17px] leading-8 text-slate-600">
          Selected projects demonstrating end-to-end engineering across React,
          Python, Node.js, APIs, databases, analytics, and cloud deployment.
        </p>
      </div>
      <ProjectsPreview showIntro={false} />
    </section>
  );
}
