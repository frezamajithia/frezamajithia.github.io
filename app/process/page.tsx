import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const STEPS = [
  "Understand",
  "Research",
  "Plan",
  "Design",
  "Build",
  "Test",
  "Iterate",
];

export default function ProcessPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="container" style={{ paddingTop: 60, paddingBottom: 56 }}>
          <p className="eyebrow">How I work</p>
          <h1 className="h1" style={{ fontSize: "clamp(32px, 6vw, 56px)" }}>
            Process
          </h1>
          <p className="body-large" style={{ marginTop: 16, maxWidth: 640 }}>
            The same loop, whether I'm shipping code or designing a screen:
            understand the problem before reaching for a solution, then test
            and iterate rather than assume the first version is right.
          </p>
        </section>

        <section className="section section-divider">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              {STEPS.map((step, i) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      padding: "18px 24px",
                      border: "1px solid var(--color-border)",
                      borderRadius: 16,
                      fontSize: 19,
                      fontWeight: 600,
                    }}
                  >
                    {step}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      style={{
                        color: "var(--color-accent)",
                        fontSize: 20,
                        padding: "8px 0",
                      }}
                    >
                      &darr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
