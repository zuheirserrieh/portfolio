export const allProjects = [
  {
    title: "FastAPI Auth API",
    description:
      "Authentication and analytics API built with FastAPI, SQLAlchemy, JWT, and role-based user management.",
    tags: ["FastAPI", "Python", "JWT"],
    filters: ["Backend"],
    link: "https://github.com/zuheirserrieh/FastApi",
  },
  {
    title: "The Digital Hub",
    description:
      "A full-stack Digital Hub platform with a public website, admin dashboard, Express API, and PostgreSQL-backed CMS workflows.",
    tags: ["TypeScript", "React", "Express"],
    filters: ["Full Stack", "React"],
    link: "https://github.com/zuheirserrieh/thedigitalhub",
  },
  {
    title: "ISD Events & Chatbot",
    description:
      "A PHP web app that combines city data, event lookups, and chatbot interactions in a browser-based interface.",
    tags: ["PHP", "JavaScript", "HTML/CSS"],
    filters: ["Frontend", "PHP"],
    link: "https://github.com/zuheirserrieh/isd",
  },
  {
    title: "Zuheir Realty",
    description:
      "Simple Next.js real-estate website with public pages, shared components, and an admin panel.",
    tags: ["Next.js", "TypeScript", "Admin"],
    filters: ["Frontend", "Next.js"],
    link: "https://github.com/zuheirserrieh/next",
  },
  {
    title: "Bekai Website",
    description:
      "Corporate website for Bekai Group with multilingual content, product catalog sections, branch information, and contact details for retail and wholesale operations.",
    tags: ["Business Website", "Multilingual", "Catalog"],
    filters: ["Frontend"],
    link: "https://bekai-group.com/",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio built with React and Vite, featuring a responsive one-page layout and project archive.",
    tags: ["React", "Vite", "Responsive"],
    filters: ["Frontend", "React"],
    link: "https://github.com/zuheirserrieh/portfolio",
  },
  {
    title: "MobileP Library App",
    description:
      "Flutter mobile app for browsing and searching books, backed by PHP endpoints and a small library database.",
    tags: ["Flutter", "Dart", "PHP API"],
    filters: ["Flutter", "PHP"],
    link: "https://github.com/zuheirserrieh/mobilep",
  },
  {
    title: "Zuheir Gym",
    description:
      "Fitness website variant with membership pages, workout-focused landing sections, and simple PHP auth flows.",
    tags: ["PHP", "HTML/CSS", "Fitness"],
    filters: ["Frontend", "PHP"],
    link: "https://github.com/zuheirserrieh/zuheirgym",
  },
  {
    title: "Project 1 - Call Cost Calculator",
    description:
      "Flutter exercise app for calculating telephone call pricing with local and roaming rates, duration input, and discount logic.",
    tags: ["Flutter", "Dart", "Calculator"],
    filters: ["Flutter"],
    link: "https://github.com/zuheirserrieh/project1",
  },
];

export const featuredProjects = allProjects.filter((project) =>
  ["The Digital Hub", "Zuheir Realty"].includes(project.title),
);

export const projectFilters = ["All", "Frontend", "Full Stack", "Backend", "React", "Next.js", "PHP", "Flutter"];

export const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "UI Design",
  "Responsive UI",
  "Accessibility",
  "Performance",
  "Figma",
  "CSS Architecture",
];
