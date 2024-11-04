export const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Solar Cooking",
    path: "#",
    dropdown: [
      { name: "Solar Cooker", path: "/solarcookers/solarcooker" },
      { name: "Fireless Cooker", path: "/solarcookers/firelesscooker" },
      { name: "Fuel Saving Stove", path: "/solarcookers/fuelsavingstove" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];
