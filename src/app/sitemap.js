import projects from "@/data/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = ["", "/portfolio", "/about", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
