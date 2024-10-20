import CalltoAction from "@/components/CalltoAction/CalltoAction";
import FactsSection from "@/components/FactsSection/FactsSection";
import Hero from "@/components/HeroSlider/Hero";

export default function Home() {
  return (
    <div className="items-center min-h-screen ">
      <Hero />
      <CalltoAction />
      <FactsSection />
    </div>
  );
}
