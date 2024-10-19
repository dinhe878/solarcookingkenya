export const ROUTES = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Solar Cooking",
    path: "#",
    dropdown: [
      { name: "Solar Cooker", path: "/solar-cooking/solar-cooker" },
      { name: "Fireless Cooker", path: "/solar-cooking/fireless-cooker" },
      { name: "Fuel Saving Stove", path: "/solar-cooking/fuel-saving-stove" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];
