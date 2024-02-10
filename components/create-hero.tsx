"use client"
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const CreateHero = () => {
    const router = useRouter()
  return (
    <div className="w-full p-2 gap-y-4 rounded h-[300px] bg-[url('/pictures/housebg.jpg')] 
    bg-cover bg-center flex flex-col justify-center items-center border-b-[4px]">
      <h2 className=" font-bold font-serif text-2xl  text-white ">
        We are more than Ready to host your stunning listing,welcome to 
        the journey of finding your best buyer or tenant on our platform
        </h2>
        <p className=" font-semibold font-serif  underline txt-xl text-green-950">
          Sell out your home today or rent it ..
        </p>
        <Button  variant="outline" size="lg" className=" absolute top-1" onClick={()=>router.push("/")}>
            <h1 className=" text-3xl text-black font-bold">
              Return to Homepage
            </h1>
        </Button>
      
    </div>
  );
};