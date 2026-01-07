import HomePage from "~/src/pages/Home";
import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Personal Portfolio" },
    {
      name: "description",
      content: "Welcome to my personal portfolio home page.",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
