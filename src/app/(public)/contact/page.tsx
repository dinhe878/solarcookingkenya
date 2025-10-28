"use client";
import React, { useState, useRef } from "react";
import kenyageoJsonData from "../../../../public/kenya.json";
import Vendors from "@/components/Vendors/Vendors";
import { KENYAN_COUNTIES } from "@/constants/kenyanLocations";
import { locations } from "@/constants/locations";

const ContactUsPage = () => {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const vendorNames = Object.values(locations).map((location) => location.name);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const formData = new FormData(e.currentTarget);

      // Create the payload for web3forms
      const payload = {
        access_key: "6da1fd22-4f64-49b3-a164-d1a3002126ea",
        name: formData.get("name"),
        email: formData.get("email"),
        county: formData.get("county"),
        vendor: formData.get("vendor"),
        message: formData.get("message"),
        subject: "New Contact Form Submission - Integrated Solar Cooking Kenya",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });

        // Wait 3 seconds before resetting form
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Reset all form states
        setSelectedCounty("");
        setSelectedVendor("");
        setSubmitStatus(null);

        // Reset form fields using formRef
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error(result.message || "Something went wrong!");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An error occurred. Please try again.",
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
          backgroundImage: `url('/Kakuma_camp_solar_cooking_solarcookers_dot_org_short.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight tracking-tighter">
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field to prevent spam */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                aria-label="Spam prevention, please don't check this"
                tabIndex={-1}
              />

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
