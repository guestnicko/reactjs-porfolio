import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import {
  BG_COLOR,
  PRIMARY_COLOR,
  ACCENT_COLOR,
  TEXT_COLOR,
} from "../utils/constants";
import { SKILL_CATEGORIES, type SkillCategoryId } from "../utils/skills";
import ProjectCards from "../components/cards/project_cards";
import { PROJECTS } from "../utils/projects";
import ProjectCarousel from "../components/ProjectCarousel";
import JourneyCarousel from "../components/JourneyCarousel";

import { useAnimateOnView, useFadeIn } from "~/hooks/useFadeInAnimations";
import AnimatedDiv, {
  AnimatedSection,
} from "../components/animatedItem/animated_div";

export default function HomePage() {
  const [activeSkillTab, setActiveSkillTab] =
    useState<SkillCategoryId>("software");
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHeroColumn = viewportWidth === null || viewportWidth <= 1026;

  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeSkillTab) ??
    SKILL_CATEGORIES[0];

  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        backgroundColor: BG_COLOR,
      }}
    >
      <NavBar />
      <main
        className={
          "max-w-6xl mx-auto px-4 lg:px-6 py-12 lg:py-16 space-y-12 lg:space-y-35 text-gray-900"
        }
      >
        {/* Hero */}

        <AnimatedSection
          className={`flex gap-12 visible-blocks ${
            isHeroColumn ? "flex-col" : "flex-row items-center justify-between"
          }`}
        >
          <div className="max-w-xl space-y-6">
            <p className="text-sm tracking-[0.2em] uppercase text-slate-400">
              WHO AM I?
            </p>
            <div className="space-y-3 overflow-x-hidden block-cards ">
              <h1 className="text-3xl lg:text-4xl font-semibold ">
                Hello, I'm{" "}
                <span style={{ color: ACCENT_COLOR }}>Don Dominick</span>.
              </h1>
              <p
                className={"text-md lg:text-base leading-relaxed " + TEXT_COLOR}
              >
                A third-year BSIT student specializing in backend web
                development, with hands-on experience building functional and
                scalable applications. I actively participate in hackathons and
                startup competitions, contribute to student organizations by
                building school-use projects, and offer development support for
                fellow students.
              </p>
            </div>

            <button
              className={`mt-6 inline-flex w-full lg:w-auto items-center justify-center px-6 py-3 text-sm lg:text-base font-bold rounded-md shadow-md text-white hover:bg-orange-600 bg-orange-500 transition-colors duration-150`}
            >
              Contact Me
            </button>
          </div>

          {/* Illustration placeholder */}
          <div
            className="mx-auto flex w-100 h-100 max-w-full max-h-full lg:h-85 lg:w-85 items-center justify-center rounded-2xl md:mx-0"
            style={{ backgroundColor: PRIMARY_COLOR }}
          >
            <img
              src="../../images/me.jpg"
              className="object-cover h-full w-full rounded-2xl"
            />
          </div>
        </AnimatedSection>
        {/* ABOUT ME */}

        <AnimatedSection className="space-y-6">
          <div className="space-y-10">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
              My Journey as a Developer
            </h2>
            <JourneyCarousel />
          </div>
        </AnimatedSection>
        {/* Skills */}
        <AnimatedSection className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
              Skills
            </h2>
            <div className="flex gap-2 sm:gap-3 text-lg md:text-md overflow-x-auto pb-1">
              {SKILL_CATEGORIES.map((category) => {
                const isActive = category.id === activeSkillTab;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveSkillTab(category.id)}
                    className={`whitespace-nowrap rounded-md border px-3 py-1 transition ${
                      isActive
                        ? "border-slate-100 bg-orange-500 text-white "
                        : "border-transparent hover:text-orange-400"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between rounded-md border border-slate-700/70 px-4 py-3 text-sm hover:bg-orange-400 hover:text-white transition-colors duration-150 ease-out"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection className="space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
              Projects
            </h2>
          </div>

          {/* Carousel */}
          <div className="space-y-4">
            <ProjectCarousel />
          </div>
        </AnimatedSection>

        {/* Let's Work Together */}
        <AnimatedSection className="space-y-3 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            Let&apos;s Work Together
          </h2>
          <p
            className={
              "max-w-300 mx-auto text-md md:text-base  leading-relaxed " +
              TEXT_COLOR
            }
          >
            If you're interested in collaborating or have any opportunities in
            mind, feel free to reach out to me through my social media channels
            below.
          </p>
          <div className="my-10 flex gap-5 justify-center">
            <button
              onClick={() =>
                (window.location.href = "https://github.com/guestnicko")
              }
            >
              <img src="/icons/github.png" alt="" className="w-10 h-10" />
            </button>
            <button
              onClick={() =>
                (window.location.href = "https://www.instagram.com/_its_nck_1/")
              }
            >
              <img src="/icons/instagram.png" alt="" className="w-10 h-10" />
            </button>
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/don-dominick-enargan-791815359/")
              }
            >
              <img src="/icons/linkedin.png" alt="" className="w-10 h-10" />
            </button>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
