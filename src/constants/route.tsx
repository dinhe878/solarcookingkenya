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
      { name: "Types of Cookers", path: "/solarcookers/types" },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];

export const FOOTER_ROUTES = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Solar Cooker", path: "/solarcookers/solarcooker" },
  { name: "Fireless Cooker", path: "/solarcookers/firelesscooker" },
  { name: "Fuel Saving Stove", path: "/solarcookers/fuelsavingstove" },
  { name: "Contact Us", path: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Our Solutions",
    links: [
      { name: "Solar Cooker", path: "/solarcookers/solarcooker" },
      { name: "Fireless Cooker", path: "/solarcookers/firelesscooker" },
      { name: "Fuel Saving Stove", path: "/solarcookers/fuelsavingstove" },
    ],
  },
  {
    title: "Solar Cooking Kenya",
    links: [
      { path: "/", name: "Home" },
      { path: "/about", name: "About Us" },
      { path: "/contact", name: "Contact Us" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { path: "tel:+254751530056", name: "+254 751 530056" },
      {
        path: "mailto:asulmacentre@yahoo.com",
        name: "asulmacentre@yahoo.com",
      },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {};

export const SOCIALS = {
  title: "Social",
  links: [
    {
      path: `${process.env.NEXT_PUBLIC_FACEBOOK}`,
      name: "facebook",
      imageUrl: "facebook.svg",
    },
    {
      path: `${process.env.NEXT_PUBLIC_INSTAGRAM}`,
      name: "instagram",
      imageUrl: "instagram.svg",
    },
    {
      path: `${process.env.NEXT_PUBLIC_X}`,
      name: "x",
      imageUrl: "twitterx.svg",
    },
    {
      path: `${process.env.NEXT_PUBLIC_LINKEDIN}`,
      name: "linkedin",
      imageUrl: "linkedin.svg",
    },
  ],
};
