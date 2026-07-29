const EXPERIENCE = [
  {
    role: "Blockchain & Web3 Security Extern",
    org: "Webacy (Remote)",
    period: "May 2024 to Jun 2024",
  },
  {
    role: "Freelance Web Developer",
    org: "Dubai, UAE",
    period: "Jan 2022 to Mar 2022",
  },
  {
    role: "B.Sc (Honours), Computer Science",
    org: "Ontario Tech University",
    period: "Sept 2021 to Apr 2026",
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
            marginBottom: 40,
          }}
        >
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="h2" style={{ marginBottom: 12 }}>
              Resume
            </h2>
            <p className="body" style={{ maxWidth: 460, fontSize: 15 }}>
              Tailored resumes are available for Software Engineering,
              Product, IT Systems, Quality Engineering, and Cybersecurity
              opportunities. Reach out and I'll send the right one.
            </p>
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
