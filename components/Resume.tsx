const EXPERIENCE = [
  {
    role: "UI/UX Designer",
    org: "Company Name",
    period: "2023 — Present",
  },
  {
    role: "Product Design Intern",
    org: "Company Name",
    period: "2022 — 2023",
  },
  {
    role: "B.Des, Interaction Design",
    org: "University Name",
    period: "2019 — 2023",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="section section-divider">
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="h2">Resume</h2>
          </div>
          <a href="/resume.pdf" className="btn btn-primary" download>
            Download résumé
          </a>
        </div>

        <div style={{ maxWidth: 640 }}>
          {EXPERIENCE.map((item, i) => (
            <div
              key={item.role}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 24,
                padding: "24px 0",
                borderTop: i === 0 ? "none" : "1px solid var(--color-border)",
              }}
            >
              <div>
                <p style={{ fontSize: 17, fontWeight: 600, margin: 0 }}>
                  {item.role}
                </p>
                <p className="body" style={{ margin: "4px 0 0 0" }}>
                  {item.org}
                </p>
              </div>
              <p
                className="body"
                style={{ margin: 0, whiteSpace: "nowrap", flexShrink: 0 }}
              >
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
