const QA = [
  {
    q: "Who are you?",
    a: "I'm a recent Computer Science graduate from Ontario Tech University with interests spanning product, UX, IT, quality engineering, and cybersecurity.",
  },
  {
    q: "What excites you?",
    a: "I'm particularly interested in product management, IT systems, quality engineering, and building software that solves real user problems.",
  },
  {
    q: "How do you work?",
    a: "I enjoy collaborating across teams, learning new technologies, and approaching problems with curiosity, attention to detail, and data-informed decision-making.",
  },
];

const LEARNING = [
  "Product Management",
  "AI-assisted workflows",
  "User Research",
  "Quality Engineering",
  "Data Analytics",
];

export default function About() {
  return (
    <section id="about" className="section section-divider">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "var(--color-bg-subtle)",
              border: "1px solid var(--color-border)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.jpg"
              alt="Freza Majithia"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div>
            <p className="eyebrow">About</p>
            <h2 className="h2" style={{ marginBottom: 32 }}>
              Hi, I'm Freza.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {QA.map((item) => (
                <div key={item.q}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      marginBottom: 6,
                    }}
                  >
                    {item.q}
                  </p>
                  <p className="body" style={{ maxWidth: 600, fontSize: 17 }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  marginBottom: 10,
                }}
              >
                Currently exploring
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {LEARNING.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 13,
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 980,
                      padding: "6px 14px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
