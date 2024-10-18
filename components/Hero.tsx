import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-[#f4f8ff] px-10 sm:px-28 flex relative h-[60vh]">
      <div className="flex items-center h-full w-full  lg:w-1/2 relative z-20">
        <div>
          <h1 className="z-10 mb-6 text-4xl font-[550] tracking-tight text-black md:text-[48px] lg:text-[48px] leading-tight md:leading-[67.2px]">
            Hype Your Ideas <br /> With{" "}
            <span className="text-[#0c0eff]">Techype</span>
          </h1>
          <p className="mb-8 text-md text-black/80">
            As the most trusted AI software developer, we create unique AI
            solutions, innovative mobile apps, and help you hire top global
            engineers, solving all your tech problems and bringing your ideas to
            life.
          </p>
          <Button>Schedule Call</Button>
        </div>
      </div>
      <div className="absolute right-0 z-10 hidden md:flex">
        <Image
          src={"Background.svg"}
          height={400}
          width={400}
          className="object-cover w-full h-[60vh]"
          alt="Background Image"
        />
      </div>
    </section>
  );
}
