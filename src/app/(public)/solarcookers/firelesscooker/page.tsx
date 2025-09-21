import React from "react";
import Image from "next/image";

const FirelessCookerPage = () => {
  const processSteps = [
    {
      icon: "/prepare_meal.png",
      title: "Prepare the Meal",
      description:
        "Start by cooking your food on the stove until it reaches a boiling temperature.",
    },
    {
      icon: "/store_in_cooker.png",
      title: "Transfer to Insulated Container",
      description:
        "Quickly transfer the hot food into an insulated container or basket to retain the heat.",
    },
    {
      icon: "/cover_cooker.png",
      title: "Retain the Heat",
      description:
        "The well-insulated container will keep the food hot without any additional heat source, allowing it to continue cooking.",
    },
    {
      icon: "/serve_meal.png",
      title: "Enjoy the Meal",
      description:
        "After the allotted cooking time, open the container and serve the perfectly cooked meal.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/fireless_5.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-14 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[80px] font-bold leading-tight tracking-tighter">
              Fireless Cooker
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              Discover the power of the fireless cooker, a sustainable and
              efficient way to cook your meals without the need for continuous
              heat. Unlock the secrets of this innovative solution and enjoy
              delicious, perfectly cooked dishes with minimal effort.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-200 items-center justify-center flex-col flex space-y-6">
        <div className="container mx-auto items-center justify-center px-14 flex-1 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4 w-full md:text-center justify-center md:items-center">
            <p className="text-title-medium md:text-title-large font-semibold text-secondary">
              Unlock the Power of Fireless Cooking
            </p>
            <h2 className="text-display-medium font-bold leading-tight md:w-1/2 md:text-center text-accent">
              Harness the Efficiency of Insulation to Cook with Ease
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border-b-4 hover:border-b-8 border-secondary hover:border-accent">
                <div className="h-[150px] w-[150px] relative flex items-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-title-large font-bold my-4">
                    {step.title}
                  </h3>
                  <p className="text-body-medium text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Procedure Section */}
      <div className="bg-secondary text-secondary-foreground pl-14">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <div className="py-16">
            <p className="text-title-medium md:text-title-large font-semibold text-accent">
              How a Fireless Cooker Works
            </p>
            <h2 className="text-display-medium font-bold leading-tight md:w-3/4 my-4">
              Harnessing the Power of Insulation
            </h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="font-bold mb-4">Key Principles:</p>
              <p>
                A fireless cooker, also known as a haybox or thermal cooker, is
                an insulated container that retains heat and allows food to
                continue cooking without an external heat source. By starting
                with the food at a boiling temperature, the insulation traps the
                heat and gradually cooks the meal over time.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-4">Procedure:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Prepare your meal by cooking it on the stove until boiling.
                </li>
                <li>
                  Quickly transfer the hot food into an insulated container or
                  basket.
                </li>
                <li>
                  Seal the container tightly to retain the heat and allow the
                  food to continue cooking.
                </li>
                <li>
                  Let the food sit in the insulated container for the
                  recommended cooking time, typically 2-4 hours.
                </li>
                <li>
                  When ready to serve, open the container and enjoy your
                  perfectly cooked meal.
                </li>
              </ol>
            </div>
          </div>
          <div className="relative h-full mr-0">
            <Image
              src="/fireless_6.jpg"
              alt="Fireless Cooker"
              layout="fill"
              objectFit="fill"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Important Points & Advantages */}
      <div className="py-16 px-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-display-medium font-bold leading-tight w-1/2 my-4">
                Important to Remember
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    The initial cooking time on the stove should be long enough
                    to bring the food to a full boil.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Ensure the insulated container is sealed tightly to prevent
                    heat loss.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Adjust the cooking time based on the size and type of food
                    being prepared.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    The fireless cooker can also be used to keep food warm until
                    serving.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-display-medium font-bold leading-tight w-1/2 my-4">
                Advantages
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Fuel-efficient</span> - No
                    continuous heat source is required, reducing energy
                    consumption.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Convenient</span> - Allows you
                    to prepare meals in advance and keep them warm until ready
                    to serve.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Safe</span> - No open flames or
                    hot surfaces, reducing the risk of burns or fire hazards.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Versatile</span> - Can be used
                    to cook a wide variety of dishes, from soups and stews to
                    casseroles and baked goods.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Cost-effective</span> - Reduces
                    the need for purchasing and using traditional cooking fuels.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirelessCookerPage;
