import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freza Majithia | UI/UX Designer",
  description:
    "Portfolio of Freza Majithia, UI/UX designer. Selected projects, resume, and contact.",
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
