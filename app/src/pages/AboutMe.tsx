import { useState } from "react";
import NavBar from "../components/NavBar";
import {
  BG_COLOR,
  PRIMARY_COLOR,
  ACCENT_COLOR,
  TEXT_COLOR,
} from "../utils/constants";
import { SKILL_CATEGORIES, type SkillCategoryId } from "../utils/skills";

export default function AboutMe() {
  const [activeSkillTab, setActiveSkillTab] =
    useState<SkillCategoryId>("software");
  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeSkillTab) ??
    SKILL_CATEGORIES[0];

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "8255c584-db91-4da3-b292-cacbf258884a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "success" : "error");
  };
  return (
    <div
      className="min-h-screen "
      style={{
        backgroundColor: BG_COLOR,
      }}
    >
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20 space-y-10 sm:space-y-12 ">
        {/* Page header / intro */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">
            About Me
          </h2>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            A bit about <span style={{ color: ACCENT_COLOR }}>who I am</span>{" "}
            and how I work.
          </h1>
          <p className="max-w-3xl text-sm md:text-base  leading-relaxed">
            I&apos;m a student developer who enjoys creating solutions for
            real-world challenges. I care about scalability, security and
            collaborating closely with my team, to deliver a product or service
            that feels polished and intentional.
          </p>
        </section>

        {/* Skills section */}

        <section className="space-y-6">
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
                className="flex items-center justify-between rounded-md border border-slate-700/70 px-4 py-3 text-sm hover:bg-orange-400 hover:text-white transition-colors duration-150 ease-out "
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>
        {/* Academic section */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Academic Background
          </h2>
          <div className="space-y-12 flex-col ">
            <div className="w-full flex  gap-5">
              <div className="w-full h-full max-w-100 shrink-0">
                <img
                  src="/images/about_me/dost_collage.png"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>

              <p className="text-lg ">
                I am a DOST scholar taking up a Bachelor’s degree in Information
                Technology at Davao del Norte State College. I have engaged in
                several leadership and academic activities, including the
                Scholars Leadership Camp in July 2025, which helped enhance my
                leadership abilities and communication skills in both formal and
                informal settings.
              </p>
            </div>
            <div className="flex gap-4">
              <p className="text-lg">
                I am currently studying at Davao del Norte State College,
                pursuing a Bachelor&apos;s degree in Information Technology. I
                am currently in my third year and have maintained a strong
                academic record, consistently being a dean's lister. My
                coursework has provided me with a solid foundation in various IT
                disciplines, including programming, system design, database
                management, and network security.
              </p>
              <div className="w-full h-full max-w-100 shrink-0">
                {" "}
                <img
                  src="/images/about_me/dnsc_collage.png"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awards & competitions */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Awards & Competitions
          </h2>{" "}
          <div className="space-y-12 flex-col">
            <div className="w-full flex  gap-5">
              <div className="w-full h-full max-w-100 shrink-0">
                <img
                  src="/images/about_me/campus-tech.png"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>

              <p className="text-lg">
                I participated the YC2 event, in the Game Development category,
                held by Philippines DTI. I served as the team lead and lead
                programmer for our project, <b>Campus Tech: The ICT Journey</b>,
                a 3D interactive game that educates players about being an ICT
                senior highschool student.
              </p>
            </div>
            <div className="flex gap-4">
              <p className="text-lg">
                I took part in our institution&apos;s annual hackathon on 2024.
                With my team, we took the championship title by successfully
                writing solutions for the given problems within the allocated
                time.
              </p>
              <div className="w-full h-full max-w-100 shrink-0">
                {" "}
                <img
                  src="/images/journey/hackathon.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-full h-full max-w-100 shrink-0">
                {" "}
                <img
                  src="/images/journey/start-up.jpg"
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <p className="text-lg">
                I participated in a start-up weekend event organized by Startup
                Weekend Davao, partnered by New Energy Nexus - Philippines, and
                many more. I collaborated with my group to develop a solution
                addressing local food transportation and storage challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact-info" className="my-4  space-y-4  pt-15 ">
          <div className="flex sm:flex-col md:flex-row gap-5">
            <div className="basis-1/2">
              <div className="text-md space-y-3 max-w-2xl leading-relaxed">
                <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Contact Information
                </h2>{" "}
                <h3 className="text-3xl font-bold">
                  Get In Touch With Me Through These Channels
                </h3>
                <p className="text-md max-w-2xl leading-relaxed">
                  If you&apos;d like to talk about a project, collaboration, or
                  just compare notes on design and development, feel free to
                  reach out.
                </p>
                <div>
                  <p className="uppercase text-red-500 tracking-widest">
                    Email
                  </p>
                  <a href="mailto:donenargan@gmail.com" className="">
                    donenargan.gmail.com
                  </a>
                </div>
                <div>
                  <p className="uppercase text-blue-500 tracking-widest">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/don-dominick-enargan-791815359/"
                    target="_blank"
                    rel="noreferrer"
                    className=" "
                  >
                    linkedin.com/in/don-dominick-enargan-791815359/
                  </a>
                </div>
                <div>
                  <p className="uppercase text-slate-900 tracking-widest">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/guestnicko"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    github.com/guestnicko
                  </a>
                </div>
              </div>
            </div>

            <div className=" basis-1/2">
              <form
                onSubmit={onSubmit}
                className=" shadow-lg  border-t-orange-100 shadow-orange-300 rounded-3xl p-8"
              >
                <div className="max-w-md">
                  <div className="mb-5 w-full">
                    <label
                      htmlFor=""
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-md border border-slate-700/70 bg-transparent focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded-md border focus:border-amber-500 border-slate-700/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor=""
                      className="block mb-2.5 text-sm font-medium text-heading"
                    >
                      Message
                    </label>{" "}
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      className=" w-full px-4 py-2 rounded-md border focus:border-amber-500 border-slate-700/70 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration"
                  >
                    Submit
                  </button>
                </div>
                {result === "success" && (
                  <div
                    className="
                    flex items-start sm:items-center p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-green-200 my-3 rounded-lg"
                    role="alert"
                  >
                    <svg
                      className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p>
                      <span className="font-medium me-1">Success!</span> You
                      have successfully sent the mail.{" "}
                    </p>
                  </div>
                )}
                {result === "error" && (
                  <div
                    className="
                    flex items-start sm:items-center p-4 mb-4 text-sm text-fg-success-strong rounded-base bg-red-200 my-3 rounded-lg"
                    role="alert"
                  >
                    <svg
                      className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p>
                      <span className="font-medium me-1">Error!</span> Something
                      went wrong.{" "}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
