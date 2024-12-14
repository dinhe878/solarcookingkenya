"use client";
import React, { useEffect, useRef } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { zoom as d3Zoom, ZoomBehavior } from "d3-zoom";
import * as d3 from "d3";
import { ArrowRightIcon } from "lucide-react";

interface Location {
  name: string;
  description?: string;
  lat: number;
  lng: number;
}

interface KenyaMapProps {
  geoJsonData: {
    type: string;
    features: any[];
  };
  locations: Record<string, Location>;
}

const LocationInfoCard = ({
  location,
  x,
  y,
}: {
  location: Location;
  x: number;
  y: number;
}) => (
  <foreignObject
    x={x + 10}
    y={y - 60}
    width="280"
    height="120"
    className="overflow-visible pointer-events-none z-50">
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700">
      <h3 className="text-amber-200 font-semibold mb-2">{location.name}</h3>
      <p className="text-slate-200 text-sm whitespace-pre-line leading-relaxed">
        {location.description || "No description available"}
      </p>
    </div>
  </foreignObject>
);

const KenyaMap: React.FC<KenyaMapProps> = ({ geoJsonData, locations }) => {
  const mapRef = useRef<SVGSVGElement | null>(null);
  const locationArray = Object.values(locations);
  const width = 800;
  const height = 600;
  const projection = geoMercator()
    .center([37.5, -1])
    .scale(5000)
    .translate([width / 2, height / 2]);

  const pathGenerator = geoPath().projection(projection);

  useEffect(() => {
    if (mapRef.current) {
      const svg = d3.select<SVGSVGElement, unknown>(mapRef.current);
      const zoomBehavior: ZoomBehavior<SVGSVGElement, unknown> = d3Zoom<
        SVGSVGElement,
        unknown
      >()
        .scaleExtent([1, 8])
        .on("zoom", (event) => {
          svg.select("g").attr("transform", event.transform);
        });

      svg.call(zoomBehavior as any);
    }
  }, []);

  return (
    <div className="py-20 min-h-screen items-center justify-center flex-col flex space-y-6 relative bg-black/5 bg-[url('/energy.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/80 z-0"></div>
      {/* Text on the top */}
      <div className="flex flex-col justify-between text-white w-full container p-8 gap-y-4 z-10">
        <h1 className="text-title-small font-semibold text-secondary">
          Pioneers of solar cooking in Kenya
        </h1>
        <div className="flex space-x-12">
          <div className="text-left w-1/2">
            <h1 className="text-display-medium font-bold leading-tight text-white">
              Solar cookers, fireless cookers & Fuel saving stoves
            </h1>
          </div>
          <div className="text-left w-1/2 space-y-4">
            <p>
              We have a network of vendors across Kenya who sell solar cookers,
              fireless cookers, and fuel-saving stoves. Our vendors are
              committed to providing sustainable and eco-friendly cooking
              options that help reduce reliance on traditional fuels, improve
              health outcomes, and contribute to environmental conservation. By
              choosing to purchase from our network, you are supporting local
              businesses and promoting the adoption of clean energy technologies
              in Kenya.
            </p>
            <button className="bg-secondary text-secondary-foreground px-4 py-5 hover:bg-primary hover:text-primary-foreground flex items-center text-title-small font-semibold">
              Buy a Cooker
              <span className="ml-2">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto relative z-10">
        <div className="w-3/5">
          <svg
            ref={mapRef}
            width="100%"
            height="100%"
            viewBox={`0 0 ${width} ${height}`}
            className="">
            <g>
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill="transparent"
              />

              {geoJsonData &&
                geoJsonData.features.map((feature, i) => (
                  <path
                    key={i}
                    d={pathGenerator(feature) || ""}
                    fill="hsl(20 14.3% 4.1%)"
                    stroke="#2a3f4c"
                    strokeWidth="1"
                  />
                ))}

              {locationArray.map((location, i) => {
                const [x, y] = projection([location.lng, location.lat]) || [
                  0, 0,
                ];

                return (
                  <g key={i} className="group">
                    <circle
                      cx={x}
                      cy={y}
                      r="12"
                      className="fill-green-400 opacity-20 animate-pulse group-hover:fill-amber-400"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="8"
                      className="fill-transparent stroke-amber-300 opacity-0 group-hover:opacity-75 transition-all duration-300"
                      strokeWidth="2"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      className="fill-green-400 transition-all duration-300 group-hover:fill-amber-400 group-hover:r-6"
                    />
                    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <LocationInfoCard location={location} x={x} y={y} />
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
        <div className="w-2/5 flex flex-col space-y-8 p-8 rounded-lg">
          <div className="flex flex-col space-y-4 text-white w-1/2 justify-self-start">
            <h2>
              <span className="text-primary font-bold text-display-large">
                10+
              </span>{" "}
              <span className="text-title-large italic ">Vendors</span>
            </h2>
            <p>
              We have more 10 vendors across kenya selling you energy efficient
              solutions at affordable prices and the list is constantly growing
            </p>
          </div>
          <div className="flex flex-col space-y-4 text-white w-1/2 justify-self-end ml-40">
            <h2>
              <span className="text-primary font-bold text-display-large">
                3
              </span>{" "}
              <span className="text-title-large italic">Energy solutions</span>
            </h2>
            <p>
              Our vendors have a wide range of products to choose from that are
              aimed at energy efficiency and keeping the world green
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
