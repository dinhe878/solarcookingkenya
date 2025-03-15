"use client"
import React from "react";
import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Card({
  product,
  index,
}: {
  product: any;
  index: number;
}) {
  const router = useRouter()

  const onReadMore = (url: string)=>{
    router.push(url)
  }

  return (
    <div key={index} className="flex-1 flex flex-col items-center justify-between px-10 py-16 bg-card rounded-lg rounded-b-none relative mt-24 border-b-4 hover:border-b-8 border-secondary hover:border-accent">
      <div className="absolute -top-24 left-0 z-10 p-4 rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={150}
          height={150}
        />
      </div>
      <div className="w-full flex flex-col space-y-4">
        <h1 className="text-title-large font-bold my-8">{product.name}</h1>
        <div className="h-[1px] bg-slate-400 w-full my-2" />
        <p className="mt-2 text-muted-foreground">{product.description}</p>
        <ul className="py-10 space-y-2">
          {product.features.map((feature: any) => (
            <li
              key={feature.id}
              className="flex items-center space-x-2 font-semibold  text-muted-foreground">
              <IoCheckmarkCircle className="mr-2 text-accent" />
              {feature.feature}
            </li>
          ))}
        </ul>
        <Button
         onClick={()=>onReadMore(product.url)}
         className="bg-secondary w-3/5 2xl:w-2/5 text-secondary-foreground px-4 py-5 hover:bg-accent hover:text-accent-foreground flex items-center text-title-small font-semibold">
          Read More
          <span className="ml-2">
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </div>
  );
}
