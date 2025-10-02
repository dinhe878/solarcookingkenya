"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/Kakuma_camp_solar_cooking_solarcookers_dot_org_short.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-14 py-16 grid gap-8 items-center">
          <div>
            <h1 className="text-[64px] md:text-[80px] font-bold leading-tight tracking-tighter">
              Testimonials
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              Real stories from our users and partners across Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Moving Cards */}
      <div className="py-16 px-10">
        <div className="flex flex-col space-y-4 lg:w-2/3 lg:text-center justify-center lg:items-center mx-auto">
          <h2 className="text-title-medium md:text-title-large font-semibold text-secondary">
            What Our Clients Say
          </h2>
          <p className="text-display-medium font-bold leading-tight lg:w-1/2 lg:text-center text-accent">
            Saving Money and the environment we live in!
          </p>
        </div>

        <div className="mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote:
      "My name is Sarah Ndunyo. I have used solar cookers for some years now. It saves me a lot of money. A sunny month as last February I solar cooked my food during 20 days. That saved me around 2000 KES.",
    name: "Sarah N.",
    title: "Construction Manager",
  },
  {
    quote:
      "I have two cookers that I can bring to the fields. It is easier and faster to use two cookers. I heat up water when my food is done to use for washing up.I also have a box cooker and a fireless cooker. The box cooker is heavier, but that is good when it is windy. The fireless cooker keeps the dish hot until we eat.",
    name: "Samuel O.",
    title: "Nairobi County, Kenya",
  },
  {
    quote:
      "The cooker also saves me time, since I can do other work while it cooks. A good thing is that It is easy to bring it out to the fields and eat there after work.",
    name: "Peter K.",
    title: "Architect",
  },
];

export default TestimonialsPage;
