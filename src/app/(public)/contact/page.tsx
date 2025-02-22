"use client";
import React, { useState } from "react";
import kenyageoJsonData from "../../../../public/kenya.json";
import Vendors from "@/components/Vendors/Vendors";
import { KENYAN_COUNTIES } from "@/constants/kenyanLocations";
import { sendEmail } from "@/app/actions/sendEmail";

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

  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const vendorNames = Object.values(locations).map((location) => location.name);

  const handleSubmit = async (formData: FormData) => {
    try {
      setIsSubmitting(true);

      // Add artificial delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const result = await sendEmail(formData);

      setSubmitStatus({
        success: result.success,
        message: result.success
          ? "Message sent successfully!"
          : "Failed to send message. Please try again.",
      });

      if (result.success) {
        // Wait 3 seconds before resetting form
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Reset all form states
        setSelectedCounty("");
        setSelectedVendor("");
        setSubmitStatus(null);

        // Reset form fields
        const form = document.querySelector("form") as HTMLFormElement;
        if (form) form.reset();
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              collaboration opportunities. We&apos;re here to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-background text-foreground">
        <div className="container mx-auto flex flex-col gap-8 items-stretch py-16">
          {/* Form Section */}
          <div className="p-8">
            <p className="text-title-small font-semibold text-accent">
              Get in Touch
            </p>
            <h2 className="text-display-medium font-bold leading-tight w-3/4 my-4">
              Submit Your Inquiry
            </h2>
            <form action={handleSubmit} className="space-y-4">
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
                    htmlFor="contact"
                    className="block text-body-medium font-medium">
                    Email or Phone Number
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="email"
                    className="w-full border bg-white/10 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your email or phone number"
                    pattern="^(?:\d{10}|\w+@\w+\.\w{2,3})$"
                    title="Please enter a valid email address or 10-digit phone number"
                    required
                  />
                </div>
              </div>

              {/* City/County Dropdown */}
              <div>
                <label
                  htmlFor="county"
                  className="block text-body-medium font-medium">
                  City/County
                </label>
                <select
                  id="county"
                  name="county"
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  className="w-full bg-white/10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border">
                  <option value="" disabled>
                    Select a County
                  </option>
                  {KENYAN_COUNTIES.map((county) => (
                    <option key={county} value={county}>
                      {county}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Vendor Dropdown */}
              <div>
                <label
                  htmlFor="vendor"
                  className="block text-body-medium font-medium">
                  Preferred Vendor
                </label>
                <select
                  id="vendor"
                  name="vendor"
                  value={selectedVendor}
                  onChange={(e) => setSelectedVendor(e.target.value)}
                  className="w-full bg-white/10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border">
                  <option value="" disabled>
                    Select a Vendor
                  </option>
                  {vendorNames.map((vendor) => (
                    <option key={vendor} value={vendor}>
                      {vendor}
                    </option>
                  ))}
                </select>
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
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent-focus transition-colors disabled:opacity-90 flex items-center justify-center w-32">
                {isSubmitting ? <span>Sending...</span> : "Submit"}
              </button>
            </form>

            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
        {/* Vendors Component */}
        <div className="relative">
          <Vendors locations={locations} geoJsonData={kenyageoJsonData} />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
