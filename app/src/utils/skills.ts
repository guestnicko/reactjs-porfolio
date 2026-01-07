export type SkillCategoryId = "software" | "expertise" | "languages";

export type SkillCategory = {
  id: SkillCategoryId;
  label: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "software",
    label: "Software",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "PHP",
      "Java",
    ],
  },
  {
    id: "expertise",
    label: "Expertise",
    skills: [
      "Backend Architecture",
      "Web Development",
      "Game Development",
      "Backend Development",
    ],
  },
  {
    id: "languages",
    label: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
      "PHP",
      "Java",
      "Python",
      "C#",
    ],
  },
];
