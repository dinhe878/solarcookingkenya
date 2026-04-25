import React from "react";
import Image from "next/image";

const RocketStovePage = () => {
  const processSteps = [
    {
      icon: "/collect_fuel.png",
      title: "Gather Fuel",
      description:
        "Collect small, dry pieces of wood or charcoal to use as fuel for the rocket stove.",
    },
    {
      icon: "/prepare_rocket.png",
      title: "Prepare the Stove",
      description:
        "Set up the rocket stove, ensuring the air inlets and fuel chamber are clear and ready for ignition.",
    },
    {
      icon: "/ignite_cooker.png",
      title: "Ignite and Adjust",
      description:
        "Light the fuel and monitor the flame, adjusting the airflow as needed to maintain an efficient, low-smoke burn.",
    },
    {
      icon: "/cook_meal.png",
      title: "Cook Your Meal",
      description:
        "Place your cooking pot or pan on the stove's surface and let the concentrated heat do the work.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/solarcooker.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-14 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight tracking-tighter">
              Fuel Saving
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              Discover the power of the fuel-efficient rocket stove, a
              game-changing solution for sustainable cooking. Reduce your fuel
              consumption, minimize smoke, and enjoy a more eco-friendly cooking
              experience.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-200 items-center justify-center flex-col flex space-y-6">
        <div className="container mx-auto items-center justify-center px-14 flex-1 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4 w-full md:text-center justify-center md:items-center">
            <p className="text-title-medium md:text-title-large font-semibold text-secondary">
              Unlock the Efficiency of Rocket Stove Technology
            </p>
            <h2 className="text-display-medium font-bold leading-tight md:w-1/2 md:text-center text-accent">
              Enjoy Fuel-Saving Cooking with the Rocket Stove
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
              How a Rocket Stove Works
            </p>
            <h2 className="text-display-medium font-bold leading-tight md:w-3/4 my-4">
              Efficient Combustion for Fuel-Saving Cooking
            </h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="font-bold mb-4">Key Principles:</p>
              <p>
                A rocket stove is a type of fuel-efficient stove that uses a
                small amount of fuel to create a hot, clean-burning flame. The
                unique design of the stove allows for more efficient combustion,
                reducing fuel consumption and minimizing smoke production
                compared to a traditional open fire.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-4">How it Works:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  The stove features a vertical chimney or &quot;rocket&quot;
                  that creates a strong airflow, drawing air into the fuel
                  chamber.
                </li>
                <li>
                  Small, dry pieces of wood or charcoal are placed in the fuel
                  chamber, where they burn hot and efficiently.
                </li>
                <li>
                  The concentrated heat is directed upwards, providing a
                  concentrated heat source for cooking.
                </li>
                <li>
                  The unique design and airflow control allow for a clean,
                  low-smoke burn, reducing the environmental impact.
                </li>
                <li>
                  Rocket stoves can be self-made or purchased, providing a
                  versatile and eco-friendly cooking solution.
                </li>
              </ol>
            </div>
          </div>
          <div className="relative h-full mr-0">
            <Image
              src="/jiko.jpg"
              alt="Rocket Stove"
              layout="fill"
              objectFit="fill"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Important Points & Advantages */}
      <div className="py-16">
        <div className="container mx-auto px-14">
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
                    Use small, dry pieces of wood or charcoal as fuel for the
                    best efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Ensure the air inlets and fuel chamber are clear for proper
                    airflow.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Monitor the flame and adjust the airflow as needed for an
                    optimal burn.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Consider using a fireless cooker in combination with the
                    rocket stove for maximum efficiency.
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
                    <span className="font-bold">Fuel-efficient</span> - Rocket
                    stoves use significantly less fuel compared to a traditional
                    open fire.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Low Smoke</span> - The efficient
                    combustion process produces less smoke, creating a cleaner
                    cooking environment.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Versatile</span> - Rocket stoves
                    can be used for a variety of cooking tasks, from boiling
                    water to simmering stews.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Portable</span> - Many rocket
                    stove designs are compact and portable, making them easy to
                    transport and use in different locations.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">Cost-effective</span> - Rocket
                    stoves can significantly reduce fuel costs compared to
                    traditional cooking methods.
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

export default RocketStovePage;
