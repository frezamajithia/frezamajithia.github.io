import Link from "next/link";
import type { ProjectContent } from "@/lib/projects";

function MetaRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  const isTodo = value.trim().toUpperCase().startsWith("TODO");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: "var(--color-text-secondary)",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 15,
          color: isTodo ? "var(--color-accent)" : "var(--color-text)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function CaseStudy({ project }: { project: ProjectContent }) {
  const isTodo = (s: string) => s.trim().toUpperCase().startsWith("TODO");

  return (
    <main>
      <div className="container" style={{ paddingTop: 32, paddingBottom: 0 }}>
        <Link href="/#projects" className="link-arrow" style={{ fontSize: 14 }}>
          &larr; Back to projects
        </Link>
      </div>

      <section className="container" style={{ paddingTop: 32, paddingBottom: 56 }}>
        <p className="eyebrow">
          {project.kind === "project"
            ? "Project"
            : project.kind === "strategy"
            ? "Case Study"
            : "UX Exploration"}
        </p>
        <h1 className="h1" style={{ fontSize: "clamp(32px, 6vw, 56px)" }}>
          {project.title}
        </h1>
        <p className="body-large" style={{ marginTop: 16, maxWidth: 640 }}>
          {project.summary}
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 13,
                color: "var(--color-text-secondary)",
                border: "1px solid var(--color-border)",
                borderRadius: 980,
                padding: "6px 14px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {(project.repoUrl || project.liveUrl || project.downloadUrl) && (
          <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="link-arrow"
              >
                View on GitHub &rarr;
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="link-arrow"
              >
                Live demo &rarr;
              </a>
            )}
            {project.downloadUrl && (
              <a href={project.downloadUrl} download className="link-arrow">
                {project.downloadLabel || "Download"} &rarr;
              </a>
            )}
          </div>
        )}
      </section>

      {project.cover && !project.figmaEmbedUrl && project.screens.length === 0 && (
        <section className="container" style={{ paddingBottom: 56 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={project.title}
            style={{
              width: "100%",
              maxWidth: 900,
              display: "block",
              margin: "0 auto",
              borderRadius: 16,
              border: "1px solid var(--color-border)",
            }}
          />
        </section>
      )}

      {project.meta && (
        <section className="section-divider">
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 24,
              padding: "40px 24px",
            }}
          >
            <MetaRow label="Role" value={project.meta.role} />
            <MetaRow label="Duration" value={project.meta.duration} />
            <MetaRow label="Team" value={project.meta.team} />
            <MetaRow
              label="Tools"
              value={project.meta.tools?.join(", ")}
            />
            <MetaRow
              label="Skills"
              value={project.meta.skills?.join(", ")}
            />
          </div>
        </section>
      )}

      <section className="section-divider">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
            }}
            className="about-grid"
          >
            <div>
              <p className="eyebrow">The Problem</p>
              <p
                className="body"
                style={{
                  fontSize: 19,
                  color: isTodo(project.problem)
                    ? "var(--color-accent)"
                    : "var(--color-text)",
                }}
              >
                {project.problem}
              </p>
            </div>
            <div>
              <p className="eyebrow">
                {project.kind === "exploration" ? "Goal" : "My Role"}
              </p>
              <p
                className="body"
                style={{
                  fontSize: 19,
                  color: isTodo(project.goalOrRole)
                    ? "var(--color-accent)"
                    : "var(--color-text)",
                }}
              >
                {project.goalOrRole}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <p className="eyebrow">Process</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              marginTop: 16,
            }}
          >
            {project.process.map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontSize: 15,
                    padding: "10px 18px",
                    border: "1px solid var(--color-border)",
                    borderRadius: 980,
                    color: isTodo(step)
                      ? "var(--color-accent)"
                      : "var(--color-text)",
                  }}
                >
                  {step}
                </span>
                {i < project.process.length - 1 && (
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.figmaEmbedUrl && (
        <section className="section-divider">
          <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
            <p className="eyebrow">Prototype</p>
            <p className="body" style={{ marginBottom: 20, fontSize: 15 }}>
              Click into the frame below to explore it directly, or open it
              full-screen in Figma.
            </p>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 720,
                aspectRatio: "16 / 9",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--color-border)",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src={project.figmaEmbedUrl}
                allowFullScreen
              />
            </div>
            {project.figmaViewUrl && (
              <a
                href={project.figmaViewUrl}
                target="_blank"
                rel="noreferrer"
                className="link-arrow"
                style={{ display: "inline-block", marginTop: 16 }}
              >
                Open in Figma &rarr;
              </a>
            )}
          </div>
        </section>
      )}

      {project.screens.length > 0 && (
        <section className="section-divider">
          <div className="container" style={{ paddingTop: 64, paddingBottom: 64 }}>
            <p className="eyebrow">
              {project.figmaEmbedUrl ? "More Screens" : "Final Design"}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
                marginTop: 16,
              }}
            >
              {project.screens.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={project.title}
                  style={{
                    width: "100%",
                    maxWidth: 420,
                    borderRadius: 16,
                    border: "1px solid var(--color-border)",
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-divider">
        <div className="container" style={{ paddingTop: 64, paddingBottom: 96 }}>
          <p className="eyebrow">What I Learned</p>
          <p
            className="body"
            style={{
              fontSize: 19,
              maxWidth: 640,
              color: isTodo(project.learnings)
                ? "var(--color-accent)"
                : "var(--color-text)",
            }}
          >
            {project.learnings}
          </p>
        </div>
      </section>
    </main>
  );
}
