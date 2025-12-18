export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  projectUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "product-dashboard",
    title: "Product Dashboard Redesign",
    description:
      "A responsive analytics dashboard for a SaaS product, focused on clarity and fast decision-making.",
    category: "Product Design",
    author: "You",
    date: "Jan 2025",
    imageUrl:
      "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projectUrl: "https://example.com/product-dashboard",
  },
  {
    id: "portfolio-site",
    title: "Creator Portfolio Website",
    description:
      "A modern portfolio for a content creator with case studies, blog, and contact funnel.",
    category: "Web Design",
    author: "You",
    date: "Dec 2024",
    imageUrl:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projectUrl: "https://example.com/product-dashboard",
  },
  {
    id: "course-platform",
    title: "Course Platform UI",
    description:
      "Interface design for an online course platform with focus on onboarding and progress tracking.",
    category: "Interface Design",
    author: "You",
    date: "Oct 2024",
    imageUrl:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projectUrl: "https://example.com/product-dashboard",
  },
  {
    id: "marketing-site",
    title: "Landing Page for a SaaS Tool",
    description:
      "Conversion-focused landing page with clear storytelling, pricing, and social proof sections.",
    category: "Marketing",
    author: "You",
    date: "Aug 2024",
    imageUrl:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projectUrl: "https://example.com/product-dashboard",
  },
  {
    id: "design-system",
    title: "Mini Design System",
    description:
      "A reusable component library and documentation for a small product team.",
    category: "Design Systems",
    author: "You",
    date: "Jun 2024",
    imageUrl:
      "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projectUrl: "https://example.com/product-dashboard",
  },
  {
    id: "podcast-site",
    title: "Podcast Landing Page",
    description:
      "A clean landing page for a podcast with episode highlights and subscription CTAs.",
    category: "Branding",
    author: "You",
    date: "Apr 2024",
    imageUrl:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200",
    projectUrl: "https://example.com/product-dashboard",
  },
];
