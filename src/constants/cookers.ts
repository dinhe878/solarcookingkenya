export interface CookerType {
  title: string;
  image: string;
  description: string;
  advantages?: string;
  disadvantages?: string;
  temperature?: string;
  designer?: string;
  specifications?: string;
}

const cookerTypes: CookerType[] = [
  {
    title: "Box ovens",
    image: "/q1.png",
    description:
      "This type of cooker has the advantage of slow, even cooking of large quantities of food. Variations include slanting the face toward the sun and the number of reflectors.",
    advantages:
      "Some are large enough to cook with multiple pots, also great for baking and slow cooking. They be constructed with simple materials, several high quality commercial designs also available.",
    disadvantages:
      "The box design may block light entering the cooking chamber unless the unit is tipped and cannot fry foods.",
    temperature: "135 - 200 °C (275 - 392 °F)",
  },
  {
    title: "The Conical Cooker",
    image: "/q2.png",
    description:
      "A conical solar cooker has a large cooking power and is relatively cheap. It consists of a piece of iron bent into a conical shape, which is covered at the inside by reflecting aluminum foil. Inside the conus there is a platform of blackened iron on which a blackened pan is placed.",
    advantages:
      "When using a conical cooker with a diameter of 80 cm, 1 liter of water can be brought to boiling in about 20 minutes, and when baking bread, temperatures in excess of 150 °C can be reached.",
    designer:
      "Designed by Mr. Samuel Odhiambo of Asulma Centre, Nairobi, Kenya in collaboration with Mr. Henk Blok from the foundation Solar Cooking Kozon, The Netherlands.",
  },
  {
    title: "Panel ovens",
    image: "/q3.png",
    description:
      "In this design, flat panels concentrate the sun rays onto a pot covered with polycarbonate sleeves or under a glass bowl. To produce a panel oven you need cardboard, aluminum foil and some glue.",
    advantages:
      "It is inexpensive to build or buy, and typically can be collapsed for storage or transport. Slow cooking retains flavors and nutrients, and requires little, if any, reorientation to the sun.",
    disadvantages:
      "It achieves usually not more than 110 - 170 °C (230 - 340 °F), and cannot fry foods. Homemade units are difficult to weatherproof, thus needs stabilizing after a while, or replacement.",
  },
  {
    title: "Parabolic Cookers",
    image: "/q4.png",
    description:
      "These are usually concave disks that focus the light onto the bottom of a pot. The advantage is that foods cook about as fast as on a conventional stove.",
    advantages:
      "Cooking times are similar to a traditional stovetop. High temperatures allow for food to be fried and grilled, typically 120 - 230 °C (248 - 446 °F).",
    disadvantages:
      "Requires periodic reorientation, often every fifteen minutes, which may be done with a mechanical solar tracking apparatus or manually. Generally more expensive than panel and box cookers, and require more storage space.",
  },
  {
    title: "Lyetfire",
    image: "/Lytefire.jpg",
    description:
      "Lytefire is a large solar oven used for baking, roasting or cooking. Its size makes it practical for institutional use.",
    advantages: "Lytefire is clean, powerful and robust.",
    disadvantages: "Needs an open space area, a 7 m diameter circle.",
  },
  {
    title: "Scheffler reflector",
    image: "/q6.png",
    description:
      "Invented by physicist Wolfgang Scheffler in the early 80's, Scheffler dishes have a unique fixed-focus design that enables direct cooking through a solar window onto a pot placed at the fixed focus, or through the indirect transportation of solar-generated heat - transported in steam or thermic fluid - and piped into the kitchen building, making it possible to prepare meals for over 1,000 persons with solar energy.",
    advantages:
      "A great advantage is that you can cook indoors. The solar kitchen deploys large parabolic dishes in 8 (3 kW), 16 (6 kW), and 20 (7.5 kW) m² that track the sun while focusing sun rays on a fixed pot holder, a steam generator, or a thermic fluid heater. Commercial and institutional solar kitchens may be designed and constructed to cook directly or generate steam and may be integrated with gas, steam and wood fuel systems to reduce the costs of commodity fuels by up to 60% while delivering meals for anything from 50 persons to several hundred over 200 - 270 days a year.",
    disadvantages:
      "The parabolic dish requires 2-3 manually-affected seasonal adjustments every week. Requires significant space and investment. May be manually tracked, fitted with semi-automatic gravity powered mechanical clock or by photo – sensor activated DC motors powered by solar PV.",
    temperature: "High temperatures suitable for institutional cooking",
    specifications:
      "Reflector aperture: 16m²\nNominal peak thermal power: 5.5 - 6 kW\nPot capacity: 50-100 litres\nCooking capacity: Up to 200 meals/day, depending on menu",
  },
  {
    title: "Evacuated tube cookers",
    image: "/q7.png",
    description:
      "Evacuated tube means that the cooking chamber is constructed of two layers of blown glass in the shape of a tube, where the air has been removed between the layers. Heat loss happens primarily by conduction and convection through a medium.",
    advantages:
      "With no air between the layers of glass the chamber is effectively insulated, well suited for retaining cooking heat. The chamber is so effective it often does not require a large reflector to capture sunlight.",
  },
];

export default cookerTypes;
