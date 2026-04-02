import { FOOTER_LINKS, SOCIALS } from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full md:p-8 mt-20 bg-gradient-to-b from-white to-gray-300">
      <div className="flex flex-wrap justify-between items-start mx-auto container px-14">
        {/* Left Section */}
        <div className="flex flex-col items-start max-w-lg">
          <Link className="flex items-center" href="/">
            <Image
              src="/logo.svg"
              width={240}
              height={120}
              alt="Solar Cooking Kenya"
              priority
            />
          </Link>
          <div className="mt-5 text-gray-800 text-sm">
            <p className="mt-2">
              This web page was constructed in a Solar Cooking Project by EWB
              Sweden with support from Volvoanställdas Utvecklingshjälp.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap">
            {SOCIALS?.links?.map((social, index) => (
              <Link key={index} href={social?.path} className="mr-2">
                <Image
                  className="w-6 h-6"
                  src={social.imageUrl}
                  alt={social.name}
                  height={20}
                  width={20}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:mt-0 mt-10 w-full lg:w-auto">
          <div className="flex flex-wrap justify-between">
            {FOOTER_LINKS.map((link, index) => (
              <div
                key={index}
                className="flex flex-col items-start lg:mx-10 lg:mr-0 mr-10 mb-4">
                <div className="font-bold text-black">{link.title}</div>
                <div className="my-2 text-sm text-black">
                  {link?.links?.map((linkItem: any, index: any) => (
                    <div
                      className="mt-2 cursor-pointer transition-all duration-300 ease-in-out hover:text-primary hover:font-bold"
                      key={index}>
                      <Link href={linkItem?.path}>{linkItem?.name}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Images Under Right Section */}
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center justify-center gap-8 mt-8">
              <Image
                src="/ewb_logo_green_RGB.png"
                alt="EWB Logo"
                width={180}
                height={64}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/VUH_logo.png"
                alt="VUH Logo"
                width={180}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap items-center mx-auto container mt-10 text-start text-gray-800 text-sm px-14">
        &copy; {new Date().getFullYear()} Solar Cooking Kenya. All rights
        reserved. Made with ❤️ <span className="text-red-500"></span> by
        <Link
          href="https://judefabianodev.online"
          target="_blank"
          className="text-primary hover:text-secondary ml-1">
          Fabiano J.
        </Link>
      </div>
    </footer>
  );
}
