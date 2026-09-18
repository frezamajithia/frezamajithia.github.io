import { getProjectBySlug } from "@/lib/projects";
import CaseStudy from "@/components/CaseStudy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const project = getProjectBySlug("taskleaf");

export const metadata: Metadata = {
  title: project?.title ?? "Project",
  description: project?.summary,
};

export default function Page() {
  if (!project) return notFound();
  return (
    <>
      <Nav />
      <CaseStudy project={project} />
      <Footer />
    </>
  );
}
