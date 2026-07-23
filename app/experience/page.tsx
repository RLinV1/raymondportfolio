import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Experience | Raymond Lin",
  description: "Work experience of Raymond Lin.",
};

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-page px-6 pt-20">
        <Experience />
        <Footer />
      </main>
    </>
  );
}
