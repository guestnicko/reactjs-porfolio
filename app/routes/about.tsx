import type { Route } from "./+types/about";
import AboutMe from "../src/pages/AboutMe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me | Personal Portfolio" },
    {
      name: "description",
      content: "Learn more about me, my background, and skills.",
    },
  ];
}

export default function AboutRoute() {
  return <AboutMe />;
}
