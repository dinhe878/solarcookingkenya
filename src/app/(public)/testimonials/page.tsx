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
          backgroundImage: `url('/solarcooker.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-14 py-16 grid gap-8 items-center">
          <div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight tracking-tighter">
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
    title: "Farmer",
  },
  {
    quote:
      "I have a number of solar cookers that we use to prepare staff meals. Their usage have cut down on our fuel cost needed for meals. We heat up water when our food is done to use for washing up utensils. We also have fireless cookers that keep the dishes hot until we eat.",
    name: "Samuel O.",
    title: "Solar Cooking Promoter, Kenya",
  },
  {
    quote:
      "I am Eunice. I have solar cooked for the last three years. Solar cooking helps me to save hence I am able to spend on other important needs. Solar cooking is healthy and cheap.",
    name: "Eunice A.",
    title: "Chairperson, Women Group",
  },
  {
    quote:
      "I am Irene. I bought a cookit solar cooker two years ago and I have been using it for at least 100 days in a year whe it is sunny. For me I enjoy solar cooking because it is cheap and equally allows me to multi-task.",
    name: "Irene A.",
    title: "Community Service Worker",
  },
];

export default TestimonialsPage;
