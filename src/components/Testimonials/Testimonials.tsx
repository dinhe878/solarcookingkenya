"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-blue dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hiddenn ">
      <div className="flex flex-col space-y-4 w-2/3 text-center justify-center items-center">
        <h1 className="text-title-small font-semibold text-secondary">
          What Our Clients Say
        </h1>
        <p className="text-display-medium font-bold leading-tight w-1/2 text-center text-accent">
          Saving Money and the environment we live in!
        </p>
      </div>
      <div className="mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

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
