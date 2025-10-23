"use client";

import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm-text-5xl lg:text-6xl font-bold">
            Andrew Lo <br />
            <TypeAnimation
              sequence={["Full-stack Developer ", 2000, "Web Developer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a full stack developer doing x y z and doing a whole lotta
            nothing
          </p>
          <div>
            <button className="px-6 py-3 w-full rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/headshot.png"
              alt="picture of my head"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
