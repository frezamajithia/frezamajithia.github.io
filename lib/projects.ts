export type ProjectMeta = {
  role?: string;
  duration?: string;
  team?: string;
  tools?: string[];
  skills?: string[];
};

export type ProjectContent = {
  slug: string;
  title: string;
  kind: "project" | "exploration"; // "project" = real build, "exploration" = design-only
  summary: string; // one-line, used on homepage grid
  cover: string;
  tags: string[];
  problem: string;
  goalOrRole: string; // "Goal" for explorations, "Role" for projects
  process: string[]; // ordered steps
  screens: string[]; // image paths for the "final design" section
  learnings: string; // "What I Learned"
  meta?: ProjectMeta;
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: ProjectContent[] = [
  {
    slug: "taskleaf",
    title: "TaskLeaf",
    kind: "project",
    summary:
      "A full-stack calendar and task management platform built to bring dashboards, task categorization, and analytics into one place.",
    cover: "",
    tags: ["Full Stack", "Next.js", "FastAPI"],
    problem:
      "Students and young professionals juggle tasks, deadlines, and calendars across too many disconnected apps, losing time to app-switching instead of actually getting things done.",
    goalOrRole: "Full Stack Developer — designed and built roughly 89% of the app, from UI through auth and integrations.",
    process: [
      "Planning & architecture",
      "Auth & API design",
      "Calendar & weather integration",
      "Automated testing & CI/CD",
      "Deployment",
    ],
    screens: [],
    learnings:
      "TODO — what stood out most building TaskLeaf end-to-end (auth, calendar sync, CI/CD)? Send a sentence or two and I'll drop it in.",
    meta: {
      role: "Full Stack Developer (~89% of build)",
      duration: "~6 weeks",
      team: "2 (with a teammate)",
      tools: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "JWT Auth",
        "Google OAuth",
        "Google Calendar API",
        "GitHub Actions",
      ],
      skills: ["Full-Stack Development", "API Design", "Authentication", "CI/CD", "Teamwork"],
    },
    repoUrl: "https://github.com/frezamajithia/taskleaf-app-gabe-freza",
  },
  {
    slug: "biteful",
    title: "Biteful",
    kind: "project",
    summary:
      "A cross-platform food delivery app covering restaurant browsing, cart, checkout, and live order tracking.",
    cover: "/projects/biteful-cover.jpg",
    tags: ["Mobile", "Flutter"],
    problem:
      "TODO — one or two sentences on the specific problem Biteful was solving (e.g. what existing delivery apps get wrong).",
    goalOrRole: "Design and development — UI/UX plus state management and local data.",
    process: ["Wireframes & UI design", "Flutter build", "Local storage & REST APIs", "Testing"],
    screens: ["/projects/biteful-cover.jpg"],
    learnings:
      "TODO — what did you take away from building this one (e.g. working with Provider/GoRouter, or a UX decision you made)?",
    meta: {
      role: "TODO — confirm your exact role (solo, or with a team?)",
      duration: "~6 weeks",
      team: "TODO — confirm team size",
      tools: ["Figma", "Flutter", "Dart", "SQLite", "REST APIs", "Provider", "GoRouter"],
      skills: ["Mobile Development", "State Management", "API Integration", "UI Design"],
    },
    repoUrl: "https://github.com/frezamajithia/biteful-final",
  },
  {
    slug: "otucommute",
    title: "OtuCommute",
    kind: "exploration",
    summary:
      "A carpool matching and trip planning concept for students commuting to Ontario Tech, especially through Canadian winters.",
    cover: "/projects/otucommute-cover.jpg",
    tags: ["Mobile", "Product Design"],
    problem:
      "Commuting students coordinating carpools rely on scattered group chats and word of mouth, making it hard to find a verified, reliable ride on short notice — a bigger problem than it first appears, especially in winter.",
    goalOrRole:
      "Design a single dashboard balancing three goals at once: easy to navigate, genuinely useful features, and modern enough that students would actually want to use and trust it.",
    process: [
      "Research commuter pain points",
      "Map the core user flow",
      "Wireframe the dashboard, matches, and planner",
      "Prototype in Figma",
    ],
    screens: ["/projects/otucommute-cover.jpg"],
    learnings:
      "Designing OtuCommute showed me it's a much more needed — and complicated — use case than it first appears, especially for students commuting through Canadian winters. I had to balance three goals at once: keep it easy to navigate, give it features people would actually find useful, and make it feel modern enough that students would want to use and trust it.",
  },
  {
    slug: "elanors-winery",
    title: "Elanor's Winery",
    kind: "exploration",
    summary:
      "A full e-commerce concept for a boutique winery, from persona to a finished visual system.",
    cover: "/projects/elanor-cover.jpg",
    tags: ["E-Commerce", "Design System", "Visual Design"],
    problem:
      "A boutique winery needs an online store that feels as considered as its product, guiding a specific customer persona from discovery to checkout without friction.",
    goalOrRole:
      "Design an end-to-end e-commerce experience — homepage, product detail, checkout, and confirmation — grounded in a defined user persona and task flow.",
    process: [
      "Define the persona and task flow",
      "Low-fidelity wireframes",
      "Build a moodboard and palette",
      "High-fidelity screens and type system",
    ],
    screens: [
      "/projects/elanor-brief.jpg",
      "/projects/elanor-wireframes.jpg",
      "/projects/elanor-moodboard.jpg",
      "/projects/elanor-cover.jpg",
    ],
    learnings:
      "This was one of my first real UI projects, and it taught me how tricky — yet essential — it is to actually put yourself in the shoes of your target audience. Writing out clear step-by-step flows, and imagining conversations with an ideal customer, made a huge difference in making sure the product actually made sense end to end. Even though the brief came from a generator rather than a real client, I approached it exactly as I would a live project.",
  },
  {
    slug: "pantrypal",
    title: "PantryPal",
    kind: "exploration",
    summary:
      "An AI-assisted meal-planning app that turns pantry items into recipe suggestions, built around real user research.",
    cover: "/projects/pantrypal-cover.jpg",
    tags: ["Mobile", "UX Research", "Prototyping"],
    problem:
      "Busy students, fitness-focused users, and sustainability-minded people all struggle with the same thing: deciding what to cook with what they already have, leading to decision fatigue, forgotten pantry items, and food waste.",
    goalOrRole:
      "UX research and design across the team: stakeholder interviews, personas, requirements, wireframes, and interactive Figma prototypes, iterated through usability testing.",
    process: [
      "Stakeholder interviews & surveys",
      "Personas & task analysis",
      "Requirements & conceptual design",
      "Wireframes & prototyping",
      "Usability testing",
    ],
    screens: ["/projects/pantrypal-flow.jpg", "/projects/pantrypal-cover.jpg"],
    learnings:
      "TODO — what did usability testing reveal, or what would you change next? (You've got great raw material here — e.g. the 50% of users hesitant to trust AI with their data — happy to help turn that into a reflection.)",
    meta: {
      role: "UX Research & Design",
      duration: "~1.5 months",
      team: "4 (group project)",
      tools: ["Figma"],
      skills: [
        "UX Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Requirements Gathering",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
