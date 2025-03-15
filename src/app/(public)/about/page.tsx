"use client";

import React from "react";

const AboutUsPage = () => {
  const aboutStats = [
    {
      number: "10+",
      label: "Vendors",
      description:
        "Across Kenya selling energy efficient solutions at affordable prices",
    },
    {
      number: "3",
      label: "Solutions",
      description:
        "Solar cookers, fireless cookers, and fuel-saving stoves for sustainable cooking",
    },
    {
      number: "47",
      label: "Counties",
      description:
        "Reaching communities across Kenya with sustainable cooking solutions",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Similar to Contact page */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/Kakuma_camp_solar_cooking_solarcookers_dot_org_short.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto py-16 grid md:grid-cols-2 gap-8 items-center px-14">
          <div>
            <h1 className="text-[80px] font-bold leading-tight tracking-tighter">
              About Us
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              Pioneering sustainable cooking solutions in Kenya through solar
              and eco-friendly technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-title-small font-semibold text-secondary">
            Our Mission
          </h2>
          <h1 className="text-display-medium font-bold leading-tight mt-4">
            Bringing Solar Cooking to Kenya
          </h1>
          <p className="text-body-medium mt-4 max-w-3xl mx-auto">
            This web page was constructed in a Solar Cooking Project by EWB
            Sweden with support from Volvoanställdas Utvecklingshjälp. We are
            committed to providing sustainable and eco-friendly cooking options
            that help reduce reliance on traditional fuels, improve health
            outcomes, and contribute to environmental conservation.
          </p>
        </div>

        {/* Stats Section - Similar to Vendors component */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {aboutStats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2>
                <span className="text-primary font-bold text-display-large">
                  {stat.number}
                </span>
                <span className="text-title-large italic ml-2">
                  {stat.label}
                </span>
              </h2>
              <p className="text-slate-600 text-title-small mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-title-small font-semibold text-secondary text-center">
            Our Partners
          </h2>
          <div className="flex items-center justify-center gap-8 mt-8">
            <img
              src="/ewb_logo_green_RGB.png"
              alt="EWB Logo"
              className="h-16 object-contain"
            />
            <img
              src="/VUH_logo.png"
              alt="VUH Logo"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
