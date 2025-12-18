import NavBar from "../components/NavBar";
import { BG_COLOR, PRIMARY_COLOR, ACCENT_COLOR } from "../utils/constants";

export default function AboutMe() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{ backgroundColor: BG_COLOR }}
    >
      <NavBar />
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-20 space-y-12">
        {/* Page header / intro */}
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
            About
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            A bit about{" "}
            <span style={{ color: ACCENT_COLOR }}>who I am</span> and how I
            work.
          </h1>
          <p className="max-w-3xl text-sm md:text-base text-slate-300 leading-relaxed">
            I&apos;m a developer who enjoys turning complex ideas into simple,
            thoughtful interfaces. I care about clean architecture, good UX,
            and collaborating closely with designers, founders, and teams to
            ship work that feels polished and intentional.
          </p>
        </section>

        {/* Academic section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Academic Background</h2>
          <div
            className="rounded-2xl border border-slate-700/70 p-5 space-y-3"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">
                BSc / MSc in Computer Science
              </p>
              <p className="text-xs text-slate-200">
                Your University Name · 20XX – 20XX
              </p>
            </div>
            <p className="text-xs text-slate-100 leading-relaxed">
              Focused on software engineering, human–computer interaction, and
              web technologies. Completed projects around design systems,
              front‑end architecture, and product design workflows.
            </p>
          </div>
        </section>

        {/* Skills section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="text-sm text-slate-300">
            A snapshot of the tools and disciplines I work with most often.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Frontend",
                items: ["React", "TypeScript", "Tailwind CSS"],
              },
              {
                title: "Product & UI",
                items: ["Design systems", "Prototyping", "Responsive layouts"],
              },
              {
                title: "Workflow",
                items: ["Git & GitHub", "Agile", "Code reviews"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-700/70 p-4 space-y-2"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="text-xs text-slate-100 space-y-1">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & competitions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Awards & Competitions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Hackathon Winner",
                org: "Local / Online Hackathon",
                year: "20XX",
                description:
                  "Built a prototype dashboard in under 48 hours, focusing on usability, clarity, and storytelling with data.",
              },
              {
                title: "Design / Dev Challenge Finalist",
                org: "Community or School Competition",
                year: "20XX",
                description:
                  "Recognized for a polished end‑to‑end experience across branding, layout, and implementation.",
              },
            ].map((award) => (
              <article
                key={award.title}
                className="rounded-2xl border border-slate-700/70 p-4 space-y-2"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <div className="flex items-center justify-between gap-2 text-xs text-slate-200">
                  <span className="font-medium">{award.title}</span>
                  <span className="text-slate-300">{award.year}</span>
                </div>
                <p className="text-xs text-slate-300">{award.org}</p>
                <p className="text-xs text-slate-100 leading-relaxed">
                  {award.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-4 border-t border-slate-700/70 pt-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            If you&apos;d like to talk about a project, collaboration, or just
            compare notes on design and development, feel free to reach out.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 text-sm">
            <div>
              <p className="text-slate-400">Email</p>
              <a
                href="mailto:you@example.com"
                className="text-slate-100 hover:text-slate-50"
              >
                you@example.com
              </a>
            </div>
            <div>
              <p className="text-slate-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-slate-50"
              >
                linkedin.com/in/your-handle
              </a>
            </div>
            <div>
              <p className="text-slate-400">GitHub</p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-slate-50"
              >
                github.com/your-handle
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
