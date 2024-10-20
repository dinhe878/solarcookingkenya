import React from "react";
import Image from "next/image";

export default function HeroSlider({
  slide,
  index,
  currentSlide,
}: {
  slide: any;
  index: any;
  currentSlide: any;
}) {
  return (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
        currentSlide === index ? "opacity-100" : "opacity-0"
      }`}>
      <Image
        src={slide.image}
        alt={slide.title}
        width={1200}
        height={600}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
          <p className="text-xl">{slide.content}</p>
        </div>
      </div>
    </div>
  );
}
