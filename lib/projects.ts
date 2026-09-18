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
  kind: "project" | "exploration" | "strategy"; // "project" = real build, "exploration" = design-only, "strategy" = business/change case study
  summary: string; // one-line, used on homepage grid
  cover: string;
  tags: string[];
  problem: string;
  goalOrRole: string; // "Goal" for explorations, "Role" for projects/strategy
  process: string[]; // ordered steps
  screens: string[]; // image paths for the "final design" section
  learnings: string; // "What I Learned"
  meta?: ProjectMeta;
  liveUrl?: string;
  repoUrl?: string;
  figmaEmbedUrl?: string; // embed.figma.com URL for an inline clickable prototype
  figmaViewUrl?: string; // www.figma.com URL to open the prototype full-screen
  downloadUrl?: string; // a file to download (e.g. a KPI workbook)
  downloadLabel?: string; // label for the download link
};

export const PROJECTS: ProjectContent[] = [
  {
    slug: "taskleaf",
    title: "TaskLeaf",
    kind: "project",
    summary:
      "A full-stack calendar and task management platform built to bring dashboards, task categorization, and analytics into one place.",
    cover: "/projects/taskleaf-dashboard.jpg",
    tags: ["Full Stack", "Next.js", "FastAPI"],
    problem:
      "Students and young professionals juggle tasks, deadlines, and calendars across too many disconnected apps, losing time to app switching instead of actually getting things done.",
    goalOrRole:
      "Full Stack Developer. Designed and built roughly 89 percent of the app, from UI through auth and integrations.",
    process: [
      "Planning and architecture",
      "Auth and API design",
      "Calendar and weather integration",
      "Automated testing and CI/CD",
      "Deployment",
    ],
    screens: [
      "/projects/taskleaf-login.jpg",
      "/projects/taskleaf-dashboard.jpg",
      "/projects/taskleaf-calendar.jpg",
      "/projects/taskleaf-analytics.jpg",
    ],
    learnings:
      "This was my first full-stack web application, and while it was incredibly rewarding and a project I'll always be proud of, it taught me how much work goes into building something you truly care about. Every small detail and flaw sticks out to you as the builder in a way it never would to someone else. The most challenging part on the frontend was getting the UI to feel seamless: I built custom components first, then switched to shadcn UI components partway through once I couldn't get my own to feel as polished. On the backend, setting up Google OAuth was the hardest part. Since this was an independent project, we ran into real security limitations and eventually had to take that feature down rather than risk bad security practices. I'm grateful for the guidance I got on the DevOps side; it took some quick learning, but we set up Docker and a testing pipeline that made running the app far smoother. Deploying with Vercel and Railway was genuinely enjoyable, and since both are widely used in the industry, it was a great way to actually understand how real deployment works.",
    meta: {
      role: "Full Stack Developer (about 89% of the build)",
      duration: "About 6 weeks",
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
        "shadcn/ui",
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
    cover: "/projects/biteful-overview.jpg",
    tags: ["Mobile", "Flutter"],
    problem:
      "The brief was to design and build a more unique, optimized take on an app we already use often. We took inspiration from apps like UberEats and DoorDash, aiming for a food delivery app with a slightly more playful UI that was still genuinely useful.",
    goalOrRole:
      "Responsible for the database, UI, and parts of both the frontend and backend, plus documentation, across a team of four.",
    process: ["Wireframes and UI design", "Flutter build", "Local storage and REST APIs", "Testing"],
    screens: [],
    learnings:
      "I learned that as much as I love designing UI, I need to stay mindful of feasibility, especially under a time constraint, so my developers can actually build what I design. That meant stepping into the coding side more than I usually would. Reusable, transferable UI components make the biggest difference for a team trying to ship on time.",
    meta: {
      role: "UI, database, some frontend and backend, documentation",
      duration: "About 6 weeks",
      team: "4 (group project)",
      tools: ["Figma", "Flutter", "Dart", "SQLite", "REST APIs", "Provider", "GoRouter"],
      skills: ["Mobile Development", "State Management", "API Integration", "UI Design"],
    },
    repoUrl: "https://github.com/frezamajithia/biteful-final",
    figmaEmbedUrl:
      "https://embed.figma.com/proto/mDJnev8j6a3rU1zMg2Otc8/Biteful?node-id=52-311&p=f&viewport=408%2C240%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A9&page-id=0%3A1&embed-host=share",
    figmaViewUrl:
      "https://www.figma.com/proto/mDJnev8j6a3rU1zMg2Otc8/Biteful?node-id=52-311&p=f&viewport=408%2C240%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A9&page-id=0%3A1",
  },
  {
    slug: "otucommute",
    title: "OtuCommute",
    kind: "exploration",
    summary:
      "A carpool matching and trip planning concept for students commuting to Ontario Tech, especially through Canadian winters.",
    cover: "/projects/otucommute-overview.jpg",
    tags: ["Mobile", "Product Design"],
    problem:
      "Commuting students coordinating carpools rely on scattered group chats and word of mouth, making it hard to find a verified, reliable ride on short notice. It's a bigger problem than it first appears, especially in winter.",
    goalOrRole:
      "Design a single dashboard balancing three goals at once: easy to navigate, genuinely useful features, and modern enough that students would actually want to use and trust it.",
    process: [
      "Research commuter pain points",
      "Map the core user flow",
      "Wireframe the dashboard, matches, and planner",
      "Prototype in Figma",
    ],
    screens: [],
    learnings:
      "Designing OtuCommute showed me it's a much more needed, and complicated, use case than it first appears, especially for students commuting through Canadian winters. I had to balance three goals at once: keep it easy to navigate, give it features people would actually find useful, and make it feel modern enough that students would want to use and trust it.",
    figmaEmbedUrl:
      "https://embed.figma.com/proto/pxwc40k37TU0uatoEtkUg7/OtuCommute?node-id=1-4&p=f&viewport=443%2C115%2C0.56&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&page-id=0%3A1&embed-host=share",
    figmaViewUrl:
      "https://www.figma.com/proto/pxwc40k37TU0uatoEtkUg7/OtuCommute?node-id=1-4&p=f&viewport=443%2C115%2C0.56&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&page-id=0%3A1",
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
      "Design an end-to-end e-commerce experience: homepage, product detail, checkout, and confirmation, grounded in a defined user persona and task flow.",
    process: [
      "Define the persona and task flow",
      "Low-fidelity wireframes",
      "Build a moodboard and palette",
      "High-fidelity screens and type system",
    ],
    screens: [],
    learnings:
      "This was one of my first real UI projects, and it taught me how tricky, yet essential, it is to actually put yourself in the shoes of your target audience. Writing out clear step-by-step flows, and imagining conversations with an ideal customer, made a huge difference in making sure the product actually made sense end to end. Even though the brief came from a generator rather than a real client, I approached it exactly as I would a live project.",
    figmaEmbedUrl:
      "https://embed.figma.com/proto/jCB0EQJvwbHt7HFNMru8GW/Elanor-Ecom-v1?node-id=71-123&viewport=-4%2C418%2C0.71&scaling=scale-down&content-scaling=fixed&starting-point-node-id=71%3A123&page-id=67%3A111&embed-host=share",
    figmaViewUrl:
      "https://www.figma.com/proto/jCB0EQJvwbHt7HFNMru8GW/Elanor-Ecom-v1?node-id=71-123&viewport=-4%2C418%2C0.71&scaling=scale-down&content-scaling=fixed&starting-point-node-id=71%3A123&page-id=67%3A111",
  },
  {
    slug: "pantrypal",
    title: "PantryPal",
    kind: "exploration",
    summary:
      "An AI-assisted meal-planning app that turns pantry items into recipe suggestions, built around real user research.",
    cover: "/projects/pantrypal-overview.jpg",
    tags: ["Mobile", "UX Research", "Prototyping"],
    problem:
      "Busy students, fitness-focused users, and sustainability-minded people all struggle with the same thing: deciding what to cook with what they already have, leading to decision fatigue, forgotten pantry items, and food waste.",
    goalOrRole:
      "UX research and design across the team: stakeholder interviews, personas, requirements, wireframes, and interactive Figma prototypes, iterated through usability testing.",
    process: [
      "Stakeholder interviews and surveys",
      "Personas and task analysis",
      "Requirements and conceptual design",
      "Wireframes and prototyping",
      "Usability testing",
    ],
    screens: [],
    learnings:
      "When we tested this with users, some were actually more open to trusting the AI's recommendations than we expected, though they wished it felt more customizable to their own taste. If this were a real product, the next step would be making the AI trainable, or adding real support from an agent, so users feel safer about how their data is handled and stored, while still getting recipes that actually fit what they like.",
    meta: {
      role: "UX Research and Design",
      duration: "About 1.5 months",
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
    figmaEmbedUrl:
      "https://embed.figma.com/proto/Bb8prY9X0X2bmNDE6mCvjy/PantryPal?node-id=21-1036&p=f&viewport=-1110%2C91%2C0.42&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share",
    figmaViewUrl:
      "https://www.figma.com/proto/Bb8prY9X0X2bmNDE6mCvjy/PantryPal?node-id=21-1036&p=f&viewport=-1110%2C91%2C0.42&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    slug: "genai-cloud-transformation",
    title: "Enterprise GenAI & Cloud Transformation",
    kind: "strategy",
    summary:
      "A self-directed change management simulation for a 1,200-employee company adopting a generative AI tool and migrating to a hybrid cloud.",
    cover: "/projects/genai-cloud-cover.jpg",
    tags: ["Change Management", "ADKAR", "Stakeholder Strategy"],
    problem:
      "A simulated mid-sized company is making two changes at once: migrating legacy systems to an open hybrid cloud, and rolling out a generative AI productivity tool to four departments. Legacy IT engineers, whose work is most affected by the cloud migration, and non-technical business units have very different concerns, and both groups need a plan that addresses their specific resistance points rather than a single generic rollout.",
    goalOrRole:
      "Independent case study, designed solo. Built the full change strategy: stakeholder matrix, ADKAR baseline, champion network, training roadmap, communications plan, and KPI dashboard.",
    process: [
      "Scenario and stakeholder mapping",
      "ADKAR baseline and barrier analysis",
      "Innovation Champions network design",
      "4-week gamified training roadmap",
      "Communications plan",
      "Change KPI dashboard",
    ],
    screens: [],
    learnings:
      "Self-teaching the Prosci ADKAR framework and applying it end to end showed me how differently the same change lands across groups. IT engineers, for example, scored fine on Awareness but low on Desire, so more training would not have helped them. What they needed was a clear answer to what is in it for me: a reskilling path and a real seat in the migration design. Building the KPI dashboard reinforced the same lesson with data: overall adoption looked reasonably close to target, but that average was hiding Finance sitting well below it while Customer Service was already past it. A general push would have wasted effort on departments that did not need it. The real fix was targeted: more champion coverage and compliance-approved use cases for Finance, and sharing what was already working in Customer Service with Operations and HR.",
    meta: {
      role: "Independent case study (self-directed simulation)",
      duration: "2026",
      team: "Solo",
      tools: ["Prosci ADKAR Framework", "Excel", "Stakeholder Matrix", "KPI Dashboard Design"],
      skills: [
        "Change Management",
        "Stakeholder Analysis",
        "Training Program Design",
        "Data Visualization",
        "Risk Mitigation",
      ],
    },
    downloadUrl: "/downloads/change-kpi-dashboard-simulation.xlsx",
    downloadLabel: "Download the Change KPI Dashboard (.xlsx)",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
