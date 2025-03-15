"use client"
import React from "react";
import Card from "./Card";
import { useRouter } from "next/navigation";

export default function Solutions() {
  const router = useRouter()
  const PRODUCTS = [
    {
      name: "Solar Cooker",
      description:
        "Uses solar energy for cooking, making it efficient and eco-friendly. Perfect for reducing energy costs and emissions. ",
      image: "/solarcooker.svg",
      url: "/solarcookers/solarcooker",
      features: [
        {
          id: 1,
          feature: "100% solar-powered",
        },
        {
          id: 2,
          feature: "Eco-friendly",
        },
        {
          id: 3,
          feature: "Energy cost-saving",
        },
      ],
    },
    {
      name: "Fireless Cooker",
      description:
        "Well-insulated to keep food hot for longer periods. Ideal for complementing solar cookers in meal preparation.",
      image: "/firelesscooker.svg",
      url: "/solarcookers/firelesscooker",
      features: [
        {
          id: 1,
          feature: "Keeps food warm",
        },
        {
          id: 2,
          feature: "Supports solar cooking",
        },
        {
          id: 3,
          feature: "Energy-efficient",
        },
      ],
    },
    {
      name: "Fuel Saving Stove",
      description:
        "Versatile and efficient, these stoves save fuel and cook quickly. Great for use on cloudy or rainy days.",
      image: "/fuelsavingstove.svg",
      url: "/solarcookers/fuelsavingstove",
      features: [
        {
          id: 1,
          feature: "Fuel-saving",
        },
        {
          id: 2,
          feature: "Efficient cooking",
        },
        {
          id: 3,
          feature: "Great for rainy days",
        },
      ],
    },
  ];

  return (
    <div className="py-20 min-h-screen bg-gray-200 items-center justify-center flex-col flex space-y-6">
      <div className="container mx-auto items-center justify-center px-10 flex-1 flex flex-col space-y-4">
        <div className="flex flex-col space-y-4 w-full text-center justify-center items-center">
          <h2 className="text-title-small font-semibold text-secondary">
            Bringing solar cooking to Kenya
          </h2>
          <h1 className="text-display-medium font-bold leading-tight w-1/2 text-center text-accent">
            We consider ourselves trailblazers in the field of solar and
            renewable energy
          </h1>
        </div>

        <div className="flex justify-between space-x-6 mx-auto relative ">
          {PRODUCTS.map((product, index) => {
            return <Card key={index} product={product} index={index} />;
          })}
        </div>
      </div>
      <div className="flex space-x-2 py-6">
        <h1 className="text-title-small font-semibold text-muted-foreground">
          Green and efficient solar solutions in Kenya.
        </h1>
        <button
          onClick={() => router.push("/contact")}
          className="text-title-small font-extrabold text-accent underline">
          Contact us to learn more!
        </button>
      </div>
    </div>
  );
}
