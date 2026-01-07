export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  role: string;
  date: string;
  imageUrl: string;
  projectUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ic-lsg-ams",
    title: "IC-LSG Attendance Management System",
    description:
      "A student attendance management system to manage DNSC IC students' during school events. Facilitates attendance tracking, reporting, and notifications. Successfully used in multiple school events.",
    category: "Web Development",
    role: "Backend Developer",
    date: "August 2025",
    imageUrl: `/images/projects/ams.png`,
    projectUrl: "https://github.com/guestnicko/attendance-management-system",
  },
  {
    id: "ic-lsg-mobile-app",
    title: "IC-LSG Mobile App",
    description:
      "A centralized mobile application designed exclusively for students of the Institute of Computing (IC). The app serves as a platform for accessing organization resources, event updates, and academic news, enhancing the overall student experience.",
    category: "Mobile App Development",
    role: "Backend Developer",
    date: "Dec 2025",
    imageUrl: "/images/projects/ic-lsg-mobile-app.png",
    projectUrl: "https://github.com/guestnicko/icsa_mobile_app",
  },
  {
    id: "career-connect",
    title: "Job Listing Platform",
    description:
      "Career Connect, A job listing website connecting job seekers with employers, featuring job postings, search functionality, and application tracking.",
    category: "Web Development",
    role: "Author",
    date: "Dec 2024",
    imageUrl: "/images/projects/career-connect.png",
    projectUrl: "https://github.com/guestnicko/career_connect",
  },
  {
    id: "campus-tech",
    title: "Campus Tech: The ICT Journey",
    description:
      "A game that educates players about the skills and knowledge needed of Information and Communication Technology (ICT) Senior Highscool student through interactive gameplay and engaging storytelling.",
    category: "Game Development",
    role: "Programmer",
    date: "Dec 2025",
    imageUrl: "/images/projects/campus-tech.png",
    projectUrl:
      "https://guestnicko.itch.io/campus-tech-the-ict-chronicles?secret=j3FlzqT9Ipb42y3LRBHarGwFuo",
  },
  {
    id: "terrapinas",
    title: "TerraPinas: Real Estate Listing Platform",
    description:
      "A real estate listing platform connecting buyers, sellers, and renters with property listings, search functionality, and contact options.",
    category: "Web Development",
    role: "Author",
    date: "Jan 2026",
    imageUrl: "/images/projects/terrapinas.png",
    projectUrl: "https://github.com/guestnicko/TerraPinas",
  },
];
