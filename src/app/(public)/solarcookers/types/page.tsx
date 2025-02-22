"use client";

import { ArrowUpIcon, EyeIcon, LinkIcon } from "lucide-react";
import Image from "next/image";

const cookerTypes = [
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
      "In this design, flat panels concentrate the sun's rays onto a pot inside a plastic bag or under a glass bowl. To produce a panel oven you need cardboard, aluminum foil and some glue.",
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
    title: "Fresnel Lens Cookers",
    image: "/q5.png",
    description:
      "A Fresnel lens can be produced in soft plastic material. Thus it can be rolled and easy to transport. Heliac AS in Denmark produces one lens and has constructed a solar cooker where you can actually cook standing up.",
    warning:
      "Due to the risk of fire it is preferred to be constructed in steel and not wood.",
  },
  {
    title: "Scheffler reflector",
    image: "/q6.png",
    description:
      "The Scheffler reflector (named after Wolfgang Scheffler who invented it) is a special cooker which needs a sun tracker and is mainly used for institutional cooking.",
    advantages: "A great advantage is that you can cook indoors.",
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

export default function TypesOfCookers() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/energy.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[80px] font-bold leading-tight tracking-tighter">
              Types of Cookers
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              There are different types of solar cookers. Complexity and prices
              vary a lot.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-20 px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-title-small font-semibold text-secondary">
            Type of Cookers
          </h2>
          <p className="mt-4">
            There are different types of solar cookers. Complexity and prices
            vary a lot. The principles are explained below and if you want to
            learn more, have a look at the
            <a
              href="https://solarcooking.fandom.com/wiki/Introduction_to_solar_cooking"
              className="text-primary hover:text-secondary ml-1">
              Wiki Page
            </a>{" "}
            of Solar Cookers International.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cookerTypes.map((cooker, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg overflow-hidden shadow-lg flex flex-col ${
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}>
              <div className="relative h-[250px] group">
                <Image
                  src={cooker.image}
                  alt={cooker.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-xl z-10">
                  {cooker.title}
                </h3>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {cooker.description}
                </p>
                {cooker.advantages && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-secondary mb-2">
                      Advantages
                    </h4>
                    <p className="text-muted-foreground">{cooker.advantages}</p>
                  </div>
                )}
                {cooker.disadvantages && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-secondary mb-2">
                      Disadvantages
                    </h4>
                    <p className="text-muted-foreground">
                      {cooker.disadvantages}
                    </p>
                  </div>
                )}
                {cooker.temperature && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-secondary mb-2">
                      Temperature Range
                    </h4>
                    <p className="text-muted-foreground">
                      {cooker.temperature}
                    </p>
                  </div>
                )}
                {cooker.designer && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-secondary mb-2">
                      Designer
                    </h4>
                    <p className="text-muted-foreground">{cooker.designer}</p>
                  </div>
                )}
                {cooker.warning && (
                  <div className="mt-2">
                    <h4 className="font-semibold text-red-500 mb-2">Warning</h4>
                    <p className="text-muted-foreground">{cooker.warning}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80">
        <ArrowUpIcon size={24} />
      </button>
    </div>
  );
}
