import { useState } from "react";
import { PROJECTS } from "../utils/projects";
import ProjectCards from "./cards/project_cards";

export default function ProjectCarousel() {
  const projects = PROJECTS.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="relative ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full shrink-0 px-1 flex gap-5">
              <div className="max-w-200 max-h-100">
                <img
                  src={project.imageUrl}
                  alt=""
                  className="object-cover object-center h-100 max-w-100 max-h-100"
                />
              </div>
              <div className="w-full p-2 px-5 space-y-3 flex flex-col">
                <h3 className="text-3xl font-bold tracking-widest uppercase">
                  {project.title}
                </h3>
                <span className="rounded-full bg-orange-200 px-4 py-2 w-fit">
                  {project.category}
                </span>
                <p className="w-full my-8 mx-3">{project.description}</p>

                <div className="mt-auto flex justify-between items-center">
                  <span className="font-bold font-lg"> {project.date}</span>
                  <a
                    href=""
                    className="bg-orange-500 px-6 py-3 text-white rounded-lg font-lg font-semibold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full border border-slate-600 px-3 py-1 text-lg  hover:border-slate-300"
          >
            {"<"}
          </button>
        </div>
        <div className="flex gap-1">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-3 rounded-full  ${
                currentIndex === index ? "bg-orange-500" : "bg-slate-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full border px-3 py-1 text-lg  "
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
