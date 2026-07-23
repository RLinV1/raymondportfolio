import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { NowBuilding } from "@/components/NowBuilding";
import { Stack } from "@/components/Stack";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-page px-6">
        <Hero />
        <NowBuilding />
        <Stack />
        <Footer />
      </main>
    </>
  );
}
