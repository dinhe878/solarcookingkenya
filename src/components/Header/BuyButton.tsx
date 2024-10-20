import { ArrowRightIcon } from "lucide-react";
import React from "react";

export default function BuyButton() {
  return (
    <button className="bg-secondary text-secondary-foreground px-4 py-5 hover:bg-primary hover:text-primary-foreground flex items-center text-title-small font-semibold ">
      Buy a Cooker
      <span className="ml-2">
        <ArrowRightIcon />
      </span>
    </button>
  );
}
