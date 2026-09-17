import ChooseYourRide from "@/components/ChooseYourRide";
import ExploreBehicle from "@/components/ExploreBehicle";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularVehicles from "@/components/PopularVehicles";


export default function Home() {
  return (
    <main className="bg-[#FDFCFD]">
      <Navbar />
      <Hero />
      <ChooseYourRide />
      <ExploreBehicle />
      <PopularVehicles />
    </main>
  );
}
