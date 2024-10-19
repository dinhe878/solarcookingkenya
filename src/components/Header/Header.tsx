"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/route";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import InfoBar from "./InfoBar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-background text-foreground ">
      <InfoBar />
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.png"
          width={200}
          height={100}
          alt="Solar Cooking Kenya"
          priority
        />

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 uppercase text-title-small font-semibold ">
          {ROUTES.map((route, index) =>
            route.dropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <button className="hover:text-secondary hover:font-bold uppercase text-title-small font-semibold  py-4 flex items-center justify-between">
                  {route.name}
                  <span className="ml-2">
                    <ChevronDown size={20} />
                  </span>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 bg-background shadow-lg w-[200px]">
                    {route.dropdown.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        href={item.path}
                        className="block px-4 py-4 hover:text-secondary-foreground hover:bg-secondary ">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={route.path}
                className="hover:text-secondary hover:font-bold  py-4">
                {route.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-800 p-4">
            {ROUTES.map((route, index) =>
              route.dropdown ? (
                <div key={index}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full text-left py-2">
                    {route.name}
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4">
                      {route.dropdown.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          href={item.path}
                          className="block py-2 hover:text-gray-300"
                          onClick={() => setMobileMenuOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={route.path}
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {route.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
