type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Orbit — Team Scheduling App",
    description:
      "A redesign of a scheduling tool used by distributed teams, focused on reducing time-to-book from four steps to one.",
    tags: ["Product Design", "Mobile"],
  },
  {
    title: "Northwind Design System",
    description:
      "A component library and set of design tokens built to bring consistency across four internal products.",
    tags: ["Design Systems", "Figma"],
  },
  {
    title: "Fieldnote — Research Repository",
    description:
      "An internal tool that helps research teams organize interviews and surface patterns across studies.",
    tags: ["UX Research", "Web App"],
  },
  {
    title: "Loop — Habit Tracker",
    description:
      "A minimal iOS habit tracker exploring how small, quiet interactions can encourage daily use.",
    tags: ["iOS", "Interaction Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-divider">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="h2" style={{ marginBottom: 56 }}>
          Projects
        </h2>

        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "48px 40px",
          }}
        >
          {PROJECTS.map((project) => (
            <article key={project.title}>
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text-secondary)",
                  fontSize: 13,
                }}
              >
                {/* Swap for a real project image: <img src="/projects/orbit.jpg" /> */}
                Project preview
              </div>
              <h3
                style={{
                  fontSize: 21,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  marginBottom: 8,
                }}
              >
                {project.title}
              </h3>
              <p className="body" style={{ marginBottom: 12 }}>
                {project.description}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
