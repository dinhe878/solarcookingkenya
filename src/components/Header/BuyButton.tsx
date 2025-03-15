import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function BuyButton() {
  const router = useRouter();

  const onBuyClick = () => {
    router.push("/contact");
  };

  return (
    <Button
      onClick={
        onBuyClick
      }
      variant="secondary"
      className="bg-secondary h-full text-secondary-foreground px-4 py-5 hover:bg-primary hover:text-primary-foreground flex items-center text-title-small font-semibold rounded-none">
      Buy a Cooker
      <span className="ml-2">
        <ArrowRightIcon />
      </span>
    </Button>
  );
}
