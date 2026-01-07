import { useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import { BG_COLOR, PRIMARY_COLOR, ACCENT_COLOR } from "../utils/constants";
import { PROJECTS } from "../utils/projects";
import ProjectCards from "../components/cards/project_cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SortOption = "newest" | "oldest" | "title";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const matchesSearch = (value: string) =>
      value.toLowerCase().includes(normalizedQuery);

    const projects = PROJECTS.filter((project) => {
      if (!normalizedQuery) return true;
      return (
        matchesSearch(project.title) ||
        matchesSearch(project.description) ||
        matchesSearch(project.category)
      );
    });

    const parseDate = (value: string) => {
      const timestamp = Date.parse(value);
      return Number.isNaN(timestamp) ? 0 : timestamp;
    };

    return projects.sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      const aDate = parseDate(a.date);
      const bDate = parseDate(b.date);

      if (sortBy === "newest") return bDate - aDate;
      return aDate - bDate; // oldest
    });
  }, [query, sortBy]);

  return (
    <div className="min-h-screen " style={{ backgroundColor: BG_COLOR }}>
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20">
        <header className="mb-8 sm:mb-10 space-y-2">
          <h1 className="text-3xl font-bold ">Projects</h1>
          <p className="max-w-2xl text-sm md:text-base">
            A collection of recent projects across product design, marketing
            sites, and custom interfaces.
          </p>
        </header>

        {/* Filters */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2 flex items-center border px-2 rounded-lg bg-white shadow-sm gap-2">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, category, or description"
              className="w-full py-2 text-md placeholder:text-slate-500 focus:outline-none focus:ring-0"
            />

            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="flex flex-col  gap-3 sm:flex-row sm:items-end md:gap-4 items-center">
            <div className="w-full sm:w-auto">
              <label className="mb-1 block text-sm font-medium ">Sort by</label>
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="w-full sm:w-auto rounded-lg border border-slate-700  px-4 py-2 text-sm focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title">Title A–Z</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <h2 className="sr-only">Project list</h2>
          {filteredProjects.length === 0 ? (
            <p className="text-sm text-slate-400">
              No projects match your search.
            </p>
          ) : (
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCards
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  date={project.date}
                  role={project.role}
                  category={project.category}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
