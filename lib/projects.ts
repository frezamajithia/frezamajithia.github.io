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
  process: string[]; // ordered steps, e.g. ["Research", "Wireframes", "Prototyping"]
  screens: string[]; // image paths for the "final design" section
  learnings: string; // "What I Learned"
  meta?: ProjectMeta; // only used for kind === "project"
  liveUrl?: string;
  repoUrl?: string;
};

export const PROJECTS: ProjectContent[] = [
  {
    slug: "taskleaf",
    title: "TaskLeaf",
    kind: "project",
    summary:
      "TODO — one-line summary of what TaskLeaf does and who it's for.",
    cover: "", // TODO: add a screenshot to /public/projects/taskleaf-cover.jpg
    tags: ["Full Stack", "Next.js", "FastAPI"],
    problem: "TODO — what problem was TaskLeaf solving, and for whom?",
    goalOrRole: "Full Stack Developer", // TODO: confirm your role
    process: [
      "TODO: step 1 (e.g. Planning)",
      "TODO: step 2 (e.g. API design)",
      "TODO: step 3 (e.g. Build)",
      "TODO: step 4 (e.g. Testing)",
    ],
    screens: [], // TODO: add screenshots
    learnings: "TODO — what did you learn building this?",
    meta: {
      role: "Full Stack Developer", // TODO confirm
      duration: "8 weeks", // TODO confirm
      team: "2", // TODO confirm
      tools: ["Next.js", "FastAPI", "PostgreSQL", "Docker"], // TODO confirm
      skills: ["Teamwork", "Planning", "Problem Solving", "API Design"], // TODO confirm
    },
  },
  {
    slug: "biteful",
    title: "Biteful",
    kind: "project",
    summary: "An early-stage food ordering and delivery app concept.",
    cover: "/projects/biteful-cover.jpg",
    tags: ["Mobile", "Early Concept"],
    problem:
      "TODO — what gap in food delivery apps was Biteful meant to address?",
    goalOrRole: "TODO — your role (e.g. Product Designer)",
    process: [
      "TODO: e.g. Competitive research",
      "TODO: e.g. Wireframes",
      "TODO: e.g. Visual design",
    ],
    screens: ["/projects/biteful-cover.jpg"],
    learnings: "TODO — what did you learn from this one?",
    meta: {
      role: "TODO",
      duration: "TODO",
      team: "TODO",
      tools: ["Figma"],
      skills: ["TODO"],
    },
  },
  {
    slug: "otucommute",
    title: "OtuCommute",
    kind: "exploration",
    summary:
      "A carpool matching and trip planning concept for students commuting to Ontario Tech.",
    cover: "/projects/otucommute-cover.jpg",
    tags: ["Mobile", "Product Design"],
    problem:
      "Commuting students coordinating carpools rely on scattered group chats and word of mouth, making it hard to find a verified, reliable ride on short notice.",
    goalOrRole:
      "Design a single dashboard where students can find verified carpool matches, see nearby commuters in real time, and plan a trip end-to-end.",
    process: [
      "Research commuter pain points",
      "Map the core user flow",
      "Wireframe the dashboard, matches, and planner",
      "Prototype in Figma",
    ],
    screens: ["/projects/otucommute-cover.jpg"],
    learnings:
      "TODO — what stood out to you designing this (a tradeoff you made, something testing revealed, etc.)?",
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
      "TODO — what did defining a persona/task flow change about your design decisions?",
  },
  {
    slug: "pantrypal",
    title: "PantryPal",
    kind: "exploration",
    summary:
      "An app that helps people cook with what they already have, from pantry scan to shopping list.",
    cover: "/projects/pantrypal-cover.jpg",
    tags: ["Mobile", "UX Research", "Prototyping"],
    problem:
      "Busy students struggle to manage groceries and reduce food waste — they don't know what's about to expire or what they can actually cook with it.",
    goalOrRole:
      "Design a flow that turns a scanned pantry into a confident meal decision: from item scan, to a filtered recipe suggestion, to an auto-built shopping list for what's missing.",
    process: [
      "Stakeholder interviews",
      "Personas",
      "User flows",
      "Figma prototyping",
      "Usability testing",
    ],
    screens: ["/projects/pantrypal-flow.jpg", "/projects/pantrypal-cover.jpg"],
    learnings:
      "TODO — what did usability testing reveal, or what would you change next?",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
