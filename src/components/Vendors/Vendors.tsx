"use client";
import React, { useEffect, useRef } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { zoom as d3Zoom } from "d3-zoom";
import * as d3 from "d3";

const LocationInfoCard = ({
  location,
  x,
  y,
}: {
  location: any;
  x: number;
  y: number;
}) => (
  <foreignObject
    x={x + 10}
    y={y - 60}
    width="280"
    height="120"
    className="overflow-visible pointer-events-none">
    <div className="bg-slate-800 p-4 rounded-lg shadow-lg border border-slate-700">
      <h3 className="text-amber-200 font-semibold mb-2">{location.name}</h3>
      <p className="text-slate-200 text-sm whitespace-pre-line leading-relaxed">
        {location.description || "No description available"}
      </p>
    </div>
  </foreignObject>
);

const KenyaMap = ({
  geoJsonData,
  locations,
}: {
  geoJsonData: any;
  locations: any;
}) => {
  const mapRef = useRef();
  const locationArray = Object.values(locations);
  const width = 800;
  const height = 600;
  const projection = geoMercator()
    .center([37.5, -1])
    .scale(5000)
    .translate([width / 2, height / 2]);

  const pathGenerator = geoPath().projection(projection);

  useEffect(() => {
    const svg = d3.select(mapRef.current);
    const zoomBehavior = d3Zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event) => {
        svg.select("g").attr("transform", event.transform);
      });

    svg.call(zoomBehavior);
  }, []);

  return (
    <div className="py-20 min-h-screen items-center justify-center flex-col flex space-y-6 relative">
      {/* Background image with overlay
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/energy.jpg")',
        }}>
        {/* 90% opacity overlay */}
      {/* <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
      </div> */}

      <div className="flex container mx-auto relative z-10">
        <div className="w-full h-full">
          <svg
            ref={mapRef}
            width={width}
            height={height}
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
                geoJsonData.features.map((feature: any, i: number) => (
                  <path
                    key={i}
                    d={pathGenerator(feature)}
                    fill="hsl(20 14.3% 4.1%)"
                    stroke="#2a3f4c"
                    strokeWidth="1"
                  />
                ))}

              {locationArray.map((location, i) => {
                const [x, y] = projection([location.lng, location.lat]);

                return (
                  <g key={i} className="group">
                    {/* Outer pulsing circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="12"
                      className="fill-green-400 opacity-20 animate-pulse group-hover:fill-amber-400"
                    />
                    {/* Ring effect */}
                    <circle
                      cx={x}
                      cy={y}
                      r="8"
                      className="fill-transparent stroke-amber-300 opacity-0 group-hover:opacity-75 transition-all duration-300"
                      strokeWidth="2"
                    />
                    {/* Main marker circle with hover effect */}
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      className="fill-green-400 transition-all duration-300 group-hover:fill-amber-400 group-hover:r-6"
                    />
                    {/* Info card with pointer-events-none to prevent interference with zoom */}
                    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <LocationInfoCard location={location} x={x} y={y} />
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default KenyaMap;
