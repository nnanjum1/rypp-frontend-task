import ChooseYourRide from "@/components/ChooseYourRide";
import CTA from "@/components/CTA";
import ExploreBehicle from "@/components/ExploreBehicle";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import PopularDestinations from "@/components/PopularDestinations";
import PopularVehicles from "@/components/PopularVehicles";
import Testimonial from "@/components/Testimonial";
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
      <HowItWorks />
      <Testimonial />
      <Metrics />
      <CTA />
      <Footer />
    </main>
  );
}
