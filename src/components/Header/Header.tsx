"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/route";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-8">
          {ROUTES.map((route, index) =>
            route.dropdown ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}>
                <button className="hover:text-gray-300">{route.name}</button>
                {showDropdown && (
                  <div className="absolute left-0 bg-gray-700 rounded shadow-lg">
                    {route.dropdown.map((item, subIndex) => (
                      <Link
                        key={subIndex}
                        href={item.path}
                        className="block px-4 py-2 hover:bg-gray-600">
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
                className="hover:text-gray-300">
                {route.name}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
