import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Hero() {
  useGSAP(() => {
    gsap.from(".arrow", {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className="min-h-screen w-full relative flex items-center">
      <div className="w-full md:w-[86%] h-[90%] m-auto border-l-2 border-[#ffffff0d] px-4 py-12 md:p-20 lg:p-52">
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
          Hi, my name is <span className="text-red-500">Muhammad Haris</span>
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4">
          I am web developer
        </h1>
        <button className="bg-red-500 text-white py-2 md:py-3 px-6 md:px-10 mt-8 md:mt-10 text-lg md:text-xl rounded-full border-2 border-transparent hover:border-white hover:bg-transparent hover:cursor-pointer duration-300 transition-all">
          Projects
        </button>
        <div className="mt-20 md:mt-36 relative">
          <h1 className="text-6xl md:text-9xl font-thin absolute arrow">
            <FaArrowDown />
          </h1>
        </div>
      </div>
    </div>
  );
}
