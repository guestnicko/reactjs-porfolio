import NavBar from "../components/NavBar";
import { BG_COLOR, PRIMARY_COLOR, ACCENT_COLOR } from "../utils/constants";
export default function HomePage() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{ backgroundColor: BG_COLOR }}
    >
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Hero */}
        <section className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-slate-300">
              Portfolio
            </p>
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Hello, I&apos;m{" "}
                <span style={{ color: ACCENT_COLOR }}>Your Name</span>.
              </h1>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                I&apos;m a frontend developer who loves crafting clean, minimal,
                and high-performing interfaces. I help founders, creators, and
                teams turn ideas into polished digital products.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                From landing pages to full portfolio sites, I focus on clarity
                and usability so you can stand out online and get results.
              </p>
            </div>

            <button
              className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md shadow-md"
              style={{
                backgroundColor: ACCENT_COLOR,
                color: "#0B0417",
              }}
            >
              Book a call
            </button>
          </div>

          {/* Illustration placeholder */}
          <div
            className="mx-auto flex h-56 w-56 items-center justify-center rounded-2xl border border-slate-700/60 md:mx-0"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <div className="text-center text-sm text-slate-200 px-4">
              Illustration / avatar
              <br />
              (replace with your own image)
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="flex gap-4 text-xs md:text-sm text-slate-300">
              <span className="px-3 py-1 rounded-full border border-slate-500 bg-slate-100/5">
                Software
              </span>
              <span className="px-3 py-1 rounded-full text-slate-400">
                Expertise
              </span>
              <span className="px-3 py-1 rounded-full text-slate-400">
                Languages
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["React", "TypeScript", "Tailwind CSS", "Node.js", "Figma"].map(
              (skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between rounded-md border border-slate-700/70 px-4 py-3 text-sm"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  <span>{skill}</span>
                </div>
              )
            )}
            <button className="flex items-center justify-center rounded-md border border-slate-600 px-4 py-3 text-sm text-slate-300">
              + New
            </button>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold">Projects</h2>
            <div className="flex gap-4 text-xs md:text-sm text-slate-300">
              <span className="px-3 py-1 rounded-full border border-slate-500 bg-slate-100/5">
                Featured
              </span>
              <span className="px-3 py-1 rounded-full text-slate-400">
                All Projects
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Client Dashboard",
                subtitle: "Design & build of a client analytics dashboard.",
                tag: "Product Design",
              },
              {
                title: "Personal Portfolio",
                subtitle: "A fast, responsive portfolio for a creator.",
                tag: "Web Design",
              },
            ].map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-lg border border-slate-700/80 overflow-hidden"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <div className="flex-1 px-5 py-4 space-y-2">
                  <h3 className="text-sm font-medium">{project.title}</h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
                <div className="border-t border-slate-700/70 px-5 py-3 text-xs text-slate-300">
                  {project.tag}
                </div>
              </article>
            ))}
          </div>

          <button className="flex items-center justify-center rounded-md border border-slate-600 px-4 py-3 text-sm text-slate-300">
            + New
          </button>
        </section>

        {/* Let&apos;s Work Together */}
        <section className="space-y-3 max-w-xl">
          <h2 className="text-xl font-semibold">Let&apos;s Work Together</h2>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            If you&apos;re interested in building a clean, focused portfolio or
            product site, reach out and let&apos;s discuss how we can
            collaborate.
          </p>
        </section>

        {/* Guide / FAQ */}
        <section
          className="mt-8 rounded-xl border border-slate-700/80 overflow-hidden"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <header className="flex items-center gap-2 border-b border-slate-700/80 px-5 py-4 text-sm font-medium">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-400 text-[10px]">
              i
            </span>
            <span>How to get started</span>
          </header>
          <div className="divide-y divide-slate-700/80 text-sm">
            {[
              "Share your project goals and timeline",
              "Review a tailored project proposal",
              "Collaborate on design & development",
            ].map((item) => (
              <details key={item}>
                <summary className="flex cursor-pointer items-center justify-between px-5 py-3 text-slate-100">
                  <span>{item}</span>
                  <span className="text-xs text-slate-300">&#9654;</span>
                </summary>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
