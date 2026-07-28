export default function Footer() {
  return (
    <footer className="section-divider">
      <div
        className="container"
        style={{
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          color: "var(--color-text-secondary)",
        }}
      >
        <span>&copy; {new Date().getFullYear()} Freza Majithia</span>
        <span>Designed &amp; built by Freza Majithia</span>
      </div>
    </footer>
  );
}
