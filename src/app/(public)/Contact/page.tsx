import React from "react";
import kenyageoJsonData from "../../../../public/kenya.json";
import Vendors from "@/components/Vendors/Vendors";

const ContactUsPage = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/energy.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[80px] font-bold leading-tight tracking-tighter">
              Contact Us
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              Get in touch with our team for any inquiries, feedback, or
              collaboration opportunities. We're here to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-background text-foreground">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <div className="py-16">
            <p className="text-title-small font-semibold text-accent">
              Get in Touch
            </p>
            <h2 className="text-display-medium font-bold leading-tight w-3/4 my-4">
              Submit Your Inquiry
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-body-medium font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white/10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-body-medium font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border bg-white/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-body-medium font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border bg-white/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Enter your message"
                  required></textarea>
              </div>
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent-focus transition-colors">
                Submit
              </button>
            </form>
          </div>
          <div className="relative h-full mr-0">
            <Vendors locations={locations} geoJsonData={kenyageoJsonData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
