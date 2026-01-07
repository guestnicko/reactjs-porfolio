import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Home page at `/`
  index("routes/home.tsx"),
  // About me page at `/about`
  route("about", "routes/about.tsx"),
  // Projects page at `/projects`
  route("projects", "routes/projects.tsx"),
] satisfies RouteConfig;
