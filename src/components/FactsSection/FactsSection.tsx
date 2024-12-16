"use client";
import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

export default function FactsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const FACTS = [
    {
      fact: "5000+",
      title: "Happy Clients",
      summary:
        "We have helped over 3500 families in Kenya to adopt solar cooking.",
      icon: MdGroups,
      button: "#",
    },
    {
      fact: "9",
      title: "Vendors",
      summary:
        "We have our vendors who will help you get the products in Kenya",
      icon: GrUserExpert,
      button: "#",
    },
    // {
    //   fact: "100%",
    //   title: "Customer Satisfaction",
    //   summary:
    //     "We have impacted more 3000 lives in rural and marginalized communities",
    //   icon: IoShieldCheckmark,
    //   button: "#",
    // },
    {
      fact: "10+",
      title: "Products",
      summary:
        "Solar cookers: the Cookit, the Haines, the Conical, the box, the Vacuum tube",
      icon: FaShoppingBasket,
      button: "#",
    },
  ];

  return (
    <div className="py-10 bg-accent text-accent-foreground min-h-screen">
      <div className="container mx-auto items-center justify-between px-10">
        <div className="flex flex-col">
          <p className="text-title-small font-semibold text-secondary">
            Why Choose Solar Cookers
          </p>
          <div className="flex space-x-4 justify-between py-5">
            <div className="w-1/2">
              <h1 className="sm:text-display-medium font-bold leading-tight w-3/4">
                Complete Economical and Safe Solution For Our Communities
              </h1>
            </div>
            <div className="w-1/2 flex flex-col space-y-10 justify-between">
              <div className="space-y-4">
                <p>
                  Integrated solar cooking (ISC) can improve both health and
                  economy for families that use firewood, charcoal, kerosene or
                  gas for cooking. A transition to ISC will reduce deforestation
                  and also reduce carbon emission and thus reduce global
                  warming.
                </p>
                <p>
                  Solar Cooker is a solution that not only saves you money but
                  also conserve the environmnent we live in.
                </p>
              </div>
              <div className="flex space-x-4 py-6">
                <button className="bg-secondary text-secondary-foreground px-4 py-5 hover:bg-primary hover:text-primary-foreground flex items-center text-title-small font-semibold">
                  Buy A cooker
                  <span className="ml-2">
                    <ArrowRightIcon />
                  </span>
                </button>
                <button className="bg-transparent border border-accent-foreground flex items-center text-title-small px-4 py-5 hover:text-accent hover:bg-accent-foreground transition-colors">
                  Explore our Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 py-8 justify-center mx-auto">
          {FACTS.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="bg-card text-foreground w-1/3 h-[400px] p-10 flex flex-col rounded-lg">
                <div className="flex-1 flex flex-col items-center justify-between space-y-4 text-center">
                  <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
                    <Icon className="" size={30} />
                  </div>
                  <h1 className="text-display-small font-bold">{fact.fact}</h1>
                  <div>
                    <p className="font-semibold">{fact.title}</p>
                    <p className="mt-2">{fact.summary}</p>
                  </div>
                  <div className="mt-4 flex w-full justify-center">
                    {hoveredIndex === index ? (
                      <button
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="flex items-center text-title-small w-2/3 justify-center p-4 hover:text-accent-foreground hover:bg-accent transition-colors rounded-full">
                        <span className="mr-4">
                          <ArrowRightIcon />
                        </span>
                        Explore
                      </button>
                    ) : (
                      <button
                        onMouseEnter={() => setHoveredIndex(index)}
                        className="bg-secondary text-secondary-foreground p-4 flex items-center text-title-small font-semibold rounded-full">
                        <ArrowRightIcon />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
