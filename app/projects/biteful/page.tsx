import { getProjectBySlug } from "@/lib/projects";
import CaseStudy from "@/components/CaseStudy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

export default function Page() {
  const project = getProjectBySlug("biteful");
  if (!project) return notFound();
  return (
    <>
      <Nav />
      <CaseStudy project={project} />
      <Footer />
    </>
  );
}
