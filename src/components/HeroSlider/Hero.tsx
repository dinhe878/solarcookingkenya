"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSlider from "./HeroSlider";
import { Button } from "../ui/button";

const slides = [
  {
    image: "/PHOTO-2026-04-08-08-37-55.jpg",
    title:
      "Integrated Solar Cooking - a way to a healthier and more sustainable life",
    content:
      "Integrated solar cooking (ISC) can improve both health and economy for families that use firewood, charcoal, kerosene or gas for cooking. A transition to ISC will reduce deforestation and also reduce carbon emission and thus reduce global warming.",
  },
  {
    image: "/PHOTO-2026-04-08-08-35-25.jpg",
    title: "Investment repaid within 18 meals",
    content:
      "Panel ovens and conical cookers are usually the less expensive ones. A panel oven or a conical cooker pay for itself by using it for around 18 meals instead of 2kg (wood fuel) per Day.",
  },
  {
    image: "/PHOTO-2026-04-08-08-36-25.jpg",
    title: "Free fuel from the sun",
    content:
      "Buy the cooker in installments after an initial cash deposit. After paying for your solar cooker the sun will provide you with free fuel. Take good care of your cooker and it will last for many years. Combine with a fireless cooker to keep your meal hot and your family healthy.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen h-fit lg:h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlider
          key={index}
          slide={slide}
          index={index}
          currentSlide={currentSlide}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 items-center z-20">
        {slides.map((_, index) => (
          <Button
            variant="ghost"
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 rounded-full ${
              currentSlide === index ? "bg-secondary h-2" : "bg-background h-1"
            }`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        onClick={prevSlide}
        className="absolute bg-transparent border-none left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-background hover:bg-foreground z-20">
        <ChevronLeft size={30} />
      </Button>

      <Button
        variant="outline"
        onClick={nextSlide}
        className="absolute bg-transparent border-none right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-background hover:bg-foreground z-20">
        <ChevronRight size={30} />
      </Button>
    </div>
  );
}
