export default function Hero() {
  return (
    <section
      id="home"
      className="container"
      style={{
        minHeight: "calc(100vh - var(--nav-height))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 60,
        paddingBottom: 60,
      }}
    >
      <p className="eyebrow">Computer Science Graduate</p>
      <h1 className="h1" style={{ maxWidth: 780 }}>
        Passionate about building
        <br />
        thoughtful technology.
      </h1>
      <p className="body-large" style={{ maxWidth: 620, marginTop: 24 }}>
        Through software engineering, product thinking, quality assurance,
        and user-centered design — I'm Freza, and here's a look at how I
        approach problems.
      </p>
      <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
        <a href="#projects" className="btn btn-primary">
          View projects
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get in touch
        </a>
      </div>
    </section>
  );
}
