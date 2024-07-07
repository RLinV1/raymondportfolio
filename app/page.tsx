import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/ui/NavbarMenu";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavbarDemo />
        <Hero />
        <Grid />
        <Footer />
      </div>
    </main>
  )
}
