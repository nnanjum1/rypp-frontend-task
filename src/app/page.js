import ChooseYourRide from "@/components/ChooseYourRide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="bg-[#FDFCFD]">
      <Navbar />
      <Hero />
      <ChooseYourRide />
    </main>
  );
}
