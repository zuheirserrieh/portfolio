export const profile = {
  name: "Zuheir Serrieh",
  role: "Full Stack Developer",
  email: "zuheir.serrieh@gmail.com",
  github: "https://github.com/zuheirserrieh",
  linkedin: "https://www.linkedin.com/in/zuheir-serrieh",
  whatsapp: "https://wa.me/96171092179",
};

export const cvUrl = `${import.meta.env.BASE_URL}Zuheir%20Serrieh%20-%20Cv%202026-10.pdf`;

export const heroFacts = [
  { value: "1+ year", label: "building production web apps" },
  { value: "3 live sites", label: "Doodlzz, Gentle Elevators, The Digital Hub" },
  { value: "B.S. CS", label: "Lebanese International University, 2025" },
];

export const allProjects = [
  {
    title: "Doodlzz E-Commerce Store",
    kind: "Client project",
    description:
      "Bilingual (English/Arabic, RTL) storefront for a kids' toys and baby products retailer, with accounts, favorites, cart, search, and age-based browsing.",
    highlights: [
      "PostgreSQL schema secured with row-level security",
      "Server-side checkout that validates carts and calculates prices",
      "Admin dashboard for products, orders, and homepage media",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Cloudflare Workers"],
    filters: ["Full Stack", "Next.js"],
    live: "https://doodlzz-website.doodlzzlb.workers.dev/en",
  },
  {
    title: "Gentle Elevators",
    kind: "Client project",
    description:
      "Bilingual, SEO-optimized corporate website for an elevator company in Lebanon, live on a custom domain.",
    highlights: [
      "Service pages and a gallery for each completed project",
      "WhatsApp, call, and quote-request contact flows",
      "Per-page metadata, Open Graph tags, and sitemap",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Workers"],
    filters: ["Frontend", "Next.js"],
    live: "https://gentleelevators.com/",
    repo: "https://github.com/zuheirserrieh/gentle-elevators",
  },
  {
    title: "The Digital Hub Platform",
    kind: "Team project",
    description:
      "Employability platform presenting training programs and cohorts, with cohort applications, participant and team directories, announcements, and recruiter visit requests.",
    role: "Public React + TypeScript website, including the cohort application flow and the About, Events, and Contact pages.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL"],
    filters: ["Full Stack", "React"],
    live: "https://thedigitalhub.tech/",
    repo: "https://github.com/zuheirserrieh/thedigitalhub",
  },
  {
    title: "Joker Multi-Vendor Marketplace",
    kind: "Personal project",
    description:
      "Marketplace where multiple vendors sell through one storefront, with Stripe checkout, vendor and admin portals, sales analytics, and role-based access control.",
    highlights: ["AI vendor tools, including Claude-generated product descriptions"],
    tags: ["Laravel", "React", "Stripe", "RBAC"],
    filters: ["Full Stack", "React", "Laravel"],
    repo: "https://github.com/zuheirserrieh/joker-ecommerce",
  },
  {
    title: "Northstar Supply",
    kind: "Personal project",
    description:
      "E-commerce demo with a Django REST Framework API, JWT authentication, Django Admin reports, and a React storefront.",
    tags: ["Django", "React", "JWT"],
    filters: ["Full Stack", "Backend", "React"],
    repo: "https://github.com/zuheirserrieh/northstar-supply",
  },
  {
    title: "FastAPI Auth API",
    kind: "Personal project",
    description:
      "Authentication and analytics API with role-based authorization, validation, and paginated user management.",
    tags: ["FastAPI", "Python", "SQLAlchemy", "JWT"],
    filters: ["Backend"],
    repo: "https://github.com/zuheirserrieh/fastapi-auth-api",
  },
  {
    title: "Zuheir Realty",
    kind: "Personal project",
    description:
      "Marketing website with a file-based admin CMS for pages, services, projects, blog, and news, plus role-based admin accounts.",
    tags: ["Next.js", "TypeScript", "CMS"],
    filters: ["Full Stack", "Next.js"],
    repo: "https://github.com/zuheirserrieh/zuheir-realty",
  },
  {
    title: "City Explorer",
    kind: "Personal project",
    description:
      "Explore a city through Wikipedia history summaries, Ticketmaster events, maps, and a built-in Q&A chatbot.",
    tags: ["Vue 3", "PHP", "JavaScript"],
    filters: ["Frontend", "PHP"],
    repo: "https://github.com/zuheirserrieh/isd",
  },
  {
    title: "Al-Bekai Group Website",
    description:
      "Responsive corporate website with interactive UI components and cross-browser support.",
    tags: ["JavaScript", "Responsive UI"],
    filters: ["Frontend"],
    live: "https://bekai-group.com/en/sainik-traiding-company",
  },
];

export const featuredProjects = allProjects.slice(0, 3);

export const projectFilters = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "React",
  "Next.js",
  "Laravel",
  "PHP",
];

export const experience = [
  {
    role: "Full Stack Developer (Part-Time)",
    company: "Tawasoul",
    period: "Jul 2026 – Present",
    points: [
      "Build full-stack features for an AI-powered coaching platform where users practice interviews, meetings, and presentations with an AI coach.",
      "Built timed practice sessions and NLP-based detection of specific questions in user–coach conversations.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "Jul 2026 – Present",
    points: [
      "Deliver business websites end to end, from requirements and UI design to deployment and support.",
      "Ship with Next.js, TypeScript, and Tailwind CSS on Cloudflare Workers, including custom domain setup.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Hub (UNRWA), South Lebanon",
    period: "Jan 2026 – Jun 2026",
    points: [
      "Developed web apps with React, Next.js, and Node.js (Express, NestJS), plus REST APIs in FastAPI and Django REST Framework.",
      "Implemented JWT authentication, password hashing, and role-based access control, and integrated external AI APIs.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Octa Solutions, Saida",
    period: "Oct 2025 – Jan 2026",
    points: [
      "Built responsive interfaces with TypeScript and React, and backend features in Laravel with CRUD on relational databases.",
    ],
  },
];

export const education = {
  degree: "B.S. in Computer Science",
  school: "Lebanese International University, Saida",
  period: "Oct 2022 – Jun 2025",
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "NestJS", "Laravel", "FastAPI", "Django REST"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis"],
  },
  {
    title: "Security & AI",
    items: ["JWT", "RBAC", "Zod validation", "LLM APIs", "NLP"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Cloudflare Workers", "Vercel", "CI/CD", "Agile/Scrum", "SEO"],
  },
];
