import Link from "next/link";
import { PROJECTS, type ProjectContent } from "@/lib/projects";

function ProjectCard({ project }: { project: ProjectContent }) {
  return (
    <Link href={`/projects/${project.slug}`} style={{ display: "block" }}>
      <article>
        <div
          style={{
            aspectRatio: "4 / 3",
            background: "var(--color-bg-subtle)",
            border: "1px solid var(--color-border)",
            borderRadius: 16,
            marginBottom: 20,
            overflow: "hidden",
            padding: project.cover ? 20 : 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {project.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          ) : (
            <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
              Cover image coming soon
            </span>
          )}
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
          {project.summary}
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

export default function Projects() {
  const realProjects = PROJECTS.filter((p) => p.kind === "project");
  const explorations = PROJECTS.filter((p) => p.kind === "exploration");

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
          {realProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div style={{ marginTop: 96, marginBottom: 40 }}>
          <p className="eyebrow">UX Explorations</p>
          <p className="body" style={{ maxWidth: 560 }}>
            Design case studies — problem, goal, process, and screens.
          </p>
        </div>

        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "48px 40px",
          }}
        >
          {explorations.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
