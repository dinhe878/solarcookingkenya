"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroSlider from "./HeroSlider";

const slides = [
  {
    image: "/solarcooking1.jpg",
    title: "Pioneers Of Solar And Renewable Energy",
    content:
      "Integrated solar cooking (ISC) can improve both health and economy for families that use firewood, charcoal, kerosene or gas for cooking. A transition to ISC will reduce deforestation and also reduce carbon emission and thus reduce global warming.",
  },
  {
    image: "/solarcooking2.jpg",
    title: "Pioneers Of Solar And Renewable Energy",
    content:
      "Panel ovens and conical cookers are usually the less expensive ones. A panel oven or a conical cooker pay for itself by using it for around 18 meals instead of 2kg (wood fuel) per meal.",
  },
  {
    image: "/solarcooking3.jpg",
    title: "Pioneers Of Solar And Renewable Energy",
    content:
      "You can often buy the cooker on instalment, but you need to pay a certain amount in cash.After paying for your solar cooker the sun will provide you with free fuel. Take good care of your cooker and it will last for many years.Combine with a fireless cooker to keep your meal hot until you want to eat.",
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
    // const timer = setInterval(nextSlide, 5000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlider
          key={index}
          slide={slide}
          index={index}
          currentSlide={currentSlide}
        />
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75">
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
