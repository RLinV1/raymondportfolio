import { Footer } from "@/components/Footer";
import { NavbarDemo } from "@/components/ui/NavbarMenu";
import AboutPage from "./AboutPage";

export default function About() {
    return (
      <main
        className="relative bg-black-100 flex justify-center items-center flex-col 
      overflow-hidden mx-auto sm:px-10 px-5"
      >
        <div className="max-w-7xl w-full" id="about">
            <NavbarDemo />
            <AboutPage />
            <Footer />
        </div>
      </main>
    );
}
  