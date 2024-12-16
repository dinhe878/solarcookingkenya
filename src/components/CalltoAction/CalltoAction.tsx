import { ArrowRightIcon, CheckCircle2, Users } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function CalltoAction() {
  return (
    <div className="container mx-auto flex h-screen items-center justify-evenly py-10">
      <div className="w-2/5 relative h-full items-center flex flex-col space-y-4 justify-center">
        <div className="absolute top-40 left-0 z-10 p-8 bg-secondary text-secondary-foreground rounded-lg text-left">
          <Users className="text-secondary-foreground w-20 h-10 mb-2" />
          <p className="text-display-medium font-bold">5000+</p>
          <p className="text-label-large">Happy Customers</p>
        </div>

        <div className="relative h-full 2xl:h-3/4 w-4/5">
          <Image
            src="/solarcooking2.jpg"
            alt="solar cooking"
            width={500}
            height={1200}
            className="h-full w-full object-fill rounded-xl"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-4 p-5">
        {/* <div className="items-center bg-secondary opacity-55 text-foreground font-bold text-title-small p-2 rounded-md w-fit">
          <p>Why Choose Solar Cookers !</p>
        </div> */}
        <h1 className="text-display-small 2xl:text-display-medium font-extrabold text-accent ">
          25+ Years Experience In Solar & Renewable Energy Solutions
        </h1>
        <div className="flex space-x-4">
          <div className="space-y-4 w-1/2">
            <p className="text-accent font-semibold ">
              To provide affordable and sustainable solar cooking solutions to
              communities in Kenya, empowering them to improve their health,
              environment, and economic well-being.
            </p>
            <p>
              We believe that everyone deserves access to clean and safe cooking
              methods, and we are committed to making solar cooking a viable
              option for all Kenyans.
            </p>
          </div>
          <div className="space-y-4 w-1/2">
            <p>
              Integrated solar cooking (ISC) can improve both health and economy
              for families that use firewood, charcoal, kerosene or gas for
              cooking. A transition to ISC will reduce deforestation and also
              reduce carbon emission and thus reduce global warming.
            </p>
            <ol className="text-body-medium space-y-4">
              <li className="flex space-x-1">
                <CheckCircle2 className="mr-2 text-secondary" />
                <p>Convinient alternative source of fuel</p>
              </li>
              <li className="flex space-x-1">
                <CheckCircle2 className="mr-2 text-secondary" />
                <p>Environmental friendly and clean</p>
              </li>
              <li className="flex space-x-1">
                <CheckCircle2 className="mr-2 text-secondary" />
                <p>Affordable and Durable solution</p>
              </li>
            </ol>
          </div>
        </div>
        <button className="w-fit bg-secondary text-secondary-foreground px-4 py-5 hover:bg-primary hover:text-primary-foreground flex items-center text-title-small font-semibold">
          <p>Learn More</p>
          <span className="ml-2">
            <ArrowRightIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
