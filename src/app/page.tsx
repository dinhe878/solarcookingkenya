import CalltoAction from "@/components/CalltoAction/CalltoAction";
import FactsSection from "@/components/FactsSection/FactsSection";
import Hero from "@/components/HeroSlider/Hero";
import Solutions from "@/components/Solutions/Solutions";
import Vendors from "@/components/Vendors/Vendors";
import kenyageoJsonData from "../../public/kenya.json";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  const locations = {
    "0": {
      name: "1 - Farmers With a Vision",
      lat: 0.302694,
      lng: 34.201,
      description:
        "Contact: didacuspiusodhiambo@gmail.com\n+25472181018\nShop\nWorkshop\n\nBox cookers\nConical cookers\nFuel Saving Stoves\nFireless cookers",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "1": {
      name: "8 - Asante Self Help Group",
      lat: 0.461678,
      lng: 34.110575,
      description:
        "ISC shop located in Mayenje\nNote: position is not exact\nContact: Odhiambo Innocent Franko",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "2": {
      name: "7 - Solarfire",
      lat: 0.115806,
      lng: 34.753083,
      description:
        "Solarfire has a demo site in Kisumu where they show the Lytefire 5.\nContact: Joan Arwa, joan.arwa@solarfire.io\n+254 723 444388",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "3": {
      name: "5 - Elisha Ochieng",
      lat: -0.07162,
      lng: 34.785127,
      description:
        "Position not exact.\nSelling solar cookers and fireless baskets",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "4": {
      name: "6 - Thermofield Industrial",
      lat: -1.328542,
      lng: 36.697773,
      description:
        "Position not exact.\nScheffler reflectors\nContact: Charles Oloo\nMobile: 0721 727 830 or 0735 751 382\nwww.thermofield.co.ke\ninfo@thermofield.co.ke",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "5": {
      name: "2 - Asulma center workshop and shop",
      lat: -1.249896,
      lng: 36.883979,
      description:
        "Contact: Samuel Odhiambo\nasulmacentre@yahoo.com\n+254751530056\n\nBox cookers\nConical Cookers\nHaines Cookers\nFireless Cookers\nFuel Saving Stoves\nUpdated: 2023-02-18",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "6": {
      name: "9 - Shambani Millers Selfhelp Group",
      lat: -1.185704,
      lng: 37.446033,
      description:
        "Contact: Sarah Ndunyo\nMobile: +254 114000564\nKithimani, close to Kithimani Primary School",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "7": {
      name: "3 - Tonembee",
      lat: -0.843004,
      lng: 37.731356,
      description:
        "Solar cooking shop\nMary Mumbi and Nicholas Kitembe\nKithuia Village\nKivaa Location",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
    "8": {
      name: "4 - Athel Technology Limited",
      lat: -4.088521,
      lng: 39.625971,
      description: "Hybrid PV solar DC cookers",
      color: "default",
      url: "default",
      type: "default",
      size: "default",
    },
  };

  return (
    <div className="items-center min-h-screen ">
      <Hero />
      <CalltoAction />
      <FactsSection />
      <Solutions />
      <Vendors locations={locations} geoJsonData={kenyageoJsonData} />
      <Testimonials />
    </div>
  );
}
