import { useState } from "react";

const journeys = [
  {
    id: 1,
    imageSrc: "/images/journey/campus-tech.png",
    description:
      "On December 2025, I participated the DTI YC2, a major Philippine government initiative by the Department of Trade and Industry (DTI) to nurture young talent in creative fields like songwriting, animation, game dev, and content creation, offering mentorship, exposure, and cash prizes." +
      " I participated in the Game Development Entry with my team, developing an educational simulation game that teaches ICT concepts and skills to students. This experience honed my skills in game design, programming, and teamwork, while also deepening my passion for using technology to create engaging and educational experiences.",

    offsetClass: "pt-8 hover:pt-4 transition-all duration-500",
  },
  {
    id: 2,
    imageSrc: "/images/journey/start-up.jpg",
    description:
      "In the middle of 2025, I participated in a start-up weekend event organized by Startup Weekend Davao, partnered by New Energy Nexus - Philippines, and many more. I collaborated with my group to develop a solution addressing local food transportation and storage challenges. This experience enhanced my skills in project management, coding, and user experience design, while also fostering a strong sense of social responsibility and teamwork among my group",
    offsetClass: "pt-25 hover:pt-20 transition-all duration-500",
  },
  {
    id: 3,
    imageSrc: "/images/journey/beta-testing.jpg",
    description:
      "In July 2025, After the development stage of the attendance management system for our institute, we took the initiative to conduct beta testing among students. This process involved gathering feedback on usability, functionality, and overall user experience. The insights gained from this testing phase were invaluable in refining the system, ensuring it met the needs our stakeholders effectively. This experience not only enhanced my technical skills but also underscored the importance of user-centered design in software development.",
    offsetClass: "pt-10 hover:pt-5 transition-all duration-500",
  },
  {
    id: 4,
    imageSrc: "/images/journey/hackathon.jpg",
    description:
      "In 2024, I participated my first hackathon event, ByteFest 2024, organized by our student organization. During this event, I collaborated with my group to write algorithms based on the given problem statements. This experience not only enhanced my coding skills but also taught me the importance of teamwork, problem-solving, and time management in a high-pressure environment. It was a valuable opportunity to apply my knowledge in a practical setting and learn from my peers.",
    offsetClass: "pt-20 hover:pt-15 transition-all duration-500",
  },
];

export default function JourneyCarousel() {
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0);

  return (
    <>
      <div className={"space-y-10 overflow-x-hidden"}>
        <div className="flex gap-4 overflow-x-auto py-2 justify-center space-x-6 h-120">
          {journeys.map((journey, index) => (
            <div key={journey.id} className={journey.offsetClass}>
              <button
                type="button"
                onClick={() => setCurrentJourneyIndex(index)}
                className="focus:outline-none"
              >
                <img
                  src={journey.imageSrc}
                  alt={`Journey ${journey.id}`}
                  className={
                    "h-75 w-50 object-cover hover:grayscale-0 transition-all duration-500 " +
                    (index === currentJourneyIndex ? "h-85 w-65" : "grayscale")
                  }
                />
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-150 text-center mx-auto transition-all duration-500 ease-in-out">
          <p>{journeys[currentJourneyIndex].description}</p>
        </div>
      </div>
    </>
  );
}
