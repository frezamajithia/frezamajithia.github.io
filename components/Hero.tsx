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
      <p className="eyebrow">UI/UX Designer</p>
      <h1 className="h1" style={{ maxWidth: 780 }}>
        Design that gets
        <br />
        out of the way.
      </h1>
      <p className="body-large" style={{ maxWidth: 560, marginTop: 24 }}>
        I'm Freza — I design clear, considered interfaces for web and mobile
        products. Here's a look at some recent work.
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
