export default function About() {
  return (
    <section id="about" className="section section-divider">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          gap: 48,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-secondary)",
                fontSize: 13,
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {/* Swap this div for a real <img src="/headshot.jpg" /> */}
              Your photo
            </div>
            <div>
              <p className="eyebrow">About</p>
              <h2 className="h2">Hi, I'm Freza.</h2>
              <p className="body" style={{ marginTop: 20, maxWidth: 640 }}>
                I'm a UI/UX designer focused on turning complex problems into
                interfaces that feel obvious in hindsight. My process starts
                with research and information architecture, then moves into
                wireframes, high-fidelity prototypes, and testing — always
                grounded in how people actually use the product.
              </p>
              <p className="body" style={{ marginTop: 16, maxWidth: 640 }}>
                Recently I've worked on design systems, mobile app flows, and
                B2B dashboards, collaborating closely with engineers to make
                sure design intent survives all the way to production.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
                {["Figma", "Prototyping", "Design Systems", "User Research"].map(
                  (tag) => (
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
