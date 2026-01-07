import ProjectsPage from "~/src/pages/Projects";
import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Personal Portfolio" },
    {
      name: "description",
      content: "Explore my recent work and projects.",
    },
  ];
}

export default function Projects() {
  return <ProjectsPage />;
}
