import React from "react";

export default function Solutions() {
  const PRODUCTS = [
    {
      name: "Solar Cooker",
      description:
        "Uses solar energy for cooking, making it efficient and eco-friendly. Perfect for reducing energy costs and emissions.",
      image: "/solarcooker.svg",
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
    <div className="py-10 h-screen bg-gray-200">
      <div className="container mx-auto items-center justify-between px-10">
        <h2>Bringing solar cooking to Kenya</h2>
        <p>
          We consider ourselves trailblazers in the field of solar and renewable
          energy
        </p>
        <div></div>
      </div>
    </div>
  );
}
