import { NavbarDemo } from "@/components/ui/NavbarMenu";
import RecentProjects from "./RecentProjects";
import { Footer } from "@/components/Footer";

export default function Projects() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full" id="projects">
        <NavbarDemo />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
