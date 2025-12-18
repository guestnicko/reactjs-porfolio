import { useMemo, useState } from "react";
import NavBar from "../components/NavBar";
import { BG_COLOR, PRIMARY_COLOR, ACCENT_COLOR } from "../utils/constants";
import { PROJECTS } from "../utils/projects";

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
    <div
      className="min-h-screen text-slate-100"
      style={{ backgroundColor: BG_COLOR }}
    >
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <header className="mb-10 space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
            Selected work
          </p>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="max-w-2xl text-sm md:text-base text-slate-300">
            A collection of recent projects across product design, marketing
            sites, and custom interfaces.
          </p>
        </header>

        {/* Filters */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2">
            <label className="mb-1 block text-xs font-medium text-slate-300">
              Search projects
            </label>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, category, or description"
              className="w-full rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm placeholder:text-slate-500 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
            />
          </div>
          <div className="flex items-end gap-3 md:gap-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value as SortOption)}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="title">Title A–Z</option>
              </select>
            </div>
            <div className="hidden text-xs text-slate-400 md:block">
              {filteredProjects.length} projects
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
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/60 shadow-lg shadow-slate-900/40 transition hover:border-slate-400 hover:shadow-slate-900/80"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 py-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span
                        className="inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-medium"
                        style={{
                          backgroundColor: PRIMARY_COLOR,
                          color: "#F9FAFB",
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{project.date}</span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-300">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full text-[0.7rem] font-semibold"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                      >
                        {project.author[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{project.author}</span>
                        <span className="text-slate-400">Case study</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-800 px-5 py-3 text-xs text-slate-300">
                    <span>View project</span>
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: ACCENT_COLOR,
                        color: "#0B0417",
                      }}
                    >
                      ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

