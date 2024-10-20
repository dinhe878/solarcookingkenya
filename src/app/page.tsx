import CalltoAction from "@/components/CalltoAction/CalltoAction";
import FactsSection from "@/components/FactsSection/FactsSection";
import Hero from "@/components/HeroSlider/Hero";
import Solutions from "@/components/Solutions/Solutions";

export default function Home() {
  return (
    <div className="items-center min-h-screen ">
      <Hero />
      <CalltoAction />
      <FactsSection />
      <Solutions />
    </div>
  );
}
