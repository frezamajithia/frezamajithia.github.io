const LINKS = [
  { label: "Email", value: "hello@frezamajithia.com", href: "mailto:hello@frezamajithia.com" },
  { label: "LinkedIn", value: "linkedin.com/in/frezamajithia", href: "https://linkedin.com/in/frezamajithia" },
  { label: "Dribbble", value: "dribbble.com/frezamajithia", href: "https://dribbble.com/frezamajithia" },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-divider">
      <div className="container">
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="h2" style={{ marginBottom: 20 }}>
              Let's work together.
            </h2>
            <p className="body" style={{ maxWidth: 440 }}>
              Open to full-time roles and select freelance projects. The
              fastest way to reach me is email — I usually reply within a
              couple of days.
            </p>
          </div>
          <div>
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--color-border)",
                  fontSize: 17,
                }}
              >
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {link.label}
                </span>
                <span style={{ color: "var(--color-accent)" }}>
                  {link.value} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
