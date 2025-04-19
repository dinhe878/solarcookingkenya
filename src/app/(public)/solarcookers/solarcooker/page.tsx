import React from "react";
import Image from "next/image";

const SolarCookerPage = () => {
  const processSteps = [
    {
      icon: "/step1.png",
      title: "Harnessing The Sunshine",
      description:
        "A black pot captures the sunshine and turns it into warmth.",
    },
    {
      icon: "/step2.png",
      title: "Convert The Energy",
      description:
        "Aluminum foil reflects more sunshine to my pot. The wider the area is that captures the sun, the more power you get.",
    },
    {
      icon: "/step3.png",
      title: "Preserve The Energy",
      description:
        "A transparent layer above the pot preserves the heat. Heat loss can also be prevented with insulation on the sides.",
    },
    {
      icon: "/step4.png",
      title: "Cook The Food",
      description:
        "The energy preserved is then used to cook food after a given period of time.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-accent text-accent-foreground"
        style={{
          backgroundImage: `url('/Kakuma_camp_solar_cooking_solarcookers_dot_org_short.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto px-14 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-[80px] font-bold leading-tight tracking-tighter">
              Solar Cooker
            </h1>
            <p className="text-body-medium text-background max-w-2xl">
              We are helping to lead the charge in sustainable cooking solutions
              that can help you build on your past successes and prepare for the
              future. Our solutions are recognized as one of the world&apos;s
              leading eco-friendly alternatives.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20  bg-gray-200 items-center justify-center flex-col flex space-y-6">
        <div className="container mx-auto items-center justify-center px-14 flex-1 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4 w-full md:text-center justify-center md:items-center">
            <p className="text-title-small font-semibold text-secondary">
              High Performance Solutions For Multiple Needs!
            </p>
            <h2 className="text-display-medium font-bold leading-tight md:w-1/2 md:text-center text-accent">
              Utilizing Latest Processing Solutions With Decades Of Work
              Experience
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
      <div className="bg-secondary text-secondary-foreground px-14">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <div className="py-16">
            <p className="text-title-small font-semibold text-accent">
              High Performance Solutions For Multiple Needs!
            </p>
            <h2 className="text-display-medium font-bold leading-tight md:w-3/4 my-4">
              How To Use a Solar Cooker
            </h2>
            <div className="bg-white/10 p-6 rounded-lg mb-6">
              <p className="font-bold mb-4">Precaution:</p>
              <p>
                When setting up a solar cooker, ensure you stand in front of the
                cooker so that your shadow is cast on the cooker to reduce glare
                on your eyes and always use oven gloves when handling the hot
                pot!
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl mb-4">Procedure:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Place the cooker in a sunny spot with no shade.</li>
                <li>
                  Align the cooker with the sun. Look at the shadow. Adjust
                  alignment by rotating the cooker every hour.
                </li>
                <li>
                  Prepare the meal by cooking at around 9-10 am so that it is
                  ready for lunch.
                </li>
                <li>
                  Prepare the meal by cooking at around 1-2 pm so that it is
                  ready for the evening meal.
                </li>
                <li>Bake in the middle of the day when the sun is highest.</li>
                <li>Do not open cooker more than necessary.</li>
                <li>Cook without water, or with just a little.</li>
                <li>Do not dilute with cold water during the cooking.</li>
              </ol>
            </div>
          </div>
          <div className="relative h-full mr-0">
            <Image
              src="/solarcooker.svg"
              alt="Solar cooking"
              layout="fill"
              objectFit="fill"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Important Points & Advantages */}
      <div className="py-16 px-14">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-display-medium font-bold leading-tight w-1/2 my-4">
                Important To Remember
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Most inexpensive solar cookers are quite slow, therefore it
                    is important to plan ahead.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    Always be prepared to change the method of cooking if the
                    weather changes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    If you put a pot with water in the cooker to warm up before
                    preparing your ingredients, you save time by using this
                    water in your casserole or soup.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <span>
                    If you need to leave your cooker, turn it to where the sun
                    will be later. In this way you can have your meal ready when
                    you come back.
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
                    <span className="font-bold">It is hygienic</span> - no smoke
                    to cause irritation of the eyes, nose or throat. No smoke or
                    soot to make food dirty.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">It is convenient</span> - you
                    reduce the time for obtaining fuel.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">It is safe</span> - there is no
                    fire to cause burns.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">
                      Reduces water borne diseases
                    </span>{" "}
                    - as water can be pasteurized.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-secondary-foreground">
                    ✓
                  </div>
                  <div>
                    <span className="font-bold">It is economical</span> - save
                    money for buying charcoal, paraffin or firewood.
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

export default SolarCookerPage;
