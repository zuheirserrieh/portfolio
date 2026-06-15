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
    title: "The Digital Hub Website",
    description:
      "Developed a full-stack MERN application with a responsive React frontend and RESTful APIs, delivering a scalable and high-performance platform for industrial and trading operations.",
    tags: ["MERN", "React", "REST API"],
    filters: ["Full Stack", "React"],
    link: "https://thedigitalhub.tech/",
  },
  {
    title: "City Explorer (ISD)",
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
    title: "Al-Bekai Group Website",
    description:
      "Built a responsive corporate website, implemented interactive UI components, and ensured cross-browser compatibility.",
    tags: ["Corporate Website", "Responsive UI", "JavaScript"],
    filters: ["Frontend"],
    link: "https://bekai-group.com/en/sainik-traiding-company",
  },
  {
    title: "Multi-Vendor E-Commerce Marketplace",
    description:
      "Built a full-stack multi-vendor e-commerce platform using Laravel and React.js, featuring Stripe payments, real-time WebSocket updates, role-based access control, and complete order and product catalog management.",
    tags: ["Laravel", "React", "Stripe"],
    filters: ["Full Stack", "React", "Laravel"],
    link: "https://github.com/zuheirserrieh",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio built with React and Vite, featuring a responsive one-page layout and project archive.",
    tags: ["React", "Vite", "Responsive"],
    filters: ["Frontend", "React"],
    link: "https://github.com/zuheirserrieh/portfolio",
  },
];

export const featuredProjects = allProjects.filter((project) =>
  [
    "The Digital Hub Website",
    "Al-Bekai Group Website",
    "Multi-Vendor E-Commerce Marketplace",
  ].includes(project.title),
);

export const projectFilters = [
  "All",
  "Frontend",
  "Full Stack",
  "Backend",
  "React",
  "Next.js",
  "Laravel",
  "PHP",
];

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
