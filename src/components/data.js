export const allProjects = [
  {
    title: "Doodlzz E-Commerce Store",
    description:
      "Bilingual (English/Arabic, RTL) storefront for a kids' toys and baby products retailer, with accounts, favorites, cart, search, a row-level-secured PostgreSQL schema, server-side checkout, and an admin dashboard.",
    tags: ["Next.js", "Supabase", "Cloudflare Workers"],
    filters: ["Full Stack", "Next.js"],
    link: "https://doodlzz-website.doodlzzlb.workers.dev/en",
  },
  {
    title: "Gentle Elevators Website",
    description:
      "Bilingual, SEO-optimized corporate website for an elevator company in Lebanon, with service and project gallery pages and WhatsApp, call, and quote-request contact flows, live on a custom domain.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    filters: ["Frontend", "Next.js"],
    link: "https://gentleelevators.com/",
  },
  {
    title: "The Digital Hub Platform",
    description:
      "CMS-driven employability platform presenting training programs and cohorts, with cohort applications, participant and team directories, announcements, and recruiter visit requests, backed by a TypeScript Express API.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    filters: ["Full Stack", "React"],
    link: "https://thedigitalhub.tech/",
  },
  {
    title: "Joker Multi-Vendor Marketplace",
    description:
      "Multi-vendor marketplace with Stripe checkout, vendor and admin portals, sales analytics, role-based access control, and AI vendor tools such as Claude-generated product descriptions.",
    tags: ["Laravel", "React", "Stripe"],
    filters: ["Full Stack", "React", "Laravel"],
    link: "https://github.com/zuheirserrieh/joker-ecommerce",
  },
  {
    title: "Northstar Supply",
    description:
      "Full-stack e-commerce demo with a Django REST Framework API, JWT authentication, Django Admin reports, and a React storefront.",
    tags: ["Django", "React", "JWT"],
    filters: ["Full Stack", "Backend", "React"],
    link: "https://github.com/zuheirserrieh/northstar-supply",
  },
  {
    title: "FastAPI Auth API",
    description:
      "Authentication and analytics API built with FastAPI, SQLAlchemy, and JWT, with role-based authorization, validation, and paginated user management.",
    tags: ["FastAPI", "Python", "JWT"],
    filters: ["Backend"],
    link: "https://github.com/zuheirserrieh/fastapi-auth-api",
  },
  {
    title: "Zuheir Realty",
    description:
      "Next.js marketing website with a file-based admin CMS for pages, services, projects, blog, and news, plus role-based admin accounts and inbound submissions.",
    tags: ["Next.js", "TypeScript", "CMS"],
    filters: ["Full Stack", "Next.js"],
    link: "https://github.com/zuheirserrieh/zuheir-realty",
  },
  {
    title: "City Explorer",
    description:
      "Explore a city through Wikipedia history summaries, Ticketmaster events, maps, and a built-in Q&A chatbot.",
    tags: ["Vue 3", "PHP", "JavaScript"],
    filters: ["Frontend", "PHP"],
    link: "https://github.com/zuheirserrieh/isd",
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
    "Doodlzz E-Commerce Store",
    "Gentle Elevators Website",
    "The Digital Hub Platform",
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
