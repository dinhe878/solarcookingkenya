"use client";
import React, { useEffect, useRef, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { zoom as d3Zoom, ZoomBehavior } from "d3-zoom";
import * as d3 from "d3";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
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
  const router = useRouter();
  const mapRef = useRef<SVGSVGElement | null>(null);
  const locationArray = Object.values(locations);
  const width = 800;
  const height = 600;
  const projection = geoMercator()
    .center([37.5, -0.5]) // Slightly adjusted center for better view
    .scale(3200) // Reduced scale to show more of Kenya
    .translate([width / 2, height / 2]);

  const pathGenerator = geoPath().projection(projection);

  const [showRealMap, setShowRealMap] = useState(true);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    if (mapRef.current) {
      const svg = d3.select<SVGSVGElement, unknown>(mapRef.current);
      const zoomBehavior: ZoomBehavior<SVGSVGElement, unknown> = d3Zoom<
        SVGSVGElement,
        unknown
      >()
        .scaleExtent([0.7, 8]) // Allow zooming out to 70% to see full map
        .on("zoom", (event) => {
          svg.select("g").attr("transform", event.transform);
        });

      svg.call(zoomBehavior as any);

      // Set initial zoom to show all of Kenya nicely
      const initialScale = 0.85;
      svg.call(
        zoomBehavior.transform as any,
        d3.zoomIdentity.scale(initialScale)
      );
    }
  }, []);

  const onBuyCooker = () => {
    router.push("/contact");
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="pt-20 min-h-screen items-center justify-center flex-col flex space-y-6 relative bg-black/95 bg-[url('/Lytefire.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/85 z-0"></div>
      {/* Text on the top */}
      <div className="flex flex-col justify-between text-white w-full container p-8 gap-y-4 z-10">
        <h1 className="text-title-small font-semibold text-secondary">
          Pioneers of solar cooking in Kenya
        </h1>
        <div className="md:flex md:space-x-12 space-y-4">
          <div className="text-left md:w-1/2">
            <h1 className="text-display-medium font-bold leading-tight text-white">
              Solar cookers, fireless cookers & Fuel saving stoves
            </h1>
            {/* Toggle Buttons */}
            <div className="flex space-x-1 pt-10">
              <Button
                onClick={() => setShowRealMap(!showRealMap)}
                className="hidden lg:flex bg-secondary text-secondary-foreground px-4 py-2 hover:bg-accent transition-colors items-center space-x-2 rounded-l-lg text-body-small md:text-body-medium"
                disabled={showTable}>
                <span>
                  {showRealMap ? "Show Interactive Map" : "Show Real Map"}
                </span>
                {/* <ArrowRightIcon size={16} /> */}
              </Button>
              <Button
                onClick={toggleTable}
                className="bg-secondary text-secondary-foreground px-4 py-2 hover:bg-accent transition-colors flex items-center space-x-2 rounded-r-lg text-body-small md:text-body-medium">
                <span>{showTable ? "Show Map View" : "Show Table View"}</span>
                {/* <ArrowRightIcon size={16} /> */}
              </Button>
            </div>
          </div>
          <div className="text-left md:w-1/2 space-y-4 text-body-small md:text-body-medium">
            <p>
              We have a network of vendors across Kenya who sell solar cookers,
              fireless cookers, and fuel-saving stoves. Our vendors are
              committed to providing sustainable and eco-friendly cooking
              options that help reduce reliance on traditional fuels, improve
              health outcomes, and contribute to environmental conservation.
            </p>
            <p>
              By choosing to purchase from our network, you are supporting local
              businesses and promoting the adoption of clean energy technologies
              in Kenya.
            </p>
            <Button
              onClick={onBuyCooker}
              className="bg-secondary text-secondary-foreground px-4 py-5 hover:bg-primary hover:text-primary-foreground flex items-center text-body-small md:text-body-medium  font-semibold">
              Buy a Cooker
              <span className="ml-2">
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>

      {showTable ? (
        <div className="w-full bg-slate-800 rounded-lg overflow-visible p-6 mb-12 container mx-auto">
          <div className="overflow-x-auto max-h-[800px] overflow-y-auto mb-8 scrollbar-hide">
            <Table>
              <TableHeader className="bg-slate-700 sticky top-0">
                <TableRow className="hover:bg-slate-700 [&>th]:hover:bg-slate-700">
                  <TableHead className="text-primary !bg-slate-700">
                    Vendor Name
                  </TableHead>
                  <TableHead className="text-primary !bg-slate-700">
                    Location
                  </TableHead>
                  <TableHead className="text-primary !bg-slate-700">
                    Description
                  </TableHead>
                  <TableHead className="text-primary !bg-slate-700">
                    Contact
                  </TableHead>
                  <TableHead className="text-primary !bg-slate-700">
                    Products
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.values(locations)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((location: any, index: number) => {
                    const contactInfo = location.contact
                      ? location.contact
                          .split("\n")
                          .map((line: string, i: number) => (
                            <p
                              key={`${index}-${i}-${line}`}
                              className="text-slate-300">
                              {line}
                            </p>
                          ))
                      : "No contact information available";

                    return (
                      <TableRow
                        key={index}
                        className="border-b border-slate-700 hover:bg-slate-700/50">
                        <TableCell className="font-medium text-slate-200">
                          {location.name}
                        </TableCell>
                        <TableCell className="text-slate-300">{`${location.lat.toFixed(
                          4
                        )}, ${location.lng.toFixed(4)}`}</TableCell>
                        <TableCell className="text-slate-300 max-w-xs">
                          {location.description || "No description available"}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {contactInfo}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {location.products}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </div>
      ) : (
        <div className="w-full">
          {showRealMap ? (
            <div className="w-full h-[70vh] relative z-10">
              <iframe
                title="Vendors Map - Real View"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="geolocation"
                src="//umap.openstreetmap.fr/sv/map/vendors-of-integrated-solar-cooking-kenya_873172?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=caption&captionBar=false&captionMenus=true"
              />
            </div>
          ) : (
            <div className="flex container mx-auto relative z-10">
              <div className="w-3/5">
                <svg
                  ref={mapRef}
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${width} ${height}`}
                  className="cursor-move bg-transparent"
                  preserveAspectRatio="xMidYMid meet">
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
                      const [x, y] = projection([
                        location.lng,
                        location.lat,
                      ]) || [0, 0];

                      return (
                        <g key={i} className="group cursor-pointer">
                          <circle
                            cx={x}
                            cy={y}
                            r="14"
                            className="fill-green-400 opacity-25 animate-pulse group-hover:fill-amber-400"
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r="9"
                            className="fill-transparent stroke-amber-300 opacity-0 group-hover:opacity-75 transition-all duration-300"
                            strokeWidth="2"
                          />
                          <circle
                            cx={x}
                            cy={y}
                            r="6"
                            className="fill-green-400 transition-all duration-300 group-hover:fill-amber-400 group-hover:r-7"
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
                  <p className="text-slate-300 text-title-small">
                    We have more 10 vendors across kenya selling you energy
                    efficient solutions at affordable prices and the list is
                    constantly growing
                  </p>
                </div>
                <div className="flex flex-col space-y-4 text-white w-1/2 justify-self-end ml-40">
                  <h2>
                    <span className="text-primary font-bold text-display-large">
                      3
                    </span>{" "}
                    <span className="text-title-large italic">
                      Energy solutions
                    </span>
                  </h2>
                  <p className="text-slate-300 text-title-small">
                    Our vendors have a wide range of products to choose from
                    that are aimed at energy efficiency and keeping the world
                    green
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KenyaMap;
