"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/route";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import InfoBar from "./InfoBar";
import BuyButton from "./BuyButton";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-background text-foreground z-50">
      <InfoBar />
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={200}
              height={100}
              alt="Solar Cooking Kenya"
              priority
              className="pl-4"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 uppercase text-title-small font-semibold items-center">
            {ROUTES.map((route, index) =>
              route.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  <button className="hover:text-secondary hover:font-bold uppercase text-title-small font-semibold py-5 flex items-center justify-between">
                    {route.name}
                    <span className="ml-2">
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 bg-background shadow-lg w-[200px] z-50">
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
                  className="hover:text-secondary hover:font-bold  py-5">
                  {route.name}
                </Link>
              )
            )}
            <div className="hidden lg:block">
              <BuyButton />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <>
            <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
            <div className="lg:hidden fixed inset-0 bg-background z-50 overflow-y-auto">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                  <Link href="/">
                    <Image
                      src="/logo.svg"
                      width={200}
                      height={100}
                      alt="Solar Cooking Kenya"
                      priority
                    />
                  </Link>
                  <button
                    className="lg:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <X size={24} />
                  </button>
                </div>
              </div>
              <nav className="container mx-auto px-4 py-6 flex flex-col min-h-[calc(100vh-148px)]">
                <div className="flex-1 space-y-4">
                  {ROUTES.map((route) =>
                    route.dropdown ? (
                      <div key={route.name} className="space-y-2">
                        <div className="font-semibold">{route.name}</div>
                        <div className="pl-4 space-y-2">
                          {route.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              className="block py-2 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={route.name}
                        href={route.path}
                        className="block py-2 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}>
                        {route.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="pt-4 border-t mt-auto">
                  <BuyButton />
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
