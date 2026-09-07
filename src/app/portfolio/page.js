import ProjectsPreview from "../components/ProjectsPreview";

export const metadata = {
  title: "Work",
  description:
    "Full-stack projects by Kaweesi Matia — sales analytics, inventory operations, hiring, real estate, learning, and commerce.",
};

export default function Projects() {
  return (
    <section className="py-2 sm:py-4">
      <div className="mb-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Selected engineering work
        </h1>
        <p className="mt-4 text-[17px] leading-8 text-slate-600">
          Sales Analytics and Inventory Flow first—then marketplaces and
          operations apps on React, Python, Node.js, and real databases.
        </p>
      </div>
      <ProjectsPreview showIntro={false} />
    </section>
  );
}
