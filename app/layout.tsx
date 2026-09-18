import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: {
    default: "Freza Majithia | Computer Science Graduate",
    template: "%s | Freza Majithia",
  },
  description:
    "Portfolio of Freza Majithia: Computer Science graduate working across software engineering, product, UX, quality engineering, and cybersecurity. Selected projects, resume, and contact.",
  metadataBase: new URL("https://frezamajithia.github.io"),
  openGraph: {
    title: "Freza Majithia",
    description:
      "Computer Science graduate building thoughtful technology through software engineering, product thinking, QA, and UX design.",
    url: "https://frezamajithia.github.io",
    siteName: "Freza Majithia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
