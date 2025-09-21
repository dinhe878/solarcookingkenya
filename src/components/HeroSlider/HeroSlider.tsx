import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function HeroSlider({
  slide,
  index,
  currentSlide,
}: {
  slide: any;
  index: number;
  currentSlide: number;
}) {
  const router = useRouter();

  const onProductsClick = () => {
    router.push("/solarcookers/types");
  };

  return (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
        currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}>
      <Image
        src={slide.image}
        alt={slide.title}
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto h-full flex items-center px-10">
          <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
            <div className="bg-black/60 text-background p-6 md:p-8 rounded-lg shadow-lg max-w-2xl">
              <h1 className="text-[48px] md:text-[56px] lg:text-[60px] font-bold leading-tight tracking-tighter">
                {slide.title}
              </h1>
              <p className="text-body-small md:text-body-medium max-w-2xl">
                {slide.content}
              </p>
              <div className="flex mt-8">
                <div className="flex space-x-6">
                  {slide.icons?.map((icon: string, i: number) => (
                    <Image
                      key={i}
                      src={icon}
                      alt="icon"
                      width={40}
                      height={40}
                      className="invert"
                    />
                  ))}
                </div>
                <Button
                  onClick={onProductsClick}
                  className="bg-secondary text-secondary-foreground px-8 py-3 flex items-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  Our Products
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
