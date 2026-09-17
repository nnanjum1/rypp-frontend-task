import ChooseYourRide from "@/components/ChooseYourRide";
import ExploreBehicle from "@/components/ExploreBehicle";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularDestinations from "@/components/PopularDestinations";
import PopularVehicles from "@/components/PopularVehicles";
import WhyRypp from "@/components/WhyRypp";


export default function Home() {
  return (
    <main className="bg-[#FDFCFD]">
      <Navbar />
      <Hero />
      <ChooseYourRide />
      <ExploreBehicle />
      <PopularVehicles />
      <WhyRypp />
      <PopularDestinations />
    </main>
  );
}
