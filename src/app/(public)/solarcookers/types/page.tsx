"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpIcon, EyeIcon, LinkIcon } from "lucide-react";
import Image from "next/image";
import cookerTypes from "@/constants/cookers";

export default function TypesOfCookers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/Kakuma_camp_solar_cooking_solarcookers_dot_org_short.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-14 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-display-medium font-bold leading-tight tracking-tighter">
              Types of Cookers
            </h1>
            <p className="text-title-small text-background max-w-2xl">
              There are different types of solar cookers. Complexity and prices
              vary a lot.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-20 px-4 md:px-14">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-title-small font-semibold text-secondary">
            Type of Cookers
          </h2>
          <p className="mt-4">
            There are different types of solar cookers. Complexity and prices
            vary a lot. The principles are explained below and if you want to
            learn more, have a look at the
            <a
              href="https://solarcooking.fandom.com/wiki/Introduction_to_solar_cooking"
              className="text-primary hover:text-secondary ml-1"
              target="_blank"
              rel="noopener noreferrer">
              Wiki Page
            </a>{" "}
            of Solar Cookers International.
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">
          {cookerTypes.map((cooker, index) => (
            <div
              key={index}
              className="bg-card text-black rounded-lg overflow-hidden shadow-sm cursor-pointer flex flex-col break-inside-avoid mb-6">
              <div className="relative h-[200px] group flex-shrink-0">
                <Image
                  src={cooker?.image}
                  alt={cooker?.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
                  {cooker?.title}
                </h3>
              </div>

              <div className="p-4 flex-1 flex flex-col space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cooker?.description}
                </p>

                <div className="space-y-3 flex-1">
                  {cooker.advantages && (
                    <div>
                      <h4 className="font-semibold text-secondary text-sm mb-1">
                        Advantages
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {cooker?.advantages}
                      </p>
                    </div>
                  )}
                  {cooker.disadvantages && (
                    <div>
                      <h4 className="font-semibold text-secondary text-sm mb-1">
                        Disadvantages
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {cooker?.disadvantages}
                      </p>
                    </div>
                  )}
                  {cooker.temperature && (
                    <div>
                      <h4 className="font-semibold text-secondary text-sm mb-1">
                        Temperature Range
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        {cooker?.temperature}
                      </p>
                    </div>
                  )}
                  {cooker.designer && (
                    <div>
                      <h4 className="font-semibold text-secondary text-sm mb-1">
                        Designer
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {cooker?.designer}
                      </p>
                    </div>
                  )}
                  {cooker.specifications && (
                    <div>
                      <h4 className="font-semibold text-secondary text-sm mb-1">
                        Specifications
                      </h4>
                      <p className="text-muted-foreground text-xs whitespace-pre-line leading-relaxed">
                        {cooker?.specifications}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80">
        <ArrowUpIcon size={24} />
      </Button>
    </div>
  );
}
