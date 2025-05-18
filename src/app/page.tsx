import CalltoAction from "@/components/CalltoAction/CalltoAction";
import FactsSection from "@/components/FactsSection/FactsSection";
import Hero from "@/components/HeroSlider/Hero";
import Solutions from "@/components/Solutions/Solutions";
import Vendors from "@/components/Vendors/Vendors";
import kenyageoJsonData from "../../public/kenya.json";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { locations } from "@/constants/locations";

export default function Home() {
  return (
    <div className="items-center min-h-screen ">
      <Hero />
      <CalltoAction />
      <FactsSection />
      <Solutions />
      <Vendors locations={locations} geoJsonData={kenyageoJsonData} />
      <Testimonials />
    </div>
  );
}
